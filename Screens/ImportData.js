import React,{useState,useCallback} from 'react'
import {Button, StyleSheet,Text,SafeAreaView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { readFile } from 'react-native-fs';
import XLSX from 'xlsx';

const ImportData = ({ navigation }) => {

    const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
      console.log(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const importData=async()=>{
    try{
        const res=await DocumentPicker.pick({
            type:[DocumentPicker.types.allFiles],
        })
        readFile(res[0].uri,'ascii')
            .then(res =>{
                const wb= XLSX.read(res,{type:'binary'});
                const wsname=wb.SheetNames[0];
                const ws=wb.Sheets[wsname];
                const data=XLSX.utils.sheet_to_json(ws,{header:1});
                // console.log('Data: ',data);
                var busData=[];
                var busStopsData=[];
                var busRouteData=[];
                for (let i = 0; i < data.length; i++) {
                    // busData.push({
                    //     bus_no:data[i][0],
                    //     stop_name:data[i][1],
                    //     bus_route:data[i][2],
                    // });
                    if(data[i][0]!=null){
                        busData.push(data[i][0],);
                    }if(data[i][1]!=null){
                        busStopsData.push(data[i][1],);
                    }if(data[i][2]!=null){
                        busRouteData.push(data[i][2],);
                    }
                    
                } 
                // busData.push(data[1][0],);
                // busStopsData.push(data[0][1],);
                // busRouteData.push(data[2][2],);
                console.log('Import Bus data res'+JSON.stringify(busData));
                console.log('Import Bus Stop data res'+JSON.stringify(busStopsData));
                console.log('Import Bus Route data res'+JSON.stringify(busRouteData));
            })
            .catch(e=>{
                console.log('Error read file',e);
            })
    }catch(error){
        console.log('Unknown Error read file',error);
    }
  }
  return (
    <SafeAreaView style={styles.container} >
        <Text>Import Data Screen</Text>
        {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
      {/* <Button title="Select 📑" onPress={handleDocumentSelection} /> */}
        <Button
        title="Import Data 📑"
        onPress={importData}
      />
    </SafeAreaView >
  )
}

export default ImportData

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });