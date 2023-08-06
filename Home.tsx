
import { SvgUri } from "react-native-svg";
import { Box, Text } from "./components";
import AppBar from "./items/Appbar";
import TabView from "./items/Tab";
import Tweet from "./items/Tweet";
import React from "react";
import TweetHome from "./Home/TweetScreen";
import Search from "./Home/Search";
import Space from "./items/Space";
import Spaces from "./Home/Spaces";
import Notifications from "./Home/Notifications";
import Messages from "./Home/Messages";
import { ScrollView } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Container} />
      <Drawer.Screen name="AAA" component={Container} />

    </Drawer.Navigator>
  );
}




export default function Container({navigation}) {

  const taboptions = [
    {
      "name": "Home",
      "icon": "https://raw.githubusercontent.com/kamranahmedse/developer-roadmap/2018b9bf38f82bcc78d2046456767c22c53db851/src/icons/home.svg",
      "activeicon": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/house.svg"
    },
    {
      "name": "Search",
      "activeicon": "https://raw.githubusercontent.com/shoutem/ui/659cb2ba5981995db74544dbfd14fe6af91f26a0/components/Icon/assets/search.svg",
      "icon": "https://raw.githubusercontent.com/shoutem/ui/659cb2ba5981995db74544dbfd14fe6af91f26a0/components/Icon/assets/search.svg"
    },
    {
      "name": "Spaces",
      "activeicon": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/microphone-lines.svg",
      "icon": "https://raw.githubusercontent.com/shoutem/ui/659cb2ba5981995db74544dbfd14fe6af91f26a0/components/Icon/assets/mic.svg"
    },
    {
      "name": "Notifications",
      "activeicon": "https://raw.githubusercontent.com/shoutem/ui/659cb2ba5981995db74544dbfd14fe6af91f26a0/components/Icon/assets/notifications.svg",
      "icon": "https://raw.githubusercontent.com/kamranahmedse/developer-roadmap/2018b9bf38f82bcc78d2046456767c22c53db851/src/icons/bell.svg"
    },
    {
      "name": "Messages",
      "activeicon": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/envelope.svg",
      "icon": "https://raw.githubusercontent.com/TryGhost/Ghost/650487f8ee80eb9475d9bfc14cc03e8367131095/apps/portal/src/images/icons/envelope.svg"
    },

  ]
  const [selectedTab, setSelectedTab] = React.useState(taboptions[0]);

  const scrollRef = React.useRef<ScrollView>();

  const onFabPress = () => {
      scrollRef.current?.scrollTo({
          y : 0,
          animated : true
      });
  }
  return (
    /* safe area  */
    <Box
        flex={1}
        bg="white"
        alignItems="center"
        pt={15}
        >
        <AppBar selectedtab={selectedTab} scrollto={onFabPress} navigation={navigation}/>


        <Box flex={1} width="100%">
          {selectedTab.name === "Home" && <TweetHome reff={scrollRef} />}
          {selectedTab.name === "Search" && <Search/>}
          {selectedTab.name === "Spaces" && <Spaces/>}
          {selectedTab.name === "Notifications" && <Notifications/>}
          {selectedTab.name === "Messages" && <Messages />}
          
       
        </Box>

        <TabView taboptions={taboptions} selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigation={navigation} />

    </Box>
  );
}