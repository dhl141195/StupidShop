const checkLogin = (token) => (
    fetch('http://127.0.0.1/api/check_login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Acctep: 'application/json',
        },
        body: JSON.stringify({
            token
        })
    })
        .then(response => response.json())
);

export default checkLogin;
