import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Modal from './Modal';

const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    // Remove the token cookie when the component mounts
    removeCookie('token');
  }, [removeCookie]);

    return <Modal message="Logged out successfully" />;

};

export default Logout;
