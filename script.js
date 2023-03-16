function CalculaIntegral(){
    var sup = document.getElementById('limite').value;
    var result = ((sup*sup*sup)/3);
    console.log(result);
    return result;
}

function Calcular(){
    if(verificaValor()){
        var area = 0;
        var y = 0;
        var integral = Number.parseFloat(CalculaIntegral());
        var sup = document.getElementById('limite').value;

        var intervalo = Number.parseFloat(document.getElementById('intervalo').value);
        for(var i=0; i < sup; i+=intervalo){
            console.log("passei "+i+" vezes");
            y = i*i;
            area += (intervalo*y);
        }
        //exibe o resultado
        document.getElementById('resultado').innerHTML = "A área dos retangulos: <b>" + area.toFixed(2) + "</b>";
        document.getElementById('resultado').innerHTML += "<br>A área calculada pela integral: <b>" + integral.toFixed(2) + "</b>";
        document.getElementById('resultado').innerHTML += "<br>A taxa de erro: <b>" + setError(area,integral).toFixed(2) + "%</b>";
    }else{
        window.alert("Complete todos os campos para continuar");
    }

}

function Limpar(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('limite').value = "";
    document.getElementById('intervalo').value = "";
}

function setError(area,integral){
    var result = (100-((area/integral)*100));
    if(result < 0){//negativo
        return result * -1;
    }else{
        return result;
    }
}

function verificaValor(){
    if(document.getElementById('intervalo').value == "" || document.getElementById('limite').value == ""){
        return 0;
    }else{
        return 1;
    }
}