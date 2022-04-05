
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

import {styles} from './style-flat.js'
import { Card } from '../../../components/card/card_flat';

export function Flat() {
    const users = [
        { 
            id: '1',
            nome: 'João Meneguesso',
            funcao: 'Desenvolvedor & Supervisor' 
        },

        { 
            id: '2',
            nome: 'Octávio Nascimento',
            funcao: 'Desenvolvedor & Líder Criativo'
        },

        { 
            id: '3',
            nome: 'Leonardo Ramos ',
            funcao: 'Design e UX',
        },

    ]    

    function AboutUs ({ username, func } ) {
        return (
            <View>
                <Card title="">
                    <Text style={styles.card}> Nome: {username}</Text> 
                    <Text style={styles.card}> Função: {func} </Text> 
                    <Text>{"\n"}</Text>
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Integrantes</Text>
            <Text>{"\n"}</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={users}
                renderItem={({item}) => <AboutUs username={item.nome} func={item.funcao} />}
                />
        </View>   


  );
}
