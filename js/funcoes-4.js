
var quant_telas_vistas=0;	
var porcentagem = 0;
//esse vetor tem as quantidades de telas de cada unidade;
var quant_telas=[2,7,7,5,5,6];
var nome_tela="";

var verificando_quais_dados=1;

window .addEventListener( "evObtemDadosCurso" , resultadoObterDadosCurso, false );
function resultadoObterDadosCurso(evento){
    console.log(evento.detail);
    
    //vai registrar a porcentagem desta página: 
    console.log("\nETAPA 1\nRegistrando a tela atual como Verificada");
    API.registrarDadosGenericos(tela,1);
}

window .addEventListener( "evObtemRegistraDadosGenericos" ,resultadoRegistrarDadosGenericos, false );
function resultadoRegistrarDadosGenericos (evento){
    console.log("Registrando os dados desta tela.");
    console .log(evento.detail);
    //Depois da tela registrada, entra na função para verificar as outras telas da unidade
    verifica_porcentagem(unidade,tela);
}

function verifica_porcentagem(unidade,tela){
    //O sistema vai verificar todas as telas de todas as unidades, pra saber quais foram vistas.        	
    //Este for pesquisará quantas telas foram vistas dentro da unidade atual    
    for(let i=1;i<=quant_telas[unidade];i++){        
        nome_tela="uni"+unidade+"tela"+i;        
        console.log("\nETAPA 2\nVerificando a tela "+i+" da unidade "+unidade+", variável="+nome_tela);					
        API.obterDadosGenericos(nome_tela);    			
    }    	   	    	
}

window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
function resultadoObtemDadosGenericos (evento){

    //testa se os dados genéricos testados são para a porcentagem ou para as respostas
	console.log("Teste de dados aqui:::::::: "+verificando_quais_dados);

	//verificação normal, para porcentagem
    if(verificando_quais_dados==1){

        console.log(evento.detail);
        //aqui verifica se está testando o nome da tela, para não contabilizar errado
        var tela_atual=0; 		
        
        //testando se o status é 200, a tela já foi visitada antes
        if(evento.detail["status"]==200){
            //se achou a tela, é porque ela já foi vista. então retorna 1
            tela_atual=1;
            console.log("igual, valor 1");
        }else{
            tela_atual=0;
            console.log("diferente, valor 0");
        }		    	
        
        //atualizando a quantidade de telas vistas		
        quant_telas_vistas=quant_telas_vistas+tela_atual;             
        console.log("\nETAPA 3\nSomar as telas vistas: "+quant_telas_vistas);

        //calcula a porcentagem de conclusão de acordo com a quantidade de telas na unidade
        console.log("calcular a porcentagem de "+quant_telas_vistas+" telas");
        porcentagem=Math.round((100/quant_telas[unidade])*quant_telas_vistas);
        console.log("Porcentagem total é: "+porcentagem);
        console.log("aqui registra a porcentagem no sistema");
        API.registrarPorcentagemConclusaoUnidade(id_unidade,porcentagem);
    
    //Verificação para envio do formulário Uni2Tela2
    }else{
        console.log("\nObtendo os dados genéricos: ");
        console.log("Status do evento: "+evento.detail['status']);

        //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez
        if(evento.detail["status"]=="200"){

            //se a unidade já foi iniciada, então pode exibir a mensagem informando que a atiidade já foi completada
            // **************** (VER COM EQUIPE) *****************
            var resposta = evento.detail["data"][0]["valor"];
            console.log(evento.detail["data"]);
            mensagem.innerHTML = "Você já enviou estas respostas<br /><br /><a class='link-proxima-unidade' href='tela03.html'>PROSSEGUIR &#10095;</a>";
            mensagem.className = "mensagem-ok";
            mensagem.style.dispay = "block";
            window.scrollTo(0, 0);
            erros++;

            //se a unidade não foi iniciada, registra os dados Genéricos com as respostas:
        }else{
            API.registrarDadosGenericos("q2_2_1",q2_2_1);
            console.log("Resposta 1: "+q2_2_1);
            API.registrarDadosGenericos("q2_2_2t",q2_2_2t);
            console.log("Resposta 2t: "+q2_2_2t);
            API.registrarDadosGenericos("q2_2_3",q2_2_3);
            console.log("Resposta 3: "+q2_2_3);
            API.registrarDadosGenericos("q2_2_3t",q2_2_3t);
            console.log("Resposta 3t: "+q2_2_3t);
            API.registrarDadosGenericos("q2_2_4t",q2_2_4t);
            console.log("Resposta 4t: "+q2_2_4t);
        }
    }
}	

window .addEventListener( "evRegistraPorcentagemConclusaoUnidade" ,resultadoRegistrarPorcentagemConclusaoUnidade, false );
function resultadoRegistrarPorcentagemConclusaoUnidade (evento){
    console.log(evento.detail);
    console.log("\nETAPA 4\nTendo a porcentagem registrada");
}