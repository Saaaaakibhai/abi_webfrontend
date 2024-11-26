import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to the backend login route
      const response = await axios.post('http://localhost:5000/login', { phone, password });
      alert(response.data.message);
      // Optionally store user data or token and redirect
      // localStorage.setItem('userToken', response.data.token);
      // window.location.href = '/dashboard'; // Redirect to another page after successful login
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen login-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-green-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
