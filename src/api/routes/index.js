/**
 *
 * api/routes/index.js
 */

const socialRoute = require('./ss')

const router = require("express").Router();

router.use('/ss', socialRoute)
// router.use('/ss', socialRoute)


router.get('/', (req, res) =>{
    res.send('/home');
} )
// router.get("/social", (req, res) =>{
//     console.log('testing here')
//     var stringin = 'string in'

//     console.log('string in here')
//     console.log(stringin)
//     // res.send(res);
//     res.send({data: '/social in here'});
//     // res.send(stringin);
//     // res.send("100 social - sentiment new get api is working");
// });


// app.listen(9000,function(){
//     console.log("server is running on port 9000");
//   });