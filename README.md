# Ahwaan

Ahwaan is a web application designed to provide users with access to various government schemes, emergency services, health and helpline information, and an AI-powered chatbot for assistance. Built with Next.js, it offers a modern, responsive, and user-friendly interface.

## Video Demo

[Watch on YouTube](https://www.youtube.com/watch?v=i8lf5qUMnvg)

---

## Features

- **User Authentication:** Secure signup and login functionality.
- **Dashboard:** Personalized dashboard for users.
- **Schemes Section:** Browse and view details of government schemes.
- **Chatbot:** AI-powered chatbot for instant help and information.
- **Emergency, Health, and Helpline Services:** Quick access to important contacts and resources.
- **Partner List:** View a list of partner organizations.
- **Profile Management:** Manage and update user profiles.

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Node.js, Express (API routes)
- **Database:** MongoDB
- **Styling:** CSS (with PostCSS)
- **Authentication:** Custom (API routes)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sahaj2310/Ahwaan.git
   cd Ahwaan-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your MongoDB connection string and any other required environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure
src/
app/ # Next.js app directory (pages, API routes)
components/ # React components (chatbot, navbar, footer, etc.)
context/ # React context providers
models/ # Mongoose models (User, UserProfile, Report)
utils/ # Utility functions (DB connection)
public/ # Static assets (images, SVGs)


## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm start` – Start the production server
