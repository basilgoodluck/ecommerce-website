// import React from 'react'

export default async function ProductsData() {

    const data = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => json)

        return data
}

