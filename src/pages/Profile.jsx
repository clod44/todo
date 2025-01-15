import { useEffect } from 'react'
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useMantineColorScheme, Switch, Flex, Title, Button, Text, ScrollArea } from '@mantine/core';
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

            <div className='fixed w-full h-full'>
                <ScrollArea h={'100%'} w={'100%'} type='never'>
                    <GradientBox inverted={true} angle={170} start='-10' end='80'>
                        <Flex
                            align='center'
                            justify='center'
                            direction='column'
                            gap={'md'}
                            w={'100%'}
                            className='aspect-square'>
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
                    </GradientBox>

                    <Flex align='center' justify='center' direction='column' gap={'md'} p={'md'}>
                        <Button variant='outline' color='red' onClick={openEraseAllDataModal}>Erase All Data</Button>
                        <Button variant='default' onClick={fillRandomData}>Fill Random Data</Button>
                    </Flex>
                    <div className='h-20' />
                </ScrollArea>
            </div>

        </>
    )
}

export default Profile