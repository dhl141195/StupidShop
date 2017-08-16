import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://192.168.0.103/api/refresh_token.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Acctep: 'application/json',
        },
        body: JSON.stringify({
            token
        })
    })
        .then(response => response.text())
        .then(newToken => saveToken(newToken))
        .catch(error => console.log(error));
};

export default refreshToken;
