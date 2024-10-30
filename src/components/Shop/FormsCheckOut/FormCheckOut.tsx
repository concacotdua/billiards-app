
import { Input } from "@nextui-org/react"

interface CheckboxProps {
    checkbox: React.ReactNode;
}

const FormCheckOut = ({ checkbox }: CheckboxProps) => {
    return (
        <div className="container mx-auto gap-2">
            {/* Hàng đầu tiên với 2 input */}
            <div className="w-full grid grid-cols-2 gap-4 mt-6 text-[2rem]">
                <Input size="lg"
                    type="text"
                    label="Your Name"
                    radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
                <Input size="lg" type="number" label="Phone" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
            </div>

            {/* Hàng thứ hai với 1 input chiếm toàn bộ chiều rộng */}
            <div className="w-full grid grid-cols-1 gap-4 mt-4">
                <Input size="lg" type="text" label="Full Address" radius="none"
                    classNames={{
                        base: "w-full h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
            </div>

            {/* Hàng thứ ba với 2 input */}
            <div className="w-full grid grid-cols-2 gap-4 mt-4">
                <Input size="lg" type="text" label="City" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-300 bg-white rounded-sm p-10",
                    }}
                />
                <Input size="lg" type="text" label="Postal Code" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
            </div>

            {/* Hàng thứ tư với 2 input */}
            <div className="w-full grid grid-cols-2 gap-4 mt-4">
                <Input size="lg" type="text" label="Country" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px] ",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
                <Input size="lg" type="text" label="State/Province" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-semibold text-default-500 bg-white rounded-sm p-10",
                    }}
                />
            </div>

            <div className="mt-4">{checkbox}</div>
        </div>
    );
};


export default FormCheckOut