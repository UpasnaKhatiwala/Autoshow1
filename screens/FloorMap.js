import { View,Text, ScrollView,  Image, StyleSheet,Button,TextInput} from 'react-native';

import React,{useState} from 'react';

const img = require('../assets/map.png');


export default function FloorMap () {

    const[activity,setActivity] = useState([

        {name:"N Parking Lot- Electric Avenue & Main Stage:", name2: "44.413050, -79.667212", key:1},
        {name:"E/H Parking Lot- Pfaff Track:", name2: "44.412537, -79.667248", key:2},
        {name:"D Parking Lot- Manufacturer Tents:", name2: "44.412238, -79.666182", key:3},
        {name:"Kids Zone:", name2: "44.413783, -79.667570", key:4},
        {name:"EV Test Drive:", name2: "44.11033, -79.667215", key:5},
        {name:"A Parking Lot- Show ‘n Shine:", name2: "44.410596, -79.667666", key:6}

    ]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding:20
        },
        
        image: {
          width: '100%',
          height: 300,
          resizeMode:'contain'
        },
        headingText: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            padding:0,
            color:'#004B87'
          },
          item:{
            fontSize:15,
            backgroundColor:'white',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginTop:20,
            padding:20,
            width: '100%',
            fontWeight: 'bold'
          }
      });

    return(
        
        <View style={styles.container}>
            
                <ScrollView>
                <Image style={styles.image} source={img} />
                <Text style={styles.headingText}>Parking lot and Coordinates</Text>
            
                { activity.map((item)=>{
                       return(
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}{item.name2}</Text>
                        </View>
                       ) 
                    })
                }
                </ScrollView>
                
            
        </View>
        
    )
}