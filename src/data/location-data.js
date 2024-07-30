const data = [
  //location data here
  {
    location: 'London',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: 'New York',
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: 'Tokyo',
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: 'Sydney',
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: 'Berlin',
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: 'Rome',
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: 'Cape Town',
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: 'Rio de Janeiro',
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: 'Buenos Aires',
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: 'Lagos',
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    location: 'Mumbai',
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: 'Cairo',
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: 'Cape Town',
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: 'Nairobi',
    latitude: -1.286389,
    longitude: 36.817223,
  },
  {
    location: 'Accra',
    latitude: 5.6037,
    longitude: -0.187,
  },
  {
    location: 'Johannesburg',
    latitude: -26.2041,
    longitude: 28.0473,
  },
  {
    location: 'Casablanca',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  {
    location: 'Lusaka',
    latitude: -15.3875,
    longitude: 28.3228,
  },
  {
    location: 'Harare',
    latitude: -17.8252,
    longitude: 31.0335,
  },
  {
    location: 'Kampala',
    latitude: 0.3136,
    longitude: 32.5811,
  },
  {
    location: 'Addis Ababa',
    latitude: 9.145,
    longitude: 40.4897,
  },
  {
    location: 'Nairobi',
    latitude: -1.286389,
    longitude: 36.817223,
  },
  {
    location: 'Kigali',
    latitude: -1.9706,
    longitude: 30.1044,
  },
  {
    location: 'Dar es Salaam',
    latitude: -6.7924,
    longitude: 39.2083,
  },
  {
    location: 'Khartoum',
    latitude: 15.5007,
    longitude: 32.5599,
  },
  {
    location: 'Tunis',
    latitude: 36.8065,
    longitude: 10.1815,
  },
  {
    location: 'Algiers',
    latitude: 36.7372,
    longitude: 3.0867,
  },
  {
    location: 'Tripoli',
    latitude: 32.8872,
    longitude: 13.1913,
  },
  {
    location: 'Bamako',
    latitude: 12.6392,
    longitude: -8.0029,
  },
  {
    location: 'Dakar',
    latitude: 14.7167,
    longitude: -17.4677,
  },
  {
    location: 'Abuja',
    latitude: 9.0765,
    longitude: 7.3986,
  },
  {
    location: 'Kinshasa',
    latitude: -4.4419,
    longitude: 15.2663,
  },
  {
    location: 'Luanda',
    latitude: -8.8399,
    longitude: 13.2894,
  },
  {
    location: 'Accra',
    latitude: 5.6037,
    longitude: -0.187,
  },
  {
    location: "N'Djamena",
    latitude: 12.1347,
    longitude: 15.0557,
  },
  {
    location: 'Mogadishu',
    latitude: 2.0469,
    longitude: 45.3182,
  },
  {
    location: 'Brazzaville',
    latitude: -4.2634,
    longitude: 15.2429,
  },
  {
    location: 'Maputo',
    latitude: -25.9692,
    longitude: 32.5736,
  },
  {
    location: 'Antananarivo',
    latitude: -18.8792,
    longitude: 47.5079,
  },
  {
    location: 'Windhoek',
    latitude: -22.5609,
    longitude: 17.0658,
  },
  {
    location: 'Gaborone',
    latitude: -24.6282,
    longitude: 25.9231,
  },
  {
    location: 'Lilongwe',
    latitude: -13.9632,
    longitude: 33.7741,
  },
  {
    location: 'Maseru',
    latitude: -29.3142,
    longitude: 27.4838,
  },
  {
    location: 'Mbabane',
    latitude: -26.3054,
    longitude: 31.1367,
  },
  {
    location: 'Port Louis',
    latitude: -20.1654,
    longitude: 57.4896,
  },
  {
    location: 'Victoria',
    latitude: -4.6191,
    longitude: 55.4513,
  },
  {
    location: 'Saint-Denis',
    latitude: -20.8789,
    longitude: 55.4481,
  },
  {
    location: 'Moroni',
    latitude: -11.6455,
    longitude: 43.3333,
  },
  {
    location: 'Nouakchott',
    latitude: 18.0735,
    longitude: -15.9582,
  },
  {
    location: 'Banjul',
    latitude: 13.455,
    longitude: -16.5775,
  },
  {
    location: 'Freetown',
    latitude: 8.484,
    longitude: -13.2299,
  },
  {
    location: 'Monrovia',
    latitude: 6.2907,
    longitude: -10.7605,
  },
  {
    location: 'Conakry',
    latitude: 9.6412,
    longitude: -13.5784,
  },
  {
    location: 'Bissau',
    latitude: 11.8636,
    longitude: -15.5846,
  },
  {
    location: 'Dakar',
    latitude: 14.7167,
    longitude: -17.4677,
  },
  {
    location: 'Praia',
    latitude: 14.9215,
    longitude: -23.5087,
  },
  {
    location: 'Djibouti',
    latitude: 11.8251,
    longitude: 42.5903,
  },
  {
    location: 'Asmara',
    latitude: 15.3229,
    longitude: 38.9251,
  },
  {
    location: 'Addis Ababa',
    latitude: 9.145,
    longitude: 40.4897,
  },
  {
    location: 'Nairobi',
    latitude: -1.286389,
    longitude: 36.817223,
  },
  {
    location: 'Kampala',
    latitude: 0.3136,
    longitude: 32.5811,
  },
  {
    location: 'Kigali',
    latitude: -1.9706,
    longitude: 30.1044,
  },
  {
    location: 'Bujumbura',
    latitude: -3.3895,
    longitude: 29.3644,
  },
  {
    location: 'Dodoma',
    latitude: -6.1629,
    longitude: 35.7516,
  },
  {
    location: 'Lusaka',
    latitude: -15.3875,
    longitude: 28.3228,
  },
  {
    location: 'Harare',
    latitude: -17.8252,
    longitude: 31.0335,
  },
  {
    location: 'Pretoria',
    latitude: -25.7479,
    longitude: 28.2293,
  },
  {
    location: 'Mbabane',
    latitude: -26.3054,
    longitude: 31.1367,
  },
  {
    location: 'Maseru',
    latitude: -29.3142,
    longitude: 27.4838,
  },
  {
    location: 'Maputo',
    latitude: -25.9692,
    longitude: 32.5736,
  },
  {
    location: 'Antananarivo',
    latitude: -18.8792,
    longitude: 47.5079,
  },
  {
    location: 'Port Louis',
    latitude: -20.1654,
    longitude: 57.4896,
  },
  {
    location: 'Victoria',
    latitude: -4.6191,
    longitude: 55.4513,
  },
  {
    location: 'Saint-Denis',
    latitude: -20.8789,
    longitude: 55.4481,
  },
  {
    location: 'Moroni',
    latitude: -11.6455,
    longitude: 43.3333,
  },
  {
    location: 'Nouakchott',
    latitude: 18.0735,
    longitude: -15.9582,
  },
  {
    location: 'Banjul',
    latitude: 13.455,
    longitude: -16.5775,
  },
  {
    location: 'Freetown',
    latitude: 8.484,
    longitude: -13.2299,
  },
  {
    location: 'Monrovia',
    latitude: 6.2907,
    longitude: -10.7605,
  },
  {
    location: 'Conakry',
    latitude: 9.6412,
    longitude: -13.5784,
  },
  {
    location: 'Bissau',
    latitude: 11.8636,
    longitude: -15.5846,
  },
  {
    location: 'Dakar',
    latitude: 14.7167,
    longitude: -17.4677,
  },
  {
    location: 'Praia',
    latitude: 14.9215,
    longitude: -23.5087,
  },
]

function getLocations() {
  return data
}

function getLocationByName(location) {
  if (!location) return null
  const filtered = data.filter((item) => item.location === location)
  if (filtered.length > 0) {return filtered[0]} else{
    const defaultLocation = {
        location: '',
        latitude: 0,
        longitude: 0,
    }
    return defaultLocation
  }
}

export { getLocations, getLocationByName }
