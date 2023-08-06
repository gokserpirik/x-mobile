import Notf from "../items/Notf";
import { Box } from "../components";
import { ScrollView } from "../components/core/Actionsheet/styled-components";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();



export default function Notifications() {
    const New = () => (
         <ScrollView width={"100%"} backgroundColor="white">
            <Notf  action="follow"/>
            <Notf  action="retweet" />

        </ScrollView>
    );
    const Verified = () =>  (
        <ScrollView width={"100%"} backgroundColor="white">
        <Notf  action="follow"/>
        <Notf  action="retweet" />

    </ScrollView>
   );
   const Mentions = () =>  (
    <ScrollView width={"100%"} backgroundColor="white">
    <Notf  action="reply"/>
    <Notf  action="reply" />

</ScrollView>
);


    return(
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, textTransform:'capitalize', fontWeight:'bold',color:'black' },
            tabBarStyle: { backgroundColor: 'white' },
            
        }}>
      <Tab.Screen name="All" component={New} />
      <Tab.Screen name="Verified" component={Verified} />
      <Tab.Screen name="Mentions" component={Mentions} />

    </Tab.Navigator>
       
    )
    
}