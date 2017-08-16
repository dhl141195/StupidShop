const searchProduct = (key) => {
    const url = `http://192.168.0.103/api/search.php?key=${key}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
};    

export default searchProduct;
