import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="tagso" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialCommunityIcons name="bank-transfer" size={26} color="black" />
            </View>
            <Text style={styles.labelButton}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="mobile1" size={26} color="black" />
            </View>
            <Text style={styles.labelButton}>Recarga de celular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons name="favorite-border" size={26} color="black" />
            </View>
            <Text style={styles.labelButton}>Doação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons name="trending-up" size={26} color="black" />
            </View>
            <Text style={styles.labelButton}>Investir</Text>
        </TouchableOpacity>
   </ScrollView>
   
  );
}

const styles = StyleSheet.create({
    container : {
        maxHeight: 115,
        marginBottom: 20,
        marginTop: 25,
        paddingEnd: 14,
        paddingStart: 14,
        borderBottomColor: "#fff",
        borderBottomWidth: 3,   
    },
    actionButton : {
        alignItems: "center",
        marginRight: 32,
    },
    areaButton : {
        backgroundColor: "#ADD8E1",
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
    },
    labelButton : {
        marginTop: 4,
        marginBottom: 30,
        textAlign: "center",
        fontWeight: 'bold',
    }
});