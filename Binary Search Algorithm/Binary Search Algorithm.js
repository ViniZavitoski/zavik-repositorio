//algoritmos: Pesquisa Binária
const pesquisa_binaria = (lista, item ) => {
    let baixo = 0
    let alto = lista.length - 1
    while (baixo <= alto) {
        let meio = Math.floor((alto + baixo) / 2)
        let chute = lista[meio]
        if (chute == item) {
            return meio
        }
        if (chute > item) {
        } else if (chute > item) {
            alto = meio - 1
        }
        else {
            baixo = meio + 1
        }
    } return null
};
lista = [1,2,3,4,5,6];
console.log(pesquisa_binaria(lista,10));//input:null pois nao esta na lista
console.log(pesquisa_binaria(lista, 3))//input: 3 pois esta na lista
