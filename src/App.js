import "./App.css";
import 'react-notifications/lib/notifications.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NormalLayout from "./NormalLayout";
import LoggedInLayout from "./LoggedInLayout";
import Home from "./components/home/Home";
import Dashboard from "./components/authenticated/dashboard/Dashboard";
import Courses from "./components/authenticated/courses/Courses";
import Sessions from "./components/authenticated/sessions/Sessions.jsx";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Payment from "./components/Payment/Payment";
import Contact from "./components/contact/Contact";
import AuthModal from "./components/Auth/AuthModal";
import TutorAuthModal from "./components/Auth/TutorAuthModal";
import GetStartedModal from "./components/Auth/GetStartedModal.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTutorOpen, setIsModalTutorOpen] = useState(false);
  const [getStartedModalOpen, isGetStartedModalOpen] = useState(true)

  const openTutorModal = () => {
    setIsModalTutorOpen(true);
  };

  const closeTutorModal = () => {
    setIsModalTutorOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeGetStartedModal = () => {
    isGetStartedModalOpen(!getStartedModalOpen)
  }


  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/about", "/team", "/pricing", "/contact", "/payment", "/courses"]}>
          <NormalLayout onModalOpen={openModal} openTutorModal={openTutorModal}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/courses" component={Courses} />
            </Switch>
          </NormalLayout>
        </Route>
        <Route path="/auth">
          <LoggedInLayout openTutorModal={openTutorModal}>
            <Switch>
              <Route exact path="/auth/dashboard" component={Dashboard} />
              <Route exact path="/auth/courses" component={Courses} />
              <Route exact path="/auth/sessions" component={Sessions} />
            </Switch>
          </LoggedInLayout>
        </Route>
      </Switch>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      <TutorAuthModal isOpen={isModalTutorOpen} onClose={closeTutorModal} />
      {getStartedModalOpen && <GetStartedModal closeGetStartedModal={closeGetStartedModal} />}
    </Router >
  );
}

export default App;
