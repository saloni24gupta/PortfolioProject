const Form = document.getElementById('form');
const UserName = document.getElementById('username');
const Email = document.getElementById('email');
const PhoneNumber = document.getElementById('phonenumber');
const Password = document.getElementById('password');
const PasswordCheck = document.getElementById('passwordcheck');
const SubmitButton = document.getElementById('btn')
Form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
// validate username fun value
const validate = () => {
    const Uname = UserName.value.trim();
    const EmailAdd = Email.value.trim();
    const PhoneNum = PhoneNumber.value.trim();
    const Pwd = Password.value.trim();
    const PCheck = PasswordCheck.value.trim();

    // validate username
    if(Uname === ""){
        setErrormsg(UserName, 'username cannot be blank');
    }
    else if (Uname.length <= 3){
        setErrormsg(UserName, 'username cannot be small');
    }
    else {
        setSuccessMsg(UserName);
    }

    // validate Email

    if(EmailAdd === ""){
        setErrormsg(Email, 'Email cannot be empty');
    }
    else if (isEmail()) {
        
    };
}