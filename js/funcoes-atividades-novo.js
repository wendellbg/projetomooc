let nota_atividade=0;
let nota_atividade_nova=0;
let erros=0;
let revisao_vista=0;
let respondido=0;

let mensagem = document.getElementById("mensagem-alerta"); 
let mensagem_tentativas = document.getElementById("mensagem-tentativas");  
let texto_mensagem_padrao="Responda às atividades e, ao final, clique em \"Enviar Respostas\". <br />Ficará registrada a nota mais alta.";
let texto_mensagem_nota="";
let texto_mensagem_revisao="";
let texto_mensagem_fim="<br>Você pode prosseguir para a próxima atividade.<br><br><a class='botao-mensagem' href='"+proxima_unidade+"'>PRÓXIMA UNIDADE &#10095;</a><br>";

//Etapa 2: Verifica se alguma resposta já foi enviada:
window .addEventListener( "evObtemDadosRespostaAtividade" , resultadoObtemRespostaAtividade, false );
function resultadoObtemRespostaAtividade(evento){
    //console.log("\nObtendo as respostas: ");
    console.log("Status do evento: "+evento.detail['status']);          

    //verifica qual o código retornado, para saber se as respostas já foram enviadas alguma vez
    if(evento.detail["status"]=="200"){           
        nota_atividade = evento.detail.data.nota;
        //Monta a mensagem com as nota salva, já que está carregando a página.
        verifica_nota(nota_atividade,(-1));  
		respondido=1;      
    }else{
        texto_mensagem_nota="<br>Você ainda não respondeu esta atividade!";
    }
    exibe_mensagens();
}

//Aqui vai verificar se a revisão já foi acessada
window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
function resultadoObtemDadosGenericos (evento){
    console.log(evento.detail);
    //verifica qual o código retornado, para saber se o formulário já foi enviado alguma vez            
    if(evento.detail["status"]=="200"){
        console.log(evento.detail["data"]);
        //Se deu 200, é porque já viu a revisão. Então some o botão de envio.                                                                                                                   
        revisao_vista=1;                        
        document.querySelector(".botao-atividade button").style.display="none";
        texto_mensagem_padrao="<br>Você já verificou o GABARITO, então não pode mais responder esta atividade.<br><br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";
    }else{
        texto_mensagem_revisao="<br>Após acessar o GABARITO, você NÃO poderá enviar novas respostas.<br><br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";
    }             
}


//função de controle, pra exibir no console o resultado do envio das respostas (registraRespostaAtividade)
window.addEventListener( "evRegistraRespostaAtividade" ,resultadoRegistrarRespostaAtividade, false );
function resultadoRegistrarRespostaAtividade (evento){
    console.log(evento.detail);
    nota_atividade_nova= evento.detail.data.notaAtividade;
    if(evento.detail["status"]=="200"){
        //se não houver erro, exibe mensagem de OK        
        mensagem.className = "mensagem-ok";
		if(unidade==0){
			mensagem.innerHTML="Dados Enviados com sucesso!<br><br><a class='botao-mensagem' href='"+proxima_unidade+"'>PRÓXIMA ATIVIDADE &#10095;</a><br>";	
		}else{
			mensagem.innerHTML="Dados Enviados com sucesso!<br />";
		}
        
        mensagem.style.display ="inline-block";			
        //Monta a mensagem com as notas nova e já salva, já que enviou a atividade.
        verifica_nota(nota_atividade,nota_atividade_nova);        
    }else{
        //caso algum não esteja preenchido, exibe mensagem de erro
        mensagem.className = "mensagem-alerta";
        mensagem.innerHTML = "Ocorreu algum erro! Tente Novamente...";
        mensagem.style.display = "inline-block";        
    }
    jQuery('body,html').animate({
        scrollTop: 0
    }, 800);
}

function verifica_nota(nota,nota_nova){
    if(nota_nova>=0){
        if(nota_nova>nota){
            nota=nota_nova;
        }
        texto_mensagem_nota="<br />Sua nota foi: "+nota_nova+"<br />Sua nota mais alta nesta atividade é: "+nota;                
    }else{
        texto_mensagem_nota="<br>Você já respondeu esta atividade.<br>Sua nota mais alta é <b>"+nota+"</b>.";		
    }
    if(nota==10){        
        //Se atingiu a nota 10, pode ver a revisão sem problemas.
        texto_mensagem_nota=texto_mensagem_nota+"<br>Parabéns! Você atingiu a nota máxima!<br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";                    
    }else if(nota>=6){
        console.log("\nAtingiu a média aqui");                
        texto_mensagem_nota=texto_mensagem_nota+"<br>Parabéns! Você atingiu a média!<br><a class='botao-mensagem' href='revisao01.html'>Ver Gabarito.</a>";                
        //Se já atingiu a média, tem que verificar se a revisão já foi vista.
        API.obterDadosGenericos(revisao_unidade);
    }else{
        //Se não atingiu a média, nem vai exibir o botão de gabarito.
        texto_mensagem_revisao="<br>Você deve atingir a média para poder ver o gabarito.";
    }
    exibe_mensagens();
}


function exibe_mensagens(){        
    if(unidade==0){        
        texto_mensagem_revisao="";
		texto_mensagem_padrao="Responda às atividades e, ao final, clique em \"Enviar Respostas\".";
		texto_mensagem_fim="<br>Você precisa responder para prosseguir.";	

		if(respondido==1){
            texto_mensagem_fim="";
			texto_mensagem_nota="<br>Você já respondeu esta atividade.<br><br><a class='botao-mensagem' href='"+proxima_unidade+"'>PRÓXIMA ATIVIDADE &#10095;</a><br>";		
			setTimeout(function() {
    			window.location.href = "tela03.html";
			}, 6000);		
		}	
    }
    mensagem_tentativas.innerHTML=texto_mensagem_padrao+texto_mensagem_nota+texto_mensagem_revisao+texto_mensagem_fim;
    mensagem_tentativas.style.display="block";
    jQuery('body,html').animate({
        scrollTop: 0
    }, 800);
}	