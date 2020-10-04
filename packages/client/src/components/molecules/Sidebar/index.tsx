import React from 'react';
import { MenuIcon } from '../../icons';
import styled from 'styled-components';
import { HomeIcon } from '../../icons/Home';
import { NotificationIcon } from '../../icons/Notification';
import { IThemed } from '../../../contexts/Themes';
import { useLocation, Link } from 'react-router-dom';

interface ISidebarProps {
    open?: boolean;
}
const SidebarDiv = styled.div`
    z-index: 10;
    width: 80px;
    min-width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props: ISidebarProps) => (props.open ? '0px' : '-80px')};
    transition: margin 400ms;
    background-color: ${(props: IThemed) => props.theme.bg_card};
    box-shadow: 1px 1px 3px 1px #e0e0e0;
`;
const Sidehead = styled.div``;
const SideCenter = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    width: 100%;
`;
const SidebarHandle = styled.div`
    z-index: 25;
    position: absolute;
    cursor: pointer;
    padding: 15px 28px;
`;

const SideFooter = styled.div``;
interface ISidebarItemProps {
    active?: boolean;
}
const SideBarItem = styled.div`
    color: ${(props: ISidebarItemProps & IThemed) =>
        props.active ? props.theme.fg : props.theme.fg_inactive};
    border-left: ${(props: ISidebarItemProps & IThemed) =>
        props.active ? `solid 5px ${props.theme.fg}` : 'none'};
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: ${(props: ISidebarItemProps) => (props.active ? '5px 5px 5px 0' : '5px 5px 5px 5px')};
    svg {
        height: 22px;
        width: 24px;
        margin: 5px;
    }
`;

export const Sidebar = () => {
    const [sbOpen, setSbOpen] = React.useState(true);
    let location = useLocation();
    return (
        <>
            <SidebarHandle onClick={() => setSbOpen(v => !v)}>
                <MenuIcon />
            </SidebarHandle>
            <SidebarDiv open={sbOpen}>
                <Sidehead></Sidehead>
                <SideCenter>
                    {ROUTES.map(({ to, Icon }) => (
                        <Link {...{ to }}>
                            <SideBarItem active={to === location.pathname}>
                                <Icon />
                            </SideBarItem>
                        </Link>
                    ))}
                </SideCenter>
                <SideFooter></SideFooter>
            </SidebarDiv>
        </>
    );
};

const ROUTES = [
    {
        to: '/',
        Icon: HomeIcon,
    },
    {
        to: '/notifications',
        Icon: NotificationIcon,
    },
];
