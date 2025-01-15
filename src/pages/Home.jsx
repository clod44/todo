
import TodoList from "@components/TodoList"
import Topbar from "@components/Topbar"
import Fab from "@components/Fab"
import { IconClipboardPlus } from "@tabler/icons-react"
import { useTodo } from "@context/TodoProvider"

const Home = () => {
    const { addTodo } = useTodo();
    return (
        <>
            <div className="fixed w-full h-full">
                <Topbar />
                <TodoList />
                <Fab onClick={() => addTodo()}><IconClipboardPlus size={40} /></Fab>
            </div>
        </>
    )
}

export default Home