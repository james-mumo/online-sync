import "./App.css";
import 'react-notifications/lib/notifications.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NormalLayout from "./NormalLayout";
import LoggedInLayout from "./LoggedInLayout";
import Dashboard from "./components/authenticated/dashboard/Dashboard";
import Courses from "./components/authenticated/courses/Courses";
import Sessions from "./components/authenticated/sessions/Sessions";
import AuthModal from "./components/Auth/AuthModal";


function App() {


  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/about", "/team", "/pricing", "/contact", "/payment", "/courses"]}>
          <NormalLayout >
            <Switch>
              <Route exact path="/" component={AuthModal} />
              <Route exact path="/courses" component={Courses} />
            </Switch>
          </NormalLayout>
        </Route>
        <Route path="/auth">
          <LoggedInLayout>
            <Switch>
              <Route exact path="/auth/dashboard" component={Dashboard} />
              <Route exact path="/auth/courses" component={Courses} />
              <Route exact path="/auth/sessions" component={Sessions} />
            </Switch>
          </LoggedInLayout>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
