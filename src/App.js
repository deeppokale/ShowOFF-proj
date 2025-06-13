// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';

// Import the DarkModeProvider from the context
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginPage />} />

          {/* Home Route */}
          <Route path="/homepage" element={<HomePage />} />

          {/* Signup Route */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Cart Route */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
