import { createContext, useContext, useEffect, useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Textarea, ActionIcon, Flex, Text } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from "@tabler/icons-react";
import { useTodo } from '@context/TodoProvider.jsx';
const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
    const [editModalOpened, { open: editModalOpen, close: editModalClose }] = useDisclosure(false);
    const [currentEditModalTodo, setCurrentEditModalTodo] = useState(null);
    const { getTodo, removeTodo, updateTodo } = useTodo();
    const openEditModal = (id) => {
        setCurrentEditModalTodo(getTodo(id));
        console.log(currentEditModalTodo);
        editModalOpen();
    };

    const value = {
        openEditModal,
    };

    return (
        <ModalContext.Provider value={value}>
            <Modal
                opened={editModalOpened}
                onClose={editModalClose}
                title="Edit"
                centered

                overlayProps={{
                    opacity: 1,
                    blur: 1,
                }}
            >
                {currentEditModalTodo && (
                    <Flex direction="column" gap="sm">
                        <Textarea
                            placeholder="Buy Groceries"
                            defaultValue={currentEditModalTodo.text}
                            onChange={(e) => setCurrentEditModalTodo({ ...currentEditModalTodo, text: e.target.value })}
                        />
                        <Text size="xs" c={"dimmed"}>Created at: {
                            new Date(currentEditModalTodo.createdAt).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })
                        }</Text>

                        <Flex justify="space-between" align="center" gap="sm">
                            <ActionIcon
                                variant="outline"
                                color="red"
                                size={"lg"}
                                onClick={() => {
                                    removeTodo(currentEditModalTodo.id);
                                    editModalClose();
                                }}>
                                <IconTrash />
                            </ActionIcon>
                            <ActionIcon
                                size={"lg"}
                                onClick={() => {
                                    updateTodo(currentEditModalTodo.id, currentEditModalTodo.text);
                                    editModalClose();
                                }}>
                                <IconDeviceFloppy />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                )}
            </Modal>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a TodoProvider");
    }
    return context;
};