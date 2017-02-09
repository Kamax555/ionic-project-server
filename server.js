var express = require('express')
var bodyParser = require('body-parser');
app = express();
app.use(bodyParser.json());
app.use(express.static('www'));
var posts = [
    {
        id: 1
        , avatar: "http://trump.frost.works/images/avatar.png"
        , username: "DonaldTrump"
        , picture: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg"
        , caption: "I will make America great again!"
        , commentsNumber: 20
        , like: 1000
        , commenter: "TheLegend27"
        , comment: "We have the best president!"
        , postedTime: 20
        , posts: 800
        , followers: 1000
        , following: 1
        }
    ];

app.get('/', function (req, res) {
        res.send('Hello World!')
        });

app.get('/posts', function(req, res) {
        res.json({data:posts});
        });
app.post('/posts', function(req,res){
     console.log(req.body);
     console.log("post is"+ req.body.comment);
     posts.push({

         id: req.body.id
         , avatar: req.body.avatar
         , username: req.body.username
         , picture: req.body.picture
         , caption: req.body.caption
         , commentsNumber: req.body.commentsNumber
         , like: req.body.like
         , commenter: req.body.commenter
         , comment: req.body.comment
         , postedTime: req.body.postedTime
         , posts: req.body.posts
         , followers: req.body.followers
         , following: req.body.following


     });
     res.sendStatus(200);
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});