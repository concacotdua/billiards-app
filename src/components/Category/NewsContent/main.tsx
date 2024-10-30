'use client'
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListBoxWrapper";
function NewsContent() {
    return (
        <ListboxWrapper>
            <Listbox
                aria-label="Actions"
                onAction={(key) => alert(key)}
            >
                <ListboxItem key="new" textValue="4 hours ago">
                    <div className="flex flex-col flex-wrap gap-1 p-6 rounded-none uppercase">
                        <span className="text-lg text-gray-400 font-bold">4 hours ago</span>
                        <span className="text-2xl font-bold">Karlsson Tops Kristiansen in European Seniors</span>

                    </div>
                    <div className="w-full h-full border-b-1 border-black/20"></div>
                </ListboxItem>
                <ListboxItem key="copy" textValue="4 hours ago">
                    <div className="flex flex-col flex-wrap gap-1 p-6 rounded-none uppercase">
                        <span className="text-lg text-gray-400 font-bold">4 hours ago</span>
                        <span className="text-2xl font-bold">Pagulayan beats Van Boening for US Open 8-Ball Title</span>

                    </div>
                    <div className="w-full h-full border-b-1 border-black/20"></div>
                </ListboxItem>
                <ListboxItem key="edit" textValue="4 hours ago">
                    <div className="flex flex-col flex-wrap gap-1 p-6 rounded-none uppercase">
                        <span className="text-lg text-gray-400 font-bold">4 hours ago</span>
                        <span className="text-2xl font-bold">Therese Williamson is simply the Best in 8-ball according to the ratings</span>

                    </div>
                    <div className="w-full h-full border-b-1 border-black/20"></div>
                </ListboxItem>
                <ListboxItem key="delete" textValue="4 hours ago">
                    <div className="flex flex-col flex-wrap gap-1 p-6 rounded-none uppercase">
                        <span className="text-lg text-gray-400 font-bold">4 hours ago</span>
                        <span className="text-2xl font-bold">Dani Sánchez, great person, feared killer at the table</span>
                    </div>
                </ListboxItem>
            </Listbox>
        </ListboxWrapper>
    )
}

export default NewsContent