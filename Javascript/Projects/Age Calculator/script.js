const inputVal = document.getElementById('birthday');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', calculateAge);

function calculateAge() {
    const birthday = new Date(inputVal.value);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    result.innerHTML = `You are ${age} years old.`;
}