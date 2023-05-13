import { View, Text, Image } from 'react-native'
import ProfilReply from '../../assets/profilReply.png'
import diamond from '../../assets/path0.png'
import bitcoin from '../../assets/path1.png'
import doge from '../../assets/path2.png'
import svg1 from '../../assets/svg1.png'
import svg2 from '../../assets/svg2.png'
import svg3 from '../../assets/svg3.png'
import svg4 from '../../assets/svg4.png'
import svg5 from '../../assets/svg5.png'
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

export function ReplyPost() {
    return (
        <>
            <View style={{ width: '95%', height: 152, backgroundColor: '#F7FBFA', borderRadius: 13, position: 'absolute' }} />
            <View style={{ flexDirection: 'row', left: 9, top: 9, gap: 4, alignItems: 'center' }}>
                <Image source={ProfilReply} style={{ width: 19, height: 19, borderWidth: 1, borderRadius: 100, borderColor: '#5E44FF' }} />
                <Text style={{ fontWeight: 700, fontSize: 9.9, color: '#424242' }}>Ismail Maesbah (YOU)</Text>
                <AntDesign name="checkcircle" size={12} color="#5E44FF" />
            </View>
            <Text style={{ fontWeight: 700, fontSize: 9.9, alignItems: 'center', color: '#424242', left: 9, top: 10 }}>Stock Feature</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3.3, left: 9, top: 10 }}>
                <View style={{ backgroundColor: '#FF4488', borderRadius: 6.6, width: 19, height: 19, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={diamond} />
                </View>
                <View style={{ backgroundColor: '#FFA409', borderRadius: 6.6, width: 19, height: 19, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={bitcoin} />
                </View>
                <View style={{ backgroundColor: '#5E44FF', borderRadius: 6.6, width: 19, height: 19, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={doge} />
                </View>
            </View>
            <Text style={{ color: '#424242', fontWeight: 600, alignItems: 'center', fontSize: 11, textAlign: 'right', left: 9, top: 10, }}>Rp 61.153.000</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 67, top: 35, left: 9 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, justifyContent: 'center' }}>
                    <Feather name="eye" size={19} color="#5E44FF" />
                    <Text style={{ color: '#424242', fontWeight: 700, fontSize: 9.9, alignItems: 'center', textAlign: 'center' }}>Friends Only</Text>
                </View>
                <Text style={{ color: '#9E9E9E', fontSize: 8, fontWeight: 500 }}>1/04/2022,19:05:50 WIB</Text>
            </View>
            <View style={{ width: 90, height: 90, left: 160, top: 9.9, backgroundColor: '#fff', position: 'absolute', borderRadius: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: '40%' }}>
                    <Text style={{ fontWeight: 700, fontSize: 11, alignItems: 'center', color: '#50E6AF' }}>+47%</Text>
                    <Image source={svg1} style={{ position: 'absolute', tintColor: '#39CEF3', left: 16.79, right: 62.15, top: -27.89, bottom: 100.94 }} />
                    <Image source={svg2} style={{ position: 'absolute', tintColor: '#5E44FF', left: 5, right: 79.22, top: -10.99, bottom: 36.39 }} />
                    <Image source={svg3} style={{ position: 'absolute', tintColor: '#E6FF44', left: 9.91, right: 50.9, top: 19.36, bottom: 0 }} />
                    <Image source={svg4} style={{ position: 'absolute', tintColor: '#FF4488', left: 47.14, right: 0, top: 11.1, bottom: 0 }} />
                    <Image source={svg5} style={{ position: 'absolute', tintColor: '#FFA409', left: 36.64, right: 0.01, top: -31, bottom: 50.92 }} />
                </View>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', position: 'absolute', top: 100, backgroundColor: '#5E44FF', borderRadius: 81, alignItems: 'center', gap: 3.31, left: 170, width: 71, height: 25, justifyContent: 'center' }}>
                <FontAwesome5 name="copy" size={15} color="#fff" />
                <Text style={{ color: '#fff', alignItems: 'center', fontSize: 8.2, fontWeight: 500 }}>Copy Pie</Text>
            </TouchableOpacity>
        </>
    )
}