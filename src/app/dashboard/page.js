// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line, Bar, Doughnut } from 'react-chartjs-2';
// import { FaUser, FaArrowLeft, FaChartLine, FaHandHoldingHeart, FaBell, FaFileAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function DashboardPage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [likedServices, setLikedServices] = useState([]);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userProfile"));
//     const likedServicesData = JSON.parse(localStorage.getItem("likedServices") || "[]");
//     setLikedServices(likedServicesData);
//     setUser(userData);
//   }, [router]);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userProfile"));
//     // if (!userData) {
//     //   router.push('/');
//     //   return;
//     // }
//     setUser(userData);
//   }, [router]);

//   // Sample data for charts
//   const benefitsData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Benefits Applied',
//         data: [12, 19, 15, 25, 22, 30],
//         borderColor: 'rgb(59, 130, 246)',
//         backgroundColor: 'rgba(59, 130, 246, 0.5)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const schemesData = {
//     labels: ['Education', 'Healthcare', 'Housing', 'Employment', 'Others'],
//     datasets: [
//       {
//         data: [30, 25, 20, 15, 10],
//         backgroundColor: [
//           'rgba(59, 130, 246, 0.8)',
//           'rgba(16, 185, 129,.8)',
//           'rgba(245, 158, 11, 0.8)',
//           'rgba(239, 68, 68, 0.8)',
//           'rgba(139, 92, 246, 0.8)',
//         ],
//       },
//     ],
//   };

//   const applicationsData = {
//     labels: ['Pending', 'Approved', 'Rejected', 'In Review'],
//     datasets: [
//       {
//         label: 'Applications Status',
//         data: [12, 19, 3, 5],
//         backgroundColor: [
//           'rgba(245, 158, 11, 0.8)',
//           'rgba(16, 185, 129, 0.8)',
//           'rgba(239, 68, 68, 0.8)',
//           'rgba(59, 130, 246, 0.8)',
//         ],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//   };

//   // if (!user) {
//   //   return null;
//   // }

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pt-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={() => router.push('/')}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             <FaArrowLeft className="text-lg" />
//             <span>Back to Home</span>
//           </button>
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
//               <FaUser className="text-white text-lg" />
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold text-gray-900"></h2>
//               <p className="text-sm text-gray-500"></p>
//             </div>
//           </div>
//         </div>

//         {/* Dashboard Content */}
//         <div className="bg-white rounded-2xl shadow-xl p-6">
//           {/* Tabs */}
//           <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
//             <button
//               onClick={() => setActiveTab('overview')}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//                 activeTab === 'overview'
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <FaChartLine className="text-lg" />
//               <span>Overview</span>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('liked')}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//                 activeTab === 'liked'
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <FaHandHoldingHeart className="text-lg" />
//               <span>Liked Schemes</span>
//             </button>
            
//             <button
//               onClick={() => setActiveTab('applications')}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
//                 activeTab === 'applications'
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <FaFileAlt className="text-lg" />
//               <span>Applications</span>
//             </button>
//           </div>

//           {/* Overview Tab */}
//           {activeTab === 'overview' && (
//             <div className="space-y-6">
//               {/* Stats Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="bg-blue-50 rounded-xl p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                       <FaFileAlt className="text-blue-600 text-xl" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Total Applications</p>
//                       <h3 className="text-2xl font-semibold text-gray-900">39</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-green-50 rounded-xl p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
//                       <FaCheckCircle className="text-green-600 text-xl" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Approved</p>
//                       <h3 className="text-2xl font-semibold text-gray-900">19</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-yellow-50 rounded-xl p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
//                       <FaClock className="text-yellow-600 text-xl" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Pending</p>
//                       <h3 className="text-2xl font-semibold text-gray-900">12</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-red-50 rounded-xl p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
//                       <FaBell className="text-red-600 text-xl" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Rejected</p>
//                       <h3 className="text-2xl font-semibold text-gray-900">3</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Charts Grid */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="bg-white rounded-xl p-6 border border-gray-100">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits Overview</h3>
//                   <div className="h-[300px]">
//                     <Line data={benefitsData} options={chartOptions} />
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-xl p-6 border border-gray-100">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Schemes Distribution</h3>
//                   <div className="h-[300px]">
//                     <Doughnut data={schemesData} options={chartOptions} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Benefits Tab */}
//           {activeTab === 'benefits' && (
//             <div className="space-y-6">
//               <div className="bg-white rounded-xl p-6 border border-gray-100">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Benefits</h3>
//                 <div className="h-[400px]">
//                   <Bar data={applicationsData} options={chartOptions} />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Applications Tab */}
//           {activeTab === 'applications' && (
//             <div className="space-y-6">
//               <div className="bg-white rounded-xl p-6 border border-gray-100">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
//                 <div className="h-[400px]">
//                   <Bar data={applicationsData} options={chartOptions} />
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {/* Liked Schemes Tab */}
//           {activeTab === 'liked' && (
//             <div className="space-y-6">
//               <div className="bg-white rounded-xl p-6 border border-gray-100">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Liked Schemes</h3>
//                 {likedServices.length === 0 ? (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">You haven't liked any schemes yet.</p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {likedServices.map((service) => (
//                       <div key={service.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                             <span className="text-xl">{service.logo}</span>
//                           </div>
//                           <div>
//                             <h4 className="font-medium text-gray-900">{service.name}</h4>
//                             <p className="text-sm text-blue-600">{service.category}</p>
//                           </div>
//                         </div>
//                         <p className="text-sm text-gray-600 line-clamp-2 mb-3">{service.description}</p>
//                         <div className="flex justify-between items-center">
//                           <div className="flex items-center gap-1">
//                             {[...Array(5)].map((_, i) => (
//                               <span
//                                 key={i}
//                                 className={`text-sm ${
//                                   i < service.popularity ? "text-yellow-400" : "text-gray-300"
//                                 }`}
//                               >
//                                 ★
//                               </span>
//                             ))}
//                           </div>
                          
//                           <a href={service.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-sm text-blue-600 hover:text-blue-800"
//                           >
//                             Apply Now
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaUser, FaArrowLeft, FaChartLine, FaHandHoldingHeart, FaFileAlt } from 'react-icons/fa';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('applications');
  const [likedServices, setLikedServices] = useState([]);
  const [categoryApplications, setCategoryApplications] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    const likedServicesData = JSON.parse(localStorage.getItem("likedServices") || "[]");
    setLikedServices(likedServicesData);
    setUser(userData);
    
    // Process liked services by category for the histogram
    if (likedServicesData.length > 0) {
      const categoryCounts = {};
      likedServicesData.forEach(service => {
        if (categoryCounts[service.category]) {
          categoryCounts[service.category]++;
        } else {
          categoryCounts[service.category] = 1;
        }
      });
      
      setCategoryApplications({
        labels: Object.keys(categoryCounts),
        datasets: [
          {
            label: 'Applications by Category',
            data: Object.values(categoryCounts),
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(239, 68, 68, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(249, 115, 22, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } else {
      // Default data if no liked services
      setCategoryApplications({
        labels: ['Education', 'Healthcare', 'Housing', 'Employment', 'Others'],
        datasets: [
          {
            label: 'Applications by Category',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(239, 68, 68, 0.8)',
              'rgba(139, 92, 246, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [router]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    setUser(userData);
  }, [router]);

  const histogramOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Applications'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Category'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Applications by Category'
      }
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-lg" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
              <FaUser className="text-white text-lg" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900"></h2>
              <p className="text-sm text-gray-500"></p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
            <button
              onClick={() => setActiveTab('applications')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'applications'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FaFileAlt className="text-lg" />
              <span>Applications</span>
            </button>
            
            <button
              onClick={() => setActiveTab('liked')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'liked'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FaHandHoldingHeart className="text-lg" />
              <span>Liked Schemes</span>
            </button>
          </div>

          {/* Applications Tab - ONLY HISTOGRAM */}
          {activeTab === 'applications' && categoryApplications && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications by Category</h3>
                <div className="h-[500px]">
                  <Bar 
                    data={categoryApplications} 
                    options={histogramOptions} 
                  />
                </div>
                {likedServices.length === 0 && (
                  <div className="text-center mt-4 text-gray-500">
                    <p>No applications in any category yet. Like some schemes to see them appear here.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Liked Schemes Tab */}
          {activeTab === 'liked' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Liked Schemes</h3>
                {likedServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't liked any schemes yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {likedServices.map((service) => (
                      <div key={service.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <span className="text-xl">{service.logo}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{service.name}</h4>
                            <p className="text-sm text-blue-600">{service.category}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${
                                  i < service.popularity ? "text-yellow-400" : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          
                          <a href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}