import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ContactUs() {
    return (
        <View style={styles.container}>
        
            <Text>First Name</Text>
            <TextInput style={styles.input}
            placeholder="Enter FirstName"></TextInput>

            <Text>Last Name</Text>
            <TextInput style={styles.input}
                placeholder="Enter LastName"></TextInput>

            <Text>Phone No</Text>
            <TextInput style={styles.input}
                placeholder="(###)###-####"></TextInput>

            <Text>Message Request</Text>
            <TextInput style={styles.input}></TextInput>

            <Text>Message</Text>
            <TextInput style={styles.messagebox}></TextInput>

            <TouchableOpacity style={styles.submit}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
                
        
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'baseline',
        justifyContent: "flex-start",
        padding:40
    },
    input: {
        marginBottom: 10,
        padding: 10,
        width: 350,
        marginTop:10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d9d9d9',
    },
    messagebox: {
        marginBottom: 10,
        padding: 10,
        width: 350,
        height:250,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d9d9d9',
         
    },
    submit: {
        backgroundColor: '#004B87',
        borderRadius: 10,
        padding: 15,
        justifyContent:'center',
        marginTop: 20,
        marginLeft: 130,
    },
    text: {
        color: 'white',
        textAlign: 'center',
       
    },
}
);