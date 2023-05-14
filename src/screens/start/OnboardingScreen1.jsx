import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
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
     <Pressable style={styles.next}onPress={nextHandler}><Text style={styles.nexttext}>Next</Text></Pressable>
    </SafeAreaView>
    </>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  next:{

 position: "relative",
 top:-35,
 left:180,
 width: 163,
 height: 48,
backgroundColor:"#018CF1",
color:"#F6F6F",
alignItems:"center",
paddingTop:12,
borderRadius:8

    /* Auto layout */

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 12px 16px;
// gap: 10px;

// width: 163px;
// height: 48px;

// /* dark/base/brand */

// background: #018CF1;
// border-radius: 8px;

// /* Inside auto layout */

// flex: none;
// order: 1;
// flex-grow: 0;
  },
  nexttext:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:24,
    color: '#F6F6F6'
//     font-family: Outfit;
// font-size: 16px;
// font-weight: 500;
// line-height: 24px;
// letter-spacing: 0em;
// text-align: left;

  }
})