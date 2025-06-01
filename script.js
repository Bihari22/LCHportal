const form = document.getElementById('helpForm');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const detailsInput = document.getElementById('details');
const requestList = document.getElementById('requestList');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  error.textContent = "";

  const name = nameInput.value.trim();
  const category = categoryInput.value;
  const details = detailsInput.value.trim();

  if (!name || !category || !details) {
    error.textContent = "Please fill out all fields.";
    return;
  }

  const listItem = document.createElement('li');
  listItem.className = 'request-item';
  listItem.innerHTML = `
    <strong>${name}</strong> needs <em>${category}</em> help:<br />
    <p>${details}</p>
  `;
  requestList.prepend(listItem);

  form.reset();
});
