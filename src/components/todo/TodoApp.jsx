import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import ListTodo from "./ListTodo";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import LogoutComponent from "./Logout";
import "./TodoApp.css";
import AuthProvider, { useAuth } from "./AuthContext";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;

  console.log("not logged in");
  return <Navigate to="/" />;
};

const TodoApp = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/home/:username"
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodo />
              </AuthenticatedRoute>
            }
          />
          <Route path="/logout" element={<LogoutComponent />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default TodoApp;
