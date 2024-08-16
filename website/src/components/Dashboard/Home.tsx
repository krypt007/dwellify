'use client'
import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Button } from "../ui/button";
import Search from "./Search";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Header from "../Header";

const Home = () => {
    const {disconnect} = useDisconnect();
    const account = useActiveAccount();
    const connectedWallet = useActiveWallet();
  return (
    <div className="flex flex-col justify-between bg-purple-950 px-5">

        {/** Header */}
        <div className="fixed w-full top-0 left-0 z-50 transition-all flex justify-between p-2 bg-[#9003fc]">
            <div className="flex flex-col text-white">
                <div>Hello</div>
                <div className="font-bold text-sm">A.N. OTHER</div>
            </div>
            <Button onClick={()=> {disconnect(connectedWallet!)}}>Logout</Button>
        </div>

         {/** Main Section */}
        <div className="flex flex-col object-fill p-3 gap-5 mt-20">
            <div><Search /></div>
            <div className="flex gap-2 p-1 justify-between text-white ">
                <div className=" border border-gray-300 p-1 rounded-md hover:cursor-pointer">House</div>
                <div className=" border border-gray-300 p-1 rounded-md hover:cursor-pointer">Appartment</div>
                <div className=" border border-gray-300 p-1 rounded-md hover:cursor-pointer">Office</div>
                <div className=" border border-gray-300 p-1 rounded-md hover:cursor-pointer">Land</div>
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