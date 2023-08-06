

interface Tweet{
    user: {
        name: string;
        username: string;
        avatar: string;
    };
    tweet: {
        content: string;
        image: string;
        time: string;
        replies: number;
        retweets: number;
        likes: number;
    };

}

interface User{
    name: string;
    username: string;
    avatar: string;
    id: number;
    followers: User[];
    following: User[];
    tweets: Tweet[];
    bio: string;
    location: string;
    url: string;
    verified: boolean
}

interface Message {
    sender: User;
    content: string;
    timestamp: Date;
    read: boolean;
}

interface ImageMessage extends Message {
    imageUrl: string;
}

interface MessagingTwoPeople {
    users: User[];
    messages: (Message | ImageMessage)[];
    
}

interface Trend{
    name: string;
    tweets: number;
    cat: string;
}


export {Tweet, User, Message, ImageMessage, MessagingTwoPeople, Trend}


