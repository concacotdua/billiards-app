import { useState, useEffect } from "react";

export const useScrollHeader = () => {
    const [showFullHeader, setShowFullHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowFullHeader(false);
        }
        else if (currentScrollY < lastScrollY || currentScrollY === 0) {
            setShowFullHeader(true);
        }
        setLastScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);


    return { showFullHeader }
}

