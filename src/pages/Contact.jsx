import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d3d4-61f8-8d94-80f257427831/raw?se=2025-07-06T10%3A35%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=33f5811e-1ad4-537c-9ece-56a3a81fa43e&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-06T02%3A48%3A44Z&ske=2025-07-07T02%3A48%3A44Z&sks=b&skv=2024-08-04&sig=cFMqE3ga3%2BoBGhUenQAm2IUk0Lgoo0fwaquw5/YeMwM%3D" className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p className='text-gray-600'>BHURAPEER Streat No.3 <br />HATHRAS , UTTARPRADESH  </p>
          <p className='text-gray-600'>Tel:(+91) 9412589173 <br /> Email: Krishnasankhyadher@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Trendoor</p>
          <p className='text-gray-600'>Learn more about our terms and  job opportunity in future. </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Now</button>

        </div>

      </div>
    </div>
  )
}

export default Contact
