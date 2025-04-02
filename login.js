


const configObject = {
  // APP_API: "https://api.maxweave.com/v1",
  // APP_API: "http://localhost:5555/v1",
    APP_API: "https://dev.maxweave.com/v1",
    // APP_API: "http://localhost:5556/v1",
  // APP_API: "http://192.168.29.174:5555/v1",
  // APP_API: "http://192.168.29.18:5555/v1",
  // APP_API: "http://192.168.0.110:5555/v1",
};

const renderUserAgentImages = (agentType, agent) => {
  // Mozilla|AppleWebKit|Chrome|Safari|Firefox|Edge
  if (agentType.toLowerCase() === "browser") {
    if (agent.toLowerCase().includes("chrome")) {
      return `<img src="assets/chrome_48.png" alt="chrome" />`;
    } else if (
      agent.toLowerCase().includes("firefox") ||
      agent.toLowerCase().includes("mozilla")
    ) {
      return `<img src="assets/firefox_48.png" alt="mozilla" />`;
    } else if (agent.toLowerCase().includes("safari")) {
      return `<img src="assets/safari_48.png" alt="safari" />`;
    }
  }
  return `<img src="assets/maxweavelogo.png" alt="default" style="height:48px;width:48px;object-fit:contain;" />`;
};

// const activeDevicesModalContent = (devices) => {
//   return `<div style="display: flex;gap: 20px;">
//         <div class="device-icons">
// <img src="assets/chrome_48.png" alt="chrome" />;
//         </div>
//         <div class="device-name" style="align-self: center;font-weight: bolder;">
//           Chrome
//         </div>
//       </div>`;
// };

function dateFormator(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const activeDevicesModalContent = (devices) => {
  return (
    devices &&
    devices
      .map(
        (x, i) =>
          `<div class="devices" style="display: flex;gap: 20px;cursor:pointer">
         <div class="device-icons">
           ${renderUserAgentImages(x.agentType, x.userAgent)}
         </div>
         <div class="device-name" style="align-self: center;font-weight: bolder;">
           ${x.userAgent}(${x.deviceName?x.deviceName:x.ipAddress})
         </div>
         <div class="device-login-date" style="align-self:center">${dateFormator(
           x.createdAt
         )}</div>
         <div class="device-logout" style="align-self:center"><button class="button is-primary" data-index="${i}">LOGOUT</button>
        </div>
       </div>`
      )
      .join("")
  );
};

const logOutDevice = (loggedOutToken, user) => {
  const token = localStorage.getItem("token");
  return axios.post(
    `${configObject.APP_API}/subscriber/logout`,
    { token: loggedOutToken, user: user },
    {
      headers: { token: token },
    }
  );
};
const getDeviceNameFromLocalStorage = () => {
  let currentDeviceName = localStorage.getItem("deviceName");

  if (currentDeviceName) {
    return currentDeviceName;
  }
  return "";
};
const setDeviceNameToAPI = (deviceName) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${configObject.APP_API}/subscriber/set-device-name`,
    { deviceName, token },
    {
      headers: { token: token },
    }
  );
};
const handleDeviceClick = (event, devices) => {
  const index = event.currentTarget.dataset.index;
  const device = devices[index];
  console.log("Device clicked:", device);

  const confirmLogOut = confirm(
    `DO You Really Want to Log-out ${device.userAgent}(${device.ipAddress}) device???`
  );
  if (confirmLogOut) {
    logOutDevice(device.token, device.user)
      .then((res) => {
        console.log("res", res);
        if (res.data.STATUS === "SUCCESS") {
          Toastify({
            text: "Device Logout Successfully!!",
            gravity: "top", // "top" or "bottom"
            backgroundColor: "linear-gradient(135deg,#FF0200, #F6A5A5)",
          }).showToast();
          window.location.reload(true);
        } else {
          Toastify({
            text: "Something Went Wrong!!",
            gravity: "top", // "top" or "bottom"
            backgroundColor: "linear-gradient(to right, #ff4040, #ff7373)",
          }).showToast();
        }
      })
      .catch((err) => console.log("err", err));

    // window.location.reload(true);
  }
  // alert()
};

const handleLogin = () => {

  let isChrome =
    navigator.userAgent.includes("Chrome") &&
    navigator.vendor.includes("Google Inc");

  if (!isChrome) {
    alert("Please use chrome for better experience");
    return;
  }
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Email And Password Are Required");
  }

  const user = {
    email: email,
    password: password,
  };
  axios
    .post(`${configObject.APP_API}/subscriber/login`, user)
    .then((res) => {
      if (res.data.STATUS === "SUCCESS") {
        let userDetail = res.data.DATA.requestedUser;
        let tokenDetail =
          res.data.DATA.tokens &&
          res.data.DATA.tokens.access &&
          res.data.DATA.tokens.access.token;
        if (userDetail && tokenDetail) {
          localStorage.setItem("user", JSON.stringify(userDetail));
          localStorage.setItem("token", tokenDetail);


          let deviceName =getDeviceNameFromLocalStorage();

          if(deviceName.length>0){
            setDeviceNameToAPI(deviceName);
          }
          // window.location.replace("index.html?token=" + tokenDetail);
          // window.location.replace("index.html");
          window.location.href = window.location.origin;
        }
      } else if (res.data.STATUS === "DEVICES") {
        Toastify({
          text: `${res.data.MESSAGE}!!`,
          gravity: "top", // "top" or "bottom"
          backgroundColor: "linear-gradient(to right, #ff4040, #ff7373)",
        }).showToast();
        document.getElementById("signin").style.display = "none";
        document.getElementById("linked-device-modal").style.opacity = 1;
        document.getElementById("linked-device-content").innerHTML =
          activeDevicesModalContent(res.data.DATA);

        const buttons = document.querySelectorAll(".button");

        buttons.forEach((item) => {
          item.addEventListener("click", (event) =>
            handleDeviceClick(event, res.data.DATA)
          );
        });
      }
    })
    .catch((err) => {
      console.log("err", err);
      if (err) {
        alert(`${err?.response?.data?.ERROR}`);
      }
    });
};

const init = () => {
  console.log("Init called");
  activeDevicesModalContent();
  const loginButton = document.getElementById("login-form-submit");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogin();
  });
  const passwordElement = document.getElementById("login-password");

  passwordElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  });
};
init();
