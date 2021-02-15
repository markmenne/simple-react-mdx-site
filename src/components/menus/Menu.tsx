import { useRef, useState, MouseEvent as ReactMouseEvent } from 'react';
import useOutsideClick from './useOutsideClick';
import { MenuIcon } from './MenuIcon';
import './Menu.css';
import SubMenu from './SubMenu';

const Menu = () => {
    const [isShowingSubMenu, setIsShowingSubMenu] = useState<boolean>(false);
    const menuElementRef = useRef(null);

    const showSubMenuHandler = (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        setIsShowingSubMenu(true);
    };

    const closeSubMenuHandler = (event?: Event | ReactMouseEvent) => {
        setIsShowingSubMenu(false);
    };

    useOutsideClick(menuElementRef, closeSubMenuHandler, true);

    return (
        <div
            className="menu-containter"
            ref={menuElementRef}>
            <button onClick={showSubMenuHandler} >
                <MenuIcon />
            </button>
            <span>&nbsp;<b>DS2Data.com</b>&nbsp;&nbsp;&nbsp;Easy data loading and navigation for CSV, PostgreSQL and more</span>

            {
                isShowingSubMenu
                    ? (
                        <SubMenu
                            closeSubMenuHandler={closeSubMenuHandler}
                        />
                    )
                    : (
                        null
                    )
            }
        </div>
    );
}

export default Menu;
