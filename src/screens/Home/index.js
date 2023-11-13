import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowUp, ArrowUp2, Car, CardEdit, CardSend, ClipboardClose, Clock, CloseCircle, CloseSquare, CloudPlus, ColorsSquare, DiscountShape, DocumentText, EthereumClassic, Forbidden, Home, MagicStar, Note, Note1, NoteAdd, NoteFavorite, PenClose, Repeat, SearchNormal, Send, Send2, Shop, Slash, Star, Star1, StarSlash, User, Wallet, WristClock, Xd } from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#F0F0F0', '#FFFFFF']} style={styles.gradientBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <SearchNormal  size={22} style={{ opacity: 0.5 }} />
            <Text style={{ marginHorizontal: '5%' }}>Cari layanan, makanan, & tujuan</Text>
          </View>
          <User color={'green'} variant="Bold" size={30}  />
        </View>
        <View style={styles.content}>
          <Image
            source={require('./src/Untitled.png')} // Tentukan lokasi gambar di sini
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.Wallet}>
          <Wallet color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '1%' }}/>
          <Text style={{ marginHorizontal: '2%', fontWeight: 'bold' }}>Rp5.538 </Text>
          {/* <ArrowUp color={'black'} variant="Broken" size={25} style={{ marginHorizontal: '40%' }}/> */}
          <ArrowUp color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '38%' }} />
          <Clock color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '-35%' }} />
          <DocumentText color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '38%' }} />
        </View>
        <View style={styles.IconBox}> 
        <CardEdit color={'green'} variant="Bold" size={45}  />
        <Text style={styles.iconText}>GoRide</Text>
        </View>
        <View style={styles.IconBox2}> 
        <Car color={'green'} variant="Bold" size={45}  />
        <Text style={styles.iconText}> GoCar</Text>
        </View>
        <View style={styles.IconBox3}> 
        <Repeat color={'red'} variant="Bold" size={45}  />
        <Text style={styles.iconText}>GoFood</Text>
        </View>
        <View style={styles.IconBox4}> 
        <MagicStar color={'green'} variant="Bold" size={45}  />
        <Text style={styles.iconText}>GoMart</Text>
        </View>
        <View style={styles.IconBox5}> 
        <Shop color={'red'} variant="Bold" size={45}  />
        <Text style={styles.iconText}>GoShop</Text>
        </View>
        <View style={styles.IconBox6}> 
        <Send2 color={'green'} variant="Bold" size={45}  />
        <Text style={styles.iconText}>GoSend</Text>
        </View>
        <View style={styles.content}>
        <Text style={{ marginHorizontal: '-35%', paddingVertical: 100, fontWeight: 'bold', fontSize: 19, left: '-21%', color: 'black' }}>Kasih rating dulu, yuk!</Text>
          <View style={styles.contentBox}>
          <Car color={'green'} variant="Bold" size={22}  />
            <Text style={{marginHorizontal: '9%',bottom:22,fontWeight: 'bold',fontSize: 15,}}>gocar</Text>
            <CloseCircle color={'green'} variant="Bold" size={23} style={{left: '94%',top: '-30%'}}  />
            <Image
            source={require('./src/motor.jpg')} // Tentukan lokasi gambar di sini
            style={styles.imageStyle1}
          />
          <Text style={{marginHorizontal: '27%',bottom:22,fontWeight: 'bold',fontSize: 15,width: 300,top:'-70%',fontWeight: 'bold',color:'black', fontSize: 19,}}>Kasih rating ke driver?</Text>
          <Text style={{ marginHorizontal: '27%', bottom: 22, fontWeight: 'normal', fontSize: 15, width: 300, top: '-70%', color: '#333333', fontSize: 14 }}>Diomino's Pizza - Dinoyo Malang</Text>
          <Text style={{ marginHorizontal: '27%', bottom: 22, fontWeight: 'normal', fontSize: 15, width: 300, top: '-70%', color: '#333333', fontSize: 14 }}>08 Okt 19:27</Text>     
          <Star1 style={styles.star} size={28} variant="TwoTone" color='#9BA4B5' />  
          <Star1 style={styles.star1} size={28} variant="TwoTone" color='#9BA4B5' />
          <Star1 style={styles.star2} size={28} variant="TwoTone" color='#9BA4B5' />
          <Star1 style={styles.star3} size={28}  variant="TwoTone" color='#9BA4B5'/>
          <Star1 style={styles.star4} size={28}  variant="TwoTone" color='#9BA4B5'/>       
          </View>
        </View>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Tambahkan properti position: 'relative'
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 52,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 4,
    borderRadius: 5,
    elevation: 8,
  },
  gradientBackground: {
    flex: 1,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  star:{
    marginHorizontal: '27%',
    bottom:95,
    color: 'black',
  },
  star1:{
    marginHorizontal: '27%',
    bottom:123,
    left: 30,
    color: 'black',
  },
  star2:{
    marginHorizontal: '27%',
    bottom:151,
    left: 60,
    color: 'black',
  },
  star3:{
    marginHorizontal: '27%',
    bottom:179,
    left: 90,
    color: 'black',
  },
  star4:{
    marginHorizontal: '27%',
    bottom:207,
    left: 120,
    color: 'black',
  },
  Wallet: {
    position: 'absolute', // Tambahkan properti position: 'absolute'
    backgroundColor: "#F0F0F0",
    flexDirection: 'row', // Menyusun elemen anak dalam satu baris
    alignItems: 'center', // Menyusun elemen anak secara vertikal tengah
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    margin: 15,
    height: 45,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 9,
    width: 350, // Ganti nilai lebar sesuai kebutuhans
    bottom: 520, // Atur elemen "Wallet" berada di bagian bawah
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: 400, // Tentukan lebar gambar
    height: 180, // Tentukan tinggi gambar
    resizeMode: 'cover',
  },
  imageStyle1: {
    top: '-19%',
    width:70, // Tentukan lebar gambar
    height:70, // Tentukan tinggi gambar
    resizeMode: 'cover',
  },
  contentBox: {
    flex:0.1,
    margin:5,
    position: 'absolute',
    top:130,
    left:15,
    paddingHorizontal: 18,
    paddingVertical: 18,
    elevation: 3,
    width:'90%',
    height:'55%',
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  IconBox:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:250,
    left:15,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#D0E7D2",
  },
  IconBox2:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:250,
    left:133,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#D0E7D2",
  },
  IconBox3:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:250,
    left:250,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#FCC8D1",
  },
  IconBox4:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:360,
    left:15,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#D0E7D2",
  },
  IconBox5:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:360,
    left:133,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#FCC8D1",
  },
  IconBox6:{
    flex:0.1,
    margin:15,
    position: 'absolute',
    top:360,
    left:250,
    paddingHorizontal: 18,
    paddingVertical: 18,
    width:80,
    height:80,
    borderRadius: 30,
    backgroundColor: "#D0E7D2",
  },
  iconText: {
    marginTop: 15, // Jarak antara ikon dan teks
    fontSize: 16, // Ukuran teks
    left:'-20%',
    fontWeight: 'bold', // Ketebalan teks
    width: 60,
    textAlign: 'left', // Teks akan diatur ke tengah ikon
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
