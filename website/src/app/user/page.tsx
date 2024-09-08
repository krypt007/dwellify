import Appbar from '@/components/template/Appbar'
import SignInPanel from "@/components/template/signInPanel";
import { Button } from '@/components/ui/button';
import React from 'react'

const User = () => {
  return (
    <div className='flex h-screen w-full justify-start items-start'>
        <Appbar>
            <SignInPanel />
        </Appbar>
    </div>
  )
}

export default User

