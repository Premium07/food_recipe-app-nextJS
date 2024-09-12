import RecipeDetails from "@/components/recipe-details/RecipeDetailsPage";

const fetchRecipeDetails = async (recipeId) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

const RecipeDetailsPage = async ({ params }) => {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetails recipeDetails={getRecipeDetails} />;
};

export default RecipeDetailsPage;
