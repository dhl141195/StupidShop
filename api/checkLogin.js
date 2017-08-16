const checkLogin = (token) => (
    fetch('http://192.168.0.103/api/check_login.php', {
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
        .catch(error => console.log(error))
);

export default checkLogin;
