import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Avatar, Pressable , Text} from "../components";
import { TextInput } from "react-native";
import React from "react";
import { ScrollView } from "../components/core/Actionsheet/styled-components";


const results = [
  {
    title: 'First Item',
    is: 'hashtag'
  },
  {
    title: 'Second Item',
    is: 'profile'
  },
  {
    title: 'Third Item',
    is: 'hashtag'
  },
];

export default function Search() {
  const [value, onChangeSearch] = React.useState('');
  const filteredResults = results.filter(result => result.title.toLowerCase().includes(value.toLowerCase()));


  return (
    <SafeAreaView style={{
      backgroundColor: 'white'
    }}>

        <HStack width={"100%"} alignItems="center" borderBottomWidth={1} borderBottomColor="gray" p={15}>
        <Pressable onPress={()=> {}} >
        <Avatar bgColor='$amber600' size="md" borderRadius="$full" width={30} height={30} >
          <Avatar.FallbackText >AA</Avatar.FallbackText>
          <Avatar.Image source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />
        </Avatar>
        </Pressable>

       <TextInput 
        style={{
          flex: 1,
          height: 40,
          marginHorizontal: 10,

        }}
        onChangeText={(text) => onChangeSearch(text)}
        placeholder="Search X"
      />
        </HStack>

      <ScrollView>
        { value === "" ? (
          <Box alignItems="center" justifyContent="center" flex={1} >
            <Text textAlign="center" fontWeight='$semibold' fontSize='$lg' color="gray" >Search for a product</Text>
          </Box>
        ) : (
          <Box>
            { filteredResults.map((result, index) => {
              return (
                <HStack key={index} py={15} px={25} borderBottomWidth={1} borderBottomColor="gray" width={'$full'} alignItems="center">
                  <Avatar bgColor='$white' size="md" borderRadius="$full" width={30} height={30}  >
                    <Avatar.FallbackText color="$black" fontSize={'$2xl'} textAlign="center">#</Avatar.FallbackText>
                    {result.is === 'hashtag' ? null : 
                    ( <Avatar.Image source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} /> )}
                  </Avatar>
                  <Text textAlign="left" fontWeight='$semibold' fontSize='$lg' color="black" >{result.title}</Text>
                </HStack>
              )
            })}
          </Box>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
