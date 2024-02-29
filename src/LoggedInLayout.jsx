// LoggedInLayout.js
import React from "react";
import LoggedInHeader from "./components/authenticated/common/LoggedInHeader";
import LoggedInFooter from "./components/authenticated/common/LoggedInFooter";

const LoggedInLayout = ({ children }) => {
    return (
        <div>
            <LoggedInHeader />
            {children}
            <LoggedInFooter />
        </div>
    );
};

export default LoggedInLayout;
