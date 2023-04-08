import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import AntDesign from "react-native-vector-icons/AntDesign";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
  import Entypo from "react-native-vector-icons/Entypo";
  import Fontisto from "react-native-vector-icons/Fontisto";
  import { Feather } from "@expo/vector-icons";
  // import { AntDesign } from '@expo/vector-icons';
  export default function MyPage() {
    return (
      <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
        <View
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "#636e72",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "white" }}>9:41 AM</Text>
            </View>
            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
              <View>
                <FontAwesome5 name="signal" size={15} color="black" />
              </View>
              <Text> </Text>
              <View>
                <Entypo name="signal" size={15} color="black" />
              </View>
              <Text> </Text>
              <View>
                <FontAwesome5 name="battery-half" size={15} color="black" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 19,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                justifyContent: "center",
              }}
            >
              <AntDesign name="arrowleft" size={26} color="white" />
              <Text style={{ color: "white", marginLeft: 5, fontSize: 15 }}>
                Maintenance Requests
              </Text>
            </View>
            <View>
              <AntDesign name="questioncircleo" color="white" size={15} />
            </View>
          </View>
        </View>
        <View></View>
        <Text></Text>
        
        <View style={{
          width: "92%",
            height: 500,
            backgroundColor: "#bdc3c7",
            alignSelf: "center",
  
        }}>
        <View
          style={{
           
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Feather name="home" size={24} color="black" />
            <Text style={{ fontSize: 20 }}> SR : 34343345</Text>
          </View>
          <View>
            <Text style={{ marginTop: 15 }}>4 Hours ago</Text>
          </View>
         
        </View>
           <View style={{width:"90%",height:80,backgroundColor:"#dff9fb", alignSelf: "center",
                         marginTop:20,
                        }}>
          <View style={{marginTop:10,
            flexDirection:'row',
            justifyContent:"space-between",
            paddingHorizontal:20
          }}>
          <View>
          <Text>Mohammad</Text>
          <Text>9898587858</Text>
          </View>
          <View style={{height:40,width:"35%", backgroundColor:"green",}}>
          <Text style={{textAlign:"center",marginTop:9,color:"white"}}> Open</Text>
          </View>
          </View>
          </View>
             <View style={{margin:15,}}>
               <Text style={{fontSize:15,fontWeight:"600"}}>General    Information</Text>
              </View>
             <View style={{marginHorizontal:15}}>
             
               <Text style={{marginVertical:5}}>Service Type                       Application</Text>
               <Text style={{marginVertical:5}}>Issue Description               Cooling Issue</Text>
               <Text style={{marginVertical:5}}>Created At                          26.10.2022 10.13.36</Text>
               <Text style={{marginVertical:5}}>Preferred Date                   26.10.20220 12.00.12</Text>
               <Text style={{marginVertical:5}}>Complicated at                  Na</Text>
               <Text style={{marginVertical:5}}>Title                                     Qqwewefwtg</Text>
               <Text style={{marginTop:5}}>Functional Location          Lorem ispsum is simply</Text>
                <Text>                                            dummy text of the</Text>                                                               
                <Text>                                            printing text of the</Text>                                                               
                <Text>                                            industry</Text>                                                               
              </View>
        </View>
        <View></View>
        <Text></Text>
        <View style={{
          width: "92%",
          height: 1400,
          backgroundColor: "#bdc3c7",
          alignSelf: "center",
  
  
        }}>
        <View style={{margin:15}}>
        <Text style={{fontSize:20}} > General Information</Text>
        </View>
        <View style={{margin:15}} >
        <Text style={{margin:15}} > Feedback                           Na</Text>
        <Text style={{margin:15}} > Before                                Na</Text> 
        <Text style={{margin:15}} > AfterComment                  Na</Text>
        </View>
        <Text style={{margin:29}}>Attachment</Text>
        <Image 
        style={{width:"100%",
         height:200,
      }}
      source={{uri:"https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"}}
        />
        <Text style={{margin:29}}>Signature</Text>
        <Image 
        style={{width:"100%",
         height:200,
      }}
      source={{uri:"https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"}}
        />
        <Text style={{margin:29}}>Before Image</Text>
        <Image 
        style={{width:"100%",
         height:200,
      }}
      source={{uri:"https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"}}
        />
        <Text style={{margin:29}}>Before Image</Text>
        <Image 
        style={{width:"100%",
         height:200,
      }}
      source={{uri:"https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"}}
        />
        </View>
  
        <View>
          <View style={{marginLeft:14,}}>
          <Text style={{fontSize:18}}>Activity</Text>
          </View>
          <View style={{width:"90%",height:120,backgroundColor:"grey",alignSelf:"center" ,}}>
           
          <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:20}}>
          <View style={{backgroundColor:"#9c88ff", width:50,height:50,borderRadius:100,
         //  margin:20,
         
         }} >
          <Text style={{textAlign:"center",marginTop:14}}>MI</Text>
          </View>
          <View
           // style={{marginTop:20}}
           >
          <Text>   john </Text>
          <Text>   Tenant You</Text>
          </View>
          <View >
          <Text>        11 AM on Friday 23rd May</Text>
          </View>
          </View>
                  <Text style={{marginLeft:60,marginTop:20}}>Your request submitted</Text>
          </View>
          <View style={{width:"90%",height:180,backgroundColor:"grey",alignSelf:"center" ,}}>
           
          <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:20}}>
          <View style={{backgroundColor:"#9c88ff", width:50,height:50,borderRadius:100,
         //  margin:20,
         
         }} >
          <Text style={{textAlign:"center",marginTop:14}}>MI</Text>
          </View>
          <View
           // style={{marginTop:20}}
           >
          <Text>   john </Text>
          <Text>   Tenant| You</Text>
          </View>
          <View >
          <Text>        10 AM on Friday 24th May</Text>
          </View>
          </View>
          <Text style={{marginLeft:60,marginTop:20}}>Technician will arrive between | 11 AM | 25th May</Text>
          <View >
          <TouchableOpacity style={{backgroundColor:"black",width:"30%",height:29,marginLeft:240,marginTop:20}}>
          <Text style={{color:'white',textAlign:"center",marginTop:5}}>Reschudule</Text>
          </TouchableOpacity>
          </View>
          </View>
         
          
       </View>
       
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({});
  