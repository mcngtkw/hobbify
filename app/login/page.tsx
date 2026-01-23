import { Suspense } from 'react';
import LoginForm from './login-form';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        {/* HobbyHub Logo */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-3xl">H</span>
          </div>
          <span className="font-bold text-4xl text-stone-800">HobbyHub</span>
        </div>
        
        {/* Login Form */}
        <div className="w-full">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}