
let searchName = document.querySelector(".search1");
let searchLetter = document.querySelector(".search2")





let search = [];

function getsearch(hello) {

    $.ajax({
        type: "GET",
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${hello}`,
        data: {},
        dataType: "json",
        success: function (food) {
            console.log(food.meals);
    
            search = food.meals

            displaysearchByName()
        }

        
    });
    searchName.addEventListener("input",function (e) {
        console.log(e.target.value);
        getsearch(e.target.value)

    }) 
}
getsearch()




function displaysearchByName(){

    foodname = ``

    for (let i = 0; i <search.length; i++) {
        
        foorname += `  <div cla${search[i].strMealThumb}ss="food-card col-md-3 ">
                <img src="" class="rounded-2 w-100" alt="">
                <div class="description">
                    <h3 class="text-center">${search[i].strArea}</h3>
                </div>
            </div>
            `
        
    }
    document.querySelector("#myData").innerHTML = foodename;
}

