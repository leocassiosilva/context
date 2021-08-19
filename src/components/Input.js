import React from 'react'; 
import { StyleSheet, View, TextInput } from 'react-native';

export function Input(props){ 
    
    return(
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={ props.onChangeText }
                value={ props.value }
                 { ...props }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    containerInput:{
        marginTop:40,
        width: '90%',
        height: 60,
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
