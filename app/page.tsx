import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
export default function Home() {
  return (
    <>
    <h1>Welcome To HomePage, Login dulu cak</h1>
     <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </>
    
  )
}