import BannerChild from "@/layouts/BannerChild/main"
import BreadcrumbsItem from "@/components/Breadcrumbs/main"
import { FaStar } from 'react-icons/fa';
import { ItemDetail } from "@/components/Shop";
import DetailTabs from "@/components/Shop/DetailTabs/DetailTabs";

const PRODUCT_ITEMS = [
    {
        id: 2,
        title: 'Nike Air Zoom Pegasus',
        image: 'https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg?semt=ais_hybrid',
        price: '$400',
        content: 'Built for beginners and experienced runners, the Nike Air Zoom Pegasus Running Shoe features an updated, lighter Flymesh material that helps reduce heat buildup when you run. The tried and true support runners have come to love remains.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },

]
const ProdPage = () => {
    return (
        <>
            <BannerChild title="product page" component={<BreadcrumbsItem />} />
            <div className="flex justify-center items-center">
                <div className="w-full md:w-11/12 lg:w-default-layout-w">
                    <ItemDetail data={PRODUCT_ITEMS} />
                    <DetailTabs />
                </div>
            </div>
        </>
    )
}
export default ProdPage