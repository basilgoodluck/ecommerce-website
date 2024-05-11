
export default async function HeroProducts() {

    const data = await fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(json => json)

        return data
}
