const login = (email, password) => (
    fetch('http://192.168.0.103/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Acctep: 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
        .then(response => response.json())
);

export default login;
