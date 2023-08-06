import { Box, Text, Avatar, Icon, HStack, Pressable } from "../components";
import {TouchableOpacity} from 'react-native'
import Svg, {G, Path}  from "react-native-svg";

const XIconSVG = () => {
    return (

        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G fill="#000" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <Path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </G>
        </Svg>
    );
    }



export default function AppBar({selectedtab, scrollto, navigation}) {






  return (


<HStack borderBottomWidth={1} borderBottomColor="$gray300" justifyContent="space-between" alignItems="center" w="100%" pb={10} px={20} >
        
        <Box  width={40}  >
        <Pressable onPress={()=> navigation.toggleDrawer()}>
        <Avatar bgColor='$amber600' size="md" borderRadius="$full" width={30} height={30} >
          <Avatar.FallbackText>AA</Avatar.FallbackText>
          <Avatar.Image source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />
        </Avatar>
        </Pressable>
        </Box>
        
        {selectedtab.name === "Home" ? (
           <Box flex={1} alignItems="center">
           <Pressable
           onPress={() => { scrollto() }}
           >
           <XIconSVG />
           </Pressable>
           </Box>
        ): (
          <TouchableOpacity onPress={() => { selectedtab.name === "Search" &&  navigation.navigate('Search')}} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }} >
          <Box flex={1} alignItems="flex-start" justifyContent="center" >
              <Text textAlign="left" fontWeight='$semibold' fontSize='$lg' ml={10} color="black" >{selectedtab.name}</Text>
            </Box>
          </TouchableOpacity>
        )}

        
         <Box width={40}>
         
         </Box>
</HStack>
      
    


  );
}