import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { createRecipe } from "../features/recipeSlice"
import { redirect, useNavigate } from "react-router-dom"

const RecipeForm = () => {
    const{register, handleSubmit, reset} = useForm()

    const redirect=useNavigate()
    const dispatch = useDispatch()
    function addedRecipe(data) {
        dispatch(createRecipe(data))
        alert("Recipe added!")
        redirect('/view')
    }
    return (
    <>
                <h1 className="text-center mt-5">RECIPE FORM</h1>

        <div className="col-lg-6 mx-auto my-5 p-5 shadow">
            <form action="" method="post" onSubmit={handleSubmit(addedRecipe)}>
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
                    <button className="btn btn-outline-danger">Add</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RecipeForm