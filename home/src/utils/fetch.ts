export default async function fetchData (host, port, route) { 
    const res = await fetch(`${host}:${port}${route}`);
    const data = await res.json();
    return data
}