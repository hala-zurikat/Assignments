let users = [];

class User {
  constructor(name, email, phone, gender, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
  }
}

const formSection = document.querySelector(".main");
const previewSection = document.getElementById("previewSection");
const previewBtn = document.getElementById("preview");
const addBtn = document.getElementById("add");

previewBtn.onclick = function () {
  formSection.classList.add("hide");
  previewSection.classList.remove("hide");
  previewSection.innerHTML = "";

  if (users.length === 0) {
    alert("No users added yet.");
    return;
  }

  const btnContainer = document.createElement("div");
  btnContainer.className = "mb-3";

  const showCardsBtn = document.createElement("button");
  showCardsBtn.textContent = "Show Card";
  showCardsBtn.className = "btn btn-primary me-2";

  const showTableBtn = document.createElement("button");
  showTableBtn.textContent = "Show Table";
  showTableBtn.className = "btn btn-primary";

  btnContainer.appendChild(showCardsBtn);
  btnContainer.appendChild(showTableBtn);
  previewSection.appendChild(btnContainer);

  const displayArea = document.createElement("div");
  previewSection.appendChild(displayArea);

  showCardsBtn.onclick = function () {
    displayArea.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      let user = users[i];

      let card = document.createElement("div");
      card.className = "card mb-3";

      let body = document.createElement("div");
      body.className = "card-body";

      let title = document.createElement("h5");
      title.textContent = "User " + (i + 1);
      body.appendChild(title);

      let nameP = document.createElement("p");
      nameP.textContent = "Name: " + user.name;
      body.appendChild(nameP);

      let emailP = document.createElement("p");
      emailP.textContent = "Email: " + user.email;
      body.appendChild(emailP);

      let phoneP = document.createElement("p");
      phoneP.textContent = "Phone: " + user.phone;
      body.appendChild(phoneP);

      let genderP = document.createElement("p");
      genderP.textContent = "Gender: " + user.gender;
      body.appendChild(genderP);

      let addressP = document.createElement("p");
      addressP.textContent = "Address: " + user.address;
      body.appendChild(addressP);

      card.appendChild(body);
      displayArea.appendChild(card);
    }
  };

  showTableBtn.onclick = function () {
    displayArea.innerHTML = "";

    let table = document.createElement("table");
    table.className = "table table-bordered";

    let thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Gender</th>
        <th>Address</th>
      </tr>
    `;

    let tbody = document.createElement("tbody");

    for (let i = 0; i < users.length; i++) {
      let user = users[i];

      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>
      `;
      tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    displayArea.appendChild(table);
  };
};

addBtn.onclick = function () {
  formSection.classList.remove("hide");
  previewSection.classList.add("hide");
};

function validate(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let address = document.getElementById("address").value.trim();
  let gender = document.getElementById("option1").checked ? "Male" : "Female";

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("addressError").textContent = "";

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    let lettersOnly = true;
    for (let i = 0; i < name.length; i++) {
      let c = name[i];
      let code = c.charCodeAt(0);
      if (
        !(code >= 65 && code <= 90) &&
        !(code >= 97 && code <= 122) &&
        c !== " "
      ) {
        lettersOnly = false;
        break;
      }
    }

    if (!lettersOnly) {
      document.getElementById("nameError").textContent =
        "Name must contain letters only";
      valid = false;
    }
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").textContent = "Invalid phone";
    valid = false;
  }

  if (address === "") {
    document.getElementById("addressError").textContent = "Address required";
    valid = false;
  }

  if (valid) {
    let user = new User(name, email, phone, gender, address);
    users.push(user);
    alert("User added successfully!");
    document.querySelector("form").reset();
  }

  return valid;
}
