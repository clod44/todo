import { ActionIcon, useMantineTheme } from "@mantine/core";

const Fab = ({
    children = <>+</>,
    onClick = () => { },
}) => {
    const theme = useMantineTheme();
    const primaryColor1 = theme.colors[theme.primaryColor][6];
    const primaryColor2 = theme.colors[theme.primaryColor][3];

    return (
        <ActionIcon
            variant="gradient"
            gradient={{ deg: 135, from: primaryColor1, to: primaryColor2 }}
            onClick={onClick}
            size={65}
            className="fixed bottom-32 right-10 z-50 animate-in slide-in-from-right-full fade-in-0 duration-500 rounded-full"
        >
            {children}
        </ActionIcon>
    );
}

export default Fab;
