import React from "react";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";

const NormalLayout = ({ children, onModalOpen, openTutorModal }) => {
    return (
        <div className="">
            <Header onModalOpen={onModalOpen} />
            {children}
            <Footer openTutorModal={openTutorModal} />
        </div>
    );
};

export default NormalLayout;
