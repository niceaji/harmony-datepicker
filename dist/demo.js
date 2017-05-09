//https://uxsolutions.github.io/bootstrap-datepicker

var options = {
  //기본옵션
  //autoclose: true,
  //format: 'yyyy.mm.dd.',
  //todayHighlight: true,
  //language: 'ko'
};




var $dp1 = $('#dp1').datetimepicker({
  initDate: new Date()
}).on('changeTime', function (event, selectedDate) {

  console.log( selectedDate)
});

$('#dp1 button').click(function () {
  console.log($dp1.datetimepicker('getDate'));
});


//
var $dp2 = $('#dp2 input').datepicker({ })
  .on('changeDate', function (event) {
    console.log(event.format() , event.date)
  });

$('#dp2 button').click(function () {
  console.log($dp2.datepicker('getDate'));
});



//

var $dp3 = $('#dp3 input').datepicker( {
  startDate: new Date()
}).on('changeDate', function (event) {
  console.log(event.format() , event.date)
});

$('#dp3 button').click(function () {
  console.log($dp3.datepicker('getDate'));
});

//

var $dp4 = $('#dp4').datepicker({})
  .on('changeDate', function(event){
    console.log(event.date)
  })


$('#dp4 button').click(function () {
  console.log($('#dp4 .start').datepicker('getDate'), $('#dp4 .end').datepicker('getDate'));
});