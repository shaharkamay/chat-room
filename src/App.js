import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Hello from "./components/hello/Hello";
import SignUp from "./pages/sign-up/SignUp";

function App() {

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") || "theme-auto"
  // );
  // const themeState = { theme, setTheme };
  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className={`App ${theme}`}>
          {/* <BrowserRouter> */}
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

                {/* Sign Up Route */}
                <Route path="/sign-up" element={<SignUp />} />

                {/* Default Route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          {/* </BrowserRouter> */}

        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;
