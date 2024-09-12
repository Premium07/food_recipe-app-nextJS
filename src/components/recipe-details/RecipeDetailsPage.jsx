import Image from "next/image";
import Link from "next/link";

const RecipeDetails = ({ recipeDetails }) => {
  console.log(recipeDetails);
  return (
    <section className="p-10">
      <Link href={"/recipes"} className=" text-slate-500 ">
        🔙 Go to Recipes
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex flex-col gap-2">
            <Image
              src={recipeDetails?.image}
              alt={recipeDetails?.name}
              height={500}
              width={500}
              quality={100}
              className="w-4/5 rounded object-cover"
            />
            <div className="flex gap-2 flex-wrap w-10/12 mt-2">
              {recipeDetails?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-slate-200 p-1 px-2 rounded text-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-gray-900">
              {recipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-5 mt-5 flex-col">
              <p className="flex gap-2">
                {recipeDetails?.mealType.map((type, index) => (
                  <span
                    key={index}
                    className="bg-slate-200 p-1 px-2 rounded text-zinc-800"
                  >
                    {type}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold">Cuisine: </span>{" "}
                {recipeDetails.cuisine}
              </p>
              <ul>
                <span className="font-semibold">Ingredients: </span>{" "}
                <div className="flex gap-2 flex-wrap mt-2">
                  {recipeDetails?.ingredients.map((item, index) => (
                    <li
                      key={index}
                      className="bg-slate-200 p-1 px-2 rounded-sm text-zinc-800"
                    >
                      {item}
                    </li>
                  ))}
                </div>
              </ul>
              <p>
                {" "}
                <span className="font-semibold">Instructions: </span>
                {recipeDetails?.instructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
