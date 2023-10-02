export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${
    import.meta.env.VITE_MY_APP_ID
  }&app_key=${import.meta.env.VITE_MY_API_KEY}&from=0&to=${limit}&`;

  //make a call
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}
