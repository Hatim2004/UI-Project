import Button from '@mui/material/Button';
import Root from './pages/Root';
import Home from './pages/Home';
import Facts from './pages/Facts';
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}from "react-router-dom"


const router = createBrowserRouter(  
  createRoutesFromElements(
    <Route path="/"      element={<Root />}>
    <Route index         element={<Home />}/>
    <Route path="facts" element={<Facts />}/>
    </Route>
    )
);

export default function Myapp(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}