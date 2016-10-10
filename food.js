var catFoodDiv = document.getElementById("cat_food");
var dogFoodDiv = document.getElementById("dog_food");

//function to load dog foods json to DOM
function loadDogFoods (){

  console.log("this.responseText:", this.responseText);

  var dogFoodData = JSON.parse(this.responseText);
  console.log("dogFoodData", dogFoodData);



  var dogFoodsOutput = "";
  var dogFoodJsonArray = dogFoodData.dog_brands;

  for (var i = 0; i < dogFoodJsonArray.length; i++) {
    for (var j = 0; j < dogFoodJsonArray[i].types.length; j++) {
      dogFoodsOutput += "<div class='row'>"
        dogFoodsOutput += "<div class='brand_name col-md-2'>";
          dogFoodsOutput += dogFoodJsonArray[i].name;
        dogFoodsOutput += "</div>";
        dogFoodsOutput += "<div class='types col-md-2'>";
          dogFoodsOutput += dogFoodJsonArray[i].types[j].type;
        dogFoodsOutput += "</div>";
         dogFoodsOutput += "<div class='volumes col-md-8'>";
          for (var x = 0; x < dogFoodJsonArray[i].types[j].volumes.length; x++) {
            dogFoodsOutput += dogFoodJsonArray[i].types[j].volumes[x].size;
            dogFoodsOutput += " ";
            dogFoodsOutput += dogFoodJsonArray[i].types[j].volumes[x].price + ";";
            dogFoodsOutput += " ";
          }
          dogFoodsOutput += "</div>";
          dogFoodsOutput += "</div>";
        }
      }
      dogFoodDiv.innerHTML = dogFoodsOutput;
      console.log(dogFoodDiv);
 };


var myRequest = new XMLHttpRequest();
console.log("myRequest", myRequest);

myRequest.addEventListener ("load", loadDogFoods);
myRequest.open("GET", "food.json")
myRequest.send();




//function to load cat foods json file to DOM

function loadCatFoods (){


  var catFoodData = JSON.parse(this.responseText);

  var catFoodsOutput = "";
  var catFoodJsonArray = catFoodData.cat_brands;

  for (var i = 0; i < catFoodJsonArray.length; i++) {
    for (var j = 0; j < catFoodJsonArray[i].types.length; j++) {
    catFoodsOutput += "<div class='row'>";
      catFoodsOutput += "<div class='brand_name col-md-2'>";
        catFoodsOutput += catFoodJsonArray[i].name;
      catFoodsOutput += "</div>";
      catFoodsOutput += "<div class='types col-md-2'>";
      console.log ("yo yo", catFoodJsonArray[i])
        catFoodsOutput += catFoodJsonArray[i].types[j].type;
      catFoodsOutput += "</div>"
        catFoodsOutput += "<div class='volumes col-md-8'>";
        for (var x = 0; x < catFoodJsonArray[i].types[j].volumes.length; x++) {
          catFoodsOutput += catFoodJsonArray[i].types[j].volumes[x].size;
          catFoodsOutput += " ";
          catFoodsOutput += catFoodJsonArray[i].types[j].volumes[x].price + ";";
            if (x.price === 0) {
              catFoodsOutput += catFoodsOutput.price[x];
            }
          catFoodsOutput += " ";
        }
        catFoodsOutput += "</div>";
        catFoodsOutput += "</div>";
  }
}

  console.log(catFoodsOutput);
  catFoodDiv.innerHTML = catFoodsOutput;

};

var myRequest2 = new XMLHttpRequest();

myRequest2.addEventListener("load", loadCatFoods);
myRequest2.open("GET", "catfood.json");
myRequest2.send();




