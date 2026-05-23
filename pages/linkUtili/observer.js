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
    rootMargin: "0px 0px -50px 50px"
})

const text = document.querySelectorAll(".text");
text.forEach(el => observer.observe(el));