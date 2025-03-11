const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log('mogo db connected');
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: "tweet with hook"
    // })
    // console.log(tweet);
    // tweet.comments.push({content: "first comment"});
    // await tweet.save();
    // console.log(tweet);
    // const tweet = await tweetRepo.create({content: 'tweet with comment'});
    // const comment = await Comment.create({content: "new comment"});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    // const tweet = await tweetRepo.getAll(4,5);
    // console.log(tweet[0].contentWithEmail);
    
})