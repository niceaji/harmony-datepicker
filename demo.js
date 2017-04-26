//https://uxsolutions.github.io/bootstrap-datepicker

var options = {
  autoclose: true,
  //orientation: 'bottom auto',
  format: 'yyyy.mm.dd',
  todayHighlight: true,
  language: 'ko'
};


//$('#default').datepicker($.extend(options, {}));


var $dp1 = $('#dp1').datetimepicker({
  defaultViewDate: { year: 2017, month: 5, day: 25, hour: 3, minute: 0 }
});


var $dp2 = $('#dp2').datetimepicker({
  defaultViewDate: { year: 2013, month: 3, day: 2 }
});

var $dp3 = $('#dp3 input').datepicker($.extend({}, options, {
  startDate: new Date()
}));

var $dp4 = $('#dp4').datepicker($.extend({}, options, {

}));
