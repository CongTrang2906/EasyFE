import { authApi } from "@/api-client";
import { LoginForm } from "@/components/auth";
import { useAuth } from "@/hook/index";
import { LoginPayload } from "@/models";
import { useRouter } from "next/router";
import * as React from "react";

const LoginPage = () => {
  const router = useRouter();
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });

  async function handleLoginClick() {
    try {
      await login({
        username: "master",
        password: "123123",
      });
      console.log("redirect to dashboard");
      router.push("/about");
    } catch (error) {
      console.log("failed to login", error);
    }
  }
  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to");
    } catch (error) {
      console.log("go to get profile", error);
    }
  }

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);
      //console.log("redirect to dashboard");
      //router.push("/about");
    } catch (error) {
      console.log("failed to login", error);
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPage;
