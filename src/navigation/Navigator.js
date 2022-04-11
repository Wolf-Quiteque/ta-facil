import React from "react";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlice";
import BottomTabNavigator from "./TabNavigator";

const AppRoute = () => {
  const isLoggedIn = false;
  return (
    <>
      {/* Conditional stack navigator rendering based on login state */}

      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
    </>
  );
};

export default AppRoute;
