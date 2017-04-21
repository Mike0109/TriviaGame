

	var timer = 0;
	function counter(){
		timer++;
		$("#timer").text(timer);
}

setInterval("counter", 1000);

if (timer === 30) {
	alert("Game Over");
}




	var position = 0;
	var test =""; 
	var testStatus ="";
	var question ="";
	var choice ="";
	var choices ="";

	var choiceA ="";
	var choiceB ="";
	var choiceC ="";
	var correct = 0;

	var questions = [
	["Which Lord of the Rings character is in Black Hawk Down?", "Gimli", "Legolas", "Gandalf", "B"],
	["In the movie 'Shrek', Shrek relates himself to what vegetable?", "Eggplant", "Tomato", "Onion", "C"],
	["In the 'Breaking Bad' Walt cooks what?", "Meth", "Lasagna", "Fried Chicken", "A"],
	["'Trailer Park Boys' takes place in which country?", "America", "England", "Canada", "C"]

	];

	function _(x) {
		return document.getElementById(x);
	};

	function renderQuestion() {
		test = _("test");
		_("testStatus").innerHTML = "Question "+ (position+1) + " of " + questions.length;
		question = questions[position][0];
		choiceA = questions[position][1];
		choiceB = questions[position][2];
		choiceC = questions[position][3];

		test.innerHTML = "<h3>"+question+"</h3>";
		test.innerHTML +="<input type = 'radio' name = 'choices' value = 'A'> "+ choiceA + "<br>";
		test.innerHTML +="<input type = 'radio' name = 'choices' value = 'B'> "+ choiceB + "<br>";
		test.innerHTML +="<input type = 'radio' name = 'choices' value = 'C'> "+ choiceC + "<br><br>";
		test.innerHTML +="<button onclick = 'checkAnswer()' >Submit Answer</button>";
	};

	function checkAnswer() {
		choices = document.getElementsByName("choices");
		for (var i = 0; i < choices.length; i++) {
			if (choices[i].checked) {
				choice = choices[i].value;
			}
			
		}
		if (choice === questions[pos][4]) {
			correct++;
		}
		position++;
		renderQuestion();
	}

	window.addEventListener("load", renderQuestion, false);

