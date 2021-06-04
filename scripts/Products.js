import { getProducts } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price}`)
                }
            }
        }
    }
)

const products = getProducts()

export const Products = () => {
    let productsHTML = "<ul>"

    for (const product of products) {
        productsHTML += `<li id="product--${product.id}">${product.name}</li>`
    }

    productsHTML += "</ul>"

    return productsHTML
}

