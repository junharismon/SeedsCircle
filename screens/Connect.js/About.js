import { View, Text, ScrollView } from "react-native";

export default function Post() {
    return (
        <>
            <ScrollView style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 15, paddingVertical: 15, }}>
                <View style={{ flex: 1, gap: 10, height: 500, width: '100%' }}>
                    <View style={{ alignItems: 'flex-start', gap: 2 }}>
                        <Text style={{ color: '#262626', fontWeight: 600, fontSize: 14 }}>About this Circle</Text>
                        <Text style={{ color: '#262626', fontWeight: 400, fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start', gap: 2 }}>
                        <Text style={{ color: '#262626', fontWeight: 600, fontSize: 14 }}>Circle Rules</Text>
                        <Text style={{ color: '#262626', fontWeight: 400, fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                    </View>
                    <View style={{ gap: 2 }}>
                        <Text style={{ color: '#262626', fontWeight: 600, fontSize: 14 }}>
                            Circle Hashtag
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Text style={{ color: '#3AC4A0', fontWeight: 400, fontSize: 14 }}>#usstocks</Text>
                            <Text style={{ color: '#3AC4A0', fontWeight: 400, fontSize: 14 }}>#stocks</Text>
                            <Text style={{ color: '#3AC4A0', fontWeight: 400, fontSize: 14 }}>#tech</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}