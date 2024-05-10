import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore } from '@/store/auth';

import { UserService } from '@/services/user';
import { UserTypeService } from '@/services/user_types';

import type { UserType } from '@/types/user_types';
import { INITIAL_PROFILE_STATE } from '../utils/constants';

const useProfile = () => {
  const [profile, setProfile] = useState({ ...INITIAL_PROFILE_STATE });
  const [userTypes, setUserTypes] = useState<UserType[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const user = useAuthStore(state => state.user);
  const updateUserData = useAuthStore(state => state.updateUserData);

  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente'
  }, [user]);

  useEffect(() => {
    if (user) getProfileData();
  }, [user]); // eslint-disable-line

  useEffect(() => {
    getUserTypes();
  }, []); // eslint-disable-line

  /**
   * Function that gets user profile by auth state hook
   */
  const getProfileData = useCallback(() => {
    const formatUser = {
      _id: user?._id || '',
      email: user?.email || '',
      lastName: user?.lastName || '',
      name: user?.name || '',
      phone: user?.phone || '',
      type: user?.type?._id || ''
    };
    setProfile(formatUser);
  }, [user]);

  /**
   * Function that gets available user types
   */
  const getUserTypes = useCallback(async () => {
    try {
      const userTypes = await UserTypeService.getUserTypes();
      setUserTypes(userTypes || []);
    } catch (error) {
      setUserTypes([]);
    } finally {
      setLoadingData(false);
    }
  }, []);

  /**
   * Function that changes a current info
   */
  const handleChangeAttribute = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>
      setProfile((prevProfile) => ({ ...prevProfile, [ev.target.name]: ev.target.value })),
    []
  );

  const handleChangeEditMode = useCallback(
    () =>
      setIsEdit((prevState) => {
        if (prevState) getProfileData();
        return !prevState;
      }),
    [getProfileData]
  );

  const handleClickSaveUser = async () => {
    try {
      setLoadingData(true);

      const isValidProfile = Object.values(profile).every(value => value.trim().length > 0);
      if (!isValidProfile) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Los campos del perfil no se pueden dejar vacios, por favor revisa que toda la información esté correcta y vuelve a intentarlo'
        });
        return;
      }

      const newUser = await UserService.updateUser(user?._id || '', profile);
      if (newUser) updateUserData(newUser);

      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Tu perfil ha sido guardado correctamente'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error guardando tu perfil, intentalo de nuevo'
      });
    } finally {
      setLoadingData(false)
    }
  }

  return {
    /** States */
    profile,
    isEdit,
    userTypes,
    loadingData,
    isPatient,

    /** Functions */
    handleChangeAttribute,
    handleChangeEditMode,
    handleClickSaveUser
  };
};

export default useProfile;
