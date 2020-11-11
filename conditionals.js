$(document).ready(function () {
    var i=0;
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").on("click",countClick);
    $("#ageForm").on("click",checkAge);
    $("#taxForm").on("click",calcSalesTax);
    $("#catForm").on("click",recommendFood);
    $("#cardForm").on("click",drawCard);

	function countClick(event) {
        event.preventDefault();
        i++;
        $('#clickCountOutput').html(i);
        if (i =>10){
            i=0;
        }

        

        

		// Increment a variable that tracks the
		// number of button clicks

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"

		// When the count gets to 10, reset it to 0



	}


    function checkAge(event) {
        event.preventDefault();

        var BirthYear = $("#birthYear").val();
        var age=2020-BirthYear;
        if (age<18){
            $('#birthYearOutput').html("Child");
        }
        else{
            $('#birthYearOutput').html("Adult");
        }
        


        // Get the user's birth year from the text
        // box with ID of "birthYear"

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        event.preventDefault();

        var amount = $("#purchaseAmount").val();
        var state = $('#state').val();
        var wi=.05;
        var il=.08;
        var mn=.075;
        var mi=.055;

        if (state== "WI"){
            var total=amount*wi;
            $('#salesTaxOutput').html(total);
        }
        if (state=="IL"){
            var total=amount*il;
            $('#salesTaxOutput').html(total);
        }
        if (state=="MN"){
            var total=amount*mn;
            $('#salesTaxOutput').html(total);
        }
        if (state=="MI"){
            var total=amount*mi;
            $('#salesTaxOutput').html(total);
        }
        else{
            $('#salesTaxOutput').html("Error");
        }
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"

        // Get the state from the text box with ID "state"

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        var catAge = $("#catAge").val();
        if (catAge<2){
            $('#catAgeOutput').html("Kitten Chow");
        }
        else{
            $('#catAgeOutput').html("Adult Chow");
        }

        // Get the cat's age from the text box with
        // ID of "catAge"

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;
        var cardType;
        var cardNumber;

        if(1==suit) {
            cardType="Clubs";
        }
        
        if(2==suit) {
            cardType="Spades";
        }
        
        if(3==suit) {
            cardType="Hearts";
        }
        
        if(4==suit) {
            cardType="Diamond";
        }
        if (1==faceValue){
            cardNumber="Ace";
        }
        if (2==faceValue){
            cardNumber="Two";
        }
        if (3==faceValue){
            cardNumber="Three";
        }
        if (4==faceValue){
            cardNumber="Four";
        }
        if (5==faceValue){
            cardNumber="Five";
        }
        if (6==faceValue){
            cardNumber="Six";
        }
        if (7==faceValue){
            cardNumber="Seven";
        }
        if (8==faceValue){
            cardNumber="Eight";
        }
        if (9==faceValue){
            cardNumber="Nine";
        }
        if (10==faceValue){
            cardNumber="Ten";
        }
        if (11==faceValue){
            cardNumber="Jack";
        }
        if (12==faceValue){
            cardNumber="Queen";
        }
        if (13==faceValue){
            cardNumber="King";
        }
        description=cardNumber+" of "+cardType;
        $('#drawCardOutput').html(description);
        


        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});