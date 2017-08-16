const changeInfo = (token, name, address, phone) => (
    fetch('http://192.168.0.103/api/change_info.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Acctep: 'application/json',
        },
        body: JSON.stringify({
            token,
            name,
            address,
            phone
        })
    })
        .then(response => response.json())
);

export default changeInfo;
