function Recipe({name, ingredients, steps}){
    return(
        <>
            <section>
                <h1>{name}</h1>
                <ul>
                    {ingredients.map((ingredient, i)=>(
                        <li key={i}>
                            {ingredient.name}
                        </li>
                    ))}
                </ul>
                <section>
                    <h2>Cooking Instructions</h2>
                    {steps.map((step, i)=>(
                        <p key={i}>
                            {step}
                        </p>
                    ))}
                </section>
            </section>
        </>
    )
}

export default Recipe;