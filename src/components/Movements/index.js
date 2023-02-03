import React, {useState} from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';


export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);


 return (
    <TouchableOpacity onPress={ () => setShowValue(!showValue)} style={styles.container}>
        <Text style={styles.date}> {data.date} </Text>

        <View style={styles.content}>
            <Text style={styles.label}> {data.label} </Text>

            { showValue ? (
                <Text 
                    style={data.type === 1 ? styles.value : styles.expenses}
                >
                    {data.type === 1 ? `R$ ${data.value}` : ` - R$ ${data.value}`}
                </Text>
            ) : (
                <View style={styles.skeletom}>
                </View>
            )} 
        </View>
    </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        borderBottomColor: "#fff",
        borderBottomWidth: 2, 
    },
    content : {
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 20,    
    },
    date : {
        marginTop: 5,
        color: "gray",
        fontWeight: "bold",
        fontSize: 16,
    },
    label : {
        fontSize: 18,
        fontWeight: "bold",
    },
    value : {
        fontSize: 16,
        color: "#2ecd71",
        fontWeight: "bold",
    },
    expenses : {
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold",
    },
    skeletom : {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8,
    }
});