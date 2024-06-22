'use client'

import SignIn from "@/components/page/home/signin";
import SignUp from "@/components/page/home/signup";
import { useState } from 'react';
import React from "react";

export default function Sign() {
  const [sign, setSign] = useState(true);

  return (
    <>
      {sign ? <SignIn sign={sign} setSign={setSign} /> : <SignUp sign={sign} setSign={setSign} />}
    </>
  );
}

