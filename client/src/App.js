import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./components/context/ThemeContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ChatRoom from "./components/chat-room/ChatRoom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";


function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-auto"
  );
  const themeState = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeState}>
      <div className={`App ${theme}`}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              {/* Main Route */}
              <Route exact path="/" element={<Home />} />

              {/* Chat Route */}
              <Route path="/chat" element={<ChatRoom />} />

              {/* Login Route */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>
  )
}

export default App;
