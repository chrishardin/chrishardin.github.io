
  const getProvidedInputFile = (selectedOption) => {
    let file;
  
    if(selectedOption == "Over 8000 US Stocks")
    {
      file = mainInputStocks;
    }
    else if(selectedOption == 2 || selectedOption == 3)
    {
      alert("Not valid atm.")
      return false;
    }
  
    return file
  }
  
  // InputStocks form select submit
  const runInputStocksSubmit = (event) => {
    event.preventDefault();
    var selectedFileOption = getProvidedInputFile(document.forms["inputStocksForm"].inputStocks.value)
    var selectedZackRanks = Array.from(document.getElementsByClassName("ranks")).filter(element => element.checked).map(element => element.value)
    var selectedFields = Array.from(document.getElementsByClassName("outputFields")).filter(element => element.checked).map(element => element.value)

    if(selectedZackRanks.length == 0)
    {
      alert("You must pick at least 1 option from Zacks Ranks!")
      return false;
    }
      
    //console.log("file: ", selectedFileOption)
    console.log("zack ranks: ", selectedZackRanks)
    console.log("fields: ", selectedFields)

    if(selectedFileOption)
    {
      let fileArray = selectedFileOption.split('\n');
      showValue.innerText = `This file has ${fileArray.length} stocks!\n`
    }
  }


  var inputStocksSubmit = document.getElementById('inputStocksSubmit');
  var showValue = document.getElementById("display-value");
  inputStocksSubmit.addEventListener("click", runInputStocksSubmit);
  



//   document.getElementById('inputfile').addEventListener('change', function () {
//     var fr = new FileReader();
//     fr.onload = function () {
//       document.getElementById('output')
//         .textContent = fr.result;
//     }

//     fr.readAsText(this.files[0]);
//   }) 

