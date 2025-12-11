const questions = [ 
  { text: "Você reage com intensidade quando algo te irrita?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você sente emoções fortes e rápidas (positivas ou negativas)?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você toma decisões rapidamente, mesmo sob pressão?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Quando está frustrado, é difícil esconder?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você detesta sentir que não tem controle sobre uma situação?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você se impacienta quando as pessoas são lentas?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você gosta de desafios difíceis, mesmo que envolvam risco?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você se irrita com erros bobos, seus ou dos outros?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Quando algo dá errado, você reage antes de pensar?", type: "colerico", dim: "Reatividade (COLÉRICO)" },
  { text: "Você prefere agir antes de planejar detalhes?", type: "colerico", dim: "Reatividade (COLÉRICO)" },

  { text: "Você se sente energizado ao estar com pessoas?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você inicia conversas facilmente, mesmo com desconhecidos?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você prefere atividades dinâmicas a rotinas repetitivas?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você tem facilidade para improvisar em situações inesperadas?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você perde o interesse rapidamente quando algo é monótono?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você toma decisões pela empolgação do momento?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você gosta de ambientes movimentados e cheios de estímulos?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você começa muitos projetos, mesmo sem terminar todos?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você percebe que fala mais do que ouve nas conversas?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },
  { text: "Você aprende melhor fazendo do que apenas estudando teoria?", type: "sanguineo", dim: "Sociabilidade (SANGUÍNEO)" },

  { text: "Você sente medo de errar antes de iniciar tarefas importantes?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você prefere pensar antes de agir na maior parte das situações?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você analisa profundamente as decisões que toma?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você percebe detalhes que a maioria das pessoas não nota?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você se sente emocionalmente afetado por críticas?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você gosta de organização, padrões e lógica?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você revisa o seu trabalho mais de uma vez antes de entregar?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Mudanças repentinas normalmente te incomodam?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você demora para confiar totalmente em alguém?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },
  { text: "Você prefere trabalhos que exigem concentração profunda?", type: "melancolico", dim: "Análise (MELANCÓLICO)" },

  { text: "Você prefere ambientes calmos a ambientes barulhentos?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você evita conflitos sempre que possível?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você costuma pensar bem antes de responder algo importante?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você raramente explode emocionalmente?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Tarefas repetitivas não te incomodam muito?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você é visto como uma pessoa tranquila e estável?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você prefere manter hábitos a mudar constantemente?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você raramente toma decisões impulsivas?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Você tende a evitar riscos, mesmo quando parecem vantajosos?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" },
  { text: "Seu ritmo de trabalho e de vida costuma ser constante, sem muitos extremos?", type: "fleumatico", dim: "Estabilidade (FLEUMÁTICO)" }
];

const state = {
  currentIndex: 0,
  scores: {
    colerico: 0,
    sanguineo: 0,
    melancolico: 0,
    fleumatico: 0
  }
};

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionIndexEl = document.getElementById("question-index");
const dimensionLabelEl = document.getElementById("dimension-label");
const progressFill = document.getElementById("progress-fill");
const questionTextEl = document.getElementById("question-text");
const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");

const scoreColerico = document.getElementById("score-colerico");
const scoreSanguineo = document.getElementById("score-sanguineo");
const scoreMelancolico = document.getElementById("score-melancolico");
const scoreFleumatico = document.getElementById("score-fleumatico");
const dominantTypeEl = document.getElementById("dominant-type");
const secondaryTypeEl = document.getElementById("secondary-type");
const interpretationTextEl = document.getElementById("interpretation-text");
const btnRefazer = document.getElementById("btn-refazer");

btnSim.addEventListener("click", () => handleAnswer(true));
btnNao.addEventListener("click", () => handleAnswer(false));
btnRefazer.addEventListener("click", resetQuiz);

function renderQuestion() {
  const q = questions[state.currentIndex];

  // contador de perguntas
  questionIndexEl.textContent = `Pergunta ${state.currentIndex + 1} de ${questions.length}`;

  // frase fixa pedida
  dimensionLabelEl.textContent = 'Resultado Após a Última Resposta';

  // texto da pergunta
  questionTextEl.textContent = q.text;

  // barra de progresso
  const progress = (state.currentIndex / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function handleAnswer(isYes) {
  const q = questions[state.currentIndex];
  if (isYes) {
    state.scores[q.type] += 1;
  }

  if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  progressFill.style.width = "100%";
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  scoreColerico.textContent = state.scores.colerico;
  scoreSanguineo.textContent = state.scores.sanguineo;
  scoreMelancolico.textContent = state.scores.melancolico;
  scoreFleumatico.textContent = state.scores.fleumatico;

  const map = {
    colerico: "COLÉRICO",
    sanguineo: "SANGUÍNEO",
    melancolico: "MELANCÓLICO",
    fleumatico: "FLEUMÁTICO"
  };

  const arr = [
    { key: "colerico", val: state.scores.colerico },
    { key: "sanguineo", val: state.scores.sanguineo },
    { key: "melancolico", val: state.scores.melancolico },
    { key: "fleumatico", val: state.scores.fleumatico }
  ].sort((a, b) => b.val - a.val);

  if (arr[0].val === 0) {
    dominantTypeEl.textContent = "INDEFINIDO";
    secondaryTypeEl.textContent = "–";
    interpretationTextEl.textContent =
      "Nenhuma resposta afirmativa foi registrada. Refaça o teste respondendo com sinceridade às 40 perguntas para obter um mapa de temperamentos confiável.";
    return;
  }

  const dominante = arr[0];
  const secundario = arr[1];

  dominantTypeEl.textContent = map[dominante.key];
  secondaryTypeEl.textContent = secundario.val > 0 ? map[secundario.key] : "Nenhum secundário claro";

  interpretationTextEl.textContent = buildInterpretation(dominante.key);
}

function buildInterpretation(key) {
  switch (key) {
    case "colerico":
      return "Predomínio COLÉRICO: você tende a reagir com intensidade, agir com rapidez e buscar resultados concretos. É um perfil de liderança, iniciativa e energia alta. O ponto de atenção é aprender a modular a força da reação, desenvolver mais escuta e empatia, e perceber que nem sempre a melhor resposta é a mais rápida.";
    case "sanguineo":
      return "Predomínio SANGUÍNEO: você tende a ser comunicativo, adaptável, intuitivo e voltado para pessoas e experiências. Traz leveza, entusiasmo e criatividade para os ambientes. O ponto de atenção é criar sistemas de foco, organização e continuidade, para que sua energia não se disperse em muitos começos sem conclusão.";
    case "melancolico":
      return "Predomínio MELANCÓLICO: você tende a ser analítico, profundo, sensível e atento aos detalhes. Busca coerência, sentido e qualidade em tudo que faz. O ponto de atenção é cuidar para que o perfeccionismo e a autocrítica não travem a ação. Avançar passo a passo, mesmo com incerteza, é parte essencial do seu desenvolvimento.";
    case "fleumatico":
      return "Predomínio FLEUMÁTICO: você tende a ser estável, calmo, paciente e confiável. Gosta de harmonia e evita conflitos desnecessários, sustentando processos no longo prazo. O ponto de atenção é não confundir paz com fuga de decisão. Assumir mais protagonismo em momentos-chave pode ampliar muito seus resultados e sua sensação de potência.";
    default:
      return "";
  }
}

function resetQuiz() {
  state.currentIndex = 0;
  state.scores = {
    colerico: 0,
    sanguineo: 0,
    melancolico: 0,
    fleumatico: 0
  };
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
  renderQuestion();
}

renderQuestion();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
