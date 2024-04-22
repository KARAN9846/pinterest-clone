var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./posts")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function (req, res, next){
 let createduser = await userModel.create({
    username: "harsh",
    password: "harsh",
    posts: [{
    }],
  
    dp: {
      type: String // Assuming dp stands for display picture and it's a URL
    },
    email: "harsh@MediaList.com",
    fullName: "Harsh Vandana Sharma",
  });

  res.send(createduser);
});

module.exports = router;
