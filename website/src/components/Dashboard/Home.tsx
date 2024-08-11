'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Button } from "../ui/button";

const Home = () => {
    const {disconnect} = useDisconnect();
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();
  return (
    <div className="flex flex-col justify-between">
        {/** Header */}
        <div className="flex justify-end p-2"><Button onClick={()=> {disconnect(connectedWallet!)}}>Logout</Button></div>

         {/** Main Section */}
        <div className="flex object-fill">
            Home
        </div>
    </div>
  )
}

export default Home