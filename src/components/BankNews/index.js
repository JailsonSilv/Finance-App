import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function BankNews() {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra mais</Text>
        <ScrollView style={styles.allCards} horizontal={true} showsVerticalScrollIndicator={false}>
          
          <View style={styles.cards}>
              <Image style={styles.imageStyle} source={require("../../../assets/homemNegrocard.jpg")}/>
              <Text style={styles.titleCard}>Bank Celular Seguro</Text>
              <Text style={styles.subTitleCard}>
                100% cobertura 0% estresse. Simule agora mesmo.
              </Text>
              <TouchableOpacity>
                <View style={styles.btnConhecer}>
                  <Text style={styles.txt}>Conhecer</Text>
                </View>
              </TouchableOpacity>
          </View>
          
          <View style={styles.cards}>
              <Image style={styles.imageStyle} source={require("../../../assets/familia.jpg")}/>
              <Text style={styles.titleCard}>Seguro de vida</Text>
              <Text style={styles.subTitleCard}>
                Cuide de quem você ama de um jeito simples e que cabe no seu ...
              </Text>
              <TouchableOpacity>
                <View style={styles.btnConhecer}>
                  <Text style={styles.txt}>Conhecer</Text>
                </View>
              </TouchableOpacity>
          </View>
          
          <View style={styles.cards}>
              <Image style={styles.imageStyle} source={require("../../../assets/portabilidade.jpg")}/>
                <Text style={styles.titleCard}>Portabilidade de salário</Text>
                <Text style={styles.subTitleCard}>Liberdade é escolher onde receber seu dinheiro.</Text>
                <TouchableOpacity>
                  <View style={styles.btnConhecer}>
                    <Text style={styles.txt}>Conhecer</Text>
                  </View>
              </TouchableOpacity>          
          </View>
          
          <View style={styles.cards}>
              <Image style={styles.imageStyle} source={require("../../../assets/controle.jpg")}/>
              <Text style={styles.titleCard}>Indique amigos</Text>
              <Text style={styles.subTitleCard}>
                Espalhe como é simples e importante estar no controle.
              </Text>
              <TouchableOpacity>
                <View style={styles.btnConhecer}>
                  <Text style={styles.txt}>Conhecer</Text>
                </View>
              </TouchableOpacity>
          </View>
          
          <View style={styles.cards}>
              <Image style={styles.imageStyle} source={require("../../../assets/pixCredit.jpg")}/>
              <Text style={styles.titleCard}>Pix no Crédito</Text>
              <Text style={styles.subTitleCard}>
                Veja o vídeo para saber tudo sobre essa nova função.
              </Text>
              <TouchableOpacity>
                <View style={styles.btnConhecer}>
                  <Text style={styles.txt}>Conhecer</Text>
                </View>
              </TouchableOpacity>
          </View>


        </ScrollView>
    </View>
  );
};


const diviceWidth = Math.round(Dimensions.get('window').width)
const radius = 25
const styles = StyleSheet.create({
    container: { 
        paddingStart: 14,
        paddingEnd: 14,
        marginBottom: 20,
      },
      title: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 19,
        fontWeight: "800",
      },
      cards: {
        width: diviceWidth - 25,
        backgroundColor: '#ffff', 
        height: 295,
        width: 270,
        borderRadius: radius,
        elevation: 3,
        marginBottom: 50,
        marginRight: 30,
      },
      imageStyle: {
        height: 130,
        padding: 20,
        margin: 10,
        width: diviceWidth - 650,
        borderRadius: radius,
      },
      titleCard: {
        paddingLeft: 14,
        fontSize: 17,
        fontWeight: "500",
      },
      subTitleCard: {
        paddingLeft: 15,
        marginTop: 10,
        fontWeight: "normal",
        fontSize: 14,
        color: "gray",
      },
      btnConhecer: {
        width: 150,
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#2ccf03",
        marginTop: 15,
        textTransform: 20,
      },
      txt: {
        fontSize: 17,
        fontWeight: "900",
      }
})