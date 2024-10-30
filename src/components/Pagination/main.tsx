import { Pagination } from "@nextui-org/react";

export default function PaginationComponent() {
    return (
        <Pagination
            showControls
            total={14}
            initialPage={1}
            radius="none"
            classNames={{
                base: 'flex justify-center my-4',
                wrapper: 'flex items-center space-x-2',
                item: 'flex items-center justify-center w-16 h-16 text-2xl border border-gray-300 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100',
                prev: 'w-16 h-16 flex items-center justify-center text-2xl border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200',
                next: 'w-16 h-16 flex items-center justify-center text-2xl border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200',
                cursor:
                    "w-16 h-16 text-2xl bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
            }}
        />
    );
}
