import { Text, View, StyleSheet, Image, ScrollView, FlatList, } from "react-native";
import { Octicons, Entypo, SimpleLineIcons, MaterialCommunityIcons, EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import { ReplyPost } from "./ReplyPost";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Post({ navigation, route }) {
    const { dataUser } = route.params
    console.log(dataUser, "<<< ini data user");
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', width: '100%', height: 10, paddingHorizontal: 5 }}>
                <FlatList
                    data={dataUser}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 10, position: 'relative', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'grey', height: 300, left: 16, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, position: 'absolute' }}>
                                <View style={{ width: 48, height: 48 }}>
                                    <View style={{ width: 48, height: 48 }}>
                                        <Image source={{ uri: item.dataImage }} style={{ position: 'absolute', width: 48, height: 48, borderRadius: 30 }} />
                                    </View>
                                    <Octicons name="dot-fill" color="#3AC4A0" size={15} style={{ position: 'absolute', width: 15, height: 15, left: 37, top: 33 }} />
                                </View>
                                <View style={{ width: 258, height: 47 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 4, position: 'absolute', width: 185, left: 2, }}>
                                        <Text style={{ fontWeight: 600, fontSize: 14, color: '#262626', }}>{item.name}</Text>
                                        <Text style={{ width: 16, color: '#9CCD6A' }}>🌱</Text>
                                        <View style={{ backgroundColor: '#DCFCE4', width: 55, opacity: 0.8, borderRadius: 16 }}>
                                            <Text style={{ fontWeight: 400, fontSize: 10, color: '#3AC4A0', textAlign: 'center' }}>{item.role}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', gap: 6, position: 'absolute', width: 166, height: 24, top: 23 }}>
                                        <Text style={{ color: '#7C7C7C', fontWeight: 400, fontSize: 14, lineHeight: 20 }}>09/03/22</Text>
                                        <Octicons name="dot-fill" size={12} color="black" style={{ top: 8 }} />
                                        <Text style={{ fontWeight: 400, fontSize: 14, lineHeight: 20, alignItems: 'center', textAlign: 'right', color: '#7C7C7C', }}>12.39 PM</Text>
                                    </View>
                                </View>
                                <View style={{ width: 24, height: 24, right: 8.27 }}>
                                    <Entypo name="dots-three-vertical" size={24} color="black" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'absolute', left: 52, top: 64 }}>
                                <View style={{ flexDirection: 'row', gap: 4, width: 146, height: 18, }}>
                                    <Text style={{ fontWeight: 400, fontSize: 12, lineHeight: 18, color: '#5E44FF' }}>#NFT3d</Text>
                                    <Text style={{ fontWeight: 400, fontSize: 12, lineHeight: 18, color: '#5E44FF' }}>#NFTPostedArt</Text>
                                </View>
                                <View style={{ alignItems: 'flex-start', gap: 8, width: '100%', height: 178 }}>
                                    <Text style={{ color: '#262626', fontWeight: 400, fontSize: 12, lineHeight: 18 }}>I just bought an asset using the copy pie feature</Text>
                                    <View style={{ alignItems: 'flex-start', gap: 6.6, width: 284, height: 152 }}>
                                        <ReplyPost />
                                    </View>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', top: 272, left: 50, justifyContent: 'center', width: '75%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                            <TouchableOpacity>
                                                <MaterialCommunityIcons name="arrow-down-bold-outline" size={18} color="#484747" />
                                            </TouchableOpacity>
                                            <Text style={{ fontWeight: 400, fontSize: 12, color: '#50E6AF', alignItems: 'center' }}>+38</Text>
                                            <TouchableOpacity>
                                                <MaterialCommunityIcons name="arrow-up-bold-outline" size={18} color="#484747" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                            <TouchableOpacity>
                                                <EvilIcons name="comment" size={18} color="#484747" />
                                            </TouchableOpacity>
                                            <Text style={{ fontWeight: 400, fontSize: 12, color: '#424242' }}>16</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <AntDesign name="sharealt" size={18} color="#484747" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <TouchableOpacity>
                                            <SimpleLineIcons name="pin" size={18} color="#484747" />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <MaterialCommunityIcons name="bookmark" size={18} color="#484747" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </SafeAreaView>
            <TouchableOpacity style={{ backgroundColor: '#3AC4A0', borderRadius: 100, left: 290, top: 200, bottom: 4, width: 65, height: 65, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                <Feather name="edit" size={24} color="#fff" />
            </TouchableOpacity>
        </>
    )
}