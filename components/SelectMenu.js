import { useState, useEffect } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button
} from 'react-native'
import { containers, texts, controls } from '../styles/Components/selectMenu'
import store from '../redux/store'
import axios from 'axios'
import data from '../countries2.json'

export default function SelectMenu({ type }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState('')


  // const getCountries = async () => {
  //   console.log('getCOuhtnries')
  //   try {
  //     const response = await axios.get(
  //       'https://tame-red-dugong.cyclic.appapi/countries'
  //     )
  //     const countries = response.data.countries
  //     console.log(countries)
  //     countries.map(country => {
  //       data.push({
  //         country: country.name_en,
  //         capital: country.capital_en,
  //         code: country.code_3
  //       })
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleOnPress = (country, capital, code) => {
    setModalVisible(false)
    setSelectedDestination({
      country: country,
      capital: capital,
      code: code
    })
    store.dispatch({
      type: type,
      payload: {
        country: country,
        capital: capital,
        code: code
      }
    })
  }

  return (
    <View>
      <TouchableOpacity
        style={containers.selectContainer}
        onPress={() => setModalVisible(true)}
      >
        {selectedDestination === '' ? (
          <Text style={texts.textLocation}>Select location</Text>
        ) : (
          <Text style={texts.textLocation}>
            {selectedDestination.country}, {selectedDestination.capital}
          </Text>
        )}
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={containers.modalMainContainer}>
          <View style={containers.modalContainer}>
            <ScrollView>
              {data.map(country => {
                return (
                  <TouchableOpacity
                    key={country.code_3}
                    style={controls.countriesTouchable}
                    onPress={() =>
                      handleOnPress(
                        country.name_en,
                        country.capital_en,
                        country.code_3
                      )
                    }
                  >
                    <Text style={texts.countriesListText}>
                      {country.name_en}, {country.capital_en}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}
