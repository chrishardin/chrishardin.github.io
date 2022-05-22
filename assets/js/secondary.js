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
  
const genericSubmitHelper = (selectedFileOption, selectedZackRanks, selectedFields) => {
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

  const OUTPUTFILE = 'stocksOutput_' + getDateString() + '.csv';
  var netIncomeFields = ['Net Income 4 Years Ago', 'Net Income 3 Years Ago', 'Net Income 2 Years Ago', 'Net Income 1 Years Ago', 'Net Income Most Recent']
  console.log('before: ' , selectedFields.join(','))

  var index = selectedFields.indexOf('Last4Years')
  if(index !== -1)
  {
    var temp = selectedFields.splice(index);
    var temp2 = selectedFields.concat(netIncomeFields)
    temp.shift()
    selectedFields = temp2.concat(temp)

    runProgram(selectedFileOption, OUTPUTFILE, selectedFields)
  }

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

    function getDateString() {
      const date = new Date();
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day =`${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`
    }


    runProgram = async (inputFile, outputFile, headers) => {

      console.log('Now running Money Duplication Glitch 4000.')

     // this.outputStockData is for post run data if needed
     // when enabled, remove comment from saveStrongBuyDataToFile(~159)::callback()
     //this.inputStocks(inputFile, allInputStocks => this.saveStrongBuyDataToFile(outputFile, allInputStocks, headers, headers2, /*strongBuyStocks => this.outputStockData(outputFile, strongBuyStocks) */) );
 }

  var providedInputStocksSubmit = document.getElementById('providedInputStocksSubmit');
  var localInputStocksSubmit = document.getElementById('localInputStocksSubmit');
  var showValue = document.getElementById("display-value");
  providedInputStocksSubmit.addEventListener("click", runProvidedInputStocksSubmit);
  localInputStocksSubmit.addEventListener("click", runLocalInputStocksSubmit);





