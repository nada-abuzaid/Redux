import React from 'react';
import { useSelector } from 'react-redux';

export default function Test() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Test</h1>
      <p>Name:{user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
