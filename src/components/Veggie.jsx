import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import styled from "styled-components"
import '@splidejs/splide/css/core';
import '@splidejs/splide/css';
import { Link } from "react-router-dom";


const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggies();
  }, [])

  const getVeggies = async () => {

    const check = localStorage.getItem('veggie');
    if (check) {
      setVeggie(JSON.parse(check));
    } else {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tag=vegetarian`)
      const data = await api.json();
      console.log(data)
      setVeggie(data.recipes)
    }

  }

  return (
    <div>
      <Wrapper>
        <h1>Vegetarian Recipes</h1>
        <Splide
          options={{
            perPage: 3,
            gap: '2rem',
            arrows: false,
            pagination: false,
            drag: 'free'
          }}
        >
          {veggie.map((recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={'/recipe/' + recipe.id}>
                  <div className="card">
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className="overlay"></div>
                  </div>
                </Link>
              </SplideSlide>
            )
          }))}
        </Splide>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
export default Veggie