import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteRecipe, viewRecipe } from "../features/recipeSlice"
import { BsTrash } from "react-icons/bs"
import { FaPen } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const RecipeList = () => {

    const {RecipeList} = useSelector((state) => state.recipe)
    console.log(RecipeList)  
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(viewRecipe())
    },[])

    const trash =(id) =>{
        if(confirm("Do you want to delete this recipe")) {
            dispatch(deleteRecipe(id))
            dispatch(viewRecipe())

        }
    }
  return (
    <>
                <h1 className="text-center mt-5">BLOG LIST</h1>

    <div className="container my-5">
        <div className="row">
         {
          RecipeList.map((recipe,index)=>{
                 return(
                    <div className="col-lg-4 my-2" key={index}>
                    <div className="card shadow border-2">
                        <div className="card-body">
                            <h4>Title : {recipe?.title}</h4>
                            <ul>   
                                <li>Category : {recipe?.category} </li>
                                <li>Chef Name : {recipe?.chef} </li>
                                <li>Price: {recipe?.price}</li>
                            </ul>
                            <button onClick={()=> trash(recipe.id)} className="btn btn-danger"><BsTrash/></button>
                            <NavLink className="btn btn-warning mx-2" to={`/update/${recipe.id}`}><FaPen/></NavLink>
                        </div>
                    </div>
                </div>
                 )
            })
         }
        </div>
    </div>
    </>
  )
}

export default RecipeList