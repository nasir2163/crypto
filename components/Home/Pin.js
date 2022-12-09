import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, SafeAreaView, StatusBar, Text } from "react-native"
import ReactNativePinView from "react-native-pin-view"
const Pin = () => {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])
  return (
    <>
      <StatusBar barStyle="light-content" />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
             
              paddingBottom: 20,
              color: "rgba(0,0,0,0.9)",
              fontSize: 48,
            }}>
            Enter Pin
          </Text>
          <ReactNativePinView
            inputSize={32}
            ref={pinView}
            pinLength={4}
            buttonSize={70}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 10,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "black",
            }}
            inputViewFilledStyle={{
              backgroundColor: "black",
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: "black",
            }}
            buttonTextStyle={{
              color: "black",
            }}
            onButtonPress={key => {
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                alert("Entered Pin: " + enteredPin)
              }
              if (key === "three") {
                alert("You just click to 3")
              }
            }}
            customLeftButton={showRemoveButton ? <Icon name={"ios-backspace"} size={36} color={"black"} /> : undefined}
            customRightButton={showCompletedButton ? <Icon name={"ios-unlock"} size={36} color={"black"} /> : undefined}
          />
        </SafeAreaView>
    </>
  )
}
export default Pin