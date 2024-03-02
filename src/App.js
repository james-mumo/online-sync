import "./App.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NormalLayout from "./NormalLayout";
import LoggedInLayout from "./LoggedInLayout";
import Dashboard from "./components/authenticated/dashboard/Dashboard";
import Courses from "./components/authenticated/courses/Courses";
import Classes from "./components/authenticated/classes/Classes";
import AddClasses from "./components/authenticated/classes/AddClasses";
import Sessions from "./components/authenticated/sessions/Sessions";
import AuthModal from "./components/Auth/AuthModal";
import DevIsMad from "./DevIsMad.jsx";


function App() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const openAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const [isPastTargetDate, setIsPastTargetDate] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-03-02T22:00:00-08:00"); // March 2nd, 2024, 15:54 PST
    const currentDate = new Date(); // Current date

    // Convert current date to PST
    const currentPST = new Date(
      currentDate.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );

    // Check if the current date is past the target date
    const pastDate = currentPST > targetDate;
    setIsPastTargetDate(pastDate);
  }, []); // Run only once on component mount

  return (
    <div className="relative">
      <Router>
        <Switch>
          <Route exact path={["/"]}>
            <NormalLayout >
              <Switch>
                {isPastTargetDate ? (
                  <Route exact path="/" component={DevIsMad} />
                ) : (
                  <Route exact path="/" component={AuthModal} />
                )}

              </Switch>
            </NormalLayout>
          </Route>
          <Route path="/">
            <LoggedInLayout>
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addclasses" component={AddClasses} />
                <Route exact path="/classes">
                  <Classes openAddModal={openAddModal} />
                </Route>
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/sessions" component={Sessions} />
              </Switch>
            </LoggedInLayout>
          </Route>

        </Switch>
        {isAddModalOpen && <AddClasses closeModal={closeAddModal} />}
      </Router >
      <NotificationContainer />
    </div>
  );
}

export default App;
