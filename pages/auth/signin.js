import React from 'react'
import { getProviders, signIn as SignIntoProviders} from "next-auth/react"
import Header from '../../components/Header'
export default function signin({providers}) {
  return (
  
    <>
    {/* <Header /> */}
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center'>
      <img src="/Images/zeesh.png" className='w-80' alt="" />
    <div className='mt-4 '>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className='p-3 bg-orange-500 rounded-lg text-white ' onClick={() => SignIntoProviders(provider.id , {callbackUrl:"/"})}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
   
  </>

  )
}
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }
