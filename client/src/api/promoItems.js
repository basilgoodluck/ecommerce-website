export default async function GetPromoItems() {
    try{
        const response = fetch("https://ecommerce-website-reb9.onrender.com/api/promo-products?limit=5")

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = response.json()
        return data
    }
    catch(error){
        throw error
    }
}