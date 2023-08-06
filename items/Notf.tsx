import {Box, Text, VStack, HStack, Avatar} from "../components";
import {User as UserInterface, Tweet as TweetInterface} from "../interface";
import AvatarGroup, { avatarss, remainingCountt } from "./AvatarGroup";
import { FontAwesome } from "@expo/vector-icons";
import Tweet from "./Tweet";

const emptyTweet: TweetInterface = {
    user: {
        name: "Gluestack",
        username: "gluestack",
        avatar: "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg",
       
    },
    tweet: {
        content: "So I made a UI library for React Native that helps you quickly build beautiful apps.",
        image: "https://images.pexels.com/photos/17750423/pexels-photo-17750423/free-photo-of-isik-kent-insanlar-su.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        time: "2h",
        replies: 0,
        retweets: 0,
        likes: 0,
    },
}

const usersx = [
    {
        name: "Gluestack",
        username: "gluestack",
        avatar: "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg",
        id: 1,
        followers: [],
        following: [],

        tweets: [],
        bio: "",
        location: "",
        url: "",
        verified: true,
    },
    {
        name: "Gluestack",
        username: "gluestack",
        avatar: "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg",
        id: 2,
        followers: [],
        following: [],
        tweets: [],
        bio: "",
        location: "",
        url: "",
        verified: true,
    },
    {
        name: "Gluestack",
        username: "gluestack",
        avatar: "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg",
        id: 2,
        followers: [],
        following: [],
        tweets: [],
        bio: "",
        location: "",
        url: "",
        verified: true,
    },
    {
        name: "Gluestack",
        username: "gluestack",
        avatar: "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg",
        id: 2,
        followers: [],
        following: [],
        tweets: [],
        bio: "",
        location: "",
        url: "",
        verified: true,
    }
]


const Follow = ({users}: {users: UserInterface[]}) => {
    return(
        <Box borderBottomWidth={1} p={10} px={20} borderColor='$gray200'>
            <HStack width={"100%"}>
                {/* follow icon */}
                <Box width={50}>
                    <FontAwesome name="user" size={20} color="#1DA1F2" />
                </Box>
                <VStack alignItems="flex-start">
                    <AvatarGroup avatars={avatarss} remainingCount={usersx.length -3}/>
                    <Text >{users[0].name} and {users.length - 1} others followed you</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

const ReTw = ({users, tweet}: {users: UserInterface[], tweet: TweetInterface}) => {
    return(
        <Box borderBottomWidth={1} p={10} px={20} borderColor='$gray200'>
            <HStack width={"100%"}>
                {/* rt icon */}
                <Box width={50}>
                    <FontAwesome name="retweet" size={20} color="green" />
                </Box>
                <VStack alignItems="flex-start">
                    <AvatarGroup avatars={avatarss} remainingCount={usersx.length -3}/>
                    <Text>{users[0].name} and {users.length - 1} others reposted your post</Text>
                    <Text width="50%">{tweet.tweet.content}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

const Fav = ({users, tweet}: {users: UserInterface[], tweet: TweetInterface}) => {
    return(
        <Box borderBottomWidth={1} p={10} px={20} borderColor='$gray200'>
            <HStack width={"100%"}>
                {/* like icon */}
                <Box width={50}>
                    <FontAwesome name="heart" size={20} color="red" />
                </Box>
                <VStack alignItems="flex-start">
                    <AvatarGroup avatars={avatarss} remainingCount={usersx.length -3}/>
                    <Text>{users[0].name} and {users.length - 1} others liked your post</Text>
                    <Text width="50%">{tweet.tweet.content}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

const Comment = ({user, tweet}: {user: UserInterface, tweet: TweetInterface}) => {
    return(
        <Box borderBottomWidth={1} borderColor='$gray200'  >
           <Tweet tweet={emptyTweet} replynotf={true} replyingto={usersx[0]}/>
        </Box>
    )
}

export default function Notf({users = usersx, action ="follow", tweet=emptyTweet}: {users: UserInterface[], action: string, tweet?: TweetInterface}) {
    return (
        <Box>
        {action === "follow" && <Follow users={ usersx }/> }
        {action === "retweet" && <ReTw users={ usersx } tweet={tweet}/> }
        {action === "like" && <Fav users={ usersx } tweet={tweet}/> }
        { action === "reply" && <Comment user={usersx[0]} tweet={tweet}/> }
        </Box>
    );
    }


