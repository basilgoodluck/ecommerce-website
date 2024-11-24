export default async function ProductsData() {

    try{
        const response = await fetch("https://ecommerce-website-reb9.onrender.com/api/products")
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    }
    catch(error){
        throw error
    }
}

