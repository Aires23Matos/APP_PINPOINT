import icons from "@/constants/icons";
import { Tabs } from "expo-router"
import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";


const TabIcon = ({source, focused}: {source: ImageSourcePropType; focused: boolean}) => (
    <View style={{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '50%',
        backgroundColor: focused ? '#333333' : 'transparent',  
        paddingBottom: 25,
      }} >
        <View
        style={{
            borderRadius: '50%', 
            width: 48, 
            height: 48, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: focused ? '#2F855A' : 'transparent', 
            
          }}>
            <Image
             source={source}
             tintColor={'white'}
             resizeMode="contain"
             style={{
                width: 28, 
                height: 28, 
              }}
             />
        </View>
    </View>
)

const Layout = () => {
   return(
    <Tabs
    // initialRouteName="index"
    screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 20,
            height: 60,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:'center',
            flexDirection: 'row',
            position: 'absolute'
        },
    }}>
        <Tabs.Screen
            name="home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <TabIcon
                focused= {focused} source={icons.home}
                />)
            }}
        />

        {/* <Tabs.Screen
            name="chat"
            options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <TabIcon
                focused= {focused} source={icons.chat}
                />)
            }}
        /> */}

        <Tabs.Screen
            name="rides"
            options={{
                title: "Rides",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <TabIcon
                focused= {focused} source={icons.list}
                />)
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                     focused= {focused} source={icons.profile}
                    />)
            }}
        />
    </Tabs>
   );
}

export default Layout;

const styles = StyleSheet.create({
    viewicon: {
    backgroundColor: '#4CAF50',    
    }
})