import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TextInput
} from "react-native";

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

const TeachSignUp = (props) => {
    
    const titleText = useState("SignUpPage");

    const classNumberLabel = useState("Input Your ClassNumber:");
    const classpass = useState("Input Your Class Pass:");
    const nameLabel = useState("Input Your Name:");
    const TeachNumber = useState("Input Your TeachNumber:");

    

    return (
        // 배경 화면 뷰
        <View style = {styles.mainView}>

            {/* 타이틀 텍스트 useState */}
            <Text style = {styles.titleText}>

            {/* 로그인 메인화면 글 */}
            {titleText}
            </Text>     

            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>

            {/* 반 번호 */}
            <Text style = {styles.Text}>
                {classNumberLabel}
            </Text>

            {/* 이름 텍스트 input창 */}
            <TextInput
                style = {styles.textInput}
                placeholder="Input Your name">
            </TextInput>

            {/* classPass */}
            <Text style = {styles.Text}>
                {classpass}
            </Text>

            {/* 학번 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                placeholder="Your Student Number"></TextInput>

            {/* 이름 라벨 창 */}
            <Text style = {styles.Text}>
                {nameLabel}
            </Text>

             {/* 반 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                placeholder="Your Name"></TextInput>
            
            {/* 선생님 번호 라벨 창 */}
            <Text style = {styles.Text}>
                {TeachNumber}
            </Text>

             {/* 반 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                placeholder="Your Name"></TextInput>
            
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
            onPress={() => {
                props.navigation.navigate("TeachSignUp")
            }}
            ></Button>
            </View>
        </View> 
    </View>
    );
}


export default TeachSignUp;