function addField1 (argument2) {
            
    var myTable2 = document.getElementById("myTable1");
    var currentIndex2 = myTable2.rows.length;
    var cc2 = currentIndex2 ++;
    var currentRow2 = myTable2.insertRow(-1);
    
    var Slbox1 = document.createElement("input");
    Slbox1.setAttribute("name", "Sl" + currentIndex2);
    Slbox1.setAttribute("value", cc2);
    Slbox1.setAttribute("class", "int");

    var Itemsbox1 = document.createElement("input");
    Itemsbox1.setAttribute("name", "Description" + currentIndex2);
    Itemsbox1.setAttribute("class", "int");

    var Amountbox1 = document.createElement("input");
    Amountbox1.setAttribute("name", "Amount" + currentIndex2);
    Amountbox1.setAttribute("class", "int");

    var currentCell1 = currentRow2.insertCell(-1);
    currentCell1.appendChild(Slbox1);

    currentCell1 = currentRow2.insertCell(-1);
    currentCell1.appendChild(Itemsbox1);

    currentCell1 = currentRow2.insertCell(-1);
    currentCell1.appendChild(Amountbox1);

}

function deleteField1 (argument3) {
    
    var myTable3 = document.getElementById("myTable1");
    var currentIndex3 = myTable3.rows.length;
    var currentRow3 = myTable3.deleteRow(-1);

}

    var xValues1 = [];
    var yValues1 = [];
    var barColors1 = [
      "#3366cc",
      "#dc3912",
      "#ff9900",
      "#109618",
      "#990099",
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "purple"
    ];

    function insertpie1(xval1,yval1,j){
    xValues1[j-1] = xval1;
    yValues1[j-1] = yval1;
    }
    function total1(){
    
    var table1 = document.getElementById("myTable1");
    var Rows1 = table1.rows.length;
    var Amntdata1 = "" , sumVal1 = 0;
   
    for (var j = 1; j < Rows1 ; j++) {   
        Amntdata1 = table1.rows[j].cells[2].children[0].value;
        Itemdata1 = table1.rows[j].cells[1].children[0].value;

        sumVal1 = sumVal1 + parseInt(Amntdata1);
        insertpie1(Itemdata1, Amntdata1, j);
    } 
    document.getElementById("ttl1").innerHTML = sumVal1 ;
    
    new Chart("myChart1", {
      type: "doughnut",
      data: {
        labels: xValues1,
        datasets: [{
          backgroundColor: barColors1,
          data: yValues1
        }]
      },
      options: {
        title: { 
          display: true,
          text: "Income"
        }
      }
    });
}

function addField (argument) {
    
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var cc = currentIndex ++;
    var currentRow = myTable.insertRow(-1);
    
    var Slbox = document.createElement("input");
    Slbox.setAttribute("name", "Sl" + currentIndex);
    Slbox.setAttribute("value", cc);
    Slbox.setAttribute("class", "int");

    var Itemsbox = document.createElement("input");
    Itemsbox.setAttribute("name", "Description" + currentIndex);
    Itemsbox.setAttribute("class", "int");

    var Amountbox = document.createElement("input");
    Amountbox.setAttribute("name", "Amount" + currentIndex);
    Amountbox.setAttribute("class", "int");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Slbox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Itemsbox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(Amountbox);

}

function deleteField (argument1) {
    
    var myTable1 = document.getElementById("myTable");
    var currentIndex1 = myTable1.rows.length;
    var currentRow1 = myTable1.deleteRow(-1);

}

    var xValues = [];
    var yValues = [];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "purple",
      "#3366cc",
      "#dc3912",
      "#ff9900",
      "#109618",
      "#990099"
    ];

    function insertpie(xval,yval,i){
    xValues[i-1] = xval;
    yValues[i-1] = yval;
    }
    function total(){
    
    var table = document.getElementById("myTable");
    var Rows = table.rows.length;
    var Amntdata = "" , sumVal = 0;
   
    for (var i = 1; i < Rows ; i++) {   
        Amntdata = table.rows[i].cells[2].children[0].value;
        Itemdata = table.rows[i].cells[1].children[0].value;

        sumVal = sumVal + parseInt(Amntdata);
        insertpie(Itemdata, Amntdata, i);
    } 
        document.getElementById("ttl").innerHTML = sumVal  ;

        var ttlincome = document.getElementById("ttl1").innerHTML;
        var net = ttlincome - sumVal;
        let conclusion;
        if(net === 0){
            conclusion = "Your total income is equal to your total expenses, so it's a break even point."
        }
        else if(net < 0){
            conclusion = "Your total expenses is greater than your total income, so it's a budget deficit."
        }
        else{
            conclusion = "Your total income is greater than your total expenses, so it's a budget surplus."
        }
        document.getElementById("ttlnet").innerHTML = "Net = " + "₹" + net;
        document.getElementById("cnclsn").innerHTML = conclusion;
    
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: { 
          display: true,
          text: "Expenses"
        }
      }
    });
} 