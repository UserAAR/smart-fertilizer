import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BeakerIcon, 
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ChartBarIcon,
  CubeIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Main Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 hero-pattern-professional opacity-80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container-professional min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Icon + Brand */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <CubeIcon className="h-12 w-12 text-emerald-400 float-professional" />
                  <div className="absolute inset-0 h-12 w-12 bg-emerald-400/20 rounded-full blur-lg"></div>
                </div>
                <span className="text-emerald-400 text-xl font-semibold tracking-wide">Smart Fertilizer</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <motion.h1 
                  {...fadeIn}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-professional leading-tight"
                >
                  Revolutionary
                  <br />
                  <span className="text-white">Agriculture</span>
                </motion.h1>

                <motion.p 
                  {...fadeIn}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl"
                >
                  AI-powered fertilizer recommendations for modern farming. 
                  <span className="text-emerald-300 block mt-2">Optimize • Protect • Maximize</span>
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <Link to="/plant-analysis" className="group">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-primary w-full sm:w-auto group"
                  >
                    <BeakerIcon className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Plant Analysis</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                <Link to="/chatbot" className="group">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-secondary w-full sm:w-auto group"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>AI Assistant</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">95%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-white/70">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1000+</div>
                  <div className="text-sm text-white/70">Farms</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Large Feature Card */}
                <div className="ultra-modern-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <CpuChipIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">AI Analysis</h3>
                      <p className="text-sm text-gray-600">Smart recommendations</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                      <div className="h-full w-5/6 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Small Cards */}
                <div className="absolute -top-4 -right-4 ultra-modern-card p-4 w-32 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <SparklesIcon className="h-8 w-8 text-emerald-500 mb-2" />
                  <p className="text-xs font-medium text-gray-900">Eco-Friendly</p>
                </div>

                <div className="absolute -bottom-4 -left-4 ultra-modern-card p-4 w-32 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <ChartBarIcon className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="text-xs font-medium text-gray-900">Data Driven</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-emerald-400/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Renkli ve Estetik */}
      <section className="relative section-full-professional overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container-professional">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-gradient-professional mb-4"
            >
              Why Choose Smart Fertilizer?
            </motion.h2>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Advanced technology meets sustainable farming practices
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: CpuChipIcon,
                title: "AI-Powered Analysis",
                description: "Advanced machine learning algorithms analyze your soil and plant requirements",
                gradient: "from-emerald-500 to-teal-600"
              },
              {
                icon: ChartBarIcon,
                title: "Data-Driven Insights", 
                description: "Real-time analytics based on agricultural research and environmental data",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: SparklesIcon,
                title: "Sustainable Solutions",
                description: "Eco-friendly strategies that maximize yield while protecting environment",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: RocketLaunchIcon,
                title: "Advanced Technology",
                description: "Cutting-edge agricultural technology integrated with farming wisdom",
                gradient: "from-purple-500 to-violet-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="ultra-modern-card group hover:-translate-y-2 text-center border border-white/50 shadow-lg hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Services Section - Yeni Modern Tasarım */}
      <section className="relative section-full-professional overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 hero-pattern-professional opacity-30"></div>
        
        <div className="relative z-10 container-professional">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h2 
                  {...fadeIn}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  Professional
                  <br />
                  <span className="text-gradient-professional">AI Solutions</span>
                </motion.h2>
                
                <motion.p 
                  {...fadeIn}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/90 leading-relaxed max-w-xl"
                >
                  Cutting-edge agricultural technology powered by DevAAR.
                  <span className="text-emerald-300 block mt-2">Expert • Instant • Reliable</span>
                </motion.p>
              </div>

              {/* Service Stats */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-6 pt-8"
              >
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-emerald-400">99.2%</div>
                  <div className="text-sm text-white/70">Analysis Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">5000+</div>
                  <div className="text-sm text-white/70">Recommendations</div>
                </div>
              </motion.div>

              {/* Main CTA Buttons */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link to="/plant-analysis" className="group">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-primary w-full sm:w-auto group"
                  >
                    <BeakerIcon className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Start Analysis</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                <Link to="/chatbot" className="group">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-secondary w-full sm:w-auto group"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>Start Chat</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Service Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              
              {/* Plant Analysis Card */}
              <div className="service-card-modern group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <BeakerIcon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Plant & Soil Analysis</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Comprehensive fertilizer recommendations based on your specific conditions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Soil Testing", "Plant Analysis", "pH Balance"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Card */}
              <div className="service-card-modern group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">AI Agricultural Assistant</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Instant expert advice for all your farming challenges and questions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["24/7 Support", "Expert Advice", "Problem Solving"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <RocketLaunchIcon className="h-6 w-6 text-emerald-400" />
                  <span className="text-white font-semibold">Powered by DevAAR</span>
                </div>
                <p className="text-white/70 text-sm">
                  Our machine learning algorithms continuously improve with every analysis, providing more accurate recommendations over time.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative section-full-professional overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container-professional">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Left - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <CubeIcon className="h-10 w-10 text-emerald-400" />
                  <div className="absolute inset-0 h-10 w-10 bg-emerald-400/20 rounded-full blur-lg"></div>
                </div>
                <span className="text-white text-xl font-bold">Smart Fertilizer</span>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Revolutionizing agriculture through AI-powered solutions and sustainable farming practices.
              </p>
            </motion.div>

            {/* Center - Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h4 className="text-white font-semibold mb-3">Proven Results</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-lg font-bold text-emerald-400">95%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-400">1000+</div>
                  <div className="text-xs text-gray-400">Farms</div>
                </div>
              </div>
            </motion.div>

            {/* Right - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-right space-y-4"
            >
              <h4 className="text-white font-semibold">Get Started Today</h4>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <Link to="/plant-analysis">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-primary text-sm px-4 py-2 w-full sm:w-auto"
                  >
                    Start Analysis
                  </motion.button>
                </Link>
                <Link to="/chatbot">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="modern-btn modern-btn-secondary text-sm px-4 py-2 w-full sm:w-auto"
                  >
                    Ask AI
                  </motion.button>
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8 text-center"
          >
            <p className="text-gray-500 text-sm">
              © 2024 Smart Fertilizer. Powered by DevAAR.
            </p>
          </motion.div>
        </div>
      </footer>

    </div>
  )
}

export default HomePage 