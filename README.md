# Smart Fertilizer - AI-Powered Agricultural Assistant

A modern React web application that provides AI-powered fertilizer recommendations and agricultural guidance for farmers and gardening enthusiasts.

## Features

🌱 **Plant & Soil Analysis**
- Select from 12+ plant types with visual icons
- Choose from 6 different soil types with detailed descriptions
- Get AI-powered fertilizer recommendations
- Purchase links to popular e-commerce platforms

🤖 **AI Agricultural Assistant**
- 24/7 chat support for farming questions
- Expert advice on fertilizer application
- Plant care guidance and troubleshooting
- Quick question templates for common issues

🎨 **Modern UI/UX**
- Responsive design for all devices
- Smooth animations and transitions
- Professional gradient designs
- User-friendly interface

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Routing**: React Router
- **AI Integration**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager
- Google Gemini API key (free from [Google AI Studio](https://aistudio.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd smart-fertilizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### API Configuration

The application requires a Google Gemini API key for AI features:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generate a free API key
3. Enter the API key when prompted in the application

> **Security Note**: Your API key is stored locally in your browser and never sent to our servers.

## Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Main landing page
│   └── ApiKeyConfig.jsx      # API key configuration modal
├── pages/
│   ├── PlantAnalysis.jsx     # Plant & soil analysis tool
│   └── ChatBot.jsx           # AI assistant chat interface
├── services/
│   └── geminiService.js      # Google Gemini API integration
├── utils/                    # Utility functions
└── App.jsx                   # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Plant Analysis Tool
- Interactive dropdown selection for plants and soil types
- Real-time compatibility scoring
- Detailed fertilizer recommendations
- Shopping links for recommended products

### AI Chat Assistant
- Context-aware conversations
- Agriculture-specific knowledge base
- Quick question templates
- Real-time typing indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email your-email@example.com or create an issue in this repository.

---

**Made with ❤️ for modern agriculture**
