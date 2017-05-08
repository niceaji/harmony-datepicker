//https://uxsolutions.github.io/bootstrap-datepicker

var options = {
  //기본옵션
  //autoclose: true,
  //format: 'yyyy.mm.dd.',
  //todayHighlight: true,
  //language: 'ko'
};


//$('#default').datepicker($.extend(options, {}));


var $dp1 = $('#dp1').datetimepicker({
  defaultViewDate: {year: 2017, month: 5, day: 25, hour: 3, minute: 10}
})
$('#dp1 button').click(function () {
  console.log($dp1.datetimepicker('getDate'));
});


//
var $dp2 = $('#dp2 input').datepicker($.extend({}, options, {

}));

$('#dp2 button').click(function () {
  console.log($dp2.datepicker('getDate'));
});



//

var $dp3 = $('#dp3 input').datepicker($.extend({}, options, {
  startDate: new Date()
}));

$('#dp3 button').click(function () {

  console.log($dp3.datepicker('getDate'));
});

//

var $dp4 = $('#dp4').datepicker($.extend({}, options, {}))
  .on('changeDate', function(event){
    console.log(event.date)
  })


$('#dp4 button').click(function () {
  console.log($('#dp4 .start').datepicker('getDate'), $('#dp4 .end').datepicker('getDate'));
});