/**
 * Create a blog list page that fetches a list of users from a mock API and adds them to a
 * table on the page after loading. Add a button to sort the users by name. Add an input to
 * filter the table by search. (Optional: Show “Loading...” or a loading spinner on the screen
 * till the data loads)
 */

let users = [];
let asc = true;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    renderData(users);
    document.getElementById("loading").style.display = "none";
    document.getElementById("dataTable").style.display = "table";
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
    document.getElementById("loading").innerText = "Failed to load data";
  });

function renderData(usersToRender) {
  const tableBody = document.getElementById("dataTableBody");
  tableBody.innerHTML = "";
  usersToRender.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
    tableBody.appendChild(row);
  });
}

function sortUsers() {
  users.sort((a, b) => {
    if (a.name < b.name) return asc ? -1 : 1;
    if (a.name > b.name) return asc ? 1 : -1;
    return 0;
  });
  asc = !asc;
  renderData(users);
  document.getElementById("sortButton").innerText = `Sort by Name ${
    asc ? "↓" : "↑"
  }`;
}

function filterUsers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query),
  );
  renderData(filteredUsers);
}
