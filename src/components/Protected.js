import React, { Children } from 'react';
import  {Navigate}  from 'react-router-dom';
import Cookies  from 'universal-cookie';

const RequireAuth = (Children) => {
    const cookies = new Cookies();
    const isAuthenticated = cookies.get('token');

  return isAuthenticated ? <Navigate to="/home" /> : <Children/>;
};

export default RequireAuth;
