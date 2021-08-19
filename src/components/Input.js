import React from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Input({placeholder}){ 
    
    return(
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({

    containerInput:{
        marginTop:40,
        width: '90%',
        height: 65,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    
    input:{
        flex:1,
        height:'100%',
        paddingLeft: 20,
        color: '#666666',
        fontSize: 17,
        backgroundColor: '#FFFFFF',
    }
  });
