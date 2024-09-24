import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <nav>Navbar</nav>
        <div>
          <Outlet />
        </div>
        <footer>Footer</footer>
      </div>
    </>
  )
}

export default App
