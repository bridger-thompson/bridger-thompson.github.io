const MathApp = {
    data() {
      return {
        counter: 0,
        show: false,
        numberRight: 0,
        total: 0,
        currentLhs: 0,
        currentRhs: 0,
        enteredAnswer: null,
        operator: '',
        showGoodJob: false
      }
    },
    computed:{
        correctAnswer(){
            if (this.operator == '+') {
                return this.currentLhs + this.currentRhs;
            }
            else if (this.operator == '-') {
                return this.currentLhs - this.currentRhs;
            }
            else if (this.operator == '*') {
                return this.currentLhs * this.currentRhs;
            }
            else {
                return this.currentLhs / this.currentRhs;
            }
        },
        isCorrect(){
            return this.correctAnswer == this.enteredAnswer;
        },
        percentageCorrect(){
            return Math.floor((this.numberRight / this.total)* 100);
        },
    },
    methods: {
        randomOperator(){
            let operators = ['+', '-', '*', '/'];
            let index = Math.floor(Math.random() * 3);
            this.operator = operators[index];
        },
        randomizeSides(){
            this.currentLhs = Math.floor(Math.random() * 100);
            this.currentRhs = Math.floor(Math.random() * 100);
            this.randomOperator();
        },
        submitAnswer()
        {
            if (this.isCorrect)
            {
                this.numberRight++;
                this.total++;
                this.showGoodJob = true;
            }
            else
            {
                this.total++;
                this.showGoodJob = false;
            }
            this.randomizeSides();
            this.enteredAnswer = null;
        }
    },
    mounted() {
        this.randomizeSides();
    }

  }
  
Vue.createApp(MathApp).mount('#main')
  

//Sidebar
var open = false;
function openNav() {
  if (!open){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector("header").style.marginLeft = "250px";
    open = true;
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector("header").style.marginLeft = "0";
    open = false;
  }
}