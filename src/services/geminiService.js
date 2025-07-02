import { GoogleGenerativeAI } from '@google/generative-ai'

// API configuration - set your API key here
const API_KEY = 'YOUR_GEMINI_API_KEY_HERE' // User will provide this

let genAI = null

// Initialize Gemini AI
export const initializeGemini = (apiKey = API_KEY) => {
  try {
    genAI = new GoogleGenerativeAI(apiKey)
    return true
  } catch (error) {
    console.error('Failed to initialize Gemini AI:', error)
    return false
  }
}

// Plant Analysis AI
export const getPlantAnalysis = async (plantType, soilType) => {
  if (!genAI) {
    throw new Error('Gemini AI not initialized. Please provide API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    const prompt = `
    As an expert agricultural consultant, provide detailed fertilizer recommendations for:
    
    Plant Type: ${plantType}
    Soil Type: ${soilType}
    
    Please provide:
    1. Primary fertilizer recommendation (NPK ratio, amount, timing)
    2. Secondary fertilizer recommendations (if needed)
    3. Organic alternatives
    4. Application schedule
    5. Expected results and yield improvement
    6. Soil compatibility analysis (percentage)
    7. Sustainability score (percentage)
    8. Important tips and warnings
    
    Format your response as a comprehensive analysis that considers:
    - Nutrient requirements of the specific plant
    - Soil characteristics and pH levels
    - Seasonal timing
    - Environmental impact
    - Cost-effectiveness
    
    Be specific with measurements, timing, and application methods.
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Plant analysis failed:', error)
    throw new Error('Failed to get plant analysis. Please check your API key and try again.')
  }
}

// Chatbot AI
export const getChatbotResponse = async (userMessage, conversationHistory = []) => {
  if (!genAI) {
    throw new Error('Gemini AI not initialized. Please provide API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    // Build conversation context
    let contextPrompt = `
    You are an expert AI Agricultural Assistant specializing in:
    - Fertilizer recommendations
    - Soil management
    - Plant care and nutrition
    - Sustainable farming practices
    - Crop diseases and pest management
    - Irrigation and water management
    - Organic farming methods
    
    Please provide helpful, accurate, and practical advice. Keep responses informative but conversational.
    Be specific with recommendations and always consider environmental sustainability.
    
    Conversation history:
    `
    
    // Add recent conversation history (last 5 messages)
    const recentHistory = conversationHistory.slice(-10)
    recentHistory.forEach(msg => {
      contextPrompt += `${msg.type}: ${msg.content}\n`
    })
    
    contextPrompt += `\nUser: ${userMessage}\nAssistant:`

    const result = await model.generateContent(contextPrompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Chatbot response failed:', error)
    throw new Error('Failed to get AI response. Please check your API key and try again.')
  }
}

// Set API Key function for user to call
export const setGeminiApiKey = (apiKey) => {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('API key cannot be empty')
  }
  
  return initializeGemini(apiKey)
}

// Modern Plant Analysis function
export const analyzePlant = async (plantType, soilType) => {
  if (!genAI) {
    // If no API key, return fallback analysis
    return {
      compatibility: Math.floor(Math.random() * 20) + 80, // 80-100%
      recommendations: `Based on ${plantType} and ${soilType} soil combination:

🌱 **Primary Fertilizer Recommendations:**
- Use balanced NPK fertilizer (10-10-10) for optimal growth
- Apply organic compost to improve soil structure
- Consider phosphorus-rich fertilizer during flowering phase

📊 **Application Schedule:**
- Weekly liquid fertilizer during growing season
- Bi-weekly applications during dormant periods
- Adjust based on plant response and soil conditions

⚠️ **Important Notes:**
- Always test soil pH before application
- Monitor plant response and adjust accordingly
- Consider environmental factors like rainfall and temperature

This analysis provides general guidelines. For personalized recommendations, please configure your Gemini API key.`
    }
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    const prompt = `
    As an expert agricultural consultant, provide detailed fertilizer recommendations for:
    
    Plant Type: ${plantType}
    Soil Type: ${soilType}
    
    Please provide a comprehensive analysis including:
    
    1. **Primary Fertilizer Recommendations:**
       - Specific NPK ratio for this plant-soil combination
       - Application amounts and timing
       - Best fertilizer types (organic/synthetic)
    
    2. **Application Schedule:**
       - Seasonal application timing
       - Frequency of applications
       - Growth stage considerations
    
    3. **Soil Optimization:**
       - pH adjustment recommendations
       - Soil amendment suggestions
       - Drainage and aeration tips
    
    4. **Expected Results:**
       - Yield improvement expectations
       - Growth timeline
       - Quality improvements
    
    5. **Important Notes:**
       - Environmental considerations
       - Safety precautions
       - Cost-effective alternatives
    
    Format your response with clear sections using emojis and bullet points.
    Be specific with measurements, timing, and application methods.
    Focus on sustainable and environmentally friendly practices.
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const recommendations = response.text()
    
    // Calculate compatibility score based on content analysis
    let compatibility = 85 // Default good compatibility
    if (recommendations.toLowerCase().includes('excellent') || recommendations.toLowerCase().includes('ideal')) {
      compatibility = Math.floor(Math.random() * 10) + 90 // 90-100%
    } else if (recommendations.toLowerCase().includes('good') || recommendations.toLowerCase().includes('suitable')) {
      compatibility = Math.floor(Math.random() * 15) + 80 // 80-95%
    } else if (recommendations.toLowerCase().includes('moderate') || recommendations.toLowerCase().includes('average')) {
      compatibility = Math.floor(Math.random() * 15) + 70 // 70-85%
    }
    
    return {
      compatibility,
      recommendations
    }
  } catch (error) {
    console.error('Plant analysis failed:', error)
    // Return fallback analysis with error handling
    return {
      compatibility: 85,
      recommendations: `Analysis for ${plantType} in ${soilType} soil:

🌱 **Primary Fertilizer Recommendations:**
- Use balanced NPK fertilizer (10-10-10) for optimal growth
- Apply organic compost to improve soil structure
- Consider phosphorus-rich fertilizer during flowering phase

📊 **Application Schedule:**
- Weekly liquid fertilizer during growing season
- Bi-weekly applications during dormant periods
- Adjust based on plant response and soil conditions

⚠️ **Important Notes:**
- Always test soil pH before application
- Monitor plant response and adjust accordingly
- Consider environmental factors like rainfall and temperature

Note: This is a fallback analysis. For AI-powered recommendations, please check your internet connection and API key configuration.`
    }
  }
}

// Check if API is ready
export const isGeminiReady = () => {
  return genAI !== null
} 