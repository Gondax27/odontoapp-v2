import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';
import Swal from 'sweetalert2';

import { UserTypeService } from '@/services/user_types';
import { UserService } from '@/services/user';

import type { UserType } from '@/types/user_types';
import type { UserRequest } from '@/types/user';

import { REFRESH_USERS } from '@/utils/pubsub-events';

interface UseUsersAsideProps {
  selectedUser: UserRequest | null;
  onShowAside: (state: boolean) => void;
}

const useUsersAside = ({ selectedUser, onShowAside }: UseUsersAsideProps) => {
  const [user, setUser] = useState({
    name: selectedUser?.name || '',
    last_name: selectedUser?.last_name || '',
    phone: selectedUser?.phone || '',
    email: selectedUser?.email || '',
    type: selectedUser?.type?._id || ''
  });

  const [loadingData, setLoadingData] = useState(true);
  const [userTypes, setUserTypes] = useState<UserType[]>([]);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const isValidSubmit = useMemo(() => Object.values(user).every((value) => value.trim().length > 0), [user]);

  useEffect(() => {
    getUserTypes();
  }, []);

  /**
   * Function that gets available user types
   */
  async function getUserTypes() {
    try {
      const userTypes = await UserTypeService.getUserTypes();
      setUserTypes(userTypes || []);
    } catch (error) {
      setUserTypes([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that changes the current user State
   * @param ev
   */
  function handleChangeUser(ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUser((prevUser) => ({
      ...prevUser,
      [ev.target.name]: ev.target.value
    }));
  }

  /**
   * Function that submits the user form
   * @param ev
   */
  async function handleSubmitUser(ev: React.FormEvent) {
    try {
      ev.preventDefault();
      setLoadingRequest(true);

      if (selectedUser) {
        await UserService.updateUser(selectedUser?._id || '', user);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'El usuario ha sido editado correctamente'
        });
      } else {
        await UserService.createUser(user);
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: 'El usuario ha sido creado correctamente'
        });
      }

      Pubsub.publish(REFRESH_USERS);
      onShowAside(false);
    } catch (error) {
      if (selectedUser) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al editar el usuario, intentalo de nuevo'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al crear el usuario, intentalo de nuevo'
        });
      }
    } finally {
      setLoadingRequest(false);
    }
  }

  return {
    /* States */
    user,
    userTypes,
    loadingData,
    loadingRequest,
    isValidSubmit,

    /** Functions */
    handleChangeUser,
    handleSubmitUser
  };
};

export default useUsersAside;
