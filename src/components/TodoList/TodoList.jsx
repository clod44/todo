
import { Flex, Loader, Text } from '@mantine/core';
import { useTodo } from "@context/TodoProvider.jsx";
import { VList } from "virtua";
import TodoCard from "@components/TodoCard";
import { IconSparkles } from '@tabler/icons-react';
const TodoList = () => {
    const { todos, loading } = useTodo();

    console.count("rerendering")
    if (loading) return (
        <Flex align='center' justify='center' h='100%' direction='column' className='animate-in fade-in-0 zoom-in-75 duration-300'>
            <Loader size='xs' type='bars' color='gray' />
        </Flex>
    );


    if (todos.length === 0) return (
        <Flex align='center' justify='center' h='100%' direction='column' className='animate-in fade-in-0 zoom-in-75 duration-300'>
            <IconSparkles size={50} fill='gray' stroke={1.5} />
            <Text size='xs'>You are all done for now.</Text>
        </Flex>
    );

    return (
        <>
            <VList className='p-2 pb-10'>
                {todos.map((todo) => (
                    <div key={todo.id} className='mb-2'>
                        <TodoCard id={todo.id} />
                    </div>
                ))}
            </VList>
        </>
    )
}

export default TodoList