import Contact from "./Contact";
import Recipe from "./Recipe";

function Menu(props){
    return (
        <>
            <article>
                <header>
                    <h1>{props.title}</h1>
                    <Contact></Contact>
                </header>
                <div>
                    {props.recipes.map((recipe, i)=>(
                        <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
                    ))}
                </div>
            </article>
        </>
    )
}

export default Menu;