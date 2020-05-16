$('document').ready(function () {
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
