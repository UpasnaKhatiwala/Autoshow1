import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const EventSchedule = () => {
  const [index, setIndex] = useState(0);

  const tabs = [
    { key: 'tab1', title: ' June 2, 2023 ' },
    { key: 'tab2', title: ' June 3, 2023 ' },
    { key: 'tab3', title: ' June 4, 2023 ' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Opening Ceremony</Text>
              <Text style={styles.info}>
                {'\n'}Time: 11 a.m. {'\n'}
                Location: (Main Stage){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gate and Tents open</Text>
              <Text style={styles.info}>
                {'\n'}Time: Noon {'\n'}
                Location: (Kinsmen Confirmed ){'\n'}
              </Text>

            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Food Vendors open</Text>
              <Text style={styles.info}>
                {'\n'}Time: Noon {'\n'}
                Location: (Grizzly Way ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Plug N Drive test drives begin</Text>
              <Text style={styles.info}>
                {'\n'}Time: Noon {'\n'}
                Location: (Charging stations  ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>KidZone open</Text>
              <Text style={styles.info}>
                {'\n'}Time: Noon {'\n'}
                Location: (Field in front of N Building/Residence  ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show Closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 6 p.m. {'\n'}
              </Text>
            </Text>
          </ScrollView>
        );
      case 'tab2':
        return (
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gate and Tents open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m.  {'\n'}
                Location: (Kinsmen Confirmed ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Food Vendors open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Grizzly Way ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Plug N Drive test drives begin</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Charging stations ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>KidZone opens</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Field in front of N Building/Residence ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N Shine</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Tuning Division (F Lot) ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Track and Simulators open </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11 a.m. {'\n'}
                Location: (H Lot & N Building  ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Dog Show </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11 a.m. {'\n'}
                Location: (KidZone ) {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Track Closes  </Text>
              <Text style={styles.info}>
                {'\n'}Time: 3 p.m. {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N Shine Trophy Ceremony</Text>
              <Text style={styles.info}>
                {'\n'}Time: 3:30 p.m. {'\n'}
                Location: (Main Stage ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Dog Show </Text>
              <Text style={styles.info}>
                {'\n'}Time: 4 p.m.  {'\n'}
                Location: ( KidZone ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>KidZone closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 5 p.m.  {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 6 p.m.   {'\n'}
              </Text>
            </Text>
          </ScrollView>
        );
      case 'tab3':
        return (
            <ScrollView style={styles.scrollContainer}>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Gate and Tents open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m.  {'\n'}
                Location: (Kinsmen Confirmed ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Food Vendors open</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Grizzly Way ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Plug N Drive test drives begin</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Charging stations ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>KidZone opens</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Field in front of N Building/Residence ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N Shine</Text>
              <Text style={styles.info}>
                {'\n'}Time: 10 a.m. {'\n'}
                Location: (Tuning Division (F Lot) ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Track and Simulators open </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11 a.m. {'\n'}
                Location: (H Lot & N Building ) {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Dog Show </Text>
              <Text style={styles.info}>
                {'\n'}Time: 11 a.m. {'\n'}
                Location: (KidZone )
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Pfaff Track Closes  </Text>
              <Text style={styles.info}>
                {'\n'}Time: 3 p.m. {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show N Shine Trophy Ceremony</Text>
              <Text style={styles.info}>
                {'\n'}Time: 3:30 p.m. {'\n'}
                Location: (Main Stage ){'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Red Barn Dog Show </Text>
              <Text style={styles.info}>
                {'\n'}Time: 4 p.m.  {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>KidZone closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 5 p.m.  {'\n'}
              </Text>
            </Text>
            <Text style={styles.event}>
              <Text style={styles.eventName}>Show closes </Text>
              <Text style={styles.info}>
                {'\n'}Time: 6 p.m.   {'\n'}
              </Text>
            </Text>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes: tabs }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  event: {
    color: '#004B87',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    color: 'black',
    fontSize: 16,
  },
  tabBar: {
    backgroundColor: '#004B87',
  },
});

export default EventSchedule;