import { Box } from "../components";
import { ScrollView } from "react-native";
import Tweet from "../items/Tweet";

export default function TweetHome({reff}){

    const tweet = {
        "user": {
            "name": "Gluestack",
            "username": "gluestack",
            "avatar": "https://pbs.twimg.com/profile_images/1412724439304307200/5QZQ3Y4-_400x400.jpg"
        },
        "tweet": {
            "content": "Gluestack is a UI library for React Native that helps you quickly build beautiful apps.",
            "image": "https://images.pexels.com/photos/17750423/pexels-photo-17750423/free-photo-of-isik-kent-insanlar-su.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "time": "2h",
            "replies": 10,
            "retweets": 20,
            "likes": 30
        
        }
        }
    return (
        <ScrollView   contentContainerStyle={{alignItems:"center"} } ref={reff}  >
            {[1,2,3,4,5,6,7,8,9,10].map((item) => (
                <Tweet key={item} tweet={tweet} />
            ))}
        </ScrollView>
    )
}