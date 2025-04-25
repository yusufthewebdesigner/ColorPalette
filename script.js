import { colorCode } from "./colorCode.js";

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
      // sound extension must be 'm4a' to be supported in all browser
      src: ["./assets/Click-1.m4a"],
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
