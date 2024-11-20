

export default async function ProductsData() {

    const data = await fetch("https://ecommerce-website-reb9.onrender.com/api/products")
        .then(res => res.json())
        .then(json => json)

        return data
}

