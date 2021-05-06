var quant_telas_vistas=0;	
var porcentagem = 0;
//esse vetor tem as quantidades de telas de cada unidade;
var quant_telas=[3,7,7,5,5,6];
var nome_tela="";
var envio=0;
var verificando_quais_dados=1;

window .addEventListener( "evObtemDadosCurso" , resultadoObterDadosCurso, false );
function resultadoObterDadosCurso(evento){
    console.log(evento.detail);
    
    //vai registrar a porcentagem desta página: 
    //console.log("\nETAPA 1\nRegistrando a tela atual como Verificada");
    API.registrarDadosGenericos(tela,1);
}

window .addEventListener( "evObtemRegistraDadosGenericos" ,resultadoRegistrarDadosGenericos, false );
function resultadoRegistrarDadosGenericos (evento){
    //console.log("Registrando os dados desta tela.");
    console .log(evento.detail);
    //Depois da tela registrada, entra na função para verificar as outras telas da unidade
    if(tela=="uni2tela2" && envio==1){
        console.log("Enviando respostas");
    }else{
        verifica_porcentagem(unidade,tela);
    }
    
}

function verifica_porcentagem(unidade,tela){
    //O sistema vai verificar todas as telas de todas as unidades, pra saber quais foram vistas.        	
    //Este for pesquisará quantas telas foram vistas dentro da unidade atual    
    for(let i=1;i<=quant_telas[unidade];i++){        
        nome_tela="uni"+unidade+"tela"+i;        
        //console.log("\nETAPA 2\nVerificando a tela "+i+" da unidade "+unidade+", variável="+nome_tela);					
        API.obterDadosGenericos(nome_tela);            			
    }    	   	    	
}

window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
function resultadoObtemDadosGenericos (evento){

    //testa se os dados genéricos testados são para a porcentagem ou para as respostas
    //console.log("Teste de dados aqui: "+verificando_quais_dados);

    //verificação normal, para porcentagem
    if(verificando_quais_dados==1){
        console.log("Status do evento: "+evento.detail);
        //aqui verifica se está testando o nome da tela, para não contabilizar errado
        var tela_atual=0; 		
        
        //testando se o status é 200, a tela já foi visitada antes
        if(evento.detail["status"]==200){
            //se achou a tela, é porque ela já foi vista. então retorna 1
            tela_atual=1;
            //console.log("igual, valor 1");
        }else{
            tela_atual=0;
            //console.log("diferente, valor 0");
        }		    	
        
        //atualizando a quantidade de telas vistas		
        quant_telas_vistas=quant_telas_vistas+tela_atual;             
        //console.log("\nETAPA 3\nSomar as telas vistas: "+quant_telas_vistas);

        //calcula a porcentagem de conclusão de acordo com a quantidade de telas na unidade
        //console.log("calcular a porcentagem de "+quant_telas_vistas+" telas");
        porcentagem=Math.round((100/quant_telas[unidade])*quant_telas_vistas);
        //console.log("Porcentagem total é: "+porcentagem);
        
        if((porcentagem==100)&&(unidade!=0)&&(ultima_tela==1)){
        //if(teste==1){
            document.querySelector("#botao-atividades button").classList.remove("bt-desativado");                            
            document.querySelector("#botao-atividades button").classList.add("atividades");
            console.log("Ativar botão de atividades");
        }

        //"aqui registra a porcentagem no sistema
        API.registrarPorcentagemConclusaoUnidade(id_unidade,porcentagem);
        API.registrarUltimaPaginaAcessada(id_unidade,id_slide);
    
    //Verificação para envio do formulário Uni2Tela2
    }else if(verificando_quais_dados==2){
        console.log("\nObtendo os dados genéricos: ");
        console.log("Status do evento: "+evento.detail['status']);

        //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez
        if(evento.detail["status"]=="200"){

            //se a unidade já foi iniciada, então pode exibir a mensagem informando que o quiz foi enviado, e o botão            
            var resposta = evento.detail["data"][0]["valor"];
            console.log(evento.detail["data"]);
            mensagem.innerHTML = "Você já enviou estas respostas<br /><br /><a class='link-proxima-unidade' href='tela03.html'>PROSSEGUIR &#10095;</a>";
            mensagem.className = "mensagem-ok";
            mensagem.style.display = "block";            
            //window.scrollTo(0, 0);
            document.querySelector("#botao-quiz-uni2").style.display="none";            
            document.querySelector("#botao-prosseguir").style.display="block";
            erros++;
            
            verificando_quais_dados=1;
		    API.obterDadosCurso();  
            //se a unidade não foi iniciada, registra os dados Genéricos com as respostas:
        }else if(envio==0){
            verificando_quais_dados=1;
		    API.obterDadosCurso();  
        }else{
            salvarDados();
        }
    
    //verificação de porcentagem para a última tela, sobre o botão de Encerramento 
    }else if(verificando_quais_dados==3){
        console.log("Status do evento: "+evento.detail['status']);
        if(evento.detail["status"]=="200"){            
            document.querySelector("#botao-encerramento button").classList.remove("bt-desativado");                            
            document.querySelector("#botao-atividades button").classList.add("atividades");
            console.log("Ativar botão de Encerramento");
        }
        verificando_quais_dados=1;
        API.obterDadosCurso();
    }
}	

window .addEventListener( "evRegistraPorcentagemConclusaoUnidade" ,resultadoRegistrarPorcentagemConclusaoUnidade, false );
function resultadoRegistrarPorcentagemConclusaoUnidade (evento){
    console.log(evento.detail);
    //console.log("\nETAPA 4\nTendo a porcentagem registrada");
}

window .addEventListener( "evObtemRegistraUltimaPaginaAcessada" ,resultadoRegistrarUltimaPaginaAcessada, false );
function resultadoRegistrarUltimaPaginaAcessada (evento){
    console .log(evento.detail);
}