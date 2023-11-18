import "./main.css"; 
import NavBar from "./components/NavBar";
import About from "./pages/About/About.tsx"; 

function App() {


  return (
    <div className="container">
      <NavBar />
      
      <About />
    </div>
  )
}

export default App
