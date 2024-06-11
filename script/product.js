document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

//Create products and store it on the local storage
let wrapper = document.querySelector('[ItemDisplay]')
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
                    ProductName: "Fitnah 7",
                    catergory: "Car",
                    description: "Dell latitude this description 6",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 8,
                    ProductName: "Fitnah 8",
                    catergory: "Car",
                    description: "Dell latitude this description 6",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 9,
                    ProductName: "Fitnah 9",
                    catergory: "Car",
                    description: "Dell latitude this description 6",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                },

                {
                    id: 10,
                    ProductName: "Fitnah 42",
                    catergory: "Car",
                    description: "Dell latitude this description 7",
                    amount: 19000.89,
                    img_url: "https://ismaaeel-a.github.io/allimages/Images/Desk.jpg"
                }

            ]

        )
    )

function DisplayItems(args) {
    wrapper.innerHTML = ""
    try {
        args.forEach(product => {
            wrapper.innerHTML +=
                `
            <div class="col-lg-3 col-sm-6">
                     <div class="card mx-auto my-2" style="width: 16rem;">
                         <img src="${product.img_url}" class="card-img-top" alt="${product.ProductName}">
                    <div class="card-body">
                        <h6 class="card-title">${product.ProductName}</h6>
                        <p class="card-title">${product.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            </div>
        `;
        })

    } catch (e) {
        wrapper.textContent = "Please try again later."
    }

}

DisplayItems(products)

/* function search() {
    let input = document.querySelector('[search]').value

} */

let search = document.querySelector('[search]')
search.addEventListener('keyup', () => {
    try {
        if (search.value.length < 1) {
            DisplayItems(products)
        }
        let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(search.value.toLowerCase()))
        DisplayItems(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${search.value} product was not found`)
    } catch (e) {
        wrapper.textContent = e.message || 'Please try again later'
    }
})