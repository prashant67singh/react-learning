import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='flex flex-col w-2/3 self-stretch shadow-xl p-2 bg-white rounded-lg'>
      <h1 className='text-center text-red-600 text-3xl font-bold'>Todo Redux Toolkit </h1>
      <AddTodo/>
      <TodoList></TodoList>
    </div>
  )
}

export default App
