document.querySelectorAll('a[href^="#" ]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit',(e) => {
    let messages = []
    if((fname.value === '' || fname.value == null )&& (lname.value === '' ||  lname.value == null)){
        messages.puse('First Name and Last Name is required.')
    }

    if(messages.length > 0){
        e.preventDefault();
        errerElement.innerText = message.json(',')
    }
})