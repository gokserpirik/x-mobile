import { GluestackUIProvider, HStack, VStack, Pressable, Avatar, Actionsheet } from "./components";
import { config } from "./gluestack-ui.config";
import { Box, Text, Image } from "./components";
import { ToastProvider } from "@gluestack-ui/toast";
import Container from "./Home";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import React, { useContext }  from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggle, set } from './store/actionslice'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import actionreducer from './store/actionslice'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Screens/Search'
import { SafeAreaView } from "react-native-safe-area-context";



const store = configureStore({
  reducer: {
    actionsheet: actionreducer,
  },
});






const Stack = createNativeStackNavigator();


export default function App() {
  
  
  
  return (
    <GluestackUIProvider config={config.theme}>
      <ToastProvider>
        <Provider store={store}>

        <NavigationContainer>
          
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={PseudoHome} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>

          </NavigationContainer>

        </Provider>
      </ToastProvider>
    </GluestackUIProvider>
  );
}

function PseudoHome() {
  const actionsheet = useSelector((state) => state.actionsheet.actionsheet.visible)
  const dispatch = useDispatch()
  const toggleActionsheet = () => dispatch(toggle())

  return (
   
       <SafeAreaView style={{ flex: 1 }}>
      <Actionsheet isOpen={actionsheet} onClose={toggleActionsheet} zIndex={999} >
        <Actionsheet.Backdrop />
        <Actionsheet.Content zIndex={999}>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item onPress={actionsheet}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={actionsheet}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={actionsheet}>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={actionsheet}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={actionsheet}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>

    <MyDrawer />

   
    </SafeAreaView>

 
  )
}
    

function Notifications() {
  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </Box>
  );
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch()
  const toggleActionsheet = () => dispatch(toggle())
  return (
    <DrawerContentScrollView {...props} >
      {/* twitter profile backgorund */}
      <DrawerItem
        pressOpacity={0}
        label={() => (
          <VStack
           
            borderBottomWidth={1}
            borderBottomColor="$gray200"
            width="100%"
            
          >
            <HStack justifyContent="space-between" width='100%' >
            <Pressable >
              <Avatar
                bgColor="$amber600"
                size="md"
                borderRadius="$full"
                width={40}
                height={40}
                mb={5}
              >
                <Avatar.FallbackText>AA</Avatar.FallbackText>
                <Avatar.Image
                  source={{
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                  }}
                />
              </Avatar>
            </Pressable>

            <FontAwesome name="ellipsis-v" size={20} color="black" onPress={toggleActionsheet} />
            </HStack>
            
            <Text color="black">User</Text>
            <Text color='gray' fontSize={'$sm'} lineHeight={15}>@user</Text>
            <Text color='gray' fontSize={'$sm'} py={15}><Text fontWeight='$semibold'>0</Text> Following <Text fontWeight='$semibold'>0</Text> Followers</Text>
            
          </VStack>
        )}
        
      />
      
      <DrawerItemList {...props} />
      <DrawerItem
        label={
          /* Opening Menu */
          () => (
            <VStack>
              <HStack
              justifyContent="space-between"
              alignItems="center"
              width="100%"
             
              
            >
              <Text fontSize={'$sm'} fontWeight='$semibold'>Settings and privacy</Text>
              <FontAwesome name="chevron-down" size={15} color="black" />
            </HStack>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              
            >
              <Text fontSize={'$sm'} fontWeight='$semibold'>Help Center</Text>
              <FontAwesome name="chevron-down" size={15} color="black" />
            </HStack>

            </VStack>

          )

        }
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const Navoptions = [
    {
      name: "Profile",
      icon: "user",
      component: Notifications,
    },
    {
      name: "Blue",
      icon: "check-circle",
      component: Notifications,

    },
    {
      name: "Bookmarks",
      icon: "bookmark",
      component: Notifications,

    },
    {
      name: "Lists",
      icon: "list",
      component: Notifications,

    }
  ];


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#000000",
        drawerActiveBackgroundColor: "#fff",
        drawerInactiveBackgroundColor: "#fff",
      
        
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen

        name="Feed"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="home"
              size={size}
              color={'#000'}
            />
          ),

        }}
      />


      {Navoptions.map((option) => (
        <Drawer.Screen
        name={option.name}
        component={option.component}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name={option.icon}
              size={size}
              color={'#000'}
            />
          ),
        }}
      />
      )) }


    </Drawer.Navigator>
  );
}

const Home = ({ navigation }) => {
  return <Container navigation={navigation} />;
};
