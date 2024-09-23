const form = document.getElementById('contactForm');
const resultDiv = document.getElementById('result');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    resultDiv.innerHTML = `
        <h3>Hasil Input:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});
