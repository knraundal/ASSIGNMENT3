var menudata = [];

$(document).ready(function () {
  
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) {
    menudata = data.menu_items;
    menudata.forEach((item, index) => {
      $("#menudrop").append(`<option value=${index}>${item.name}</option>`);
    })
  });

 
  $("#menudrop").change((ele) => {
    const selected = menudata[ele.target.value];
    $('#dataholder').html(
      `<p>1. MenuID - ${selected.id} </p>
      <p>2. Short Name - ${selected.short_name} </p>
      <p>3. Name - ${selected.name} </p>
      <p>4. Description - ${selected.description} </p>
      <p>5. Price small - ${selected.price_small} </p>
      <p>6. Price Large - ${selected.price_large} </p>
      <p>7. Small Portion Name - ${selected.small_portion_name} </p>
      <p>8. Large Portion Name - ${selected.large_portion_name} </p>
      `
    )
  })
}); 