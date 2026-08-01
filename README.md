# ImaGing - AI Text-to-Image SaaS Platform

**ImaGing** is a full-stack, AI-powered image generation SaaS application. It allows users to convert creative text prompts into high-quality downloadable images using state-of-the-art AI. The platform features an interactive playground, a credit-based token economy, and Razorpay integration for credit replenishment.

---

## 🚀 Project Status
- **Frontend**: Fully completed and polished.
- **Backend**: Currently in active development using Node.js & Express (replacing Django).

---

## ✨ Features

* **Interactive AI Playground**: Input detailed text prompts (e.g., *"3D render of a small chibi style tiger in snow"*) to generate high-resolution images.
* **Instant Downloads**: Save generated artwork directly to your device with a single click.
* **Credit-Based System**: Users have a token balance that is dynamically updated upon successful image generation.
* **Razorpay Payment Gateway**: Secure credit package selection and checkout interface to purchase additional tokens.
* **Modern Animated UI/UX**: Premium landing page experience styled with Tailwind CSS and animated using Framer Motion (including testimonials, step-by-step instructions, and navigation overlays).
* **Secure Authentication**: Built-in login and signup modal flows for user onboarding.

---

## 🛠️ Technology Stack

### Frontend (Completed)
- **Library/Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: React Router DOM
- **State Management**: React Context API

### Backend (In Development)
- **Runtime/Framework**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Security & Auth**: JWT (JSON Web Tokens) & [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- **Payments**: Razorpay SDK
<!-- - **AI Engine**: Text-to-Image Generation API (e.g., Stability AI / Clipdrop) -->

---

## 📦 Installation & Setup

### Backend
1. Navigate to the `Server` directory:
   ```bash
   cd Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Server` directory and configure the environment variables:
   ```env
   MONGODB_URI = "your_mongodb_connection_string"
   JWT_SECRET = "your_jwt_secret"
   ```
4. Run the backend server:
   ```bash
   npm run server
   ```

### Frontend
1. Navigate to the `Client` directory:
   ```bash
   cd Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

