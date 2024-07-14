

let Categories = [];

function getCategories() {

    $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
        data: {},
        dataType: "json",
        success: function (categ) {
            console.log(categ.categories);
    
            Categories = categ.categories

            displayCategories()
        }
            

    });
}
getCategories()

function displayCategories() { 

    cont = ``
    for (let i = 0; i < Categories.length; i++) {
        cont += ` <div class="col-md-3">

                <div onclick ="getCategories()" class="categories">
                <img class = "w-100" src="${Categories[i].strCategoryThumb}" alt="food">
                <h3 class="text-white text-center">${Categories[i].strCategory}</h3>
                <p class="text-white text-center">${Categories[i].strCategoryDescription}</p>
                </div>
                
            </div>`
        
    }
    document.querySelector("#myCategories").innerHTML = cont;
}


