import type { Component } from "solid-js";

import "./auth.scss";

import { useNavigate } from "@solidjs/router";
import { session } from "../../App";
import GooglePic from "../../assets/google.svg";
import ApplePic from "../../assets/apple.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";

type SignInParam = "google" | "apple";

const Auth: Component = () => {
  const navigate = useNavigate();

  if (session() !== null && session().uid) navigate("/", { replace: true });

  const signIn = async (method: SignInParam) => {
    try {
      if (method === "google") {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        alert(`login successfull ${res.user.email}`);
        navigate("/", { replace: true });
      } else if (method === "apple") {
        alert(`provider not working.. WIP`);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div class="auth">
      <div class="auth__left">
        <span>Board.</span>
      </div>
      <div class="auth__right">
        <div class="auth__right__cont">
          <div class="auth__right__cont__heading">
            <span>Sign In</span>
            <span>Sign in to your account</span>
          </div>
          <div class="auth__right__cont__providers">
            <span onclick={() => signIn("google")}>
              <img src={GooglePic} />
              Sign in with Google
            </span>
            <span onclick={() => signIn("apple")}>
              <img src={ApplePic} />
              Sign in with Apple
            </span>
          </div>
          <form class="auth__right__cont__form">
            <span>
              <label>Email address</label>
              <input placeholder="example@email.com" type="email" />
            </span>
            <span>
              <label>Password</label>
              <input type="password" />
            </span>
            <span class="auth__right__cont__form__forgot">
              Forgot password?
            </span>
            <span class="auth__right__cont__form__submit">Sign In</span>
          </form>
          <span class="auth__right__cont__register">
            Don’t have an account? <span>Register here</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
