import React from 'react'
import img from '@/assets/images/arabuluculuk.webp'
import Image from 'next/image'
import CalismaCarousel from '@/components/CalismaCarousel'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({params: {lang}}) {
  return {
    title: 'Özdemir Hukuk Bürosu | Arabuluculuk',
    description: 'Özdemir Hukuk ofisi olarak, Profesyonel arabuluculuk hizmetimizle, hukuki uyuşmazlıklarınıza tarafsız ve bağımsız bir çözüm sunuyoruz. Adalet Bakanlığı siciline kayıtlı deneyimli arabulucularımızla müvekkillerimizin haklarını koruyoruz.',
  alternates:{
    canonical: `https://www.hukukozdemir.com/${lang}/calisma-alanlarimiz/arabuluculuk`
  }
  }
}

export default async function page({ params: { lang }}) {
  const { arabuluculuk } = await getDictionary(lang)
  return (
    <>
    <div className='calisma-alan-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{arabuluculuk.h1}</h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{arabuluculuk.h2}</p>
  </div>
  </div>
  <div className='text-black h-full'>
      <h2 className='text-2xl  border-b border-[#E5BA73] text-center mt-20'>{arabuluculuk.h2}</h2>
       <div className='flex items-center justify-center'>
        <div className='flex mt-10 lg:mt-10 justify-center flex-wrap lg:flex-nowrap items-center text-center h-fit w-[90%]'>
         <div className='h-[300px] max-h-fit lg:w-2/5 w-full flex justify-center mx-5'>
          <Image src={img} alt="" width={300} />
         </div>
            <div className='mt-10 md:mt-0 lg:mt-0 h-full lg:w-3/5 w-full lg:text-left text-center flex items-center justify-center'>
              <p>{arabuluculuk.p}</p>
           </div>
      </div>
     </div>
     <CalismaCarousel params={{ lang }}/>
    </div>
  </>
  )
}
