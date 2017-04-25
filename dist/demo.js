//https://uxsolutions.github.io/bootstrap-datepicker

var options = {
  autoclose: true,
  //orientation: 'bottom auto',
  format: 'yyyy.mm.dd',
  todayHighlight: true,
  language: 'ko'
};

//$('#default').datepicker($.extend(options, {}));



$('#harmonyDatepicker1').harmonyDatetimepicker({
  defaultViewDate: { year: 2017, month: 5, day: 25, hour: 3, minute: 0 }
});



$('#harmonyDatepicker2').harmonyDatetimepicker({
  defaultViewDate: { year: 2013, month: 3, day: 2 }
});

$('#harmonyDatepicker3 input').datepicker($.extend({}, options, {}) );

$('#harmonyDatepicker4').datepicker($.extend({}, options, {}) );
