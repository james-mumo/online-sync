import "./App.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NormalLayout from "./NormalLayout";
import LoggedInLayout from "./LoggedInLayout";
import Dashboard from "./components/authenticated/dashboard/Dashboard";
import Courses from "./components/authenticated/courses/Courses";
import Classes from "./components/authenticated/classes/Classes";
import AddClasses from "./components/authenticated/classes/AddClasses";
import Sessions from "./components/authenticated/sessions/Sessions";
import AuthModal from "./components/Auth/AuthModal";


function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/"]}>
            <NormalLayout >
              <Switch>
                <Route exact path="/" component={AuthModal} />
              </Switch>
            </NormalLayout>
          </Route>
          <Route path="/">
            <LoggedInLayout>
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addclasses" component={AddClasses} />
                <Route exact path="/classes" component={Classes} />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/sessions" component={Sessions} />
              </Switch>
            </LoggedInLayout>
          </Route>

        </Switch>
      </Router >

      <NotificationContainer />
    </>
  );
}

export default App;
