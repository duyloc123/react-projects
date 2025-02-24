
import CounterApp from "./pages/CounterApp"
import FetchAPI from "./pages/FetchAPI"
import ListProduct from "./pages/ListProduct"
import Register from "./pages/Register"
import RouterDOM from "./pages/RouterDOM"
import Todolist from "./pages/Todolist"

function App() {

  return (
    <>
      <CounterApp />
      <Todolist />
      <Register />
      <FetchAPI />
      <RouterDOM />
      <ListProduct />
      {/* Todo: Increment cart, Decrement cart */}
    </>
  )
}

export default App
