export default async function fetchData () { 
    const res = await fetch(`http://localhost:3002/api/products`);
    const data = await res.json();
    return data
}