function my() {
    let a = document.getElementById("first");
    a.innerText = `hello here is my js practice code`;
    // Additional feature: Change background color
    a.style.backgroundColor = "red";
}

// Additional function to edit the paragraph text
function editpara() {
    let input = document.getElementById("input");
    let p2 = document.getElementById("second");
    console.log(input.value)
    p2.innerHTML = input.value;
    input.value=""
}

// Add event listener to the first button
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    my();
});

// Add event listener to the second button
let button = document.getElementById('button');
button.addEventListener('click', () => {
    editpara();
});