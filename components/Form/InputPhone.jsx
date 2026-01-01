'use client'
import React, { useState } from 'react'
import { Check, ChevronDownIcon, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FlagIcon } from '@heroicons/react/20/solid'



function SelectedCountry({ flag, phone_code }) {
    return (
        <div className='flex items-center gap-2'>

            <img src={flag} alt="" className='h-5 w-7 object-cover' />
            {/* <p>{phone_code}</p> */}
        </div>
    )
}


export default function InputPhone(
    {
        onCountryChange,
        onPhoneNumberChange,
        title,
        required = false,
        errorMsg = "",
        countryOption = []
    }) {

    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [currentCode, setCurrentCode] = useState("+000")
    return (

        <div className="relative w-full flex flex-col justify-between">
            <div className="block"
            >
                <span className="text-sm sm:text-base font-medium text-start text-[#0d1a29] capitalize">{title}</span>
                {
                    required &&
                    <span className="input-required-tag text-primary-red">*</span>
                }
            </div>
            <div className='rounded-xl bg-white/10 border border-[#e5e5e7]/[0.92] h-12 flex justify-start items-center  mt-2.5 mb-1'>
                <Popover open={open} onOpenChange={setOpen} className="">
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="
                                    w-fit
                                    h-full
                                    rounded-xl
                                    rounded-r-none
                                    border-t-0
                                    border-l-0
                                    border-b-0                                
                                    justify-between
                                    px-3
                                    py-0
                                    text-base
                                    text-[#4a4a4a]
                                    border-gray-300
                                    focus:ring-2 focus:ring-red-light
                                "
                        >
                            {id
                                ? <SelectedCountry {...countryOption.find((country) => `${country.name} ${country.phone_code}` === id)} />
                                : <img src="/icons/form/earth1.svg" />}
                            <ChevronDownIcon className='h-5 w-5 text-gray-500' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-36 p-0">
                        <Command>
                            <CommandInput placeholder="Search country..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No country found.</CommandEmpty>
                                <CommandGroup>
                                    {countryOption.map((country) => (
                                        <CommandItem
                                            key={country.id}
                                            value={`${country.name} ${country.phone_code}`}
                                            onSelect={(currentId) => {
                                                setId(currentId === id ? "" : currentId)
                                                setOpen(false)
                                                onCountryChange(currentId === id ? "" : country.id)
                                                setCurrentCode(currentId === id ? "" : country.phone_code)
                                            }}
                                        >
                                            <img src={country.flag} alt="" className='h-5 w-7 object-cover' />
                                            {country.phone_code}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    id === country.id ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <div className=' bg-white/10   rounded-xl 
                                    rounded-l-none w-full h-full flex justify-start'>
                    <input type="text" className='w-16 h-full pl-3 placeholder:text-xs sm:placeholder:text-base disabled:text-gray-500' value={currentCode} disabled/>
                    <input type="text" onChange={(e) => onPhoneNumberChange(e.target.value)} className='w-full h-full placeholder:text-xs sm:placeholder:text-base outline-red-light outline-none' />
                </div>
            </div>
            {
                errorMsg &&
                <div className="text-xs text-red-500 text-start">{errorMsg}</div>
            }
        </div>

    )
}








