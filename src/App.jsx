import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import AppLayout from "./components/layout";

import AuthForgot from "./components/auth/AuthForget";
import ErrorPage from "./components/common/ErrorPage";

function App() {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (event) => event.preventDefault())
  // }, [])
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<AuthForgot />} />
      <Route path="*" element={<AppLayout />} />
      <Route path="/errorPage" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
