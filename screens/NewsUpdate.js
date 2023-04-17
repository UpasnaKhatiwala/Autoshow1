import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import React, {PureComponent} from 'react';

export default class NewsUpdate extends PureComponent {
    
    render() {
        let {container, date,cardpara, cardText, card, cardImage, Details} = style
    return (

        <View style={container}>

            <ScrollView>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>Announcement</Text>
                <Text style={cardpara}>Attention!</Text>
                <Text style={cardpara}>The Location is Changed for Tomorrow`s event!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>News</Text>
                <Text style={cardpara}>Head-up!</Text>
                <Text style={cardpara}>Check on some today's event update here!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>Announcement</Text>
                <Text style={cardpara}>Today's event is starting in minutes!</Text>
                <Text style={cardpara}>Check the schedule for whole day.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>News</Text>
                <Text style={cardpara}>Head-up!</Text>
                <Text style={cardpara}>Check on some today's event update here!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>Announcement</Text>
                <Text style={cardpara}>Attention!</Text>
                <Text style={cardpara}>The Location is changed for Tommorow's event!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={card}>
                <Text style={date}>June 22,2022,  11:20AM</Text>
                <Text style={cardText}>News</Text>
                <Text style={cardpara}>Head-up!</Text>
                <Text style={cardpara}>Check on some today's event update here!</Text>
            </TouchableOpacity>
            </ScrollView>
            
        </View>
       
    )
}
}

const style = StyleSheet.create({
    container: {
       marginTop: 40
       
    
    },
    cardText: {
        fontSize: 17
       
    },
    cardpara: {
        fontSize: 10
    },
    cardImage: {
        width: '50%',
        height: 100,
        position: 'absolute', top: 0, right: 0, zIndex: 1,
        
    },
    Details: {
        fontSize: 9,
        marginLeft: 300,
        color: 'grey'

    },
    date: {
        fontSize: 14,
        color: 'grey'

    },
    
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 20
    },
   

})