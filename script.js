document.querySelectorAll('a[href^="#" ]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


let fname = document.getElementById('fname')
let form = document.getElementById('form')
// let lname = document.getElementById('lname')
let errorElement = document.getElementById('errors')


form.addEventListener('submit',(e) => {
    let messages = []
    if(fname.value === '' || fname.value == null){
        messages.push('First Name and Last Name is required.')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(',')
    }
})

