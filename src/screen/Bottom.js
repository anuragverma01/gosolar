import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Parent from '../../Test/Parent';
import { UserLogOut } from '../../TestAuth/UserLogout';

// const MusicRoute = () => <Login />;

const likeRoute = () => <Text> Comming Soon</Text>;

// const cartRoute = () => <Text>Comming Soon</Text>;

// const accountRoute = () => <Text>Notifications</Text>;

const Bottom = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'like', title: 'Favourate', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'cart', title: 'Cart', focusedIcon: 'cart', unfocusedIcon: 'cart-outline' },
        // { key: 'user', title: 'User', focusedIcon: 'setting', unfocusedIcon: 'setting-outline' },

    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Parent,
        like: UserLogOut,
        cart: likeRoute,
        // user: accountRoute,
    });

    return (
        <BottomNavigation

            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Bottom;