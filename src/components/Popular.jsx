import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/core';
import '@splidejs/splide/css';
import { Link } from "react-router-dom";




const Popular = () => {

    const [ popular, setPopular] = useState([]);

    useEffect(() => {
        getPopRecipes();
    }, [])

    const getPopRecipes = async () => {

        const check = localStorage.getItem('popular')

        if(check){
            setPopular(JSON.parse(check))
        }else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
    
            localStorage.setItem('popluar', JSON.stringify(data.recipes))
            // console.log(data)
            setPopular(data.recipes);
        }

    }

  return (
    <div>
        <Wrapper>
            <h1>Popular Recipes</h1>
            <Splide
                options={{
                    perPage: 4,
                    gap: '2rem',
                    arrows: false,
                    pagination: false,
                    drag: 'free'
                }}
            >
            {popular.map((recipe => {
                return(
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

// const Card = styled.div`
//     min-height: 25rem;
//     border-radius: 2rem;
//     overflow: hidden;
//     position: relative;


//     img {
//         border-radius: 2rem;
//         position: absolute;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }
//     p{
//         position: absolute;
//         z-index: 10;
//         left: 50%
//         bottom: 0%;
//         transform: translate(-50%, 0%);
//         color: #fff;
//         width: 100%;
//         height: 40%;
//         font-size: 1rem;
//         font-weight: 600;
//         display: flex;
//         text-align: center;
//         justify-content: center;
//         align-items: center;
//     }
// `;

export default Popular