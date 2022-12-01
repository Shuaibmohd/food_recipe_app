import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipeInformation, setRecipeInformation] = useState({});
  const [activeButton, setActiveButton] = useState("instructions");

  let params = useParams();

  const recipeDetails = async () => {
    const recipeInfo = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const infoResult = await recipeInfo.json();

    setRecipeInformation(infoResult);
    console.log(infoResult);
  };

  useEffect(() => {
    recipeDetails();
  }, [params.name]);

  return (
    <>
      <InfoWrapper>
        <div>
          <h2>{recipeInformation.title}</h2>
          <img src={recipeInformation.image} alt={recipeInformation.title} />
        </div>
        <Info>
          <Button
            className={activeButton === "instructions" ? "active" : ""}
            onClick={() => setActiveButton("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeButton === "ingredients" ? "active" : ""}
            onClick={() => setActiveButton("ingredients")}
          >
            Ingredients
          </Button>
          {activeButton === 'instructions' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: recipeInformation.summary }}></h4>
            <small dangerouslySetInnerHTML={{ __html: recipeInformation.instructions }}></small>
          </div>
          )}
          {activeButton === 'ingredients' && (
            <ul>
            {recipeInformation.extendedIngredients.map((ingredient) => 
            <li key={ingredient.id}>{ingredient.original}</li>
            )}
            </ul>
          )}
         
        </Info>
      </InfoWrapper>
    </>
  );
};

const InfoWrapper = styled.div`
  margin: 9rem 0 4rem;
  display: flex;
  .active {
    background: linear-gradient(45deg, #494950, #313132);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.3rem;
    
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #333333;
  background: #fff;
  border: 2px solid #000;
  margin: 2rem 2rem 2rem 0;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 4rem;
`;

export default Recipe;
