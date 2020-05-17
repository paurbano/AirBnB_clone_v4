$('document').ready(function () {
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
    // console.log(amenityID);
  });

  // const url = 'http://0.0.0.0:5001/api/v1/places_search';
  $.ajax({
  url: 'http://127.0.0.1:5001/api/v1/places_search',
  type: 'POST',
  data: JSON.stringify({}),
  dataType: 'json',
  contentType: 'application/json',
  success:  function(data) {
      for (let i = 0; i < data.length; i++) {
      let place = data[i];
      let placeHolder = `
      <article>
      <h2>${place.name}</h2>
      <div class="price_by_night"><p>$ ${place.price_by_night}</p></div>
      <div class="information">
      <div class="max_guest">
      <div class="guest_image">
      </div>
      <p>${place.max_guest}</p>
      </div>
      <div class="number_rooms"><div class="bed_image"></div><p>${place.number_rooms}</p>
      </div>
      <div class="number_bathrooms"><div class="bath_image"></div>
      <p>${place.number_bathrooms}</p>
      </div>
      </div>
      <div class="description"><p>${place.description}</p></div>
      </article>
      `   
      $('section.places').append(placeHolder);
    }
  }
});
});
