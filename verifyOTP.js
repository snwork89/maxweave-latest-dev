const configObject = {
  //  APP_API:"https://api.maxweave.com/v1",
  APP_API: "https://dev.maxweave.com/v1",
  // APP_API: "http://localhost:5556/v1",
  // APP_API: "http://192.168.29.174:5555/v1",
  // APP_API: "http://localhost:5555/v1",
};
const submitBtn = document.getElementById("otp-verification-form-submit");
const inputs = document.querySelectorAll("#otp > *[id]");

const verifyOTP = () => {
  inputs.forEach((input, i) => {
    input.addEventListener("keydown", function (event) {
      const isNumber = event.key >= "0" && event.key <= "9";

      if (event.key === "Backspace") {
        input.value = "";
        if (i !== 0) inputs[i - 1].focus();
      } else if (isNumber) {
        input.value = event.key; // Set the input's value to the key pressed
        if (i !== inputs.length - 1) {
          inputs[i + 1].focus();
        }
        event.preventDefault();
      } else {
        event.preventDefault(); // Prevent any non-numeric key from being processed
      }
    });

    input.addEventListener("input", function () {
      if (input.value.length > 1 || isNaN(input.value)) {
        input.value = input.value.charAt(0); // Ensure only one number is entered
      }
    });
  });
};

const getOTPValue = () => {
  let otpValue = "";
  inputs.forEach((input) => {
    otpValue += input.value;
  });
  // convert string to number
  otpValue = parseInt(otpValue);
  return otpValue;
};

const handleOTPVerification = () => {
  const otp = getOTPValue();

  // count total digits in a number

  if (otp.toString().length < 6) {
    alert("Invalid OTP!!");
    return;
  }
  axios
    .post(`${configObject.APP_API}/forgot-password/verify`, {
      otp,
    })
    .then((res) => {
      console.log("res", res);
      if (res.data.STATUS === "SUCCESS") {
        window.location.href = "change-password.html";
      } else if (res.STATUS === "FAILURE") {
        alert("Invalid OTP");
      }
    })
    .catch((err) => {
      console.log("err", err);
      alert("Invalid OTP!!!");
    });
};

submitBtn.addEventListener("click", handleOTPVerification);

verifyOTP();
