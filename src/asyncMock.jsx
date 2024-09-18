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
    },
    {
        id: '4',
        name: 'Producto Individual',
        price: 30000,
        category: 'producto',
        img: '../assets/products/producto.jpg',
        stock: 20,
        description: 'El mejor producto mundo mundial'
    },
    {
        id: '5',
        name: 'Servicio Individual',
        price: 30000,
        category: 'servicio',
        img: '../assets/products/servicio.jpg',
        stock: 20,
        description: 'El mejor servicio del mundo mundial'
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

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsByCategory = products.filter(prod => prod.category === productCategory);
            resolve(productsByCategory);
        }, 500);
    });
}