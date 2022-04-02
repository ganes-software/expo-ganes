
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import {styles} from './style-flat.js'

export function Flat() {
    const users = [
        { 
            id: '1',
            nome: 'João Meneguesso',
            funcao: 'Desenvolvedor e Supervisor' 
        },

        { 
            id: '2',
            nome: 'Octávio Nascimento',
            funcao: 'Desenvolvedor e Líder Criativo'
        },
        { 
            id: '3',
            nome: 'Leonardo Ramos ',
            funcao: 'Designer e UX '
        },

    ]                
    function AboutUs ({ username }) {
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
                renderItem={({item}) => <AboutUs username={item.categoria} />}
                />
        </View>   
  );
}
