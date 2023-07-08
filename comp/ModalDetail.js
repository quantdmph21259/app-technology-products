import { StyleSheet, Text, Viewm, Modal, TextInput, Pressable, View
,TouchableOpacity,
Image } from 'react-native'
import React,{useState,useEffect} from 'react'

const ModalDetail = (props) => {
    //show modal
    const [showModal, setshowModal] = useState(false);

    const [name, setName] = useState(props.item_detail.name);
    const [price, setPrice] = useState(props.item_detail.Price);
    const [img, setImg] = useState(props.item_detail.img);
    const [id, setId] = useState(props.item_detail._id);
    const [describe, setDescribe] = useState(props.item_detail.describe);

      //modal chi tiết
  const [showModalDetail, setshowModalDetail] = useState(false);
    
 useEffect(() => {
  
      props.getDetail();
  
  },[props.navigation]);

  return (
    <View>
    <Modal visible = {showModalDetail} transparent={true} 
    animationType="fade" onRequestClose={
      () => {
        setshowModalDetail(false);
      }
    }>
      <View style={styles.khung_modal}>
      <Image style={{width:277,height:200,borderRadius:12}}
      source={{uri : img}}/>
      {/* id */}
      <View style={{flexDirection:'row',margin:4}}>
        <Text style={{color:'#F5E9CF',fontSize:18}}>ID :</Text>
        <Text style={styles.text_Modal}>{id}</Text>
      </View>
      {/* tên */}
      <View style={{flexDirection:'row',margin:4}}>
        <Text style={{color:'#F5E9CF',fontSize:18}}>Tên : </Text>
        <Text style={styles.text_Modal}>
        {name}
      </Text>
      </View>
      {/* giá */}
      <View style={{flexDirection:'row',margin:4}}>
        <Text style={{color:'#F5E9CF',fontSize:18}}>
        Giá :
      </Text>
      <Text style={styles.text_Modal}>{price}</Text>
      </View>
      {/* chi tiết */}
      <View style={{flexDirection:'row',margin:4}}>
        <Text style={{color:'#F5E9CF',fontSize:18}}>
        Mô tả :
      </Text>
      <Text style={styles.text_Modal_Mota}>{describe}</Text>
      </View>


      
      <Pressable style={{width:66,height:44,borderRadius:12,backgroundColor:'#C0EEF2',justifyContent:'center',alignSelf:'center',marginTop:22}}>
        <Text onPress={() => setshowModalDetail(false)} style={{textAlign: 'center',fontSize:18}}>Đóng</Text>
      </Pressable>
      </View>
        </Modal>
        <TouchableOpacity onPress={() => setshowModalDetail(true)}>
              <Image source={{uri : img}} style={{width:80,height:85, borderRadius:12}}/>
           </TouchableOpacity>
        </View>
  )
}

export default ModalDetail

const styles = StyleSheet.create({
    khung_modal: {
        alignSelf: "center",
        backgroundColor: "#8EA7E9",
        width: 277,
        height: 444,
        margin: 40,
        borderRadius: 22,
    
      },
      box3: {
        margin: 20,
      },
      text_Modal: {
        color:'#BEF0CB',
        marin: 8,
        fontWeight: "bold",
        fontSize:18,
        maxWidth:200,
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
      text_Modal_Mota: {
        color:'#BEF0CB',
        marin: 8,
        fontWeight: "bold",
        fontSize:18,
        maxWidth:220,
      },
})