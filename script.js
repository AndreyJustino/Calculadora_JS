let array = []
let caracterio = ''

function digito(n){

    let tela = document.getElementById('tela')

    if(n === 'adicao'){

        array.push(caracterio)
        array.push('+')
        caracterio = ''
        console.log(array)

    } else if( n === 'subtracao' ) {

        array.push(caracterio)
        array.push('-')
        caracterio = ''
        console.log(array)

    } else if(n === 'divisao') {

        array.push(caracterio)
        array.push('/')
        caracterio = ''
        console.log(array)

    } else if(n === 'multiplicacao') {

        array.push(caracterio)
        array.push('*')
        caracterio = ''
        console.log(array)
    
    } else if (n === 'limpar') {

        caracterio = ''
        array = []
        tela.value = 0
        console.log(array)

    } else {
        let calculo = ''

        if(n == '='){
                array.push(caracterio)
                
                if(array.includes('+') || array.includes('-') || array.includes('*') || array.includes('/')){

                    array.forEach(value => {
                        calculo  = calculo + value
                    })

                    console.log(calculo)

                    let resultado = eval(calculo)
                    
                    tela.value = resultado

                } else{
                    alert('Precisa-se de um operador')
                }

        
            } else {
                caracterio += n 

                tela.value = caracterio
            }
    }
    
}