import Bg from '../../assets/BackgroundConnect.png'
import PhotoUser from '../../assets/photoUser.png'
import Profile from '../../assets/PhotoProfile.png'
import { Octicons, Entypo, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import profileemail from '../../assets/profilemail.png'
import { StyleSheet, TextInput, View, Button, TouchableOpacity, Image, SafeAreaView, Text, ScrollView } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import photoHeader from '../../assets/photoHeader.png'

export default function ConnectDetail() {
    const [join, setJoin] = useState('#3AC4A0')
    function handleJoin() {
        const newColor = join === '#3AC4A0' ? 'grey' : '#3AC4A0';
        setJoin(newColor);
    }

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontStyle: 'normal', fontSize: 25 }}>Circle</Text>
                </View>
            ),
            headerTitleAlign: 'center',
            headerRight: () => (
                <View style={{ backgroundColor: '#DCFCE4', width: 24, height: 24, borderRadius: 100, alignItems: 'center', right: 15, justifyContent: 'center' }}>
                    <Image source={photoHeader} />
                </View>
            )
        })
    })
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ position: 'relative', width: '100%', height: 250, backgroundColor: '#fff' }}>
                    <Image source={Bg} style={{ width: '100%', height: 97 }} />
                    <Image source={Profile} style={{ position: 'absolute', left: '4.27%', right: '69.7%', top: 45.34, bottom: 41.81, borderRadius: 1000, borderColor: '#fff', borderWidth: 2 }} />
                    <TouchableOpacity style={{ width: 150, height: 36, top: 110, left: 136, gap: 47, backgroundColor: join, position: 'absolute', borderRadius: 99, }} onPress={handleJoin}>
                        <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 15, lineHeight: 16, fontWeight: 600, top: 10, color: 'white' }}>Join</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8, position: 'absolute', right: 8.27, top: 117.43 }}>
                        <Octicons name="bell" size={24} color="black" />
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6, position: 'absolute', width: 343, height: 88, left: 16, top: 153 }}>
                        <Text style={{ fontWeight: 600, fontSize: 16, lineHeight: 24, alignItems: 'center', color: '#262626' }}>Bitcoin</Text>
                        <Text style={{ width: 311, height: 32, fontWeight: 400, fontSize: 12, lineHeight: 16, alignItems: 'center', color: '#262626' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 119, width: 343, height: 20 }}>
                            <View style={{ width: 132, height: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 6, position: 'absolute' }}>
                                    <View style={{ width: 20, height: 20, backgroundColor: '#DCFCE4', borderRadius: 7 }}>
                                        <Image source={profileemail} style={{ position: 'absolute', width: 20, height: 20 }} />
                                    </View>
                                </View>
                                <Text style={{ position: 'absolute', width: 106, height: 16, left: 18, top: 2, fontStyle: 'normal', fontSize: 12, lineHeight: 16, alignItems: 'center', textAlign: 'right', color: '#7555DA' }}>@margarethatiwi</Text>
                            </View>
                            <View style={{ width: 92, height: 16 }}>
                                <Text style={{ position: 'absolute', fontWeight: 400, fontSize: 12, lineHeight: 16, color: '#BDBDBD' }}>5.2K+ Members</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ position: 'relative', width: '100%', height: 120, backgroundColor: '#fff', marginVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, width: 73 }}>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, width: 54, height: 24 }}>

                    </View>
                    <Image source={PhotoUser} style={{ position: 'absolute', width: 48, height: 48, left: 16, top: 16, borderRadius: 30 }} />
                    <TextInput placeholder="Write Something..." style={{ position: 'absolute', width: 270, height: 30, left: 83, top: 30, fontSize: 14, lineHeight: 20 }}
                        multiline={true}
                        numberOfLines={4}


                    />
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#E9E9E9', position: 'absolute', width: 343, top: 75, borderBottomWidth: 1, left: 16 }}></View>
                    <View style={{ position: 'relative', top: 60, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderLeftWidth: 1, borderLeftColor: '#E9E9E9', width: 32, height: 32 }} ><Text></Text></View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 8, position: 'absolute', width: 54, height: 24, left: 67, top: 85 }}>
                        <View style={{ width: 24, height: 24 }}>
                            <MaterialCommunityIcons name="file-gif-box" size={24} color="#3AC4A0" style={{ left: 4.38, right: 9.38 }} />
                        </View>
                        <Text style={{ width: 22, height: 20, fontSize: 14, fontWeight: 400, lineHeight: 20, color: '#262626' }}>GIF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "flex-end", gap: 8, position: 'absolute', width: 73, height: 24, left: 245, top: 85 }}>
                        <View style={{ width: 24, height: 24 }}>
                            <Feather name="camera" size={24} color="#3AC4A0" style={{ position: 'absolute', left: -1, right: -1 }} />
                        </View>
                        <Text style={{ color: '#262626', width: 41, height: 20, fontWeight: 400, fontSize: 14, lineHeight: 20 }}>Photo</Text>
                    </TouchableOpacity>
                </View >
            </ScrollView>
        </>
    )
}

