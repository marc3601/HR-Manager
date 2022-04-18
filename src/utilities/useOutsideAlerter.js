import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useOutsideAlerter(wrapperRef, hideContextMenu) {
    const dispatch = useDispatch();
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                dispatch(hideContextMenu());
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}
