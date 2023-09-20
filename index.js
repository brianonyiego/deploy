document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');
  
    list = list.map((item, index) => {
      return parseInt(item);
    });
  
    var operator = document.getElementById('operator').value;
  
    switch (operator) {
      case 'sum':
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        document.getElementById('output').innerHTML = 'Sum: ' + sum;
        break;
  
      case 'average':
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        var average = sum / list.length;
        document.getElementById('output').innerHTML = 'Average: ' + average;
        break;
  
      case 'min':
        var min = Math.min(...list);
        document.getElementById('output').innerHTML = 'Minimum: ' + min;
        break;
  
      case 'max':
        var max = Math.max(...list);
        document.getElementById('output').innerHTML = 'Maximum: ' + max;
        break;
  
      case 'median':
        list.sort(function (a, b) { return a - b });
        var median = 0;
        var length = list.length;
        if (length % 2 === 0) {
          median = (list[length / 2] + list[length / 2 - 1]) / 2;
        } else {
          median = list[Math.floor(length / 2)];
        }
        document.getElementById('output').innerHTML = 'Median: ' + median;
        break;
  
      case 'range':
        var min = Math.min(...list);
        var max = Math.max(...list);
        var range = max - min;
        document.getElementById('output').innerHTML = 'Range: ' + range;
        break;
  
      case 'mode':
        var modeMap = {};
        var maxCount = 0;
        var modes = [];
  
        for (var i = 0; i < list.length; i++) {
          var num = list[i];
          modeMap[num] = (modeMap[num] || 0) + 1;
  
          if (modeMap[num] > maxCount) {
            modes = [num];
            maxCount = modeMap[num];
          } else if (modeMap[num] === maxCount) {
            modes.push(num);
          }
        }
  
        if (modes.length === list.length) {
          document.getElementById('output').innerHTML = 'All numbers have the same frequency';
        } else {
          document.getElementById('output').innerHTML = 'Mode: ' + modes.join(', ');
        }
        break;
  
      default:
        document.getElementById('output').innerHTML = 'Invalid operator';
        break;
    }
  });
  