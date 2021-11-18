//**************Dados do MOOC4 *****************//

//esse vetor tem as quantidades de telas de cada unidade;
let quant_telas=[3,8,7,8,5];
let porcentagem = 0;

//Ao carregar a página, obtém os dados do curso
window .addEventListener( "evObtemDadosCurso" , resultadoObterDadosCurso, false );
function resultadoObterDadosCurso(evento){
    console.log(evento.detail);    

    //Registar a página atual como última visitada
    API.registrarUltimaPaginaAcessada(id_unidade,id_slide);
    
    //Verifica a porcentagem atual da unidade
    API.obterPorcentagemConclusaoUnidade(id_unidade);     
}

//Quando verifica a porcentagem, aciona o Listender
window.addEventListener( "evObtemPorcentagemConclusaoUnidade",resultadoObterPorcentagemConclusaoUnidade, false );
function resultadoObterPorcentagemConclusaoUnidade (evento){
    console .log(evento.detail);
    
    //Se encontrar, é porque alguma tela da unidade já foi vista.
    if(evento.detail["status"]=="200"){
        //se a unidade já foi iniciada, então vai ter porcentagem.
        porcentagem = evento.detail["data"];                
        console.log("\nVerificando a unidade: "+id_unidade+"\nCom a porcentagem: "+porcentagem);
        //Se a porcentagem já for 100%, testa se esta é a última tela da unidade
        if(porcentagem==100){  
            habilitar_atividade();
        }else{
            //Se a porcentagem ainda não for 100%, então verifica se a tela atual já foi vista.            
            API.obterDadosGenericos(tela);   
        }
    }else{
        //Se não encontrar, é porque é a primeira vez que a unidade está sendo vista.
        //Então basta registrar a porcentagem de uma tela        
        porcentagem=(Math.round((100/quant_telas[unidade])));        
        API.registrarPorcentagemConclusaoUnidade(id_unidade,porcentagem);

        //E registrar a tela atual como vista
        API.registrarDadosGenericos(tela,1);
    }
}

window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
function resultadoObtemDadosGenericos (evento){    
    console.log("Status do evento: "+evento.detail);    
    //testando se o status é 200, a tela já foi visitada antes
    if(evento.detail["status"]==200){                        
        console.log("Esta tela já foi vista antes");              
    }else{
        //Se der outra mensagem, a tela não foi vista ainda.        
        console.log("Vendo esta tela pela primeira vez.");
        
        //então calcula a porcentagem nova e registra no sistema
        porcentagem=porcentagem+((100/quant_telas[unidade]));
        console.log("nova Porcentagem:"+porcentagem);
        if(porcentagem>100){
            porcentagem=100;
        }
        API.registrarPorcentagemConclusaoUnidade(id_unidade,porcentagem);

        //Registra a tela;        
        API.registrarDadosGenericos(tela,1);
    }
    //Verifica se e se é a última tela
    habilitar_atividade();                
}	

function habilitar_atividade(){
    if(ultima_tela==1 && porcentagem>=100 && unidade!=0){
        console.log("Ativando botão de atividades");        
        //Ativa o botão de atividades
        document.querySelector("#botao-atividades button").classList.remove("bt-desativado");                            
        document.querySelector("#botao-atividades button").classList.add("atividades");        
    }    
}
