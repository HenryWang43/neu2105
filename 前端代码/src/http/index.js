import axios from './http'

var depot = {}

depot.get = function ({ url, config = {}, cb }) {
    axios.get(url, config).then((res) => {
        if (res.status === 200) {
            let result = res.data;
            cb(result);
        }
    }).catch((error) => {
        console.log('请求错误：' + error);
    });
};

depot.post = function ({ url, data, cb }) {
    axios.post(url, data).then(
        (res) => {
            if (res.status === 200) {
                if (res.status === 200) {
                    let result = res.data;
                    cb(result);
                }
            }
        }).catch((error) => {
        console.log(error);
    });
};

export default () => {
    window.depot = depot;
};