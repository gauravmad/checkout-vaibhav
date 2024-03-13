import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const OrderDetails = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 1, name: "UPI", icon: <AccountBalanceIcon fontSize="large" /> },
    { id: 2, name: "Card", icon: <CreditCardIcon fontSize="large" /> },
    {
      id: 3,
      name: "Net Banking",
      icon: <MonetizationOnIcon fontSize="large" />,
    },
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // Sample MRPs and shipping charges
  const mrps = [100, 150, 200];
  const shippingCharges = 299;

  // Function to calculate total
  const calculateTotal = () => {
    const totalPrice = mrps.reduce((acc, curr) => acc + curr, 0);
    const total = totalPrice + shippingCharges;
    return total;
  };

  return (
    <div className="container mx-auto p-8 md:flex-row">
      <div>
        <Typography variant="h4" className="mb-8 font-bold">
          Select Payment Method
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              onClick={() => handleMethodSelect(method)}
              className={`flex flex-col items-center justify-center p-4 cursor-pointer ${
                selectedMethod && selectedMethod.id === method.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 bg-white"
              }`}
              variant="outlined"
            >
              {method.icon}
              <Typography variant="subtitle1" className="font-semibold mt-2">
                {method.name}
              </Typography>
            </Card>
          ))}
        </div>
        {selectedMethod && (
          <div className="mt-8">
            <Typography variant="h6" className="font-semibold mb-4">
              You have selected:
            </Typography>
            <Card className="flex items-center p-4" variant="outlined">
              {selectedMethod.icon}
              <Typography variant="subtitle1" className="font-semibold ml-4">
                {selectedMethod.name}
              </Typography>
            </Card>
          </div>
        )}
      </div>

      <div className="md:w-[40vw] sticky bg-[#fcf0e8be] py-[5vh] shadow-md flex flex-col justify-center  space-y-4">
        <h1 className="md:text-[3.2vh] text-[#652222] font-medium text-center">
          Cart Totals
        </h1>
        <div className="mx-auto">
          <p className="text-lg my-[2vh] ">Sub Total: Rs.330</p>
          <p className="text-lg my-[2vh] ">Shipping Carges: Rs.299</p>
          <p className="text-lg my-[2vh] font-medium">Total : Rs.3000</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
