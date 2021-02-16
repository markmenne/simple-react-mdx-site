import { useRef, MouseEvent as ReactMouseEvent } from 'react';
import useOutsideClick from './useOutsideClick';
import { useHistory } from "react-router-dom";
import './Menu.css';
import { MENU_ITEMS } from './MenuConfig';

export type ClosePopupHandlerType = (event?: Event | ReactMouseEvent) => void;

const SubMenu = ({
    closeSubMenuHandler,
}: {
    closeSubMenuHandler: (event?: Event | ReactMouseEvent) => void,
}) => {
    const history = useHistory();

    const subMenuElementRef = useRef(null);
    useOutsideClick(subMenuElementRef, closeSubMenuHandler, true);

    const processPageLoadHandler = (targetUrl: string, remote: boolean) => {
        if (remote) {
            window.location.href = targetUrl;
        } else {
            history.push(targetUrl);
        }
        closeSubMenuHandler();
    }

    const handleNavigationClick = (targetUrl: string, remote: boolean) => {
        return (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            processPageLoadHandler(targetUrl, remote);
        }

    }

    return (
        <>
            <div
                className="sub-menu-container"
                ref={subMenuElementRef}
            >

                {MENU_ITEMS.map((menuItem) => {
                    return <button onClick={handleNavigationClick(menuItem.targetUrl, menuItem.remote)}>
                        {menuItem.name}
                    </button>
                })}
            </div>
        </>
    );
}

export default SubMenu;
