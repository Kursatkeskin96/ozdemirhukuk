import React from 'react'
import Contact from '@/components/Contact';
import { getDictionary } from '@/lib/dictionary'

export const metadata = {
  title: 'Özdemir Hukuk Bürosu | İletişim',
  description: 'Uzman hukuki danışmanlık almak için bizimle iletişime geçin. Istanbul şehrinde bulunan ofisimizi ziyaret edin. Bizi +90 533 300 36 94 numarasından arayabilir veya info@hukukozdemir.com adresine e-posta gönderebilirsiniz. Ayrıca bu sayfadaki iletişim formu aracılığıyla bize doğrudan mesaj gönderebilirsiniz. Hukuki ihtiyaçlarınız için buradayız.',
}
 

export default async function Iletisim({ params: { lang }}) {

  const { contact } = await getDictionary(lang)

  return (
    <>
  <div className='iletisim-bg flex flex-col items-center'>
    <div className="m-auto flex flex-col items-center">
    <h1 className="background-h lg:text-5xl text-xl w-fit mx-auto px-4 text-gray-200">{contact.h1} </h1>
    <p className="background-p lg:text-3xl text-lg lg:mt-4 mt-2 w-fit mx-auto px-4 text-gray-300">{contact.h2}</p>
  </div>
  </div>
  <Contact params={{ lang }} />
    </>
  );
}
