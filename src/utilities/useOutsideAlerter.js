import { useEffect } from "react";

export default function useOutsideAlerter(wrapperRef, setContextMenu) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setContextMenu({
                    show: false,
                    targetID: 0,
                    cord: { x: 0, y: 0 },
                });
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, setContextMenu]);
}
