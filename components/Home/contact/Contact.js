import React from 'react';
import { SectionList, StyleSheet, Text, View ,Image, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    borderWidth:0.5
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
  image:{
    height:50,
    width:50,
    borderRadius:100
  }
})

const SectionListBasics = () => {
  const walletData = [
    {id: 1, title: 'Dashboard', svg: 'home'},
    {id: 2, title: 'Set Limits', svg: 'image'},
    {id: 3, title: 'Widraw', svg: 'image'},
    {id: 4, title: 'Load Funds', svg: 'image'},
    {id: 5, title: 'Transfer', svg: 'image'},
    {id: 6, title: 'Block Card', svg: 'image'},
    {id: 6, title: 'Block Card', svg: 'image'},
    {id: 6, title: 'Block Card', svg: 'image'},
    {id: 6, title: 'Block Card', svg: 'image'},
    {id: 6, title: 'Block Card', svg: 'image'},
  ];
    return (
      <View style={styles.container}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:100}}>
         {walletData.map(item => (
            <View
              style={{marginRight: 10, display: 'flex', alignItems: 'center'}}>
              <Image
                style={styles.image}
                source={require("../../../assets/images/man.jpg")}
              />
              <Text style={{color: 'black'}}>Reddy</Text>
            </View>
          ))}
         </ScrollView>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
      </View>
    );
}

export default SectionListBasics;