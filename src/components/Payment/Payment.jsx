import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import { SiAmericanexpress, SiZelle, SiVenmo } from "react-icons/si";

function Payment() {
    return (
        <div className="p-0 bg-teal-800 flex flex-col min-h-screen">
            <span className="text-xl p-3 font-semibold mb-2 text-white opacity-80 pb-5">Select payment method to complete registration</span>
            <div className="grid grid-cols-2 gap-4 px-4">
                {/* Payment method cards */}
                <PaymentCard icon={<FaCcVisa style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Visa" />
                <PaymentCard icon={<FaCcMastercard style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Mastercard" />
                <PaymentCard icon={<SiAmericanexpress style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="American Express" />
                <PaymentCard icon={<FaCcDiscover style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Discover" />
                <PaymentCard icon={<SiZelle style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Zelle" />
                <PaymentCard icon={<SiVenmo style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Venmo" />
                <PaymentCard icon={<FaCcPaypal style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Paypal" />
                <PaymentCard icon={<FaCcApplePay style={{ fontSize: '12em', verticalAlign: 'middle', color: '#012452' }} />} label="Apple Pay" />
            </div>

            <div className="mt-auto text-white text-center py-2 bg-[#012452] opacity-80">
                Copyright ©2024 All rights reserved | Easy-Learn
            </div>
        </div>
    );
}

// Component for rendering payment method card
function PaymentCard({ icon, label }) {
    return (
        <div className="flex text-gray-700 font-semibold flex-col justify-center cursor-pointer bg-teal-500 rounded-md items-center">
            {icon}
            <span>{label}</span>
        </div>
    );
}

export default Payment;
