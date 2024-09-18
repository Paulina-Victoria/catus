const products = [
    {
        id: '1',
        name: 'Pack Oro',
        price: 10000,
        category: 'pack',
        img: '../assets/products/pack1.jpg',
        stock: 20,
        description: 'El pack número 1 del mundo mundial'
    },
    {
        id: '2',
        name: 'Pack Platino',
        price: 20000,
        category: 'pack',
        img: '../assets/products/pack2.jpg',
        stock: 20,
        description: 'El pack número 2 del mundo mundial'
    },
    {
        id: '3',
        name: 'Pack Titanium',
        price: 30000,
        category: 'pack',
        img: '../assets/products/pack3.jpg',
        stock: 20,
        description: 'El pack número 3 del mundo mundial'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}