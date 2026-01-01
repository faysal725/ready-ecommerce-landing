'use client';

import { useState } from 'react';

export default function Textarea({
  label,
  title,
  value,
  required = false,
  errorMsg = '',
  onChange,
  rows = 4,
  ...props
}) {
  return (
    <div className="relative w-full flex flex-col justify-between gap-2.5">
      <label htmlFor={label} className="block">
        <span className="text-sm sm:text-base font-medium text-start text-[#0d1a29] capitalize">
          {title}
        </span>
        {required && <span className="input-required-tag text-primary-red">*</span>}
      </label>

      <div className="relative">
        <textarea
          id={label}
          name={label}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          {...props}
          className="w-full px-3 sm:px-4 py-3 block rounded-xl bg-white/10 border border-[#e5e5e7]/[0.92] outline-red-light placeholder:text-xs sm:placeholder:text-base resize-y min-h-24"
        />
      </div>

      {errorMsg && (
        <div className="text-xs text-red-500 text-start">{errorMsg}</div>
      )}
    </div>
  );
}