

let foodHome = []

function getFoodDataForHome(){
    $.ajax({
    type: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s",
    data: {},
    dataType: "json",
    success: function (response) {
        console.log(response.meals);

        foodHome = response.meals

        displayFoodCountryForHome()

    }
});
}
getFoodDataForHome()

function displayFoodCountryForHome(){

    cartona = ``

    for (let i = 0; i <foodHome.length; i++) {
        
        cartona += `  <div class="food-card col-md-3 ">
                <img src="${foodHome[i].strMealThumb}" class="rounded-2 w-100" alt="">
                <div class="description">
                    <h3 class="text-center">${foodHome[i].strMeal}</h3>
                </div>
            </div>
            `
        
    }
    document.querySelector("#myData").innerHTML = cartona;
}




$("#slide i").on("click",function(){
    console.log($("#slide").css("left"));
    console.log($(".content").innerWidth());

    if($("#slide").css("left") == "0px"){
        $("#slide i").animate({left:`-${$(".content").innerWidth()}px`},1000)

    }else{
        $("#slide i").animate({left:`${$(".content").innerWidth()}px`},1000)

    }

})
