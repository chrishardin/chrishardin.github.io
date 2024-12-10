function getDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day =`${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`
}

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

    genericSubmitHelper(selectedFileOption, selectedZackRanks, selectedFields)
  }

    // InputStocks form select submit
    const runLocalInputStocksSubmit = (event) => {
      event.preventDefault();
      var selectedFileOption = getProvidedInputFile(document.forms["LI-inputStocksForm"].localInputFile.value)
      var selectedZackRanks = Array.from(document.getElementsByClassName("LI-ranks")).filter(element => element.checked).map(element => element.value)
      var selectedFields = Array.from(document.getElementsByClassName("LI-outputFields")).filter(element => element.checked).map(element => element.value)
  
      genericSubmitHelper(selectedFileOption, selectedZackRanks, selectedFields)
    }


  var providedInputStocksSubmit = document.getElementById('providedInputStocksSubmit');
  var localInputStocksSubmit = document.getElementById('localInputStocksSubmit');
  var showValue = document.getElementById("display-value");
  //providedInputStocksSubmit.addEventListener("click", runProvidedInputStocksSubmit);
  //localInputStocksSubmit.addEventListener("click", runLocalInputStocksSubmit);

