// ***************************************************************
// Introduction
// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

// *************************************************************

function century(year) {
  // each century is 1-100
  let century = 100;
  let date = year/century;

  if(year <= century) {
  return 1;
  } else if (date > Math.floor(date)){
    return Math.floor(date) +1;
  } else if (year > (date)){
    return date;
  }
}

century(1701);

// function century(year) {
//   // Finish this :)
//   //each 100 equals 1
// let aCentury = 100;
// let time = year/aCentury;
// if(year<= aCentury) {
//   return 1;
// } else if(time > Math.round(time)){
//   return Math.round(time) + 1;
// }else if(year > aCentury) {
//   return Math.round(time);
// }  
 
// }



// century(1705);
// // century(1900);
// //  century(1601);
// // century(2000);
// // century(89);