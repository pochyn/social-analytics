"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignInPage;
