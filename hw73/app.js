const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    app = express();

let posts;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.locals.title = 'MongoDB Socket.io Node Blog';

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res, next) => {
    posts.find().toArray((err, thePosts) => {
        if (err) {
            next(err);
        }
        res.render('layout', {
            subtitle: 'Welcome to the blog',
            posts: thePosts,
            links: [{ url: '/newPost', text: 'new post' }, { url: 'https://www.google.com', text: 'google' }],
            partials: {
                content: 'posts'
            }
        });
    });

});

app.get('/newPost', (req, res) => {
    res.render('layout', {
        subtitle: 'Write a new blog',
        links: [{ url: '/', text: 'Home' }, { url: 'https://www.google.com', text: 'google' }],
        partials: {
            content: 'newPost'
        }
    });
});
app.post('/newComment', (req, res) => {
    /*res.render('layout', {
        subtitle: 'Write a new blog',
        links: [{ url: '/', text: 'Home' }, { url: 'https://www.google.com', text: 'google' }],
        partials: {
            content: 'newPost'
        }
    });*/
});

app.post('/newPost', (req, res) => {
    console.log('got new post');

    posts.insert({ title: req.body.title, content: req.body.content, data: new Date(), author: 'someone' }, (err, result) => {
        if (err) {
            next(err);
        }

    });

    res.redirect('/');
});


app.use((err, req, res, next) => {
    res.status(500);
    res.end('OOPS. Server error: ' + err);
});
MongoClient.connect('mongodb://localhost:27017/blog2', (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    posts = db.collection('posts');
});
app.listen(80);