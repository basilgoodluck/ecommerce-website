export default async function GetPromoItems() {
    try{
        const response = fetch(`${process.env.REACT_APP_API_URL}/api/promo-products`)

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