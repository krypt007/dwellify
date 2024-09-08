'use client'

import Web3Login from '@/components/Dashboard/Web3Login';
import Home from '@/components/Dashboard/Home';

export default function Login() {
  const account =  "steve";  // useActiveAccount();
  return (
    <>{!account  ? <Web3Login /> : <Home />}</>
  );
}