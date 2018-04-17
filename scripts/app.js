function QuizViewModel() {
    var self = this;
    self.index = ko.observable(0);
    self.quiz = ko.observableArray([
            {
                question: "Inside which HTML element do we put the JavaScript?",
                answers: [{a:"<javascript>"}, {b:"<script>"}, {c:"<js>"}, {d:"<p>"}],
                correctAnswer: "script"
            },
            {
                question: "How can you add a single-line comment in JavaScript?", 
                answers: [{a:"// comments"}, {b:"<!-- comments -->"}, {c:"*comment"}, {d:"*comment*"}],
                correctAnswer: "// comments"
            },
            {
                question: "How do you give a variable a value?", 
                answers: [{a:"var Tim"}, {b:"var named = 'Tim'"}, {c:"var equals Tim"}, {d:"var ='Tim'"}],
                correctAnswer: "var named = 'Tim'"
            },
            {
                question: "JavaScript types can be broken into what two categories",
                answers: [{a:"Evolved types and normal types"}, {b:"Script types and object types"}, {c:"Web types and java types"}, {d:"Primitive types and object types"}],
                correctAnswer: "Primitive types and object types"
            },
            {
                question: "Which of the following is not a JavaScript data type", 
                answers: [{a:"Strings"}, {b:"Booleans"}, {c:"Sections"}, {d:"Numbers"}],
                correctAnswer: "Sections",
            },
            {
                question: "What statements are those that bend that path back upon itself to repeat portions of your code?", 
                answers: [{a:"Repeating"}, {b:"Recurring"}, {c:"Looping"}, {d:"Circle"}],
                correctAnswer: "Looping",
            },
            {
                question: "A mathematical symbol which produces a result based on two values or variables is what?", 
                answers: [{a:"An operator"}, {b:"A syntax"}, {c:"A denominator"}, {d:"A magnifier"}],
                correctAnswer: "An operator",
            },
            {
                question: "What is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times?", 
                answers: [{a:"Invoker"}, {b:"Function"}, {c:"Utility"}, {d:"Link"}],
                correctAnswer: "Function",
            },
            {
                question: "The mechanism by which JavaScript objects inherit features from one another.", 
                answers: [{a:"Archetypes"}, {b:"Prototypes"}, {c:"Booleans"}, {d:"Aides"}],
                correctAnswer: "Prototypes",
            },
            {
                question: "What is an ordered collection of values?", 
                answers: [{a:"An Array"}, {b:"A Collection"}, {c:"A Structure"},{d:"A Set"}],
                correctAnswer: "An Array",
            }
        ]);
        
     
    };


/*     document.querySelector('input[name="answerGroup"]:checked').value;
 */    

/* var AnswerViewModel = {
    correctAnswer: ko.observable(false)
    
    
}; */

/* var userChoices = [];
 
 
  function displayScore() {
    var totalScore = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < userChoices.length; i++) {
      if (userChoices[i] === question[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 question.length + ' right!!!');
    return score;
  } */










    







        
     ko.applyBindings(new QuizViewModel());
    
    