import { useState, useContext } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MyStore } from "../App"
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

const styles = StyleSheet.create({

    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
        // backgroundColor : 'green',
    },

    //타이틀 텍스트
    labelTitle:{
        fontSize: 40,
        fontWeight: "bold",
        // backgroundColor : 'yellow',
        alignItems : 'center',
        justifyContent : 'center',
    },

    //답변 텍스트
    AnswerText:{
        fontSize:50,
        // backgroundColor : 'yellow',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 30 //텍스트와 텍스트끼리의 간격
    },

     //질문 텍스트
     QuestionText:{
        fontSize:20,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10 //텍스트와 텍스트끼리의 간격
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

    //답 확인 버튼
    CheckButton : {
         fontSize:20,
        backgroundColor: "#DDDDDD",
        // padding : 20, //텍스트 상자와 글자간의 간격
        // margin: 10, //텍스트와 텍스트끼리의 간격
        alignItems : 'center',
        justifyContent : 'center',
    },
});

const Q6StrategyB2 = (props) => {

    const B2 = useState("Strategy B Prompt 2\n")

    const Answer2 = useState("Cool, now let’s also guess the length of this rectangle.")


    // 학생이 로그인할 때 입력한 이름을 저장하기 위한 변수 선언
    const { stuid, changeID } = useContext(MyStore)
    // 학생이 입력한 답변을 저장하는 useState
    const [Answer, setAnswer] = useState('');

    // 학생이 제출한 답변이 정답인지 판별하는 함수
    const submitBtn = () => {
        // 학생이 입력한 답변을 저장하는 변수
        var string = Answer;
        // 해당 strategy 정답의 핵심 키워드를 저장하는 변수들
        var keyword1 = 'value:';
        var keyword2 = '[w]+';
        var keyword3 = '12';
        // 학생이 입력한 답변과 strategy 정답과 일치하는 정도를 나타내는 변수
        var a = 0;
    
        // 학생이 입력한 답변을 읽고 일치하는 핵심 키워드가 있으면 일치하는 정도의 퍼센트를 더함
        if(checkBoolean(string.includes(keyword1))){
          a += 33;
        }
        if(checkBoolean(string.includes(keyword2))){
            a += 33;
          }
          if(checkBoolean(string.includes(keyword3))){
            a += 34;
          }
        // 학생이 입력한 답변이 100% 일치하면 다음 strategy 화면으로 넘어가도록 함
        if(a == 100){
          updateDB()
            props.navigation.navigate("Q6StrategyB3")
            setAnswer("")
          a = 0;
        // 일치하지않을 시에는 정답률과 몇%가 일치한 답변이었는지 힌트를 줌
        }else{
          updateDB()
            alert(a)
          a = 0;
        }
        
        // 함수에 들어온 값이 비교 대상 값과 일치하는지 판별하는 함수
        function checkBoolean(value){
          if(value){
            return true;
          }else {
            return false;
          }
        }
      }


      // 학생이 문제에 대한 답변을 제출하면 해당 학생의 DB에 답변내용을 저장하는 함수
      const updateDB = async ()=>{
        try{
          const q = await query(collection(db, "student" ), where('addName',"==",stuid)) // 학생이 로그인할 때 입력했던 이름과 같은 DB를 찾는 쿼리문
          const singleDoc = await getDocs(q);
          let docID = ''
          singleDoc.forEach((doc) => {
            docID = doc.id;
          });
          const docRef = doc(db, "student", docID);
          await updateDoc(docRef, {
            "6-2-2": Answer
          });
        }catch(error){
          console.log(error.message)
        }
      }


      // 학생이 문제의 답을 제출한 적이 있는지 확인하는 함수
      const answercheckDB = async ()=>{
        try{
            const data = await getDocs(collection(db, "student" ))
            setStudents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            {students?.map((row) => {
                // 현재 로그인한 학생의 답안이 제출되어있는지 체크
                if(stuid == row.addName && row["6-2-2"] != null){
                    // 제출한 답변이 있다면 다음 화면으로 넘어가게 됨
                    props.navigation.navigate("Q6StrategyB3")
                }
            })}
        }catch(error){
            console.log(error.message)
        }
    }


    return (
        <View style ={styles.mainView}>

            {/* Q6 S-B2번 문제 라벨 */}
            <Text style = {styles.labelTitle}>
            {B2}
            </Text>
            
            {/* 메인 질문 텍스트 */}
            <Text style = {styles.QuestionText}>
                {Answer2}
            </Text>

                {/* 메인 질문 텍스트 인풋 */}
                <View style = {styles.AnswerText}>
                    <TextInput style = {styles.textInput}
                    value = {Answer}
                    onChangeText={setAnswer}
                    placeholder="Answer"></TextInput>

                    {/* 답 입력 */}
                    <Button
                    style = {styles.CheckButton}
                    title = "Input"
                    onPress={submitBtn}
                    >
                    </Button>    
                </View>
                {/* 전략1 선택 화면 */}
            <Button
            style = {styles.CheckButton}
            title = "Next"
            color= '#191970'
            onPress={answercheckDB}
            >
            </Button>
        </View>
        );
}
export default Q6StrategyB2;