import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, logout } from '../features/user';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <>
      <Link
        onClick={() => {
          dispatch(setUser({ name: 'Nada', email: 'nada@gmail.com' }));
          // window.open('/profile', '_self');
        }}
        to="/profile"
      >
        Login
      </Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}
