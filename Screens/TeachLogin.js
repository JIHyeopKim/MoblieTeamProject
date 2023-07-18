import { createContext, useContext } from 'react';
import { useState } from "react";
import { View, TextInput, Button,StyleSheet,Text,TouchableOpacity, Alert,ScrollView } from 'react-native';
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

import { async } from "@firebase/util";
import { MyStore } from "../App"
import { NumberContext } from '../App';
const TeachLogin = (props) => {

    const titleText = useState("Teacher Login");//타이틀 텍스트
    
    //라벨텍스트
    const classNumberLabel = useState("Input Your ClassNumber:");
    const classpassLabel = useState("Input Your Class Pass:");
    const nameLabel = useState("Input Your Name:");
    const TeachNumberLabel = useState("Input Your TeachNumber:");
    
    //입력된 교사 정보가 들어갈 useState
    const [Teacher, setTeacher] = useState();
    const [addName, setName] = useState('');
    const [addNumber, setNumber] = useState('');
    const [addClassNumber, setClassNumber] = useState('');
    const [addClassPassword, setClassPassword] = useState('');
    
    //readformDB를 통해 로그인
    const readfromDB = async ()=>{
        try{
          const data = await getDocs(collection(db, "Teacher" ))//DB의 Teacher collection으로 접근

          setTeacher(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
     
            
            {Teacher?.map((row, idx) => {
              
              if(addName==row.addName && addNumber==row.addNumber //입력된 값이 DB에 저장된 데이터 값과 일치하는지 확인하기
                && addClassNumber==row.addClassNumber && addClassPassword==row.addClassPassword){
                   
                    props.navigation.navigate("ScoreCheck")//값이 일치할시 학생들의 문제풀이 확인 페이지로 넘어감
                }
            
            })}
          
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
                secureTextEntry={true}
                placeholder="Teacher's Class PassWord"
                value={addClassPassword}
                onChangeText={setClassPassword}></TextInput>

            <View style = {styles.ButtonView}>
             {/* 로그인버튼 */}
             <Button 
            style = {styles.SignButton}
        
                title = "Login"
                color = '#191970'
                onPress={readfromDB} //입력된 값을 useState를 통해 저장후 readfromDB실행
            >
            </Button>

            {/* 회원가입버튼*/}
            <Button
            style = {styles.SignButton}
            title = "SignUp" //버튼 이름 설정
            color = '#191970'
            //버튼 클릭시 회원가입창 이동
            onPress={() => {
                props.navigation.navigate("TeachSignUp")
            }}
            >
            </Button>
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

export default TeachLogin;