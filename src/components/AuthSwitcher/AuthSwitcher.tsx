import { useState } from "react";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { AuthSwitcherContainer, Button } from "./AuthSwitcher.styles";

const AuthSwitcher = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <AuthSwitcherContainer>
      <Button onClick={() => setIsSignIn(true)}>Sign In</Button>
      <Button onClick={() => setIsSignIn(false)}>Sign Up</Button>
      {isSignIn ? <SignInForm /> : <SignUpForm />}
    </AuthSwitcherContainer>
  );
};

export default AuthSwitcher;
