/* 
    A UN ARBOL BINARIO, AL DARLE LA VUELTA ES EL MISMO DE IZQ A DERECHA.
    LO SOLUCIONE RECORRIENDO POR NIVELES Y COMPARANDO LA IGUALDAD ENTRE HIJO DERECHO E IZQ ACERCANDOLO POR CONTADOR DE 1
*/
function binaryLength(length, acc){
    if(length === acc)
      return true;
    else if(length < acc)
      return false;
    return binaryLength(length, acc*2 + 1);
  }
  
  function SymmetricTree(strArr) { 
  
    if(strArr.length <= 2)
      return "false";
    if(strArr.length % 2 === 0)
      return "false";
    if(!binaryLength(strArr.length, 1))
     return "false";
    
    const levels = ((strArr.length-1)/2);
    for(let level = levels; level > 0; level = level - 1){
      let right = (2^levels - 1) - 1;
      let left = right / 2;
      
      while(right > left){
        if(strArr[right] !== strArr[left])
          return "false";
        right = right - 1;
        left = left + 1;
      }
        
    }  
    // code goes here  
    return "true"; 
  }


const isSymmetric = function(root) {
    if(root == null)
        return true;
    if(root.length %2 == 0)
        return false;
    if(root.length == 1)
        return true;
    function isMirror(root, left, right){
        if(root[left] === null && root[right] === null)
            return true;
        if(root[left] === undefined && root[right] === undefined)
            return true;        
        if(root[left] !== root[right])
            return false;
        return isMirror(root, 2*left + 1, 2*right + 2) && isMirror(root, 2*left + 2, 2*right + 1);
    }        

    return isMirror(root, 1, 2)
};

console.log( isSymmetric([1,2,2,3,4,4,3]) )
console.log( isSymmetric([1,2,2,null,3,null,3]) );

console.log(isSymmetric([2,99,99,0,null,null,0,-11,null,null,-11,-44,-9,-9,-44,null,-77,-61,null,null,-61,-77,null,-90,null,0,73,73,0,null,-90,null,61,-19,null,null,-8,-8,null,null,-19,null,61,22,-50,36,null,14,-59,-59,14,null,36,-50,22,-5,null,null,68,null,48,29,-80,-48,-44,-44,-48,-80,29,48,null,68,null,null,-5,38,null,-73,null,22,null,null,-79,11,null,null,28,26,null,null,26,28,null,null,11,-79,null,null,22,null,-73,null,38,60,null,17,61,null,-62,null,16,43,null,91,-64,-21,null,null,-21,-64,91,null,43,16,null,-62,null,61,17,60,null,78,null,99,null,null,48,null,-82,-44,null,40,null,null,68,null,87,null,-76,-76,null,87,null,68,null,null,40,null,-44,-82,null,48,null,null,99,null,78,70,null,null,-50,-39,null,-8,84,null,-68,31,null,50,null,null,19,-65,-69,-69,-65,19,null,null,50,null,31,-68,null,84,-8,null,-39,-50,null,null,70,55,null,null,45,-71,null,-68,-32,null,58,14,null,-41,null,null,-48,null,-88,-89,-33,null,-13,-13,null,-33,-89,-88,null,-48,null,null,-41,null,14,58,null,-32,-68,null,-34,45,null,null,55,-38,null,-13,null,-31,null,-49,null,-68,null,-86,53,null,38,null,88,7,null,-72,null,null,-30,-55,-27,79,57,57,79,-27,21,-30,null,null,-72,null,7,88,null,38,null,53,-86,null,-68,null,-49,null,-31,null,-13,null,-38,99,-63,-57,-73,null,-3,-45,-92,-58,null,-76,null,-96,null,48,null,91,null,86,null,-97,null,null,73,null,-65,40,-10,null,53,null,-5,-5,null,53,null,-10,40,-65,null,73,null,null,-97,null,86,null,91,null,48,null,-96,null,-76,null,-58,-92,-45,-3,null,-73,-57,-63,99,-44,-47,28,-14,-40,3,35,null,null,84,null,11,-86,24,-72,66,80,null,null,-100,null,-75,null,76,7,-5,-19,-10,-54,null,-53,null,85,-21,-100,47,-59,null,-22,null,null,-22,null,-59,47,-100,-21,85,null,-53,null,-54,-10,-19,-5,7,76,null,-75,null,-100,null,null,80,66,-72,24,-86,11,null,84,null,null,35,3,-40,-14,28,-47,-44,null,-52,68,null,null,14,-18,null,-3,29,null,-16,11,null,-5,null,-67,20,50,null,null,-92,null,-23,-64,null,null,91,-81,null,-60,null,null,73,76,null,null,-46,-14,48,null,-40,-22,null,-31,null,-79,-98,-55,null,76,-89,null,-72,69,null,65,null,null,65,null,-40,null,-72,-89,76,null,-55,-98,-79,null,-31,null,-22,-40,null,48,-14,-46,null,null,76,73,null,null,-60,null,-81,91,null,null,-64,-23,null,-92,null,null,50,20,-67,null,-5,null,11,-16,null,29,-3,null,-18,14,null,null,68,-52,null,-38,null,58,77,2,-99,null,-23,-96,null,-34,null,-4,-46,55,null,null,-98,null,45,92,null,-90,-15,21,null,null,-9,-56,76,-35,56,-81,null,4,null,-61,null,null,-77,-74,-43,-54,14,null,87,-100,-86,3,null,95,-29,91,null,46,-62,null,33,-72,null,null,59,77,null,null,-53,-4,null,null,-4,-53,null,null,77,59,null,null,-72,33,null,-62,46,null,91,-29,95,null,3,-86,-100,87,null,14,-54,-43,-74,-77,null,null,-61,null,4,null,-81,56,-35,76,-56,-9,null,null,21,-15,-90,null,92,45,null,-98,null,null,55,-46,-4,null,-34,null,-96,-23,null,-99,2,77,58,null,-38,null,-90,null,71,null,85,null,-86,null,-89,78,null,null,-57,20,null,null,72,null,17,null,75,77,null,null,7,null,9,null,-49,15,null,null,94,90,null,-77,null,58,-68,null,20,null,82,null,71,null,53,null,-73,-32,null,46,-30,null,74,null,45,0,-50,33,null,null,-52,null,-24,94,null,null,93,27,null,null,-74,44,null,20,null,-100,-37,76,null,22,85,38,null,-72,null,-51,null,null,-51,null,-72,null,38,85,22,null,76,-37,-100,null,20,44,null,-74,null,null,27,93,null,null,94,-24,null,-52,null,null,33,-50,0,45,null,74,null,-30,46,null,-32,-73,null,53,null,null,71,82,null,20,null,-68,58,null,-77,null,90,94,null,null,15,-49,null,9,null,7,null,null,77,75,null,17,null,72,null,null,20,-57,null,null,78,-89,null,null,-86,null,85,71,null,-90])
);