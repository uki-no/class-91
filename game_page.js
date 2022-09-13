var player1_name= localStorage.getItem("player1_name")
var player2_name= localStorage.getItem("player2_name")
var player1_score=0
var player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"

document.getElementById("player1_score").innerHTML=player1_score+":"
document.getElementById("player2_score").innerHTML=player2_score+":"

document.getElementById("player_question").innerHTML="question turn= "+player1_name
document.getElementById("player_answer").innerHTML="answer turn= "+player2_name


function send(){
    get_word= document.getElementById("word").value
    word= get_word.toLowerCase()
    console.log("Word in lower case is "+word)

    charat1= word.charAt(1)
     console.log(charat1)
     
    length_divide_2=Math.floor(word.length/2)
    charat2= word.charAt(length_divide_2)
     console.log(charat2)
        
     length_minus_1= word.length
     charat3= word.charAt(length_minus_1)
       console.log(charat3)

       remove_charat1= word.replace(charat1,"_")
       remove_charat2= remove_charat1.replace(charat2,"_")
       remove_charat3= remove_charat3.replace(charat3,"_")
    

}