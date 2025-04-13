"use client";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Search, ChevronRight, ChevronLeft, ArrowRight, Target, Building2, Grid, BookMarked, Share2, Info, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const PartnersList = () => {

  const [likedServices, setLikedServices] = useState([]);

  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage, setServicesPerPage] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Share functionality states
  const [shareTooltip, setShareTooltip] = useState({ visible: false, serviceId: null });
  
  // Category display states
  const [viewAllCategories, setViewAllCategories] = useState(false);
  const [categoryPage, setCategoryPage] = useState(0);
  const categoriesPerPage = 4;

  useEffect(() => {
    const savedLikedServices = JSON.parse(localStorage.getItem("likedServices") || "[]");
    setLikedServices(savedLikedServices);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const genAI = new GoogleGenerativeAI("AIzaSyDVij9WQ1kPg99UyZvR_cS2MSdqEpQMzzQ");
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const servicesPrompt = `
          Return a JSON object with two keys: "categories" and "services".

          1️⃣ "categories": An array of at least 8 diverse service categories with:
            - "category" (category name)
            - "icon" (use emoji)
            - "count" (number of services)
            - "description" (brief description)
          Include categories like Education, Healthcare, Financial Assistance, Employment, Housing, Legal Services, 
          Agriculture, Transportation, Business, etc.

          2️⃣ "services": An array of at least 30 government services with:
            - "name" (service name)
            - "logo" (use emoji)
            - "category" (matching category name)
            - "description" (detailed description)
            - "eligibility" (who can apply)
            - "documents" (required documents)
            - "link" (get link of website)
            - "id" (unique id for each service, starting from 1)
            - "popularity" (number 1-5)
          
          Ensure each category has at least 3-4 services. Provide diverse services targeting different demographics 
          and needs. Include both popular and niche services.

          Ensure the response is only JSON with no extra formatting.
        `;

        const result = await model.generateContent(servicesPrompt);
        let data = await result.response.text();
        data = data.replace(/```json|```/g, "").trim();
        let parsedData = JSON.parse(data);

        setCategories(parsedData.categories);
        setServices(parsedData.services);
      } catch (error) {
        console.error("Error fetching Gemini API data:", error);
        // Fallback data if API fails
        setCategories([
          {
            "category": "Education",
            "icon": "📚",
            "count": 6,
            "description": "Scholarships and educational support"
          },
          {
            "category": "Healthcare",
            "icon": "🏥",
            "count": 5,
            "description": "Medical benefits and health schemes"
          },
          {
            "category": "Financial",
            "icon": "💰",
            "count": 7,
            "description": "Loans, subsidies and financial aid"
          },
          {
            "category": "Employment",
            "icon": "👷",
            "count": 4,
            "description": "Jobs and career development"
          },
          {
            "category": "Housing",
            "icon": "🏠",
            "count": 3,
            "description": "Housing schemes and assistance"
          },
          {
            "category": "Agriculture",
            "icon": "🌾",
            "count": 4,
            "description": "Farmer support programs"
          },
          {
            "category": "Legal",
            "icon": "⚖️",
            "count": 3,
            "description": "Legal aid and assistance"
          },
          {
            "category": "Senior Citizens",
            "icon": "👵",
            "count": 4,
            "description": "Elder care and pension schemes"
          }
        ]);
        
        // Generate some fallback services
        const fallbackServices = [];
        const categories = ["Education", "Healthcare", "Financial", "Employment", "Housing", "Agriculture", "Legal", "Senior Citizens"];
        const descriptions = [
          "Financial support for education expenses",
          "Medical coverage for eligible citizens",
          "Low-interest loans for small businesses",
          "Job placement assistance program",
          "Affordable housing subsidy scheme",
          "Crop insurance for farmers",
          "Free legal consultation services",
          "Pension scheme for elderly"
        ];
        
        for (let i = 1; i <= 36; i++) {
          const categoryIndex = i % categories.length;
          const description = descriptions[i % descriptions.length];
          
          fallbackServices.push({
            "id": i,
            "name": `Government Service ${i}`,
            "logo": ["🏛️", "📝", "🔖", "📋", "📑", "📊"][i % 6],
            "category": categories[categoryIndex],
            "description": `${description} with additional benefits for qualifying citizens.`,
            "eligibility": "Citizens with valid documentation",
            "documents": "ID proof, address proof, income certificate",
            "link": "https://example.gov/service",
            "popularity": (i % 5) + 1
          });
        }
        
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Hide share tooltip after delay
  useEffect(() => {
    if (shareTooltip.visible) {
      const timer = setTimeout(() => {
        setShareTooltip({ visible: false, serviceId: null });
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [shareTooltip]);

  // Filter and sort services
  const filteredServices = services
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.popularity - a.popularity;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // Get current services for pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const currentServices = filteredServices.slice(0, indexOfLastService);
  
  // Get visible categories based on pagination and view all state
  const getVisibleCategories = () => {
    if (viewAllCategories) {
      return categories;
    } else {
      const startIndex = categoryPage * categoriesPerPage;
      return categories.slice(startIndex, startIndex + categoriesPerPage);
    }
  };

  const handleLike = (service) => {
    const isLiked = likedServices.some(item => item.id === service.id);
    let updatedLikedServices;
    
    if (isLiked) {
      updatedLikedServices = likedServices.filter(item => item.id !== service.id);
    } else {
      updatedLikedServices = [...likedServices, service];
    }
    
    setLikedServices(updatedLikedServices);
    localStorage.setItem("likedServices", JSON.stringify(updatedLikedServices));
  };

  // Navigation functions for category browsing
  const goToPrevCategoryPage = () => {
    setCategoryPage(prev => Math.max(0, prev - 1));
  };

  const goToNextCategoryPage = () => {
    setCategoryPage(prev => {
      const maxPage = Math.ceil(categories.length / categoriesPerPage) - 1;
      return Math.min(maxPage, prev + 1);
    });
  };

  const toggleViewAllCategories = () => {
    setViewAllCategories(!viewAllCategories);
    setCategoryPage(0); // Reset to first page when toggling view
  };

  const loadMoreServices = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1);
      setIsLoadingMore(false);
    }, 500);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("popular");
    setCurrentPage(1);
  };

  // Share functionality
  const handleShare = (service) => {
    // Create the URL to be shared (in a real app, this would be a unique service URL)
    const shareUrl = service.link;
    
    // Copy link to clipboard
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        // Show success tooltip
        setShareTooltip({ visible: true, serviceId: service.id });
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
        // Could add an error tooltip here
      });
  };

  // Calculate if there are more categories to show (for arrows)
  const hasMoreCategoriesNext = !viewAllCategories && categoryPage < Math.ceil(categories.length / categoriesPerPage) - 1;
  const hasMoreCategoriesPrev = !viewAllCategories && categoryPage > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-emerald-100"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Government Services Portal
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-cyan-200">
              Discover Government Services
            </h1>
            
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
              Find and connect with various government services tailored to your needs. Get detailed information and apply easily.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-colors group">
                <input
                  type="text"
                  placeholder="Search services by name or category..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                  }}
                  className="w-full px-6 py-4 pl-12 rounded-xl bg-transparent text-white placeholder-emerald-200 border-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <Search className="absolute left-4 top-4 text-emerald-300" size={20} />
              </div>
            </motion.div>

            {/* Quick Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              <button
                onClick={() => { resetFilters(); setSortBy("popular"); }}
                className={`px-4 py-2 text-sm font-medium text-emerald-100 ${sortBy === "popular" ? "bg-white/30" : "bg-white/10"} backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300`}
              >
                Popular
              </button>
              <button
                onClick={() => { resetFilters(); setSortBy("name"); }}
                className={`px-4 py-2 text-sm font-medium text-emerald-100 ${sortBy === "name" ? "bg-white/30" : "bg-white/10"} backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300`}
              >
                A-Z
              </button>
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-emerald-100 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C280,84 1160,84 1440,50 L1440,100 L0,100 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Active Filters */}
        {(searchQuery || selectedCategory !== "all") && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-gray-700">Active filters:</span>
                {searchQuery && (
                  <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
                    Search: {searchQuery}
                  </span>
                )}
                {selectedCategory !== "all" && (
                  <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
                    Category: {selectedCategory}
                  </span>
                )}
              </div>
              <button 
                onClick={resetFilters}
                className="text-xs text-emerald-600 hover:text-emerald-800"
              >
                Clear all
              </button>
            </div>
          </motion.div>
        )}

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <Grid className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Browse by Category</h2>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleViewAllCategories}
                className={`text-sm ${selectedCategory === "all" ? "text-emerald-600 font-medium" : "text-gray-500"} hover:text-emerald-700 flex items-center gap-1`}
              >
                {viewAllCategories ? "Show Less" : "View All"}
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={goToPrevCategoryPage}
                  disabled={!hasMoreCategoriesPrev}
                  className={`p-2 rounded-lg border border-gray-200 transition-colors ${hasMoreCategoriesPrev ? 'hover:bg-gray-50 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={goToNextCategoryPage}
                  disabled={!hasMoreCategoriesNext}
                  className={`p-2 rounded-lg border border-gray-200 transition-colors ${hasMoreCategoriesNext ? 'hover:bg-gray-50 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleCategories().map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className={`group ${selectedCategory === category.category ? "ring-2 ring-emerald-500 bg-emerald-50" : "bg-white/80"} backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer`}
                onClick={() => {
                  setSelectedCategory(selectedCategory === category.category ? "all" : category.category);
                  setCurrentPage(1); // Reset to first page on category change
                }}
              >
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {category.category}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.count} services</p>
                <p className="text-sm text-gray-600 mt-2">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedCategory === "all" ? "Available Services" : `${selectedCategory} Services`}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Showing {currentServices.length} of {filteredServices.length} services
              </span>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 9) }} // Reset delay for each page
                    whileHover={{ y: -5 }}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl">{service.logo}</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-sm text-emerald-600">{service.category}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                        <button 
    className="p-2 text-gray-400 hover:text-emerald-500 transition-colors"
    onClick={() => handleLike(service)}
  >
    <BookMarked className={`h-5 w-5 ${likedServices.some(item => item.id === service.id) ? "text-emerald-500 fill-emerald-500" : ""}`} />
  </button>
                          <div className="relative">
                            <button 
                              className="p-2 text-gray-400 hover:text-emerald-500 transition-colors"
                              onClick={() => handleShare(service)}
                            >
                              {shareTooltip.visible && shareTooltip.serviceId === service.id ? (
                                <Check className="h-5 w-5 text-emerald-500" />
                              ) : (
                                <Share2 className="h-5 w-5" />
                              )}
                            </button>
                            {shareTooltip.visible && shareTooltip.serviceId === service.id && (
                              <div className="absolute right-0 -bottom-10 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                Link copied!
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Eligibility</p>
                            <p className="text-sm text-gray-600 line-clamp-2">{service.eligibility}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Required Documents</p>
                            <p className="text-sm text-gray-600 line-clamp-2">{service.documents}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < service.popularity ? "text-yellow-400" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <Link
                          href={service.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {currentServices.length < filteredServices.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={loadMoreServices}
                    disabled={isLoadingMore}
                    className="px-6 py-3 bg-white border border-emerald-200 rounded-lg shadow-sm hover:bg-emerald-50 transition-colors flex items-center gap-2 text-emerald-700 font-medium"
                  >
                    {isLoadingMore ? (
                      <>
                        <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        Load More Services
                        <ChevronRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}

          {/* No Results Message */}
          {!loading && filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Services Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersList;