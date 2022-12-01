import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'


const Searched = () => {
    const [ getSearched, setGetSearched ] = useState([])

    let params = useParams();

    useEffect(() => {
        getSearchedRecipes(params.search);
    }, [params.search])

    const getSearchedRecipes = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&query={name}&number=20`)
        const data = await api.json();
        getSearchedRecipes(data.recipe)
        console.log(data.recipes)

    }

  return (
    <Grid>
        {getSearched.map(recipe => {
            return(
                <Card key={recipe.id}>
                  <Link to={'/recipe/' + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h3>{recipe.title}</h3>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
`
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none:
  }
  h3{
    text-align: center;
    padding: 1rem
  }
`;

export default Searched