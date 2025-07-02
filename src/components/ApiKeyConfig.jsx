import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  KeyIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'
import { setGeminiApiKey, isGeminiReady } from '../services/geminiService'

const ApiKeyConfig = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!apiKey.trim()) {
      setError('Please enter your API key')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      const initialized = setGeminiApiKey(apiKey.trim())
      if (initialized) {
        setSuccess(true)
        setTimeout(() => {
          if (onApiKeySet) onApiKeySet()
        }, 1500)
      } else {
        setError('Failed to initialize API. Please check your key.')
      }
    } catch (err) {
      setError(err.message || 'Invalid API key format')
    } finally {
      setIsLoading(false)
    }
  }

  if (isGeminiReady() && success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">API Key Set Successfully!</h3>
          <p className="text-gray-600">You can now use all AI features.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full"
      >
        <div className="text-center mb-6">
          <KeyIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Configure Gemini API Key
          </h2>
          <p className="text-gray-600">
            Enter your Google Gemini API key to enable AI features
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showKey ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
            >
              <XCircleIcon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading || !apiKey.trim()}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                isLoading || !apiKey.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Setting up API...
                </div>
              ) : (
                'Set API Key'
              )}
            </motion.button>

            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                Don't have an API key?
              </p>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Get your free Gemini API key →
              </a>
            </div>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-2 text-sm">Security Note:</h4>
          <p className="text-xs text-blue-700">
            Your API key is stored locally in your browser and never sent to our servers. 
            It's only used to communicate directly with Google's Gemini API.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ApiKeyConfig 