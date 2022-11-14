var quiz = {
	"JS": [
		{
			"id": 1,
			"pergunta": "Muitas pessoas ainda optam por repetir o uso da mesma senha em vários serviços. Caso essa senha seja considerada forte, essas pessoas nunca terão problemas de segurança.",
			"opcoes": [
				{
					"a": "Verdadeiro",
					"b": "Falso"
				}
			],
			"resposta": "Falso",
			"pontuacao": 0,
			"status": ""
		},
		{
			"id": 2,
			"pergunta": "Em ataques de força bruta, invasão independerá do tamanho e da complexidade da senha, pois os criminosos sempre conseguirão identificar a senha em suas investidas.",
			"opcoes": [
				{
					"a": "Verdadeiro",
					"b": "Falso"
				}
			],
			"resposta": "Falso",
			"pontuacao": 0,
			"status": ""
		},
		{
			"id": 3,
			"pergunta": "Pergunta 3",
			"opcoes": [
				{
					"a": "Verdadeiro",
					"b": "Falso"
				}
			],
			"resposta": "Verdadeiro",
			"pontuacao": 0,
			"status": ""
		},
		
	]
}

var quizInfoSec = function () {

	this.pontuacao = 0;
	this.numeroQuestao = 1;
	this.questaoAtual = 0;
	var totalQuestoes = quiz.JS.length;

	this.mostrarQuiz = function (numeroQuestao) {
		this.questaoAtual = numeroQuestao;
		if (this.questaoAtual < totalQuestoes) {
			$("#total-questoes").html(totalQuestoes);
			$("#anterior").attr("disabled", false);
			$("#proxima").attr("disabled", false);
			$("#id-questao").html(quiz.JS[this.questaoAtual].id + ')');


			$("#pergunta").html(quiz.JS[this.questaoAtual].pergunta);
			$("#pergunta-opcoes").html("");
			for (var key in quiz.JS[this.questaoAtual].opcoes[0]) {
				if (quiz.JS[this.questaoAtual].opcoes[0].hasOwnProperty(key)) {

					$("#pergunta-opcoes").append(
						"<div class='form-check caixa-opcoes'>" +
						"<label class='form-check-label'>" +
						"<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + quiz.JS[this.questaoAtual].opcoes[0][key] + "'><span id='optionval'>" +
						quiz.JS[this.questaoAtual].opcoes[0][key] +
						"</span></label>"
					);
				}
			}
		}
		if (this.questaoAtual <= 0) {
			$("#anterior").attr("disabled", true);
		}
		if (this.questaoAtual >= totalQuestoes) {
			$('#proxima').attr('disabled', true);
			for (var i = 0; i < totalQuestoes; i++) {
				this.pontuacao = this.pontuacao + quiz.JS[i].pontuacao;
			}
			return this.mostrarResultado(this.pontuacao);
		}
	}

	this.mostrarResultado = function (acertos) {
		$("#resultado").addClass('resultado');
		$("#resultado").html("<h2 class='linha-cabecalho'>Respostas corretas: " + acertos + ' de ' + totalQuestoes + "</h2>");
		for (var contador = 0; contador < totalQuestoes; contador++) {
			var res;
			if (quiz.JS[contador].pontuacao == 0) {
				res = '</span><i class="resposta-errada">Errou</i>';
			} else {
				res ='</span><i class="resposta-correta">Acertou</i>';
			}
			$("#resultado").append(
				'<div class="resultado-pergunta"><span><b>Pergunta ' + quiz.JS[contador].id + ': </b>' + '</span> &nbsp;' + quiz.JS[contador].pergunta + '</div>' +
				'<div><b>Gabarito: </b>' + quiz.JS[contador].resposta + '&nbsp;&nbsp;&nbsp;' + '( ' + res + ' )' + '</div>' +
				'<div class="linha-separadora">' + '</div>'
			);
		}
	}

	this.verificarResposta = function (option) {
		// var resposta = quiz.JS[this.questaoAtual].resposta;
		// option = option.replace(/\</g, "&lt;")   //for <
		// option = option.replace(/\>/g, "&gt;")   //for >
		// option = option.replace(/"/g, "&quot;")

		if (option == quiz.JS[this.questaoAtual].resposta) {
			if (quiz.JS[this.questaoAtual].pontuacao == "") {
				quiz.JS[this.questaoAtual].pontuacao = 1;
				quiz.JS[this.questaoAtual].status = "certa";
			}
		} else {
			quiz.JS[this.questaoAtual].status = "errada";
		}
	}

	this.mudarPergunta = function (numeroQuestao) {
		this.questaoAtual = this.questaoAtual + numeroQuestao;
		this.mostrarQuiz(this.questaoAtual);
	}
}


var jsq = new quizInfoSec();

var opcaoSelecionada;
$(document).ready(function () {
	jsq.mostrarQuiz(0);

	$('#pergunta-opcoes').on('change', 'input[type=radio][name=option]', function (e) {

		$(this).prop("checked", true);
		opcaoSelecionada = $(this).val();
	});
});




$('#proxima').click(function (e) {
	e.preventDefault();
	if (opcaoSelecionada) {
		jsq.verificarResposta(opcaoSelecionada);
	}
	jsq.mudarPergunta(1);
});

$('#anterior').click(function (e) {
	e.preventDefault();
	if (opcaoSelecionada) {
		jsq.verificarResposta(opcaoSelecionada);
	}
	jsq.mudarPergunta(-1);
});