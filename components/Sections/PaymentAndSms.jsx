import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";



// payment section
function PaymentsSection() {


    const paymentGateways = [
        { name: 'stripe', imgSrc: '/icons/payments/stripe.svg', link: "#" },
        { name: 'paystack', imgSrc: '/icons/payments/paystack.svg', link: "#" },
        { name: 'stripe', imgSrc: '/icons/payments/razor.svg', link: "#" },
        { name: 'stripe', imgSrc: '/icons/payments/bkash.svg', link: "#" },
        { name: 'paypal', imgSrc: '/icons/payments/paypal.svg', link: "#" },
        { name: 'paytabs', imgSrc: '/icons/payments/paytabs.svg', link: "#" },
        { name: 'aamarpay', imgSrc: '/icons/payments/aamarpay.svg', link: "#" },
    ]


    const smsGateways = [
        { name: 'twillio', imgSrc: '/icons/smsGateway/twillio.svg', link: "#" },
        { name: 'telesign', imgSrc: '/icons/smsGateway/telesign.svg', link: "#" },
        { name: 'telnyx', imgSrc: '/icons/smsGateway/telnyx.svg', link: "#" },
        { name: 'nexmo', imgSrc: '/icons/smsGateway/nexmo.svg', link: "#" },
    ]
    return (
        <section className="space-y-10">
            <div className="space-y-6">
                <p
                    className="text-xl font-semibold text-center text-primary-black"
                >
                    Payment Gateways
                </p>


                <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                    {
                        paymentGateways.map((gateway, index) => (
                            <div className="flex justify-center items-center h-20 w-full rounded-xl bg-white border border-[#e9ecef]" key={index}>
                                <img src={gateway.imgSrc} alt="" className="w-[73.22px] h-[30.51px] object-contain" /></div>))
                    }
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                <p
                    className="text-xl font-semibold text-center text-primary-black"
                >
                    SMS Gateways
                </p>


                <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl w-full">
                    {
                        smsGateways.map((gateway, index) => (
                            <div className="flex justify-center items-center h-20 w-full rounded-xl bg-white border border-[#e9ecef]" key={index}>
                                <img src={gateway.imgSrc} alt="" className="w-[73.22px] h-[30.51px] object-contain" /></div>))
                    }
                </div>

                <p className="text-base lg:text-xl text-center text-[#9a9a9a]">
                    + More integrations available on request
                </p>
            </div>
        </section>
    )
}

function PaymentAndSms() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Payment & SMS Integrations"
                    subHeadingText="Connect popular gateways and messaging services effortlessly."
                    varient="light"
                />
            }
            mainComponent={<PaymentsSection />}
            backgroundColorClass="bg-white pt-6 lg:pt-[50px]"
        />
    )
}

export default PaymentAndSms;