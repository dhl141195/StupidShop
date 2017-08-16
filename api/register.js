const register = (email, name, password) => (
    fetch('http://192.168.0.103/api/register.php', {
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
