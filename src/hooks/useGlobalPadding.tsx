import { Dimensions } from 'react-native'

export default function useGlobalPadding() {
  const globalPaddingPercentage = 10

  const horizontalPadding = (Dimensions.get('window').width * globalPaddingPercentage) / 100
  const contentWidth = Dimensions.get('window').width - horizontalPadding * 2

  return { horizontalPadding, contentWidth }
}
