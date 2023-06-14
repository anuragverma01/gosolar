import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import Parent from '../../Test/Parent';
import Arit from '../../TestDrawer/Arit';
import Feed from '../../TestDrawer/Feed';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderRadius: 50,
          position: 'absolute',
          paddingTop: 5,
          marginVertical: 15,
          marginHorizontal: 50,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        },
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 5},
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: '#24bfd4',
        tabBarInactiveTintColor: '#99adb0',
      }}>
      <Tab.Screen
        name="Home"
        component={Parent}
        options={{
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="home"
              color={focused ? '#24bfd4' : '#99adb0'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Arit}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottom;

// import * as React from 'react';
// import Parent from '../../Test/Parent';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigation, Text} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';
// import {View} from 'react-native';
// const MusicRoute = () => <Login />;

// const likeRoute = () => <Text> Comming Soon</Text>;

// // const cartRoute = () => <Text>Comming Soon</Text>;

// // const accountRoute = () => <Text>Notifications</Text>;

// const Bottom = ({name}) => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {
//       key: 'home',
//       title: 'Home',
//       focusedIcon: 'home-outline',
//     },
//     {
//       key: 'like',
//       focusedIcon: 'heart-outline',
//     },
//     {
//       key: 'cart',

//       title: 'Cart',
//       focusedIcon: 'cart-outline',
//     },
//     // { key: 'user', title: 'User', focusedIcon: 'setting', unfocusedIcon: 'setting-outline' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: Parent,
//     like: likeRoute,
//     cart: likeRoute,
//     // user: accountRoute,
//   });

//   return (
//     <View style={{height: '100%'}}>
//       <BottomNavigation
//         barStyle={{height: 70, backgroundColor: '#ffffff'}}
//         shifting="true"
//         activeColor="#3fc2d1"
//         sceneAnimationEnabled="true"
//         sceneAnimationEasin="EasingFunction"
//         sceneAnimationType="shifting"
//         navigationState={{index, routes}}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//       />
//     </View>
//   );
// };
// // const Tab = createBottomTabNavigator();
// // const Bottom = () => {
// //   const insets = useSafeAreaInsets();
// //   return (

// //     <SafeAreaProvider>
// //        <View
// //       style={{
// //         flex: 1,
// //         // justifyContent: 'space-between',
// //         // alignItems: 'center',

// //         // Paddings to handle safe area
// //         paddingTop: insets.top,
// //         paddingBottom: insets.bottom,
// //         paddingLeft: insets.left,
// //         paddingRight: insets.right,
// //       }}
// //     >

// //     <Tab.Navigator>
// //       <Tab.Screen
// //         name="0"
// //         component={Parent}
// //         options={{
// //           // tabBarActiveTintColor:'#f00',
// //           tabBarIcon:{color: Focused ? '#f00' : '#ffffff'},
// //           // tabBarInactiveTintColor:'#ffffff',
// //           headerShown: false,
// //           tabBarIcon: () => (
// //             <Icon name="home-outline" color="#000000" size={25} />
// //           ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Like"
// //         component={Parent}
// //         options={{
// //           headerShown: false,
// //           tabBarIcon: () => (
// //             <Icon name="heart-outline" color="#000000" size={25} />
// //           ),
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Cart"
// //         component={Parent}
// //         options={{
// //           headerShown: false,
// //           tabBarIcon: () => (
// //             <Icon
// //               name="cart-outline"
// //               color="#000000"
// //               size={25}
// //             />
// //           ),
// //         }}
// //       />
// //     </Tab.Navigator>
// //     </View>
// //     </SafeAreaProvider>
// //   );
// // };

// export default Bottom;
