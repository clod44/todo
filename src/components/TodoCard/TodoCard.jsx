import { useTodo } from "@context/TodoProvider.jsx";
import { useState, useEffect } from "react";
import { ActionIcon, Paper, Checkbox, Flex } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react'
import { useModal } from "@context/ModalProvider.jsx";

const TodoCard = ({
    id,
    ...props
}) => {
    const { todos, getTodo, toggleTodo } = useTodo();
    const { openEditModal } = useModal();
    const [todo, setTodo] = useState(getTodo(id));

    useEffect(() => {
        setTodo(getTodo(id));
    }, [id, todos]);

    return (
        <Paper
            p="xs"
            ps={"lg"}
            radius="md"
            withBorder
            shadow="sm"
            className="animate-in zoom-in-75 fade-in-0 duration-300"
            {...props}
        >
            <Flex gap="sm" direction="row" align="center" className="p-0 ">
                <Checkbox
                    defaultChecked={todo.completed}
                    onChange={() => toggleTodo(id)}
                    label={todo.text}
                    className="flex-grow" />
                <ActionIcon
                    color="gray"
                    variant="subtle"
                    size="xl"
                    onClick={() => openEditModal(id)}
                >
                    <IconEdit />
                </ActionIcon>
            </Flex>
        </Paper>
    )
}

export default TodoCard