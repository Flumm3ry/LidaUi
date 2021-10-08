import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Button } from 'react-native-elements'
import moment from 'moment'

interface DatePickerProps {
  onDateChanged(newDate: number): void
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChanged }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date) => {
    const momentDate = moment(date)
    const todaysDate = moment().valueOf()
    onDateChanged(momentDate.isAfter(todaysDate) ? todaysDate : momentDate.endOf('day').valueOf())
    hideDatePicker()
  }

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
    </View>
  )
}

export default DatePicker
