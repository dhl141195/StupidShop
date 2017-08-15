const register = (email, name, password) => (
    fetch('http://127.0.0.1/api/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Acctep: 'application/json',
        },
        body: JSON.stringify({
            email,
            name,
            password
        })
    })
    .then(response => response.text())
);

export default register;
