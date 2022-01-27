let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let form = document.getElementById('form')
let errorElement = document.getElementById('errors')


form.addEventListener('submit',(e) => {
    let messages = []
    if(fname.value === '' || fname.value == null){
        messages.push('First Name is required.')
    }
   else if(lname.value === "" || lname.value ==null){
       messsages.push("Last is required.")
   }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.json(',')
    }
})