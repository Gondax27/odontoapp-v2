import { useEffect, useMemo, useState } from 'react';
import Pubsub from 'pubsub-js';

import useSidebar from '@/components/sidebar/hooks/useSidebar';
import { useAuthStore } from '@/store/auth';
import { UserService } from '@/services/user';

import type { UserRequest } from '@/types/user';

import { REFRESH_USERS } from '@/utils/pubsub-events';

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
    }
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
    handleEditUser
  };
};

export default useUsers;
