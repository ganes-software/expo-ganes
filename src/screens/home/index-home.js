import { Text, View, Image, Button } from 'react-native';
import { styles } from './style-home.js'
import { Card } from '../../../components/card/card.js';
import ganes from '../../../assets/logo.png';
import nomeMarca from '../../../assets/nomeMarca.png'

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={nomeMarca} style={styles.nomeMarca} />
        <Image source={ganes} style={styles.logo} />
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

        <Button onPress={() => navigation.navigate('FlatList')}
        title="Go to flatlist"
        color="#a80601"
        />
      </View>
    </View>
  );
}
