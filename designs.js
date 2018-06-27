// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  // Your code goes here!
  $("#sizePicker").submit(function(event){
    event.preventDefault();
    $(".button").prop('value','RESET'); //add attribute to the button
    $(".button").addClass("reset"); //add reset class to button
    resetPage();
    //creating the grid
    let tableRow = $("#inputHeight").val();
    let tableCol = $("#inputWeight").val();

    if(tableRow >= 30 && tableCol >= 50){
      let table = ""
      for(let m = 0; m <= tableRow; m++){
      table += '<tr>';
        for(let n = 0; n <= tableCol; n++ ){
        table += '<td class="cell"></td>';
        }

      table += "</tr>";

      }

      $("#pixelCanvas").append(table);

    }else { //if the numbers inputted are small
      $("#pixelCanvas").after("<div class='noway'><h2>Low input</h2><p>inputted number for row is low " +
      "or/and inputted number for column is low. minimum number to enter is 30 and 50 for row and column respectively, thanks.<br /><button class='reset'>RESET</button> </p><h3>number you entered are:</h3> <p> Row: " + tableRow +
      '<br /> Column: ' + tableCol +
      "</p></div>");
      resetPage()
    }
    addColor(event);
  });

}

//add color
function addColor(){
  $(".cell").click(function(event) {
    let color = $("#colorPicker").val();
    $(event.currentTarget).css("background-color", color);
  });
}

//reset page
function resetPage(){
  $(".reset").click(function(){
    document.location.reload(true);
    return false;
  });
}
//invocation
makeGrid();
