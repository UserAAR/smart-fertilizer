# 📦 Installation Guide

This guide will walk you through setting up Smart Fertilizer on your local machine for development or production use.

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (version 18 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** or **yarn** package manager
  - npm comes with Node.js
  - Yarn installation: `npm install -g yarn`
- **Git** for version control
  - Download from [git-scm.com](https://git-scm.com/)

### Optional but Recommended
- **Google Gemini API Key** (for AI features)
  - Get your free key at [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Code Editor** (VS Code, WebStorm, etc.)

---

## 📥 Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/UserAAR/smart-fertilizer.git

# Navigate to the project directory
cd smart-fertilizer
```

### Step 2: Install Dependencies

Choose your preferred package manager:

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

### Step 3: Environment Setup (Optional)

Create a `.env.local` file in the root directory for environment variables:

```bash
# Create environment file
touch .env.local
```

Add the following content (optional):
```env
# Optional: Set default port
VITE_PORT=5173

# Optional: Set app name
VITE_APP_NAME="Smart Fertilizer"
```

### Step 4: Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:5173`

---

## 🔑 API Configuration

To enable AI features, you'll need to configure your Gemini API key:

### Option 1: In-App Configuration (Recommended)
1. Open the application in your browser
2. You'll see an API configuration modal
3. Enter your Gemini API key
4. Click "Set API Key"

### Option 2: Environment Variable
Add your API key to `.env.local`:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

**Security Note**: Your API key is stored locally in your browser and never sent to external servers.

---

## 🔍 Verification

### Check Installation
1. **Frontend**: Visit `http://localhost:5173`
2. **Console**: No errors in browser console
3. **Features**: All pages load correctly
4. **AI Features**: API configuration modal appears

### Test Basic Functionality
- ✅ Navigation between pages works
- ✅ Plant analysis dropdowns populate
- ✅ Chatbot interface loads
- ✅ Responsive design on mobile

---

## 📁 Project Structure

After installation, your project structure should look like this:

```
smart-fertilizer/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # React components
│   ├── 📁 pages/              # Page components
│   ├── 📁 services/           # External services
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── 📁 wiki/                   # Documentation
├── package.json               # Dependencies
├── vite.config.js            # Build configuration
└── README.md                 # Project overview
```

---

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
Error: Port 5173 is already in use
```
**Solution**: Kill the process or use a different port:
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

#### Node Version Issues
```bash
Error: This package requires Node.js 18+
```
**Solution**: Update Node.js:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download LTS version
3. Install and restart terminal

#### Dependency Issues
```bash
npm ERR! peer dep missing
```
**Solution**: Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### API Key Issues
- **Invalid Key**: Double-check your Gemini API key
- **Rate Limits**: Wait a few minutes and try again
- **No Key**: App works without API key (limited features)

---

## 🔧 Advanced Setup

### Custom Configuration

#### Vite Configuration
Modify `vite.config.js` for custom build settings:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,           // Custom port
    open: true,           // Auto-open browser
    host: '0.0.0.0'       // Allow external access
  }
})
```

#### Tailwind Configuration
Create `tailwind.config.js` for custom styling:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10b981'   // Custom primary color
      }
    }
  }
}
```

---

## 🌐 Deployment Preparation

Before deploying to production:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Test production build**:
   ```bash
   npm run preview
   ```

3. **Check build output** in `dist/` directory

4. **Set environment variables** for production

---

## 📞 Need Help?

If you encounter issues during installation:

1. **Check Prerequisites**: Ensure all required software is installed
2. **Read Troubleshooting**: Common solutions above
3. **Search Issues**: [GitHub Issues](https://github.com/UserAAR/smart-fertilizer/issues)
4. **Open Discussion**: [GitHub Discussions](https://github.com/UserAAR/smart-fertilizer/discussions)
5. **Contact Developer**: [DevAAR](mailto:amil.abdullazada@gmail.com)

---

**Happy Coding! 🚀**

*Installation guide by [DevAAR](https://github.com/UserAAR) | Last updated: January 2025* 