import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export default ({ navigation, route }) => {

    console.log(route)

    const { nombre } = route.params || { nombre: '' }

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />


            <View>
                <Text> This is Details: Hello {nombre}</Text>
            </View>

            <Button
                title={'Go Home'}
                onPress={() => {
                    navigation.navigate("Dashboard")
                    // navigation.goBack()
                    // navigation.push("Dashboard")
                }}
             />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});