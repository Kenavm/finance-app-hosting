async function fetchCategories() {
    const baseUrl = "https://defiant-invented-bathtub.glitch.me/api/categories";
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
  }
  
  export default fetchCategories;
  