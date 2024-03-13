import React from 'react'

const OrderStatus = () => {
  return (
    <div>
      <div className="bg-green-600 rounded-[3vh] w-[40%] h-[40vh] p-[2.5vh] mx-auto">
        <h1 className="text-[4.5vh] font-bold text-white my-[3vh] text-center">
          Thank You for Order
        </h1>
        <p className="text-white text-[2.8vh] text-center">
          Your Order Confirmation is sent to your registered email address
        </p>
        <p className="text-white text-[2.8vh] mt-[5vh] text-center">
          Thank You, Do visit Again
        </p>
      </div>
    </div>
  )
}

export default OrderStatus
