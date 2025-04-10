import { data, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { updateRecipe, viewRecipe } from "../features/recipeSlice"
import { useForm } from "react-hook-form"

const RecipeUpdate = () => {
    const {id} = useParams()

    const{register, handleSubmit, reset} = useForm() 

    // all recipe data 
    const {RecipeList} = useSelector((state)=> state.recipe)
    console.log(RecipeList)

    //single recipe data
    const singleRecipe= RecipeList.find((recipe)=>{
        return recipe.id===id
    })
    const dispatch= useDispatch()
    useEffect(()=> {
        dispatch(viewRecipe())
        reset(singleRecipe)
    },[dispatch])


    const redirect = useNavigate()
    const update = (data) => {
        dispatch(updateRecipe(data))
        redirect(-1)
    }
    
  return (
    <>
     <div className="col-lg-6 mx-auto my-5 p-5 shadow">
            <form action="" method="post" onSubmit={handleSubmit(update)}>
                <div className="mt-4">
                    <select className="form-select" {...register('category')}>
                        <option value="">--- Select Category ---</option>
                        <option value="Spicy">Spicy</option>
                        <option value="Sweet">Sweet</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mt-4">
                    <input type="text" {...register('title')} placeholder="Title" className="form-control" />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('chef')} placeholder="Chef" className="form-control" />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('price')} placeholder="Price" className="form-control" />
                </div>  
                <div className="mt-4">
                    <button className="btn btn-outline-warning">Update</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RecipeUpdate