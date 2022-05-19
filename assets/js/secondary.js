
  const getProvidedInputFile = (selectedOption) => {
    let file;
  
    if(selectedOption == "Over 8000 US Stocks")
    {
      file = mainInputStocks;
    }
    else if(selectedOption == 2 || selectedOption == 3)
    {
      alert("Not valid atm.")
    }
  
    return file
  }
  
  // InputStocks form select submit
  const runInputStocksSubmit = (event) => {
    event.preventDefault();
    var selectedOption = document.forms["inputStocksForm"].inputStocks;
    //showValue.innerText = `You have selected: ${selectedOption.value}`;
    let file = getProvidedInputFile(selectedOption.value);
    if(file)
    {
      let fileArray = file.split('\n');
      showValue.innerText = `This file has ${fileArray.length} stocks!\n`
    }
  }
  var inputStocksSubmit = document.getElementById('inputStocksSubmit');
  var showValue = document.getElementById("display-value");
  inputStocksSubmit.addEventListener("click", runInputStocksSubmit);
  
  document.getElementById('inputfile').addEventListener('change', function () {
    var fr = new FileReader();
    fr.onload = function () {
      document.getElementById('output')
        .textContent = fr.result;
    }

    fr.readAsText(this.files[0]);
  }) 