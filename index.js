//------------------graph 1-----------------
//labels
let labelsData = document.querySelectorAll("#table1 tbody tr")[0];
let labelsDataTableOne = [];
Array.from(labelsData.children).forEach(function (content) {
  if (content.innerText.length > 0) {
    labelsDataTableOne.push(parseInt(content.innerText));
  }
});
//get random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//data sets table one
let DataSetsTableOne = [];
let dataSet = Array.from(document.querySelectorAll("#table1 tbody tr"));
dataSet.shift();
dataSet.forEach(function (datas) {
  let obj = {};
  let arrData = [];
  data = Array.from(datas.children);
  data.shift()
  data.shift()
  data.forEach(function (y) {
    arrData.push(parseInt(y.innerText))
  })
  obj.data = arrData
  obj.label = datas.children[1].innerText

  //obj.borderColor = getRandomColor

  obj.fill = false

  //country1
  var para = document.createElement("option");
  var node = document.createTextNode(obj.label);
  para.appendChild(node);

  var element = document.getElementById("countries");
  element.appendChild(para);
  //options
  let choose1 = document.getElementById("countries").value;


  DataSetsTableOne.push(obj)

});


/*
let colorss = [];
 for (let i = 0; i < 37; i++) {
  
  colorss[i] = getRandomColor();

 }
 let colorsString = colorss.join("','");
*/

let colors = ['#F7A84F', '#B62D7B', '#1D985B', '#33D946', '#AE93DF', '#9CD846', '#00AC90', '#2BE66B', '#DD66F7', '#358BB6', '#E70CE1', '#C4B5CE', '#160D26', '#BAE03C', '#D9522B', '#6B1A3F', '#24582B', '#151406', '#D069E5', '#CCCF8D', '#9B55D9', '#FB30DB', '#41EDEE', '#90AF69', '#C5A421', '#397476', '#AF9716', '#EC79E9', '#228239', '#FA9FEE', '#82F86E', '#2813C1', '#C5849F', '#B396E9', '#54BC52', '#0A1133', '#96CE37'];
for (let i = 0; i < DataSetsTableOne.length; i++) {
  DataSetsTableOne[i].borderColor = colors[i];
}


//chart
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: labelsDataTableOne,
    datasets: DataSetsTableOne
  },
  options: {
    title: {
      display: true,
      text: 'Offences recorded by the police, 2002-12'
    }

  }
});

//------------------graph 2-----------------
let periode1 = document.querySelectorAll("#table2 thead tr th")[2].innerText;
let periode2 = document.querySelectorAll("#table2 thead tr th")[3].innerText;
//..........countries labels data...........
let dataGraph2 = Array.from(document.querySelectorAll("#table2 tbody tr"));
let countriesLabels = [];
let periode1Data = [];
let periode2Data = [];
dataGraph2.forEach(function (z) {
  countriesLabels.push(z.children[1].innerText)
  periode1Data.push(parseInt(z.children[2].innerText))
  periode2Data.push(parseInt(z.children[3].innerText))
});


new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: countriesLabels,
    datasets: [
      {
        label: periode1,
        backgroundColor: "#3e95cd",
        data: periode1Data
      }, {
        label: periode2,
        backgroundColor: "#8e5ea2",
        data: periode2Data
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)'
    }
  }
});

// ..............graph3 using fetch..............
document.getElementById("firstHeading").insertAdjacentHTML("afterend",'<canvas id="line-chart-4"></canvas>');
function live() {
let dataLabelx = [];
let dataLabely = [];

  fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart="+Math.floor(Math.random()*10)+"&length=20&type=json")
    .then(response => response.json())
    .then(data => {

      data.forEach(function (parameter) {
        dataLabelx.push(parseInt(parameter[0]));
        dataLabely.push(parseInt(parameter[1]));
      });

      // chart construction
      new Chart(document.getElementById("line-chart-4"), {
        type: 'line',
        data: {
          labels: dataLabelx,
          datasets: [{
            data: dataLabely,
            label: "x,y",
            borderColor: "#556B2F",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'some coordinates'
          }
        }
      });
      //chart finish
     
    });
    
}

setInterval(live,1000);






