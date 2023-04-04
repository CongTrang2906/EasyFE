import { authApi } from "@/api-client";
import React from "react";

const LoginPage = () => {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: "master",
        password: "123123",
      });
    } catch (error) {
      console.log("failed to login", error);
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log("go to get profile", error);
    }
  }

  async function handleLogoutClick() {
    try {
      await authApi.logout();
    } catch (error) {
      console.log("go to get profile", error);
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default LoginPage;
