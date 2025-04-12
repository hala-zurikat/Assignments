let users = [];

const formSection = document.querySelector(".main");
const previewSection = document.getElementById("previewSection");
const previewBtn = document.getElementById("preview");
const addBtn = document.getElementById("add");

previewBtn.onclick = () => {
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
  showTableBtn.textContent = "Show Tabel";
  showTableBtn.className = "btn btn-primary";

  btnContainer.appendChild(showCardsBtn);
  btnContainer.appendChild(showTableBtn);
  previewSection.appendChild(btnContainer);

  const displayArea = document.createElement("div");
  previewSection.appendChild(displayArea);

  showCardsBtn.onclick = () => {
    displayArea.innerHTML = "";
    users.forEach((user, index) => {
      const card = document.createElement("div");
      card.className = "card mb-3";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.textContent = `User ${index + 1}`;
      cardBody.appendChild(title);

      const fields = [
        { label: "Name", value: user.name },
        { label: "Email", value: user.email },
        { label: "Phone", value: user.phone },
        { label: "Gender", value: user.gender },
        { label: "Address", value: user.address },
      ];

      fields.forEach(({ label, value }) => {
        const p = document.createElement("p");
        p.textContent = `${label}: ${value}`;
        cardBody.appendChild(p);
      });

      card.appendChild(cardBody);
      displayArea.appendChild(card);
    });
  };

  showTableBtn.onclick = () => {
    displayArea.innerHTML = "";

    const table = document.createElement("table");
    table.className = "table table-bordered";

    const thead = document.createElement("thead");
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

    const tbody = document.createElement("tbody");

    users.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>
      `;
      tbody.appendChild(row);
    });

    table.append(thead, tbody);
    displayArea.appendChild(table);
  };
};

addBtn.onclick = () => {
  formSection.classList.remove("hide");
  previewSection.classList.add("hide");
};

function validate(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const gender = document.getElementById("option1").checked ? "Male" : "Female";

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("addressError").textContent = "";

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else {
    let allLetters = true;
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const code = char.charCodeAt(0);
      if (
        !(code >= 65 && code <= 90) && // A-Z
        !(code >= 97 && code <= 122) && // a-z
        char !== " "
      ) {
        allLetters = false;
        break;
      }
    }

    if (!allLetters) {
      document.getElementById("nameError").textContent =
        "Name must contain letters only";
      isValid = false;
    }
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Invalid email";
    isValid = false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phoneError").textContent = "Invalid phone";
    isValid = false;
  }

  if (!address) {
    document.getElementById("addressError").textContent = "Address required";
    isValid = false;
  }

  if (isValid) {
    const newUser = { name, email, phone, gender, address };
    users.push(newUser);
    alert("User added successfully! Click 'Preview User' to see all users.");
    document.querySelector("form").reset();
  }

  return isValid;
}
