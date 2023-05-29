const nameOfStory = "My Journey to Kenya";
let fname = prompt("Enter your full nam");
let gender = prompt("Enter your gender: ");
let age =pareInt(prompt("Enter your age: "));
let country = prompt("Enter the country you travelled to: ");
let refugee = prompt("Enter the name of the refuge:");
let look = prompt("Enter how the refugee was looking:");
let regugeecountry = prompt("Enter the counyry the refugee comes from: ");
let food = prompt("Enter the food you gave to him:");
let feeling = prompt("Enter how he felt:");

function myjourney() {
    



    let preface = `My name is ${fname}. I am ${gender}. I am ${age}] years old. The tittle of my  is ${nameOfStory}.`

    let story = `My name is ${fname}. I am ${gender}. I am ${age} I come from ${country}.

    Refugee's name is ${refugee} and how the refugee was looking ${look}.
    The country the refugee comes from ${refugeecountry} and ${food}.the country the refugee comes from ${refugeecountry} and the how he felt ${feeling}.My journey to Kenya.
    I had both good and bad memories at ${conutry} and i wii never forget.`

    let fullStory = preface + story;
    let result = alert(fullStory);


    return result;
 }

 myjourney();




 