import React from 'react';
import { View,Text, ScrollView,  Image, StyleSheet } from 'react-native';

const MealSponsor_logos = [
  require('../assets/logo/1.png'),
  require('../assets/logo/2.png'),
  require('../assets/logo/3.png'),
  require('../assets/logo/4.png'),
  require('../assets/logo/5.png'),

];
const kidZone_logos = [require('../assets/logo/6.png'),];

const Alumni_Event_Sponsor_logos = [
  require('../assets/logo/7.png'),
  require('../assets/logo/8.png'),
]

const Auto_Show_Sponsor_logos = [
  require('../assets/logo/9.png'),
  require('../assets/logo/10.png'),
]

const Auto_Show_Contributor_logos = [
  require('../assets/logo/11.png'),
  require('../assets/logo/12.png'),
]

const Community_logos = [
  require('../assets/logo/13.png'),]

  const  Mediasponsors_logos = [
    require('../assets/logo/14.png'),
    require('../assets/logo/15.png'),
    require('../assets/logo/16.png'),
    require('../assets/logo/17.png'),
    require('../assets/logo/18.png'),
    require('../assets/logo/19.png'),
  
  ];



const SponsorList = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    rowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 2,
      elevation: 3,
      margin: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    heading: {
      width: '100%',
     
      padding: 20,
      marginTop: 20,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  const MealSponsor = MealSponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const kidZone = kidZone_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));


  const Alumni_Event_Sponsor = Alumni_Event_Sponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const Auto_Show_Sponsor = Auto_Show_Sponsor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const Auto_Show_Contributor = Auto_Show_Contributor_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  const Community = Community_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));
  
  const Media_sponsors = Mediasponsors_logos.map((logo, index) => (
    <View style={styles.box} key={index}>
      <Image style={styles.image} source={logo} />
    </View>
  ));

  return (
    <ScrollView>
    <View style={styles.container}>
    
      <View style={styles.heading}>
        <Text style={styles.headingText}>Meal Sponsor</Text>
      </View>
      <View style={styles.rowContainer}>{MealSponsor}</View>
      
      <View style={styles.heading}>
      <Text style={styles.headingText}>KidZone Activities Sponsor</Text>
      </View>
      <View style={styles.rowContainer}>{kidZone}</View>
      <View style={styles.heading}>
      <Text style={styles.headingText}>Alumni Event Sponsor</Text>
      </View>
      <View style={styles.rowContainer}>{Alumni_Event_Sponsor}</View>
      

      <View style={styles.heading}>
      <Text style={styles.headingText}>Auto Show Sponsor</Text>
      </View>
      <View style={styles.rowContainer}>{Auto_Show_Sponsor}</View>

      <View style={styles.heading}>
      <Text style={styles.headingText}>Auto Show Contributor</Text>
      </View>
      <View style={styles.rowContainer}>{Auto_Show_Contributor}</View>

      <View style={styles.heading}>
      <Text style={styles.headingText}>Community partner</Text>
      </View>
      <View style={styles.rowContainer}>{Community}</View>

      <View style={styles.heading}>
      <Text style={styles.headingText}>Media_sponsors</Text>
      </View>
      <View style={styles.rowContainer}>{Media_sponsors}</View>

    </View>

    </ScrollView>
  );
};

export default SponsorList;