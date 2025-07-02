import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  LightBulbIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import { getChatbotResponse } from '../services/geminiService'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Agricultural Assistant. I'm here to help you with all your farming, fertilizer, and plant care questions. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const quickQuestions = [
    "How often should I fertilize my tomatoes?",
    "What's the best fertilizer for sandy soil?",
    "How do I improve soil pH naturally?",
    "When is the best time to apply fertilizer?",
    "What are signs of over-fertilization?",
    "How to create organic compost?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      const response = await getChatbotResponse(messageText, messages)
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: response,
          isBot: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    } catch (error) {
      console.error('Chatbot error:', error)
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: "I apologize, but I'm having trouble connecting right now. Here's some general advice: For most plants, use balanced fertilizer (10-10-10) during growing season, apply organic compost regularly, and always test soil pH before fertilizing. Please try asking your question again in a moment.",
          isBot: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
        setIsTyping(false)
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="w-full min-h-screen bg-white transition-colors duration-500 flex flex-col">
      {/* Modern Hero Header */}
      <section className="relative w-full overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>
        <div className="absolute inset-0 hero-pattern-professional opacity-40"></div>
        
        <div className="relative z-10 container-professional py-16">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-6 group">
            <ArrowLeftIcon className="h-6 w-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <ChatBubbleLeftRightIcon className="h-20 w-20 text-blue-300 float-professional" />
                <div className="absolute inset-0 h-20 w-20 bg-blue-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-professional mb-4">
              AI Assistant
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-normal">
              Get instant expert advice for all your agricultural needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="flex-1 bg-gray-50 flex flex-col">
        <div className="container-professional flex-1 flex flex-col max-w-6xl mx-auto py-8">
          
          {/* Quick Questions */}
          {messages.length <= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <LightBulbIcon className="h-8 w-8 mr-3 text-yellow-500" />
                Quick Questions to Get Started
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSendMessage(question)}
                    className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left group"
                  >
                    <SparklesIcon className="h-6 w-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-700 font-medium">
                      {question}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Messages Container */}
          <div className="flex-1 bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ maxHeight: '60vh' }}>
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-3xl ${message.isBot ? 'mr-12' : 'ml-12'}`}>
                      <div
                        className={`p-6 rounded-3xl shadow-lg ${
                          message.isBot
                            ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
                            : 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
                        }`}
                      >
                        {message.isBot && (
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-semibold text-blue-700">
                              AI Assistant
                            </span>
                          </div>
                        )}
                        
                        <div className="whitespace-pre-wrap text-lg leading-relaxed">
                          {message.text}
                        </div>
                        
                        <div className={`text-sm mt-3 ${
                          message.isBot 
                            ? 'text-blue-600' 
                            : 'text-white/80'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-xs mr-12">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-3xl shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-blue-700">
                          AI Assistant
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                        <span className="text-blue-600 text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about farming, fertilizers, or plant care..."
                    className="w-full p-4 pr-16 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
                    rows="2"
                    disabled={isTyping}
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <PaperAirplaneIcon className="h-6 w-6" />
                  <span>Send</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatBot 