
angular.module('trumpController', [])
	.controller('questionController', ['$scope','$http', function($scope, $http) {
        var _ = require('lodash');

        $scope.showQuestions = true;
        $scope.nextMessage = "Next Question";        
        $scope.choicesDisabled = false;
        $scope.showAnswer = false;
        questions = [
            {
                "q": "Am I dumb?",
                "a1": "YEPP",
                "a2": "DEF" 
            }, {

                "q": "Do I have nice hands?",
                "a1": "NOPE",
                "a2": "DEF NOPE"
            }, {

                "q": "Do I have bad taste?",
                "a1": "uhhuh",
                "a2": "sure"
            } 
        ];
		
        // get a random question from the question array
        $scope.question = questions[Math.floor((Math.random() * questions.length))];

		$scope.answer = function(choice) {
            // delete the answered question from the array
            questions = _.remove(questions, function (currentQuestion) {
                return currentQuestion.q.localeCompare($scope.question.q);
            });

            // make the options unclickable
            $scope.choicesDisabled = true;

            // show them the correct answer
            $scope.showAnswer = true;

            // if at the end
            if(questions.length == 0) {
                // see the results
                $scope.nextMessage = "See Results!";
            }
		};

        $scope.nextQuestion = function () {
            // check to see if there at the end
            if(questions.length == 0) {
                // hide the question div
                $scope.showQuestions = false;
            } else {
                // need to remove the answer
                $scope.showAnswer = false;

                // make the buttons clickable
                $scope.choicesDisabled = false;

                // get the next question from the array
                $scope.question = questions[Math.floor((Math.random() * questions.length))];
            }
        }
	}])
