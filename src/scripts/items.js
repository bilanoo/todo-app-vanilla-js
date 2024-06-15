var initialItems = [
  { id: 0, value: "Complete online Javascript course" },
  { id: 1, value: "Jog around the park 3x" },
  { id: 2, value: "10 minutes meditation" },
  { id: 3, value: "Read for 1 hour" },
];

window.sessionStorage.setItem("items", JSON.stringify(initialItems));
var storedItems = JSON.parse(sessionStorage.getItem("items"));

const listContainer = document.getElementById("task-list-container");
const newItemUserInput = document.getElementById("new-item-input");

listContainer.innerHTML = ""; // Clear initial static data

const AddItem = (value) => {
  var i = storedItems.length;
  storedItems.push({ id: i, value: value });
  window.sessionStorage.setItem("items", JSON.stringify(storedItems)); // Update sessionStorage
  displayList(storedItems);
};

const displayList = (data) => {
  listContainer.innerHTML = ""; // Clear the list before appending new items
  data.forEach(({ id, value }) => {
    const item = `
        <div class="task-container" data-id=${id}>
          <div class="circle"></div>
          <p class="task-info">
            ${value}
          </p>
          <div class="image-container">
            <img
              src="./images/icon-cross.svg"
              alt="delete item icon"
              class="cross-icon"
              data-id=${id}
            />
          </div>
        </div>
      `;

    listContainer.insertAdjacentHTML("beforeend", item);
  });

  document.querySelectorAll(".cross-icon").forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const idToDelete = event.target.getAttribute("data-id");
      storedItems = storedItems.filter((item) => item.id != idToDelete);
      window.sessionStorage.setItem("items", JSON.stringify(storedItems)); // Update sessionStorage
      displayList(storedItems);
    });
  });
};

newItemUserInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    AddItem(newItemUserInput.value);
    newItemUserInput.value = "";
  }
});

displayList(storedItems);
