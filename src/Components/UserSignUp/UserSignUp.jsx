import React from "react";
import { useState } from "react";

function UserSignUp() {
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    desiredName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">enter your full name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="enter full name"
          value={userInfo.fullName}
          onChange={handleChange}
        />
        <label htmlFor="desiredName">enter your desired name</label>
        <input
          type="text"
          name="desiredName"
          id="desiredName"
          placeholder="enter desired name"
          value={userInfo.desiredName}
          onChange={handleChange}
        />
        <label htmlFor="email">enter your email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="address">enter your address</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="enter address"
          value={userInfo.address}
          onChange={handleChange}
        />
        <label htmlFor="phoneNumber">enter your phone number</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="enter phone number"
          value={userInfo.phoneNumber}
          onChange={handleChange}
        />
        <button type="submit">submit details</button>
      </form>
    </div>
  );
}

export default UserSignUp;
