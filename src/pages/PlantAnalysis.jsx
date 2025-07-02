import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  BeakerIcon,
  SparklesIcon,
  ChevronDownIcon,
  ArrowPathIcon,
  ShoppingBagIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import { analyzePlant } from '../services/geminiService'

const PlantAnalysis = () => {
  const [selectedPlant, setSelectedPlant] = useState('')
  const [selectedSoil, setSelectedSoil] = useState('')
  const [plantDropdownOpen, setPlantDropdownOpen] = useState(false)
  const [soilDropdownOpen, setSoilDropdownOpen] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const plants = [
    { name: 'Tomato', value: 'tomato', icon: '🍅' },
    { name: 'Wheat', value: 'wheat', icon: '🌾' },
    { name: 'Corn', value: 'corn', icon: '🌽' },
    { name: 'Rice', value: 'rice', icon: '🌾' },
    { name: 'Potato', value: 'potato', icon: '🥔' },
    { name: 'Carrot', value: 'carrot', icon: '🥕' },
    { name: 'Lettuce', value: 'lettuce', icon: '🥬' },
    { name: 'Apple', value: 'apple', icon: '🍎' },
    { name: 'Orange', value: 'orange', icon: '🍊' },
    { name: 'Strawberry', value: 'strawberry', icon: '🍓' },
    { name: 'Cotton', value: 'cotton', icon: '☁️' },
    { name: 'Soybean', value: 'soybean', icon: '🌱' }
  ]

  const soilTypes = [
    { 
      name: 'Clay Soil', 
      value: 'clay', 
      ph: '6.0-7.0', 
      description: 'Heavy, nutrient-rich soil with high water retention capacity',
      color: 'bg-amber-100 text-amber-800'
    },
    { 
      name: 'Sandy Soil', 
      value: 'sandy', 
      ph: '6.0-7.5', 
      description: 'Light, well-draining soil with low water retention',
      color: 'bg-yellow-100 text-yellow-800'
    },
    { 
      name: 'Loamy Soil', 
      value: 'loamy', 
      ph: '6.0-7.0', 
      description: 'Ideal balanced soil with good drainage and nutrients',
      color: 'bg-green-100 text-green-800'
    },
    { 
      name: 'Silty Soil', 
      value: 'silty', 
      ph: '6.0-7.0', 
      description: 'Fine particles with high fertility and moderate drainage',
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      name: 'Peaty Soil', 
      value: 'peaty', 
      ph: '4.0-6.0', 
      description: 'Organic matter rich, acidic soil with excellent water retention',
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      name: 'Chalky Soil', 
      value: 'chalky', 
      ph: '7.0-8.5', 
      description: 'Alkaline soil with good drainage but may lack nutrients',
      color: 'bg-gray-100 text-gray-800'
    }
  ]

  const mockFertilizerRecommendations = [
    {
      name: "NPK 15-15-15 Composite Fertilizer",
      description: "Ideal for balanced plant growth and development",
      price: "$15-25",
      stores: [
        { name: "Amazon", link: "https://amazon.com", color: "bg-orange-500" },
        { name: "Trendyol", link: "https://trendyol.com", color: "bg-orange-600" },
        { name: "Home Depot", link: "https://homedepot.com", color: "bg-orange-700" }
      ]
    },
    {
      name: "Organic Compost Fertilizer",
      description: "Natural fertilizer that improves soil structure",
      price: "$10-18",
      stores: [
        { name: "Amazon", link: "https://amazon.com", color: "bg-orange-500" },
        { name: "Garden Center", link: "#", color: "bg-green-600" },
        { name: "Lowes", link: "#", color: "bg-blue-500" }
      ]
    }
  ]

  const handleAnalysis = async () => {
    if (!selectedPlant || !selectedSoil) {
      alert('Please select both plant and soil type')
      return
    }

    setIsAnalyzing(true)
    try {
      const result = await analyzePlant(selectedPlant, selectedSoil)
      setAnalysisResult({
        ...result,
        fertilizers: mockFertilizerRecommendations
      })
    } catch (error) {
      console.error('Analysis failed:', error)
      // Mock response for demo
      setAnalysisResult({
        compatibility: 92,
        recommendations: `Analysis for ${plants.find(p => p.value === selectedPlant)?.name} plant and ${soilTypes.find(s => s.value === selectedSoil)?.name} combination:

🌱 **Primary Fertilizer Recommendations:**
• Balanced NPK fertilizer (15-15-15) for optimal growth
• Apply organic compost to improve soil structure
• Use phosphorus-rich fertilizer during flowering phase

📊 **Application Schedule:**
• Weekly liquid fertilizer during growing season
• Bi-weekly applications during dormant periods
• Adjust quantity based on plant response

⚠️ **Important Notes:**
• Always test soil pH before application
• Monitor plant response and adjust accordingly
• Consider environmental factors like rainfall and temperature`,
        fertilizers: mockFertilizerRecommendations
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetAnalysis = () => {
    setAnalysisResult(null)
    setSelectedPlant('')
    setSelectedSoil('')
  }

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"></div>
        <div className="absolute inset-0 hero-pattern-professional opacity-40"></div>
        
        <div className="relative z-10 container-professional py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-8 group">
            <ArrowLeftIcon className="h-6 w-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <BeakerIcon className="h-20 w-20 text-emerald-300 float-professional" />
                <div className="absolute inset-0 h-20 w-20 bg-emerald-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-professional mb-6">
              Plant Analysis
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-normal">
              Get AI-powered fertilizer recommendations tailored to your plant and soil type
            </p>
          </motion.div>
        </div>
      </section>

      {/* Analysis Interface */}
      <section className="section-full-professional relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50"></div>
        
        <div className="relative z-10 container-professional">
          <AnimatePresence mode="wait">
            {!analysisResult ? (
              <motion.div
                key="analysis-form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                
                {/* Form Header */}
                <motion.div {...fadeIn} className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-4">
                    Enter Your Information
                  </h2>
                  <p className="text-lg text-slate-600">
                    Select your plant and soil type for accurate analysis
                  </p>
                </motion.div>

                <div className="ultra-modern-card p-8 md:p-12 border border-white/50 shadow-xl">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    
                    {/* Plant Selection */}
                    <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                      <label className="block text-xl font-bold text-slate-800 mb-4">
                        <SparklesIcon className="h-6 w-6 inline-block mr-3 text-emerald-600" />
                        Plant Type
                      </label>
                      
                      <div className="relative">
                        <button
                          onClick={() => setPlantDropdownOpen(!plantDropdownOpen)}
                          className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl text-left flex items-center justify-between hover:border-emerald-300 transition-colors duration-300 focus:outline-none focus:border-emerald-500"
                        >
                          <span className="flex items-center">
                            {selectedPlant ? (
                              <>
                                <span className="text-2xl mr-3">{plants.find(p => p.value === selectedPlant)?.icon}</span>
                                <span className="font-medium text-slate-800">
                                  {plants.find(p => p.value === selectedPlant)?.name}
                                </span>
                              </>
                            ) : (
                              <span className="text-slate-500">Select plant type</span>
                            )}
                          </span>
                          <ChevronDownIcon className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${plantDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {plantDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto"
                            >
                              {plants.map((plant) => (
                                <button
                                  key={plant.value}
                                  onClick={() => {
                                    setSelectedPlant(plant.value)
                                    setPlantDropdownOpen(false)
                                  }}
                                  className="w-full p-3 text-left hover:bg-emerald-50 transition-colors duration-200 flex items-center border-b border-slate-100 last:border-b-0"
                                >
                                  <span className="text-xl mr-3">{plant.icon}</span>
                                  <span className="font-medium text-slate-800">{plant.name}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Soil Selection */}
                    <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                      <label className="block text-xl font-bold text-slate-800 mb-4">
                        <LightBulbIcon className="h-6 w-6 inline-block mr-3 text-blue-600" />
                        Soil Type
                      </label>
                      
                      <div className="relative">
                        <button
                          onClick={() => setSoilDropdownOpen(!soilDropdownOpen)}
                          className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl text-left flex items-center justify-between hover:border-blue-300 transition-colors duration-300 focus:outline-none focus:border-blue-500"
                        >
                          <span>
                            {selectedSoil ? (
                              <span className="font-medium text-slate-800">
                                {soilTypes.find(s => s.value === selectedSoil)?.name}
                              </span>
                            ) : (
                              <span className="text-slate-500">Select soil type</span>
                            )}
                          </span>
                          <ChevronDownIcon className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${soilDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {soilDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto"
                            >
                              {soilTypes.map((soil) => (
                                <button
                                  key={soil.value}
                                  onClick={() => {
                                    setSelectedSoil(soil.value)
                                    setSoilDropdownOpen(false)
                                  }}
                                  className="w-full p-4 text-left hover:bg-blue-50 transition-colors duration-200 border-b border-slate-100 last:border-b-0"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-slate-800">{soil.name}</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${soil.color}`}>
                                      pH {soil.ph}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-600">{soil.description}</p>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                  </div>

                  {/* Analysis Button */}
                  <motion.div 
                    {...fadeIn} 
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAnalysis}
                      disabled={!selectedPlant || !selectedSoil || isAnalyzing}
                      className="modern-btn modern-btn-primary min-w-[300px] py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <>
                          <ArrowPathIcon className="h-6 w-6 mr-3 animate-spin" />
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <BeakerIcon className="h-6 w-6 mr-3" />
                          <span>Analyze & Get Recommendations</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                </div>
              </motion.div>
            ) : (
              
              /* Analysis Results */
              <motion.div
                key="analysis-results"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto space-y-8"
              >
                
                {/* Results Header */}
                <motion.div {...fadeIn} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center space-x-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-emerald-200">
                      <CheckCircleIcon className="h-8 w-8 text-emerald-500" />
                      <span className="text-2xl font-bold text-slate-800">Analysis Complete!</span>
                      <div className="text-3xl font-bold text-emerald-600">{analysisResult.compatibility}%</div>
                    </div>
                  </div>
                </motion.div>

                {/* Recommendations */}
                <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* AI Recommendations */}
                  <div className="lg:col-span-2">
                    <div className="ultra-modern-card p-8 h-full">
                      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                        <LightBulbIcon className="h-7 w-7 mr-3 text-emerald-600" />
                        AI Recommendations
                      </h3>
                      <div className="prose prose-slate max-w-none">
                        <pre className="whitespace-pre-wrap text-slate-700 font-normal text-base leading-relaxed">
                          {analysisResult.recommendations}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Selected Configuration */}
                  <div className="space-y-6">
                    <div className="ultra-modern-card p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">Selected Configuration</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{plants.find(p => p.value === selectedPlant)?.icon}</span>
                          <span className="font-medium text-slate-700">
                            {plants.find(p => p.value === selectedPlant)?.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
                          <span className="font-medium text-slate-700">
                            {soilTypes.find(s => s.value === selectedSoil)?.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={resetAnalysis}
                      className="w-full modern-btn modern-btn-secondary py-3"
                    >
                      New Analysis
                    </motion.button>
                  </div>

                </motion.div>

                {/* Fertilizer Recommendations */}
                <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                  <h3 className="text-3xl font-bold text-gradient-professional mb-8 text-center">
                    Recommended Fertilizers
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {analysisResult.fertilizers?.map((fertilizer, index) => (
                      <motion.div
                        key={index}
                        {...fadeIn}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="ultra-modern-card p-6 hover:-translate-y-1 transition-transform duration-300"
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <ShoppingBagIcon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">{fertilizer.name}</h4>
                            <p className="text-slate-600 text-sm mb-3">{fertilizer.description}</p>
                            <div className="text-2xl font-bold text-emerald-600">{fertilizer.price}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-slate-700 mb-3">Available at:</p>
                          <div className="flex flex-wrap gap-2">
                            {fertilizer.stores.map((store, storeIndex) => (
                              <motion.a
                                key={storeIndex}
                                href={store.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center px-3 py-2 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300 ${store.color}`}
                              >
                                <span>{store.name}</span>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  )
}

export default PlantAnalysis