import { useState, useContext } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    ScrollView
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
    query, 
    Firestore} from "firebase/firestore"; 
  import { MyStore } from "../App"
const ScoreCheck = (props) => {

    const [student, setStudent] = useState();
    
      const readfromDB = async ()=>{
        try{
            const data = await getDocs(collection(db, "student" ))//DB의 Teacher collection으로 접근
          setStudent(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))//데이터 값 불러오기
        }catch(error){
          console.log(error.message)
        }
      }
    
    return(
    <View style = {styles.MainView}>
        
    <Button style = {styles.nextButton}
    title = 'Student Score List'
    color = '#191970'
 
    
      onPress={readfromDB}//readformDB 실행
    
  >
  </Button>

        {student?.map((row, idx) => {
        return (
          <>
            {/* 학생이름 */}
          <Text style = {styles.titleText}>{row.addName}</Text>
        

      <View style = {styles.SubView}>
         <ScrollView style = {{width : "100%"}}>
        
        {/* Q1 S-A1번 문제 라벨 */}
          <Text style = {styles.QuestionTitle}>
            Q1. StrategyA1
          </Text>
        {/* Q1 S-A1번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
            OK. Using p to represent the number of pictures, write an equation that represents how p, 
            $7.50 per picture, and the $3.25 shipping fee combine to make $85.75
          </Text>
        {/* Q1 S-A1번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["1-1-1"]}
          </Text>
   
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q1 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q1. StrategyA2
          </Text>
        {/* Q1 S-A2번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          Ok, your equation is equivalent to 
          3.25 + 7.50p = 85.75
          Can you solve to find the value of p?
          </Text>
        {/* Q1 S-A2번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["1-1-2"]}
          </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q1 S-B번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q1. StrategyB
          </Text>
        {/* Q1 S-B번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          OK, let’s try that. Start from $3.25. 
          How many times do you have to add $7.50 to get to $85.75?
          </Text>
        {/* Q1 S-B번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["1-2"]}
          </Text>

    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q1 S-C번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q1. StrategyC
          </Text>
        {/* Q1 S-C번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          OK. Start with $85.50.
          Subtract the shipping fee, then count how many times you have to subtract $7.50 to get to 0.
          </Text>
        {/* Q1 S-C번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["1-3"]}
          </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q2 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q2. StrategyA1
          </Text>
        {/* Q2 S-A1번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          Let’s add up Jen’s total from Monday through Thursday. How many miles has she run?
          </Text>
        {/* Q2 S-A1번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["2-1-1"]}
          </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q2 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q2. StrategyA2
          </Text>
        {/* Q1 S-A2번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          OK, if she ran 16 1/8 miles, how many more does she have to run to reach 22 miles?
          </Text>
        {/* Q1 S-A2번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["2-1-2"]}
          </Text>
 
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q2 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q2. StrategyB1
          </Text>
        {/* Q2 S-B1번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          What equation will represent the situation? Use the letter “m” as your vairable
          </Text>
        {/* Q2 S-B1번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["2-2-1"]}
          </Text>

    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q2 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
            Q2. StrategyB2
          </Text>
        {/* Q2 S-B2번 문제 텍스트 */}
          <Text style = {styles.QuestionText}>
          Your equation is equivalent to 16  1/8 + m = 22.
          Can you solve for m?
          </Text>
        {/* Q2 S-B2번 문제 학생 답 */}
          <Text style = {styles.StudentAnswerText}>
          { row["2-2-2"]}
          </Text>

    {/* --------------------------------------------------------------------------------------------- */}
         {/* Q2 S-C번 문제 라벨 */}
         <Text style = {styles.QuestionTitle}>
             Q2. StrategyC
           </Text>
         {/* Q2 S-C번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Let’s subtract Jen’s miles from Monday through Friday from 22. 
           How many miles does Jen have left to run?
           </Text>
         {/* Q2 S-C번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["2-3"]}
           </Text>
         {/* Q2 S-C번 학생이 적은 답 채점 */}
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyA1
           </Text>
         {/* Q3 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Let’s subtract the extra fabric.
           How much did Jennifer use for 6 curtains?
           </Text>
         {/* Q3 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-1-1"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyA2
           </Text>
         {/* Q3 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Yes! So she used 64.8 yards of fabric for six curtains. 
           Now, how much fabric did she use for one curtain?
           </Text>
         {/* Q3 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-1-2"]}
           </Text>
         
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyB1
           </Text>
         {/* Q3 S-B1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What equation will represent the situation?
           Use the letter “m” as your vairable
           </Text>
         {/* Q3 S-B1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-2-1"]}
           </Text>
    
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyB2
           </Text>
         {/* Q3 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice job! That equation looks good.
           Now can you solve for “m”?
           </Text>
         {/* Q3 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-2-2"]}
           </Text>
    
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyC1
           </Text>
         {/* Q3 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           The shorter rectangles are the curtains. 
           The longer one is the left over fabric. How long is the longer rectangle?
           </Text>
         {/* Q3 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-3-1"]}
           </Text>
    
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyC2
           </Text>
         {/* Q3 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Great job! Can you find out how long all 6 of the shorter rectangles are combined?
           </Text>
         {/* Q3 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-3-2"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q3 S-C3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q3. StrategyC3
           </Text>
         {/* Q3 S-C3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Fantastic! Now let’s find how long each of those shorter rectangles are.
           </Text>
         {/* Q3 S-C3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["3-3-3"]}
           </Text>
   
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyA1
           </Text>
         {/* Q4 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to guess-and-check. How many points do you want to guess that Elena won?
           </Text>
         {/* Q4 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-1-1"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyA2
           </Text>
         {/* Q4 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you guessed [x] points for Elena. Then how many would Karla and Faye win?
           </Text>
         {/* Q4 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-1-2"]}
           </Text>
   
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-A3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyA3
           </Text>
         {/* Q4 S-A3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
            Nice work! Now, what do Elena’s, Karla’s and Faye’s scores add up to?
           </Text>
         {/* Q4 S-A3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-1-3"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-A4번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyA4
           </Text>
         {/* Q4 S-A4번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
            Nice work! The points for Elena, Karla, and Faye add up to 114, so that seems correct!
            So who scored the most?
           </Text>
         {/* Q4 S-A4번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-1-4"]}
           </Text>
         
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyB1
           </Text>
         {/* Q4 S-B1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What equation will represent the situation? Use the letter “e” as your vairable
           </Text>
         {/* Q4 S-B1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-2-1"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyB2
           </Text>
         {/* Q4 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Great! That equation looks good. Now, solve for e and enter your answer.
           </Text>
         {/* Q4 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-2-2"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-B3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyB3
           </Text>
         {/* Q4 S-B3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, Elena scored 21 points. Then how many points did Karla and Faye score?
           </Text>
         {/* Q4 S-B3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-2-3"]}
           </Text>

    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-B4번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyB4
           </Text>
         {/* Q4 S-B4번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           So who scored the most?
           </Text>
         {/* Q4 S-B4번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-2-4"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyC1
           </Text>
         {/* Q4 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Each tall rectangle is equal to the number of points that Elena won. 
           How many points are ALL of the tall rectangles together?
           </Text>
         {/* Q4 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-3-1"]}
           </Text>
  
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyC2
           </Text>
         {/* Q4 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, so the four bars represent 84 points. Then how many points did Elena score?
           </Text>
         {/* Q4 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-3-2"]}
           </Text>
  
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-C3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyC3
           </Text>
         {/* Q4 S-C3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           That seems correct. So then, how many points did Karla and Faye score?
           </Text>
         {/* Q4 S-C3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-3-3"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q4 S-C4번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q4. StrategyC4
           </Text>
         {/* Q4 S-C4번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           So who scored the most?
           </Text>
         {/* Q4 S-C4번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["4-3-4"]}
           </Text>

    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q5 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q5. StrategyA1
           </Text>
         {/* Q5 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What equation will represent the situation? Use the letter “m” as your vairable
           </Text>
         {/* Q5 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["5-1-1"]}
           </Text>
         
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q5 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q5. StrategyA2
           </Text>
         {/* Q5 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice job! That equation looks good. Now can you solve for “m”?
           </Text>
         {/* Q5 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["5-1-2"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q5 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q5. StrategyB2
           </Text>
         {/* Q5 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           How many times can you add 8¼ inches to 34.5 inches to get 84 inches?
           </Text>
         {/* Q5 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["5-2-2"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q5 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q5. StrategyC1
           </Text>
         {/* Q5 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to subtract from the total. Start by subtracting 34.5 inches. 
           How much rope does Mario have left?
           </Text>
         {/* Q5 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["5-3-1"]}
           </Text>
         
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q5 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q5. StrategyC2
           </Text>
         {/* Q5 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice work! Now, how many times can Mario cut 8¼-inch sections 
           from the rope before he has no rope left?
           </Text>
         {/* Q5 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["5-3-2"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyA1
           </Text>
         {/* Q6 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What equation will represent the situation?
           Use the letter “x” as your variable
           </Text>
         {/* Q6 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-1-2"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyA2
           </Text>
         {/* Q6 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice job! That equation looks good.
           Now can you solve for “x”?
           </Text>
         {/* Q6 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-1-2"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyB1
           </Text>
         {/* Q6 S-B1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to guess and check.
           How long do you think the width is?
           </Text>
         {/* Q6 S-B1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-2-1"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyB2
           </Text>
         {/* Q6 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Cool, now let’s also guess the length of this rectangle.
           </Text>
         {/* Q6 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-2-2"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-B3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyB3
           </Text>
         {/* Q6 S-B3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, so you guessed that the width is [w] and the length is [w+12]. 
           Now let’s find the perimeter of the rectangle with these dimensions.
           </Text>
         {/* Q6 S-B3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-2-3"]}
           </Text>
      
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-B4번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyB4
           </Text>
         {/* Q6 S-B4번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Great! You got a perimeter of 104 inches. Now remember what you guessed.
           What is the width of the rectangle?
           </Text>
         {/* Q6 S-B4번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-2-4"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyC1
           </Text>
         {/* Q6 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Let’s try a diagram to help. 
           The rectangle has two sides with one measure, and two sides with a longer measure.
           How much extra length is on the longer segments?
           </Text>
         {/* Q6 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-3-1"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q6 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q6. StrategyC2
           </Text>
         {/* Q6 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice work! Now, if the total length of all the segments are 104 inches,
           how long are the shorter segments?
           </Text>
         {/* Q6 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["6-3-2"]}
           </Text>
   
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyA1
           </Text>
         {/* Q7 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What inequality will represent the situation?
           Use the letter “d” as your vairable
           </Text>
         {/* Q7 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-1-1"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyA2
           </Text>
         {/* Q7 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice job! That inequality looks good. 
           Now can you solve for “d” and enter your answer as an inequality?
           </Text>
         {/* Q7 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-1-2"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
         {/* Q7 S-A3번 문제 라벨 */}
         <Text style = {styles.QuestionTitle}>
             Q7. StrategyA3
           </Text>
         {/* Q7 S-A3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Great! Now based on that inequality,
           how many days can Jim rent the car for?
           </Text>
         {/* Q7 S-A3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-1-3"]}
           </Text>
      
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyB1
           </Text>
         {/* Q7 S-B1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to guess and check.
           First, how much will he pay in mileage?
           </Text>
         {/* Q7 S-B1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-2-1"]}
           </Text>
       
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyB2
           </Text>
         {/* Q7 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Cool, so he’s paying $25 in mileage.
           How many days do you think he can rent the car for? 
           </Text>
         {/* Q7 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-2-2"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-B3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyB3
           </Text>
         {/* Q7 S-B3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, so you think that he can rent it for [x] days.
           How much would Jim pay in total?
           </Text>
         {/* Q7 S-B3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-2-3"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyC1
           </Text>
         {/* Q7 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to try adding up.
           Let’s start by finding the cost of driving 250 miles.
           How much will that cost?
           </Text>
         {/* Q7 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-3-1"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q7 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q7. StrategyC2
           </Text>
         {/* Q7 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           All right, you say he pays $25 for mileage. 
           Then he has to pay $21 for each day that he rents. 
           How many times can you add $21 without going over $115?
           </Text>
         {/* Q7 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["7-3-2"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-A1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyA1
           </Text>
         {/* Q8 S-A1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to guess and check.
           First, how much fencing will he need for the two sides of the fence 
           that go along the length of the garden?
           </Text>
         {/* Q8 S-A1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-1-1"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-A2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyA2
           </Text>
         {/* Q8 S-A2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you said he will need 50 feet of fencing for the sides
           that go along the length of the garden.
           So, what is the widest garden that you think he could make?
           </Text>
         {/* Q8 S-A2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-1-2"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-A3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyA3
           </Text>
         {/* Q8 S-A3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, so you’re guessing the garden would be [x] feet wide. 
           How much fencing would he need to make the two sides that go along the width?
           </Text>
         {/* Q8 S-A3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-1-3"]}
           </Text>

     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-A4번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyA4
           </Text>
         {/* Q8 S-A4번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, if that’s true, then how much fencing would he use
           all together to make his rectangular garden fence? work!
           </Text>
         {/* Q8 S-A4번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-1-4"]}
           </Text>
   
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-B1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyB1
           </Text>
         {/* Q8 S-B1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           What inequality will represent the situation?
           Use the letter w as your variable.
           </Text>
         {/* Q8 S-B1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-2-1"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-B2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyB2
           </Text>
         {/* Q8 S-B2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Great! That inequality makes sense.
           Now, solve for w and enter your answer as an inequality
           </Text>
         {/* Q8 S-B2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-2-2"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-B3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyB3
           </Text>
         {/* Q8 S-B3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Nice work! If that’s correct,
           then how wide could the fence be?
           </Text>
         {/* Q8 S-B3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-2-3"]}
           </Text>
        
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-C1번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyC1
           </Text>
         {/* Q8 S-C1번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           Ok, you want to try adding up.
           Let’s start by thinking about the two sides along the length of the garden.
           How much fence will Owen use for those sides?
           </Text>
         {/* Q8 S-C1번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-3-1"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-C2번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyC2
           </Text>
         {/* Q8 S-C2번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           ll right, you say he’ll use 50 feet of fencing
           for the two sides along the length.
           Now, how much fencing can you add without going over 80 feet?
           </Text>
         {/* Q8 S-C2번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-3-2"]}
           </Text>
     
    {/* --------------------------------------------------------------------------------------------- */}
        {/* Q8 S-C3번 문제 라벨 */}
        <Text style = {styles.QuestionTitle}>
             Q8. StrategyC3
           </Text>
         {/* Q8 S-C3번 문제 텍스트 */}
           <Text style = {styles.QuestionText}>
           All right, so if you can add 30 feet of fencing before running out,
           then how wide could the garden be?
           </Text>
         {/* Q8 S-C3번 문제 학생 답 */}
           <Text style = {styles.StudentAnswerText}>
           { row["8-3-3"]}
           </Text>
        
   

        </ScrollView>
        </View>
   
            
            
          </>
        );
      })}
       </View>  
)};

const styles = StyleSheet.create({

  //전체 배경화면
  MainView: {
    flex:1,
    paddingHorizontal: 30,
    backgroundColor: '#FFEAD0'
  },
  
  //각종 UI 들어가는 화면
  SubView : {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1,
},

  //타이틀 텍스트(학생이름)
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems : 'center',
    justifyContent : 'center',
  },

  //버튼 위치
  ButtonView : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  
  //버튼
  nextButton: {
    padding:10,
    alignItems:'center',
    width:'100%',
    backgroundColor: '#191970'
  },

  //질문 타이틀 텍스트
  QuestionTitle:{
    fontSize: 40,
    fontWeight: "bold",
    alignItems : 'center',
    justifyContent : 'center',
},

//답변 텍스트
StudentAnswerText:{
    fontSize:20,
    padding : 20, //텍스트 상자와 글자간의 간격
    margin: 20, //텍스트와 텍스트끼리의 간격
},

//정답 or 오답
AnswerText:{
  fontSize:20,
  padding : 30, 
  alignItems : 'center',
  justifyContent : 'center',
  color : 'red',
  
},

 //질문 텍스트
 QuestionText:{
    fontSize:20,
    fontWeight: "bold",
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'gainsboro',
    padding : 20, //텍스트 상자와 글자간의 간격
    margin: 10, //텍스트와 텍스트끼리의 간격
},
  
});

export default ScoreCheck;