'use client'

import React, { useEffect, useState } from 'react'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Textarea from '../Textarea'
import { Button } from '@/components/ui/button'
import InputPhone from '../InputPhone'
import InputFile from '../InputFile'
import ButtonLarge from '@/components/Button/ButtonLarge'
import {fullBaseUrl} from '@/lib/exportVariables'
import crud from '@/lib/axios'
import ReCaptcha from '../ReCaptcha'


export default function ConsultationForm({ countryOption }) {

  // base api
  const businessTypeApi = fullBaseUrl() + '/business-types'

  // state
  const [businessTypeOptions, setBusinessTypeOptions] = useState([])



  async function getBusinessTypeOptions() {
    try {
      const res = await crud.get(businessTypeApi);
      // console.log(res.data.data)
      setBusinessTypeOptions(res.data.data)
      // return res.data; 
    } catch (err) {
      // toast.error(err.response?.data?.message || "Login failed");
      // return rejectWithValue(err.response.data);
    }
  }



  useEffect(() => {
    getBusinessTypeOptions();
  }, [])


  return (
    <form action="" className='w-full h-fit rounded-xl bg-white border border-white/20 p-4 md:p-6 relative z-10'>
      <p
        className=" text-lg font-semibold text-left text-primary-red"
      >
        Fill the Form — We'll Call You Back In 24hr
      </p>


      <div className='flex flex-col gap-4 mt-6 md:mt-9 mb-0 lg:mb-6'>
        <InputText
          label="name"
          title="Name"
          type="text"
          required={true}
          placeholder="name"
        />
        <InputPhone
          title="Name"
          onCountryChange={(id) => console.log(id, 'asdfsdf')}
          countryOption={countryOption.countries}
          onPhoneNumberChange={(data) => console.log(data)}
          phoneLabel="Phone Number"
        />
        <InputText
          label="email"
          title="Email Address"
          type="email"
          required={true}
          placeholder="example@email.com"
        />
        <Dropdown
          label="subject"
          title="Subject"
          options={businessTypeOptions}
        />
        <Textarea
          label="message"
          title="Your Message"
          placeholder="Write something..."
          required
        />

        <InputFile
          label="requirements"
          title="Upload Requirements (Optional)"
          accept="image/png, image/jpeg"
          onChange={(file) => console.log(file)}
        />
sdfsdfsdf
        <ReCaptcha />
        <ButtonLarge
          name="Explore The Demo"
          additionalClass="w-full lg:w-[234px]"
        />
      </div>
    </form>
  )
}
