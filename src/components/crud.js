export function initCRUD() {
    const form = document.getElementById("crud-form");
    const input = document.getElementById("item-input");
    const list = document.getElementById("item-list");
  
    let items = JSON.parse(localStorage.getItem("items")) || [];
  
    function renderItems() {
      list.innerHTML = "";
      items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item}
          <div>
            <button class="edit" data-index="${index}">Edit</button>
            <button class="delete" data-index="${index}">Delete</button>
          </div>
        `;
        list.appendChild(li);
      });
    }
  
    function addItem(event) {
      event.preventDefault();
      if (input.value.trim() === "") return;
  
      items.push(input.value.trim());
      localStorage.setItem("items", JSON.stringify(items));
      input.value = "";
      renderItems();
    }
  
    function editItem(index) {
      const newValue = prompt("Edit item:", items[index]);
      if (newValue !== null) {
        items[index] = newValue.trim();
        localStorage.setItem("items", JSON.stringify(items));
        renderItems();
      }
    }
  
    function deleteItem(index) {
      items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(items));
      renderItems();
    }
  
    list.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        editItem(event.target.dataset.index);
      }
      if (event.target.classList.contains("delete")) {
        deleteItem(event.target.dataset.index);
      }
    });
  
    form.addEventListener("submit", addItem);
  
    renderItems();
  }
