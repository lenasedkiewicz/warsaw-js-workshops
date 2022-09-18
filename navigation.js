const navigationLinks = document.querySelectorAll('li[data-page]');
const allPages = document.querySelectorAll('.page');

navigationLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
        allPages.forEach(page=>{
            page.style.display = "none";
        })
        const pageActive = e.target.dataset.page;
        console.log(pageActive);
        localStorage.setItem('pageActive', pageActive)
        // if (pageActive.includes(track-saving)) {
        //     localStorage.setItem('pageActive', 'track-saving')
        // } else if (pageActive.includes(investor-calculator)) {
        //     localStorage.setItem('pageActive', 'investor-calculator')
        // } else if (pageActive.includes(exchange-rates)) {
        //     localStorage.setItem('pageActive', 'exchange-rates')
        // }
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