const navigationLinks = document.querySelectorAll('li[data-page]');
const allPages = document.querySelectorAll('.page');

navigationLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
        allPages.forEach(page=>{
            page.style.display = "none";
        })
        const pageActive = e.target.dataset.page;
        document.querySelector(`#${pageActive}`).style.display = "block";
    })
})

// hide all pages except first
allPages.forEach((page, index)=>{
    if(index===0){
        return;
    }
    page.style.display = "none";
})