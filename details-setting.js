const designerNameCheckbox = document.getElementById("cbdesigner-name");
const designerNameElement = document.querySelector(".designer-name");

const partyNameCheckbox = document.getElementById("cbparty-name");
const partyNameElement = document.querySelector(".party-name");

const orderNoCheckbox = document.getElementById("cborder-no");
const orderNoElement = document.querySelector(".order-no");

const dateCheckbox = document.getElementById("cbdate");
const dateElement = document.querySelector(".date");

const designNameCheckbox = document.getElementById("cbdesign-name");
const designNameElement = document.querySelector(".design-name");

const totalDentCheckbox = document.getElementById("cbtotal-dent");
const totalDentElement = document.querySelector(".total-dent");

const weaveNameCheckbox = document.getElementById("cbweave-name");
const weaveNameElement = document.querySelector(".weave-name");

const draftPatternCheckbox = document.getElementById("cbdraft-pattern");
const draftPatternElement = document.querySelector(".draft-pattern");

const avgEpiCheckbox = document.getElementById("cbavg-EPI");
const avgEpiElement = document.querySelector(".avg-EPI");

const avgPpiCheckbox = document.getElementById("cbavg-PPI");
const avgPpiElement = document.querySelector(".avg-PPI");

const gsmCheckbox = document.getElementById("cbgsm");
const gsmElement = document.querySelector(".gsm");

const reedCheckbox = document.getElementById("cbreed");
const reedElement = document.querySelector(".reed");

const reedSpaceCheckbox = document.getElementById("cbreed-space");
const reedSpaceElement = document.querySelector(".reed-space");

const shaftCheckbox = document.getElementById("cbshaft");
const shaftElement = document.querySelector(".shaft");

const totalEndsCheckbox = document.getElementById("cbtotal-ends");
const totalEndsElement = document.querySelector(".total-ends");

const totalPicksCheckbox = document.getElementById("cbtotal-picks");
const totalPicksElement = document.querySelector(".total-picks");

const epiCheckbox = document.getElementById("cbepi");
const epiElement = document.querySelector(".epi");

const ppiCheckbox = document.getElementById("cbppi");
const ppiElement = document.querySelector(".ppi");

const noOfWarpCheckbox = document.getElementById("cbno-of-warp");
const noOfWarpElement = document.querySelector(".no-of-warp");

const noOfWeftCheckbox = document.getElementById("cbno-of-weft");
const noOfWeftElement = document.querySelector(".no-of-weft");

const glmCheckbox = document.getElementById("cbglm");
const glmElement = document.querySelector(".glm");

const blendCheckbox = document.getElementById("cbblend");
const blendElement = document.querySelector(".blend");

const detailsSettings = () => {
  designerNameCheckbox.addEventListener("change", function () {
    if (designerNameCheckbox.checked) {
      designerNameElement.style.display = "block";
    } else {
      designerNameElement.style.display = "none";
    }
  });

  partyNameCheckbox.addEventListener("change", function () {
    if (partyNameCheckbox.checked) {
      partyNameElement.style.display = "block";
    } else {
      partyNameElement.style.display = "none";
    }
  });

  orderNoCheckbox.addEventListener("change", function () {
    if (orderNoCheckbox.checked) {
      orderNoElement.style.display = "block";
    } else {
      orderNoElement.style.display = "none";
    }
  });

  dateCheckbox.addEventListener("change", function () {
    if (dateCheckbox.checked) {
      dateElement.style.display = "block";
    } else {
      dateElement.style.display = "none";
    }
  });

  designNameCheckbox.addEventListener("change", function () {
    if (designNameCheckbox.checked) {
      designNameElement.style.display = "block";
    } else {
      designNameElement.style.display = "none";
    }
  });

  totalDentCheckbox.addEventListener("change", function () {
    if (totalDentCheckbox.checked) {
      totalDentElement.style.display = "block";
    } else {
      totalDentElement.style.display = "none";
    }
  });

  weaveNameCheckbox.addEventListener("change", function () {
    if (weaveNameCheckbox.checked) {
      weaveNameElement.style.display = "block";
    } else {
      weaveNameElement.style.display = "none";
    }
  });

  draftPatternCheckbox.addEventListener("change", function () {
    if (draftPatternCheckbox.checked) {
      draftPatternElement.style.display = "block";
    } else {
      draftPatternElement.style.display = "none";
    }
  });

  avgEpiCheckbox.addEventListener("change", function () {
    if (avgEpiCheckbox.checked) {
      avgEpiElement.style.display = "block";
    } else {
      avgEpiElement.style.display = "none";
    }
  });

  avgPpiCheckbox.addEventListener("change", function () {
    if (avgPpiCheckbox.checked) {
      avgPpiElement.style.display = "block";
    } else {
      avgPpiElement.style.display = "none";
    }
  });

  gsmCheckbox.addEventListener("change", function () {
    if (gsmCheckbox.checked) {
      gsmElement.style.display = "block";
    } else {
      gsmElement.style.display = "none";
    }
  });

  reedCheckbox.addEventListener("change", function () {
    if (reedCheckbox.checked) {
      reedElement.style.display = "block";
    } else {
      reedElement.style.display = "none";
    }
  });

  reedSpaceCheckbox.addEventListener("change", function () {
    if (reedSpaceCheckbox.checked) {
      reedSpaceElement.style.display = "block";
    } else {
      reedSpaceElement.style.display = "none";
    }
  });

  shaftCheckbox.addEventListener("change", function () {
    if (shaftCheckbox.checked) {
      shaftElement.style.display = "block";
    } else {
      shaftElement.style.display = "none";
    }
  });

  totalEndsCheckbox.addEventListener("change", function () {
    if (totalEndsCheckbox.checked) {
      totalEndsElement.style.display = "block";
    } else {
      totalEndsElement.style.display = "none";
    }
  });

  totalPicksCheckbox.addEventListener("change", function () {
    if (totalPicksCheckbox.checked) {
      totalPicksElement.style.display = "block";
    } else {
      totalPicksElement.style.display = "none";
    }
  });

  epiCheckbox.addEventListener("change", function () {
    if (epiCheckbox.checked) {
      epiElement.style.display = "block";
    } else {
      epiElement.style.display = "none";
    }
  });

  ppiCheckbox.addEventListener("change", function () {
    if (ppiCheckbox.checked) {
      ppiElement.style.display = "block";
    } else {
      ppiElement.style.display = "none";
    }
  });

  noOfWarpCheckbox.addEventListener("change", function () {
    if (noOfWarpCheckbox.checked) {
      noOfWarpElement.style.display = "block";
    } else {
      noOfWarpElement.style.display = "none";
    }
  });

  noOfWeftCheckbox.addEventListener("change", function () {
    if (noOfWeftCheckbox.checked) {
      noOfWeftElement.style.display = "block";
    } else {
      noOfWeftElement.style.display = "none";
    }
  });

  glmCheckbox.addEventListener("change", function () {
    if (glmCheckbox.checked) {
      glmElement.style.display = "block";
    } else {
      glmElement.style.display = "none";
    }
  });

  blendCheckbox.addEventListener("change", function () {
    if (blendCheckbox.checked) {
      blendElement.style.display = "block";
    } else {
      blendElement.style.display = "none";
    }
  });
};

detailsSettings();
