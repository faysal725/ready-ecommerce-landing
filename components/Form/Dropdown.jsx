"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Dropdown({
    label,
    title,
    value,
    required = false,
    returnValue = "value",
    showValue = 'value',
    errorMsg = "",
    onChange,
    options = [],
    ...props
}) {
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

            <div className="relative h-10 sm:h-12 w-full block  text-xs sm:text-base font-normal bg-white cursor-pointer">
                <select
                    id={label}
                    name={label}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                    className="w-full h-full pl-3 sm:pl-4 appearance-none border border-[#e5e5e7]/[0.92] outline-red-light rounded-xl"
                >
                    <option value="" disabled>
                        Select {title}
                    </option>

                    {options.map((opt, i) => (
                        <option key={i} value={opt[returnValue] ? opt[returnValue] : opt}>
                            {opt[showValue] ? opt[showValue] : opt}
                        </option>
                    ))}
                </select>

                <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 h-3 w-3 text-gray-700" aria-hidden="true" />
            </div>

            <div>
                <p className="text-xs text-red-500 text-start mt-1">{errorMsg}</p>
            </div>
        </div>
    );
}
