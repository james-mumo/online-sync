// LoggedInLayout.js
import React from "react";
import LoggedInHeader from "./components/authenticated/common/LoggedInHeader";


const LoggedInLayout = ({ children }) => {
    return (
        <div className="h-screen">
            <LoggedInHeader />
            {children}

        </div>
    );
};

export default LoggedInLayout;
