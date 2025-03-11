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
    //     content: "Next tweet"
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
    const tweet = await tweetRepo.getWithComments('67cfd82b26293bf796bda63f');
    console.log(tweet);
    
})