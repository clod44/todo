import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import GradientBox from '@components/GradientBox';

const navlinks = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/profile',
        label: 'Profile',
    }
]
function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = "/" + (location.pathname.split("/")[1] ?? "");

    return (
        <div className='fixed w-full left-0 bottom-0 z-50'>
            <GradientBox>
                <Tabs
                    defaultValue={currentPath}
                    onChange={(value) => value !== currentPath && navigate(`${value}`)}
                >
                    <Tabs.List justify='center' grow>
                        {navlinks.map((link) => (
                            <Tabs.Tab
                                key={link.path}
                                value={link.path}
                            >
                                {link.label}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>
                </Tabs>
            </GradientBox>
        </div>
    );
}

export default Navbar;
