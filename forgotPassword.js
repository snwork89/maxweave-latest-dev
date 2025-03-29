const configObject = {
  //  APP_API:"https://api.maxweave.com/v1"
    APP_API: "https://dev.maxweave.com/v1",
    // APP_API: "http://localhost:5556/v1",
  // APP_API: "http://192.168.29.174:5555/v1",
  // APP_API: "http://localhost:5555/v1",
};

const emailElement = document.getElementById("forgot-password-email");
const buttonSubmit = document.getElementById("forgot-password-form-submit");

const handleSubmit = () => {
  const email = emailElement.value;
  if (email === "") {
    alert("Please enter a valid email address");
    return;
  }

  // Make API request call using axios

  axios
    .post(`${configObject.APP_API}/forgot-password/send`, {
      email,
      userType: "Subscriber",
      otpType: "Forgot",
    })
    .then((res) => {
      if (res.data.STATUS === "SUCCESS") {
        alert("Password reset link has been sent to your email");
        localStorage.setItem("forgot-email", email);
        window.location.href = "verify-otp.html";
      } else {
        alert("Failed to send password reset link");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send password reset link");
    });
};

buttonSubmit.addEventListener("click", handleSubmit);

