const title = () => {
  const companyNameCheckbox = document.getElementById("cbcompany-name");
  const companyNameElement = document.querySelector(".company-name");
  companyNameCheckbox.addEventListener("change", function () {
    if (companyNameCheckbox.checked) {
      companyNameElement.style.display = "block";
    } else {
      companyNameElement.style.display = "none";
    }
  });

  const companyLogoCheckbox = document.getElementById("cbcompany-logo");
  const companyLogoElement = document.querySelector("#company-logo");
  companyLogoCheckbox.addEventListener("change", function () {
    if (companyLogoCheckbox.checked) {
      companyLogoElement.style.display = "block";
    } else {
      companyLogoElement.style.display = "none";
    }
  });

  const companyAddressCheckbox = document.getElementById("cbcompany-address");
  const companyAddressElement = document.querySelector(".company-address");
  companyAddressCheckbox.addEventListener("change", function () {
    if (companyAddressCheckbox.checked) {
      companyAddressElement.style.display = "block";
    } else {
      companyAddressElement.style.display = "none";
    }
  });

  const companyMoNoCheckbox = document.getElementById("cbcompany-mo");
  const companyMoNoElement = document.querySelector(".company-mo");
  companyMoNoCheckbox.addEventListener("change", function () {
    if (companyMoNoCheckbox.checked) {
      companyMoNoElement.style.display = "block";
    } else {
      companyMoNoElement.style.display = "none";
    }
  });

  const companyEmailCheckbox = document.getElementById("cbcompany-email");
  const companyEmailElement = document.querySelector(".company-email");
  companyEmailCheckbox.addEventListener("change", function () {
    if (companyEmailCheckbox.checked) {
      companyEmailElement.style.display = "block";
    } else {
      companyEmailElement.style.display = "none";
    }
  });

  const companyPrintDescCheckbox = document.getElementById("cbprint-desc");
  const companyPrintDescElement = document.querySelector(".print-desc");
  companyPrintDescCheckbox.addEventListener("change", function () {
    if (companyPrintDescCheckbox.checked) {
      companyPrintDescElement.style.display = "block";
    } else {
      companyPrintDescElement.style.display = "none";
    }
  });
};

title();
