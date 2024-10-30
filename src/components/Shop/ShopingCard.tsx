'use client'


import { Button } from "@nextui-org/react";
import CompoTable from "./CompoTable/CompoTable";

const ShopingCard = () => {

    return (
        <>
            <div className="flex flex-col w-full mt-10">
                <CompoTable />

                <div className="flex items-center justify-end gap-10 mt-20">
                    <p className="uppercase text-3xl text-gray-400 font-semibold">Total</p>
                    <span className="text-[4rem] relative">580
                        <p className="absolute top-6 left-[-10px] text-3xl">$</p>
                    </span>
                    <Button className="bg-tertiary-color text-white text-xl p-10 rounded uppercase font-bold">
                        proceed to checkout
                    </Button>
                </div>
            </div>
        </>



    );
};

export default ShopingCard;
