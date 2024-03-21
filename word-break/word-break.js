/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/* 

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

*/


var wordBreak = function(s, wordDict) {
    
    // función simplificadora del word dictionary para reducir el espacio de estados si una palabra es la repetición de n veces otra palabra
    function wd(wordDict){
        // creamos un diccionrio de memoria
        const memory = {};

        // almacenamos en el diccionario como llave el primer caracter de cada palabra, y valor un array de palabras que empiezan por ese caracter
        for(let i = 0; i < wordDict.length; ++i){
            let word = wordDict[i];
            let firstChar = word.charAt(0);
            if(memory.hasOwnProperty(firstChar)){
                memory[firstChar].push(word);
            }else{                
                memory[firstChar] = [word];
            }
        }

        // el clean wordDictinoary pusheara solo las palabras que pasen el filtro de no ser una repetición de otra como a y aaaaaa
        const cleanWordDict = [];        
        // recorremos la llaves del diccionario por caracter
        Object.keys(memory).forEach((key) => {
            // leemos el array de palabras que empiezan por ese caracter
            let wdPerChar = memory[key];
            // mientras tenga datos iteramos
            while(wdPerChar.length){
                // desencolamos el primer elemento del array 
                const word = wdPerChar.shift();
                let wordFlag = true;

                // recorremos el listado de palabras restante sin el elemento desencolado
                for(let i = 0; i < wdPerChar.length; ++i){
                    let wordword = wdPerChar[i];
                    // revisamos inclusión en ambos sentidos como 'aa' incluye 'a', pero 'a' no incluye 'aa', y comprobamos si es una repetición de n veces la misma palabra reduciendo el string hasta que quede vacio, si si entonces no la pusheariamos en el array limpio final de palabras del diccionario y la borrariamos
                        if(word.includes(wordword)){
                            let newS = word;
                            while(newS.substring(0, wordword.length) === wordword){
                                newS = newS.substring(wordword.length, newS.length)
                            }
                            if(newS === ""){
                                wordFlag = false; 
                                break;               
                            }
                        }else if(wordword.includes(word)){
                            let newS = wordword;
                            while(newS.substring(0, word.length) === word){
                                newS = newS.substring(word.length, newS.length)
                            }
                            if(newS === ""){
                                wdPerChar = wdPerChar.filter((item) => item !== wordword);
                                --i;              
                            }                    
                        }
                }
                if(wordFlag)
                    cleanWordDict.push(word)

            }   
                    
        })
        return cleanWordDict;
    }

    // incializamos variables del BFS
    wordDict = wd(wordDict);       
    const wordPickedPerIteration = {};
    const queue = [];    
    queue.push(s);    

    // BFS
    while(queue.length){
        // desencolamos el string actual en la cola
        let str = queue.shift();  
        

        // caso aceptación: si se completo el string con el diccionario de palabras entonces es un word break
        if(str === "")
            return true;
        
        // recorremos el diccionario de palabras e insertamos el resultado de aplicar la acción de eliminar substring usando la palabra del diccionario
        for(let i = 0; i < wordDict.length; ++i){
            // obtenemos cada palabra del diccionario
            const word = wordDict[i];  
                    
            // si al inicio de la cadena contiene la palabra del diccionario entonces pusheela y pushee el resultado de repetir la palabra del diccionario por si la contiene mucha veces de izq a derecha una seguida de la otra, por ultimo almacene en un diccionario los estados ya evaluados
            if(str.substring(0, word.length) === word){
                let newS = str;
                const newSOneOperation = str.substring(word.length, str.length);
                while(newS.substring(0, word.length) === word){
                    newS = newS.substring(word.length, newS.length)
                }

                if(!wordPickedPerIteration.hasOwnProperty(newS)){
                    queue.push(newS);
                    wordPickedPerIteration[newS] = word;
                }
                if(newS !== newSOneOperation && !wordPickedPerIteration.hasOwnProperty(newSOneOperation)){
                    queue.push(newSOneOperation)
                    wordPickedPerIteration[newSOneOperation] = word;
                }                    

            }
        }        
    }
    return false;
};