 
document.querySelector('.firstEl').value = ''
document.querySelector('.secondEl').value = ''
let click = document.querySelector('.click')
let clear1st = document.querySelector('.clear1st')
let clear2st = document.querySelector('.clear2st')


let firstEl = document.querySelector('.firstEl').value 
let secondEl = document.querySelector('.secondEl').value 

function getVal() {

  let firstEl = document.querySelector('.firstEl').value 
  let secondEl = document.querySelector('.secondEl').value 
  

let splitedFirstValue = firstEl.substring(1, firstEl.length-1).split(',')
let splitedSecondValue = secondEl.substring(1, secondEl.length-1).split(',')


let lat1 = splitedFirstValue[0]
let lon1 = splitedFirstValue[1]

let lat2 = splitedSecondValue[0]
let lon2 = splitedSecondValue[1]

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

      alert(getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2).toFixed(1));

    }
    
    function clear1st_func() {
      document.querySelector('.firstEl').value = ''
    }

    function clear2st_func() {
        document.querySelector('.secondEl').value = ''
    }