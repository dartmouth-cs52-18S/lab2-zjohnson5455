$('#submitButton').on('click', function(e) {
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  console.log(choices.length);
  if (choices.length < 5) {
    errorModal.style.display = "block";
    return;
  }
  // now you have an choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  // you'll need to do some calculations with this
  var maximum = calculate(choices);
  if (maximum == 0) { //the integers are the values from the input html tags
    modal1.style.display = "block";
  }
  else if (maximum == 1) {
    modal2.style.display = "block";
  }
  else if (maximum == 2) {
    modal3.style.display = "block";
  }
  else if (maximum == 3) {
    modal4.style.display = "block";
  }
  else {
    errorModal.style.display = "block";
  }
  // a naive approach would be to just choose the most common option - seems reasonable
});

//https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
function maxIndex(countArray) {
  if (countArray.length === 0) {
       return -1;
   }

   var max = countArray[0];
   var maxIndex = 0;

   for (var i = 1; i < countArray.length; i++) {
       if (countArray[i] > max) {
           maxIndex = i;
           max = countArray[i];
       }
   }

   return maxIndex;
}

function calculate(answerArray) {
  console.log("answer array: " + answerArray);
  var counts = [0, 0, 0, 0]; //generate an array of frequencies
  for (answer in answerArray) {
    console.log("answer: " + answerArray[answer])
    if (answerArray[answer] == "0") {
      counts[0] += 1;
    }
    else if (answerArray[answer] == "1") {
      counts[1] += 1;
    }
    else if (answerArray[answer] == "2") {
      counts[2] += 1;
    }
    else if (answerArray[answer] == "3"){
      counts[3] += 1;
    }
    else {
      console.log("You're dumb Zack. There was an error.");
    }
  }
  console.log("counts: " + counts);
  var maxIndexy = maxIndex(counts);
  return maxIndexy;
}

// Modal code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// Get the modal
var modal1 = document.getElementById('Modal1');
var modal2 = document.getElementById('Modal2');
var errorModal = document.getElementById('ErrorModal');
var modal3 = document.getElementById('Modal3');
var modal4 = document.getElementById('Modal4');

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var errorSpan = document.getElementById("errorClose");

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}

errorSpan.onclick = function() {
    errorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
}
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_change_ref
//http://jsfiddle.net/U2AAQ/
//https://stackoverflow.com/questions/3376412/jquery-add-remove-css-class-on-selected-radio
$("input").change(function(){

  $(':radio[name=' + this.name + ']').parent().parent().removeClass('selected');
  $(':radio[name=' + this.name + ']').parent().parent().addClass('notSelected');
  $(this).parent().parent().removeClass('notSelected');
  $(this).parent().parent().addClass('selected');
});
