document.querySelectorAll('a[href^="#" ]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


document.getElementById("myBtn").addEventListener("click", myFunction);


const myFunction = () =>{
    document.getElementById("footers").scrollIntoView({
        behavior : "smooth"
    });
}
