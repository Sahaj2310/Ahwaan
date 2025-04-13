// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { px } from 'framer-motion';

// // export default function LoginPage() {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //   });
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const router = useRouter();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError('');

// //     try {
// //       // Here you would normally call your authentication API
// //       // For example:
// //       // const response = await fetch('/api/auth/login', {
// //       //   method: 'POST',
// //       //   headers: { 'Content-Type': 'application/json' },
// //       //   body: JSON.stringify(formData)
// //       // });
      
// //       // Mock successful login for demonstration
// //       setTimeout(() => {
// //         // Store user data in localStorage
// //         localStorage.setItem('token', 'demo-token');
// //         localStorage.setItem('user', JSON.stringify({ name: 'Demo User' }));
        
// //         // Redirect to home page after successful login
// //         router.push('/');
// //       }, 1000);
      
// //     } catch (err) {
// //       setError('Login failed. Please check your credentials and try again.');
// //       console.error('Login error:', err);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-10 lg:px-10">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //           <Image 
// //             src="/images/Ahwaan.svg" 
// //             alt="Ahwaan Logo"  
// //             className="w-10 h-5"
// //           />
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Sign in to your account
// //         </h2>
// //         <p className="mt-2 text-center text-sm text-gray-600">
// //           Or{' '}
// //           <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
// //             create a new account
// //           </Link>
// //         </p>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
// //           {error && (
// //             <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
// //               <p className="text-sm text-red-700">{error}</p>
// //             </div>
// //           )}
          
// //           <form className="space-y-6" onSubmit={handleSubmit}>
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email address
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   autoComplete="email"
// //                   required
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   autoComplete="current-password"
// //                   required
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //                   placeholder="Enter your password"
// //                 />
// //               </div>
// //             </div>

// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center">
// //                 <input
// //                   id="remember-me"
// //                   name="remember-me"
// //                   type="checkbox"
// //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                 />
// //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
// //                   Remember me
// //                 </label>
// //               </div>

// //               <div className="text-sm">
// //                 <Link href="/auth/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
// //                   Forgot your password?
// //                 </Link>
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
// //               >
// //                 {isLoading ? 'Signing in...' : 'Sign in'}
// //               </button>
// //             </div>
// //           </form>

// //           <div className="mt-6">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-300"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
// //               </div>
// //             </div>

// //             <div className="mt-6 grid grid-cols-2 gap-3">
// //               <div>
// //                 <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
// //                   <span className="sr-only">Sign in with Google</span>
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path d="M12.545,12.151L12.545,12.151c0,1.054-0.787,2.044-2.088,2.044H9.21c-1.302,0-2.088-0.99-2.088-2.044v-0.823c0-1.054,0.787-2.044,2.088-2.044h1.248c1.302,0,2.088,0.99,2.088,2.044V12.151z M10.458,8.785c-1.764,0-3.207,1.443-3.207,3.207v0.823c0,1.764,1.443,3.207,3.207,3.207h1.248c1.764,0,3.207-1.443,3.207-3.207v-0.823c0-1.764-1.443-3.207-3.207-3.207H10.458z M21.205,12.669c0,4.742-3.85,8.594-8.594,8.594c-4.746,0-8.594-3.852-8.594-8.594c0-4.746,3.848-8.594,8.594-8.594C17.355,4.075,21.205,7.923,21.205,12.669z M22.182,12.669c0-5.286-4.285-9.571-9.571-9.571c-5.288,0-9.571,4.285-9.571,9.571c0,5.286,4.283,9.571,9.571,9.571C17.897,22.24,22.182,17.955,22.182,12.669z" />
// //                   </svg>
// //                 </button>
// //               </div>

// //               <div>
// //                 <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
// //                   <span className="sr-only">Sign in with Facebook</span>
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path fillRule="evenodd" d="M22,12.07C22,6.53,17.47,2,11.93,2C6.39,2,2,6.53,2,12.07C2,17.61,6.39,22,11.93,22c5.54,0,10.07-4.39,10.07-9.93z M9.35,16.53v-4.46H7.77v-1.97h1.58v-1.26c0-1.5,0.94-2.31,2.35-2.31c0.67,0,1.24,0.05,1.4,0.07v1.69h-0.96c-0.76,0-0.9,0.36-0.9,0.88v1.15h1.98l-0.26,1.97h-1.72v4.46H9.35z" clipRule="evenodd" />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {jwtDecode} from "jwt-decode"; // Install using: npm install jwt-decode


// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     setError("");

//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message);
//         return;
//       }

//       // Store token in localStorage (or use cookies for better security)
//       localStorage.setItem("token", data.token);
//       const decodedToken = jwtDecode(data.token);
//       localStorage.setItem("user", JSON.stringify(decodedToken));
//       alert("Login successful!");
//       router.push("/"); // Redirect after login
//     } catch (error) {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

//         {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}

//         <div className="mt-4">
//           <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-md" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-2 mb-3 border rounded-md" />
//         </div>

//         <button onClick={handleLogin} className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700">
//           Login
//         </button>

//         {/* Redirect Buttons */}
//         <div className="mt-6 text-center">
//           <button onClick={() => router.push("/register")} className="text-blue-600 hover:underline">
//             Don't have an account? Sign Up
//           </button>
//         </div>
//         <div className="mt-2 text-center">
//           <button onClick={() => router.push("/forgot-password")} className="text-red-600 hover:underline">
//             Forgot Password?
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode"; 

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("API error:", data.message);
        setError(data.message);
        return;
      }

      // Store token and decoded user profile
      localStorage.setItem("token", data.token);
      const decodedToken = jwtDecode(data.token);
      localStorage.setItem("profileData", JSON.stringify(decodedToken));

      // Trigger Navbar update and redirect
      window.dispatchEvent(new Event("userLoggedIn")); // Notify Navbar
      window.location.href = "/"; // Reload page for consistent state
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}

        <div className="mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 mb-3 border rounded-md"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        {/* Redirect Buttons */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/register")}
            className="text-blue-600 hover:underline"
          >
            Don't have an account? Sign Up
          </button>
        </div>
        <div className="mt-2 text-center">
          <button
            onClick={() => router.push("/forgot-password")}
            className="text-red-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}