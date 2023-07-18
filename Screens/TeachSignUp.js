import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TextInput,
} from "react-native";
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 
import { ScrollView } from "react-native-gesture-handler";
 
const TeachSignUp = (props) => {
    
    const titleText = useState("SignUpPage");

   
    const classNumberLabel = useState("Input Your ClassNumber:");
    const classpassLabel = useState("Input Your Class Pass:");
    const nameLabel = useState("Input Your Name:");
    const TeachNumberLabel = useState("Input Your TeachNumber:");
      //입력된 교사 정보가 들어갈 useState
    const [addName, setName] = useState('');
    const [addNumber, setNumber] = useState('');
    const [addClassNumber, setClassNumber] = useState('');
    const [addClassPassword, setClassPassword] = useState('');
  
  const addtoDB = async ()=>{
    try{
      await addDoc(collection(db, "Teacher" ), {//DB의 Teacher collection으로 접근
        addName: addName,
        addNumber: addNumber,
        addClassNumber:addClassNumber,
        addClassPassword:addClassPassword,
        createdAt: new Date(), //입력된 데이터 DB에 추가하기
      });
      alert("Succes Sign") //성공시 알림 메시지 띄우기
      setName("")//TextInput 값 초기화
      setNumber("")
      setClassNumber("")
      setClassPassword("")
    }catch(error){
      console.log(error.message)
    }
  }

    return (
        <View style = {styles.mainView}>
            <ScrollView>
            {/* 타이틀 텍스트  */}
            <Text style = {styles.titleText}>
            {titleText}
            </Text>     

            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>

            {/* 이름라벨 */}
            <Text style = {styles.Text}>
                {nameLabel}
            </Text>

            {/* 이름 input창 */}
            <TextInput
                style = {styles.textInput}
                placeholderTextColor={'#999'}
                placeholder="Teacher's name"
                value={addName}
                onChangeText={setName}>
            </TextInput>

            {/* 사번라벨 */}
            <Text style = {styles.Text}>
                {TeachNumberLabel}
            </Text>

            {/* 사번 input 창 */}
            <TextInput
                style = {styles.textInput}
                placeholderTextColor={'#999'}
                placeholder="Teacher's Number"
                value={addNumber}
                onChangeText={setNumber}></TextInput>

            {/* 반라벨*/}
            <Text style = {styles.Text}>
                {classNumberLabel}
            </Text>

             {/* 반 input 창 */}
            <TextInput
                style = {styles.textInput}
                placeholderTextColor={'#999'}
                placeholder="Teacher's Class Number"
                value={addClassNumber}
                onChangeText={setClassNumber}></TextInput>
            
            {/* 반 비밀번호 라벨*/}
            <Text style = {styles.Text}>
                {classpassLabel}
            </Text>

             {/* 반 비밀번호 input */}
            <TextInput
                style = {styles.textInput}
                placeholderTextColor={'#999'}
                placeholder="Teacher's Class PassWord"
                value={addClassPassword}
                onChangeText={setClassPassword}></TextInput>

            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            title = 'Cancel' //버튼 이름 설정
            color = '#191970'//로그인시 로그인 스크린으로 이동
            
            onPress={() => {
                props.navigation.navigate("TeachLogin") //버튼 클릭시 선택 창으로 이동
            }}
            ></Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.ButtonView}
            title = 'Sign Up' //버튼 이름 설정
            color = '#191970'//버튼 클릭시 로그인 이동
            onPress={addtoDB}
            ></Button>
            </View>
        </View> 
        </ScrollView>
    </View>
    );
}
 
const styles = StyleSheet.create({
    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
    },
    //각종 UI가 들어가는 화면
    SubView : {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginVertical: 30,
        flex: 1,
    },

    ButtonView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor : 'white'
    },
    //타이틀 텍스트
    titleText:{
        fontSize: 50,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
    },
    //라벨 텍스트
    Text:{
        fontSize:30,
        fontWeight: "bold",
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
    },
    //인풋 텍스트
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        width : '100%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    //로그인 회원가입 버튼
    SignButton : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TeachSignUp;