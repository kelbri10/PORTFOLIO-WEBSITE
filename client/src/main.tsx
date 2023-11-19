import React from 'react'
import ReactDOM from 'react-dom/client'
import{ 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; 
import About from './pages/About/About.tsx';
import Work from './pages/Work/Work.tsx';
import Contact from './pages/Contact.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      
      <RouterProvider router={router} />
      
  </React.StrictMode>
)
