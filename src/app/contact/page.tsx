
import BannerChild from '@/layouts/BannerChild/main';
import BreadcrumbsItem from "@/components/Breadcrumbs/main";
import TitleContent from "@/components/TitleContent/main";
import ContactForm from '@/components/Contact/main';
import ContactDetail from '@/components/Contact/ContactDetail/ContactDetail';



const ContactPage = () => {
    return (
        <>
            <BannerChild title="Contact us" component={<BreadcrumbsItem />} />

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 relative">

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-10">

                    <div className="w-full lg:w-2/3">
                        <TitleContent title="get in touch">
                            <ContactForm />
                        </TitleContent>
                    </div>

                    <div className="w-full lg:w-1/3">
                        {/* <category /> */}
                        <TitleContent title='contact detail'>
                            <ContactDetail />
                        </TitleContent>

                    </div>

                    <div></div>

                </div>



            </div >

        </>
    );
}

export default ContactPage;