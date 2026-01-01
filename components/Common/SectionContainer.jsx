

export default function SectionContainer({HeadingComponent, mainComponent, backgroundColorClass}) {
    return (
        <section className={ backgroundColorClass + " py-6 md:py-[100px] overflow-hidden"}>
            <div className="container flex flex-col gap-6 lg:gap-[60px] items-center">
                {
                    HeadingComponent && HeadingComponent
                }
                <div className="w-full">
                    {
                        mainComponent && mainComponent
                    }
                </div>
            </div>
        </section>
    );
}