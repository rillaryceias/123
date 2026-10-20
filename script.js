const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat capaz de responder praticamente qualquer dúvida, além de gerar imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "😨 Isso é assustador!",
                afirmacao: "Você percebe que uma tecnologia tão poderosa também pode trazer riscos e decide observar seus impactos com cuidado."
            },
            {
                texto: "🤩 Isso é maravilhoso!",
                afirmacao: "Você fica impressionado com as possibilidades da IA e começa a imaginar como ela pode transformar o futuro."
            }
        ]
    },

    {
        enunciado: "Uma professora decide fazer uma sequência de aulas sobre Inteligência Artificial. No fim de uma aula, ela pede que você faça um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "🤖 Usar IA para ajudar na pesquisa e entender melhor o assunto.",
                afirmacao: "Você utiliza a IA como ferramenta de apoio, mas procura compreender as informações e desenvolver seu próprio conhecimento."
            },
            {
                texto: "📚 Fazer pesquisas por conta própria e usar seus próprios conhecimentos.",
                afirmacao: "Você prefere pesquisar em diferentes fontes, comparar informações e construir suas próprias ideias."
            }
        ]
    },

    {
        enunciado: "Durante um debate, a turma começa a discutir como a IA pode transformar os empregos do futuro. Qual é a sua posição?",
        alternativas: [
            {
                texto: "🛡️ Precisamos proteger os trabalhadores que podem perder seus empregos.",
                afirmacao: "Você acredita que o avanço da IA deve ser acompanhado de medidas para proteger e preparar os trabalhadores."
            },
            {
                texto: "🚀 A IA pode criar novas oportunidades de trabalho.",
                afirmacao: "Você acredita que a IA pode transformar o mercado de trabalho e criar novas oportunidades para quem souber utilizá-la."
            }
        ]
    },

    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem que represente sua opinião sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "🎨 Criar a imagem manualmente usando uma ferramenta de desenho.",
                afirmacao: "Você decide criar a imagem manualmente, valorizando sua própria criatividade e habilidades artísticas."
            },
            {
                texto: "✨ Utilizar um gerador de imagens de IA.",
                afirmacao: "Você utiliza a IA como ferramenta criativa para experimentar novas formas de expressão."
            }
        ]
    },

    {
        enunciado: "Seu grupo tem um trabalho de biologia para entregar. Um colega usa IA para fazê-lo, mas entrega exatamente o texto produzido pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "🔎 Revisar o conteúdo, verificar erros e acrescentar as ideias do grupo.",
                afirmacao: "Você decide revisar o conteúdo, corrigir possíveis erros e acrescentar as ideias e conhecimentos do grupo."
            },
            {
                texto: "⚡ Entregar o texto da IA, já que alguém escreveu os comandos.",
                afirmacao: "Você considera que utilizar o texto produzido pela IA pode ser suficiente, desde que alguém tenha elaborado os comandos."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.innerHTML = `
        <div>
            <small>
                PERGUNTA ${atual + 1} DE ${perguntas.length}
            </small>
            <br><br>
            ${perguntaAtual.enunciado}
        </div>
    `;

    caixaAlternativas.innerHTML = "";

    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.innerHTML = `
        <div>
            <small>ANO 2049</small>
            <h2>Seu futuro foi definido...</h2>
        </div>
    `;

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

botaoJogarNovamente.addEventListener("click", jogaNovamente);

mostraPergunta();