

let Area = [];

function getArea() {

    $.ajax({
        type: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        data: {},
        dataType: "json",
        success: function (rel) {
            console.log(rel.meals);
    
            Area = rel.meals

            displayArea()
        }
    });

    
}
getArea() 

function displayArea() { 

    cat = ``
    for (let i = 0; i < Area.length; i++) {
        cat += ` <div class="col-md-3">

                <div class="area">
                <i class="fa-solid text-white d-flex justify-content-center fa-house-laptop"></i>
                <h3 class="text-white text-center">${Area[i].strArea}</h3>
                </div>
                
            </div>`
        
    }
    document.querySelector("#myArea").innerHTML = cat;
}