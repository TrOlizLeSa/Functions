import _ from 'lodash';

export default function countWords(sentence) {
  const words = _.words(sentence.toLowerCase());
  const result = {};

  for (const item of words) {
    if (result[item]){
      result[item]+=1;
    }
    else{
      result[item]=1;
    }
    //result[item] = result[item] ?  : 1;
  }

  return result;
}