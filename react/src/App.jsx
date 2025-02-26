
import CounterApp from "./pages/CounterApp"
import FetchAPI from "./pages/FetchAPI"
import Register from "./pages/Register"
import RouterDOM from "./pages/RouterDOM"
import Todolist from "./pages/Todolist"
import Cart from "./Cart/Cart"

function App() {

  return (
    <>
      <CounterApp />
      <Todolist />
      <Register />
      <FetchAPI />
      <RouterDOM />
      <Cart />
    </>
  )
}

export default App
