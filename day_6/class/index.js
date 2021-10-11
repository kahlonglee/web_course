const txtboxID = document.getElementById("txtbox-id");
const txtboxPassword = document.getElementById("txtbox-password");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  if (txtboxID.value.slice(-2) === "-a") {
    let user1 = new admin(txtboxID.value, txtboxPassword.value);
    alert(`User ID: ${user1.ID}`);
    alert(`${user1.ID} admin value: ${user1.isAdmin}`);
  } else {
    let user1 = new user(txtboxID.value, txtboxPassword.value);
    alert(`User ID: ${user1.ID}`);
    alert(`${user1.ID} admin value: ${user1.isAdmin}`);
  }
});

window.addEventListener("load", () => {
  alert(
    'Please put in "-a" and wihout "-a" in ID textbox to see the different'
  );
});

class user {
  constructor(ID, Password) {
    this.isAdmin = false;
    this.isUser = true;
    this.ID = ID;
    this.Password = Password;
  }
}

class admin {
  constructor(ID, Password) {
    this.isAdmin = true;
    this.isUser = true;
    this.ID = ID;
    this.Password = Password;
  }
}
