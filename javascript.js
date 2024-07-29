function changeGridDimension(n) {
    gridDimension = n;
};


function createGrid(gridDimension) {
    const centerGridContainer = document.querySelector(".center-gridContainer");
    centerGridContainer.replaceChildren();

    let centerGridContainerWidth = centerGridContainer.offsetWidth;
    centerGridContainer.style.height = centerGridContainerWidth + "px";
    
    window.addEventListener("resize", () => {
        centerGridContainerWidth = centerGridContainer.offsetWidth;
        centerGridContainer.style.height = centerGridContainerWidth + "px";
    });
    
    for (let i = 1; i <= gridDimension; i++) {
    
        let centerGridContainerLevel = document.createElement("div");
        centerGridContainerLevel.classList.add(`center-gridContainer-level${i}`);
    
        centerGridContainerLevel.style.display = "flex";
        centerGridContainerLevel.style.alignSelf = "stetch";
        centerGridContainerLevel.style.flexGrow = 1;
    
        for (let j = 1; j <= gridDimension; j++) {
            let gridBox = document.createElement("div");
            gridBox.classList.add(`center-GridContainer-level${i}-${j}`);
    
            gridBox.style.flexShrink = 1;
            gridBox.style.flexGrow = 1;
            gridBox.style.border = "1px solid rgb(235, 235, 235)";
            gridBox.style.opacity = `0`;

            gridBox.addEventListener("mouseover", () => {
                let num1 = Math.floor(Math.random()*256);
                let num2 = Math.floor(Math.random()*256);
                let num3 = Math.floor(Math.random()*256);
                gridBoxOpacity = parseFloat(gridBox.style.opacity);

                gridBox.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;

                if (gridBoxOpacity < 1) {
                    gridBox.style.opacity = `${gridBoxOpacity + 0.1}`;
                };
            });

            centerGridContainerLevel.appendChild(gridBox);
        };
        
        centerGridContainer.appendChild(centerGridContainerLevel);
    };
};



let gridDimension = 16;
const gridDimensions = document.querySelector("button");
createGrid(gridDimension);

gridDimensions.addEventListener("click", () => {
    let userInput;

    while (true) {
        userInput = prompt("Set Grid Dimensions (n x n), with 1 ≤ n ≤ 100:", 16);
        if (userInput === '') {
            break;
        };
        
        userInput = Number(userInput);

        if (userInput > 0 && userInput < 101 && userInput % 1 === 0) {
            changeGridDimension(userInput);
            createGrid(gridDimension);
            break;
        } else if (isNaN(userInput) || userInput >= 101) {
            alert("Invalid dimensions, please enter a valid value.");
        } else if (userInput === 0) {
            break;
        };
    };
});
