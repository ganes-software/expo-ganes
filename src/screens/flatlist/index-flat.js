// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import {styles} from './style-flat.js'

export function Flat() {
    const users = [
        { id: '1', categoria: 'Missão' },
        { id: '2', categoria: 'Visão' },
        { id: '3', categoria: 'Valores' },

    ]                
    function User ({ username }) {
        return (
            <View>
                <Text> {username} </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Essa a minha FlatList:</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={users}
                renderItem={({item}) => <User username={item.categoria} />}
                />
        </View>   
  );
}
