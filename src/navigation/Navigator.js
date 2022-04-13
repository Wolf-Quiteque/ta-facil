import React from "react";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/slices/authSlice";
import BottomTabNavigator from "./TabNavigator";

const AppRoute = () => {
  console.log(useSelector(selectUser));
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {/* Conditional stack navigator rendering based on login state */}

      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
    </>
  );
};

export default AppRoute;
