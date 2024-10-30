import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

function ContactForm() {

    return (
        <>
            <div className="w-full grid grid-cols-2 gap-4 mt-6 text-[2rem]">
                <Input size="lg"
                    type="text"
                    label="Your Name"
                    radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-normal bg-white text-default-500 rounded-sm p-10",
                    }}
                />
                <Input size="lg" type="number" label="Phone" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-normal bg-white text-default-500 rounded-sm p-10",
                    }}
                />
            </div>
            <div className="w-full h-full grid grid-cols-1 my-4">
                <Textarea
                    variant="faded"
                    radius="none"
                    label="Description"
                    placeholder="Enter your description"
                    classNames={{
                        base: "max-w-full h-[160px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-normal bg-white text-default-500 rounded-sm p-20",
                    }}
                />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
                <Input size="lg" type="text" label="Your Name" radius="none"
                    classNames={{
                        base: "max-w-full sm:max-w-[390px] h-[70px]",
                        mainWrapper: "h-full",
                        input: "text-medium",
                        inputWrapper: "h-full font-normal bg-white text-default-500 rounded-sm p-10",
                    }}
                />
                <Button radius="none" className="text-white bg-tertiary-color text-xl font-bold uppercase p-14">send message</Button>
            </div>
        </>
    );
}

export default ContactForm;