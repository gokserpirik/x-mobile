import { Box, HStack, Text, Avatar, VStack } from "../../components";
import { MessagingTwoPeople, Message, ImageMessage } from "../../interface";

const sampleMessaging: MessagingTwoPeople = {
  users: [
    {
      name: "John Doe",
      username: "johndoe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      id: 1,
      followers: [],
      following: [],
      tweets: [],
      bio: "I am John Doe",
      location: "New York",
      url: "https://www.google.com",
      verified: true,
    },
    {
      name: "Jane Doe",
      username: "janedoe",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 1,
      followers: [],
      following: [],
      tweets: [],
      bio: "I am Jane Doe",
      location: "New York",
      url: "https://www.google.com",
      verified: true,
    },
  ],
  messages: [
    {
      sender: {
        name: "John Doe",
        username: "johndoe",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 1,
        followers: [],
        following: [],
        tweets: [],
        bio: "I am John Doe",
        location: "New York",
        url: "https://www.google.com",
        verified: true,
      },
      content: "Hello",
      timestamp: new Date(),
      read: false,
    },
    {
        sender: {
          name: "John Doe",
          username: "johndoe",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
          followers: [],
          following: [],
          tweets: [],
          bio: "I am John Doe",
          location: "New York",
          url: "https://www.google.com",
          verified: true,
        },
        imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content: "Hello",
        timestamp: new Date(),
        read: false,
      },
    {
      sender: {
        name: "Jane Doe",
        username: "janedoe",
        avatar:
          "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: 1,
        followers: [],
        following: [],
        tweets: [],
        bio: "I am Jane Doe",
        location: "New York",
        url: "https://www.google.com",
        verified: true,
      },
      content: "Hi",
      timestamp: new Date(),
      read: false,
    },
    {
      sender: {
        name: "John Doe",
        username: "johndoe",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 1,
        followers: [],
        following: [],
        tweets: [],
        bio: "I am John Doe",
        location: "New York",
        url: "https://www.google.com",
        verified: true,
      },
      content: "How are you?",
      timestamp: new Date(),
      read: false,
    },
    {
      sender: {
        name: "Jane Doe",
        username: "janedoe",
        avatar:
          "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: 1,
        followers: [],
        following: [],
        tweets: [],
        bio: "I am Jane Doe",
        location: "New York",
        url: "https://www.google.com",
        verified: true,
      },
      content: "I am fine",
      timestamp: new Date(),
      read: false,
    },
  ],
};

export default function MessageSmall({
  users = sampleMessaging.users,
  messages = sampleMessaging.messages,
}: MessagingTwoPeople) {
  const lastMessage = messages[messages.length - 1];
    /* check if it's Message or ImageMessage */
    if (lastMessage.imageUrl === undefined) {

    }else{

    }
  return (

      <HStack alignItems="center" borderBottomColor="$gray200" borderBottomWidth={1}>
        <Avatar
          bgColor="$amber600"
          size="md"
          borderRadius="$full"
          width={50}
          height={50}
          m={10}
        >
          <Avatar.FallbackText>AA</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
          />
        </Avatar>
        <VStack>
            <Text fontWeight="bold" color="black">{users[1].name} <Text color="gray">@{users[1].username} . {lastMessage.timestamp.getHours().toString()}h</Text></Text>
            {lastMessage.imageUrl === undefined ? (<Text color="gray">{lastMessage.content}</Text> ) : (<Text color="gray">📷Sent an image</Text> )}
        </VStack>
      </HStack>
    

  );
}
