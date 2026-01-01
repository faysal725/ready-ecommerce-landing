


export default function HeroSectionShimmer() {

    return (
        <section className="relative py-10 overflow-hidden pt-28 lg:pt-36 xl:pt-10">
            <div className="container z-10 relative">
                <div
                    className="min-h-[50vh] flex flex-col justify-center space-y-[60px]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 px-0 w-full">
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-10 py-1">
                                    <div className="space-y-3">
                                        <div className="h-4 bg-slate-700 rounded max-w-sm"></div>
                                        <div className="h-4 bg-slate-700 rounded max-w-sm"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-700 rounded col-span-3"></div>
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        </div>
                                    </div>

                                    <div className="h-14 w-36 bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="border border-slate-700 shadow rounded-md p-4 max-w-sm h-full w-full mx-auto"
                            >
                                <div
                                    className="animate-pulse flex justify-center items-center space-x-4 h-full"
                                >
                                    <div className="rounded-full bg-slate-700 h-36 w-36"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-pulse flex space-x-4 w-full">
                        <div className="flex-1 space-y-10 py-1 w-full">
                            <div className="h-28 w-full bg-slate-400 rounded-md"></div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute top-10 left-24 w-[138px] h-[138px] bg-[#245DBB] blur-[200px] z-0 rounded-full"
                ></div>
                <div
                    className="absolute bottom-20 left-24 w-[138px] h-[138px] bg-[#42BFED] blur-[200px] z-0 rounded-full"
                ></div>
                <div
                    className="absolute bottom-10 right-1/2 w-[138px] h-[138px] bg-[#8B5CF6] blur-[200px] z-0 rounded-full"
                ></div>
                <div
                    className="absolute bottom-10 right-10 w-[138px] h-[138px] bg-[#8B5CF6] blur-[200px] z-0 rounded-full"
                ></div>
            </div>
        </section>
    )
}