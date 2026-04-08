import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    props.onClick(navigate, from);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;