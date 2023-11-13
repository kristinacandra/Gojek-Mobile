import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity,} from 'react-native';
import { Activity, Activicty, ArrowLeft, Home, Location, LocationAdd, Map1, People, Profile, Star1, SunFog,} from 'iconsax-react-native';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pesanan</Text>
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
});

const BlogTengah = () => {
  return (
    <ScrollView horizontal>
      <View style={tengah.container}>
        <TouchableOpacity style={tengah.itemContainer}>
          <View style={tengah.outline}>
            <View style={tengah.buletan}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Riwayat</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Text>Dalam Proses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Text>Terjadwal</Text>
          </View>
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
    marginLeft: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 22,
  },
  buletan: {
    backgroundColor: 'white',
    width: 90,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    borderBottomWidth: 3,
    borderBottomColor: 'green',
  },
});

const BlogBawah = () => {
  return (
    <View style={bawah.container}>
      <View style={bawah.box1}>
        <Image
          style={bawah.image}
          source={{
            uri: 'https://mobitekno.com/wp-content/uploads/2021/10/Gojek-11-768x401.jpg',
          }}
        />
        <Text style={bawah.textAtas}>Belum pernah pakai Gojek?</Text>
        <Text style={bawah.textBawah}>
          Kamu bisa bepergian, makan, kirim barang, dan bayar ini itu. Cobain,
          yuk!
        </Text>
      </View>
    </View>
  );
};

const bawah = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: 350, // Panjang box1 diperpanjang
      height: 665,
    },
    image: {
      width: 350,
      height: 200,
      borderRadius: 30,
    },
    textAtas: {
      marginTop: 25,
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    textBawah: {
      marginTop: 5,
      marginLeft:13,
      marginRight:13,
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
    },
  });
  

export default OrderScreen;