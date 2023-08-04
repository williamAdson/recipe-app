import IngredientList from './IngredientsList'
import IngredientsStep from './IngredientsStep';
import StarRating from './StarRating';

function Recipe({name, ingredients, steps}){
    return(
        <>
            <section>
                <h1>{name}</h1>
                <IngredientList ingredients={ingredients} />
                <IngredientsStep title="Cooking Instructions" steps={steps} />
            </section>
            <StarRating></StarRating>
        </>
    )
}

export default Recipe;