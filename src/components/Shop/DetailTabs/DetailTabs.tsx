'use client'

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function DetailTabs() {
    const tabs = [
        {
            id: "photos",
            label: "Photos",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: "music",
            label: "Music",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: "videos",
            label: "Videos",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    return (
        <div className="flex flex-col font-medium bg-backgroundPrimary-color mt-20">
            <Tabs aria-label="Dynamic tabs" items={tabs} radius="none" variant="bordered">
                {(item) => (
                    <Tab className="text-[2.4rem] md:text-3xl rounded-none" key={item.id} title={item.label}>
                        <Card radius="none" shadow="none">
                            <CardBody className="p-10">
                                {item.content}
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div >
    );
}