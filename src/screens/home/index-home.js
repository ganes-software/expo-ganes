import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './style-home.js'
import { Card } from '../../../components/card/card.js';

import osCria from '../../../assets/tavio_careca.png';
import ganes from '../../../assets/logo.png';
import nomeMarca from '../../../assets/nomeMarca.png'


export function Home() {
  return (
    <View>

      <View style={styles.containerLogo}>
        <Image source={nomeMarca} style={styles.nomeMarca} />
        <Image source={ganes} style={styles.logo} />
        {/* <Image source={osCria} style={{width: '500px', height:'500px', borderRadius: '50%'}}/> */}
      </View>

      <View style={styles.visione}>
        <Card title="Missão">
          <Text>
            Nossa missão é elevar o nível da experiência dos usuários, fazer com que o use de nosso software seja especial para todos os clientes.
          </Text>
        </Card>

        <Card title="Visão">
          <Text>
            Temos que garantir fazer softwares com qualidade e funcionais, pensando no conforto de nossos usuários, apresentando soluções nas áreas de educação, editoras, fabricas e de comunicação.
          </Text>
        </Card>

        <Card title="Valores">
          <Text>
            Garantimos fazer o melhor para os clientes e nossos funcionários, levando a todos uma boa experiência com a nossa empresa.
          </Text>
        </Card>

      </View>
    </View>
  );
}
