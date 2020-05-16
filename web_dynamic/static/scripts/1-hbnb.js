$('document').ready(function() {
  let amenityID = {}
  $('input[type="checkbox"]').click(function() {
    
    if ($(this).prop('checked') == true)
    {
      // store amenity ID in dict
      amenityID[$(this).data.name] = $(this).data.id;
    }
    else
    {
      // remove amenity ID from dict
      delete amenityID[$(this).data.name]
    }    
  });
  $('.amenities h4').text(Object.values(amenityID).join(', '));
});