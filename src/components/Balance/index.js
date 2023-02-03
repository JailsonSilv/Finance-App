import React, {useState} from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function Balance( {saldo, gastos} ) {
    const [showBalanceValue, setShowBalanceValue] = useState(false)

    return(
        <View style={styles.container}>
            
            <TouchableOpacity onPress={ () => setShowBalanceValue(!showBalanceValue)} activeOpacity={0.9} style={styles.buttonUser}>
                <AntDesign name="eye" size={28} color="black" />
            </TouchableOpacity>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        { showBalanceValue ? (
                            <Text style={styles.balance}> {saldo} </Text>
                        ) : (
                            <View style={styles.skeletom}></View>
                        )}
                    </View>
            </View>

            <View style={styles.item2}>
                <Text style={styles.itemTitle}>Gastos</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        { showBalanceValue ? (
                            <Text style={styles.expenses}> {gastos} </Text>
                        ) : (
                            <View style={styles.skeletom}></View>
                        )}
                    </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -25,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 7,
        paddingBottom: 22,
        paddingTop: 22,
        zIndex: 99,
        marginBottom: 7,
        elevation: 5,
    },
    buttonUser : {
        alignSelf: "center",
        backgroundColor: "black",
        opacity: 0.4,
        width: 45,
        height: 45,   
        alignItems: "center",
        borderRadius: 100,
        justifyContent: "center",
    },
    itemTitle : {
        fontSize : 20,
        color: "gray",

    },
    content : {
        flexDirection :"row",
        alignItems: "center",
    },
    currencySymbol : {
        color: "gray",
        marginRight: 6,
    },
    balance : {
        fontSize: 22,
        color: "#2edc71", 
    },
    expenses : {
        fontSize: 22,
        color: "#e74e3c",
    }
})