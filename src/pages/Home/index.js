import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import CreditCard from '../../components/CreditCard';

import CardsInfo from '../../components/CardsInfo';
import BankNews from '../../components/BankNews';
import Infos from '../../components/Infos';



const list = [
  {
    id: 1, 
    label: 'Boleto conta de luz',
    value: "69",
    date: "18/01/2023",
    type: 0 // despesas,
  },
  {
    id: 2, 
    label: 'Chegou um pix',
    value: "80",
    date: "17/02/2023",
    type: 1 // despesas,
  },
  {
    id: 3, 
    label: 'Parcela celular',
    value: "190",
    date: "10/03/2023",
    type: 0 // despesas,
  },
  {
    id: 4, 
    label: 'Salário',
    value: "6.300.00",
    date: "07/03/2023",
    type: 1 // despesas,
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Header name="Jailson" />

            <Balance  saldo="6.547.71" gastos="-629.98" />

            <Actions />  

            <CardsInfo />

            <Infos />

            <CreditCard valor="238.32"  saldo="1261.32"/>

            <Text style={styles.title}> Últimas movimentações </Text>

            <FlatList
              style={styles.list}
              data={list}
              keyExtractor={ (item) => String(item.id) }
              showsVerticalScrollIndicator={false}
              renderItem={ ({item}) => <Movements data={item} />}
            /> 

            <BankNews />
        </ScrollView>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ececec',
    },
    title : {
      fontSize: 18,
      fontWeight: "bold",
      margin: 14,
    },
    list : {
      marginStart: 14,
      marginEnd: 14, 
    }
  });
