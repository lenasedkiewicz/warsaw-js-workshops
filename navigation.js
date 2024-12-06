const navigationLinks = document.querySelectorAll("li[data-page]");
const allPages = document.querySelectorAll(".page");

navigationLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    allPages.forEach((page) => {
      page.style.display = "none";
    });
    const pageActive = e.target.dataset.page;
    // console.log(pageActive);
    sessionStorage.setItem("pageActive", pageActive);
    document.querySelector(`#${pageActive}`).style.display = "block";
  });
});

allPages.forEach((page, index) => {
  if (sessionStorage.getItem("pageActive")) {
    if (page.id === sessionStorage.getItem("pageActive")) {
      return;
    }
  } else {
    if (index === 0) {
      return;
    }
  }
  page.style.display = "none";
});

function sortTheArray(){
fetch('http://localhost:3000/api/array?size=100000').then(function(res){return res.json()}).then(function(data){
    const array = data.data;
    console.log('I got data');
    array.sort(function(a,b){return a-b})
    console.log('i did sorting');
})
}