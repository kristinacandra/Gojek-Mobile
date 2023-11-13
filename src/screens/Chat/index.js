import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity,} from 'react-native';
import { Activity, Activicty, ArrowLeft, Home, Location, LocationAdd, Map1, People, Profile, Star1, SunFog, Sms, MessageQuestion, Icon, User,} from 'iconsax-react-native';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>
      <ScrollView>
        <TulisanBlog />
        <BlogTengah />
        <BlogBawah />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 0,
    fontWeight: 'bold',
    color: 'black',
  },
});

const TulisanBlog = () => {
  return (
    <View style={tulisan.container}>
      <View style={tulisan.garis}></View>
      <Text style={tulisan.textAwal}>Pilihan Fitur</Text>
    </View>
  );
};

const tulisan = StyleSheet.create({
  garis: {
    marginTop: 5,
    width: '100%',
    height: 2,
    backgroundColor: '#A9A9A9',
    opacity: 0.5,
  },
  textAwal: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

const BlogTengah = () => {
  return (
    <ScrollView horizontal>
      <View style={tengah.container}>
        <TouchableOpacity style={tengah.itemContainer}>
          <View style={[tengah.buletan, {backgroundColor: 'orange'}]}>
            <Sms size="32" variant="Bold" color="white" />
          </View>
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tengah.itemContainer}>
          <View style={[tengah.buletan, {backgroundColor: 'green'}]}>
            <MessageQuestion variant="Bold" size="32" color="white" />
          </View>
          <Text>Bantuan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const tengah = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 15,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 22,
  },
  buletan: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  outline: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
  },
});

const BlogBawah = () => {
  return (
    <View style={bawah.container}>
      <Text style={bawah.textAwal}>Chat kamu</Text>
      <View style={bawah.chatContainer}>
        <User size={30} color="black" />
        <View style={[bawah.chatInfo]}>
          <Text style={bawah.chatTitle}>Gopay Pinjam</Text>
          <Text style={bawah.chatSubtitle}>Kaya flash yang larinya cepat, ...</Text>
        </View>
        <Text style={bawah.tanggalText}>11/10/23</Text>
      </View>
      <View style={bawah.borderBottom}></View>
      <View style={bawah.chatContainer}>
        <User size={30} color="black" />
        <View style={[bawah.chatInfo]}>
          <Text style={bawah.chatTitle}>Gopay Later</Text>
          <Text style={bawah.chatSubtitle}>Jadikan reminder spesial buat kamu....</Text>
        </View>
        <Text style={bawah.tanggalText}>11/10/23</Text>
      </View>
      <View style={bawah.borderBottom}></View>
      <View style={bawah.chatContainer}>
        <User size={30} color="black" />
        <View style={[bawah.chatInfo]}>
          <Text style={bawah.chatTitle}>Jeklin</Text>
          <Text style={bawah.chatSubtitle}>HARI CICILAN TERMURAH!!!</Text>
        </View>
        <Text style={bawah.tanggalText}>20/10/23</Text>
      </View>
      <View style={bawah.borderBottom}></View>
    </View>
  );
};

const bawah = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
  },
  textAwal: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginbottom: 20,
  },
  chatInfo: {
    marginLeft: 10,
    flex: 1, // Memastikan bahwa elemen ini memanfaatkan ruang yang tersedia
  },
  chatTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatSubtitle: {
    color: 'gray',
  },
  tanggalText: {
    marginLeft: 'auto',
    marginRight: 10,
    color: 'black',
    fontSize: 14,
  },
  borderBottom: {
    marginTop:30,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft:40,
  },
});

export default OrderScreen;
