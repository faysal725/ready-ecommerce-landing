'use client'

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

export default function InputText({
  label,
  title,
  type = "text",
  value,
  required = false,
  errorMsg = "",
  onChange,
  ...props
}) {

  const [currentType, setCurrentType] = useState(type);


  return (
    <div className="relative w-full flex flex-col justify-between gap-2.5">
      <label htmlFor={label} className="block "
      >
        <span className="text-sm sm:text-base font-medium text-start text-[#0d1a29] capitalize">{title}</span>
        {
          required &&
          <span className="input-required-tag text-primary-red">*</span>
        }
      </label>

      <div className="relative">
        <input
          id={label}
          name={label}
          type={currentType}
          value={value}        // controlled
          onChange={onChange}
          {...props}
          className="h-10 sm:h-12 w-full px-3 sm:px-4 block rounded-xl bg-white/10 border border-[#e5e5e7]/[0.92] outline-red-light placeholder:text-xs sm:placeholder:text-base"
          required={required}
        />

        {
          type === 'password' &&
          <div className="absolute h-full top-0 right-0 pr-3 flex items-center">
            {
              currentType === 'password' ?
                <EyeIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('text')} />
                :
                <EyeSlashIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('password')} />
            }
          </div>
        }
      </div>
      
      {
        errorMsg &&
        <div className="text-xs text-red-500 text-start mt-1">{errorMsg}</div>
      }
    </div>
  )
}
