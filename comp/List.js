import { SafeAreaView, 
    ScrollView,
     StyleSheet, 
     Text, 
     View,
      Alert,
    Image, 
    RefreshControl, 
ActivityIndicator,
FlatList,
Pressable,
Modal, 
TextInput,
TouchableOpacity} from 'react-native'
import React , {useState, useEffect, useCallback} from 'react'
import ModalDetail from './ModalDetail';
import { resolveAssetSource } from 'expo-asset-utils';
;
//dropdownpicker

const List = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isReloading, setIsReloading] = useState(true);

    // //
    // const [isName, setIsName] = useState('');
    // const [isPrice, setIsPrice] = useState(0);
    // const [isImg, setIsImg] = useState('');
    // const [isBaohanh, setIsBaohanh] = useState(0);
    // const [isNam, setIsNam] = useState(0);

     //modal
  const [showModalDialog, setshowModalDialog] = useState(false);
  //dropdown
  // const [open, setOpen] = useState(false);//lưu trạng thái dropdown xổ hoặc không xổ
  // const [value, setValue] = useState(null);//lưu giá trị người dùng chọn phần tử nào
  // const [items, setItems] = useState([ // mảng các phần tử
  //   {label: 'Tai Nghe', value: 'Tai Nghe'}, // label: dừng để hiển thị lên màn hình
  //   {label: 'Ốp Điện Thoại', value: 'Ốp Điện Thoại'},
  //   {label: 'Sạc dự phòng', value: 'Sạc dự phòng'},
  //   {label: 'Kính cường lực', value: 'Kính cường lực'} ,// value : dùng để phân biệt các giá trị (giống id)
  // ]);


// const SaveData = () => {
//     if(isName.length==0)
//     {
//       Alert.alert("Bạn chưa nhập tên linh kiện");
//       return;
//     }
//    else if(isPrice.length==0)
//     {
//       Alert.alert("Bạn chưa nhập giá linh kiện");
//       return;
//     }

//     let objCar = {
//       name : isName, price : isPrice, baohanh:isBaohanh,sanxuat:isNam ,category:value, img : isImg
//     }
//     let url_api_car = 'http://192.168.22.31:3000/accessories';
//     fetch(url_api_car, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(objCar)

//     })
//       .then((res => {
//         if (res.status == 201)
//           alert("thêm sản phẩm thành công");
//           getLinhKien();
//           //
          
//       })
//       )
//       .catch((ex) => {
//         console.log(ex);
//       })

// }




const listSanPham = async () => {
    const api_list_sp = 'http://192.168.22.31:3000/api/users';
    fetch(api_list_sp)
          .then((res) => res.json())
          .then((resJson) => {
            setIsReloading(false);
            setData(resJson)
          }).catch((error) => {
            console.log("Error: " + error);
          })
          .finally(() => setIsLoading(false));


    // try{
    //   const reponse = await fetch(api_list_sp);
    //   const json = await reponse.json();
    //   //đổ dữ liệu vào state
    //   setData(json.data);
    // }
    // catch (error) {
    //   console.log(error);
    // }
    // finally {
    //   setIsLoading(false);
    // }

    // fetch('http://localhost:3000/api/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
};

useEffect(() => {
  const unsubscribe = props.navigation.addListener('focus', () => {
    listSanPham();
  });
  return unsubscribe;

}, [props.navigation]);
const reloadData= useCallback(
    () => {
      //hiển trị trạng thái reloading
      setIsReloading(true);
      //load lại list
      listSanPham();
      setTimeout(() => {
        setIsReloading(false);
      },2222)
    }
  )


  const renderCar=({item, index}) => {




    return (
      
      <View>
        <View style={styles.box1}>
           
           {/* modal chi tiết xe */}
           <ModalDetail item_detail={item} getDetail = {listSanPham}/>
           {/* <Image source={{uri: item.img}} style={{width:80,height:85, borderRadius:12}}/> */}

        <View style={styles.view_text}>
        <Text>Tên Sp : {item.name}</Text>
        <Text>Giá : {item.Price}</Text>
        {/* <Text>Giá : {item.describe}</Text> */}
        </View> 
        <View style={{flexDirection:'column', margin:8, justifyContent:'center',position:'absolute',right:0,padding:2}}>
        </View>
        </View>
        {/* modal chi tiết xe */}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style= {{flexDirection:'row',marginLeft:80,marginTop:66}}>
      <Text style={{fontSize:22,fontWeight:'bold',textAlign:'center',color:'black'}}>Danh Sách Sản Phẩm</Text>

      </View>

        <ScrollView 
        nestedScrollEnabled= {true}
        style={{width:"100%", height:"100%"}}
        refreshControl={
            <RefreshControl refreshing={isReloading} onRefresh={reloadData} /> 
        }>
          {
            isLoading ? <ActivityIndicator /> : (
              <FlatList style={{marginTop:60}}
                data={data}
                renderItem={renderCar}
                keyExtractor={item => { return item.id}}
              />
            )
          } 
        </ScrollView>
    </SafeAreaView>
  )
}

export default List

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#A86464',
        flex:1,
    },
    view_text:{
      margin:8,
    },
    box1:{
      width:333,
      height:88,
      flexDirection:"row",
      borderWidth:1,
      borderRadius:12,
      alignSelf:'center',
      margin:8,
      backgroundColor:"#B3E5BE",
      borderColor:'#B3E5BE'
    },
    button_them: {
      width: 60,
      height: 30,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: "#C1AEFC",
      backgroundColor: "#C1AEFC",
      marginLeft: 40,
    },
    text_button: {
      textAlign: "center",
      fontWeight: "bold",
      color: "white",
      margin: 4,
    },
    khung_modal: {
      alignSelf: "center",
      backgroundColor: "#8EA7E9",
      width: 277,
      height: 555,
      margin: 40,
      borderRadius: 22,
  
    },
    box3: {
      margin: 20,
    },
    text_Modal: {
      marin: 4,
      fontWeight: "bold",
    },
    textInput_Modal: {
      width: 222,
      height: 44,
      margin: 4,
      borderRadius: 8,
      borderColor: "#F2DEBA",
      borderWidth: 1,
      marginBottom:12
    },
    box4: {
      flexDirection: "row",
      marginLeft: 60,
    },
    button_Modal: {
      width: 60,
      height: 33,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#8BF5FA",
      backgroundColor: "#8BF5FA",
      margin: 4,
    },
    textButton_Modal: {
      fontWeight: "bold",
      margin: 4,
      textAlign: "center",
    },
})