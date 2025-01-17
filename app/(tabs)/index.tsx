import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Food Agency</Text>
    </View>
  )
}

export default index
const styles=StyleSheet.create({
Container:{
  flex:1,
  flexDirection:'column'
},
text:{
  color:"red",
  fontSize:42,
  fontWeight:400,
}
})