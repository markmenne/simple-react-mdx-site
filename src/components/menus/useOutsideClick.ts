import { RefObject, useEffect } from "react";

const useOutsideClick = (
    ref: RefObject<HTMLElement>,
    callback: (event: Event) => void,
    active: boolean
) => {

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        };

        if (active) {
            document.addEventListener("click", handleClick);
        }

        return () => {
            if (active) {
                document.removeEventListener("click", handleClick);
            }
        };
    }, [active, callback, ref]);
};

export default useOutsideClick;
