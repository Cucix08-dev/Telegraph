const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    })
}, {
    rootMargin: "0px 0px -100px 50px"
})

const sections = document.querySelectorAll(".section-container");
sections.forEach(el => observer.observe(el));