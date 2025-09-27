"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { useClerk, useUser } from '@clerk/nextjs'
import React from 'react'

const Header = () => {

    const {user} = useUser()

  return (
    <div className='flex items-center justify-between p-5'>
      {user && (
        <h1 className='text-2xl font-semibold'>{user?.firstName}{`'s `}Space</h1>
      )}

      {/*BreadCrubms*/}

      <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>

      </div>

    </div>
  )
}

export default Header
