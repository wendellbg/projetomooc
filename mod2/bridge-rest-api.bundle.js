(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TipoMensagemAPI;
(function (TipoMensagemAPI) {
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_DADOS_GENERICOS"] = 0] = "OBTEM_DADOS_GENERICOS";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_ULTIMA_PAGINA_ACESSADA"] = 1] = "OBTEM_ULTIMA_PAGINA_ACESSADA";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_DADOS_CONCLUSAO_UNIDADE"] = 2] = "OBTEM_DADOS_CONCLUSAO_UNIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_CONFIGURACAO_ATIVIDADE"] = 3] = "OBTEM_CONFIGURACAO_ATIVIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_RESPOSTA_ATIVIDADE"] = 4] = "OBTEM_RESPOSTA_ATIVIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_DADOS_CONCLUSAO_CURSO"] = 5] = "OBTEM_DADOS_CONCLUSAO_CURSO";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_DADOS_CONFIGURACAO_CONCLUSAO_UNIDADE"] = 6] = "OBTEM_DADOS_CONFIGURACAO_CONCLUSAO_UNIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_SE_EXISTE_PROXIMA_UNIDADE"] = 7] = "OBTEM_SE_EXISTE_PROXIMA_UNIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_PROXIMA_UNIDADE"] = 8] = "OBTEM_PROXIMA_UNIDADE";
    TipoMensagemAPI[TipoMensagemAPI["OBTEM_STATUS_CONTRASTE"] = 9] = "OBTEM_STATUS_CONTRASTE";
    TipoMensagemAPI[TipoMensagemAPI["REGISTRA_DADOS_GENERICOS"] = 10] = "REGISTRA_DADOS_GENERICOS";
    TipoMensagemAPI[TipoMensagemAPI["REGISTRA_ULTIMA_PAGINA_ACESSADA"] = 11] = "REGISTRA_ULTIMA_PAGINA_ACESSADA";
    TipoMensagemAPI[TipoMensagemAPI["REGISTRA_PORCENTAGEM_CONCLUSAO_UNIDADE"] = 12] = "REGISTRA_PORCENTAGEM_CONCLUSAO_UNIDADE";
    TipoMensagemAPI[TipoMensagemAPI["REGISTRA_RESPOSTA_ATIVIDADE"] = 13] = "REGISTRA_RESPOSTA_ATIVIDADE";
})(TipoMensagemAPI = exports.TipoMensagemAPI || (exports.TipoMensagemAPI = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mensagem_1 = __webpack_require__(2);
var tipo_mensagem_1 = __webpack_require__(0);
var post_message_api_1 = __webpack_require__(3);
var BridgeRestApi = /** @class */ (function () {
    function BridgeRestApi() {
        this.postMessage = new post_message_api_1.PostMessageApi();
    }
    /************************************************
     *         Métodos disponíveis na API
     ************************************************/
    /************************************************
     *               Obtendo dados
     ************************************************/
    BridgeRestApi.prototype.obterDadosGenericos = function (chave) {
        if (chave === void 0) { chave = this.required('obterDadosGenericos'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_GENERICOS, { chave: chave }));
    };
    BridgeRestApi.prototype.obterUltimaPaginaAcessada = function () {
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_ULTIMA_PAGINA_ACESSADA));
    };
    BridgeRestApi.prototype.obterDadosConclusaoUnidade = function (identificadorUnidade) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('obterDadosConclusaoUnidade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONCLUSAO_UNIDADE, { identificadorUnidade: identificadorUnidade }));
    };
    BridgeRestApi.prototype.obterConfiguracaoAtividade = function (identificadorAtividade) {
        if (identificadorAtividade === void 0) { identificadorAtividade = this.required('obterConfiguracaoAtividade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_CONFIGURACAO_ATIVIDADE, { identificadorAtividade: identificadorAtividade }));
    };
    BridgeRestApi.prototype.obterRespostaAtividade = function (identificadorAtividade) {
        if (identificadorAtividade === void 0) { identificadorAtividade = this.required('obterRespostaAtividade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_RESPOSTA_ATIVIDADE, { identificadorAtividade: identificadorAtividade }));
    };
    BridgeRestApi.prototype.obterDadosConclusaoCurso = function () {
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONCLUSAO_CURSO));
    };
    BridgeRestApi.prototype.obterConfiguracaoConclusaoUnidade = function (identificadorUnidade) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('obterConfiguracaoConclusaoUnidade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONFIGURACAO_CONCLUSAO_UNIDADE, { identificadorUnidade: identificadorUnidade }));
    };
    BridgeRestApi.prototype.obterSeExisteProximaUnidade = function (identificadorUnidade) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('obterSeExisteProximaUnidade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_SE_EXISTE_PROXIMA_UNIDADE, { identificadorUnidade: identificadorUnidade }));
    };
    BridgeRestApi.prototype.obterProximaUnidade = function (identificadorUnidade) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('obterProximaUnidade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_PROXIMA_UNIDADE, { identificadorUnidade: identificadorUnidade }));
    };
    BridgeRestApi.prototype.obterStatusContraste = function () {
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.OBTEM_STATUS_CONTRASTE));
    };
    /************************************************
     *                  Salvando dados
     ************************************************/
    BridgeRestApi.prototype.registrarDadosGenericos = function (chave, valor) {
        if (chave === void 0) { chave = this.required('registrarDadosGenericos'); }
        if (valor === void 0) { valor = this.required('registrarDadosGenericos'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.REGISTRA_DADOS_GENERICOS, { chave: chave, valor: valor }));
    };
    BridgeRestApi.prototype.registrarUltimaPaginaAcessada = function (identificadorUnidade, urlUltimaPaginaAcessada) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('registrarUltimaPaginaAcessada'); }
        urlUltimaPaginaAcessada = !urlUltimaPaginaAcessada ? window.location.pathname : window.location.pathname.split("/").slice(0, 7).join("/").concat("/") + urlUltimaPaginaAcessada;
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.REGISTRA_ULTIMA_PAGINA_ACESSADA, { identificadorUnidade: identificadorUnidade, urlUltimaPaginaAcessada: urlUltimaPaginaAcessada }));
    };
    BridgeRestApi.prototype.registrarPorcentagemConclusaoUnidade = function (identificadorUnidade, porcentagem) {
        if (identificadorUnidade === void 0) { identificadorUnidade = this.required('registrarPorcentagemConclusaoUnidade'); }
        if (porcentagem === void 0) { porcentagem = this.required('registrarPorcentagemConclusaoUnidade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.REGISTRA_PORCENTAGEM_CONCLUSAO_UNIDADE, { identificadorUnidade: identificadorUnidade, porcentagem: porcentagem }));
    };
    BridgeRestApi.prototype.registrarRespostaAtividade = function (atividade) {
        if (atividade === void 0) { atividade = this.required('registrarRespostaAtividade'); }
        this.postMessage.enviarMensagem(new mensagem_1.MensagemAPI(tipo_mensagem_1.TipoMensagemAPI.REGISTRA_RESPOSTA_ATIVIDADE, atividade));
    };
    BridgeRestApi.prototype.required = function (metodo) {
        throw new Error('Todos os parâmetros da função ' + metodo + ' são obrigatórios.');
    };
    return BridgeRestApi;
}());
exports.BridgeRestApi = BridgeRestApi;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MensagemAPI = /** @class */ (function () {
    function MensagemAPI(tipoMensagemAPI, objeto) {
        this.tipo = tipoMensagemAPI;
        this.objeto = objeto;
    }
    return MensagemAPI;
}());
exports.MensagemAPI = MensagemAPI;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tipo_mensagem_1 = __webpack_require__(0);
var PostMessageApi = /** @class */ (function () {
    function PostMessageApi() {
        var _this = this;
        this.receberMensagem = function (evento) {
            /*
             *  Fix duplicação de recebimento de evento do PostMessage
             *  quando é utilizado com o Webpack Server.
             *   https://github.com/webpack/webpack-dev-server/issues/481
             */
            if (!evento.data || evento.data.type)
                return;
            _this.tratarMensagemRecebida(evento.data);
        };
        this.adicionarEventListenerReceberMensagem();
    }
    PostMessageApi.prototype.adicionarEventListenerReceberMensagem = function () {
        window.addEventListener("message", this.receberMensagem, false);
    };
    PostMessageApi.prototype.enviarMensagem = function (mensagem) {
        window.parent.postMessage(mensagem, '*');
    };
    PostMessageApi.prototype.tratarMensagemRecebida = function (mensagem) {
        var event = null;
        switch (mensagem.tipo) {
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_GENERICOS:
                event = new CustomEvent('evObtemDadosGenericos', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_ULTIMA_PAGINA_ACESSADA:
                event = new CustomEvent('evObtemUltimaPaginaAcessada', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONCLUSAO_UNIDADE:
                event = new CustomEvent('evObtemDadosConclusaoUnidade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_SE_EXISTE_PROXIMA_UNIDADE:
                event = new CustomEvent('evObtemSeExisteProximaUnidade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_PROXIMA_UNIDADE:
                event = new CustomEvent('evObtemProximaUnidade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_CONFIGURACAO_ATIVIDADE:
                event = new CustomEvent('evObtemConfiguracaoAtividade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_RESPOSTA_ATIVIDADE:
                event = new CustomEvent('evObtemDadosRespostaAtividade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONCLUSAO_CURSO:
                event = new CustomEvent('evObtemDadosDadosConclusaoCurso', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_DADOS_CONFIGURACAO_CONCLUSAO_UNIDADE:
                event = new CustomEvent('evObtemDadosConfiguracaoConclusaoUnidade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.OBTEM_STATUS_CONTRASTE:
                event = new CustomEvent('evObtemStatusContraste', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.REGISTRA_DADOS_GENERICOS:
                event = new CustomEvent('evObtemRegistraDadosGenericos', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.REGISTRA_ULTIMA_PAGINA_ACESSADA:
                event = new CustomEvent('evObtemRegistraUltimaPaginaAcessada', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.REGISTRA_PORCENTAGEM_CONCLUSAO_UNIDADE:
                event = new CustomEvent('evRegistraPorcentagemConclusaoUnidade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            case tipo_mensagem_1.TipoMensagemAPI.REGISTRA_RESPOSTA_ATIVIDADE:
                event = new CustomEvent('evRegistraRespostaAtividade', { detail: { status: mensagem.status, data: mensagem.objeto } });
                break;
            default:
                break;
        }
        // Dispara evento de retorno
        window.dispatchEvent(event);
    };
    return PostMessageApi;
}());
exports.PostMessageApi = PostMessageApi;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhOGUzYTJmZGMzZTJmYzI0ZWM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxvL3RpcG8tbWVuc2FnZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbG8vbWVuc2FnZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bvc3QtbWVzc2FnZS1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxJQUFZLGVBaUJYO0FBakJELFdBQVksZUFBZTtJQUV2Qix1RkFBcUI7SUFDckIscUdBQTRCO0lBQzVCLHVHQUE2QjtJQUM3QixxR0FBNEI7SUFDNUIsNkZBQXdCO0lBQ3hCLG1HQUEyQjtJQUMzQixpSUFBMEM7SUFDMUMsMkdBQStCO0lBQy9CLHVGQUFxQjtJQUNyQix5RkFBc0I7SUFFdEIsOEZBQXdCO0lBQ3hCLDRHQUErQjtJQUMvQiwwSEFBc0M7SUFDdEMsb0dBQTJCO0FBQy9CLENB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QUssK0JBQWUsQ0FBQyxzQ0FBc0M7Z0JBQ3ZELEtBQUssR0FBSSxJQUFJLFdBQVcsQ0FBQyx1Q0FBdUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUNqSSxLQUFLLENBQUM7WUFDVixLQUFLLCtCQUFlLENBQUMsMkJBQTJCO2dCQUM1QyxLQUFLLEdBQUksSUFBSSxXQUFXLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDdkgsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUVELDRCQUE0QjtRQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUM7QUE3RVksd0NBQWMiLCJmaWxlIjoiYnJpZGdlLXJlc3QtYXBpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE4ZTNhMmZkYzNlMmZjMjRlYzlkIiwiZXhwb3J0IGVudW0gVGlwb01lbnNhZ2VtQVBJIHtcblxuICAgIE9CVEVNX0RBRE9TX0dFTkVSSUNPUyxcbiAgICBPQlRFTV9VTFRJTUFfUEFHSU5BX0FDRVNTQURBLFxuICAgIE9CVEVNX0RBRE9TX0NPTkNMVVNBT19VTklEQURFLFxuICAgIE9CVEVNX0NPTkZJR1VSQUNBT19BVElWSURBREUsXG4gICAgT0JURU1fUkVTUE9TVEFfQVRJVklEQURFLFxuICAgIE9CVEVNX0RBRE9TX0NPTkNMVVNBT19DVVJTTyxcbiAgICBPQlRFTV9EQURPU19DT05GSUdVUkFDQU9fQ09OQ0xVU0FPX1VOSURBREUsXG4gICAgT0JURU1fU0VfRVhJU1RFX1BST1hJTUFfVU5JREFERSxcbiAgICBPQlRFTV9QUk9YSU1BX1VOSURBREUsXG4gICAgT0JURU1fU1RBVFVTX0NPTlRSQVNURSxcblxuICAgIFJFR0lTVFJBX0RBRE9TX0dFTkVSSUNPUyxcbiAgICBSRUdJU1RSQV9VTFRJTUFfUEFHSU5BX0FDRVNTQURBLFxuICAgIFJFR0lTVFJBX1BPUkNFTlRBR0VNX0NPTkNMVVNBT19VTklEQURFLFxuICAgIFJFR0lTVFJBX1JFU1BPU1RBX0FUSVZJREFERVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9tb2RlbG8vdGlwby1tZW5zYWdlbS50cyIsImltcG9ydCB7TWVuc2FnZW1BUEl9IGZyb20gXCIuL21vZGVsby9tZW5zYWdlbVwiO1xuaW1wb3J0IHtUaXBvTWVuc2FnZW1BUEl9IGZyb20gXCIuL21vZGVsby90aXBvLW1lbnNhZ2VtXCI7XG5pbXBvcnQge1Bvc3RNZXNzYWdlQXBpfSBmcm9tIFwiLi9wb3N0LW1lc3NhZ2UtYXBpXCI7XG5pbXBvcnQge0F0aXZpZGFkZX0gZnJvbSBcIi4vbW9kZWxvL2F0aXZpZGFkZVwiO1xuXG5leHBvcnQgY2xhc3MgQnJpZGdlUmVzdEFwaXtcblxuICAgIHByaXZhdGUgcG9zdE1lc3NhZ2U6IFBvc3RNZXNzYWdlQXBpO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZSA9IG5ldyBQb3N0TWVzc2FnZUFwaSgpO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiAgICAgICAgIE3DqXRvZG9zIGRpc3BvbsOtdmVpcyBuYSBBUElcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqICAgICAgICAgICAgICAgT2J0ZW5kbyBkYWRvc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBwdWJsaWMgb2J0ZXJEYWRvc0dlbmVyaWNvcyhjaGF2ZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgnb2J0ZXJEYWRvc0dlbmVyaWNvcycpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLk9CVEVNX0RBRE9TX0dFTkVSSUNPUywge2NoYXZlOiBjaGF2ZX0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2J0ZXJVbHRpbWFQYWdpbmFBY2Vzc2FkYSgpe1xuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlLmVudmlhck1lbnNhZ2VtKG5ldyBNZW5zYWdlbUFQSShUaXBvTWVuc2FnZW1BUEkuT0JURU1fVUxUSU1BX1BBR0lOQV9BQ0VTU0FEQSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvYnRlckRhZG9zQ29uY2x1c2FvVW5pZGFkZShpZGVudGlmaWNhZG9yVW5pZGFkZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgnb2J0ZXJEYWRvc0NvbmNsdXNhb1VuaWRhZGUnKSl7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9EQURPU19DT05DTFVTQU9fVU5JREFERSwge2lkZW50aWZpY2Fkb3JVbmlkYWRlOmlkZW50aWZpY2Fkb3JVbmlkYWRlfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvYnRlckNvbmZpZ3VyYWNhb0F0aXZpZGFkZShpZGVudGlmaWNhZG9yQXRpdmlkYWRlOiBzdHJpbmcgPSB0aGlzLnJlcXVpcmVkKCdvYnRlckNvbmZpZ3VyYWNhb0F0aXZpZGFkZScpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLk9CVEVNX0NPTkZJR1VSQUNBT19BVElWSURBREUsIHtpZGVudGlmaWNhZG9yQXRpdmlkYWRlOmlkZW50aWZpY2Fkb3JBdGl2aWRhZGV9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9idGVyUmVzcG9zdGFBdGl2aWRhZGUoaWRlbnRpZmljYWRvckF0aXZpZGFkZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgnb2J0ZXJSZXNwb3N0YUF0aXZpZGFkZScpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLk9CVEVNX1JFU1BPU1RBX0FUSVZJREFERSwge2lkZW50aWZpY2Fkb3JBdGl2aWRhZGU6aWRlbnRpZmljYWRvckF0aXZpZGFkZX0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2J0ZXJEYWRvc0NvbmNsdXNhb0N1cnNvKCl7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9EQURPU19DT05DTFVTQU9fQ1VSU08pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2J0ZXJDb25maWd1cmFjYW9Db25jbHVzYW9VbmlkYWRlKGlkZW50aWZpY2Fkb3JVbmlkYWRlOiBzdHJpbmcgPSB0aGlzLnJlcXVpcmVkKCdvYnRlckNvbmZpZ3VyYWNhb0NvbmNsdXNhb1VuaWRhZGUnKSl7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9EQURPU19DT05GSUdVUkFDQU9fQ09OQ0xVU0FPX1VOSURBREUsIHtpZGVudGlmaWNhZG9yVW5pZGFkZTppZGVudGlmaWNhZG9yVW5pZGFkZX0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2J0ZXJTZUV4aXN0ZVByb3hpbWFVbmlkYWRlKGlkZW50aWZpY2Fkb3JVbmlkYWRlOiBzdHJpbmc9IHRoaXMucmVxdWlyZWQoJ29idGVyU2VFeGlzdGVQcm94aW1hVW5pZGFkZScpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLk9CVEVNX1NFX0VYSVNURV9QUk9YSU1BX1VOSURBREUsIHtpZGVudGlmaWNhZG9yVW5pZGFkZTppZGVudGlmaWNhZG9yVW5pZGFkZX0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2J0ZXJQcm94aW1hVW5pZGFkZShpZGVudGlmaWNhZG9yVW5pZGFkZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgnb2J0ZXJQcm94aW1hVW5pZGFkZScpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLk9CVEVNX1BST1hJTUFfVU5JREFERSwge2lkZW50aWZpY2Fkb3JVbmlkYWRlOmlkZW50aWZpY2Fkb3JVbmlkYWRlfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvYnRlclN0YXR1c0NvbnRyYXN0ZSgpe1xuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlLmVudmlhck1lbnNhZ2VtKG5ldyBNZW5zYWdlbUFQSShUaXBvTWVuc2FnZW1BUEkuT0JURU1fU1RBVFVTX0NPTlRSQVNURSkpO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiAgICAgICAgICAgICAgICAgIFNhbHZhbmRvIGRhZG9zXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwdWJsaWMgcmVnaXN0cmFyRGFkb3NHZW5lcmljb3MoY2hhdmU6IHN0cmluZyA9IHRoaXMucmVxdWlyZWQoJ3JlZ2lzdHJhckRhZG9zR2VuZXJpY29zJyksIHZhbG9yOiBzdHJpbmcgPSB0aGlzLnJlcXVpcmVkKCdyZWdpc3RyYXJEYWRvc0dlbmVyaWNvcycpKXtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZS5lbnZpYXJNZW5zYWdlbShuZXcgTWVuc2FnZW1BUEkoVGlwb01lbnNhZ2VtQVBJLlJFR0lTVFJBX0RBRE9TX0dFTkVSSUNPUywge2NoYXZlOiBjaGF2ZSwgdmFsb3I6IHZhbG9yfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RyYXJVbHRpbWFQYWdpbmFBY2Vzc2FkYShpZGVudGlmaWNhZG9yVW5pZGFkZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgncmVnaXN0cmFyVWx0aW1hUGFnaW5hQWNlc3NhZGEnKSwgdXJsVWx0aW1hUGFnaW5hQWNlc3NhZGE6IHN0cmluZyl7XG4gICAgICAgIHVybFVsdGltYVBhZ2luYUFjZXNzYWRhID0gIXVybFVsdGltYVBhZ2luYUFjZXNzYWRhID8gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgwLDcpLmpvaW4oXCIvXCIpLmNvbmNhdChcIi9cIikrdXJsVWx0aW1hUGFnaW5hQWNlc3NhZGE7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5SRUdJU1RSQV9VTFRJTUFfUEFHSU5BX0FDRVNTQURBLCB7aWRlbnRpZmljYWRvclVuaWRhZGU6IGlkZW50aWZpY2Fkb3JVbmlkYWRlLCB1cmxVbHRpbWFQYWdpbmFBY2Vzc2FkYTogdXJsVWx0aW1hUGFnaW5hQWNlc3NhZGF9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdHJhclBvcmNlbnRhZ2VtQ29uY2x1c2FvVW5pZGFkZShpZGVudGlmaWNhZG9yVW5pZGFkZTogc3RyaW5nID0gdGhpcy5yZXF1aXJlZCgncmVnaXN0cmFyUG9yY2VudGFnZW1Db25jbHVzYW9VbmlkYWRlJyksIHBvcmNlbnRhZ2VtOiBudW1iZXIgPSB0aGlzLnJlcXVpcmVkKCdyZWdpc3RyYXJQb3JjZW50YWdlbUNvbmNsdXNhb1VuaWRhZGUnKSl7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5SRUdJU1RSQV9QT1JDRU5UQUdFTV9DT05DTFVTQU9fVU5JREFERSwge2lkZW50aWZpY2Fkb3JVbmlkYWRlOmlkZW50aWZpY2Fkb3JVbmlkYWRlLCBwb3JjZW50YWdlbTogcG9yY2VudGFnZW19KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdHJhclJlc3Bvc3RhQXRpdmlkYWRlKGF0aXZpZGFkZTogQXRpdmlkYWRlID0gdGhpcy5yZXF1aXJlZCgncmVnaXN0cmFyUmVzcG9zdGFBdGl2aWRhZGUnKSl7XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UuZW52aWFyTWVuc2FnZW0obmV3IE1lbnNhZ2VtQVBJKFRpcG9NZW5zYWdlbUFQSS5SRUdJU1RSQV9SRVNQT1NUQV9BVElWSURBREUsIGF0aXZpZGFkZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlZChtZXRvZG86IHN0cmluZykgOiBhbnl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVG9kb3Mgb3MgcGFyw6JtZXRyb3MgZGEgZnVuw6fDo28gJyttZXRvZG8rJyBzw6NvIG9icmlnYXTDs3Jpb3MuJyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9pbmRleC50cyIsImltcG9ydCB7SFRUUFN0YXR1c30gZnJvbSBcIi4vaHR0cC1zdGF0dXNcIjtcbmltcG9ydCB7VGlwb01lbnNhZ2VtQVBJfSBmcm9tIFwiLi90aXBvLW1lbnNhZ2VtXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW5zYWdlbUFQSSB7XG4gICAgdGlwbz86IFRpcG9NZW5zYWdlbUFQSTtcbiAgICBvYmpldG86IGFueTtcbiAgICBzdGF0dXM6IEhUVFBTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXBvTWVuc2FnZW1BUEk6IFRpcG9NZW5zYWdlbUFQSSwgb2JqZXRvPzogYW55KXtcbiAgICAgICAgdGhpcy50aXBvID0gdGlwb01lbnNhZ2VtQVBJO1xuICAgICAgICB0aGlzLm9iamV0byA9IG9iamV0bztcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zcmMvbW9kZWxvL21lbnNhZ2VtLnRzIiwiaW1wb3J0IHtNZW5zYWdlbUFQSX0gZnJvbSBcIi4vbW9kZWxvL21lbnNhZ2VtXCI7XG5pbXBvcnQge1RpcG9NZW5zYWdlbUFQSX0gZnJvbSBcIi4vbW9kZWxvL3RpcG8tbWVuc2FnZW1cIjtcblxuZXhwb3J0IGNsYXNzIFBvc3RNZXNzYWdlQXBpe1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hZGljaW9uYXJFdmVudExpc3RlbmVyUmVjZWJlck1lbnNhZ2VtKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGljaW9uYXJFdmVudExpc3RlbmVyUmVjZWJlck1lbnNhZ2VtKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWNlYmVyTWVuc2FnZW0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW52aWFyTWVuc2FnZW0obWVuc2FnZW06IE1lbnNhZ2VtQVBJKTogdm9pZHtcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShtZW5zYWdlbSwgJyonKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY2ViZXJNZW5zYWdlbSA9IChldmVudG8pID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICogIEZpeCBkdXBsaWNhw6fDo28gZGUgcmVjZWJpbWVudG8gZGUgZXZlbnRvIGRvIFBvc3RNZXNzYWdlXG4gICAgICAgICAqICBxdWFuZG8gw6kgdXRpbGl6YWRvIGNvbSBvIFdlYnBhY2sgU2VydmVyLlxuICAgICAgICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2stZGV2LXNlcnZlci9pc3N1ZXMvNDgxXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWV2ZW50by5kYXRhIHx8IGV2ZW50by5kYXRhLnR5cGUpIHJldHVybjtcbiAgICAgICAgdGhpcy50cmF0YXJNZW5zYWdlbVJlY2ViaWRhKGV2ZW50by5kYXRhKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSB0cmF0YXJNZW5zYWdlbVJlY2ViaWRhKG1lbnNhZ2VtOiBNZW5zYWdlbUFQSSl7XG4gICAgICAgIGxldCBldmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAobWVuc2FnZW0udGlwbyl7XG4gICAgICAgICAgICBjYXNlIFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9EQURPU19HRU5FUklDT1M6XG4gICAgICAgICAgICAgICAgZXZlbnQgPSAgbmV3IEN1c3RvbUV2ZW50KCdldk9idGVtRGFkb3NHZW5lcmljb3MnLCB7IGRldGFpbDogeyBzdGF0dXM6IG1lbnNhZ2VtLnN0YXR1cywgZGF0YTogbWVuc2FnZW0ub2JqZXRvIH19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGlwb01lbnNhZ2VtQVBJLk9CVEVNX1VMVElNQV9QQUdJTkFfQUNFU1NBREE6XG4gICAgICAgICAgICAgICAgZXZlbnQgPSAgbmV3IEN1c3RvbUV2ZW50KCdldk9idGVtVWx0aW1hUGFnaW5hQWNlc3NhZGEnLCB7IGRldGFpbDogeyBzdGF0dXM6IG1lbnNhZ2VtLnN0YXR1cywgZGF0YTogbWVuc2FnZW0ub2JqZXRvIH19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGlwb01lbnNhZ2VtQVBJLk9CVEVNX0RBRE9TX0NPTkNMVVNBT19VTklEQURFOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZPYnRlbURhZG9zQ29uY2x1c2FvVW5pZGFkZScsIHsgZGV0YWlsOiB7IHN0YXR1czogbWVuc2FnZW0uc3RhdHVzLCBkYXRhOiBtZW5zYWdlbS5vYmpldG8gfX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaXBvTWVuc2FnZW1BUEkuT0JURU1fU0VfRVhJU1RFX1BST1hJTUFfVU5JREFERTpcbiAgICAgICAgICAgICAgICBldmVudCA9ICBuZXcgQ3VzdG9tRXZlbnQoJ2V2T2J0ZW1TZUV4aXN0ZVByb3hpbWFVbmlkYWRlJywgeyBkZXRhaWw6IHsgc3RhdHVzOiBtZW5zYWdlbS5zdGF0dXMsIGRhdGE6IG1lbnNhZ2VtLm9iamV0byB9fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9QUk9YSU1BX1VOSURBREU6XG4gICAgICAgICAgICAgICAgZXZlbnQgPSAgbmV3IEN1c3RvbUV2ZW50KCdldk9idGVtUHJveGltYVVuaWRhZGUnLCB7IGRldGFpbDogeyBzdGF0dXM6IG1lbnNhZ2VtLnN0YXR1cywgZGF0YTogbWVuc2FnZW0ub2JqZXRvIH19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGlwb01lbnNhZ2VtQVBJLk9CVEVNX0NPTkZJR1VSQUNBT19BVElWSURBREU6XG4gICAgICAgICAgICAgICAgZXZlbnQgPSAgbmV3IEN1c3RvbUV2ZW50KCdldk9idGVtQ29uZmlndXJhY2FvQXRpdmlkYWRlJywgeyBkZXRhaWw6IHsgc3RhdHVzOiBtZW5zYWdlbS5zdGF0dXMsIGRhdGE6IG1lbnNhZ2VtLm9iamV0byB9fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRpcG9NZW5zYWdlbUFQSS5PQlRFTV9SRVNQT1NUQV9BVElWSURBREU6XG4gICAgICAgICAgICAgICAgZXZlbnQgPSAgbmV3IEN1c3RvbUV2ZW50KCdldk9idGVtRGFkb3NSZXNwb3N0YUF0aXZpZGFkZScsIHsgZGV0YWlsOiB7IHN0YXR1czogbWVuc2FnZW0uc3RhdHVzLCBkYXRhOiBtZW5zYWdlbS5vYmpldG8gfX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaXBvTWVuc2FnZW1BUEkuT0JURU1fREFET1NfQ09OQ0xVU0FPX0NVUlNPOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZPYnRlbURhZG9zRGFkb3NDb25jbHVzYW9DdXJzbycsIHsgZGV0YWlsOiB7IHN0YXR1czogbWVuc2FnZW0uc3RhdHVzLCBkYXRhOiBtZW5zYWdlbS5vYmpldG8gfX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaXBvTWVuc2FnZW1BUEkuT0JURU1fREFET1NfQ09ORklHVVJBQ0FPX0NPTkNMVVNBT19VTklEQURFOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZPYnRlbURhZG9zQ29uZmlndXJhY2FvQ29uY2x1c2FvVW5pZGFkZScsIHsgZGV0YWlsOiB7IHN0YXR1czogbWVuc2FnZW0uc3RhdHVzLCBkYXRhOiBtZW5zYWdlbS5vYmpldG8gfX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaXBvTWVuc2FnZW1BUEkuT0JURU1fU1RBVFVTX0NPTlRSQVNURTpcbiAgICAgICAgICAgICAgICBldmVudCA9ICBuZXcgQ3VzdG9tRXZlbnQoJ2V2T2J0ZW1TdGF0dXNDb250cmFzdGUnLCB7IGRldGFpbDogeyBzdGF0dXM6IG1lbnNhZ2VtLnN0YXR1cywgZGF0YTogbWVuc2FnZW0ub2JqZXRvIH19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGlwb01lbnNhZ2VtQVBJLlJFR0lTVFJBX0RBRE9TX0dFTkVSSUNPUzpcbiAgICAgICAgICAgICAgICBldmVudCA9ICBuZXcgQ3VzdG9tRXZlbnQoJ2V2T2J0ZW1SZWdpc3RyYURhZG9zR2VuZXJpY29zJywgeyBkZXRhaWw6IHsgc3RhdHVzOiBtZW5zYWdlbS5zdGF0dXMsIGRhdGE6IG1lbnNhZ2VtLm9iamV0byB9fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRpcG9NZW5zYWdlbUFQSS5SRUdJU1RSQV9VTFRJTUFfUEFHSU5BX0FDRVNTQURBOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZPYnRlbVJlZ2lzdHJhVWx0aW1hUGFnaW5hQWNlc3NhZGEnLCB7IGRldGFpbDogeyBzdGF0dXM6IG1lbnNhZ2VtLnN0YXR1cywgZGF0YTogbWVuc2FnZW0ub2JqZXRvIH19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGlwb01lbnNhZ2VtQVBJLlJFR0lTVFJBX1BPUkNFTlRBR0VNX0NPTkNMVVNBT19VTklEQURFOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZSZWdpc3RyYVBvcmNlbnRhZ2VtQ29uY2x1c2FvVW5pZGFkZScsIHsgZGV0YWlsOiB7IHN0YXR1czogbWVuc2FnZW0uc3RhdHVzLCBkYXRhOiBtZW5zYWdlbS5vYmpldG8gfX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUaXBvTWVuc2FnZW1BUEkuUkVHSVNUUkFfUkVTUE9TVEFfQVRJVklEQURFOlxuICAgICAgICAgICAgICAgIGV2ZW50ID0gIG5ldyBDdXN0b21FdmVudCgnZXZSZWdpc3RyYVJlc3Bvc3RhQXRpdmlkYWRlJywgeyBkZXRhaWw6IHsgc3RhdHVzOiBtZW5zYWdlbS5zdGF0dXMsIGRhdGE6IG1lbnNhZ2VtLm9iamV0byB9fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGFyYSBldmVudG8gZGUgcmV0b3Jub1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9wb3N0LW1lc3NhZ2UtYXBpLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==