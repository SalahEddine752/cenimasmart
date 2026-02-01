import './App.css';
// 1
import { Navbar } from "./components/ui/navbar"
import { Footer } from "./components/ui/footer"
import { Card } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Modal } from "./components/ui/modal"
import { useState } from "react"

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={["Home", "Movies", "Booking", "Contact"]} />

      <main className="flex-1 flex items-center justify-center bg-gray-100 p-6">
        <Card className="w-[350px] space-y-4">
          <h2 className="text-xl text-center font-bold">Login</h2>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>
            Login
          </Button>
        </Card>
      </main>

      <Footer />

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold">Welcome!</h2>
        <p>You have successfully logged in.</p>
      </Modal>
    </div>
  )
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
