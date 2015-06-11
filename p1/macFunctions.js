var baseModelIndex = 0;
var totalPrice = 0;

var myMacbookObj = {
  macDisplay: "",
  processor: [0, "", ""],
  hardDrive: [0, "", ""],
  ram: [0, "", ""],
  options: [0,0,0,0,0,0,0,0,0,0,0,0,0]
}

function printDescription() {
  var divToChange = window.top.rightFrame.lowerRightFrame.document.getElementById('description');
  divToChange.innerHTML = "";
  var newText = "";

  newText += myMacbookObj.macDisplay;
  newText += myMacbookObj.processor[2];
  newText += myMacbookObj.hardDrive[2];
  newText += myMacbookObj.ram[2];

  divToChange.innerHTML = divToChange.innerHTML + newText;
}

function updatePrice() {
  var divToChange = window.top.rightFrame.upperRightFrame.document.getElementById('totalPrice');
  divToChange.innerHTML = "";
  divToChange.innerHTML = "Total Price:</br>" + '$' + totalPrice + '.00';
}

function updateProcessor(processorIndex) {

  totalPrice -= myMacbookObj.processor[0];

  switch(processorIndex) {
    case 0:
      myMacbookObj.processor = [0, "#p27i5", "2.7GHz Dual-core Intel Core i5<br>(Turbo Boost up to 3.1GHz)<br>"];
      break;
    case 1:
      myMacbookObj.processor = [100, "#p29i5", "2.9GHz Dual-core Intel Core i5<br>(Turbo Boost up to 3.3GHz)<br>"];
      break;
    case 2:
      myMacbookObj.processor = [300, "#p31i7", "3.1GHz Dual-core Intel Core i7<br>(Turbo Boost up to 3.4GHz)<br>"];
      break;
    case 3:
      myMacbookObj.processor = [0, "#p22i7", "2.2GHz Quad-core Intel Core i7<br>(Turbo Boost up to 3.4GHz)<br>"];
      break;
    case 4:
      myMacbookObj.processor = [100, "#p25i7", "2.5GHz Quad-core Intel Core i7<br>(Turbo Boost up to 3.7GHz)<br>"];
      break;
    case 5:
      myMacbookObj.processor = [300, "#p28i7", "2.8GHz Quad-core Intel Core i7<br>(Turbo Boost up to 4.0GHz)<br>"];
      break;
  }

  totalPrice += myMacbookObj.processor[0];
  updatePrice();
  printDescription();

}

function updateHardDrive(hardDriveIndex) {

  totalPrice -= myMacbookObj.hardDrive[0];

  switch(hardDriveIndex) {
    case 0:
      myMacbookObj.hardDrive = [0, "#128GBssd", "128GB Solid State Drive<br>"];
      break;
    case 1:
      myMacbookObj.hardDrive = [200, "#256GBssd", "256GB Solid State Drive<br>"];
      break;
    case 2:
      myMacbookObj.hardDrive = [500, "#512GBssd", "512GB Solid State Drive<br>"];
      break;
    case 3:
      myMacbookObj.hardDrive = [1000, "#1TBssd", "1TB Solid State Drive<br>"];
      break;
    default:
      alert("Hard Drive switch statement failed.")
  }

  totalPrice += myMacbookObj.hardDrive[0];
  updatePrice();
  printDescription();
}

function updateRam(ramIndex) {

  totalPrice -= myMacbookObj.ram[0];

  switch(ramIndex) {
    case 0:
      myMacbookObj.ram = [0, "#8GB1866", "8GB 1866MHz LPDDR3 SDRAM<br>"];
      break;
    case 1:
      myMacbookObj.ram = [200, "#16GB1866", "16GB 1866MHz LPDDR3 SDRAM<br>"];
      break;
    case 2:
      myMacbookObj.ram = [0, "#16GB1600", "16GB 1600MHz DDR3L SDRAM<br>"];
      break;
    default:
      alert("RAM switch statement failed.");
  }

  totalPrice += myMacbookObj.ram[0];
  updatePrice();
  printDescription();
}

function buildBaseModel(baseModelIndex) {
  switch(baseModelIndex) {
    case 0:
      myMacbookObj.macDisplay = "13-inch Retina Display<br>";
      updateProcessor(0);
      updateHardDrive(0);
      updateRam(0);
      myMacbookObj.options = [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0];
      showOptions();
      totalPrice = 1299;
      window.top.leftFrame.document.getElementById('p27i5ID').checked=true;
      window.top.leftFrame.document.getElementById('128GBssdID').checked=true;
      window.top.leftFrame.document.getElementById('8GB1866ID').checked=true;
      break;
    case 1:
      myMacbookObj.macDisplay = "13-inch Retina Display<br>";
      updateProcessor(0);
      updateHardDrive(1);
      updateRam(0);
      myMacbookObj.options = [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0];
      showOptions();
      totalPrice = 1499;
      window.top.leftFrame.document.getElementById('p27i5ID').checked=true;
      window.top.leftFrame.document.getElementById('256GBssdID').checked=true;
      window.top.leftFrame.document.getElementById('8GB1866ID').checked=true;
      break;
    case 2:
      myMacbookObj.macDisplay = "13-inch Retina Display<br>";
      updateProcessor(1);
      updateHardDrive(2);
      updateRam(0);
      myMacbookObj.options = [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0];
      showOptions();
      totalPrice = 1799;
      window.top.leftFrame.document.getElementById('p29i5ID').checked=true;
      window.top.leftFrame.document.getElementById('512GBssdID').checked=true;
      window.top.leftFrame.document.getElementById('8GB1866ID').checked=true;
      break;
    case 3:
      myMacbookObj.macDisplay = "15-inch Retina Display<br>";
      updateProcessor(3);
      updateHardDrive(1);
      updateRam(2);
      myMacbookObj.options = [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1];
      showOptions();
      totalPrice = 1999;
      window.top.leftFrame.document.getElementById('p22i7ID').checked=true;
      window.top.leftFrame.document.getElementById('256GBssdID').checked=true;
      window.top.leftFrame.document.getElementById('16GB1600ID').checked=true;
      break;
    case 4:
      myMacbookObj.macDisplay = "15-inch Retina Display<br>";
      updateProcessor(4);
      updateHardDrive(2);
      updateRam(2);
      myMacbookObj.options = [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1];
      showOptions();
      totalPrice = 2499;
      window.top.leftFrame.document.getElementById('p25i7ID').checked=true;
      window.top.leftFrame.document.getElementById('512GBssdID').checked=true;
      window.top.leftFrame.document.getElementById('16GB1600ID').checked=true;
      break;
    default:
      alert("Base model switch statement failed.");
  }

  updatePrice();
  printDescription();
}


function showOptions() {
  window.top.hideProcessors();
  window.top.hideHDs();
  window.top.hideRam();
  window.top.leftFrame.$("#processor").show();
  window.top.leftFrame.$("#hardDrive").show();
  window.top.leftFrame.$("#ram").show()

  if (myMacbookObj.options[0] == 1) {
    window.top.leftFrame.$("#p27i5").show();
  }
  if (myMacbookObj.options[1] == 1) {
    window.top.leftFrame.$("#p29i5").show();
  }
  if (myMacbookObj.options[2] == 1) {
    window.top.leftFrame.$("#p31i7").show();
  }
  if (myMacbookObj.options[3] == 1) {
    window.top.leftFrame.$("#p22i7").show();
  }
  if (myMacbookObj.options[4] == 1) {
    window.top.leftFrame.$("#p25i7").show();
  }
  if (myMacbookObj.options[5] == 1) {
    window.top.leftFrame.$("#p28i7").show();
  }
  if (myMacbookObj.options[6] == 1) {
    window.top.leftFrame.$("#128GBssd").show();
  }
  if (myMacbookObj.options[7] == 1) {
    window.top.leftFrame.$("#256GBssd").show();
  }
  if (myMacbookObj.options[8] == 1) {
    window.top.leftFrame.$("#512GBssd").show();
  }
  if (myMacbookObj.options[9] == 1) {
    window.top.leftFrame.$("#1TBssd").show();
  }
  if (myMacbookObj.options[10] == 1) {
    window.top.leftFrame.$("#8GB1866").show();
  }
  if (myMacbookObj.options[11] == 1) {
    window.top.leftFrame.$("#16GB1866").show();
  }
  if (myMacbookObj.options[12] == 1) {
    window.top.leftFrame.$("#16GB1600").show();
  }
}

function hideProcessors() {
  window.top.leftFrame.$("#p25i5").hide();
  window.top.leftFrame.$("#p27i5").hide();
  window.top.leftFrame.$("#p29i5").hide();
  window.top.leftFrame.$("#p29i7").hide();
  window.top.leftFrame.$("#p31i7").hide();
  window.top.leftFrame.$("#p22i7").hide();
  window.top.leftFrame.$("#p25i7").hide();
  window.top.leftFrame.$("#p28i7").hide();
  window.top.leftFrame.$("#processor").hide();
}

function hideHDs() {
  window.top.leftFrame.$("#128GBssd").hide();
  window.top.leftFrame.$("#256GBssd").hide();
  window.top.leftFrame.$("#512GBssd").hide();
  window.top.leftFrame.$("#1TBssd").hide();
  window.top.leftFrame.$("#hardDrive").hide();
}

function hideRam() {
  window.top.leftFrame.$("#8GB1600").hide();
  window.top.leftFrame.$("#8GB1866").hide();
  window.top.leftFrame.$("#16GB1866").hide();
  window.top.leftFrame.$("#16GB1600").hide();
  window.top.leftFrame.$("#ram").hide();
}
