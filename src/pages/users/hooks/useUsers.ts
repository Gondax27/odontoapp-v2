import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';

import useSidebar from '@/components/sidebar/hooks/useSidebar';
import { useAuthStore } from '@/store/auth';
import { UserService } from '@/services/user';

import type { UserRequest } from '@/types/user';

import { REFRESH_USERS } from '@/utils/pubsub-events';
import Swal from 'sweetalert2';

const useUsers = () => {
  const [users, setUsers] = useState<UserRequest[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserRequest | null>(null);

  const { show: showAside, setShow: setShowAside } = useSidebar();

  const user = useAuthStore((state) => state.user);

  const isPatient = useMemo(() => {
    const userType = user?.type?.name || '';
    return userType === 'Paciente';
  }, [user]);

  useEffect(() => {
    if (!isPatient) getUsers();

    Pubsub.subscribe(REFRESH_USERS, () => {
      if (!isPatient) getUsers();
    });

    return () => {
      Pubsub.unsubscribe(REFRESH_USERS);
    };
  }, [isPatient]);

  /**
   * Function that gets all users in the platform
   */
  async function getUsers() {
    try {
      const users = await UserService.getAllUsers();
      setUsers(users || []);
    } catch (error) {
      setUsers([]);
    } finally {
      setLoadingData(false);
    }
  }

  /**
   * Function that deletes a specific service
   * @param userId
   */
  function handleDeleteUser(userId: string) {
    if (userId === user?._id) return;

    Swal.fire({
      title: '¿Estás seguro de eliminar este usuario?',
      text: 'Esta acción no se podrá deshacer',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo eliminarlo',
      allowOutsideClick: !Swal.isLoading(),
      showLoaderOnConfirm: true,
      reverseButtons: true,
      preConfirm: async () => {
        try {
          await UserService.deleteUser(userId);
          return { isSuccess: true };
        } catch (error) {
          return { isSuccess: false };
        }
      }
    }).then((result) => {
      if (result.value?.isSuccess) {
        Swal.fire({
          icon: 'success',
          title: 'Ok',
          text: 'Usuario eliminado correctamente'
        });
        Pubsub.publish(REFRESH_USERS);
      } else if (!result.isDismissed) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error eliminando el usuario, por favor vuelve a intentarlo'
        });
      }
    });
  }

  /**
   * Function that opens/closes user aside
   * @param state
   */
  function onShowAside(state: boolean) {
    if (selectedUser && !state) setSelectedUser(null);
    setShowAside(state);
  }

  /**
   * Function that selects a specific user and opens to user aside
   * @param user
   */
  function handleEditUser(user: UserRequest) {
    setSelectedUser(user);
    onShowAside(true);
  }

  return {
    /** States */
    users,
    isPatient,
    loadingData,
    showAside,
    selectedUser,

    /** Functions */
    onShowAside,
    handleEditUser,
    handleDeleteUser
  };
};

export default useUsers;
