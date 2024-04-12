import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import axios from "axios";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);
  const [jwt, setJwt] = useState(localStorage.getItem("jwt")); // State to store JWT token
  const [jwtError, setJwtError] = useState(false); // State to handle JWT token error

  useEffect(() => {
    const fetchOrder = async () => {
      const orderId = new URLSearchParams(window.location.search).get("order_id");
      dispatch(getOrderById(orderId));
    };
    fetchOrder();
  }, [dispatch]);

  const handleSendSMS = async () => {
    try {
      if (!jwt) {
        alert("JWT token not found. Please login again.");
        return;
      }

      if (!order) {
        alert("Order details not available. Please wait a moment and try again.");
        return;
      }

      // Make API call to send SMS using JWT token
      const response = await axios.post(
        "http://localhost:5454/sms",
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );

      alert("Service Booked successfully! , You will get a details of Service provider to your Registered Mobile number.");
    } catch (error) {
      console.error("Error sending SMS:", error);
      alert("Failed to send SMS.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-5">
      {/* Display JWT token */}
      <div className="p-5 shadow-lg rounded-md border">
        {/* <p>JWT Token: {jwt}</p> */}
        {jwtError && <p>Error retrieving JWT token.</p>}
      </div>
      
      {order && (
        <div className="p-5 shadow-lg rounded-md border">
          <AddressCard address={order?.shippingAddress}/>
        </div>
      )}
      
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            {order?.orderItems && order?.orderItems.map((item) => (
              <CartItem key={item.id} item={item} showButton={false}/>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price ({order?.totalItem} item)</span>
                <span>₹{order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{order?.discounte}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{order?.totalDiscountedPrice}</span>
              </div>
            </div>
            {/* Button to send SMS */}
            <Button
              onClick={handleSendSMS}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Confirm Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
