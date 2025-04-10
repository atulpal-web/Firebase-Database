import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import RecipeForm from "./pages/RecipeForm"
import 'bootstrap/dist/css/bootstrap.css'
import RecipeList from "./pages/RecipeList"
import RecipeUpdate from "./pages/RecipeUpdate"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeForm />} ></Route>
          <Route path="/View" element={<RecipeList />} ></Route>
          <Route path="/update/:id" element={<RecipeUpdate />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App