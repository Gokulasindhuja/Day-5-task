const json = {
  name: "Litchi",
  age: 20,
  city: "New York"
};

// For loop
console.log("Using for loop:");
for (let key in json) {
  console.log(key + ": " + json[key]);
}

// For...in loop
console.log("Using for...in loop:");
for (let key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(key + ": " + json[key]);
  }
}

// For...of loop (works with arrays, not objects)
console.log("Using for...of loop:");
try {
  for (let value of json) {
    console.log(value);
  }
} catch (error) {
  console.log("Error:", error.message);
}

// forEach loop (works with arrays, not objects)
console.log("Using forEach loop:");
try {
  Object.values(json).forEach((value) => {
    console.log(value);
  });
} catch (error) {
  console.log("Error:", error.message);
}