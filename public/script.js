console.log('src');

$(document).ready(docReady);

function docReady() {
  console.log('doc ready');

  $('#calculate').on('click', doMath);
  $('#clear').on('click', clear);
}

function doMath() {
  console.log('in doMath');
  var val1 = $('#val1').val();
  var val2 = $('#val2').val();
  var operator = $('#operator').val();

  if(isNaN(val1) || isNaN(val2)){
    alert('Please only enter numbers!');
  }

  var objToSend = {
    x: val1,
    y: val2,
    type: operator
  }

  console.log('objToSend=', objToSend);

  $.ajax({
    method: 'POST',
    url: '/calc',
    data: objToSend,
    success: function(response) {
      console.log('in success', response);
      displayAnswer(response);
    }
  })
}

function clear() {
  $('#val1').val('');
}

function displayAnswer(respObj) {
  console.log('in displayAnswer, respObj=', respObj);
  $('#answerDiv').text('Answer = ' + respObj.answer);
}
