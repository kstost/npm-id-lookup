# npm-id-lookup
```js

// npm i npm-id-lookup

const is_exist_npmjs_name = require("npm-id-lookup")
is_exist_npmjs_name('npm-id-lookup').then(status=>{
    // 200: exist
    // 404: non-exist
    // -1: lookup fail
    console.log(status);
})
```
