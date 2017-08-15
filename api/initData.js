const initData = () => (
    fetch('http://127.0.0.1/api')
        .then(res => res.json())
);

export default initData;
