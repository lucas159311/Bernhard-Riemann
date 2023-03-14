function Calcular(){
    if(verificaValor()){
        var area = 0;
        var y = 0;
        var integral = 21.333333;

        var intervalo = Number.parseFloat(document.getElementById('intervalo').value);
        for(var i=0; i < 4; i+=intervalo){
            console.log("passei "+i+" vezes");
            y = i*i;
            area += (intervalo*y);
        }
        //exibe o resultado
        document.getElementById('resultado').innerHTML = "A área do retangulo: <b>" + area.toFixed(2) + "</b>";
        document.getElementById('resultado').innerHTML += "<br>A área calculada pela intregral: <b>" + integral.toFixed(2) + "</b>";
        document.getElementById('resultado').innerHTML += "<br>A taxa de erro: <b>" + setError(area).toFixed(2) + "%</b>";
    }else{
        window.alert("Digite um valor no campo para continuar!");
    }

}

function Limpar(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('intervalo').value = "";
}

function setError(area){
    var result = (100-((area/21.333333)*100));
    if(result < 0){//negativo
        return result * -1;
    }else{
        return result;
    }
}

function verificaValor(){
    if(document.getElementById('intervalo').value == ""){
        return 0;
    }else{
        return 1;
    }
}