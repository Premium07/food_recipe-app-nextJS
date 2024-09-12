import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const RecipeList = ({ listOfRecipes }) => {
  // console.log(listOfRecipes);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-2xl text-gray-800 mb-6 font-bold">Recipes</h2>
        <Link href={"/"}>🔙 Go Home</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {listOfRecipes && listOfRecipes.length > 0
            ? listOfRecipes.map((recipe) => {
                return (
                  <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                    <Card>
                      <CardContent className="bg-white rounded-md shadow-md cursor-pointer p-2 overflow-hidden">
                        <div className="w-full aspect-square lg:h-80 overflow-hidden relative">
                          <Image
                            src={recipe.image}
                            alt={recipe.name}
                            height={500}
                            width={500}
                            quality={100}
                            className="size-full object-cover object-top hover:scale-110 transition-all rounded-sm"
                          />
                        </div>
                        <div className="py-2">
                          <h3 className="text-lg font-semibold text-gray-900 text-center">
                            {recipe.name}
                          </h3>
                        </div>
                        <div className="mt-2 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-semibold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
