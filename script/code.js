document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

    //Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(

            [{
                    id: 1,
                    ProductName: "Dell-latitude",
                    catergory: "Laptop",
                    description: "Dell latitude this description 1",
                    amount: 22000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 2,
                    ProductName: "HP-incel",
                    catergory: "Car",
                    description: "Dell latitude this description 2",
                    amount: 20000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 3,
                    ProductName: "Acer Cant Inspire 3",
                    catergory: "Laptop",
                    description: "Dell latitude this description 3",
                    amount: 32000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 4,
                    ProductName: "Fitnah 4",
                    catergory: "Laptop",
                    description: "Dell latitude this description 4",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 5,
                    ProductName: "Father of Kronos",
                    catergory: "Laptop",
                    description: "Dell latitude this description 5",
                    amount: 15000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 6,
                    ProductName: "Fitnah 4",
                    catergory: "Car",
                    description: "Dell latitude this description 6",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 7,
                    ProductName: "Fitnah 4",
                    catergory: "Car",
                    description: "Dell latitude this description 7",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                }

            ]

        )
    )

function recentProducts() {
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, 3)
    latestProducts.forEach(product => {
        console.log(product);
        wrapper.innerHTML +=
            `
            <div class="card card1">
                 <img src="${product.img_url}" class="card-img-top" alt="${product.ProductName}">
                    <div class="card-body">
                        <h6 class="card-title">${product.ProductName}</h6>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        `
    });
}

recentProducts()   