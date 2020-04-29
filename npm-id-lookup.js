const fetch = require("node-fetch")

function is_exist_npmjs_name(id) {
    return new Promise((resolve, reject) => {
        let status = -1;
        fetch('https://www.npmjs.com/package/' + id).then(r => {
            status = r.status;
            return r.arrayBuffer();
        }).then(r => {
            if (false) {
                let res = String.fromCharCode.apply(null, new Uint8Array(r));
            }
            resolve(status);
        }).catch(e => {
            resolve(status);
        });
    })
}

module.exports = is_exist_npmjs_name;