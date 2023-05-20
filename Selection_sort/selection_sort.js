//ORGANIZANDO UM ARRAY DE FORMA CRESCENTE
//achando o menor elemento de um array
function findSmallestIndex(array) {
    var smallestElement = array[0];
    var smallestIndex = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
         smallestElement = array[i];
         smallestIndex = i;
        }
    }
    return smallestIndex;
}
//agora voce pode usar essa funcao para escrever a ordenacao por selecao:
function selectionSort (array) {
    var sortedArray = [];
    var copyArray = array.slice();
    var length = array.length;

    for (var i = 0; i < length ; i++) {
        //acha o menor elemento do array
        var smallestIndex = findSmallestIndex(copyArray);
        //adiciona o menor elemento no novo array
        sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
    }
    return sortedArray;
}

const sourceArray = [5,3,6,2,10];
const sourtedArray = selectionSort([5,3,6,2,10])

console.log("Source array -", sourceArray);// Source array - [ 5, 3, 6, 2, 10 ]
console.log("new sorted array -", sourtedArray); //new sorted array - [ 2, 3, 5, 6, 10 ]