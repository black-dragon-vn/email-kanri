
import './App.css'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import EmloyeeCoponent from './Component/EmloyeeCoponent' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HelloWorld from './HelloWorld'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* {//https://localhost:3000/} */}
        <Route path="/" element = {<ListEmployeeComponent />} ></Route>
        {/* //https://localhost:3000/employees */}
        <Route path="/employees" element= {<ListEmployeeComponent />} ></Route>
        {/* //https://localhost:3000/add-employee */}
        <Route path="/add-employee" element= {<EmloyeeCoponent />} ></Route>
        {/* //https://localhost:3000/update-employee/:id */}
        <Route path="/update-employee/:id" element= {<EmloyeeCoponent />} ></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
