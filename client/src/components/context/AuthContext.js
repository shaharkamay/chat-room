import axios from "axios";
import React, { useCallback, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { BASE_URL } from "./index";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh")
  );
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access")
  );

const askForNewToken = useCallback(async (refreshToken) => {
  return await axios.post(`http://localhost:8080/api/auth/token`, {
    token: refreshToken,
  });
}, []);

useEffect(() => {
  (async () => {
    if (refreshToken && refreshToken !== "undefined" && !loggedIn) {
      try {
        const { data } = await askForNewToken(refreshToken);
        setAccessToken(data.accessToken);
        localStorage.setItem("access", data.accessToken);
        setEmail(data.email);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
        setRefreshToken(null);
      }
    }
  })();
}, [refreshToken, askForNewToken, loggedIn]);

const login = useCallback(async ({ email, password }) => {
  try {
    const { data } = await axios.post(`http://localhost:8080/api/auth/login`, {
      email,
      password,
    });
    setRefreshToken(data.refreshToken);
    setAccessToken(data.accessToken);
    localStorage.setItem("refresh", data.refreshToken);
    localStorage.setItem("access", data.accessToken);
    setEmail(email);
    setLoggedIn(true);
  } catch (error) {
    if (error.isAxiosError) console.log(error.response.data.error);
    else console.log(error);
  }
}, []);

const register = useCallback(async ({ username, password, email }) => {
  // try {
  //   await axios.post(`http://localhost:8080/api/auth/register`, {
  //     username,
  //     password,
  //     email,
  //   });
  // } catch (error) {
  //   if (error.isAxiosError) throw error.response.data.error;
  //   else {
  //     console.log(error);
  //     throw Error("Something went bad");
  //   }
  // }
}, []);

const logout = useCallback(async () => {
  await axios.post(
    `http://localhost:8080/api/auth/logout`,
    {},
    {
      headers: {
        Auth: accessToken,
      },
    }
  );
  setEmail(null);
  setLoggedIn(false);
  localStorage.removeItem("refresh");
  localStorage.removeItem("access");
}, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ loggedIn, email, accessToken, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = ({ children }) => (
  <AuthContext.Consumer> {{ children }}</AuthContext.Consumer>
);

export const useAuth = () => {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) navigate("/login");
  }, [loggedIn, navigate]);
  return loggedIn;
};