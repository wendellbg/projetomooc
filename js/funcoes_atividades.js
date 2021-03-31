var quant_tentativas=0;
var max_quant_tentativas=3;
var quant_respostas=0;

    function verificando_tentativas(unidade){
        console.log("\n\nVerificando tentativas aqui");
        API.obterDadosGenericos(unidade);
    }

    window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
    function resultadoObtemDadosGenericos (evento){
        console.log(evento.detail);
        console.log("\nObtendo os dados genéricos (tentativas): ");
        console.log("Status do evento: "+evento.detail['status']);

        //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez
        if(evento.detail["status"]=="200"){
            //se a unidade já foi enviada, verifica a quantidade, para saber se atingiu o máximo
            console.log(evento.detail["data"]);
            let quant_salva = evento.detail["data"][0]["valor"];            
            console.log("tentativas salvas: "+quant_salva);
            if(quant_salva<max_quant_tentativas){
                quant_respostas=parseInt(quant_salva)+1;                
            }else{       
                quant_respostas=parseInt(4);         
            }            
        }else{                                  
            //se não encontrou a chave da unidade, é porque esta é a primeira vez que ele envia as respostas.
            quant_respostas=parseInt(1);            
        }
        console.log("quant respostas="+quant_respostas);
        API.registrarDadosGenericos("quant_"+id_atividade,quant_respostas);        
        API.obterRespostaAtividade(id_atividade);           
    } 
    