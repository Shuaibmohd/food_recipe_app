import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {

  const [ cuisine, setCuisine ] = useState([])
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type)
  }, [params.type])

  const getCuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine={name}&number=20`)
    const data = await api.json();
    console.log(data.recipes)
    setCuisine(data.recipes)
  }




  return <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
  >
    {cuisine.map(recipe => {
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
  
};

const Grid = styled(motion.div)`
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

export default Cuisine