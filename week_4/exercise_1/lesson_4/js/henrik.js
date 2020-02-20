const cars = [
    {
        type: "BMW",
        age: 4,
        beenInAccident: false
    },
    {
        type: "Toyota",
        beenInAccident: true,
        age: 10,
    },
    {
        type: "Ford",
        beenInAccident: true
    }
];

 /* for(let i = 0; i < cars.length; i++) {
    if (cars[i].age) {
        console.log(cars[i].age);
        
    } else {
        console.log("Unknown");
        
    }
} */ // FOR LOOP


// forEach 
cars.forEach(car => {
    if (car.age) {
        console.log("The " + car.type + " is " + car.age + " years old");
        
    } else {
        console.log("The " + car.type + " has unknown age");
        
    }
});
    



// Question 2

// Create a function that recives ONE argument
// When call, pass "elephants" array into function
// Inside function, loope through the array and create "img" tag for each object, with "src and "alt" attributes.
// Return created HTML 
// Assign return value of the function to a variable and log


const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];


function createPhoto(images) {
    let html = "";

    for (let i = 0; i < images.length; i++) {
        html += `<img src="${images[i].image}" alt="${images[i].note}">`
    }

    return html;
}

const htmlObj = createPhoto(elephants);
console.log(htmlObj);

