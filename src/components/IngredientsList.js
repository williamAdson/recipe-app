import IngredientAmount from "./IngredientsAmount";

function IngredientsList(props){
    return (
        <>
            <ul>
                {props.ingredients.map((ingredient, i)=>(
                    <IngredientAmount key={i} {...ingredient} />
                ))}
            </ul>
        </>
    );
}

export default IngredientsList;