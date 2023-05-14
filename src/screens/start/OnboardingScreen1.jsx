import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import onBoardingData from '../../data/onBoardingData'
import OnBoardingItem from '../../components/Onboarding/OnBoardingItem'
import { Button } from 'react-native-paper'
import Paginate from '../../components/Onboarding/Paginate'

const OnboardingScreen1 = ({ navigation }) => {
  const nextHandler = () => {
    if (onBoardingData.length - 1 !== currentIndex) {
      slidersRef.current.scrollToIndex({ index: currentIndex + 1 })
      setCurrentIndex(currentIndex + 1)
    }
    else {
      navigation.navigate("CategoryList")
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const slidersRef = useRef(null)
  // console.log(slidersRef.current);

  return (<>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onBoardingData}
        ref={slidersRef}
        renderItem={OnBoardingItem}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled

      />
      <View>
        <Paginate datas={onBoardingData} currentIndex={currentIndex} />
      </View>
      <Button onPress={nextHandler}>Next</Button>
    </SafeAreaView>
    </>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  }
})