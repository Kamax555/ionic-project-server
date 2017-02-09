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
        },
    {
        id: 2
        , avatar: "http://howardism.org/Technical/Learning/Presentation/hats/avatar.png"
        , username: "GotpLisp"
        , picture: "https://image.spreadshirtmedia.net/image-server/v1/products/P110358371T235A306PC121383066PA344PT17PC121383067PA344PT17X14Y119/views/1,width=800,height=800,appearanceId=306,version=1454590465/gotp-lisp-organic-bib-baby-organic-bib.jpg"
        , caption: "I love my new shirt!"
        , commentsNumber: 10
        , like: 55
        , commenter: "LOLPOP"
        , comment: "super cute¨^_^~"
        , postedTime: 10
        , posts: 50
        , followers: 80
        , following: 3
    },
    {
        id: 3
        , avatar: "http://vignette3.wikia.nocookie.net/southpark/images/9/9e/Eric_cartman.png/revision/latest?cb=20161207153635"
        , username: "Eric Cartman"
        , picture: "http://img10.deviantart.net/9e80/i/2016/170/0/6/south_park_gift_65___niels_and_friends_by_flip_reaper_z-d7ae0ho.png"
        , caption: "Girls are smart and funny..."
        , commentsNumber: 110
        , like: 66
        , commenter: "Wendy"
        , comment: "Thank you, Eric!"
        , postedTime: 112
        , posts: 115
        , followers: 199
        , following: 50
    },
    {
        id: 4
        , avatar: "https://pbs.twimg.com/profile_images/821768089620664322/foOy3QZy.jpg"
        , username: "Sean Spicer"
        , picture: "https://thumbs.mic.com/MDAwZDljNDZmZCMvUUs2N3M0TUFCNkZiS0poNXNJQ2U1cDFqQkw0PS8weDk6MTQzNHg3MDMvMTI4MHg2MjAvZmlsdGVyczpxdWFsaXR5KDc1KS9odHRwczovL3MzLmFtYXpvbmF3cy5jb20vcG9saWN5bWljLWltYWdlcy9nd3J4emd6ZjJsNHNwbGhtdXFzNWpzaG1pZDU0cmlzeWpjem5hbHR5Mm93c2Z0ajJhd3dqeWlwZGdmYnF4dDBhLmpwZw.jpg"
        , caption: "F**k !!!!"
        , commentsNumber: 999
        , like: 44
        , commenter: "Melissa"
        , comment: "Who cares..."
        , postedTime: 116
        , posts: 999
        , followers: 1999
        , following: 60
    },
    {
        id: 5
        , avatar: "https://lanetechdiamond.files.wordpress.com/2013/08/ellen-avatar1.png?w=615&h=820"
        , username: "Ellen"
        , picture: "http://ll-media.tmz.com/2014/03/03/0303-ellen-selfie-oscars-twitter-3.jpg"
        , caption: "Nice selfie!!"
        , commentsNumber: 1111000
        , like: 523931
        , commenter: "Trump"
        , comment: "Wait for me!!!!"
        , postedTime: 1189
        , posts: 9930
        , followers: 9038787834
        , following: 6067
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