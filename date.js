
module.exports = getDate;

function getDate(){
    let today = new Date();
    // var currentday = today.getDay();
  
    let options = {
        weekday: "long",
        month: "long",
        year: "numeric"
    };
      var day = today.toLocaleDateString("en-US", options )
      return day;
}