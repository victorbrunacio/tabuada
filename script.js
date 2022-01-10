function aperte() {
    let num = document.querySelector('#i1')
    let tab = document.querySelector('#seltab')
    if(num.value == 0){
        window.alert('Por favor, digite algo!')

    } else {
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML= ''//isso serve para resetar a tabuaada,quando mostrar novos valores vai resetar passando por essa linha de código
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    
    
}