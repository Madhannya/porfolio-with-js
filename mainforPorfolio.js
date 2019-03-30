const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#text');
const phoneInput = document.querySelector('#phone');
const userlist = document.querySelector('#users');


myForm.addEventListener('submit', onSumbit);
function onSumbit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput === '' )
    {
        //alert('Please enter all fileds');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fileds';
    }
    else
    {
        const list = document.querySelector('#users');

        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${nameInput.value}</td>
          <td>${emailInput.value}</td>
          <td>${msg.value}</td>
          <td>${phoneInput.value}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete"  > X </a></td>
        `;
    
        list.appendChild(row);
        
    }

}

myForm.addEventListener('rm', onDelete);
function onDelete(r){
    
          r.parentElement.parentElement.remove();
}