import React, { useRef, useState } from 'react'
import { Button, View, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Text, useTheme } from 'react-native-elements'
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
    // let inputs = [date];
    // inputs.push(<TextInput style={{color:theme.colors?.white }}editable={false} value={componentRef.current.toString()}></TextInput>);
    componentRef.current = format(date, 'dd-MM-yyyy')
    hideDatePicker()
  }

  const componentRef = useRef('')

  const { theme } = useTheme()

  return (
    <View>
      <Button title="Change Date" onPress={showDatePicker} />
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
