import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  
 
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
    
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );     
      
      resetFormFields();

    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case "auth/user-not-found":
          alert("user not found")
          break
        default:
          console.log(error)
      }      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <h1>
        Sign in with your email and password
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            inputOptions={{
              type: "email",
              required: true,
              onChange: handleChange,
              name: "email",
              value: email,
            }}
          />

          <FormInput
            label="Password"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "password",
              value: password,
            }}
          />
          <div className="buttons-container">
            <Button type="submit">Sign-In</Button>
            <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
              Google sign-in
            </Button>
          </div>
        </form>
      </h1>
    </div>
  );
};

export default SignInForm;
