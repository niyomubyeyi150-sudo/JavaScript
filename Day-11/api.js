// Fecthing
// url = https://dymmyjson.com/products for backend
async function fetchData(){
    const response = await fetch("https://dummyjson.com/products");
    if(!response.ok){
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
}
fetchData();

// .then .catch .finally
fetch("https://dummyjson.com/products")
.then(
    response => {
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        return response.json();
    }
)
.then(
    data=>{
        console.log(data);
    }
)
.catch(
    error => {
        console.error("Error fetching data:", error);
    }
)
.finally(
    () => {
        console.log("Done");
    }
);
// Try and catch
async function fetchData(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        if ( !response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}