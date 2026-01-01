'use client'

import { CloudArrowUpIcon, DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState, useRef } from "react";

export default function InputFile({
    label,
    title,
    required = false,
    errorMsg = "",
    onChange,
    ...props
}) {
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            if (onChange) onChange(file); // Pass the file object back to parent
        }
    };

    const clearFile = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFileName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
        if (onChange) onChange(null);
    };

    return (
        <div className="relative w-full flex flex-col justify-between gap-2.5">
            {/* Label Section */}
            <label htmlFor={label} className="block">
                <span className="text-sm sm:text-base font-medium text-[#0d1a29] capitalize">
                    {title}
                </span>
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div className="relative">
                {/* Hidden Actual Input */}
                <input
                    ref={fileInputRef}
                    id={label}
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg .pdf, .doc, .docx, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    {...props}
                />

                {/* Custom Visible UI */}
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`h-14 sm:h-12 w-full px-3 sm:px-4 flex items-center justify-between cursor-pointer rounded-xl bg-white/10 border border-dashed border-[#e5e5e7]/[0.92] hover:border-red-light transition-colors ${errorMsg ? 'border-red-500' : ''}`}
                >
                    <div className="flex items-center gap-2 overflow-hidden w-full">
                        {fileName ? (
                            <>
                                <DocumentIcon className="h-5 w-5 text-primary-red shrink-0" />
                                <span className="text-sm truncate text-[#0d1a29]">{fileName}</span>
                            </>
                        ) : (
                            <div className="flex justify-center items-center gap-3 w-full">
                                <img src="/icons/upload.svg" alt="" />
                                <p className="text-sm text-gray-400">Upload project details, images, or documents</p>
                            </div>
                        )}
                    </div>

                    {fileName && (
                        <button
                            onClick={clearFile}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <XMarkIcon className="h-4 w-4 text-red-500" />
                        </button>
                    )}
                </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
                <div className="text-xs text-red-500 text-start mt-1">{errorMsg}</div>
            )}
        </div>
    )
}