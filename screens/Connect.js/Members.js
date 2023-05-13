import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Searchbar } from 'react-native-paper';
import { Octicons, Entypo, SimpleLineIcons, MaterialCommunityIcons, EvilIcons, AntDesign, Feather } from '@expo/vector-icons';
import { PopMenu } from "./PopMenuMember/PopMenu";

export default function Members({ navigation, route }) {
    const { dataUser } = route.params
    console.log(dataUser, "ini data user member");

    function handleMenu(role) {
        console.log('masuk member', role);
        return PopMenu({ role })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 25 }}>
            <View style={{ alignItems: 'flex-start', gap: 16, marginVertical: 10, marginHorizontal: 16 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', gap: 20, width: '100%' }}>
                    <Text style={{ color: '#262626', fontWeight: 600, fontSize: 16 }}>Participant</Text>
                    <Text style={{ fontWeight: 300, fontSize: 14, alignItems: 'center', color: '#262626' }}>21 Participatn</Text>
                </View>

                <FlatList
                    data={dataUser}
                    ListHeaderComponent={() => (
                        <>
                            <View style={{ flex: 1, width: "100%", height: 37, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 5, paddingHorizontal: 10 }}>
                                <Searchbar
                                    scrollEnabled={true}
                                    iconColor="#262626"
                                    style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: '#fff', width: '100%', height: 40, alignItems: 'center', justifyContent: 'center' }}
                                    inputMode="search"
                                />
                            </View>
                            { }
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </>
                    )}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 5, height: 50, width: '100%', paddingHorizontal: 10 }}>
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
                                    <Text style={{ color: '#7C7C7C', fontWeight: 400, fontSize: 14, lineHeight: 20 }}>{item.email}</Text>
                                </View>
                            </View>
                            <PopMenu role={item.role} />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}