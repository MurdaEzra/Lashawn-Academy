import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Lock, Mail, ShieldAlert, Eye, EyeOff, ShieldCheck } from 'lucide-react';
// import { supabase } from '../contexts/supabaseClient';
export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const navigate = useNavigate();
  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');
    if (!registerEmail || !registerPassword) {
      setRegisterError('Email and password are required.');
      return;
    }
    if (registerPassword !== registerConfirm) {
      setRegisterError('Passwords do not match.');
      return;
    }
    fetch('http://localhost:3001/admin-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: registerEmail, password: registerPassword })
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok || !result.success) {
          setRegisterError(result.error || 'Registration failed.');
          return;
        }
        setRegisterSuccess('Account created! You can now log in.');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterConfirm('');
      })
      .catch(() => {
        setRegisterError('Server error. Please try again.');
      });
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setError('Invalid email or password.');
        setIsLoading(false);
        return;
      }
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Server error. Please try again.');
    }
    setIsLoading(false);
  };
  return (
    <div className="min-h-screen flex">
      {/* Registration Modal */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => { setShowRegister(false); setRegisterError(''); setRegisterSuccess(''); }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Create Admin Account</h2>
            {registerError && <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded">{registerError}</div>}
            {registerSuccess && <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded">{registerSuccess}</div>}
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={e => setRegisterEmail(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="admin@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Password</label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={e => setRegisterPassword(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={registerConfirm}
                  onChange={e => setRegisterConfirm(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E8B57] text-white py-2 rounded font-semibold hover:bg-[#256d46] transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#2E8B57]/30"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}>
        </div>
        <div className="relative z-10 flex flex-col justify-center px-16 w-full">
          <img
            src="/Lashawn_Logo-removebg-preview.png"
            alt="Lashawn Logo"
            className="h-20 w-auto object-contain mb-10 brightness-0 invert self-start" />
          
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Administration
            <br />
            Management System
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            Secure portal for managing student records, registrations, fee
            structures, and institutional operations.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-[#2E8B57]/20 flex items-center justify-center mr-4">
                <ShieldCheck className="h-5 w-5 text-[#2E8B57]" />
              </div>
              <span className="text-sm">256-bit encrypted secure access</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-[#2E8B57]/20 flex items-center justify-center mr-4">
                <Lock className="h-5 w-5 text-[#2E8B57]" />
              </div>
              <span className="text-sm">Role-based access control</span>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Lashawn Driving & Computer College
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Along Eldoret Roadblock — Opposite Khetias Supermarket
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-10">
            <img
              src="/Lashawn_Logo-removebg-preview.png"
              alt="Lashawn Logo"
              className="h-14 w-auto object-contain mx-auto mb-4" />
            
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900/5 text-gray-600 text-xs font-medium mb-4">
              <ShieldAlert className="h-3.5 w-3.5 mr-1.5" />
              ADMIN ACCESS
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-2">
              Sign in to your admin account to continue
            </p>
          </div>

          {error &&
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-start text-sm">
              <ShieldAlert className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          }

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] outline-none transition-all text-gray-900"
                  placeholder="admin@lashawn.co.ke" />
                
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] outline-none transition-all text-gray-900"
                  placeholder="Enter password" />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                  
                  {showPassword ?
                  <EyeOff className="h-5 w-5" /> :

                  <Eye className="h-5 w-5" />
                  }
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-60 flex items-center justify-center">
              
              {isLoading ?
              <span className="flex items-center">
                  <svg
                  className="animate-spin h-5 w-5 mr-2"
                  viewBox="0 0 24 24">
                  
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none" />
                  
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  
                  </svg>
                  Authenticating...
                </span> :

              'Sign In'
              }
            </button>
            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-[#2E8B57] hover:underline text-sm"
                onClick={() => setShowRegister(true)}
              >
                Create an admin account
              </button>
            </div>
          </form>

          {/* Remove demo credentials display */}
        </div>
      </div>
    </div>);

}