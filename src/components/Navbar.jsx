// // // 'use client';

// // // import { useState, useEffect, useContext } from 'react';
// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { usePathname } from 'next/navigation';
// // // import { SchemeContext } from '@/context/SchemeProvider';

// // // const Navbar = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
// // //   const [userData, setUserData] = useState(null);
// // //   const [userProfile, setUserProfile] = useState(null);
// // //   const pathname = usePathname();
// // //   const {setIsOpen} = useContext(SchemeContext);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // //       setIsScrolled(currentScrollTop > 55);
// // //     };

// // //     // Get user data from localStorage
// // //     const getUserData = () => {
// // //       try {
// // //         const storedProfile = localStorage.getItem('profileData');  
      
// // //         if (storedProfile) {
// // //           setUserProfile(JSON.parse(storedProfile));
// // //         }
// // //       } catch (error) {
// // //         console.error('Error getting data from localStorage:', error);
// // //       }
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     getUserData();
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const isActive = (path) => {
// // //     if (path === '/') {
// // //       return pathname === path;
// // //     }
// // //     return pathname.startsWith(path);
// // //   };

// // //   const renderAuthButton = () => {
// // //     if (userProfile) {
// // //       // If user profile exists, show user info
// // //       return (
// // //         <div className="flex items-center gap-2">
// // //           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
// // //             <span className="text-blue-600 font-semibold">
// // //               {userProfile.firstName?.[0] || 'U'}
// // //             </span>
// // //           </div>
// // //           <span className="text-sm font-medium text-gray-700">
// // //             {userProfile.firstName} {userProfile.lastName}
// // //           </span>
// // //         </div>
// // //       );
// // //     } else if (userData) {
// // //       // If only user data exists, show complete profile button
// // //       return (
// // //         <Link 
// // //           href="/profile" 
// // //           className="px-5 py-1.5 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors text-sm flex items-center gap-2"
// // //         >
// // //           <span className="material-icons text-sm">person_add</span>
// // //           Complete Profile
// // //         </Link>
// // //       );
// // //     } else {
// // //       // If no data exists, show login/register button
// // //       return (
// // //         <Link 
// // //           href="/register" 
// // //           className="px-5 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
// // //         >
// // //           Login/Register
// // //         </Link>
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <header className="w-full h-[137px] flex-shrink-0 relative">
// // //       <div className={`w-full h-[55px] flex-shrink-0 rounded-b-[20px] bg-gradient-to-r from-[#005BEA] from-[12.48%] to-[#00B5E5] to-[87.52%] shadow-md fixed top-0 left-0 flex items-center justify-between px-5 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
// // //         <div className="flex items-center gap-5">
// // //           <div className="w-8 h-8 flex-shrink-0">
// // //             <Image src="/images/3.svg" alt="Logo" width={32} height={32} className="w-full h-full object-contain" />
// // //           </div>
// // //           <div className="text-white text-center font-['Noto_Sans'] text-sm font-normal leading-[21px]">
// // //             Ministry of Electronics and<br />Information Technology
// // //           </div>
// // //           <div className="inline-flex h-8 px-3 py-1 justify-center items-center flex-shrink-0 rounded-lg bg-white">
// // //             <Image src="/images/digitalindia.svg" alt="Digital India" width={80} height={24} className="w-full h-full object-contain" />
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-4">
// // //           {/* <button className="flex items-center bg-transparent border-none cursor-pointer p-1 rounded hover:bg-white/10">
// // //             <div className="w-5 h-5 flex items-center justify-center">
// // //               <Image src="/images/Screen-reader.svg" alt="Screen Reader" width={20} height={20} className="w-full h-full object-contain" />
// // //             </div>
// // //             <div className="text-[#EBEBEB] font-['Roboto'] text-sm font-medium ml-2">Screen Reader</div>
// // //           </button> */}
// // //           {/* <button className="flex w-6 h-6 flex-col justify-center flex-shrink-0 cursor-pointer bg-transparent border-none p-0">
// // //             <span className="material-icons text-white text-xl">dark_mode</span>
// // //           </button>
// // //           <button className="flex w-[100px] h-7 px-2 py-1 justify-center items-center gap-2 flex-shrink-0 rounded border border-white bg-transparent cursor-pointer">
// // //             <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
// // //               <Image src="/images/important.svg" alt="Important" width={16} height={16} className="w-full h-full object-contain" />
// // //             </div>
// // //             <div className="text-white text-center font-['Noto_Sans'] text-sm font-normal leading-[21px]">Important</div>
// // //           </button> */}
// // //           <button className="inline-flex h-7 items-center gap-3 flex-shrink-0  cursor-pointer  border border-white rounded-md px-2 py-1" onClick={()=>setIsOpen(true)}>
// // //             <div className="text-white font-['Noto_Sans'] text-sm">Saarthi ChatBot</div>
// // //             <div className="w-5 h-5 flex items-center justify-center">
// // //               <Image src="/images/saarthi.svg" alt="Saarthi" width={20} height={20} className="w-full h-full object-contain" />
// // //             </div>
// // //           </button>
// // //           <div className="relative">
// // //             <button 
// // //               className="flex items-center gap-2 cursor-pointer  border border-white rounded-md px-2 py-1"
// // //               onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
// // //             >
// // //               <div className="text-white font-['Noto_Sans'] text-sm">English</div>
// // //               <div className="w-3 h-3">
// // //                 <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
// // //               </div>
// // //             </button>
// // //             {showLanguageDropdown && (
// // //               <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50">
// // //                 <div className="py-1">
// // //                   {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'मराठी'].map((lang) => (
// // //                     <div
// // //                       key={lang}
// // //                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// // //                       onClick={() => setShowLanguageDropdown(false)}
// // //                     >
// // //                       {lang}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className={`w-full h-[82px] flex-shrink-0 bg-white shadow-md fixed left-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[55px]'}`}>
// // //         <div className="max-w-[1521px] mx-auto h-full flex items-center justify-between px-5">
// // //           <div className="flex items-center">
// // //             <div className="w-[300px] h-[100px]">
// // //               <Image src="/images/Ahwaan.svg" alt="Ahwaan Logo" width={200} height={200} className="w-full h-full object-contain" />
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center gap-8">
// // //             <nav className="flex gap-6">
// // //               <Link 
// // //                 href="/" 
// // //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// // //                   isActive('/') ? 'text-blue-600' : ''
// // //                 }`}
// // //               >
// // //                 Home
// // //                 {isActive('/') && (
// // //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// // //                 )}
// // //               </Link>
// // //               <Link 
// // //                 href="/about" 
// // //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// // //                   isActive('/about') ? 'text-blue-600' : ''
// // //                 }`}
// // //               >
// // //                 About us
// // //                 {isActive('/about') && (
// // //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// // //                 )}
// // //               </Link>
// // //               <Link 
// // //                 href="/partners-list" 
// // //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// // //                   isActive('/partners-list') ? 'text-blue-600' : ''
// // //                 }`}
// // //               >
// // //                 Services
// // //                 {isActive('/partners-list') && (
// // //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// // //                 )}
// // //               </Link>
// // //               <Link 
// // //                 href="/dashboard" 
// // //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// // //                   isActive('/dashboard') ? 'text-blue-600' : ''
// // //                 }`}
// // //               >
// // //                 Dashboard
// // //                 {isActive('/dashboard') && (
// // //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// // //                 )}
// // //               </Link>
// // //               <Link 
// // //                 href="/schemes-section/schemes" 
// // //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// // //                   isActive('/schemes-section') ? 'text-blue-600' : ''
// // //                 }`}
// // //               >
// // //                 Schemes
// // //                 {isActive('/schemes-section') && (
// // //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// // //                 )}
// // //               </Link>
// // //             </nav>
// // //             <div className="relative">
// // //               {/* <div className="absolute left-3 top-1/2 -translate-y-1/2">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
// // //                   <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="#1C1D1F"/>
// // //                 </svg>
// // //               </div> */}
// // //               {/* <input
// // //                 type="text"
// // //                 className="w-[250px] h-9 pl-9 pr-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
// // //                 placeholder="Search Scheme"
// // //               /> */}
// // //             </div>
// // //           </div>
// // //           <div>
// // //             {renderAuthButton()}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar; 

// // 'use client';

// // import { useState, useEffect, useContext } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { SchemeContext } from '@/context/SchemeProvider';

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
// //   const [showAuthDropdown, setShowAuthDropdown] = useState(false);
// //   const [userData, setUserData] = useState(null);
// //   const [userProfile, setUserProfile] = useState(null);
// //   const pathname = usePathname();
// //   const {setIsOpen} = useContext(SchemeContext);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// //       setIsScrolled(currentScrollTop > 55);
// //     };

// //     // Get user data from localStorage
// //     const getUserData = () => {
// //       try {
// //         const storedProfile = localStorage.getItem('profileData');  
      
// //         if (storedProfile) {
// //           setUserProfile(JSON.parse(storedProfile));
// //         }
// //       } catch (error) {
// //         console.error('Error getting data from localStorage:', error);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     getUserData();
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Close dropdowns when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (showAuthDropdown && !event.target.closest('.auth-dropdown-container')) {
// //         setShowAuthDropdown(false);
// //       }
// //       if (showLanguageDropdown && !event.target.closest('.language-dropdown-container')) {
// //         setShowLanguageDropdown(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, [showAuthDropdown, showLanguageDropdown]);

// //   const isActive = (path) => {
// //     if (path === '/') {
// //       return pathname === path;
// //     }
// //     return pathname.startsWith(path);
// //   };

// //   const handleLogout = () => {
// //     // Clear user data from localStorage
// //     localStorage.removeItem('profileData');
// //     // Update state
// //     setUserProfile(null);
// //     setUserData(null);
// //     setShowAuthDropdown(false);
// //     // Redirect to home page or show message
// //     // You may want to add additional logout logic here
// //   };

// //   const renderAuthButton = () => {
// //     if (userProfile) {
// //       // If user profile exists, show user info with dropdown
// //       return (
// //         <div className="auth-dropdown-container relative">
// //           <div 
// //             className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
// //             onClick={() => setShowAuthDropdown(!showAuthDropdown)}
// //           >
// //             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
// //               <span className="text-blue-600 font-semibold">
// //                 {userProfile.firstName?.[0] || 'U'}
// //               </span>
// //             </div>
// //             <span className="text-sm font-medium text-gray-700">
// //               {userProfile.firstName} {userProfile.lastName}
// //             </span>
// //             <div className="w-3 h-3 ml-1">
// //               <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
// //             </div>
// //           </div>
          
// //           {showAuthDropdown && (
// //             <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
// //               <div className="py-1">
// //                 <Link 
// //                   href="/profile" 
// //                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
// //                   onClick={() => setShowAuthDropdown(false)}
// //                 >
// //                   My Profile
// //                 </Link>
// //                 <button 
// //                   onClick={handleLogout}
// //                   className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
// //                 >
// //                   Logout
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       );
// //     } else {
// //       // If no user is logged in, show login/register dropdown
// //       return (
// //         <div className="auth-dropdown-container relative">
// //           <button 
// //             onClick={() => setShowAuthDropdown(!showAuthDropdown)}
// //             className="px-5 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
// //           >
// //             Login/Register
// //             <div className="w-3 h-3">
// //               <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain invert" />
// //             </div>
// //           </button>
          
// //           {showAuthDropdown && (
// //             <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
// //               <div className="py-1">
// //                 <Link 
// //                   href="/auth/login" 
// //                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
// //                   onClick={() => setShowAuthDropdown(false)}
// //                 >
// //                   Login
// //                 </Link>
// //                 <Link 
// //                   href="/register" 
// //                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
// //                   onClick={() => setShowAuthDropdown(false)}
// //                 >
// //                   Create Account
// //                 </Link>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       );
// //     }
// //   };

// //   return (
// //     <header className="w-full h-[137px] flex-shrink-0 relative">
// //       <div className={`w-full h-[55px] flex-shrink-0 rounded-b-[20px] bg-gradient-to-r from-[#005BEA] from-[12.48%] to-[#00B5E5] to-[87.52%] shadow-md fixed top-0 left-0 flex items-center justify-between px-5 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
// //         <div className="flex items-center gap-5">
// //           <div className="w-8 h-8 flex-shrink-0">
// //             <Image src="/images/ministry.png" alt="Logo" width={32} height={32} className="w-full h-full object-contain" />
// //           </div>
// //           <div className="text-white text-center font-['Noto_Sans'] text-sm font-normal leading-[21px]">
// //             Ministry of Electronics and<br />Information Technology
// //           </div>
// //           <div className="inline-flex h-8 px-3 py-1 justify-center items-center flex-shrink-0 rounded-lg bg-white">
// //             <Image src="/images/digitalindia.svg" alt="Digital India" width={80} height={24} className="w-full h-full object-contain" />
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <button className="inline-flex h-7 items-center gap-3 flex-shrink-0 cursor-pointer border border-white rounded-md px-2 py-1" onClick={()=>setIsOpen(true)}>
// //             <div className="text-white font-['Noto_Sans'] text-sm">Saarthi ChatBot</div>
// //             <div className="w-5 h-5 flex items-center justify-center">
// //               <Image src="/images/saarthi.svg" alt="Saarthi" width={20} height={20} className="w-full h-full object-contain" />
// //             </div>
// //           </button>
// //           <div className="language-dropdown-container relative">
// //             <button 
// //               className="flex items-center gap-2 cursor-pointer border border-white rounded-md px-2 py-1"
// //               onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
// //             >
// //               <div className="text-white font-['Noto_Sans'] text-sm">English</div>
// //               <div className="w-3 h-3">
// //                 <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
// //               </div>
// //             </button>
// //             {showLanguageDropdown && (
// //               <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50">
// //                 <div className="py-1">
// //                   {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'मराठी'].map((lang) => (
// //                     <div
// //                       key={lang}
// //                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //                       onClick={() => setShowLanguageDropdown(false)}
// //                     >
// //                       {lang}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <div className={`w-full h-[82px] flex-shrink-0 bg-white shadow-md fixed left-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[55px]'}`}>
// //         <div className="max-w-[1521px] mx-auto h-full flex items-center justify-between px-5">
// //           <div className="flex items-center">
// //             <div className="w-[300px] h-[100px]">
// //               <Image src="/images/AHWAAN.png" alt="Ahwaan Logo" width={200} height={200} className="w-full h-full object-contain" />
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-8">
// //             <nav className="flex gap-6">
// //               <Link 
// //                 href="/" 
// //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// //                   isActive('/') ? 'text-blue-600' : ''
// //                 }`}
// //               >
// //                 Home
// //                 {isActive('/') && (
// //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// //                 )}
// //               </Link>
// //               <Link 
// //                 href="/about" 
// //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// //                   isActive('/about') ? 'text-blue-600' : ''
// //                 }`}
// //               >
// //                 About us
// //                 {isActive('/about') && (
// //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// //                 )}
// //               </Link>
// //               <Link 
// //                 href="/partners-list" 
// //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// //                   isActive('/partners-list') ? 'text-blue-600' : ''
// //                 }`}
// //               >
// //                 Services
// //                 {isActive('/partners-list') && (
// //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// //                 )}
// //               </Link>
// //               <Link 
// //                 href="/dashboard" 
// //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// //                   isActive('/dashboard') ? 'text-blue-600' : ''
// //                 }`}
// //               >
// //                 Dashboard
// //                 {isActive('/dashboard') && (
// //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// //                 )}
// //               </Link>
// //               <Link 
// //                 href="/schemes-section/schemes" 
// //                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
// //                   isActive('/schemes-section') ? 'text-blue-600' : ''
// //                 }`}
// //               >
// //                 Schemes
// //                 {isActive('/schemes-section') && (
// //                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
// //                 )}
// //               </Link>
// //             </nav>
// //           </div>
// //           <div>
// //             {renderAuthButton()}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// 'use client';

// import { useState, useEffect, useContext } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { SchemeContext } from '@/context/SchemeProvider';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
//   const [showAuthDropdown, setShowAuthDropdown] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const pathname = usePathname();
//   const {setIsOpen} = useContext(SchemeContext);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       setIsScrolled(currentScrollTop > 55);
//     };

//     // Get user data from localStorage
//     const getUserData = () => {
//       try {
//         const storedProfile = localStorage.getItem('profileData');  
      
//         if (storedProfile) {
//           setUserProfile(JSON.parse(storedProfile));
//         }
//       } catch (error) {
//         console.error('Error getting data from localStorage:', error);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     getUserData();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showAuthDropdown && !event.target.closest('.auth-dropdown-container')) {
//         setShowAuthDropdown(false);
//       }
//       if (showLanguageDropdown && !event.target.closest('.language-dropdown-container')) {
//         setShowLanguageDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [showAuthDropdown, showLanguageDropdown]);

//   const isActive = (path) => {
//     if (path === '/') {
//       return pathname === path;
//     }
//     return pathname.startsWith(path);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('profileData');
//     setUserProfile(null);
//     setShowAuthDropdown(false);
  
//     // ✅ Emit custom logout event
//     window.dispatchEvent(new Event('userLoggedOut'));
  
//     // ✅ Full page reload to ensure clean state
//     window.location.href = "/";
//   };
  
//   const renderAuthButton = () => {
//     if (userProfile) {
//       // If user profile exists, show user info with dropdown
//       return (
//         <div className="auth-dropdown-container relative">
//           <div 
//             className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
//             onClick={() => setShowAuthDropdown(!showAuthDropdown)}
//           >
//             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//               <span className="text-blue-600 font-semibold">
//                 {userProfile.firstName?.[0] || 'U'}
//               </span>
//             </div>
//             <span className="text-sm font-medium text-gray-700">
//               {userProfile.firstName} {userProfile.lastName}
//             </span>
//             <div className="w-3 h-3 ml-1">
//               <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
//             </div>
//           </div>
          
//           {showAuthDropdown && (
//             <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
//               <div className="py-1">
//                 <Link 
//                   href="/profile" 
//                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                   onClick={() => setShowAuthDropdown(false)}
//                 >
//                   My Profile
//                 </Link>
//                 <button 
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     } else {
//       // If no user is logged in, show login/register dropdown
//       return (
//         <div className="auth-dropdown-container relative">
//           <button 
//             onClick={() => setShowAuthDropdown(!showAuthDropdown)}
//             className="px-5 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
//           >
//             Login/Register
//             <div className="w-3 h-3">
//               <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain invert" />
//             </div>
//           </button>
          
//           {showAuthDropdown && (
//             <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
//               <div className="py-1">
//                 <Link 
//                   href="/auth/login" 
//                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                   onClick={() => setShowAuthDropdown(false)}
//                 >
//                   Login
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                   onClick={() => setShowAuthDropdown(false)}
//                 >
//                   Create Account
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }
//   };

//   return (
//     <header className="w-full h-[137px] flex-shrink-0 relative">
//       <div className={`w-full h-[55px] flex-shrink-0 rounded-b-[20px] bg-gradient-to-r from-[#005BEA] from-[12.48%] to-[#00B5E5] to-[87.52%] shadow-md fixed top-0 left-0 flex items-center justify-between px-5 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
//         <div className="flex items-center gap-5">
//           <div className="w-8 h-8 flex-shrink-0">
//             <Image src="/images/ministry.png" alt="Logo" width={32} height={32} className="w-full h-full object-contain" />
//           </div>
//           <div className="text-white text-center font-['Noto_Sans'] text-sm font-normal leading-[21px]">
//             Ministry of Electronics and<br />Information Technology
//           </div>
//           <div className="inline-flex h-8 px-3 py-1 justify-center items-center flex-shrink-0 rounded-lg bg-white">
//             <Image src="/images/digitalindia.svg" alt="Digital India" width={80} height={24} className="w-full h-full object-contain" />
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <button className="inline-flex h-7 items-center gap-3 flex-shrink-0 cursor-pointer border border-white rounded-md px-2 py-1" onClick={()=>setIsOpen(true)}>
//             <div className="text-white font-['Noto_Sans'] text-sm">Saarthi ChatBot</div>
//             <div className="w-5 h-5 flex items-center justify-center">
//               <Image src="/images/saarthi.svg" alt="Saarthi" width={20} height={20} className="w-full h-full object-contain" />
//             </div>
//           </button>
//           <div className="language-dropdown-container relative">
//             <button 
//               className="flex items-center gap-2 cursor-pointer border border-white rounded-md px-2 py-1"
//               onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
//             >
//               <div className="text-white font-['Noto_Sans'] text-sm">English</div>
//               <div className="w-3 h-3">
//                 <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
//               </div>
//             </button>
//             {showLanguageDropdown && (
//               <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50">
//                 <div className="py-1">
//                   {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'मराठी'].map((lang) => (
//                     <div
//                       key={lang}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => setShowLanguageDropdown(false)}
//                     >
//                       {lang}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className={`w-full h-[82px] flex-shrink-0 bg-white shadow-md fixed left-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[55px]'}`}>
//         <div className="max-w-[1521px] mx-auto h-full flex items-center justify-between px-5">
//           <div className="flex items-center">
//             <div className="w-[300px] h-[100px]">
//               <Image src="/images/AHWAAN.png" alt="Ahwaan Logo" width={200} height={200} className="w-full h-full object-contain" />
//             </div>
//           </div>
//           <div className="flex items-center gap-8">
//             <nav className="flex gap-6">
//               <Link 
//                 href="/" 
//                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
//                   isActive('/') ? 'text-blue-600' : ''
//                 }`}
//               >
//                 Home
//                 {isActive('/') && (
//                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
//                 )}
//               </Link>
//               <Link 
//                 href="/about" 
//                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
//                   isActive('/about') ? 'text-blue-600' : ''
//                 }`}
//               >
//                 About us
//                 {isActive('/about') && (
//                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
//                 )}
//               </Link>
//               <Link 
//                 href="/partners-list" 
//                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
//                   isActive('/partners-list') ? 'text-blue-600' : ''
//                 }`}
//               >
//                 Services
//                 {isActive('/partners-list') && (
//                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
//                 )}
//               </Link>
//               <Link 
//                 href="/dashboard" 
//                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
//                   isActive('/dashboard') ? 'text-blue-600' : ''
//                 }`}
//               >
//                 Dashboard
//                 {isActive('/dashboard') && (
//                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
//                 )}
//               </Link>
//               <Link 
//                 href="/schemes-section/schemes" 
//                 className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
//                   isActive('/schemes-section') ? 'text-blue-600' : ''
//                 }`}
//               >
//                 Schemes
//                 {isActive('/schemes-section') && (
//                   <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
//                 )}
//               </Link>
//             </nav>
//           </div>
//           <div>
//             {renderAuthButton()}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



'use client';

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SchemeContext } from '@/context/SchemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const {setIsOpen} = useContext(SchemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(currentScrollTop > 55);
    };

    // Get user data from localStorage
    const getUserData = () => {
      try {
        const storedProfile = localStorage.getItem('profileData');  
      
        if (storedProfile) {
          setUserProfile(JSON.parse(storedProfile));
        }
      } catch (error) {
        console.error('Error getting data from localStorage:', error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    getUserData();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAuthDropdown && !event.target.closest('.auth-dropdown-container')) {
        setShowAuthDropdown(false);
      }
      if (showLanguageDropdown && !event.target.closest('.language-dropdown-container')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAuthDropdown, showLanguageDropdown]);

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('profileData');
    setUserProfile(null);
    setShowAuthDropdown(false);
  
    // Emit custom logout event
    window.dispatchEvent(new Event('userLoggedOut'));
  
    // Full page reload to ensure clean state
    window.location.href = "/";
  };
  
  // Handle click on protected routes
  const handleProtectedRouteClick = (e, path) => {
    // If user is not logged in, prevent default navigation and redirect to login
    if (!userProfile) {
      e.preventDefault();
      router.push('/auth/login');
    }
    // If user is logged in, default navigation will occur
  };
  
  const renderAuthButton = () => {
    if (userProfile) {
      // If user profile exists, show user info with dropdown
      return (
        <div className="auth-dropdown-container relative">
          <div 
            className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setShowAuthDropdown(!showAuthDropdown)}
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {userProfile.firstName?.[0] || 'U'}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {userProfile.firstName} {userProfile.lastName}
            </span>
            <div className="w-3 h-3 ml-1">
              <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
            </div>
          </div>
          
          {showAuthDropdown && (
            <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
              <div className="py-1">
                {/* <Link 
                  href="/profile" 
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                  onClick={() => setShowAuthDropdown(false)}
                >
                  My Profile
                </Link> */}
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      // If no user is logged in, show login/register dropdown
      return (
        <div className="auth-dropdown-container relative">
          <button 
            onClick={() => setShowAuthDropdown(!showAuthDropdown)}
            className="px-5 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
          >
            Login/Register
            <div className="w-3 h-3">
              <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain invert" />
            </div>
          </button>
          
          {showAuthDropdown && (
            <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50 w-48">
              <div className="py-1">
                <Link 
                  href="/auth/login" 
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                  onClick={() => setShowAuthDropdown(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                  onClick={() => setShowAuthDropdown(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <header className="w-full h-[137px] flex-shrink-0 relative">
      <div className={`w-full h-[55px] flex-shrink-0 rounded-b-[20px] bg-gradient-to-r from-[#005BEA] from-[12.48%] to-[#00B5E5] to-[87.52%] shadow-md fixed top-0 left-0 flex items-center justify-between px-5 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 flex-shrink-0">
            <Image src="/images/ministry.png" alt="Logo" width={32} height={32} className="w-full h-full object-contain" />
          </div>
          <div className="text-white text-center font-['Noto_Sans'] text-sm font-normal leading-[21px]">
            Ministry of Electronics and<br />Information Technology
          </div>
          <div className="inline-flex h-8 px-3 py-1 justify-center items-center flex-shrink-0 rounded-lg bg-white">
            <Image src="/images/digitalindia.svg" alt="Digital India" width={80} height={24} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex h-7 items-center gap-3 flex-shrink-0 cursor-pointer border border-white rounded-md px-2 py-1" onClick={()=>setIsOpen(true)}>
            <div className="text-white font-['Noto_Sans'] text-sm">Saarthi ChatBot</div>
            <div className="w-5 h-5 flex items-center justify-center">
              <Image src="/images/saarthi.svg" alt="Saarthi" width={20} height={20} className="w-full h-full object-contain" />
            </div>
          </button>
          <div className="language-dropdown-container relative">
            <button 
              className="flex items-center gap-2 cursor-pointer border border-white rounded-md px-2 py-1"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <div className="text-white font-['Noto_Sans'] text-sm">English</div>
              <div className="w-3 h-3">
                <Image src="/images/dropdown-arrow.svg" alt="Dropdown" width={12} height={12} className="w-full h-full object-contain" />
              </div>
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded shadow-lg z-50">
                <div className="py-1">
                  {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'मराठी'].map((lang) => (
                    <div
                      key={lang}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowLanguageDropdown(false)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`w-full h-[82px] flex-shrink-0 bg-white shadow-md fixed left-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[55px]'}`}>
        <div className="max-w-[1521px] mx-auto h-full flex items-center justify-between px-5">
          <div className="flex items-center">
            <div className="w-[300px] h-[100px]">
              <Image src="/images/AHWAAN.png" alt="Ahwaan Logo" width={200} height={200} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              <Link 
                href="/" 
                className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
                  isActive('/') ? 'text-blue-600' : ''
                }`}
              >
                Home
                {isActive('/') && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </Link>
              <Link 
                href="/about" 
                className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
                  isActive('/about') ? 'text-blue-600' : ''
                }`}
              >
                About us
                {isActive('/about') && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </Link>
              <Link 
                href="/partners-list" 
                className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
                  isActive('/partners-list') ? 'text-blue-600' : ''
                }`}
                onClick={(e) => handleProtectedRouteClick(e, '/partners-list')}
              >
                Services
                {isActive('/partners-list') && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </Link>
              <Link 
                href="/dashboard" 
                className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
                  isActive('/dashboard') ? 'text-blue-600' : ''
                }`}
                onClick={(e) => handleProtectedRouteClick(e, '/dashboard')}
              >
                Dashboard
                {isActive('/dashboard') && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </Link>
              <Link 
                href="/schemes-section/schemes" 
                className={`text-[#1C1D1F] font-['Noto_Sans'] text-sm hover:text-blue-600 relative group ${
                  isActive('/schemes-section') ? 'text-blue-600' : ''
                }`}
                onClick={(e) => handleProtectedRouteClick(e, '/schemes-section/schemes')}
              >
                Schemes
                {isActive('/schemes-section') && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </Link>
            </nav>
          </div>
          <div>
            {renderAuthButton()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;