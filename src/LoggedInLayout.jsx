// LoggedInLayout.js
import React from "react";
import LoggedInHeader from "./components/authenticated/common/LoggedInHeader";


const LoggedInLayout = ({ children }) => {
    return (
        <div className="h-screen flex w-full">
            <LoggedInHeader />
            <div className="flex flex-1 p-8 bg-white">
                {children}
            </div>
        </div>
    );
};

export default LoggedInLayout;
