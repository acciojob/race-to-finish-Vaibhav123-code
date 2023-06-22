// window.promises = [];
// Array of promises
 const promises = [];

// Function to create a promise with a random resolve time
function createPromise() {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
}

// Create five promises and add them to the array
for (let i = 0; i < 5; i++) {
  promises.push(createPromise());
}

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.log(error);
  });

// Do not change the code above this
// add your promises to the array `promises`
