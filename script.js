let colorCode = [
  "#ccccff",
  "#967bb6",
  "#d9bad7",
  "#fcfbf4",
  "#fffdd0",
  "#fcf5bf",
  "#ffe4c4",
  "#ffcccb",
  "#fed6cd",
  "#fadbc6",
  "#d0f4e0",
  "#e8c0fc",
  "#ffc8dd",
  "#bde0fe",
  "#4b2991",
  "#f6f6f6",
  "#ddd",
  "#444",
  "#262628",
  "#7096d1",
  "#8a2be2",
  "#7f00ff",
  "#ee82ee",
  "#ff7f50",
  "#e6d3ab",
  "#c6cebe",
  "#edd5d8",
  "#c3b0c4",
  "#f2f5ff",
  "#8197e5",
  "#d5d4ff",
  "#51508b",
  "#d8cee0",
  "#fcf6ea",
  "#d4bdf0",
  "#ffeff6",
  "#ebe4cf",
  "#b49f7f",
  "#e4eaed",
  "#eae8e8",
  "#8e8683",
  "#edede9",
  "#e3d5ca",
  "#f5ebe0",
  "#f2e8da",
  "#d5bdaf",
];

let colorbox = document.querySelector(".colorBox");

colorCode.forEach((eachCode) => {
  let childBox = document.createElement("div");
  childBox.classList.add("childBox");
  colorbox.append(childBox);

  let pInChildBox = document.createElement("p");
  pInChildBox.innerText = eachCode;
  childBox.append(pInChildBox);
});

let childs = document.querySelectorAll(".childBox");
childs.forEach((child) => {
  let bgColor = child.innerText;
  child.style.background = bgColor;
  child.addEventListener("click", () => {
    // Play sound
    const sound = new Howl({
      src: ["./assets/Click-1.mp3"],
      volume: 0.8,
    });
    sound.play();
    // Copying
    navigator.clipboard.writeText(bgColor);
    // Showing copy msg
    let msgBox = document.createElement("span");
    msgBox.innerHTML = 'Copied <i class="fa-solid fa-circle-check"></i>';
    child.prepend(msgBox);

    setTimeout(() => {
      msgBox.remove();
    }, 400);
  });

  let hovMsg = document.createElement("span");
  hovMsg.setAttribute("class", "hovMsg");
  hovMsg.innerText = "Copy";
  child.append(hovMsg);

  // to show the copy message on hover
  child.addEventListener("mouseover", () => {
    let hovMessage = child.querySelector(".hovMsg");
    hovMessage.style.display = "block";
  });
  // to hide the copy message after clicking
  child.addEventListener("click", () => {
    let hovMessage = child.querySelector(".hovMsg");
    hovMessage.style.display = "none";
  });
  // to hide the copy message after hover
  child.addEventListener("mouseleave", () => {
    let hovMessage = child.querySelector(".hovMsg");
    hovMessage.style.display = "none";
  });
});
