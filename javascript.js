//Slice and Sort and Array 
var preSortedWinningNumbers = winningnumbers.slice(0,5).sort(function(a, b){return a-b});
//Slice Sort Replace Stuff like , for - and Your Imagination 
var sortedWinningNumbers = winningnumbers.slice(0,5).sort(function(a, b){return a-b}).toString().replace(/,/g, '-');
