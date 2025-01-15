import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

const GradientBox = ({
    angle = 0,
    start = '50',
    end = '100',
    inverted = false, //use the other color scheme's color
    children,
    ...props
}) => {
    const { colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const isDarkMode = (colorScheme === (inverted ? 'light' : 'dark'));

    const backgroundColor = isDarkMode ? theme.colors.dark[7] : theme.colors.gray[0];
    const gradientBackground = `linear-gradient(${angle}deg, ${backgroundColor} ${start}%, transparent ${end}%)`;

    return (

        <div
            className="w-full h-full"
            style={{
                background: gradientBackground,
            }}
            {...props}
        >
            {children}
        </div>
    )
}

export default GradientBox