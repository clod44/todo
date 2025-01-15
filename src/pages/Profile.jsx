import { useEffect } from 'react'
import { IconSun, IconMoonStars, IconBrandGithub, IconBuildingFactory2 } from '@tabler/icons-react';
import { useMantineColorScheme, Switch, Flex, Title, Button, Text, ScrollArea, ActionIcon } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import GradientBox from '@components/GradientBox';
import { modals } from '@mantine/modals';
import { useTodo } from '@context/TodoProvider';
const Profile = () => {
    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const [currentColorScheme, setCurrentColorScheme] = useDebouncedState(colorScheme, 200);

    const { eraseAllData, fillRandomData } = useTodo();

    useEffect(() => {
        setColorScheme(currentColorScheme);
    }, [currentColorScheme]);

    const openEraseAllDataModal = () => {
        modals.openConfirmModal({
            title: 'Delete All Data',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete all your data and clear browser storage?
                </Text>
            ),
            labels: { confirm: 'Delete', cancel: "Cancel" },
            confirmProps: { color: 'red', variant: 'outline' },
            cancelProps: { variant: 'default' },
            onCancel: () => { },
            onConfirm: () => eraseAllData(),
        })
    };

    return (
        <>
            <div className='fixed w-full h-full '>
                <GradientBox inverted={true} angle={165} start='-20' end='50'>
                    <ScrollArea h={'100%'} w={'100%'} type='never'>
                        <Flex
                            align='center'
                            justify='center'
                            direction='column'
                            gap={'md'}
                            w={'100%'}
                            className='py-24'>
                            <Title order={1}>todo</Title>
                            <Switch
                                mb={'xl'}
                                size="xl"
                                color="dark.4"
                                offLabel={<IconSun size={16} stroke={2.5} />}
                                onLabel={<IconMoonStars size={16} stroke={2.5} />}
                                defaultChecked={colorScheme === 'dark'}
                                onChange={(event) => setCurrentColorScheme(event.currentTarget.checked ? 'dark' : 'light')}
                                styles={(theme) => ({
                                    track: {
                                        boxShadow: theme.shadows.md,
                                    }
                                })}
                            />
                        </Flex>

                        <Flex align='center' justify='center' gap={'md'} p={'md'}>
                            <ActionIcon
                                variant='default'
                                size={"xl"}
                                onClick={openEraseAllDataModal}
                                style={{ boxShadow: '0px 0px 3rem rgba(0, 0, 0, 0.5)' }}
                                className='animate-in fade-in slide-in-from-bottom-4 duration-500'
                            >
                                <IconBuildingFactory2 size={30} stroke={1.5} />
                            </ActionIcon>
                            <a href="https://github.com/clod44/todo" target="_blank" rel="noopener noreferrer">
                                <ActionIcon
                                    variant="default"
                                    size={"xl"}
                                    style={{ boxShadow: '0px 0px 3rem rgba(0, 0, 0, 0.5)' }}
                                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                                >
                                    <IconBrandGithub size={30} stroke={1.5} />
                                </ActionIcon>
                            </a>

                        </Flex>
                        <div className='h-20' />

                    </ScrollArea>

                </GradientBox>
            </div>

        </>
    )
}

export default Profile