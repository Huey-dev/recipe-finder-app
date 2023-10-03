export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${
    import.meta.env.VITE_MY_APP_ID
  }&app_key=${import.meta.env.VITE_MY_API_KEY}&from=0&to=${limit}&`;

  //make a call
  const res = await fetch(url);
  const data = await res.json();

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${
    import.meta.env.VITE_MY_APP_ID
  }&app_key=${import.meta.env.VITE_MY_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}
