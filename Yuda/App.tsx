import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native'; // Tambahkan import ImageBackground dan TouchableOpacity
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const CoffeeApp = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
        </View>
        <Image
          source={require('./image/profil.png')} // Ganti dengan link foto profil user
          style={styles.profilePic}
        />
      </View>

      {/* Search Bar */}
      <TextInput placeholder="Search coffee" style={styles.searchBar} />

      {/* Promo Banner */}
      <View style={styles.promoContainer}>
        <ImageBackground
          source={require('./image/buy.png')} // Ganti dengan path gambar background
          style={styles.promoBackground} // Sesuaikan styling untuk gambar background
        />
      </View>

      {/* Coffee Categories */}
      <ScrollView horizontal style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Macchiato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Latte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Espresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Mocha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Cortado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Affogato</Text>
        </TouchableOpacity>
        {/* Tambahkan kategori lainnya */}
      </ScrollView>

      <ScrollView>
        {/* Baris pertama */}
        <View style={styles.row}>
          <View style={styles.card}>
            {/* Gambar Rating di Pojok Kiri Atas */}
            <Image
              source={require('./image/Rating1.png')}
              style={styles.ratingIcon}
            />
            {/* Gambar Kopi */}
            <Image
              source={require('./image/kopi.png')} // Ganti dengan gambar sesuai
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Cappuccino</Text>
            <Text style={styles.coffeeNames}>with Chocolate</Text>
            <Text style={styles.coffeePrice}>$4.53</Text>
            {/* Ikon Add di Pojok Kanan Bawah */}
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>

          <View style={styles.card}>
            {/* Gambar Rating di Pojok Kiri Atas */}
            <Image
              source={require('./image/rating2.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi2.png')} // Ganti dengan gambar sesuai
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Cappuccino</Text>
            <Text style={styles.coffeeNames}>with Oat Milk</Text>
            <Text style={styles.coffeePrice}>$3.90</Text>
            {/* Ikon Add di Pojok Kanan Bawah */}
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>
        </View>

        {/* Baris kedua */}
        <View style={styles.row}>
          <View style={styles.card}>
            {/* Gambar Rating di Pojok Kiri Atas */}
            <Image
              source={require('./image/rating3.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi3.png')} // Ganti dengan gambar sesuai
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Latte Art</Text>
            <Text style={styles.coffeeNames}>with Cream</Text>
            <Text style={styles.coffeePrice}>$4.05</Text>
            {/* Ikon Add di Pojok Kanan Bawah */}
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>

          <View style={styles.card}>
            {/* Gambar Rating di Pojok Kiri Atas */}
            <Image
              source={require('./image/rating4.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi4.png')} // Ganti dengan gambar sesuai
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Americano</Text>
            <Text style={styles.coffeeNames}>with Tea</Text>
            <Text style={styles.coffeePrice}>$3.10</Text>
            {/* Ikon Add di Pojok Kanan Bawah */}
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationLabel: {
    color: '#A9A9A9', // Abu-abu pudar
    fontSize: 14, // Ukuran font lebih kecil
    marginBottom: 2, // Jarak kecil antara label dan teks lokasi
  },
  location: {
    color: 'white',
    fontSize: 18,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  searchBar: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    marginVertical: 20,
  },
  promoBackground: {
    width: 360,
    height: 160, // Sesuaikan tinggi sesuai desain yang diinginkan
  },
  promoContainer: {
    marginBottom: 20,
  },
  categories: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  categoryButton: {
    backgroundColor: '#F5F5F7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  categoryText: {
    color: '#181C14',
    fontSize: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    position: 'relative',
  },
  coffeeImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  coffeeNames: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  coffeePrice: {
    fontSize: 16,
    color: '#FF8C00',
    fontWeight: 'bold',
  },
  ratingIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 20,
    zIndex: 1, // Pastikan zIndex diatur agar terlihat
  },
  addIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
  },
});

export default CoffeeApp;
