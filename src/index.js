(function ($) {

  $.fn.datetimepicker = function (opt) {


    var wrap = this;
    var $ymd = this.find('.ymd');
    var $hour = this.find('.hour');
    var $minute = this.find('.minute');

    var $hourList = $hour.find('.list_opt');
    var $minuteList = $minute.find('.list_opt');

    var $ymdText = $ymd.find('.num_g');
    var $hourText = $hour.find('.num_g');
    var $minuteText = $minute.find('.num_g');


    if (typeof opt === 'string') {
      var result = null;
      if (opt === 'getDate') {
        result =  getDatetime();
      }
      else {
        result = $ymdText.datepicker(opt);
      }
      return result;
    }


    var $dp = null;
    var useTimepicker = $hour.length > 0 && $minute.length > 0;

    var options = $.extend({
      autoclose: true,
      format: 'yyyy.mm.dd.',
      todayHighlight: true,
      orientation: 'bottom auto',
      language: 'ko'
    }, opt);

    var list = {
      hour: '<li><a class="link_option" data-value="0">0시</a></li>\
      <li><a class="link_option" data-value="1">1시</a></li>\
    <li><a class="link_option" data-value="2">2시</a></li>\
    <li><a class="link_option" data-value="3">3시</a></li>\
    <li><a class="link_option" data-value="4">4시</a></li>\
    <li><a class="link_option" data-value="5">5시</a></li>\
    <li><a class="link_option" data-value="6">6시</a></li>\
    <li><a class="link_option" data-value="7">7시</a></li>\
    <li><a class="link_option" data-value="8">8시</a></li>\
    <li><a class="link_option" data-value="9">9시</a></li>\
    <li><a class="link_option" data-value="10">10시</a></li>\
    <li><a class="link_option" data-value="11">11시</a></li>\
    <li><a class="link_option" data-value="12">12시</a></li>\
    <li><a class="link_option" data-value="13">13시</a></li>\
    <li><a class="link_option" data-value="14">14시</a></li>\
    <li><a class="link_option" data-value="15">15시</a></li>\
    <li><a class="link_option" data-value="16">16시</a></li>\
    <li><a class="link_option" data-value="17">17시</a></li>\
    <li><a class="link_option" data-value="18">18시</a></li>\
    <li><a class="link_option" data-value="19">19시</a></li>\
    <li><a class="link_option" data-value="20">20시</a></li>\
    <li><a class="link_option" data-value="21">21시</a></li>\
    <li><a class="link_option" data-value="22">22시</a></li>\
    <li><a class="link_option" data-value="23">23시</a></li>',

      minute: '<li><a class="link_option" data-value="0">0분</a></li>\
    <li><a class="link_option" data-value="10">10분</a></li>\
    <li><a class="link_option" data-value="20">20분</a></li>\
    <li><a class="link_option" data-value="30">30분</a></li>\
    <li><a class="link_option" data-value="40">40분</a></li>\
    <li><a class="link_option" data-value="50">50분</a></li>'
    };


    function getDatetime() {
      var result = $ymdText.datepicker('getDate');
      result.setHours(getHour());
      result.setMinutes(getMinute());
      return result;
    }

    function resetLayer() {
      $hour.removeClass('on');
      $minute.removeClass('on');
    }

    function showHourLayer(event) {
      resetLayer();
      $hour.addClass('on');
      return false;
    }

    function showMinuteLayer(event) {
      resetLayer();
      $minute.addClass('on');
      return false;
    }

    function selectedHour(event) {
      var $target = $(event.target);
      var value = $target.data('value');
      setHour(value);
      changeTrigger();
    }

    function selectedMinute(event) {
      var $target = $(event.target);
      var value = $target.data('value');
      setMinute(value);
      changeTrigger();
    }

    function changeTrigger() {
      wrap.trigger('changeTime', [getDatetime()]);
    }


    function setYmd(year, month, day) {
      month++;
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      var ymd = year + '.' + month + '.' + day;
      $ymdText.val(ymd + '.');
      $dp.datepicker('update', ymd);
    }

    function setHour(hour) {
      if (!hour) {
        hour = '0';
      }
      $hourText.val(hour + '시');
    }

    function setMinute(minute) {
      if (!minute) {
        minute = '0';
      }
      $minuteText.val(minute + '분');
    }

    //function getYmd() {
    //  return this.datepicker.DPGlobal.formatDate(new Date(), 'yyyy.mm.dd.', 'ko');
    //}
    function getHour() {
      return parseInt($hourText.val(), 10);
    }

    function getMinute() {
      return parseInt($minuteText.val(), 10);
    }

    function addEvent() {

      $dp = $ymdText
        .datepicker(options)
        .on('changeDate', function (event) {
          $ymdText.html(event.format());
          changeTrigger();
        })
        .on('show', function (event) {

          $hour.removeClass('on');
          $minute.removeClass('on');

        });

      if (useTimepicker) {

        $hourText.on('click', showHourLayer);
        $minuteText.on('click', showMinuteLayer);

        $hourList.on('click', 'a', selectedHour);
        $minuteList.on('click', 'a', selectedMinute);

        $(document.body).click(resetLayer);
      }
    }

    function insertList() {
      $hourList.html(list.hour);
      $minuteList.html(list.minute);
    }

    function setDefaultText() {
      var date = options.defaultViewDate;
      if (date) {
        setYmd(date.year, date.month, date.day);
        if (useTimepicker) {
          setHour(date.hour);
          setMinute(date.minute);
        }
      }
    }

    function init() {
      useTimepicker && insertList();
      addEvent();
      setDefaultText();
    }


    init();

    return this;
  }
})(jQuery);
