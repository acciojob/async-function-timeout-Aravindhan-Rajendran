let button = document.getElementById("btn");

button.addEventListener("click", async function() {
    let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;
    let output = document.getElementById("output");

    await delayText(delay, text);

    output.innerText = text;
});

function delayText(delay, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}