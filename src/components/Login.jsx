import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;