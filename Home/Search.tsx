import { ScrollView } from "react-native-gesture-handler";
import { Box, Heading, Text, VStack, HStack } from "../components";
import { FontAwesome } from "@expo/vector-icons";
import {Trend} from '../interface'
import {TouchableOpacity} from 'react-native'


const trends: Trend[] = [
    {
        cat: 'Trending in Turkey',
        name: 'Fabrizio Romano',
        tweets: 3201,
    },
    {
        cat: 'Trending in Sports',
        name: 'Galatasaray',
        tweets: 3201
    },
    {
        cat: 'Trending in Turkey',
        name: 'Aykut Kocaman',
        tweets: 3201
    },
    {
        cat: 'Trending in Turkey',
        name: 'Fatih Terim',
        tweets: 3201
    }
]

const TrendItem = ({ cat, name, tweets }: Trend) => {
  return (
    <TouchableOpacity onPress={() => {}}>
    <VStack py={5}>
      <HStack width={"100%"} justifyContent="space-between" alignItems="center">
        <Text fontWeight="$bold" color="gray" fontSize="$sm">
          {cat}
        </Text>
        <FontAwesome name="ellipsis-v" size={15} color="gray" />
      </HStack>
      <Text fontWeight="$bold" color="black" fontSize="$sm">
        {name}
      </Text>
      <Text fontWeight="$light" color="gray" fontSize="$sm">
        {tweets.toString()} Tweets
      </Text>
    </VStack>
    </TouchableOpacity>
  );
};

export default function Search() {

    return (
        <ScrollView width={"100%"} backgroundColor="white" >
           
            <Box p={15}>
                <Heading mb={10}>Trends for you</Heading>
                {trends.map((trend, index) => (
                    <TrendItem key={index} {...trend} />
                ))}
                {trends.map((trend, index) => (
                    <TrendItem key={index} {...trend} />
                ))}

            </Box>

        </ScrollView>
    );
    }