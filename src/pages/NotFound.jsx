import { Flex, Text } from "@mantine/core"
import { IconAlertSquareRounded } from "@tabler/icons-react"



const NotFound = () => {
    return (
        <div className="fixed w-full h-full">
            <Flex align='center' justify='center' h='100%' direction='column' className='animate-in fade-in-0 zoom-in-75 duration-300'>
                <Text size='xl' py={"sm"}><IconAlertSquareRounded size={50} stroke={1.5} /></Text>
                <Text size='sm' >Something went wrong</Text>
            </Flex>
        </div>
    )
}

export default NotFound