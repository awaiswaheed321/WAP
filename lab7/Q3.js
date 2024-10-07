(async () => {
  let response = await fetch("https://dummyjson.com/recipes");
  if (response.ok) {
    let json = await response.json();
    console.log(
      "Recipe Names: ",
      json.recipes.map((recipe) => recipe.name).join(", ")
    );
  } else {
    console.error(" HTTP-Error: " + response.status);
  }
})();
