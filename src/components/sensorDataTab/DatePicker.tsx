import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Text, useTheme, Button } from 'react-native-elements'
import { format } from 'date-fns'

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date)
    componentRef.current = format(date, 'dd-MM-yyyy')
    hideDatePicker()
  }

  const componentRef = useRef('')

  const { theme } = useTheme()

  const dateStyle = StyleSheet.create({
    datePickStyle: {
      borderRadius: 15,
      borderStyle: 'solid',
      borderColor: 'rgba(112, 112, 112, 1)',
      borderWidth: 2,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'rgba(25, 25, 27, 1)',
    },
  })

  const container: StyleProp<ViewStyle> = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  }

  return (
    <View style={container}>
      <Button buttonStyle={dateStyle.datePickStyle} title="Change Date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        style={{ color: theme.colors?.white }}
        editable={false}
        value={componentRef.current.toString()}
      ></TextInput>
    </View>
  )
}

export default DatePicker
