import React from 'react'
import { useState, useEffect } from 'react'

export default function SuccessPage({email}) {

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

    const handleDismiss = (e) => {
        e.preventDefault()
        window.close()
    }

  return (
    <div className='h-screen bg-Charcoal_Grey flex justify-center items-center'>
        <div className='h-screen md:h-[350px] w-[350px] bg-white md:rounded-3xl shadow-2xl flex flex-col pl-10 pr-7 pt-24 md:pt-8'>
            <img src='./../icon-success.svg' alt='done' className='md:w-10 w-[52px]' />
            <div className='flex flex-col justify-between h-full md:h-auto pb-10 md:pb-0'>
            <div className='mt-10 md:mt-5'>
                <div className='text-[41px] font-[Roboto] font-bold leading-9 text-Dark_Slate_Grey'>
                    Thanks for subscribing!
                </div>
                <div className='text-[14px] md:text-[12px] font-[Roboto] mt-5 text-Dark_Slate_Grey'>
                    A confirmation email has been sent to <span className='font-bold '>{email}</span>. Please open it and click the button inside to confirm your subscription.
                </div>
            </div>
            <button className='w-[275px] h-[50px] md:h-[40px] rounded-[5px] bg-Dark_Slate_Grey text-White font-bold text-[12px] hover:bg-gradient-to-r from-[#fe5378] to-[#ff6841] mt-7 hover:shadow-hover'
            type='button' onClick={(e) => handleDismiss(e)}>
                    Dismiss Message
            </button>
            </div>
        </div>
    </div>
  )
}
