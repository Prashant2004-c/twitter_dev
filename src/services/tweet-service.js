const { TweetRepository } = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        const content = data.content;   
        let tags = content.match(/#\w+/g);  //this extracts hashtags
        tags = tags.map((tags) => tags.substring(1));
        console.log(tags);
        // tode create hashtags and add here
        /**
         * 1. bulkCreate in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. how to add tweet id inside all the hashtags
         */
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;

// let content = 'this is my #first #TWEET . i am really #excited'
// let tags = content.match(/#\w+/g);  //this extracts hashtags
//         tags = tags.map((tags) => tags.substring(1));
//         console.log(tags);

/*
  this is my #first #tweet . i am really #excited
*/