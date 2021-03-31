var quant_tentativas=0;
var max_quant_tentativas=3;
var quant_respostas=50;

    window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
    function resultadoObtemDadosGenericos (evento){
        console.log(evento.detail);
        console.log("\nObtendo os dados genéricos: ");
        console.log("Status do evento: "+evento.detail['status']);

        //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez
        if(evento.detail["status"]=="200"){
            //se a unidade já foi enviada, verifica a quantidade, para saber se atingiu o máximo
            console.log(evento.detail["data"]);
            let quant_salva = evento.detail["data"][0]["valor"];            
            if(quant_salva<max_quant_tentativas){
                API.registrarDadosGenericos("quant_"+id_atividade,quant_salva+1);                
                quant_respostas= quant_salva+1;
            }else{       
                quant_respostas=3;         
            }            
        }else{
            //se não encontrou a chave da unidade, é porque esta é a primeira vez que ele envia as respostas.
            console.log("Registrando a primeira tentativa");
            API.registrarDadosGenericos("quant_"+id_atividade,1);                       
            quant_respostas=1;
        }
    }
	
    