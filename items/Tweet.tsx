import {
  Heading,
  Avatar,
  Box,
  HStack,
  Pressable,
  Text,
  Image,
  Modal,
  VStack
} from "../components";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function Tweet({
  tweet,
  replynotf= false,
  replyingto = "",
}: {
  tweet: {
    user: { name: string; username: string; avatar: string };
    tweet: {
      content: string;
      image: string;
      time: string;
      replies: number;
      retweets: number;
      likes: number;
    };
  },
    replynotf?: boolean,
    replyingto?: any,
}) {
  const hasImage = tweet.tweet.image ? true : false;

  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const [like, setLike] = React.useState(false);
  const [retweet, setRetweet] = React.useState(false);

  /* Tweet Image */
  const [showModal, setShowModal] = React.useState(false);

  const ref = React.useRef(null);

  return (
    <Box bg="white" w="100%" px={10} py={20}>
      <HStack justifyContent="space-between" w="100%">
        <Box width={50} mr={3}>
          <Avatar
            bgColor="$amber600"
            size="md"
            borderRadius="$full"
            width={45}
            height={45}
          >
            <Avatar.FallbackText>AA</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
            />
          </Avatar>
        </Box>

       <VStack  flex={1}  width="100%" >
       <HStack flex={1} alignItems="center" width="100%">
          <Text fontWeight="bold" fontSize="$sm">
            {tweet.user.name}
          </Text>
          <Text fontSize="$sm" color="gray">
            {" "}
            @{tweet.user.username} .{" "}
          </Text>

          <Text fontSize="$sm" color="gray">
            {tweet.tweet.time}
          </Text>

          <Box flex={1}></Box>

          {/* open actionsheet */}
          <Pressable
            onPress={() => {
             
            }}
          >
            <Text fontSize="$sm" color="gray">
              ...
            </Text>
          </Pressable>
        </HStack>
        {replynotf && ( <Text color="$gray">Replying to <Text color="$blue800">{replyingto.username}</Text></Text> )}  

          
      <Text fontSize="$md" mt={5}>
        {tweet.tweet.content}
      </Text>

      {hasImage && (
        <Pressable
          mt={10}
          width="100%"
          height={200}
          ref={ref}
          onPress={() => {
            /* open full image as modal */
            setShowModal(true);
          }}
        >
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              size="full"
              source={{
                uri: tweet.tweet.image,
              }}
            />
          </Box>
        </Pressable>
      )}

      <HStack mt={20} width="100%" justifyContent="center">
        <Pressable
          width="$1/4"
          alignItems="center"
          onPress={() => {

          }}
        >
          <FontAwesome name="comment-o" size={20} color="black" />
        </Pressable>
        <Pressable
          width="$1/4"
          alignItems="center"
          onPress={() => {
            setRetweet(!retweet);
          }}
        >
          <FontAwesome
            name="retweet"
            size={20}
            color={retweet ? "green" : "gray"}
          />
        </Pressable>
        <Pressable
          width="$1/4"
          alignItems="center"
          onPress={() => {
            setLike(!like);
          }}
        >
          <FontAwesome
            name={like ? "heart" : "heart-o"}
            size={20}
            color={like ? "red" : "gray"}
          />
        </Pressable>
        <Pressable
          width="$1/4"
          alignItems="center"
          onPress={() => {
            /*    setShowActionsheet(!showActionsheet) */
          }}
        >
          <FontAwesome name="share-square-o" size={20} color="black" />
        </Pressable>
      </HStack>   
       </VStack>
      </HStack>
     
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>
            <Avatar
              bgColor="$amber600"
              size="md"
              borderRadius="$full"
              width={30}
              height={30}
            >
              <Avatar.FallbackText>AA</Avatar.FallbackText>
              <Avatar.Image
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                }}
              />
            </Avatar>
            <Heading size="lg">
              {tweet.user.name} - {tweet.user.username}
            </Heading>
            <Modal.CloseButton>
              <Text>x</Text>
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Box width={"100%"} height={600}>
              <Image
                resizeMode="contain"
                size="full"
                source={{
                  uri: tweet.tweet.image,
                }}
              />
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>

    </Box>
  );
}
