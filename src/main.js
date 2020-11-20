import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange-service.js'; 

$(document).ready(function() {
  $('#exchangeForm').submit(function(event) {
    event.preventDefault();
    Exchange.convertUSD()
      .then(function() {
        let amount = $('#amount').val();
        let usdTo = $("select#convertTo").val();
        console.log(amount);
        console.log(usdTo);
      });
  });
});
