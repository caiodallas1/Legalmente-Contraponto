import { Question } from '../../types';

export const contemporaryTechQuestions: Question[] = [
  // --- TECNOLOGIA E DIREITO (16) ---
  {
    id: 'TECH-01',
    category: 'Tecnologia e Direito',
    question: 'Uma decisão judicial elaborada por inteligência artificial pode satisfazer o dever constitucional de fundamentação?',
    complexity: 'Avançado',
    keywords: ['inteligência artificial judicial', 'artigo 93 IX CF', 'opacidade algorítmica', 'dever de fundamentação'],
    context: 'A expansão de ferramentas de IA generativa em gabinetes de juízes e relatores para redigir minutas de votos e sentenças de mérito com base em comandos textuais breves.',
    investigationPaths: [
      'O art. 93, IX da CF/88 que impõe a nulidade de decisões desprovidas de fundamentação autêntica',
      'O problema da "caixa preta" (black box) e a impossibilidade de auditar o raciocínio indutivo de grandes modelos de linguagem',
      'A Resolução 332/2020 do Conselho Nacional de Justiça sobre o uso de inteligência artificial no Judiciário'
    ],
    counterpoint: 'Se a fundamentação gerada pela IA for lida, validada e assinada por um magistrado togado competente, o que importa quem datilografou as palavras?'
  },
  {
    id: 'TECH-02',
    category: 'Tecnologia e Direito',
    question: 'As plataformas digitais devem ser responsabilizadas civilmente pelos conteúdos publicados por seus usuários?',
    complexity: 'Avançado',
    keywords: ['artigo 19 Marco Civil', 'Tema 987 STF', 'responsabilidade de provedores', 'liberdade de expressão'],
    context: 'O julgamento conjunto dos Temas 987 e 533 pelo STF sobre a constitucionalidade do art. 19 do Marco Civil da Internet, que exige ordem judicial prévia para responsabilizar plataformas.',
    investigationPaths: [
      'A doutrina da Seção 230 da Lei de Decência nas Comunicações dos Estados Unidos e o modelo europeu da DSA (Digital Services Act)',
      'O incentivo econômico perverso dos algoritmos que monetizam o engajamento através de mentiras, agressões e teorias da conspiração',
      'O risco de censura privada em massa preventiva se as plataformas passarem a ser processadas financeiramente por qualquer postagem'
    ],
    counterpoint: 'Sem a exigência de ordem judicial, as Big Techs virarão os tribunais supremos da Terra, apagando postagens e banindo opiniões sem contraditório.'
  },
  {
    id: 'TECH-03',
    category: 'Tecnologia e Direito',
    question: 'Obras de arte e textos criados exclusivamente por IA generativa podem ser protegidos por direitos autorais?',
    complexity: 'Intermediário',
    keywords: ['propriedade intelectual', 'IA generativa', 'Lei 9.610/98', 'originalidade'],
    context: 'A exigência expressa do art. 7º da Lei de Direitos Autorais brasileira de que a obra intelectual protegida deve ser criação do espírito humano.',
    investigationPaths: [
      'A decisão do US Copyright Office no caso do quadrinho "Zarya of the Dawn" negando copyright a imagens geradas pelo Midjourney',
      'O esforço humano no refinamento de "prompts" de comando complexos versus a execução autônoma da máquina',
      'A remuneração dos artistas e autores originais cujas obras foram utilizadas no treinamento sem autorização (web scraping)'
    ],
    counterpoint: 'Se uma empresa investe milhões de dólares e meses de trabalho refinando algoritmos para gerar uma trilha sonora espetacular, deixar a obra em domínio público não desestimula a inovação?'
  },
  {
    id: 'TECH-04',
    category: 'Tecnologia e Direito',
    question: 'O uso de reconhecimento facial em espaços públicos deve ser banido para prevenir a vigilância em massa distópica?',
    complexity: 'Avançado',
    keywords: ['reconhecimento facial', 'vigilância em massa', 'viés racial', 'espaço público'],
    context: 'A instalação de câmeras de biometria facial pelas polícias e governos para prender foragidos em ruas, estações de metrô e estádios de futebol.',
    investigationPaths: [
      'O Regulamento Europeu de Inteligência Artificial (AI Act) que classificou a biometria remota em espaços públicos como risco inaceitável com raras exceções',
      'A alta incidência de falsos positivos que levaram cidadãos negros e periféricos inocentes à prisão injusta no Brasil',
      'O efeito inibidor do exercício do direito de reunião e manifestação pública livre quando todos são monitorados'
    ],
    counterpoint: 'Banir câmeras inteligentes que permitem identificar e prender assassinos e estupradores foragidos em segundos não é jogar fora a melhor ferramenta de segurança pública?'
  },
  {
    id: 'TECH-05',
    category: 'Tecnologia e Direito',
    question: 'A criptografia de ponta a ponta em aplicativos de mensagens pode ser quebrada por ordem judicial?',
    complexity: 'Avançado',
    keywords: ['criptografia ponta a ponta', 'backdoor', 'ADPF 403', 'privacidade digital'],
    context: 'O julgamento das ADIs no STF (ADI 5527 e ADPF 403) sobre o bloqueio nacional do WhatsApp e a exigência de criação de portas dos fundos (backdoors) para investigações policiais.',
    investigationPaths: [
      'A impossibilidade matemática de criar uma porta de acesso para a polícia que não seja imediatamente descoberta e explorada por hackers criminosos e ditaduras',
      'O direito à privacidade e ao sigilo das comunicações (art. 5º, XII, CF) no mundo digital',
      'A investigação de pedofilia e terrorismo quando os criminosos utilizam canais imunes à interceptação'
    ],
    counterpoint: 'O direito de um cidadão honesto ter suas mensagens bancárias e familiares criptografadas deve ser sacrificado porque criminosos também usam a mesma tecnologia?'
  },
  {
    id: 'TECH-06',
    category: 'Tecnologia e Direito',
    question: 'Quem deve responder civilmente pelos acidentes fatais causados por veículos autônomos sem motorista humano?',
    complexity: 'Avançado',
    keywords: ['veículos autônomos', 'responsabilidade pelo fato do produto', 'defeito de software', 'dilema moral'],
    context: 'A transferência do controle do trânsito de motoristas humanos para algoritmos de direção e sensores LiDAR e a definição da cadeia de responsabilidade civil.',
    investigationPaths: [
      'A responsabilidade objetiva do fabricante pelo fato do produto (art. 12 do Código de Defesa do Consumidor)',
      'A programação moral do veículo em caso de colisão inevitável: salvar o passageiro interno ou os pedestres na faixa?',
      'A necessidade de criação de seguros obrigatórios compulsórios para frotas autônomas'
    ],
    counterpoint: 'Se carros autônomos erram 90% menos do que motoristas humanos embriagados e distraídos no celular, responsabilizar agressivamente as montadoras não retardará essa tecnologia que salvará vidas?'
  },
  {
    id: 'TECH-07',
    category: 'Tecnologia e Direito',
    question: 'As criptomoedas e finanças descentralizadas (DeFi) superam o monopólio estatal da moeda ou servem para lavagem de dinheiro?',
    complexity: 'Intermediário',
    keywords: ['criptoativos', 'Bitcoin', 'Marco Legal das Criptomoedas', 'Lei 14.478/2022'],
    context: 'A ascensão de moedas digitais sem controle de bancos centrais nacionais e a tensão entre soberania monetária, liberdade financeira e crimes de colarinho branco.',
    investigationPaths: [
      'O Marco Legal dos Criptoativos no Brasil (Lei 14.478/2022) e a fiscalização delegada ao Banco Central e à CVM',
      'A proteção patrimonial contra a inflação e confiscos estatais autoritários (como na Venezuela ou na Rússia)',
      'O uso de exchanges estrangeiras e mixers para evasão de divisas e pagamento de resgates por hackers'
    ],
    counterpoint: 'O dinheiro de papel em espécie sempre foi o meio mais utilizado por corruptos para pagar malas de propina; por que culpar o Bitcoin pela lavagem de dinheiro?'
  },
  {
    id: 'TECH-08',
    category: 'Tecnologia e Direito',
    question: 'O treinamento de modelos de linguagem de inteligência artificial com dados públicos da internet viola a LGPD e os direitos autorais?',
    complexity: 'Avançado',
    keywords: ['IA training', 'web scraping', 'fair use', 'LGPD'],
    context: 'Processos judiciais milionários de jornais, gravadoras e autores de livros contra OpenAI, Anthropic e Google por utilizarem seus conteúdos protegidos para treinar modelos sem pagar royalties.',
    investigationPaths: [
      'A doutrina do "Fair Use" (uso justo) do direito norte-americano e sua inaplicabilidade automática ao sistema de direito de autor brasileiro',
      'A base legal do legítimo interesse ou consentimento na LGPD para raspagem de dados pessoais abertos na web',
      'O conceito de mineração de textos e dados (TDM) nas propostas do Marco Legal da IA no Brasil (PL 2338/2023)'
    ],
    counterpoint: 'Assim como um estudante humano lê milhares de livros para aprender a escrever sem pagar royalties a cada frase que formula, a IA não está apenas aprendendo padrões?'
  },
  {
    id: 'TECH-09',
    category: 'Tecnologia e Direito',
    question: 'Os termos de uso e políticas de privacidade das redes sociais são contratos de adesão nulos por violação do consentimento informado?',
    complexity: 'Intermediário',
    keywords: ['contrato de adesão', 'consentimento informado', 'LGPD', 'dark patterns'],
    context: 'Documentos quilométricos de mais de 80 páginas em letras minúsculas redigidos por advogados corporativos que nenhum usuário comum jamais lê antes de clicar em "Aceito".',
    investigationPaths: [
      'O art. 8º da LGPD exigindo que o consentimento seja livre, informado e inequívoco',
      'O conceito de "Dark Patterns" (design enganoso projetado para manipular a escolha do internauta)',
      'A nulidade de pleno direito de cláusulas abusivas que retiram direitos fundamentais no Código de Defesa do Consumidor'
    ],
    counterpoint: 'Se o serviço é oferecido gratuitamente e a pessoa pode simplesmente não usar a rede social, forçar o usuário a ler tratados jurídicos antes de postar uma foto não é surreal?'
  },
  {
    id: 'TECH-10',
    category: 'Tecnologia e Direito',
    question: 'A inteligência artificial que elabora perfis de crédito e concede empréstimos bancários deve ser obrigada a explicar o algoritmo?',
    complexity: 'Intermediário',
    keywords: ['explicabilidade da IA', 'artigo 20 LGPD', 'decisões automatizadas', 'score bancário'],
    context: 'A prerrogativa do titular dos dados de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de seus dados pessoais.',
    investigationPaths: [
      'A polêmica alteração do art. 20 da LGPD que retirou a obrigatoriedade original de que a revisão fosse feita por pessoa natural humana',
      'A proteção de segredos industriais e comerciais alegada pelas fintechs para ocultar o peso das variáveis matemáticas',
      'A jurisprudência do STJ sobre a legalidade dos sistemas de "Credit Scoring" desde que com fontes claras'
    ],
    counterpoint: 'Obrigar uma startup a entregar o código-fonte secreto de seu algoritmo para qualquer cliente inadimplente destruiria a propriedade intelectual da empresa.'
  },
  {
    id: 'TECH-11',
    category: 'Tecnologia e Direito',
    question: 'O poder de mercado das Big Techs exige uma regulação antitruste específica diferente da análise econômica concorrencial tradicional?',
    complexity: 'Avançado',
    keywords: ['antitruste digital', 'efeito de rede', 'assassinato de startups', 'CADE'],
    context: 'A incapacidade das regras tradicionais do CADE de conter gigantes que compram concorrentes emergentes ainda embrionários (Killer Acquisitions) e praticam autosserviço predatório.',
    investigationPaths: [
      'A Lei de Mercados Digitais da União Europeia (Digital Markets Act - DMA) e o conceito de "Gatekeepers"',
      'Os efeitos de rede diretos e indiretos que tornam o vencedor do mercado virtual praticamente imbatível',
      'O debate sobre a gratuidade dos serviços digitais: a ausência de preço monetário cobrado do consumidor afasta a caracterização de monopólio lesivo?'
    ],
    counterpoint: 'Se os consumidores adoram os serviços integrados das Big Techs e não pagam nada por eles, usar o Estado para punir o sucesso e desmembrar empresas não prejudica o público?'
  },
  {
    id: 'TECH-12',
    category: 'Tecnologia e Direito',
    question: 'A criação de avatares digitais hiper-realistas de pessoas falecidas por IA viola os direitos da personalidade post mortem?',
    complexity: 'Intermediário',
    keywords: ['direitos da personalidade', 'clone digital', 'Elis Regina comercial', 'imagem post mortem'],
    context: 'O caso da publicidade da Volkswagen recriando digitalmente a cantora Elis Regina cantando ao lado da filha viva e a controvérsia sobre a autorização de herdeiros versus a vontade da pessoa morta.',
    investigationPaths: [
      'O art. 12, parágrafo único do Código Civil que legitima cônjuges e herdeiros a pleitear perdas e danos por ofensa ao falecido',
      'O direito de ter sua memória histórica preservada de modo autêntico contra manipulações publicitárias póstumas',
      'O testamento digital e as diretrizes antecipadas sobre a reconstituição da própria imagem e voz por inteligência artificial'
    ],
    counterpoint: 'Se a família mais íntima da artista autorizou expressamente e o público se emocionou com a homenagem, quem mais teria legitimidade moral para vetar a criação?'
  },
  {
    id: 'TECH-13',
    category: 'Tecnologia e Direito',
    question: 'Os contratos inteligentes (smart contracts) baseados em blockchain podem substituir os advogados e o Poder Judiciário?',
    complexity: 'Avançado',
    keywords: ['smart contracts', 'blockchain', 'execução automática', 'teoria contratual'],
    context: 'Protocolos de computador autoexecutáveis inscritos em código criptográfico que liberam pagamentos ou transferências patrimoniais automaticamente assim que uma condição é cumprida.',
    investigationPaths: [
      'A máxima "Code is Law" formulada por Lawrence Lessig e suas limitações pragmáticas',
      'A incapacidade de algoritmos entenderem conceitos jurídicos abertos como caso fortuito, força maior, onerosidade excessiva ou boa-fé',
      'A imutabilidade da blockchain: se houver um erro no código, a execução patrimonial não pode ser estornada por liminar judicial comum'
    ],
    counterpoint: 'Em operações financeiras rotineiras e seguras, eliminar burocracias de cartórios e juizados não economizaria bilhões de reais para a sociedade?'
  },
  {
    id: 'TECH-14',
    category: 'Tecnologia e Direito',
    question: 'A exigência de verificação etária estrita em sites de conteúdo adulto viola a privacidade e o anonimato de adultos legítimos?',
    complexity: 'Intermediário',
    keywords: ['proteção da infância', 'verificação de idade', 'privacidade na internet', 'ECA'],
    context: 'Propostas legislativas globais e estaduais que obrigam plataformas a exigir envio de documento com foto ou biometria facial de qualquer pessoa que queira acessar pornografia online.',
    investigationPaths: [
      'O dever prioritário do Estado e das famílias de proteger crianças e adolescentes do acesso precoce a pornografia e violência extrema (art. 227 da CF)',
      'O risco intolerável de vazamento de bancos de dados contendo fotos de documentos civis e o histórico de navegação íntima de milhões de adultos',
      'A facilidade com que adolescentes contornam tais barreiras com o uso trivial de conexões VPN'
    ],
    counterpoint: 'Diante de crianças de 8 anos acessando pornografia pesada em smartphones, não exigir documento por receio de "incomodar adultos" é covardia social imperdoável.'
  },
  {
    id: 'TECH-15',
    category: 'Tecnologia e Direito',
    question: 'A criação de um Real Digital (Drex) com capacidade de bloqueio programado pelo Banco Central ameaça a liberdade individual?',
    complexity: 'Intermediário',
    keywords: ['Drex', 'CBDC', 'Real Digital', 'programabilidade da moeda'],
    context: 'A emissão de uma Moeda Digital do Banco Central (CBDC) brasileira que permite a liquidação inteligente de contratos, mas confere ao Estado o poder de rastrear e congelar saldos em nanossegundos.',
    investigationPaths: [
      'A segurança jurídica de transações simultâneas de compra e venda de carros e imóveis sem intermediação cara de despachantes e cartórios',
      'O risco de vigilância financeira absoluta e uso de moedas programadas para proibir a compra de certos bens por cidadãos punidos administrativamente',
      'A privacidade financeira versus o combate decisivo à lavagem de dinheiro, milícias e narcotráfico'
    ],
    counterpoint: 'O dinheiro de papel não permite a anônima corrupção que alimenta crimes atrozes; digitalizar a moeda não é o único meio de sanear a República?'
  },
  {
    id: 'TECH-16',
    category: 'Tecnologia e Direito',
    question: 'A clonagem de voz por inteligência artificial para fraudes bancárias exige a inversão do ônus probatório em favor do correntista?',
    complexity: 'Intermediário',
    keywords: ['deepfake de áudio', 'golpes com IA', 'segurança bancária', 'Súmula 479 STJ'],
    context: 'A proliferação de fraudes com vozes sintéticas perfeitas de filhos ou gerentes enganando clientes para realizar transferências Pix imediatas.',
    investigationPaths: [
      'A Súmula 479 do STJ que impõe responsabilidade objetiva às instituições financeiras por fraudes praticadas por terceiros no âmbito de operações bancárias',
      'A culpa exclusiva da vítima ou de terceiro como excludente do nexo causal (art. 14, § 3º do CDC)',
      'A exigência de que os bancos adotem biometrias comportamentais avançadas que detectem o estresse ou anomalias de transação'
    ],
    counterpoint: 'Se o próprio cliente foi quem conscientemente abriu o aplicativo e digitou a senha pessoal após ouvir um áudio fraudulento, por que o banco arcaria com o prejuízo?'
  },

  // --- ECONOMIA E DIREITO (15) ---
  {
    id: 'ECON-01',
    category: 'Economia e Direito',
    question: 'O Teorema de Coase comprova que o mercado resolve externalidades melhor do que a regulação estatal intervencionista?',
    complexity: 'Avançado',
    keywords: ['Teorema de Coase', 'custos de transação', 'análise econômica do direito', 'Ronald Coase'],
    context: 'A formulação de Ronald Coase demonstrando que, se os custos de transação forem nulos e os direitos de propriedade estiverem bem delimitados, as partes negociarão a solução mais eficiente independentemente da regra jurídica inicial.',
    investigationPaths: [
      'O artigo fundacional "The Problem of Social Cost" (1960) de Ronald Coase',
      'A realidade empírica de custos de transação astronômicos nos litígios brasileiros que inviabilizam negociações privadas sem a intervenção judicial',
      'A eficiência de Kaldor-Hicks e a maximização da riqueza versus o imperativo da justiça distributiva'
    ],
    counterpoint: 'Num mundo real onde litigar custa caro e o pobre não tem poder de barganha contra indústrias poluidoras, confiar no mercado puro não é abandonar as vítimas?'
  },
  {
    id: 'ECON-02',
    category: 'Economia e Direito',
    question: 'O tabelamento de preços de combustíveis e passagens aéreas causa escassez e piora o bem-estar do consumidor?',
    complexity: 'Intermediário',
    keywords: ['controle de preços', 'livre mercado', 'concorrência', 'abuso de poder econômico'],
    context: 'A pressão popular recorrente para que o governo ou os tribunais congelem preços de passagens aéreas ou imponham limites à margem de lucro de postos de gasolina.',
    investigationPaths: [
      'A lei básica da oferta e da procura na microeconomia: tetos de preço geram filas, racionamento e mercado negro',
      'A vedação constitucional ao tabelamento de preços como regra da ordem econômica fundada na livre concorrência (art. 170, IV, CF)',
      'A caracterização estrita de preços predatórios e cartelização fiscalizados pelo CADE'
    ],
    counterpoint: 'Quando quatro distribuidoras ou três companhias aéreas monopolizam um mercado vital e cobram preços extorsivos combinados, a passividade do Estado é conivência.'
  },
  {
    id: 'ECON-03',
    category: 'Economia e Direito',
    question: 'O teto constitucional de gastos públicos preserva a saúde financeira do país ou destrói serviços essenciais?',
    complexity: 'Intermediário',
    keywords: ['teto de gastos', 'novo arcabouço fiscal', 'responsabilidade fiscal', 'austeridade'],
    context: 'A Emenda Constitucional 95/2016 e sua substituição pelo Marco Fiscal (LC 200/2023), impondo limites rígidos ao crescimento real das despesas da União.',
    investigationPaths: [
      'A teoria econômica sobre a sustentabilidade da dívida pública e a atração de investimentos produtivos com taxas de juros baixas',
      'O sufocamento de investimentos históricos em hospitais públicos, saneamento básico e pesquisas científicas universitárias',
      'A rigidez das despesas obrigatórias constitucionais que comprimem o orçamento discricionário a quase zero'
    ],
    counterpoint: 'Um governo que gasta sistematicamente muito mais do que arrecada não termina quebrando o país com inflação galopante que atinge os mais pobres?'
  },
  {
    id: 'ECON-04',
    category: 'Economia e Direito',
    question: 'A teoria do dano eficiente admite que uma empresa descumpra voluntariamente um contrato se pagar a indenização for mais lucrativo?',
    complexity: 'Avançado',
    keywords: ['inadimplemento eficiente', 'efficient breach', 'análise econômica do contrato', 'boa-fé objetiva'],
    context: 'A tese da Escola de Chicago (Richard Posner) sustentando que o devedor deve ter o direito de quebrar o contrato se encontrar um comprador que pague mais, indenizando a outra parte pelas perdas.',
    investigationPaths: [
      'O choque frontal entre o "Efficient Breach" e o princípio da boa-fé objetiva e dos deveres de lealdade no Código Civil',
      'A eficiência alocativa de destinar o produto escasso para quem lhe atribui maior valor econômico imediato',
      'O risco de desmoralização moral dos pactos negociais se o contrato virar uma mera opção de compra'
    ],
    counterpoint: 'Se a parte lesada receberá exatamente cada centavo do que receberia com a execução e a sociedade gerará mais riqueza líquida, por que forçar a entrega física?'
  },
  {
    id: 'ECON-05',
    category: 'Economia e Direito',
    question: 'A recuperação judicial de empresas protege a função social e os empregos ou financia o calote em credores e fornecedores?',
    complexity: 'Intermediário',
    keywords: ['recuperação judicial', 'Lei 11.101/2005', 'preservação da empresa', 'moral hazard'],
    context: 'A concessão de moratórias e deságios de até 80% em dívidas para grandes redes varejistas e agropecuárias em recuperação judicial.',
    investigationPaths: [
      'O princípio da preservação da empresa (art. 47 da Lei 11.101/2005) e a proteção da cadeia de fornecedores e empregos',
      'O risco de "Moral Hazard" (risco moral): empresários tomam riscos irresponsáveis sabendo que poderão se recuperar no Judiciário às custas de credores',
      'A reforma da Lei de Falências pela Lei 14.112/2020 facilitando o financiamento com garantia de ativos (DIP financing)'
    ],
    counterpoint: 'Fechar compulsoriamente uma indústria com dez mil empregados diretos apenas para satisfazer um banco credor seria uma tragédia socioeconômica para a cidade.'
  },
  {
    id: 'ECON-06',
    category: 'Economia e Direito',
    question: 'A concessão de subsídios fiscais para grandes montadoras e indústrias nacionais gera empregos ou enriquece corporações amigas do poder?',
    complexity: 'Intermediário',
    keywords: ['subsídios fiscais', 'renúncia de receita', 'capitalismo de compadrio', 'política industrial'],
    context: 'A concessão de mais de R$ 500 bilhões por ano em desonerações tributárias e juros subsidiados pelo BNDES para setores econômicos seletos.',
    investigationPaths: [
      'A teoria do "capitalismo de compadrio" (crony capitalism) e a proximidade política de empresários com palácios governamentais',
      'A necessidade geopolítica de reindustrialização do país em cadeias produtivas verdes e semicondutores',
      'O art. 14 da Lei de Responsabilidade Fiscal exigindo comprovação de que a renúncia fiscal foi compensada'
    ],
    counterpoint: 'Se outros países dão trilhões de dólares em subsídios para suas montadoras elétricas, o Brasil atrairia fábricas sem oferecer incentivos comparáveis?'
  },
  {
    id: 'ECON-07',
    category: 'Economia e Direito',
    question: 'A intervenção estatal direta no mercado cambial e na cotação do dólar gera distorções ou protege a estabilidade nacional?',
    complexity: 'Intermediário',
    keywords: ['câmbio flutuante', 'reservas internacionais', 'swaps cambiais', 'ataques especulativos'],
    context: 'A queima de bilhões de dólares das reservas internacionais pelo Banco Central para conter altas súbitas da moeda norte-americana.',
    investigationPaths: [
      'O regime de metas para a inflação conjugado com câmbio flutuante sujo adotado desde 1999',
      'O impacto da desvalorização cambial violenta na inflação de alimentos básicos e combustíveis importados',
      'A perda de competitividade das exportações manufaturadas quando o dólar é artificialmente represado pelo governo'
    ],
    counterpoint: 'Deixar o câmbio livremente à mercê de especuladores de Wall Street não destruiria o poder de compra da família brasileira da noite para o dia?'
  },
  {
    id: 'ECON-08',
    category: 'Economia e Direito',
    question: 'A exigência de conteúdo local em compras governamentais estimula a indústria nacional ou encarece as obras do país?',
    complexity: 'Intermediário',
    keywords: ['conteúdo local', 'compras governamentais', 'protecionismo', 'indústria nascente'],
    context: 'A imposição de percentuais mínimos de componentes fabricados no Brasil em plataformas de petróleo e navios contratados pela Petrobras e órgãos públicos.',
    investigationPaths: [
      'A teoria da proteção à indústria nascente de Friedrich List',
      'Os atrasos históricos e orçamentos que triplicaram de preço em estaleiros nacionais desprovidos de capacidade tecnológica instalada',
      'A geração de milhares de postos de trabalho de alta especialização na metalurgia e engenharia brasileira'
    ],
    counterpoint: 'Se a Petrobras comprar tudo mais barato na China e na Coreia, o Brasil continuará eternamente como mero exportador de soja e minério de ferro bruto.'
  },
  {
    id: 'ECON-09',
    category: 'Economia e Direito',
    question: 'O salário mínimo nacional com reajustes reais acima da inflação gera desemprego ou dinamiza o mercado interno de consumo?',
    complexity: 'Intermediário',
    keywords: ['salário mínimo', 'artigo 7º IV CF', 'mercado interno de consumo', 'custo de contratação'],
    context: 'O impacto econômico e fiscal da valorização real do salário mínimo, que reajusta automaticamente benefícios previdenciários e assistenciais (BPC/Loas).',
    investigationPaths: [
      'A tese econômica neoclássica: salários mínimos artificialmente elevados geram expulsão de trabalhadores menos qualificados para a informalidade',
      'A teoria keynesiana: o aumento da renda dos mais pobres tem propensão marginal a consumir altíssima, girando a roda do comércio e da indústria',
      'O impacto bilionário nas contas da Previdência Social que gasta mais R$ 4 bilhões a cada R$ 1 de aumento no salário mínimo'
    ],
    counterpoint: 'Nenhum trabalhador com família consegue viver dignamente com menos de um salário mínimo; rebaixar seu valor é condenar o povo à fome.'
  },
  {
    id: 'ECON-10',
    category: 'Economia e Direito',
    question: 'A taxa de juros do cheque especial e do rotativo do cartão de crédito deve ser limitada por lei ou autorregulada pelo risco?',
    complexity: 'Intermediário',
    keywords: ['limitação de juros', 'rotativo do cartão', 'Lei 14.690/2023', 'spread bancário'],
    context: 'A aprovação da Lei 14.690/2023 (Programa Desenrola Brasil) que fixou o teto de 100% para os juros acumulados do rotativo do cartão de crédito.',
    investigationPaths: [
      'A revogação do antigo teto de 12% ao ano da Constituição e a edição da Súmula Vinculante 7 pelo STF',
      'A taxa astronômica de inadimplência no crédito sem garantias no Brasil versus a concentração do setor bancário em cinco grandes bancos',
      'O risco de redução drástica da oferta de limites de crédito para famílias de menor renda com o teto legal'
    ],
    counterpoint: 'Bancos cobrarem juros de 440% ao ano de famílias vulneráveis não é usura predatória que devia ser barrada pelo Estado?'
  },
  {
    id: 'ECON-11',
    category: 'Economia e Direito',
    question: 'A limitação de lucros e dividendos enviados ao exterior por mineradoras transnacionais atenta contra a atração de capital?',
    complexity: 'Intermediário',
    keywords: ['remessa de lucros', 'investimento estrangeiro direto', 'commodities', 'royalties minerais'],
    context: 'A extração de minérios finitos no Brasil por multinacionais com pagamento de royalties residuais ínfimos (CFEM) e remessa da maior parte dos lucros para acionistas no exterior.',
    investigationPaths: [
      'A Lei 4.131/1962 e o regime jurídico do capital estrangeiro no Brasil',
      'A Compensação Financeira pela Exploração de Recursos Minerais (CFEM) e os danos ambientais perpétuos deixados nas cidades mineradoras',
      'A facilidade com que o capital global migra para a Austrália ou o Canadá caso as regras de remessa sejam enrijecidas'
    ],
    counterpoint: 'Permitir que mineradoras retirem a riqueza natural não renovável do solo brasileiro e levem todo o lucro para fora deixando apenas lama e crateras é colonialismo.'
  },
  {
    id: 'ECON-12',
    category: 'Economia e Direito',
    question: 'A análise de impacto regulatório (AIR) obrigatória paralisa a capacidade estatal de resposta a crises ecológicas e sanitárias?',
    complexity: 'Avançado',
    keywords: ['Análise de Impacto Regulatório', 'AIR', 'Lei da Liberdade Econômica', 'custo-benefício regulatório'],
    context: 'A exigência da Lei 13.874/2019 de elaboração de estudos prévios de impacto econômico detalhados antes da edição de qualquer nova norma ou restrição regulatória.',
    investigationPaths: [
      'O Decreto 10.411/2020 que regulamentou a obrigatoriedade da AIR na administração federal',
      'A prevenção contra normas demagógicas ou casuísticas que asfixiam empreendedores com custos invisíveis de conformidade',
      'A morosidade de meses que a elaboração de estudos complexos impõe a órgãos ambientais e sanitários em casos de emergência'
    ],
    counterpoint: 'Se o governo cria uma regulação que gera um custo bilionário e quebra milhares de pequenos negócios sem sequer fazer uma conta antes, isso é boa gestão pública?'
  },
  {
    id: 'ECON-13',
    category: 'Economia e Direito',
    question: 'A propriedade intelectual de patentes farmacêuticas deve ser compulsoriamente quebrada (licença compulsória) em pandemias globais?',
    complexity: 'Intermediário',
    keywords: ['licença compulsória', 'patentes farmacêuticas', 'artigo 71 Lei 9.279/96', 'quebra de patentes'],
    context: 'O debate na Organização Mundial do Comércio sobre a suspensão dos direitos de patente de vacinas e remédios contra a Covid-19 em favor de países pobres (TRIPS Waiver).',
    investigationPaths: [
      'O art. 71 da Lei de Propriedade Industrial brasileira autorizando a licença compulsória de ofício em casos de emergência nacional',
      'O custo bilionário de pesquisa e desenvolvimento científico suportado pelas indústrias farmacêuticas inovadoras',
      'A tese de que sem quebra de patentes milhões de seres humanos em nações desfavorecidas morrem esperando na fila das doações'
    ],
    counterpoint: 'Se governos quebrarem patentes sempre que houver uma emergência médica, qual laboratório arriscará bilhões para descobrir a próxima cura do câncer?'
  },
  {
    id: 'ECON-14',
    category: 'Economia e Direito',
    question: 'A responsabilidade fiscal das prefeituras é inviabilizada pelos pisos salariais nacionais obrigatórios de professores e enfermeiros?',
    complexity: 'Intermediário',
    keywords: ['piso da enfermagem', 'piso do magistério', 'Lei de Responsabilidade Fiscal', 'autonomia orçamentária'],
    context: 'A aprovação pelo Congresso Nacional de pisos salariais federais unificados para categorias profissionais que devem ser pagos integralmente pelos cofres municipais e estaduais.',
    investigationPaths: [
      'A Emenda Constitucional 124 e 127/2022 sobre o Piso Nacional da Enfermagem e as decisões cautelares do STF',
      'O limite de 54% da receita corrente líquida para despesas com pessoal imposto pela Lei de Responsabilidade Fiscal',
      'A valorização justa e indispensável de categorias essenciais da saúde e da educação historicamente mal remuneradas'
    ],
    counterpoint: 'É muito fácil para parlamentares em Brasília votarem aumentos salariais unânimes para ganhar aplausos e empurrar a conta impagável para os prefeitos do interior.'
  },
  {
    id: 'ECON-15',
    category: 'Economia e Direito',
    question: 'A Teoria Monetária Moderna (MMT) que defende que governos emissores de sua própria moeda não podem quebrar é uma ilusão hiperinflacionária?',
    complexity: 'Avançado',
    keywords: ['Teoria Monetária Moderna', 'MMT', 'déficit fiscal', 'emissão monetária'],
    context: 'A corrente econômica que afirma que países com moeda soberana podem financiar pleno emprego e investimentos sociais sem restrição financeira, sendo a inflação o único limite real de recursos.',
    investigationPaths: [
      'As obras de Stephanie Kelton ("O Mito do Déficit") e a desconstrução da metáfora do governo como orçamento doméstico familiar',
      'A experiência traumática da hiperinflação brasileira dos anos 1980 e o colapso de preços gerado por déficits contínuos',
      'O papel dos impostos como enxugadores de liquidez e reguladores de demanda na visão da MMT'
    ],
    counterpoint: 'Achar que imprimir dinheiro sem limite para financiar gastos estatais não destrói o valor da moeda nacional ignora toda a história econômica da humanidade.'
  },

  // --- QUESTÕES CONTEMPORÂNEAS (15) ---
  {
    id: 'CONTEMP-01',
    category: 'Questões Contemporâneas',
    question: 'A litigância climática contra governos e petroleiras pode obrigar legalmente a redução acelerada de emissões de carbono?',
    complexity: 'Avançado',
    keywords: ['litigância climática', 'Caso Urgenda', 'ADPF 760', 'justiça intergeracional'],
    context: 'A judicialização de ações no Brasil (ADPF 760 e ADO 59) e no mundo (Caso Urgenda na Holanda e Shell) forçando o Estado e corporações a cumprir metas do Acordo de Paris.',
    investigationPaths: [
      'O julgamento histórico da ADPF 760 pelo STF determinando plano efetivo contra o desmatamento na Amazônia',
      'O princípio da proibição do retrocesso ambiental e a proteção das futuras gerações',
      'A queixa de governantes de que planos de transição energética exigem decisões políticas orçamentárias e não ordens judiciais sumárias'
    ],
    counterpoint: 'Se o Executivo e o Legislativo se recusam a conter a catástrofe que tornará o planeta inabitável para nossos netos, quem mais interviria se não a Justiça?'
  },
  {
    id: 'CONTEMP-02',
    category: 'Questões Contemporâneas',
    question: 'A regulamentação do trabalho de crianças e adolescentes influenciadores nas redes sociais protege do abuso ou cerceia carreiras artísticas?',
    complexity: 'Intermediário',
    keywords: ['sharenting', 'criança influenciadora', 'trabalho infantil artístico', 'artigo 227 CF'],
    context: 'Milhões de crianças e bebês transformados por seus próprios pais em garotos-propaganda de marcas no Instagram e TikTok, faturando milhões sem limites de jornada ou proteção psicológica.',
    investigationPaths: [
      'A Convenção 138 da OIT e a exigência de alvará judicial prévio para trabalho infantil artístico',
      'A exposição da intimidade e a quebra de privacidade digital que acompanhará a criança pelo resto da vida adulta',
      'O dever de depósito judicial compulsório de parte dos rendimentos em poupança bloqueada até a maioridade'
    ],
    counterpoint: 'Pais que administram o canal dos filhos com amor e os ajudam a manifestar talentos artísticos legítimos devem ser tratados como exploradores de trabalho infantil?'
  },
  {
    id: 'CONTEMP-03',
    category: 'Questões Contemporâneas',
    question: 'O uso de drogas psicodélicas (psilocibina e ayahuasca) para fins terapêuticos e religiosos deve ser desregulamentado?',
    complexity: 'Intermediário',
    keywords: ['terapia psicodélica', 'psilocibina', 'ayahuasca', 'liberdade religiosa'],
    context: 'A revolução científica no tratamento de depressão severa e estresse pós-traumático com substâncias psicodélicas confrontada com sua inclusão em listas de drogas proibidas.',
    investigationPaths: [
      'A Resolução do CONAD reconhecendo o uso religioso da Ayahuasca no Brasil como patrimônio cultural legítimo',
      'Os ensaios clínicos da FDA norte-americana e da Anvisa aprovando o uso medicinal controlado de psicodélicos',
      'O risco de desvirtuamento mercantil e intoxicações graves sem acompanhamento médico psiquiátrico rigoroso'
    ],
    counterpoint: 'Manter remédios naturais comprovadamente eficazes para salvar pessoas à beira do suicídio na lista de drogas ilegais é crueldade burocrática.'
  },
  {
    id: 'CONTEMP-04',
    category: 'Questões Contemporâneas',
    question: 'A edição genética de embriões humanos com tecnologia CRISPR deve ser terminantemente proibida para evitar uma nova eugenia?',
    complexity: 'Avançado',
    keywords: ['CRISPR-Cas9', 'edição genética', 'bioética', 'bebês sob medida'],
    context: 'A capacidade técnica de modificar o DNA de embriões humanos não apenas para erradicar doenças genéticas mortais, mas para selecionar características físicas e cognitivas ("bebês projetados").',
    investigationPaths: [
      'A Declaração Universal sobre o Genoma Humano e os Direitos Humanos da UNESCO',
      'A Lei de Biossegurança brasileira (Lei 11.105/2005) e a proibição expressa de modificação genética germinativa humana',
      'O abismo social irreparável que se abrirá se famílias ricas puderem pagar para seus filhos nascerem geneticamente imunes e com maior intelecto'
    ],
    counterpoint: 'Se um casal sabe que transmitirá uma mutação genética fatal que fará seu bebê morrer agonizando com 2 anos de idade, por que proibir a cura genética preventiva?'
  },
  {
    id: 'CONTEMP-05',
    category: 'Questões Contemporâneas',
    question: 'A prostituição consentida entre adultos deve ser formalizada como profissão regulamentada com direitos previdenciários?',
    complexity: 'Intermediário',
    keywords: ['trabalho sexual', 'regulamentação da prostituição', 'Projeto Gabriela Leite', 'combate ao lenocínio'],
    context: 'No Brasil a prostituição em si não é crime, mas a manutenção de estabelecimentos e a mediação lucrativa (rufonismo) são punidos no Código Penal, mantendo profissionais na clandestinidade.',
    investigationPaths: [
      'O Projeto de Lei Gabriela Leite e as lutas pela dignidade e proteção policial de trabalhadoras sexuais',
      'A distinção jurídica estrita entre a exploração sexual coercitiva (tráfico humano) e a escolha autônoma de adultos',
      'O debate feminista abolicionista que vê na prostituição a forma máxima de violência patriarcal e comodificação do corpo feminino'
    ],
    counterpoint: 'O Estado formalizar a exploração de corpos como atividade profissional regular chancelaria a degradação e mercantilização da dignidade humana.'
  },
  {
    id: 'CONTEMP-06',
    category: 'Questões Contemporâneas',
    question: 'O cancelamento social virtual e o doxxing configuram linchamento digital que exige responsabilização criminal autônoma?',
    complexity: 'Intermediário',
    keywords: ['cultura do cancelamento', 'doxxing', 'linchamento virtual', 'assédio moral coletivo'],
    context: 'A prática de divulgar dados pessoais, telefones e endereços de alvos na internet, com campanhas de destruição de reputações e demissões sem direito a defesa prévia.',
    investigationPaths: [
      'A inadequação dos tipos penais tradicionais de difamação e injúria para mensurar o dano de milhões de mensagens de ódio coordenadas',
      'A perda de empregos e o suicídio de alvos de linchamentos digitais baseados em fofocas falsas ou trechos fora de contexto',
      'A liberdade de expressão e o boicote de consumidores contra figuras públicas que expressam preconceitos abertos'
    ],
    counterpoint: 'Chamar de "cancelamento" o direito legítimo de cidadãos e consumidores se indignarem e se recusarem a comprar de racistas e homofóbicos não faz sentido.'
  },
  {
    id: 'CONTEMP-07',
    category: 'Questões Contemporâneas',
    question: 'A doação de sangue por homens gays e bissexuais demorou anos para ser liberada no Brasil por preconceito homofóbico do Estado?',
    complexity: 'Intermediário',
    keywords: ['doação de sangue', 'população LGBTQIA+', 'ADI 5543', 'isenção discriminatória'],
    context: 'A histórica decisão do STF na ADI 5543 que declarou inconstitucionais as normas do Ministério da Saúde e da Anvisa que impediam homossexuais masculinos de doar sangue.',
    investigationPaths: [
      'A alegação sanitária do período de "janela imunológica" confrontada com os testes modernos de ácido nucleico (NAT) que detectam o vírus em poucos dias',
      'A discriminação por categoria de risco presumida em vez de comportamento sexual individual de risco',
      'A perda injustificável de dezenas de milhares de bolsas de sangue vitais para hospitais públicos superlotados'
    ],
    counterpoint: 'Agências sanitárias têm o dever de se guiar por probabilidades epidemiológicas estritas para proteger quem recebe a transfusão, sem viés ideológico.'
  },
  {
    id: 'CONTEMP-08',
    category: 'Questões Contemporâneas',
    question: 'A exigência de diploma superior para o exercício do jornalismo profissional deve ser restabelecida?',
    complexity: 'Intermediário',
    keywords: ['diploma de jornalismo', 'liberdade de imprensa', 'RE 511.961', 'direito à informação'],
    context: 'A decisão do STF no RE 511.961 declarando que a exigência de diploma universitário para exercer jornalismo fere a liberdade de manifestação do pensamento (art. 5º, IX e 220 da CF).',
    investigationPaths: [
      'A PEC do Diploma no Congresso Nacional visando restabelecer a obrigatoriedade da formação acadêmica',
      'A desinformação em massa e o rebaixamento da apuração ética por produtores de conteúdo amadores sem compromisso deontológico',
      'A tradição dos maiores jornalistas e ensaístas da história que não possuíam formação formal em jornalismo'
    ],
    counterpoint: 'Exigir autorização estatal ou diploma para alguém poder publicar fatos e opinar na imprensa é uma das formas clássicas de censura de governos autoritários.'
  },
  {
    id: 'CONTEMP-09',
    category: 'Questões Contemporâneas',
    question: 'A legalização dos jogos de cassino e bingos físicos no Brasil aquece o turismo ou facilita a lavagem de dinheiro das facções?',
    complexity: 'Intermediário',
    keywords: ['jogos de azar', 'cassinos integrados', 'lavagem de capitais', 'turismo e empregos'],
    context: 'A tramitação do Projeto de Lei que revoga a proibição de cassinos e bingos físicos em vigor no Brasil desde o decreto do Presidente Eurico Gaspar Dutra em 1946.',
    investigationPaths: [
      'O potencial de arrecadação bilionária de tributos e atração de resorts integrados internacionais para cidades litorâneas',
      'Os alertas de auditores da Receita Federal e do COAF sobre a dificuldade técnica extrema de fiscalizar a lavagem de fichas em cassinos',
      'O impacto sobre famílias pobres vulneráveis à dependência compulsiva do jogo patológico (ludopatia)'
    ],
    counterpoint: 'O mundo ocidental inteiro opera cassinos legalizados e regulados; por que apenas o Brasil insistiria na hipocrisia de deixar o jogo no mercado clandestino?'
  },
  {
    id: 'CONTEMP-10',
    category: 'Questões Contemporâneas',
    question: 'O ativismo judicial ambiental que paralisa a exploração de petróleo na Margem Equatorial sabota a soberania energética do país?',
    complexity: 'Avançado',
    keywords: ['Margem Equatorial', 'licenciamento ambiental', 'IBAMA', 'transição energética'],
    context: 'O impasse técnico e político entre a Petrobras e o IBAMA/Ministério Público Federal sobre a concessão de licença ambiental para perfuração na Bacia da Foz do Amazonas.',
    investigationPaths: [
      'O princípio da precaução e a ausência de estudos ambientais de área sedimentar (EAAS) para ecossistemas marinhos frágeis',
      'A necessidade urgente de financiar a transição energética do país com os recursos da última fronteira de petróleo fóssil antes da descarbonização',
      'Os compromissos climáticos internacionais assumidos pelo Brasil na COP de eliminação gradual de combustíveis fósseis'
    ],
    counterpoint: 'Como o Brasil poderá discursar para o mundo como liderança ecológica na Amazônia enquanto abre uma nova megabacia de extração de petróleo na costa amazônica?'
  },
  {
    id: 'CONTEMP-11',
    category: 'Questões Contemporâneas',
    question: 'A tributação sobre bebidas açucaradas e alimentos ultraprocessados ("Imposto do Pecado") pune os mais pobres?',
    complexity: 'Intermediário',
    keywords: ['imposto seletivo', 'ultraprocessados', 'epidemia de obesidade', 'SUS'],
    context: 'A instituição do Imposto Seletivo na Reforma Tributária incidindo sobre produtos prejudiciais à saúde, com propostas de tributar refrigerantes, salgadinhos e embutidos.',
    investigationPaths: [
      'O custo bilionário suportado pelo SUS para tratar diabetes, hipertensão e infartos decorrentes da má alimentação ultraprocessada',
      'A evidência internacional de que a taxação reduz expressivamente o consumo desses produtos entre crianças e jovens',
      'O impacto financeiro desproporcional sobre famílias pobres para as quais os ultraprocessados são a fonte mais barata e acessível de calorias'
    ],
    counterpoint: 'Se o Estado quer que as pessoas comam melhor, ele deve subsidiar e baratear as frutas e legumes frescos em vez de encarecer a comida barata dos mais pobres.'
  },
  {
    id: 'CONTEMP-12',
    category: 'Questões Contemporâneas',
    question: 'O congelamento de óvulos custeado por empresas como benefício corporativo é empoderamento feminino ou pressão para adiar a maternidade?',
    complexity: 'Intermediário',
    keywords: ['preservação da fertilidade', 'benefício corporativo', 'adiamento da maternidade', 'bioética'],
    context: 'Grandes multinacionais de tecnologia e bancos que oferecem cobertura integral de criopreservação de óvulos para suas funcionárias executivas jovens.',
    investigationPaths: [
      'A autonomia reprodutiva da mulher de estender sua janela fértil enquanto consolida sua carreira profissional',
      'A mensagem subliminar da cultura corporativa de que engravidar jovem é um obstáculo inconveniente para a empresa',
      'As taxas reais de sucesso na fertilização in vitro tardia que caem expressivamente mesmo com óvulos jovens'
    ],
    counterpoint: 'Dar a mulheres de alta qualificação a liberdade financeira de planejar a gravidez quando se sentirem prontas é uma conquista civilizatória.'
  },
  {
    id: 'CONTEMP-13',
    category: 'Questões Contemporâneas',
    question: 'A adoção de câmeras corporais nos uniformes de policiais militares reduz a violência policial ou inibe a ação enérgica contra o crime?',
    complexity: 'Intermediário',
    keywords: ['câmeras corporais', 'letalidade policial', 'violência institucional', 'segurança pública'],
    context: 'A comprovação estatística em São Paulo de queda superior a 60% na letalidade policial e de 80% na morte de policiais em batalhões que adotaram o monitoramento contínuo.',
    investigationPaths: [
      'A decisão do STF na ADPF 635 (ADPF das Favelas) impondo o cronograma de instalação de câmeras na polícia do Rio de Janeiro',
      'A garantia de prova idônea que protege o policial de acusações falsas de agressão forjadas por criminosos',
      'A resistência política de governantes que alegam constrangimento operacional dos agentes de segurança'
    ],
    counterpoint: 'Por que um policial honesto que segue o procedimento operacional padrão teria medo de que sua ação fosse gravada para sua própria segurança?'
  },
  {
    id: 'CONTEMP-14',
    category: 'Questões Contemporâneas',
    question: 'O direito à moradia deve autorizar a conversão forçada de prédios históricos degradados em habitação social?',
    complexity: 'Intermediário',
    keywords: ['retrofit urbano', 'patrimônio histórico', 'habitação de interesse social', 'centros urbanos'],
    context: 'O conflito entre as normas rígidas de preservação arquitetônica tombada pelo IPHAN e a necessidade de transformar prédios abandonados nos centros de SP e Rio em moradia popular.',
    investigationPaths: [
      'O Estatuto da Cidade e a aplicação do IPTU progressivo no tempo e desapropriação com pagamento em títulos da dívida',
      'O custo proibitivo de obras de restauro e adequação contra incêndios em edifícios centenários',
      'A revitalização da vida urbana noturna e a redução dos tempos de deslocamento diário de trabalhadores das periferias'
    ],
    counterpoint: 'Flexibilizar o tombamento para fazer moradia popular não destruirá de forma irreversível a memória arquitetônica e a história visual da cidade?'
  },
  {
    id: 'CONTEMP-15',
    category: 'Questões Contemporâneas',
    question: 'A concessão de anistia ampla a condenados por atos de depredação dos Três Poderes em 8 de janeiro reconcilia o país ou estimula novas tentativas de golpe?',
    complexity: 'Avançado',
    keywords: ['anistia política', 'atos antidemocráticos', '8 de janeiro', 'defesa do Estado democrático'],
    context: 'O intenso debate legislativo no Congresso Nacional sobre a aprovação de uma lei de anistia para os manifestantes condenados a penas de 12 a 17 anos pelo STF.',
    investigationPaths: [
      'A competência privativa da União e do Congresso para conceder anistia (art. 48, VIII da CF)',
      'A vedação constitucional expressa de graça e anistia para crimes hediondos e terrorismo',
      'A pacificação social histórica brasileira versus o perigo do estímulo da impunidade para novas insurreições violentas contra as instituições'
    ],
    counterpoint: 'Condenar idosos desarmados e cidadãos sem antecedentes a quase duas décadas de prisão fechada não foi uma resposta judiciária desproporcional e vingativa?'
  }
];
