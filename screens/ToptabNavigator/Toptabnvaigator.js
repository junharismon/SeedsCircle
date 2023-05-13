import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from "../Connect.js/Post";
import Recommended from "../Connect.js/Recommended";
import Members from "../Connect.js/Members";
import About from "../Connect.js/About";
import Profilpost from "../../assets/profilPost.png"
import { View } from 'react-native';
const Toptab = createMaterialTopTabNavigator();

export function ToptabNavigator() {
    const dataUser = [
        {
            name: 'AgusWarewolf',
            role: 'Admin',
            dataImage: Profilpost
        },
        {
            name: 'Kim Jun Yong',
            role: 'Member',
            dataImage: Profilpost,
        },
        {
            name: 'Jun ji hyun',
            role: 'Owner',
            dataImage: Profilpost
        },
        {
            name: 'Jung Nara',
            role: 'Owner',
            dataImage: Profilpost
        },
        {
            name: 'Seol',
            role: 'Owner',
            dataImage: Profilpost
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            {/* <Toptab.Navigator tabBarOptions={{
                activeTintColor: '#3AC4A0',
                inactiveTintColor: 'gray',
                style: { backgroundColor: 'white', height: 40 },
                labelStyle: { fontSize: 8.5, fontWeight: 'bold', },
                indicatorStyle: { backgroundColor: '#3AC4A0' },
            }}>

                <Toptab.Screen name='Post' component={Post}
                    initialParams={[dataUser]}
                />
                <Toptab.Screen name='Recommended' component={Recommended}
                    initialParams={[dataUser]}
                />
                <Toptab.Screen name='Members' component={Members} />
                <Toptab.Screen name='About' component={About} />
            </Toptab.Navigator> */}
        </View>
    )
}