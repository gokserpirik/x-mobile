import { Box, HStack, Text, Avatar } from "../components";
import { LinearGradient } from "expo-linear-gradient";

import AvatarGroup, {avatarss,remainingCountt} from "./AvatarGroup";


export default function Space({
  gradient = ["$amber600", "$yellow600"],
  title = "Space",
  listeners = 2,
  host = "@fatihterim",
}: {
  gradient: string[];
  title: string;
  listeners: number;
  host: string;
}) {
  return (
    /* gradient */
    <Box w="100%" style={{ borderRadius: 20}} my={10} >
      <LinearGradient
        // Background Linear Gradient
        colors={[gradient[0], gradient[1]]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 200,
          borderRadius: 20
        }}
      />
      <Box p={15} height={150}>
      <HStack>
        <Text color="white">LIVE</Text>
        <Box flex={1}></Box>
        <Text color="white" fontSize="$xl">
          ...
        </Text>
      </HStack>
      <Text fontSize="$lg" fontWeight="bold" my={10} py={10} color="white">
        {title}
      </Text>
      <HStack alignItems="center">
        <AvatarGroup avatars={avatarss} remainingCount={remainingCountt} />
        <Text px={10} color="white">
          {listeners} listening
        </Text>
      </HStack>
      </Box>
     <Box style={{backgroundColor:"#00000020",  borderBottomRightRadius: 20, borderBottomLeftRadius:20}} height={50} justifyContent="center">

      <HStack px={15} alignItems="center" >
        <Avatar size="sm"  bg="$gray600" mr={5}>
            <Avatar.FallbackText>F</Avatar.FallbackText>
        </Avatar>
        <Text fontSize="$md" color="white">{host}</Text>
        <Box
          style={{
            backgroundColor: "#FFFFFF20",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginLeft: 10,
           
          }}
        >
          <Text color="white" fontSize={"$sm"}>
            Host
          </Text>
        </Box>
      </HStack>

      </Box>
    </Box>
  );
}
