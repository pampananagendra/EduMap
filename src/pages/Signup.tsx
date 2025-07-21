import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: name, email, password, role }),
      });
      if (!response.ok) throw new Error('Signup failed');
      // After signup, redirect to login
      setTimeout(() => navigate('/login', { replace: true }), 500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center">
        <img src="https://user-images.githubusercontent.com/47559086/186963266-233b34cc-56be-46ee-9b86-9a2561bcb5ed.PNG" alt="Signup visual" className="object-contain w-48 h-48 mb-6 mt-2" />
        <h1 className="text-3xl font-extrabold mb-2 text-blue-900 tracking-tight">College Finder</h1>
        <h2 className="text-lg font-semibold mb-7 text-blue-700">Create your account</h2>
        {error && <div className="mb-4 text-red-600 text-center w-full">{error}</div>}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base focus:outline-none focus:border-blue-500 transition"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full Name"
            required
            autoComplete="name"
          />
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base focus:outline-none focus:border-blue-500 transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            required
            autoComplete="email"
          />
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base focus:outline-none focus:border-blue-500 transition"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoComplete="new-password"
          />
          <select
            id="role"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base focus:outline-none focus:border-blue-500 transition"
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-bold shadow-md hover:bg-blue-800 transition mb-4"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-1 text-center w-full">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <span
            className="text-blue-700 hover:underline cursor-pointer font-semibold"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
