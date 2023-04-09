
    // BEGIN
function seq(begin, end) {
  if (begin > end){
    return NaN;
  }
  else{
      if (begin === end){
        return begin;
      }   
      else{
        return begin + seq(begin + 1, end);
      }
  }
}
    // END
  
export default seq;
  