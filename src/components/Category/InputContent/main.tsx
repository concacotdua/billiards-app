import { Input, Button } from "@nextui-org/react";
import { FaPaperPlane } from "react-icons/fa";
const InputContent = () => {
    return (
        <div className="w-full flex items-center justify-between gap-2 my-8">
            <Input
                type="email"
                variant="flat"
                label="enter your email address"
                radius="none"
                classNames={{
                    base: "w-full sm:max-w-[350px] h-[50px]",
                    mainWrapper: "h-full",
                    input: "text-medium",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-sm p-5",
                }}
            />
            <Button className="w-full sm:w-auto rounded-none border-black/20 p-8 sm:p-10 text-xl sm:text-[2rem] text-white bg-tertiary-color uppercase">
                <FaPaperPlane />
            </Button>
        </div>
    )
}

export default InputContent