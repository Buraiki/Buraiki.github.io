//window.alert("Okay");

//Firebase code 
        var SaveQuestion = document.getElementById("Question_Area");
        var SubBtn = document.getElementById("Submit_button");
        var QHeading = document.getElementById("QHeading");
        //buttons for the funcitons
        //data to store
        var Qdata = document.getElementById("InputQ");
        var Adata = document.getElementById("InputAns");
       // var AfterSubmit = document.getElementById("After_submit");

        var PeerQuestion = document.getElementById("PeerQ");
        var Qtext = PeerQuestion.value;

        var Ans = document.getElementById("PeerA");
       
        BackupRef = firebase.database().ref().child("BackupQ").child("BQ");
	firebaseQuestionRef = firebase.database().ref().child("Questions").child("Q1");
        firebaseAnswerRef = firebase.database().ref().child("Answers").child("A1");

       
        //Progress after clicking the submit button
        function clickBtn(){

        if($('input[name=Q1]:checked').val() == "SWidth")
        {
        	window.alert("That is correct!");
        	//make after submit stuff visiable 
          $('#After_submit').css("visibility", "visible");
        }
        else{
		window.alert("Not quite");
        	$('#TestPeerQ').css("visibility", "visible");
        	BackupRef.on('value', function(WhyNot){
          		 Qdata.innerText = WhyNot.val();
          		   	
        })

        }
          
          
          

          firebaseRef = firebase.database().ref();
          firebaseRef.child("boy").set(QText); 


          //writing into a certain field 
          // firebaseHeadingRef.on('value', function(WhyNot){
          // QHeading.innerText = WhyNot.val();
          // })
        }

        function StoreQ(){

        	var AnsText = Ans.value;
          	var QText = PeerQuestion.value;

         	firebaseQuestionRef.push(QText);
          	firebaseAnswerRef.push(AnsText);

        		window.alert("Thank you");
		 }

	function ShowQ()
	{
		$('#Submit_button').css("visibility", "visible");
	}

        function Compare(){

        	window.alert("Check the answer from your peer and compare");
        	firebaseAnswerRef.on('value', function(WhyNot){
          		 Adata.innerText = WhyNot.val(); 
          		 
          		 $('#CompareArea').css("visibility", "visible");
        })

        }



// var Question = document.getElementById("Question_Area");
// var SubmitButton = document.getElementById("Submit_button");
// var textChoice =  document.getElementById("TextChoice1");

// //not yet working to read data
// var firebaseHeadingRef = firebase.database().ref().child("HI");
// firebaseHeadingRef.on('value', function(quick){
// 	textChoice.innerText = quick.val; 
// });

// function SubmitClick(){

// 	var firebaseRef = firebase.database().ref();

// 	var QuestionText = Question.value; 
// 	//push gives a random id to store in firebase
// 	firebaseRef.push().set(QuestionText);
// 		//window.alert("in the function");
// }
