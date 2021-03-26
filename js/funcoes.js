
function verifica_porcentagem(unidade,tela){
    //O sistema vai verificar todas as telas de todas as unidades, pra saber quais foram vistas.
    
    //esse vetor tem as quantidades de telas de cada unidade;
    var quant_telas=[2,7,7,5,5,6];
    var nome_tela="";
    
    //Primeiramente já registra a página atual com o status de visitada (1)
    API.registradadosGenericos(tela,1);
    
    //Este for pesquisará quantas telas foram vistas dentro da unidade atual
    var quant_telas_vistas=0;
    for(let i=1;i<=quant_telas[unidade];i++){        
        nome_tela="uni"+unidade+"tela"+i;        
        console.log("Verificando a tela "+i+" da unidade "+unidade+", variável="+nome_tela);
        
        var tela_atual=0;                
        tela_vista= API.obterDadosGenericos(nome_tela);    
        //atualizando a quantidade de telas vistas
        quant_telas_vistas=quant_telas_vistas+tela_atual;
    }
    //calcula a porcentagem de conclusão de acordo com a quantidade de telas na unidade
    var porcentagem=(100/quant_telas[unidade])*quant_telas_vistas;
    console.log("Porcentagem total é: "+porcentagem);
    API.registrarPorcentagemConclusaoUnidade("uni"+unidade,porcentagem);
}


window .addEventListener( "evObtemDadosGenericos" , resultadoObtemDadosGenericos,false );
function resultadoObtemDadosGenericos (evento){  
    console .log(evento.detail);
    //aqui verifica se está testando o nome da tela, para não contabilizar errado
    if(evento.detail.data.identificador==nome_tela){
        //testando se o status é 200, a tela já foi visitada antes
        if(evento.detail["status"]==200){
            //se achou a tela, é porque ela já foi vista. então retorna 1
            return 1;
        }else{
            return 0;
        }
    }
}