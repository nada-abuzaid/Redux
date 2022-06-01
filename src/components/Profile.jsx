import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
