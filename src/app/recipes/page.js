import RecipeList from "@/components/recipe-list/RecipeList";
import React from "react";

const fetchListOfRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipes = async () => {
  const listOfRecipes = await fetchListOfRecipes();

  return <RecipeList listOfRecipes={listOfRecipes} />;
};

export default Recipes;
