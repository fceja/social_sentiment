/**
 *
 * api/routes/ss.js
 */

// const router = require("express").Router();
const router = require("express").Router();
// const app = require("express");
// const router = app();

router.get("/social", (req, res) =>{
    console.log('testing here')
    var stringin = 'string in'

    console.log('string in here')
    console.log(stringin)
    // res.send(res);
    res.send({data: '/social in here'});
    // res.send(stringin);
    // res.send("100 social - sentiment new get api is working");
});

module.exports=router;


// var router = require("express").Router();
// console.log('testing here')

// router.use((req, res, next) => {
//     console.log('testing here')
//     next()
// })
// router.get("/social", (req, res) =>{
//     console.log('testing here')
//     var stringin = 'string in'

//     console.log('string in here')
//     console.log(stringin)
//     res.send(stringin);
//     // res.send("100 social - sentiment new get api is working");
// })

// module.exports=router;
