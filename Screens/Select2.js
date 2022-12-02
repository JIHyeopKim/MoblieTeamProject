import { useState, useContext } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TouchableOpacity
} from "react-native";
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
    },

    //선택 텍스트
    SelectText:{
        fontSize:35,
        fontWeight: "bold",
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        // backgroundColor : 'white',
        // padding : 5,
        margin: 15
    },

    //답변 텍스트뷰
    AnswerText:{
        fontSize:20,
        alignItems:'stretch',
        justifyContent : 'center',
        backgroundColor: 'gainsboro',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10 //텍스트와 텍스트끼리의 간격
    },

    AnswerView:{
        flexDirection:'row',
        heigth:20,
        // padding : 5, //텍스트 상자와 글자간의 간격
        // margin: 5, //텍스트와 텍스트끼리의 간격
         alignItems:'stretch',
    },
    
    Answerbutton :{
        backgroundColor: "#DDDDDD",
        padding : 5, //텍스트 상자와 글자간의 간격
        margin: 5, //텍스트와 텍스트끼리의 간격
    },
    //대답 버튼 폰트
    AnswerButtonFont:{ 
        fontSize : 16,
        fontWeight: "bold",
        backgroundColor: '#FFEAD0',
    },

    AnswerTextFont:{ //대답 텍스트 폰트
        fontSize : 14,
        alignItems : 'center',
        justifyContent : 'center',
        width:"70%",
        // backgroundColor: "skyblue",
    },
    //타이틀 텍스트
    labelTitle:{
        fontSize: 50,
        fontWeight: "bold",
        // backgroundColor : 'yellow',
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
    },

});


const Select2 = (props) => {

    const Select = useState("Select2")
    const SelectStrategy = useState("Which strategy do you want to try?\n")


    // 학생이 로그인할 때 입력한 이름을 저장하기 위한 변수 선언
    const { stuid, changeID } = useContext(MyStore)
    const [students, setStudents] = useState();

    // 학생이 문제의 답을 제출한 적이 있는지 확인하는 함수
    const answercheckDB = async ()=>{
        try{
            const data = await getDocs(collection(db, "student" ))
            setStudents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            {students?.map((row) => {
                // 현재 로그인한 학생의 답안이 제출되어있는지 체크
                if(stuid == row.addName && row["2-1-1"] != null && row["2-1-2"] != null && row["2-2-1"] != null
                && row["2-2-2"] != null && row["2-3"] != null){
                    // 제출한 답변이 있다면 다음 화면으로 넘어가게 됨
                    props.navigation.navigate("Question3")
                }
            })}
        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <View style ={styles.mainView}>
                {/* Q2번 */}
                <Text style = {styles.labelTitle}>
                {Select}
                </Text>
                
                {/* Q2-A번 문제 라벨 */}
                <Text style = {styles.SelectText}>
                    {SelectStrategy}
                </Text>
        
            <View style = {styles.AnswerText}>
                <View style = {styles.AnswerView}>
                    <TouchableOpacity style = {styles.Answerbutton}
                        onPress = { () => {
                            props.navigation.navigate("Q2StrategyA") //클릭시 답변 페이지로 이동
                        }}>
                    <Text style = {styles.AnswerButtonFont}>Strategy A</Text>
                    </TouchableOpacity>
                    <Text style = {styles.AnswerTextFont}>Add up her miles and then find out  how many more she needs to get to 22 miles</Text>
                </View>
            </View>

            {/* Q2-B번 문제 라벨 */}
            <View style = {styles.AnswerText}>
                <View style = {styles.AnswerView}>
                    <TouchableOpacity style = {styles.Answerbutton}
                        onPress = { () => {
                            props.navigation.navigate("Q2StrategyB") //클릭시 답변 페이지로 이동
                        }}
                    >
                    <Text style = {styles.AnswerButtonFont}>Strategy B</Text>
                    </TouchableOpacity>
                    <Text style = {styles.AnswerTextFont}>Write an equation to solve it</Text>
                </View>
            </View>
            {/* Q2-C번 문제 라벨 */}
            <View style = {styles.AnswerText}>
                <View style = {styles.AnswerView}>
                    <TouchableOpacity style = {styles.Answerbutton}
                        onPress = { () => {
                            props.navigation.navigate("Q2StrategyC") //클릭시 답변 페이지로 이동
                        }}
                    >
                    <Text style = {styles.AnswerButtonFont}>Strategy C</Text>
                    </TouchableOpacity>
                    <Text style = {styles.AnswerTextFont}>Subtract her miles from 22 and see how many are left</Text>
                </View>
            </View>
            {/* 3번 문제 이동 텍스트뷰 */}
            <View>
                <Button style = {styles.AnswerText}
                        title = "Next"
                        color= '#191970'
                        onPress = {answercheckDB}
                >
                </Button>
            </View>{/* 버튼 뷰 */}
        </View> //메인 뷰
        );
}
export default Select2;