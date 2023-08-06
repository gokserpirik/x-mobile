import * as React from 'react';
import { HStack, Icon } from "../components";



import { SvgUri } from "react-native-svg";


export default function TabView({navigation, taboptions, selectedTab, setSelectedTab}: {taboptions: { name: string; icon: string; activeicon: string; }[], selectedTab: any, setSelectedTab: any}) {
  
  
  return (

   

<HStack borderTopWidth={1} borderTopColor="gray" justifyContent="space-between" alignItems="center" w="100%" py={15} px={25} >

  {taboptions.map ((taboption, index) => {
    const selected = selectedTab.name === taboption.name;
    return (
      <SvgUri
      key={index}
      onLongPress={() => {
        if (taboption.name === "Search") {
          navigation.navigate('Search')
        }
      }}
      width={25}
      height={25}
      uri={selected ? taboption.activeicon : taboption.icon}
      fill={selected ? "black" : "none"}
      stroke={selected ? "none" : "black"}
      onPress={() => {setSelectedTab(taboption)}}
    />
    )})}

</HStack>
      
    


  );
}