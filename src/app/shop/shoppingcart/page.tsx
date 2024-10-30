import TitleContent from "@/components/TitleContent/main"
import BannerChild from "@/layouts/BannerChild/main"
import BreadcrumbsItem from "@/components/Breadcrumbs/main"
import ShopingCard from "@/components/Shop/ShopingCard"

const PageShopingCard = () => {
    return (
        <>
            <BannerChild title="product page" component={<BreadcrumbsItem />} />
            <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-4 mt-20">
                <div className="w-full lg:w-default-layout-w mt-20">
                    <TitleContent title="your shopping cart">
                        <ShopingCard />
                    </TitleContent>
                </div>
            </div>
        </>
    )
}

export default PageShopingCard