'use client'

import Sign from "@/components/page/home/sign";
import React from "react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getToken } from '@/api/axios/users/token';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (getToken()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <>
      <Sign />
    </>
  );
}
