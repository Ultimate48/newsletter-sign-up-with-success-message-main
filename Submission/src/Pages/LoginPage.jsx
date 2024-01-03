import React from 'react'
import { useState, useEffect } from 'react'

const ListItem = ({text}) => {
  return (
    <li className='flex gap-4'>
      <img src='./../icon-list.svg' alt='' className='pb-5'/>
      <div className='flex justify-center items-start'>{text}</div>
    </li>
  )
}

export default function LoginPage({setIsValid, email, setEmail}) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);


  const [isEmailValid, setIsEmailValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    //Use regex to validate email
    const regex = /\S+@\S+\.\S+/
    if (regex.test(email)) {
      setIsValid(true)
    } else {
      setIsEmailValid(false)
    }
  }

  const validTextStyles = `pr-5 text-Tomato ${isEmailValid ? 'hidden' : ''}`

  const inputBoxStyles = `w-[320px] h-[43px] md:w-[370px] md:h-[50px] rounded-[5px] border pl-6 mt-2 outline-none  
  ${isEmailValid ? 'border-Grey focus:border-Dark_Slate_Grey' : 'border-Tomato bg-[#ffe8e6] focus:border-Tomato'}`

  return (
    <>
      <div className='h-screen bg-Charcoal_Grey flex justify-center items-center'>
        <div className='w-full md:w-[900px] h-screen md:h-[600px] flex flex-col-reverse md:flex-row justify-between items-center bg-White md:rounded-[30px] shadow-lg md:px-3'>
          <section className='flex flex-col justify-center items-center w-[400px] md:w-1/2 h-full pl-8'>
            <div className='font-[Roboto] font-bold text-[35px] md:text-[55px] text-Dark_Slate_Grey w-full md:text-center mt-10 md:mt-0'>
              Stay updated!
            </div>
            <div className='font-normal text-[16px] md:pl-[43px] md:mt-4 md:px-2 pr-7 md:pr-0'>
              <div className='font-[Roboto]'>
                Join 60,000+ product managers reciving monthly updates on:
              </div>
              <div className='font-[Roboto]'>
                <ul className='flex flex-col justify-center gap-3 mt-5'>
                  <ListItem text='Product discovery and building what matters' />
                  <ListItem text='Measuring to ensure updates are a success' />
                  <ListItem text='And much more!' />
                </ul>
              </div>
              <div className=' mt-4 md:mt-10 font-[Roboto]'>
                <div className='font-bold text-Dark_Slate_Grey flex justify-between'>
                    <div className='text-[12px]'>Email address</div>
                    <div className={validTextStyles}>Valid email required</div>
                </div>
                
                <form>
                  <input type='text' className={inputBoxStyles} 
                  placeholder='email@company.com' 
                  onChange={(e) => setEmail(e.target.value)}/>
                  <button className='w-[320px] h-[43px] md:w-[370px] md:h-[50px] rounded-[5px] bg-Dark_Slate_Grey text-White font-bold text-[16px] mt-4 hover:bg-gradient-to-r from-[#fe5378] to-[#ff6841] hover:shadow-hover mb-8'
                  onClick={(e) => handleSubmit(e)}>
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className='flex items-start'>
            {isMobile ? <img src = './../SignUpMobile.svg' className=''/> : <img src = './../../public/SignUpDesktop.svg' className='h-[550px] w-[400px]'/>}
          </section>
        </div>
      </div>
    </>
  )
}
