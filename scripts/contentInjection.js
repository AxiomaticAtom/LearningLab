let currentIndex = 0;

function inject(array, index) {
  const display = document.getElementById("display");

  fetch(array[index].url)
    .then(res => res.text())
    .then(html => {
      display.innerHTML = html;
    });
}

function nextSection(array) {
  if (currentIndex >= array.length - 1) return;

  currentIndex++;
  inject(array, currentIndex);
}

function previousSection(array) {
  if (currentIndex <= 0) return;

  currentIndex--;
  inject(array, currentIndex);
}



function toggleSectionMenu() {
  document.getElementById("sectionsMenu").classList.toggle("hide");
document.addEventListener("click", function (eventObject) {
  const menu = document.getElementById("sectionsMenu");
  const button = document.getElementById("headerButtonRight");

  if (!menu) return;

  const clickedInsideMenu = menu.contains(eventObject.target);
  const clickedButton = button.contains(eventObject.target);

  if (!clickedInsideMenu && !clickedButton) {
    menu.classList.add("hide");
  }
});
}

function createSectionsMenu(unit) {
  let menu = document.createElement("div");
  menu.id = "sectionsMenu";
  menu.classList.add("hide");
  for (let i=0; i<unit.length; i++) {
    let button = document.createElement("button");
    button.innerText = unit[i].title;
    button.onclick = function () {
      inject(unit, i);
      setSlides();
      currentIndex = i;
    };
    menu.append(button)
  }
  document.body.appendChild(menu)
}
