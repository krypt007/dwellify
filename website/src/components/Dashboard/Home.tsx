'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Button } from "../ui/button";
import Search from "./Search";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const Home = () => {
    const {disconnect} = useDisconnect();
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();
  return (
    <div className="flex flex-col justify-between">
        {/** Header */}
        <div className="flex justify-between p-2">
            <div className="flex flex-col">
                <div>Hello</div>
                <div className="font-bold text-sm">A.N. OTHER</div>
            </div>
            <Button onClick={()=> {disconnect(connectedWallet!)}}>Logout</Button>
        </div>

         {/** Main Section */}
        <div className="flex flex-col object-fill p-3 gap-5">
            <div><Search /></div>
            <div className="flex gap-2 p-1 border border-gray-300 justify-between">
                <div>House</div>
                <div>Appartment</div>
                <div>Office</div>
                <div>Land</div>
            </div>
            <div className="flex flex-col">
                <Card>
                    <CardContent className="w-100">
                        <Image src="/images/house1.png"
                        alt='welcom'
                        width={800}
                        height={300}
                        />
                    </CardContent>
                    <CardContent>5 Bedroom House</CardContent>
                    <CardContent>Westlands, Nairobi</CardContent>
                    <CardContent>Ksh. 40,350,000/-</CardContent>
                </Card>
            </div>
            <div className="flex flex-col">
                <Card>
                    <CardContent className="w-100">
                        <Image src="/images/house2.png"
                        alt='welcom'
                        width={800}
                        height={300}
                        />
                    </CardContent>
                    <CardContent>5 Bedroom House</CardContent>
                    <CardContent>Westlands, Nairobi</CardContent>
                    <CardContent>Ksh. 40,350,000/-</CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Home