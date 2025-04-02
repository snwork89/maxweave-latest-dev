const init = () => {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".fa-bars");
  let collapseBtn = document.querySelector(".bx-log-out");

  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
};

init();
