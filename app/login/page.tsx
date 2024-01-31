"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [redirectPathState, setRedirectPathState] = useState("");

  useEffect(() => {
    if (redirectPathState !== "") {
      console.log(redirectPathState);
      
      redirect(redirectPathState);
    }
  }, [redirectPathState]);

  useEffect(() => {
    const fakeAsyncOperation = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(null),2000)
        
      });
    };

    const redirectUser = async () => {
      fakeAsyncOperation()
        .then((resolve) => {
          console.log(resolve);

          setRedirectPathState("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          setRedirectPathState("/");
        });
    };

    redirectUser();
  }, []);

  return <div>Login</div>;
}
