
let ingredient = [];

function getingredient() {

    $.ajax({
        type: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
        data: {},
        dataType: "json",
        success: function (ing) {
            console.log(ing.meals);
    
            ingredient = ing.meals
            displayIngredient() 
        }
    });

    
}
getingredient() 

function displayIngredient() { 

    ing = ``
    for (let i = 0; i < 20; i++) {
        ing += `<div class="col-md-3">
        <div class="ingredients text-white text-center">
            <i class="fa-solid fa-drumstick-bite"></i>
            <h3>${ingredient[i].strIngredient}</h3>
            <p>${ingredient[i].strDescription}</p>
        </div>
    </div>`
        
    }
    document.querySelector("#myIngredients").innerHTML = ing;
}



