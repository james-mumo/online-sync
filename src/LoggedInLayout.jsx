// LoggedInLayout.js
import React from "react";
import LoggedInHeader from "./components/authenticated/common/LoggedInHeader";


const LoggedInLayout = ({ children }) => {
    return (
        <div className="h-screen flex w-full overflow-y-hidden">
            <LoggedInHeader />
            <div className="flex flex-1 p-8 bg-white overflow-y-scroll">
                {children}
            </div>
        </div>
    );
};

export default LoggedInLayout;
