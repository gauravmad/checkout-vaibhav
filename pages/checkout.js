import React, { Component, useState } from "react";
import Cart from "../components/CheckoutComp/Cart";
import OrderDetails from "../components/CheckoutComp/OrderDetails";
import OrderStatus from "../components/CheckoutComp/OrderStatus";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function checkout() {
    
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const steps = [
    { label: "Shopping Cart", Component:<Cart/> },
    { label: "Order Detail", Component:<OrderDetails/> },
    { label: "Order Status", Component:<OrderStatus/> },
  ];

  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  const handleFinishCheckout = () => {
    // Implement checkout completion logic here
    setCheckoutCompleted(true);
  };

  return (
    <div className="w-[90%] mx-auto my-[10vh]">
      <div className="flex flex-row justify-between items-center relative my-[10vh] -z-50">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {index !== 0 && (
              <div className="h-[0.2vh] bg-gray-500 left-[15%] w-[69%] mx-auto absolute -z-50"></div>
            )}
            <div className="flex flex-col md:flex-row justify-center items-center  px-[2vh] bg-white space-y-2">
              <p
                className={`md:text-[2.4vh] flex flex-row  items-center justify-center font-semibold rounded-full ${
                  (activeStep > index || (checkoutCompleted && index === activeStep))
                    ? "bg-green-700 text-white"
                    : "bg-[#B88E2F] text-white"
                } w-[5vh] h-[5vh] mr-[1.5vh]`}
              >
                {activeStep > index || (checkoutCompleted && index === activeStep) ? (
                  <span className="flex flex-row justify-center items-center">
                    &#10003;
                  </span>
                ) : (
                  index + 1
                )}
              </p>
              <h2
                className={`md:text-[2.8vh] flex flex-row justify-center items-center text-center mx-auto font-medium ${
                  (activeStep > index || (checkoutCompleted && index === activeStep))
                    ? "text-green-700"
                    : "bg-white"
                }`}
              >
                {step.label}
              </h2>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div>{steps[activeStep].Component}</div>

      <div className="flex justify-end mt-4">
        {activeStep > 0 && (
          <button
            onClick={() => handleStepChange(activeStep - 1)}
            className="bg-[#B88E2F] text-white px-4 py-2 rounded-md mr-4"
          >
            Back
          </button>
        )}
        {activeStep < steps.length - 1 && (
          <button
            onClick={() => handleStepChange(activeStep + 1)}
            className="bg-[#B88E2F] text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        )}
        {activeStep === steps.length - 1 && (
          <button
            onClick={handleFinishCheckout}
            className="bg-[#B88E2F] text-white px-4 py-2 rounded-md"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}