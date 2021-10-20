var nota_atividade=0;
var nota_atividade_nova=0;
var erros=0;
var envio=0;
var revisao_teste=0;
var revisao_vista=0;

var mensagem = document.getElementById("mensagem-alerta"); 
var mensagem_tentativas = document.getElementById("mensagem-tentativas");  
var texto_mensagem_padrao_0="Responda às atividades e, ao final, clique em \"Enviar Respostas\".<br>Você tem até 3 tentativas de envio e ficará registrada a nota mais alta.";
var texto_mensagem_padrao="Lembre-se, você tem até 3 tentativas de envio e ficará registrada a nota mais alta.";
var texto_mensagem_tentativa="";
var texto_mensagem_nota="";
var texto_mensagem_revisao_0="<br>Após acessar o GABARITO, você NÃO poderá enviar novas respostas.<br><br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";
var texto_mensagem_revisao_1="<br>Você já verificou o gabarito, então não pode mais responder esta atividade.<br><br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";



var quant_tentativas=0;
var max_quant_tentativas=3;
var quant_respostas=0;
var max_tentativas_atingido=0;

    function verificando_tentativas(tentativas_unidade){
        console.log("\n\nVerificando tentativas aqui.\nenvio="+envio+"\nteste="+revisao_teste+" \nvista="+revisao_vista);        
        API.obterDadosGenericos(tentativas_unidade);
    }

    window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
    function resultadoObtemDadosGenericos (evento){
        console.log(evento.detail);

        //verificar se está verificando a revisão ou os envios de resposta
        if(revisao_teste==0){
            //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez
            if(evento.detail["status"]=="200"){
                console.log(evento.detail["data"]);            
                //se a unidade já foi enviada, verifica a quantidade, para saber se atingiu o máximo            
                let quant_salva = evento.detail["data"][0]["valor"];            
                //console.log("tentativas salvas: "+quant_salva);
                //envio==1 ? quant_respostas=quant_salva+1 : quant_respostas=quant_salva;
                if(envio==0){                                
                    if(quant_salva==0){
                        texto_mensagem_tentativa = "<br>Você ainda não respondeu esta atividade.";
                    }else{
                        let vez = quant_salva==1 ? "vez" : "vezes";                    
                        texto_mensagem_tentativa="<br>Você já respondeu "+quant_salva+" "+vez+".";
                    }
                    mensagem_tentativas.innerHTML=texto_mensagem_padrao+texto_mensagem_tentativa+texto_mensagem_fim;
                    console.log("\nJá verificou envio, quant-salva="+quant_salva);
                    quant_respostas = quant_salva;
                }else{
                    if(quant_salva<max_quant_tentativas){
                        quant_respostas=parseInt(quant_salva)+1;  
                        texto_mensagem_tentativa="<br>Esta é sua "+quant_respostas+"ª tentativa.";              
                    }else{                        
                        quant_respostas=parseInt(3);
                        max_tentativas_atingido=1;         
                        texto_mensagem_tentativa="<br>Você já fez suas "+max_quant_tentativas+" tentativas.";
                    }                                                   
                    API.obterRespostaAtividade(id_atividade);
                }          
                API.registrarDadosGenericos("quantidade_"+id_atividade,quant_respostas);        
                
            
            //Etapa 2: Carregando a página sem respostas enviadas
            }else{                                  
                //se não encontrou a chave da unidade, é porque esta é a primeira vez que ele envia as respostas.
                console.log("Carregando a página, envio="+envio);
                if(envio==0){
                    quant_respostas=0;                     
                    mensagem_tentativas.innerHTML=texto_mensagem_padrao_0;   
                    jQuery('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    console.log("mensagem zerada");
                    API.registrarDadosGenericos("quantidade_"+id_atividade,quant_respostas);
                }else{
                    quant_respostas=parseInt(1);
                    //console.log("quant respostas="+quant_respostas);
                    texto_mensagem_tentativa="<br>Esta é sua primeira tentativa.";
                    API.registrarDadosGenericos("quantidade_"+id_atividade,quant_respostas);        
                    API.obterRespostaAtividade(id_atividade);
                }
            }

            revisao_teste=1;
            API.obterDadosGenericos(revisao_unidade);
            console.log("verificando revisão. revisao_teste="+revisao_teste);
        }else{
            //aqui está verificando se a página de revisão foi acessada
            if(evento.detail["status"]=="200"){
                console.log(evento.detail["data"]);            
                revisao_vista=1;
            }            
        }     
        //console.log(texto_mensagem_tentativa);
        //mensagem_tentativas.innerHTML=texto_mensagem_tentativa;
    }

    function verifica_revisao(){
       if(revisao_vista==1){
           document.querySelector(".botao-atividade button").style.display="none";
       } 
    }