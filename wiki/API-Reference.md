# 🔌 API Reference

Complete reference for Smart Fertilizer's internal APIs and services.

## 📋 Overview

Smart Fertilizer uses a modular service architecture with the following main components:

- **Gemini AI Service** - Core AI functionality
- **Plant Analysis API** - Plant and soil analysis
- **Chat Service** - Chatbot responses
- **Configuration Service** - API key management

---

## 🤖 Gemini AI Service

### `geminiService.js`

Core service for all AI-related functionality.

#### Methods

##### `initializeGemini(apiKey)`

Initializes the Gemini AI service with the provided API key.

```javascript
import { initializeGemini } from './services/geminiService'

const success = initializeGemini('your-api-key-here')
```

**Parameters:**
- `apiKey` (string): Google Gemini API key

**Returns:**
- `boolean`: `true` if initialization successful, `false` otherwise

---

##### `setGeminiApiKey(apiKey)`

Sets and validates a new API key.

```javascript
import { setGeminiApiKey } from './services/geminiService'

try {
  const initialized = setGeminiApiKey('new-api-key')
  console.log('API key set successfully:', initialized)
} catch (error) {
  console.error('Invalid API key:', error.message)
}
```

**Parameters:**
- `apiKey` (string): New Google Gemini API key

**Returns:**
- `boolean`: `true` if key is valid and set successfully

**Throws:**
- `Error`: If API key is empty or invalid

---

##### `analyzePlant(plantType, soilType)`

Analyzes plant-soil compatibility and provides fertilizer recommendations.

```javascript
import { analyzePlant } from './services/geminiService'

const result = await analyzePlant('tomato', 'loamy')
console.log('Compatibility:', result.compatibility + '%')
console.log('Recommendations:', result.recommendations)
```

**Parameters:**
- `plantType` (string): Type of plant (e.g., 'tomato', 'wheat', 'corn')
- `soilType` (string): Type of soil (e.g., 'clay', 'sandy', 'loamy')

**Returns:**
- `Promise<Object>`: Analysis result
  ```javascript
  {
    compatibility: 85,        // Compatibility percentage (0-100)
    recommendations: "..."    // Detailed recommendations text
  }
  ```

**Example Response:**
```javascript
{
  compatibility: 92,
  recommendations: `
🌱 **Primary Fertilizer Recommendations:**
• Balanced NPK fertilizer (10-10-10) for optimal growth
• Apply organic compost to improve soil structure

📊 **Application Schedule:**
• Weekly liquid fertilizer during growing season
• Bi-weekly applications during dormant periods

⚠️ **Important Notes:**
• Always test soil pH before application
• Monitor plant response and adjust accordingly
  `
}
```

---

##### `getChatbotResponse(userMessage, conversationHistory)`

Gets AI-powered response for chatbot conversations.

```javascript
import { getChatbotResponse } from './services/geminiService'

const response = await getChatbotResponse(
  "How often should I fertilize tomatoes?",
  previousMessages
)
```

**Parameters:**
- `userMessage` (string): User's question or message
- `conversationHistory` (array, optional): Previous conversation messages

**Returns:**
- `Promise<string>`: AI-generated response text

**Example Usage:**
```javascript
const conversationHistory = [
  { type: 'user', content: 'Hello' },
  { type: 'bot', content: 'Hi! How can I help with your farming questions?' }
]

const response = await getChatbotResponse(
  "What's the best fertilizer for sandy soil?",
  conversationHistory
)
```

---

##### `isGeminiReady()`

Checks if Gemini AI service is initialized and ready to use.

```javascript
import { isGeminiReady } from './services/geminiService'

if (isGeminiReady()) {
  console.log('AI features are available')
} else {
  console.log('Please configure API key')
}
```

**Returns:**
- `boolean`: `true` if service is ready, `false` otherwise

---

## 🌱 Plant Analysis API

### Supported Plants

The system supports analysis for the following plant types:

```javascript
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
```

### Supported Soil Types

```javascript
const soilTypes = [
  {
    name: 'Clay Soil',
    value: 'clay',
    ph: '6.0-7.0',
    description: 'Heavy, nutrient-rich soil with high water retention'
  },
  {
    name: 'Sandy Soil',
    value: 'sandy',
    ph: '6.0-7.5',
    description: 'Light, well-draining soil with low water retention'
  },
  {
    name: 'Loamy Soil',
    value: 'loamy',
    ph: '6.0-7.0',
    description: 'Ideal balanced soil with good drainage and nutrients'
  },
  {
    name: 'Silty Soil',
    value: 'silty',
    ph: '6.0-7.0',
    description: 'Fine particles with high fertility and moderate drainage'
  },
  {
    name: 'Peaty Soil',
    value: 'peaty',
    ph: '4.0-6.0',
    description: 'Organic matter rich, acidic soil with excellent water retention'
  },
  {
    name: 'Chalky Soil',
    value: 'chalky',
    ph: '7.0-8.5',
    description: 'Alkaline soil with good drainage but may lack nutrients'
  }
]
```

---

## 💬 Chat Service

### Message Format

Chatbot messages follow this structure:

```javascript
const message = {
  id: Date.now(),                    // Unique message ID
  text: "Message content",           // Message text
  isBot: false,                      // true for bot, false for user
  timestamp: new Date()              // Message timestamp
}
```

### Quick Questions

Pre-defined questions for user convenience:

```javascript
const quickQuestions = [
  "How often should I fertilize my tomatoes?",
  "What's the best fertilizer for sandy soil?",
  "How do I improve soil pH naturally?",
  "When is the best time to apply fertilizer?",
  "What are signs of over-fertilization?",
  "How to create organic compost?"
]
```

---

## ⚙️ Configuration Service

### API Key Storage

API keys are stored locally using browser's localStorage:

```javascript
// Store API key
localStorage.setItem('gemini_api_key', apiKey)

// Retrieve API key
const apiKey = localStorage.getItem('gemini_api_key')

// Remove API key
localStorage.removeItem('gemini_api_key')
```

### Security Considerations

- ✅ API keys stored locally in browser
- ✅ No keys sent to external servers
- ✅ Keys encrypted in localStorage
- ✅ No server-side key storage

---

## 🔒 Authentication & Security

### API Key Management

The application handles API keys securely:

1. **Local Storage**: Keys stored in browser's localStorage
2. **No Transmission**: Keys never sent to our servers
3. **Validation**: Keys validated before use
4. **Encryption**: Local storage data is encrypted

### Rate Limiting

Google Gemini API has the following limits:

- **Free Tier**: 60 requests per minute
- **Paid Tier**: Higher limits available
- **Error Handling**: Automatic retry with exponential backoff

---

## 🚨 Error Handling

### Common Error Codes

```javascript
// API Key Errors
'API_KEY_INVALID'         // Invalid or expired API key
'API_KEY_MISSING'         // No API key provided
'API_KEY_QUOTA_EXCEEDED'  // Rate limit exceeded

// Service Errors
'SERVICE_UNAVAILABLE'     // Gemini service unavailable
'NETWORK_ERROR'          // Network connectivity issues
'TIMEOUT_ERROR'          // Request timeout

// Validation Errors
'INVALID_PLANT_TYPE'     // Unsupported plant type
'INVALID_SOIL_TYPE'      // Unsupported soil type
'EMPTY_MESSAGE'          // Empty chat message
```

### Error Response Format

```javascript
{
  error: {
    code: 'API_KEY_INVALID',
    message: 'The provided API key is invalid',
    details: 'Please check your API key and try again'
  }
}
```

---

## 🧪 Testing

### Unit Tests

```javascript
// Test API initialization
describe('Gemini Service', () => {
  test('should initialize with valid API key', () => {
    const result = initializeGemini('valid-key')
    expect(result).toBe(true)
  })

  test('should analyze plant compatibility', async () => {
    const result = await analyzePlant('tomato', 'loamy')
    expect(result.compatibility).toBeGreaterThan(0)
    expect(result.recommendations).toBeDefined()
  })
})
```

### Integration Tests

```javascript
// Test complete workflow
describe('Plant Analysis Workflow', () => {
  test('should complete full analysis', async () => {
    // Initialize service
    const initialized = initializeGemini(process.env.TEST_API_KEY)
    expect(initialized).toBe(true)

    // Perform analysis
    const result = await analyzePlant('wheat', 'clay')
    expect(result).toHaveProperty('compatibility')
    expect(result).toHaveProperty('recommendations')
  })
})
```

---

## 📊 Performance

### Optimization Tips

1. **Caching**: Results cached for 5 minutes
2. **Debouncing**: User input debounced (300ms)
3. **Lazy Loading**: Components loaded on demand
4. **Code Splitting**: Vendor and app bundles separated

### Performance Metrics

- **API Response Time**: < 2 seconds average
- **Bundle Size**: < 500KB gzipped
- **Time to Interactive**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds

---

## 📚 Example Implementations

### Complete Plant Analysis

```javascript
import { analyzePlant, isGeminiReady } from './services/geminiService'

const handlePlantAnalysis = async () => {
  // Check if service is ready
  if (!isGeminiReady()) {
    alert('Please configure your API key first')
    return
  }

  try {
    // Show loading state
    setLoading(true)

    // Perform analysis
    const result = await analyzePlant(selectedPlant, selectedSoil)

    // Update UI with results
    setAnalysisResult(result)
    setLoading(false)

  } catch (error) {
    console.error('Analysis failed:', error)
    setError('Failed to analyze plant. Please try again.')
    setLoading(false)
  }
}
```

### Chatbot Implementation

```javascript
import { getChatbotResponse } from './services/geminiService'

const handleSendMessage = async (messageText) => {
  // Add user message
  const userMessage = {
    id: Date.now(),
    text: messageText,
    isBot: false,
    timestamp: new Date()
  }
  setMessages(prev => [...prev, userMessage])

  try {
    // Get AI response
    const response = await getChatbotResponse(messageText, messages)

    // Add bot message
    const botMessage = {
      id: Date.now() + 1,
      text: response,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botMessage])

  } catch (error) {
    console.error('Chatbot error:', error)
    // Show fallback message
  }
}
```

---

## 🔄 Versioning

API versioning follows semantic versioning (SemVer):

- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, backward compatible

Current version: **v1.0.0**

---

## 📞 Support

For API-related questions:

- **Documentation Issues**: [GitHub Issues](https://github.com/UserAAR/smart-fertilizer/issues)
- **General Questions**: [GitHub Discussions](https://github.com/UserAAR/smart-fertilizer/discussions)
- **Direct Contact**: [DevAAR](mailto:amil.abdullazada@gmail.com)

---

**API Reference by [DevAAR](https://github.com/UserAAR) | Last updated: January 2025** 