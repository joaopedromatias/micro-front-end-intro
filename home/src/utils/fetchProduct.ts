export default async function fetchData (id: number) { 
    const res = await fetch(`http://localhost:3002/api/products/${id}`);
    const data = await res.json();
    return data
}