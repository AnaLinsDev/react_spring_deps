import "./App.css";
import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import ListEventsPage from "./pages/listagem_events/listagem_events";
import Menu from "./components/menu/menu";
import LoginRegisterPage from "./pages/login_register/login_register";
import ListUsersPage from "./pages/listagem_users/listagem_users";
import PerfilPage from "./pages/perfil/perfil";
import { isLoggedIn } from "./services/AuthService";

/*
TO DEPLOY:
git add .
git commit -m ""
git push
npm run deploy
*/

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Menu />
          <Routes>
          <Route exact path="/" element={<LoginRegisterPage />} />
            <Route
              path="/tasks"
              element={
                <RequireAuth>
                  <ListEventsPage />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<LoginRegisterPage />} />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <ListUsersPage />
                </RequireAuth>
              }
            />
            <Route
              path="/perfil"
              element={
                <RequireAuth>
                  <PerfilPage />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

const RequireAuth = ({ children }) => {
  const isLogged = isLoggedIn();
  console.log("requireauth");

  if (!isLogged) return <Navigate to="/login" />;
  return children;
};

export default App;
