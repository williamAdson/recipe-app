function IngredientAmount({amount, measurement, name}){
    return (
        <>
            <li>{name}: {amount} {measurement}</li>
        </>
    );
}

export default IngredientAmount;