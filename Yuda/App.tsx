import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
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
      <View style={styles.header}>
        <View>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
        </View>
        <Image
          source={require('./image/profil.png')}
          style={styles.profilePic}
        />
      </View>

      <TextInput placeholder="Search coffee" style={styles.searchBar} />

      <View style={styles.promoContainer}>
        <ImageBackground
          source={require('./image/buy.png')}
          style={styles.promoBackground}
        />
      </View>

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
      </ScrollView>

      <ScrollView>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require('./image/Rating1.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi.png')}
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Cappuccino</Text>
            <Text style={styles.coffeeNames}>with Chocolate</Text>
            <Text style={styles.coffeePrice}>$4.53</Text>
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>

          <View style={styles.card}>
            <Image
              source={require('./image/rating2.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi2.png')}
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Cappuccino</Text>
            <Text style={styles.coffeeNames}>with Oat Milk</Text>
            <Text style={styles.coffeePrice}>$3.90</Text>
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require('./image/rating3.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi3.png')}
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Latte Art</Text>
            <Text style={styles.coffeeNames}>with Cream</Text>
            <Text style={styles.coffeePrice}>$4.05</Text>
            <Image source={require('./image/Add.png')} style={styles.addIcon} />
          </View>

          <View style={styles.card}>
            <Image
              source={require('./image/rating4.png')}
              style={styles.ratingIcon}
            />
            <Image
              source={require('./image/kopi4.png')}
              style={styles.coffeeImage}
            />
            <Text style={styles.coffeeName}>Americano</Text>
            <Text style={styles.coffeeNames}>with Tea</Text>
            <Text style={styles.coffeePrice}>$3.10</Text>
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
    color: '#A9A9A9',
    fontSize: 14,
    marginBottom: 2,
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
    height: 160,
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
    zIndex: 1,
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
