import React from "react";
import {  Switch, Route, Navigate } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import LoginPage from "./login/LoginPage";
import "../components/app.css";

const App = () => {
  const user = false;
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component = {user ? <Navigate to="/loginPage" /> : HomePage}
        />
        <Route
          path="/loginPage"
          component={user ? <Navigate to="/loginPage" /> : LoginPage}
        />
        <Route
          path="/about"
          component={user ? <Navigate to="/loginPage" /> : AboutPage}
        />
        <Route
          path="/courses"
          component={user ? <Navigate to="/loginPage" /> : CoursesPage}
        />
      
        <Route element={PageNotFound} />
      </Switch>
    </div>
  );
}


export default App;


