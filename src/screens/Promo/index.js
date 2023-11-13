import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity,} from 'react-native';
import { Activity, Activicty, ArrowLeft, Home, Location, LocationAdd, Map1, People, Profile, Star1, SunFog,} from 'iconsax-react-native';

const PromoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Promo</Text>
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
      <View style={tengah.container}>
        <View style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>75</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Vouchers</Text>
            <Text
              style={{
                color: 'black',
                textAlign: 'left',
                fontSize: 12,
                marginTop: 5,
              }}>
              74 akan hangus
            </Text>
            <View style={[tengah.orangeLine, {backgroundColor: '#F28C28'}]} />
          </View>
        </View>
        <View style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>0</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Langganan</Text>
            <Text
              style={{
                color: 'black',
                textAlign: 'left',
                fontSize: 12,
                marginTop: 5,
              }}>
              Lagi Aktif
            </Text>
            {/* Add orange line for Langganan */}
            <View style={[tengah.orangeLine, {backgroundColor: '#F33A6A'}]} />
          </View>
        </View>
        <View style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>0</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Missions</Text>
            <Text
              style={{
                color: 'black',
                textAlign: 'left',
                fontSize: 12,
                marginTop: 5,
              }}>
              Lagi Berjalan
            </Text>
            {/* Add orange line for Missions */}
            <View style={[tengah.orangeLine, {backgroundColor: '#0096FF'}]} />
          </View>
        </View>
      </View>
  );
};

const tengah = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,

  },
  itemContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
    marginTop: 15,
    marginBottom: 2,
  },
  buletan: {
    backgroundColor: 'white',
    width: 110,
    height: 75,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 3,
    borderRadius: 10,
    paddingLeft: 10,
  },
  orangeLine: {
    backgroundColor: 'orange',
    height: 4,
    width: '92%', 
    marginTop: 5, 
    borderRadius:10,
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
    marginLeft: 13,
    marginRight: 13,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default PromoScreen;