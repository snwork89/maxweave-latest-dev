const configObject = {
  //  APP_API:"https://api.maxweave.com/v1",
  // APP_API: "http://192.168.29.174:5555/v1",
    APP_API: "https://dev.maxweave.com/v1",
    // APP_API: "http://localhost:5556/v1",
  // APP_API: "http://localhost:5555/v1",
};

const passwordElement = document.getElementById("change-password");
const buttonSubmit = document.getElementById("change-password-form-submit");

const handleSubmit = () => {
  const password = passwordElement.value;
  if (password === "") {
    alert("Please enter a password!");
    return;
  }

  // Make API request call using axios
  const email = localStorage.getItem("forgot-email");
  axios
    .post(`${configObject.APP_API}/forgot-password/change`, {
      email,
      userType: "Subscriber",
      password,
    })
    .then((res) => {
      if (res.data.STATUS === "SUCCESS") {
        alert("Password Change Successfully !!!");
        localStorage.clear();
        window.location.href = "login.html";
      } else {
        alert("Failed to change the password");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to change the password");
    });
};

buttonSubmit.addEventListener("click", handleSubmit);
