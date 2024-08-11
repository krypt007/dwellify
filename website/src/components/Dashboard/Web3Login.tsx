'use client'
import Header from '@/components/Header';
import Link from 'next/link';
import { ConnectButton, } from "thirdweb/react";
import {client} from '@/app/client'

// import { createThirdwebClient } from "thirdweb";
import { bscTestnet } from "thirdweb/chains";
import { createWallet,  inAppWallet, } from "thirdweb/wallets";

const wallets = [
  createWallet("io.metamask"),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
        "passkey",
      ],
    },
  }),
];

export default function Web3Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-slate-800">
      <Header />
      <div className='flex p-3'>
      <h1 className="text-white text-3xl font-bold mb-4 p-3">Find Your Perfect Place, Effortlessly!</h1>
      </div>
      
      <div className='flex w-full justify-center'>
        
        <div className="flex flex-col items-center w-full max-w-xs p-3">
        <ConnectButton
            client={client}
            wallets={wallets}
            accountAbstraction={{
              chain: bscTestnet,
              factoryAddress: process.env.NEXT_PUBLIC_BSC_TESTNET_FACTORY_ADDRESS as string,
              gasless: true,
            }}
            theme={"light"}
            connectButton={{ label: "Login" }}
            connectModal={{ size: "compact", title: "Login", }}
        />
          <div className='flex w-full justify-center'>
          <p className="text-xs text-white ">By continuing you agree to our <Link href="/terms-and-conditions"><p className="text-yellow-600">Terms & Conditions</p></Link> and <Link href="/privacy-policy"><p className="text-yellow-600">Privacy Policy</p></Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
