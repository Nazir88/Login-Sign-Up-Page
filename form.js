const loginbtn = document.getElementById('login-btn');
const signupbtn = document.getElementById('signup-btn');
const loginContent = document.getElementById('login-content');
const signupContent = document.getElementById('signup-content');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginbtn.addEventListener('click', () => {
    loginContent.style.display = 'block';
    signupContent.style.display = 'none';

    loginbtn.classList.add('active');
    signupbtn.classList.remove('active');

    loginForm.classList.add('loginAnimation')
});

signupbtn.addEventListener('click', () => {
    loginContent.style.display = 'none';
    signupContent.style.display = 'block';

    loginbtn.classList.remove('active');
    signupbtn.classList.add('active');

    signupForm.classList.add('signupAnimation')
});