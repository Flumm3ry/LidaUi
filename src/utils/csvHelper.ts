import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

export function ConvertObjectToCsv(objArray: Object[]) {
  if (!objArray.length) return ''

  const rows: string[] = [Object.keys(objArray[0]).join(',')]

  objArray.forEach((o) => rows.push(Object.values(o).join(',')))

  return rows.join('\r\n')
}

export async function downloadStringAsFile(content: string, fileName: string) {
  const directory = FileSystem.documentDirectory + 'lida/'
  if (!(await FileSystem.getInfoAsync(directory)).exists) {
    await FileSystem.makeDirectoryAsync(directory)
    console.log('Creating directory ' + directory)
  }
  let fileUri = directory + fileName
  await FileSystem.writeAsStringAsync(fileUri, content, { encoding: FileSystem.EncodingType.UTF8 })
  console.log('File written to ' + fileUri)
  await Sharing.shareAsync(fileUri)
}
