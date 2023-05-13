import { Button } from "react-native";
import { Text } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native";
import { View } from "react-native";
export default function Homescreen() {
    const navigation = useNavigation()
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text>Home</Text>
            <Button title="To Connect Detail" onPress={() => navigation.navigate('Detail Circle', { userRole: 'admin' })} />
        </View>
    )
}