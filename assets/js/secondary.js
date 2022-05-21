
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
  const runProvidedInputStocksSubmit = (event) => {
    event.preventDefault();
    var selectedFileOption = getProvidedInputFile(document.forms["PI-inputStocksForm"].inputStocks.value)
    var selectedZackRanks = Array.from(document.getElementsByClassName("PI-ranks")).filter(element => element.checked).map(element => element.value)
    var selectedFields = Array.from(document.getElementsByClassName("PI-outputFields")).filter(element => element.checked).map(element => element.value)

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

    // InputStocks form select submit
    const runLocalInputStocksSubmit = (event) => {
      event.preventDefault();
      var selectedFileOption = getProvidedInputFile(document.forms["LI-inputStocksForm"].localInputFile.value)
      var selectedZackRanks = Array.from(document.getElementsByClassName("LI-ranks")).filter(element => element.checked).map(element => element.value)
      var selectedFields = Array.from(document.getElementsByClassName("LI-outputFields")).filter(element => element.checked).map(element => element.value)
  
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

  var providedInputStocksSubmit = document.getElementById('providedInputStocksSubmit');
  var localInputStocksSubmit = document.getElementById('localInputStocksSubmit');
  var showValue = document.getElementById("display-value");
  providedInputStocksSubmit.addEventListener("click", runProvidedInputStocksSubmit);
  localInputStocksSubmit.addEventListener("click", runLocalInputStocksSubmit);





