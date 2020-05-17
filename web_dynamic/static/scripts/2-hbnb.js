$('document').ready(function () {
 
 const url = 'http://127.0.0.1:5001/api/v1/status/';
 $.get(url, function(response,status){
  if(response.status === 'OK'){
    $('DIV#api_status').addClass('available');
    console.log('add');
  }
  else{
    $('DIV#api_status').removeClass('available');
    console.log('remove');
  }

 });
 
 



 ///////////////////////////////////////////////
  const amenityID = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked') === true) {
      // store amenity ID in dict
      amenityID[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      // remove amenity ID from dict
      delete amenityID[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityID).join(', '));
    console.log(amenityID);
  });
});
