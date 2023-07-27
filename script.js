let array = []
let caracterio = ''

function calculadora(n){

    let tela = document.getElementById('tela')

    if(n === 'adicao'){

        array.push(caracterio)
        array.push('+')
        caracterio = ''
        tela.value = '+'

    } else if( n === 'subtracao' ) {

        array.push(caracterio)
        array.push('-')
        caracterio = ''
        tela.value = '-'

    } else if(n === 'divisao') {

        array.push(caracterio)
        array.push('/')
        caracterio = ''
        tela.value = '÷'

    } else if(n === 'multiplicacao') {

        array.push(caracterio)
        array.push('*')
        caracterio = ''
        tela.value = 'x'
    
    } else if (n === 'limpar') {

        caracterio = ''
        array = []
        tela.value = 0

    } else {
        let calculo = ''

        if(n == '='){
                array.push(caracterio)
                
                if(array.includes('+') || array.includes('-') || array.includes('*') || array.includes('/')){

                    array.forEach(value => {
                        calculo  = calculo + value
                    })

                    let resultado = eval(calculo)
                    
                    tela.value = resultado

                    array = []
                    caracterio = resultado

                } else{
                    alert('Precisa-se de um operador')
                }

        
            } else {
                caracterio += n 

                tela.value = caracterio
            }
    }
    
}