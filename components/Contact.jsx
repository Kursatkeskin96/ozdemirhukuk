'use client';
import Link from 'next/link'
import React, {useRef} from 'react'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {GrContact} from 'react-icons/gr'
import emailjs from '@emailjs/browser';
import 'dotenv/config'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cllyshp', 'template_3jkagod', form.current, 'tGF9oprXEkoV0KmnQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='py-8 pb-20 w-full lg:h[700px] bg-[#222831]' id='contact'>
    <div className='max-w-[80%] mx-auto flex flex-col justify-center'>
    <h1 className='text-2xl border-b text-white border-[#E5BA73] text-center lg:mt-10'>İletişim</h1>
  
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='mt-10 bg-[#f2f2f2] p-8'>
          <div className='inline-flex items-center text-center text-xl mb-2'>
            <AiOutlineMail />
            <span className='ml-4'>E-Mail</span>
          </div>
          <p className='text-[#E5BA73]'>info@hukukozdemir.com</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-2'>
            <AiOutlinePhone />
            <span className='ml-4'>Telefon Numarası</span>
          </div>
          <p className='text-[#E5BA73]'>+90 533 300 36 94</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-2'>
            <GoLocation />
            <span className='ml-4'>Konum</span>
          </div>
          <p className='text-[#E5BA73]'>Yeşilköy Mah. Atatürk Cad. EGS Business Park B2 Blok No: 12 K: Zemin D: 1 Bakırköy/İstanbul</p>
          
          <div className='inline-flex items-center text-center text-xl mt-6 mb-2'>
            <GrContact />
            <span className='ml-4'>Sosyal Medya</span>
          </div>
          <div className='flex text-xl'>
          <Link href='https://www.linkedin.com/company/ozdemir-hukuk-ve-danismanlik/' target='_blank'>
            <div className='rounded-full border-b border-[#E5BA73] shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            </Link>
            <Link href='https://www.instagram.com/hukukozdemir' target='_blank'>
            <div className='rounded-full ml-2 border-b border-[#E5BA73] shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  ease-in duration-300'>
                <FaInstagram />
            </div>
            </Link>
            
          </div>
        </div>
  
        <div className='mt-10 bg-white p-8'>
  <form ref={form} onSubmit={sendEmail}>
    <div className='mb-6'>
      <label htmlFor='user_name' className='block text-lg tracking-wide text-gray-700 font-semibold mb-2'>
      İsim Soyisim
      </label>  
      <input 
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type='text' 
        required 
        name='user_name'
        id='user_name'
      />
    </div>
    <div className='mb-6'>
      <label htmlFor='user_email' className='block text-lg tracking-wide text-gray-700 font-semibold mb-2'>
        Email
      </label>
      <input 
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type='email' 
        required 
        name='user_email'
        id='user_email'
      />
    </div>
    <div className='mb-6'>
      <label htmlFor='message' className='block text-lg tracking-wide text-gray-700 font-semibold mb-2'>
        Mesaj
      </label>
      <textarea 
        className='appearance-none resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        rows='6'
        required 
        name='message'
        id='message'
      ></textarea>
    </div>
    <div>
    <input required type="checkbox" id="check" name="check" value="Yes"></input>
    <Link target="_blank" href='/kisisel-veriler'><label className='ml-2 underline text-blue-400 cursor-pointer' htmlFor='check'>Kişisel verileri okudum, onaylıyorum.</label></Link>
    </div>
    <div className='flex justify-end'>
      <button 
        className='bg-[#E5BA73] hover:bg-[#f39f5f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
        type='submit'
        value='Send'
      >
        Gönder
      </button>
    </div>
  </form>
</div>
</div>
</div>
</div>
  )
}