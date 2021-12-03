import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./components/context/ThemeContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./components/context/AuthContext";
import Hello from "./components/hello/Hello";


function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-auto"
  );
  const themeState = { theme, setTheme };

  return (
    <AuthProvider>
      <ThemeContext.Provider value={themeState}>
        <div className={`App ${theme}`}>
          <BrowserRouter>
            <Header />
            <Hello />
            <main>
              <Routes>
                {/* Main Route */}
                <Route exact path="/" element={<Home />} />

                {/* Chat Route */}
                <Route path="/chat" element={<Chat />} />

                {/* Login Route */}
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>

        </div>
      </ThemeContext.Provider>
    </AuthProvider>
  )
}

export default App;
