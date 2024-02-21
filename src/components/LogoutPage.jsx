import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await dispatch(logOut());
        localStorage.removeItem('token');
        history.push('/login');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    handleLogout();
  }, [dispatch, history]);

  return (
    <div>
      <p>
        You have been logged out. Please wait, you will be redirected to the
        login page.
      </p>
    </div>
  );
};

export default LogoutPage;
