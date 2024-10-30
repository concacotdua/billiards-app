import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import images from "@/assets/images";
import { FaStar } from "react-icons/fa";
function CardsContent() {
    return (
        <div>
            <Card className="flex flex-col my-6 hover:shadow-lg transition-all duration-300" radius="none" shadow="sm">
                <CardBody className="overflow-visible p-0 border-b border-gray-300">
                    <Image
                        isZoomed
                        shadow="none"
                        radius="none"
                        width="100%"
                        alt='image'
                        className="w-full object-cover h-[350px]"
                        src={images.product.src}
                    />
                </CardBody>

                <CardFooter className="flex flex-col text-small justify-between py-12 space-y-4">
                    <div className="flex flex-col gap-2 space-y-2 items-center">
                        <p className="text-2xl font-semibold uppercase">Snooker licensed t-shirt</p>
                        <p className="text-3xl font-medium text-blue-500"><span className="line-through text-gray-400">$400</span> $290</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardsContent