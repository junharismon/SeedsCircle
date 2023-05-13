import { MaterialIcons, FontAwesome, AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { useRef } from 'react';
import { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Modal, TouchableOpacity, Animated, Easing } from "react-native";



function PopMenuMember() {
    return (
        <>
            <TouchableOpacity style={styles.option1}>
                <MaterialIcons name="report" size={26} color="red" style={{ marginLeft: 0 }} />
                <Text style={{ color: 'red' }}>Report user</Text>
            </TouchableOpacity>
        </>
    )
}

function PopMenuAdmin() {
    return (
        <>
            <TouchableOpacity style={styles.option}>
                <Text>Make Circle Admin</Text>
                <Feather name="users" size={24} color="green" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Kick Member</Text>
                <Feather name="user-x" size={24} color="red" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Ban Member</Text>
                <Entypo name="block" size={26} color="red" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Report</Text>
                <MaterialIcons name="report" size={26} color="red" style={{ marginLeft: 8 }} />
            </TouchableOpacity>

        </>
    )
}

function PopMenuOwner() {

    return (
        <>
            <TouchableOpacity style={styles.option}>
                <Text>Give Ownership</Text>
                <Feather name="user-check" size={24} color="green" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text>Make Circle Admin</Text>
                <Feather name="users" size={24} color="green" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Kick Member</Text>
                <Feather name="user-x" size={24} color="red" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Ban Member</Text>
                <Entypo name="block" size={26} color="red" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={{ color: 'red' }}>Report</Text>
                <MaterialIcons name="report" size={26} color="red" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
        </>

    )

}

export function PopMenu({ role }) {
    const [visible, setVisible] = useState(false)
    const scale = useRef(new Animated.Value(0)).current
    function resizeBox(to) {
        to === 1 && setVisible(true);
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 100,
            easing: Easing.linear
        }).start(() => to === 0 && setVisible(false))
    }
    console.log(role, 'masuk popmenu');
    if (role === 'Admin') {
        return (
            <>
                <TouchableOpacity onPress={() => resizeBox(1)} style={{ width: 24, height: 24 }}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal transparent visible={visible}>
                    <SafeAreaView
                        style={{ flex: 1 }}
                        onTouchStart={() => resizeBox(0)}
                    >
                        <Animated.View style={[styles.popup, { transform: [{ scale }] }]}>
                            <PopMenuAdmin />
                        </Animated.View>
                    </SafeAreaView>
                </Modal>
            </>
        )
    }
    if (role === "Member") {
        return (
            <>
                <TouchableOpacity onPress={() => resizeBox(1)} style={{ width: 24, height: 24 }}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal transparent visible={visible}>
                    <SafeAreaView
                        style={{ flex: 1 }}
                        onTouchStart={() => resizeBox(0)}
                    >
                        <Animated.View style={[styles.popup, { transform: [{ scale }] }]}>
                            <PopMenuMember />
                        </Animated.View>
                    </SafeAreaView>
                </Modal>
            </>
        )
    }
    if (role === "Owner") {
        return (
            <>
                <TouchableOpacity onPress={() => resizeBox(1)} style={{ width: 24, height: 24 }}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
                <Modal transparent visible={visible}>
                    <SafeAreaView
                        style={{ flex: 1 }}
                        onTouchStart={() => resizeBox(0)}
                    >
                        <Animated.View style={[styles.popup, { transform: [{ scale }] }]}>
                            <PopMenuOwner />
                        </Animated.View>
                    </SafeAreaView>
                </Modal>
            </>
        )
    }
}

const styles = StyleSheet.create({
    popup: {
        borderRadius: 16,
        borderColor: '#333',
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        top: 520,
        left: 160,
        width: '50%'
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey'
    },
    option1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey'
    }
})