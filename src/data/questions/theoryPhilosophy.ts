import { Question } from '../../types';

export const theoryPhilosophyQuestions: Question[] = [
  // --- FILOSOFIA DO DIREITO (15) ---
  {
    id: 'FILO-01',
    category: 'Filosofia do Direito',
    question: 'Uma norma profundamente injusta continua sendo Direito?',
    complexity: 'Avançado',
    keywords: ['fórmula de Radbruch', 'positivismo jurídico', 'jusnaturalismo', 'Hans Kelsen'],
    context: 'O colapso moral do formalismo jurídico no pós-Segunda Guerra Mundial e a célebre formulação de Gustav Radbruch sobre o limiar da injustiça extrema.',
    investigationPaths: [
      'A Fórmula de Radbruch: a lei extremamente injusta deixa de ter a natureza de Direito (injustiça insuportável)',
      'A Teoria Pura do Direito de Hans Kelsen e a separação estrita entre validade jurídica e justiça moral',
      'O julgamento dos guardas do Muro de Berlim e a eficácia retroativa do direito supralegal'
    ],
    counterpoint: 'Se cada juiz puder desobedecer à lei formal invocando seu próprio conceito pessoal de justiça, o que restará da segurança e da igualdade dos cidadãos?'
  },
  {
    id: 'FILO-02',
    category: 'Filosofia do Direito',
    question: 'Existe uma única resposta correta no Direito para casos difíceis?',
    complexity: 'Avançado',
    keywords: ['única resposta correta', 'Ronald Dworkin', 'juiz Hércules', 'discricionariedade judicial'],
    context: 'O debate titânico entre H.L.A. Hart (que admite a discricionariedade judicial nos casos de penumbra) e Ronald Dworkin (que sustenta a tese da integridade do direito).',
    investigationPaths: [
      'A metáfora do romance em cadeia e o princípio da integridade na obra "O Império do Direito" de Dworkin',
      'O conceito de regras e princípios como padrões normativos qualitativamente distintos',
      'A teoria pragmática de Richard Posner contra a ilusão da resposta perfeita'
    ],
    counterpoint: 'Numa sociedade pluralista marcada por profundos desentendimentos morais insolúveis, afirmar que existe apenas uma resposta correta não é pura presunção?'
  },
  {
    id: 'FILO-03',
    category: 'Filosofia do Direito',
    question: 'A justiça é a conformidade com a lei ou a correção de suas imperfeições pela equidade?',
    complexity: 'Intermediário',
    keywords: ['equidade', 'Aristóteles', 'justiça distributiva e corretiva', 'Ética a Nicômaco'],
    context: 'A formulação aristotélica da equidade como a régua de chumbo de Lesbos, capaz de se moldar às sinuosidades do caso concreto onde a regra geral é cega.',
    investigationPaths: [
      'O Livro V da "Ética a Nicômaco" de Aristóteles',
      'A distinção entre justiça universal, distributiva, corretiva e equidade',
      'O perigo contemporâneo do "sentimentalismo judicial" fundamentado em equidade sem amparo dogmático'
    ],
    counterpoint: 'Se a regra geral foi aprovada democraticamente para valer para todos, flexibilizá-la pela equidade não cria privilégios odiosos caso a caso?'
  },
  {
    id: 'FILO-04',
    category: 'Filosofia do Direito',
    question: 'O utilitarismo é uma base moral aceitável para a tomada de decisões judiciais?',
    complexity: 'Avançado',
    keywords: ['utilitarismo', 'Jeremy Bentham', 'John Stuart Mill', 'sacrifício de direitos'],
    context: 'A doutrina de maximizar o maior bem-estar para o maior número de pessoas e os riscos de legitimar a violação de direitos fundamentais de minorias.',
    investigationPaths: [
      'O imperativo categórico kantiano: o ser humano deve ser tratado sempre como fim e nunca como mero meio',
      'O dilema do bonde (Trolley Problem) e sua transposição para decisões sanitárias e de segurança pública',
      'A análise de custo-benefício em políticas judiciais regulatórias'
    ],
    counterpoint: 'Em situações de catástrofe nacional ou escassez absoluta de leitos de UTI, como governar sem recorrer a cálculos utilitários de sobrevivência coletiva?'
  },
  {
    id: 'FILO-05',
    category: 'Filosofia do Direito',
    question: 'O véu da ignorância de John Rawls é um método viável para fundamentar uma ordem constitucional justa?',
    complexity: 'Avançado',
    keywords: ['véu da ignorância', 'John Rawls', 'Uma Teoria da Justiça', 'princípio da diferença'],
    context: 'A proposta contratualista de Rawls de conceber os princípios de justiça a partir de uma posição original onde ninguém sabe sua classe, raça ou talentos na sociedade.',
    investigationPaths: [
      'Os dois princípios rawlsianos: igualdade de liberdades básicas e princípio da diferença',
      'A crítica comunitarista de Michael Sandel sobre o sujeito desenraizado de suas tradições históricas',
      'A aplicação da teoria na fundamentação de ações afirmativas e cotas raciais pelo STF'
    ],
    counterpoint: 'É psicologicamente possível para legisladores reais despir-se de suas identidades, crenças e preconceitos para deliberar sob um véu imaginário?'
  },
  {
    id: 'FILO-06',
    category: 'Filosofia do Direito',
    question: 'A moralidade e o Direito devem ser mantidos estritamente separados na interpretação jurídica?',
    complexity: 'Avançado',
    keywords: ['positivismo versus pós-positivismo', 'H.L.A. Hart', 'Lon Fuller', 'moralidade interna do direito'],
    context: 'O clássico debate Hart-Fuller na Harvard Law Review sobre se a validade de uma norma depende de seu conteúdo moral ou exclusivamente de seu procedimento formal de produção.',
    investigationPaths: [
      'A tese da separabilidade no positivismo jurídico analítico',
      'A "moralidade interna do Direito" proposta por Lon Fuller em "A Moralidade do Direito"',
      'O neoconstitucionalismo e a invasão da dogmática jurídica por categorias éticas imprecisas'
    ],
    counterpoint: 'Se o Direito se divorciar totalmente da moral, ele se tornará apenas a ordem eficaz de uma quadrilha de bandidos com poder coercitivo?'
  },
  {
    id: 'FILO-07',
    category: 'Filosofia do Direito',
    question: 'A verdade nos tribunais é descoberta ou construída pela retórica e pelo poder?',
    complexity: 'Avançado',
    keywords: ['epistemologia jurídica', 'Michel Foucault', 'retórica e verdade', 'veridição'],
    context: 'A crítica pós-estruturalista de que os fatos judiciais não possuem existência empírica autônoma, sendo produzidos por discursos dominantes autorizados de verdade.',
    investigationPaths: [
      'A obra "A Verdade e as Formas Jurídicas" de Michel Foucault e o inquérito como tecnologia de poder',
      'A teoria da argumentação jurídica de Chaim Perelman e o auditório universal',
      'A epistemologia racionalista da prova de Michele Taruffo e Jordi Ferrer Beltrán'
    ],
    counterpoint: 'Se a verdade for apenas uma ficção retórica do poder, como diferenciar uma condenação justa de uma farsa forjada para prender um inocente?'
  },
  {
    id: 'FILO-08',
    category: 'Filosofia do Direito',
    question: 'O consentimento livre é suficiente para legitimar qualquer transação que não cause dano direto a terceiros?',
    complexity: 'Avançado',
    keywords: ['princípio do dano', 'John Stuart Mill', 'paternalismo jurídico', 'venda de órgãos'],
    context: 'O princípio do dano (Harm Principle) de Mill contra o paternalismo jurídico moralista que proíbe condutas autodestrutivas consentidas (ex: venda de órgãos ou canibalismo consensual).',
    investigationPaths: [
      'A obra "Sobre a Liberdade" de John Stuart Mill e os limites da coerção estatal sobre o indivíduo',
      'O caso do Canibal de Rotemburgo e a incapacidade do Direito Penal de aceitar o consentimento para a própria destruição',
      'O papel da vulnerabilidade estrutural que falseia a suposta "liberdade" do consentimento de miseráveis'
    ],
    counterpoint: 'Se um indivíduo famélico consente em vender seu rim para alimentar seus filhos, chamar isso de "livre escolha" não é cinismo desumano?'
  },
  {
    id: 'FILO-09',
    category: 'Filosofia do Direito',
    question: 'A teoria do direito discursivo de Jürgen Habermas consegue superar a crise de legitimação das leis?',
    complexity: 'Avançado',
    keywords: ['razão comunicativa', 'Jürgen Habermas', 'Direito e Democracia', 'situação ideal de fala'],
    context: 'A legitimidade das normas jurídicas fundamentada não na autoridade do soberano nem em valores metafísicos, mas no procedimento dialógico e democrático de deliberação livre.',
    investigationPaths: [
      'O princípio do discurso (D) e o princípio democrático em "Direito e Democracia: Entre Faticidade e Validade"',
      'A situação ideal de fala e a exigência de inclusão de todos os potencialmente afetados pela norma',
      'A crítica sobre a impossibilidade empírica de consenso racional em arenas políticas polarizadas'
    ],
    counterpoint: 'Como esperar uma deliberação racional desinteressada em parlamentos reais dominados por poder econômico, lobby e desinformação de massa?'
  },
  {
    id: 'FILO-10',
    category: 'Filosofia do Direito',
    question: 'O conceito de dignidade da pessoa humana corre o risco de se tornar uma fórmula vazia que legitima qualquer decisão?',
    complexity: 'Avançado',
    keywords: ['dignidade humana', 'conceito jurídico indeterminado', 'pan-principiologismo', 'Ingeborg Maus'],
    context: 'A banalização jurisprudencial da dignidade humana, utilizada tanto para justificar a eutanásia quanto para proibi-la, funcionando como um coringa retórico onipotente.',
    investigationPaths: [
      'A fundamentação kantiana da dignidade baseada na autonomia racional intransacionável',
      'O artigo "A dignidade da pessoa humana como conceito jurídico indeterminado" e as críticas ao decisionismo',
      'A jurisprudência do Tribunal Constitucional Federal alemão sobre o abate de aviões sequestrados'
    ],
    counterpoint: 'A despeito de sua vagueza textual, a dignidade não é a última barreira civilizatória que impede o Estado de descartar vidas humanas em cálculos utilitários?'
  },
  {
    id: 'FILO-11',
    category: 'Filosofia do Direito',
    question: 'A teoria da justiça como reconhecimento de Axel Honneth é mais urgente do que a justiça redistributiva?',
    complexity: 'Avançado',
    keywords: ['luta por reconhecimento', 'Axel Honneth', 'Nancy Fraser', 'justiça distributiva'],
    context: 'O debate contemporâneo entre a necessidade de redistribuição econômica material de recursos versus o reconhecimento moral, cultural e jurídico de identidades marginalizadas.',
    investigationPaths: [
      'As três esferas de reconhecimento de Honneth: amor (afeto), direito (igualdade jurídica) e estima social (solidariedade)',
      'O debate Honneth-Fraser em "Redistribuição ou Reconhecimento?"',
      'A reivindicação de direitos por povos originários, comunidades quilombolas e populações LGBTQIA+'
    ],
    counterpoint: 'O que adianta o reconhecimento formal e discursivo da dignidade de alguém que continua morrendo de fome na favela sem saneamento básico?'
  },
  {
    id: 'FILO-12',
    category: 'Filosofia do Direito',
    question: 'A obediência incondicional à lei é uma virtude cívica ou uma capitulação moral perigosa?',
    complexity: 'Intermediário',
    keywords: ['positivismo ideológico', 'dever de obediência', 'Sócrates', 'Crito'],
    context: 'A postura de Sócrates no diálogo "Crito" de Platão (aceitando a morte injusta imposta pelas leis de Atenas) confrontada com a resistência a ordens estatais criminosas.',
    investigationPaths: [
      'O diálogo socrático de "Crito" e a dívida de cidadania com as leis da pólis',
      'O julgamento de Adolf Eichmann em Jerusalém e o perigo da "obediência como dever profissional burocrático"',
      'O direito constitucional de escusa de consciência (art. 5º, VIII da CF)'
    ],
    counterpoint: 'Se cada soldado ou cidadão puder se recusar a cumprir leis com base em sua própria consciência particular, como manter a ordem pública?'
  },
  {
    id: 'FILO-13',
    category: 'Filosofia do Direito',
    question: 'O libertarianismo de Robert Nozick que define a tributação como trabalho forçado é eticamente defensável?',
    complexity: 'Avançado',
    keywords: ['Robert Nozick', 'Estado mínimo', 'tributação como escravidão', 'Anarquia, Estado e Utopia'],
    context: 'A tese ultraliberal de que qualquer tributação além do estritamente necessário para financiar o exército, a polícia e os tribunais constitui confisco imoral da propriedade alheia.',
    investigationPaths: [
      'A teoria dos títulos de propriedade (Entitlement Theory) em "Anarquia, Estado e Utopia"',
      'A analogia de Nozick entre cobrar impostos sobre o trabalho e expropriar o tempo de vida do trabalhador',
      'A refutação sobre o fato de que a propriedade privada só existe e gera valor porque o Estado provê estradas, moeda e segurança'
    ],
    counterpoint: 'Sem o Estado garantindo hospitais públicos, vacinas e escolas para os desfavorecidos, a liberdade defendida por Nozick não é apenas o privilégio dos ricos?'
  },
  {
    id: 'FILO-14',
    category: 'Filosofia do Direito',
    question: 'A teoria crítica da raça comprova que o Direito foi historicamente desenhado para consolidar a supremacia branca?',
    complexity: 'Avançado',
    keywords: ['Critical Race Theory', 'racismo estrutural', 'Derrick Bell', 'colorblindness'],
    context: 'A denúncia de teóricos como Derrick Bell e Kimberlé Crenshaw de que a ideologia da "cegueira racial" (colorblindness) do direito liberal ignora e perpetua a opressão racial estrutural.',
    investigationPaths: [
      'A genealogia da Critical Race Theory nas faculdades de direito norte-americanas nos anos 1970 e 1980',
      'A obra "Racismo Estrutural" de Silvio Almeida e a permeabilidade das instituições estatais brasileiras',
      'A transição da igualdade puramente formal perante a lei para a igualdade substancial antidiscriminatória'
    ],
    counterpoint: 'Se abandonarmos o princípio de que a lei deve tratar a todos formalmente sem distinção de raça, não ressuscitaremos distinções legais perigosas?'
  },
  {
    id: 'FILO-15',
    category: 'Filosofia do Direito',
    question: 'O conceito de propriedade privada é um direito natural pré-estatal ou uma concessão temporária da sociedade organizada?',
    complexity: 'Avançado',
    keywords: ['John Locke', 'direito de propriedade', 'estado de natureza', 'Jean-Jacques Rousseau'],
    context: 'O embate clássico entre John Locke (o trabalho fundamenta a propriedade antes de qualquer Estado) e Rousseau (a origem da desigualdade está em quem primeiro cercou a terra).',
    investigationPaths: [
      'O "Segundo Tratado sobre o Governo Civil" de John Locke e o labor como fundamento dos direitos naturais',
      'O "Discurso sobre a Origem da Desigualdade entre os Homens" de Jean-Jacques Rousseau',
      'A função social e ambiental da propriedade como limitação interna ontológica na CF/88'
    ],
    counterpoint: 'Se a propriedade não for um direito sagrado e protegido contra a tomada estatal, quem arriscaria anos de trabalho e capital para construir algo?'
  },

  // --- TEORIA DO ESTADO (15) ---
  {
    id: 'ESTADO-01',
    category: 'Teoria do Estado',
    question: 'O monopólio estatal do uso legítimo da força física ainda subsiste em territórios dominados por facções?',
    complexity: 'Intermediário',
    keywords: ['monopólio da violência', 'Max Weber', 'estados falidos', 'paraestatalidade'],
    context: 'A definição canônica de Max Weber do Estado moderno como comunidade humana que reivindica com sucesso o monopólio da violência legítima dentro de um território.',
    investigationPaths: [
      'A obra "Economia e Sociedade" e a conferência "Ciência e Política como Vocação" de Max Weber',
      'A coexistência do Estado formal com governos paralelos de facções criminosas e milícias no Rio de Janeiro e São Paulo',
      'O conceito de "Estado frágil" ou "zonas cinzentas de soberania" na geopolítica contemporânea'
    ],
    counterpoint: 'O fato de o Estado ter dificuldades policiais temporárias em certas favelas significa que ele renunciou à soberania ou perdeu sua legitimidade legal?'
  },
  {
    id: 'ESTADO-02',
    category: 'Teoria do Estado',
    question: 'A teoria do estado de exceção de Giorgio Agamben explica a normalização das medidas autoritárias em democracias?',
    complexity: 'Avançado',
    keywords: ['estado de exceção', 'Giorgio Agamben', 'Carl Schmitt', 'vida nua'],
    context: 'A tese schmittiana de que o soberano é quem decide sobre o estado de exceção, reinterpretada por Agamben como o paradigma contemporâneo e contínuo de governo das democracias.',
    investigationPaths: [
      'A "Teologia Política" de Carl Schmitt e a suspensão da ordem jurídica em nome da sua própria salvação',
      'A trilogia "Homo Sacer" de Giorgio Agamben e a produção sistemática de populações em "vida nua"',
      'O uso constante de Decretos de Urgência, operações de Garantia da Lei e da Ordem (GLO) e vigilância sanitária'
    ],
    counterpoint: 'Em situações de calamidade pública ou ataques terroristas, suspender temporariamente certas garantias não é o único meio de evitar o colapso total?'
  },
  {
    id: 'ESTADO-03',
    category: 'Teoria do Estado',
    question: 'A separação tripartite de poderes de Montesquieu continua funcional na era do presidencialismo de coalizão?',
    complexity: 'Intermediário',
    keywords: ['separação de poderes', 'Montesquieu', 'presidencialismo de coalizão', 'freios e contrapesos'],
    context: 'A clássica divisão de funções entre Executivo, Legislativo e Judiciário concebida em "O Espírito das Leis" confrontada com o loteamento de emendas parlamentares orçamentárias no Brasil.',
    investigationPaths: [
      'O sistema de "Checks and Balances" formulado pelos Federalistas norte-americanos (Madison, Hamilton)',
      'O conceito de "presidencialismo de coalizão" cunhado pelo cientista político Sérgio Abranches',
      'A captura do orçamento público pelo parlamento mediante emendas impositivas e emendas de relator'
    ],
    counterpoint: 'Sem a divisão rígida de poderes, um governante carismático não concentraria todo o mando e transformaria a República em autocracia pessoal?'
  },
  {
    id: 'ESTADO-04',
    category: 'Teoria do Estado',
    question: 'A soberania do Estado nacional moderno é compatível com os tribunais internacionais supranacionais?',
    complexity: 'Avançado',
    keywords: ['soberania nacional', 'tribunais internacionais', 'Corte IDH', 'Jean Bodin'],
    context: 'A perda da autoridade incondicional do Estado diante de condenações vinculantes proferidas pela Corte Interamericana de Direitos Humanos ou pelo Tribunal Penal Internacional.',
    investigationPaths: [
      'O conceito absolutista de soberania formulado por Jean Bodin em "Os Seis Livros da República"',
      'A autolimitação da soberania quando o Estado ratifica voluntariamente tratados de proteção da pessoa humana',
      'A resistência de supremas cortes nacionais em acatar sentenças externas que contrariem sua Constituição interna'
    ],
    counterpoint: 'Se um tribunal externo não eleito pode anular as leis aprovadas pelo Parlamento de um país soberano, o povo desse país ainda governa a si mesmo?'
  },
  {
    id: 'ESTADO-05',
    category: 'Teoria do Estado',
    question: 'O Leviatã de Thomas Hobbes permanece como a única alternativa viável à anarquia e à guerra civil de todos contra todos?',
    complexity: 'Avançado',
    keywords: ['Thomas Hobbes', 'Leviatã', 'estado de natureza', 'contrato social'],
    context: 'A fundamentação hobbesiana de que a natureza humana egoísta exige um poder estatal absoluto e temido, sob pena de a vida em sociedade ser solitária, pobre, sórdida e curta.',
    investigationPaths: [
      'Os capítulos XIII e XIV do "Leviatã" sobre o estado de natureza e a paixão pelo medo da morte violenta',
      'A renúncia da liberdade natural em troca da garantia da segurança física e patrimonial',
      'A contraposição de John Locke e do anarquismo cooperativo que apontam o próprio Estado tirânico como a maior ameaça à vida'
    ],
    counterpoint: 'Diante do colapso de autoridades estatais que vemos em países dilacerados por guerras civis, o diagnóstico hobbesiano não se mostra tragicamente certeiro?'
  },
  {
    id: 'ESTADO-06',
    category: 'Teoria do Estado',
    question: 'O Estado Social de Bem-Estar (Welfare State) é fiscalmente sustentável diante do envelhecimento populacional acelerado?',
    complexity: 'Intermediário',
    keywords: ['Welfare State', 'transição demográfica', 'sustentabilidade fiscal', 'reforma da previdência'],
    context: 'A inversão da pirâmide etária com menos jovens no mercado pagando contribuições para sustentar uma massa crescente de idosos com direito a aposentadoria e remédios caros.',
    investigationPaths: [
      'O modelo de Bismarck (contributivo) versus o modelo de Beveridge (seguridade universal)',
      'O teto de gastos públicos e a crise de financiamento dos sistemas públicos de saúde e previdência na Europa e no Brasil',
      'A produtividade tecnológica e os ganhos de automação como fonte potencial de financiamento da velhice'
    ],
    counterpoint: 'Destruir o Estado de bem-estar deixará dezenas de milhões de idosos abandonados à mendicância após uma vida inteira de trabalho árduo.'
  },
  {
    id: 'ESTADO-07',
    category: 'Teoria do Estado',
    question: 'A teoria da razão de Estado autoriza governantes a violar leis em nome da sobrevivência nacional?',
    complexity: 'Avançado',
    keywords: ['razão de Estado', 'Nicolau Maquiavel', 'O Príncipe', 'segurança nacional'],
    context: 'A separação radical entre moralidade privada e eficácia política inaugurada por Nicolau Maquiavel e refinada por pensadores como Giovanni Botero e Richelieu.',
    investigationPaths: [
      'A obra "O Príncipe" e o imperativo de salvar a pátria mesmo à custa da desonra ou do perjúrio',
      'O papel das agências de inteligência, operações clandestinas e assassinatos seletivos em conflitos geopolíticos',
      'A supremacia do princípio republicano da legalidade sobre a alegação subjetiva de "razão superior de Estado"'
    ],
    counterpoint: 'Se um governante virtuoso recusar-se a mentir ou espionar o inimigo, sua retidão moral não condenará todo o seu povo à subjugação militar?'
  },
  {
    id: 'ESTADO-08',
    category: 'Teoria do Estado',
    question: 'O Estado plurinacional é uma solução justa para países com múltiplos povos indígenas ou fragmenta a identidade nacional?',
    complexity: 'Intermediário',
    keywords: ['Estado plurinacional', 'povos indígenas', 'constitucionalismo andino', 'soberania compartilhada'],
    context: 'O novo constitucionalismo latino-americano (Constituições da Bolívia e do Equador) que reconheceu a pluralidade de nações e sistemas de justiça indígena sob um mesmo Estado.',
    investigationPaths: [
      'O reconhecimento dos sistemas jurídicos consuetudinários indígenas e seus limites em direitos humanos',
      'A Convenção 169 da OIT sobre Consulta Prévia, Livre e Informada aos povos tradicionais',
      'O debate brasileiro sobre demarcação de terras, soberania territorial e o marco temporal'
    ],
    counterpoint: 'Conceder autonomia jurídica soberana a dezenas de povos diferentes dentro do mesmo território não inviabiliza a unidade jurídica nacional?'
  },
  {
    id: 'ESTADO-09',
    category: 'Teoria do Estado',
    question: 'A burocracia weberiana é indispensável para a impessoalidade da administração ou sufoca a capacidade inovadora do país?',
    complexity: 'Intermediário',
    keywords: ['burocracia racional-legal', 'Max Weber', 'patrimonialismo', 'insulamento burocrático'],
    context: 'A dominação racional-legal baseada em regras escritas, hierarquia funcional e recrutamento meritocrático como antídoto contra o favoritismo e o nepotismo pessoal.',
    investigationPaths: [
      'Os tipos ideais de dominação de Max Weber: tradicional, carismática e racional-legal',
      'O patrimonialismo e a confusão entre esfera pública e privada no Brasil (Raymundo Faoro em "Os Donos do Poder")',
      'A rigidez e o formalismo excessivo que paralisam investimentos e a inovação tecnológica no setor público'
    ],
    counterpoint: 'Sem concursos públicos rigorosos e processos administrativos formais, o Estado voltaria a ser uma Capitania Hereditária controlada por amigos do rei.'
  },
  {
    id: 'ESTADO-10',
    category: 'Teoria do Estado',
    question: 'O Estado laico deve manter feriados religiosos tradicionais em seu calendário oficial de trabalho?',
    complexity: 'Intermediário',
    keywords: ['laicidade estatal', 'feriados religiosos', 'isonomia confessional', 'cultura nacional'],
    context: 'A consagração de feriados nacionais católicos (Nossa Senhora Aparecida, Corpus Christi, Natal) sem a correspondente contemplação de dias santos de matriz africana, islâmica ou judaica.',
    investigationPaths: [
      'O art. 19, I da CF/88 que veda à União, aos Estados e Municípios estabelecer cultos ou manter alianças',
      'O sincretismo cultural e a justificação de feriados religiosos como patrimônio histórico e imaterial da nação',
      'A perda de bilhões de reais na produtividade econômica causada pela profusão de feriados'
    ],
    counterpoint: 'Tentar erradicar o Natal ou a Sexta-feira Santa em nome de um laicismo estéril não ignora as raízes culturais de 90% da população brasileira?'
  },
  {
    id: 'ESTADO-11',
    category: 'Teoria do Estado',
    question: 'A privatização de serviços essenciais de saneamento e água atenta contra o dever existencial do Estado?',
    complexity: 'Intermediário',
    keywords: ['Marco do Saneamento', 'Lei 14.026/2020', 'acesso à água potável', 'bens comuns'],
    context: 'A aprovação do novo Marco Legal do Saneamento Básico exigindo licitações competitivas e autorizando empresas privadas a operar o abastecimento de água e tratamento de esgoto.',
    investigationPaths: [
      'A Resolução 64/292 da ONU reconhecendo a água potável como direito humano fundamental',
      'O déficit crônico de 35 milhões de brasileiros sem água e quase 100 milhões sem rede de esgoto sob a gestão de estatais por décadas',
      'O risco de reajustes tarifários abusivos que excluem famílias miseráveis que não conseguem pagar a conta'
    ],
    counterpoint: 'Se as empresas estatais deixaram metade do país pisando em esgoto aberto por 50 anos, insistir no monopólio público não é condenar as crianças à doença?'
  },
  {
    id: 'ESTADO-12',
    category: 'Teoria do Estado',
    question: 'A doutrina da separação de funções entre Estado e Sociedade Civil ainda faz sentido em sociedades hiperconectadas?',
    complexity: 'Avançado',
    keywords: ['sociedade civil', 'Hegel', 'esfera pública', 'Gramsci'],
    context: 'A formulação hegeliana e gramsciana sobre a sociedade civil como arena de conflitos econômicos e hegemonia cultural antes de sua subsunção pelo Estado ético.',
    investigationPaths: [
      'A "Filosofia do Direito" de Hegel e a transição da família para a sociedade civil e o Estado',
      'O conceito de "Estado Ampliado" de Antonio Gramsci (sociedade política + sociedade civil)',
      'O papel de ONGs, coletivos digitais e fundações corporativas exercendo funções tipicamente estatais'
    ],
    counterpoint: 'Se a fronteira entre Estado e sociedade civil sumir, as grandes corporações tecnológicas não passarão a legislar informalmente sobre a vida de todos?'
  },
  {
    id: 'ESTADO-13',
    category: 'Teoria do Estado',
    question: 'A imunidade de jurisdição dos Estados estrangeiros deve ser afastada em ações por graves violações de direitos humanos?',
    complexity: 'Avançado',
    keywords: ['imunidade de jurisdição', 'atos de império versus de gestão', 'Tema 944 STF', 'crimes contra a humanidade'],
    context: 'A decisão do STF no Tema 944 declarando que os Estados estrangeiros gozam de imunidade absoluta de jurisdição por atos de império durante guerras (ex: afundamento de navios brasileiros pela Alemanha nazista).',
    investigationPaths: [
      'A distinção histórica entre acta jure imperii (atos de soberania) e acta jure gestionis (atos comerciais privados)',
      'A jurisprudência do Tribunal Europeu de Direitos Humanos e da Corte Internacional de Justiça no caso Alemanha vs. Itália',
      'O princípio da dignidade da pessoa humana confrontado com a reciprocidade diplomática das nações'
    ],
    counterpoint: 'Se tribunais locais de qualquer país puderem processar e confiscar bens de embaixadas estrangeiras, as relações internacionais e a paz mundial colapsarão.'
  },
  {
    id: 'ESTADO-14',
    category: 'Teoria do Estado',
    question: 'O poder regulador do Estado deve intervir para proibir apostas esportivas e jogos de azar online ("bets")?',
    complexity: 'Intermediário',
    keywords: ['regulação de apostas', 'Lei 14.790/2023', 'paternalismo estatal', 'ludopatia'],
    context: 'A epidemia de endividamento de famílias das classes C, D e E com o vício em plataformas de apostas online legalizadas no Brasil e o impacto no consumo de alimentos.',
    investigationPaths: [
      'A Lei 14.790/2023 e as regras de tributação, combate à fraude e publicidade responsável de apostas de quota fixa',
      'O direito individual do cidadão adulto de gastar seu dinheiro em jogos versus o dever estatal de proteção à saúde pública',
      'A experiência da proibição que empurrou as apostas para o mercado clandestino do jogo do bicho e sites sediados no exterior'
    ],
    counterpoint: 'Proibir as apostas online não impedirá ninguém de jogar em sites estrangeiros clandestinos e apenas privará o Estado de arrecadar tributos e regular vícios.'
  },
  {
    id: 'ESTADO-15',
    category: 'Teoria do Estado',
    question: 'O presidencialismo brasileiro é estruturalmente instável e deveria ser substituído pelo semipresidencialismo?',
    complexity: 'Intermediário',
    keywords: ['semipresidencialismo', 'presidencialismo', 'impeachment', 'governança'],
    context: 'As frequentes crises políticas com dois impeachments em 25 anos levando juristas e políticos a propor a adoção do modelo francês de divisão entre Presidente e Primeiro-Ministro.',
    investigationPaths: [
      'O modelo semipresidencialista da Quinta República Francesa e de Portugal',
      'A facilidade de derrubar um governo incompetente por meio de voto de desconfiança parlamentar sem o trauma de um processo de impeachment',
      'A paixão do eleitorado brasileiro pelo voto direto na figura personalista do Presidente da República'
    ],
    counterpoint: 'O povo brasileiro aceitaria eleger um Presidente da República que seria mero símbolo decorativo enquanto um Primeiro-Ministro manobra nos bastidores do Congresso?'
  },

  // --- SOCIOLOGIA JURÍDICA (15) ---
  {
    id: 'SOCIO-01',
    category: 'Sociologia Jurídica',
    question: 'A eficácia social da norma jurídica depende mais do consenso comunitário ou do medo da sanção coercitiva?',
    complexity: 'Intermediário',
    keywords: ['eficácia social', 'Eugen Ehrlich', 'direito vivo', 'anomia social'],
    context: 'A formulação sociológica de Eugen Ehrlich sobre o "Direito Vivo" demonstrando que as pessoas cumprem a maioria das regras por adesão cultural espontânea e não por medo de sentenças.',
    investigationPaths: [
      'A obra "Fundamentos da Sociologia do Direito" de Eugen Ehrlich',
      'O fenômeno brasileiro das "leis que pegam e leis que não pegam"',
      'O conceito de coerção psíquica formulado por Anselm von Feuerbach'
    ],
    counterpoint: 'Se não houvesse fiscalização armada e cadeia concreta nas ruas, quantas pessoas continuariam pagando imposto de renda ou parando no semáforo vermelho?'
  },
  {
    id: 'SOCIO-02',
    category: 'Sociologia Jurídica',
    question: 'O acesso à justiça no Brasil é democratizado pela Defensoria Pública ou continua sendo um privilégio de classe?',
    complexity: 'Intermediário',
    keywords: ['acesso à justiça', 'Mauro Cappelletti', 'Defensoria Pública', 'seletividade do judiciário'],
    context: 'As três ondas renovatórias do acesso à justiça de Cappelletti e Garth e o contraste com o déficit de defensores públicos em quase 60% das comarcas brasileiras.',
    investigationPaths: [
      'A Emenda Constitucional 80/2014 que estipulou meta de um defensor público para cada comarca',
      'A disparidade abissal entre o investimento orçamentário no Ministério Público/Magistratura e na Defensoria Pública',
      'A qualidade da assistência prestada a réus ricos com grandes bancas versus a defesa massificada e célere de hipossuficientes'
    ],
    counterpoint: 'A Defensoria Pública brasileira é a instituição mais avançada do mundo na tutela coletiva de vulneráveis, obtendo vitórias históricas contra abusos estatais e corporativos.'
  },
  {
    id: 'SOCIO-03',
    category: 'Sociologia Jurídica',
    question: 'A cultura do "jeitinho brasileiro" e o formalismo jurídico são faces da mesma moeda patrimonialista?',
    complexity: 'Intermediário',
    keywords: ['jeitinho brasileiro', 'Sérgio Buarque de Holanda', 'homem cordial', 'Roberto DaMatta'],
    context: 'A análise sociológica de Roberto DaMatta em "Carnavais, Malandros e Heróis" sobre a tensão perpétua entre "o indivíduo da lei universal" e "a pessoa das relações pessoais íntimas".',
    investigationPaths: [
      'O conceito de "homem cordial" em "Raízes do Brasil" de Sérgio Buarque de Holanda',
      'O uso da frase "Você sabe com quem está falando?" como recurso hierarquizante que anula a igualdade da lei',
      'A hipertrofia de carimbos, certidões e firmas reconhecidas como resposta desconfiada ao jeitinho'
    ],
    counterpoint: 'O jeitinho muitas vezes não é apenas uma tática indispensável de sobrevivência popular para contornar a crueldade de leis burocráticas feitas para ricos?'
  },
  {
    id: 'SOCIO-04',
    category: 'Sociologia Jurídica',
    question: 'O pluralismo jurídico comunitário em favelas e aldeias deslegitima a autoridade do Estado nacional?',
    complexity: 'Avançado',
    keywords: ['pluralismo jurídico', 'Boaventura de Sousa Santos', 'direito de Pasárgada', 'justiça comunitária'],
    context: 'O clássico estudo de Boaventura de Sousa Santos sobre a favela do Jacarezinho ("Notas sobre o Direito de Pasárgada"), onde conflitos de vizinhança e posse são resolvidos fora do Código Civil.',
    investigationPaths: [
      'A coexistência pacífica de ordens normativas informais com o ordenamento jurídico estatal oficial',
      'A mediação exercida por associações de moradores e lideranças tradicionais',
      'O risco de desvirtuamento do pluralismo em favor de tribunais clandestinos do crime organizado e do tribunal do tráfico'
    ],
    counterpoint: 'Onde o juiz togado nunca pisou e o oficial de justiça recusa-se a entrar, a comunidade deveria viver na selva em vez de criar suas próprias regras de convivência?'
  },
  {
    id: 'SOCIO-05',
    category: 'Sociologia Jurídica',
    question: 'A magistratura brasileira reflete a diversidade do país ou expressa os valores de uma elite homogênea?',
    complexity: 'Intermediário',
    keywords: ['perfil da magistratura', 'sociologia dos tribunais', 'cotas na magistratura', 'reprodução social'],
    context: 'Os censos do Conselho Nacional de Justiça revelando que mais de 80% dos juízes brasileiros são brancos, homens ou oriundos de estratos sociais médios-altos e altos.',
    investigationPaths: [
      'A Resolução 203/2015 do CNJ e a recente exigência de 50% de bolsas e vagas para pessoas negras e indígenas',
      'O custo proibitivo de anos de dedicação exclusiva a cursos preparatórios de ponta para concursos públicos',
      'A teoria do "habitus" de Pierre Bourdieu aplicada à linguagem hermética e aos costumes dos tribunais'
    ],
    counterpoint: 'Se o concurso público de provas e títulos é cego e impessoal, aprovar quem tem a maior pontuação técnica não é a garantia máxima de meritocracia republicana?'
  },
  {
    id: 'SOCIO-06',
    category: 'Sociologia Jurídica',
    question: 'O formalismo exacerbado da linguagem jurídica ("juridiquês") funciona como instrumento de exclusão social dos cidadãos?',
    complexity: 'Intermediário',
    keywords: ['linguagem jurídica simples', 'juridiquês', 'pacto da linguagem simples CNJ', 'alienação jurídica'],
    context: 'O uso de latinismos arcaicos, termos rebuscados e orações subordinadas intermináveis que impedem o cidadão comum de compreender a sentença que decide sua vida.',
    investigationPaths: [
      'O Pacto Nacional do Judiciário pela Linguagem Simples lançado pelo CNJ',
      'O direito fundamental de compreender a própria decisão judicial como pressuposto da cidadania',
      'A necessidade de precisão técnica vocabular na ciência jurídica para evitar ambiguidades semânticas perigosas'
    ],
    counterpoint: 'Toda ciência exige termos técnicos rigorosos; simplificar demais a linguagem do Direito não abrirá brechas para interpretações dúbias e insegurança jurídica?'
  },
  {
    id: 'SOCIO-07',
    category: 'Sociologia Jurídica',
    question: 'A teoria do direito reflexivo de Gunther Teubner explica os limites da intervenção regulatória em sistemas complexos?',
    complexity: 'Avançado',
    keywords: ['direito reflexivo', 'autopoiese jurídica', 'Niklas Luhmann', 'Gunther Teubner'],
    context: 'A constatação de que a sociedade pós-moderna é dividida em subsistemas funcionais autônomos (economia, ciência, saúde) que resistem à imposição de ordens jurídicas estatais diretas.',
    investigationPaths: [
      'A teoria dos sistemas autopoiéticos de Niklas Luhmann e o fechamento operacional do Direito',
      'O conceito de "Direito Reflexivo" que, em vez de ditar condutas materiais, regula procedimentos de auto-regulação',
      'O fracasso de leis de controle de preços que geram desabastecimento imediato nos mercados'
    ],
    counterpoint: 'Se o Direito renunciar à imposição direta de limites materiais e apenas modular procedimentos, como impedir que bancos e corporações destruam o meio ambiente?'
  },
  {
    id: 'SOCIO-08',
    category: 'Sociologia Jurídica',
    question: 'A judicialização de temas morais sensíveis (aborto, drogas, cotas) despolitiza a sociedade civil?',
    complexity: 'Avançado',
    keywords: ['judicialização da moral', 'despolitização', 'juristocracia', 'participação democrática'],
    context: 'A transferência de grandes debates existenciais que deveriam mobilizar a cidadania nas ruas e no parlamento para as salas acarpetadas de 11 ministros togados.',
    investigationPaths: [
      'A tese de Ran Hirschl em "Towards Juristocracy" sobre a delegação estratégica de conflitos pelas elites políticas',
      'A atrofia dos movimentos sociais que deixam de construir maiorias populares e passam a investir apenas em petições de ADPF',
      'A fragilidade de direitos conquistados por acórdãos judiciais vulneráveis a reações conservadoras do parlamento (backlash)'
    ],
    counterpoint: 'Se minorias perseguidas tivessem que esperar a boa vontade da maioria conservadora do parlamento, pessoas negras e homossexuais jamais teriam direitos civis garantidos.'
  },
  {
    id: 'SOCIO-09',
    category: 'Sociologia Jurídica',
    question: 'O encarceramento de mulheres mães no Brasil por tráfico de drogas expressa a reprodução da desigualdade de gênero e raça?',
    complexity: 'Intermediário',
    keywords: ['mães encarceradas', 'HC coletivo 143.641', 'mulheres no tráfico', 'interseccionalidade'],
    context: 'A concessão histórica do HC coletivo 143.641 pelo STF substituindo a prisão preventiva por domiciliar para gestantes e mães de filhos até 12 anos, frequentemente descumprida por juízes de base.',
    investigationPaths: [
      'O perfil das mulheres presas: jovens, negras, chefes de família monoparental, com baixa escolaridade e sem antecedentes violentos',
      'A função subordinada ocupada por mulheres na cadeia de drogas (mulas ou pequenas varejistas para sustentar filhos)',
      'O desamparo infantil e a perpetuação do ciclo de vulnerabilidade e acolhimento institucional das crianças'
    ],
    counterpoint: 'Conceder prisão domiciliar automática a qualquer mãe não incentiva facções criminosas a usar mulheres com filhos como escudo intocável para vender drogas?'
  },
  {
    id: 'SOCIO-10',
    category: 'Sociologia Jurídica',
    question: 'A teoria da violência simbólica de Pierre Bourdieu manifesta-se nos rituais e togas dos tribunais de justiça?',
    complexity: 'Avançado',
    keywords: ['violência simbólica', 'Pierre Bourdieu', 'a força do direito', 'espaço judiciário'],
    context: 'A célebre análise sociológica em "A Força do Direito: Elementos para uma Sociologia do Campo Jurídico" sobre a produção de submissão e reverência por meio de togas, estrados elevados e crucifixos.',
    investigationPaths: [
      'A hierarquização física das salas de audiência onde juízes e promotores sentam-se acima do réu e da testemunha',
      'A criação do monopólio dos especialistas da linguagem que desqualificam o relato espontâneo do leigo',
      'A naturalização das relações de poder como sendo a encarnação neutra e desinteressada da Razão'
    ],
    counterpoint: 'A solenidade dos rituais, roupas formais e estrados não é indispensável para incutir no inconsciente social o respeito sagrado às decisões da lei?'
  },
  {
    id: 'SOCIO-11',
    category: 'Sociologia Jurídica',
    question: 'O direito alternativo dos anos 1990 foi uma utopia emancipatória legítima ou um decisionismo ideológico perigoso?',
    complexity: 'Intermediário',
    keywords: ['direito alternativo', 'juízes do Rio Grande do Sul', 'emancipação social', 'decisionismo'],
    context: 'O movimento de magistrados brasileiros que propunha julgar contra a letra estrita da lei sempre que ela consagrasse injustiças materiais contra trabalhadores e sem-terra.',
    investigationPaths: [
      'As teses de Amilton Bueno de Carvalho e Rui Portanova sobre a função social transformadora do magistrado',
      'A denúncia do risco de anarquia jurídica e insegurança contratual para a economia do país',
      'A absorção posterior de várias das pautas alternativas pela jurisprudência constitucional oficial'
    ],
    counterpoint: 'Se um juiz jurou cumprir as leis da República, ele pode usar a toga para fazer revolução ideológica de esquerda ou direita segundo sua vontade pessoal?'
  },
  {
    id: 'SOCIO-12',
    category: 'Sociologia Jurídica',
    question: 'A expansão das faculdades de Direito no Brasil democratizou o ensino superior ou precarizou a formação jurídica?',
    complexity: 'Intermediário',
    keywords: ['ensino jurídico', 'proliferação de cursos', 'exame de ordem da OAB', 'bacharelismo'],
    context: 'O Brasil conta com mais de 1.800 cursos de Direito e quase 1,5 milhão de advogados, superando o número de faculdades jurídicas do restante do planeta somado.',
    investigationPaths: [
      'O mercantilismo da educação superior privada e a aprovação de cursos pelo MEC sem infraestrutura mínima',
      'O índice de reprovação no Exame de Ordem da OAB que supera frequentemente 80% dos concluintes',
      'A inclusão pioneira de milhões de jovens da primeira geração de famílias trabalhadoras no ensino superior'
    ],
    counterpoint: 'Fechar cursos ou dificultar o acesso sob o pretexto de exigência elitista de excelência não fecharia as portas do futuro para as classes populares?'
  },
  {
    id: 'SOCIO-13',
    category: 'Sociologia Jurídica',
    question: 'A eficácia da Lei Maria da Penha é limitada pela persistência de uma cultura machista que culpa a vítima?',
    complexity: 'Intermediário',
    keywords: ['Lei Maria da Penha', 'machismo institucional', 'medidas protetivas', 'revitimização'],
    context: 'Apesar do rigor normativo e das medidas protetivas de urgência, os índices de feminicídio continuam crescendo em diversos estados da federação.',
    investigationPaths: [
      'A revitimização institucional e as perguntas humilhantes formuladas a vítimas em delegacias e tribunais',
      'A falta de monitoramento policial contínuo e tornozeleiras eletrônicas em agressores que descumprem ordens de afastamento',
      'A necessidade urgente de intervenção na educação básica para desconstruir o ciúme possessivo e a masculinidade tóxica'
    ],
    counterpoint: 'Aumentar penas de prisão para crimes passionais não resolve o problema sem mudar a mentalidade cultural de homens que consideram mulheres como propriedade sua.'
  },
  {
    id: 'SOCIO-14',
    category: 'Sociologia Jurídica',
    question: 'A advocacia pro bono deve ser amplamente incentivada ou interfere na competência da Defensoria Pública?',
    complexity: 'Intermediário',
    keywords: ['advocacia pro bono', 'acesso à justiça', 'código de ética da OAB', 'defensoria pública'],
    context: 'A histórica resistência da OAB que durante anos restringiu a advocacia gratuita de grandes bancas por receio de captação desleal de clientela e enfraquecimento da Defensoria.',
    investigationPaths: [
      'A Resolução do Conselho Federal da OAB que autorizou a atuação pro bono para pessoas e entidades sociais sem fins lucrativos',
      'A responsabilidade social das grandes corporações jurídicas na resolução de litígios estratégicos de direitos humanos',
      'O dever constitucional indelegável do Estado de aparelhar e remunerar defensores públicos concursados'
    ],
    counterpoint: 'Com milhões de pessoas sem nenhuma assistência jurídica nas comarcas do interior, proibir advogados voluntários de ajudar os pobres é um corporativismo desumano.'
  },
  {
    id: 'SOCIO-15',
    category: 'Sociologia Jurídica',
    question: 'A digitalização integral dos processos (Judiciário 100% digital) aprofundou a exclusão de cidadãos sem letramento digital?',
    complexity: 'Intermediário',
    keywords: ['justiça digital', 'exclusão digital', 'balcão virtual', 'acesso aos tribunais'],
    context: 'O fechamento de fóruns presenciais e a exigência de acesso por aplicativos, tokens e audiências por videoconferência em um país com milhões de analfabetos digitais.',
    investigationPaths: [
      'A Resolução 354/2020 do CNJ sobre audiências telepresenciais e pontos de inclusão digital (PID)',
      'A economia de recursos públicos e a celeridade extraordinária para advogados e magistrados',
      'O obstáculo prático imposto a idosos e pessoas pobres que não possuem smartphone moderno ou plano de dados'
    ],
    counterpoint: 'Poder acompanhar o processo de casa sem ter que pagar passagem de ônibus e faltar ao dia de trabalho no fórum não facilitou a vida do cidadão comum?'
  },

  // --- HISTÓRIA DO DIREITO (15) ---
  {
    id: 'HIST-01',
    category: 'História do Direito',
    question: 'A Magna Carta de 1215 foi um marco autêntico dos direitos do povo ou um pacto elitista de privilégios feudais?',
    complexity: 'Intermediário',
    keywords: ['Magna Carta', 'devido processo legal', 'barões ingleses', 'feudalismo'],
    context: 'A mitificação histórica da carta outorgada pelo Rei João Sem Terra em confronto com a realidade de que o documento visava proteger privilégios da nobreza e do clero contra a coroa.',
    investigationPaths: [
      'A cláusula 39 da Magna Carta e o embrião do princípio do "due process of law" e do julgamento pelos pares',
      'A exclusão deliberada de 80% da população inglesa da época (camponeses e servos da gleba) dos benefícios do texto',
      'A apropriação e releitura do documento pelos juristas iluministas do século XVII (Edward Coke)'
    ],
    counterpoint: 'Mesmo tendo nascido como acordo de nobres, estabelecer pela primeira vez na história que o Rei estava subordinado à lei não revolucionou o Ocidente?'
  },
  {
    id: 'HIST-02',
    category: 'História do Direito',
    question: 'O Código Napoleônico de 1804 consagrou a igualdade burguesa ou subordinou as mulheres e os trabalhadores?',
    complexity: 'Intermediário',
    keywords: ['Código Napoleônico', 'Code Civil', 'igualdade formal', 'patriarcado legal'],
    context: 'A codificação que serviu de modelo para o mundo ocidental, unificando a propriedade privada e a liberdade contratual, mas impondo a incapacidade jurídica civil da mulher casada.',
    investigationPaths: [
      'A unificação das leis consuetudinárias francesas sob a égide da razão burguesa iluminista',
      'A sujeição legal estrita da mulher à autoridade marital e a proibição da busca de paternidade fora do casamento',
      'A consagração do direito de propriedade absoluta e da autonomia da vontade'
    ],
    counterpoint: 'Ao destruir definitivamente os privilégios de nascimento da nobreza e instituir a lei igual para todos os homens livres, o Código não foi uma conquista colossal?'
  },
  {
    id: 'HIST-03',
    category: 'História do Direito',
    question: 'A abolição da escravidão pela Lei Áurea em 1888 foi um ato de generosidade da monarquia ou resultado da resistência negra?',
    complexity: 'Intermediário',
    keywords: ['Lei Áurea', 'abolição da escravidão', 'quilombos', 'justiça de transição'],
    context: 'A narrativa tradicional da princesa redentora confrontada com a pressão militar das revoltas populares, quilombos urbanos, ações de liberdade de advogados negros e pressão britânica.',
    investigationPaths: [
      'A atuação jurídica pioneira de Luiz Gama libertando centenas de escravizados na Justiça paulista com base na Lei de 1831',
      'A omissão deliberada do Estado republicano e monárquico em conceder terras, indenizações ou escolas aos libertos',
      'A pressão geopolítica e econômica do Império Britânico contra o tráfico negreiro transatlântico'
    ],
    counterpoint: 'Negar a importância do ato formal da assinatura legal da princesa Isabel desconsidera a colossal resistência política dos grandes latifundiários escravocratas da época.'
  },
  {
    id: 'HIST-04',
    category: 'História do Direito',
    question: 'O Tribunal de Nuremberg em 1945 violou o princípio da anterioridade penal da lei para punir os nazistas?',
    complexity: 'Avançado',
    keywords: ['Tribunal de Nuremberg', 'crimes contra a humanidade', 'nullum crimen sine lege', 'justiça dos vencedores'],
    context: 'A acusação de juristas defensores de que os tipos de "crimes contra a paz" e "crimes contra a humanidade" não existiam previamente positivados em tratados formais com pena prévia estipulada.',
    investigationPaths: [
      'O Estatuto de Londres de 1945 e a criação do tribunal militar internacional interaliado',
      'O princípio da legalidade estrita versus a exigência moral inadiável de punir o genocídio industrial',
      'A crítica do jurista Hans Kelsen sobre a ausência de julgamento dos crimes de guerra cometidos pelos próprios aliados (Hiroshima e Dresden)'
    ],
    counterpoint: 'Permitir que os arquitetos do Holocausto fossem absolvidos alegando que a lei alemã vigente autorizava o extermínio de judeus seria a destruição moral da humanidade.'
  },
  {
    id: 'HIST-05',
    category: 'História do Direito',
    question: 'As Ordenações Filipinas moldaram a cultura patrimonialista e burocrática do direito brasileiro?',
    complexity: 'Intermediário',
    keywords: ['Ordenações Filipinas', 'direito colonial', 'patrimonialismo', 'direito luso-brasileiro'],
    context: 'O código régio português de 1603 que vigorou no Brasil por mais de três séculos (na parte civil até o Código de Clóvis Beviláqua de 1916).',
    investigationPaths: [
      'A fusão entre religião católica, autoridade real absolutista e punições corporais atrozes',
      'A tradição cartorária lusa de exigência de selos, registros e despachantes para validar qualquer ato civil',
      'A permanência da mentalidade estamental e desigual no cotidiano das instituições nacionais'
    ],
    counterpoint: 'As Ordenações garantiram a unidade jurídica e territorial de um país continental que de outra forma teria se esfacelado em repúblicas rivais como a América Espanhola.'
  },
  {
    id: 'HIST-06',
    category: 'História do Direito',
    question: 'A Constituição de Weimar de 1919 falhou por defeitos de engenharia jurídica ou por falta de democratas na sociedade?',
    complexity: 'Avançado',
    keywords: ['Constituição de Weimar', 'artigo 48', 'democracia sem democratas', 'direitos sociais'],
    context: 'O texto constitucional mais avançado de sua época em matéria de direitos sociais e garantias do trabalho, cujo art. 48 de poderes excepcionais foi usado para a ascensão do Terceiro Reich.',
    investigationPaths: [
      'O art. 48 da Constituição de Weimar e a governança autoritária por decretos de emergência sob o Presidente Hindenburg',
      'A crise econômica hiperinflacionária de 1923 e o desemprego em massa da Grande Depressão de 1929',
      'O diagnóstico sociológico de uma "República sem democratas", onde juízes e militares leais ao Kaiser sabotavam o regime'
    ],
    counterpoint: 'Uma Constituição técnica perfeita é incapaz de resistir quando a elite econômica e a população abraçam movimentos totalitários contra a liberdade.'
  },
  {
    id: 'HIST-07',
    category: 'História do Direito',
    question: 'O direito romano clássico era excessivamente focado na defesa da propriedade privada e de proprietários escravistas?',
    complexity: 'Intermediário',
    keywords: ['Direito Romano', 'Digesto', 'Corpus Juris Civilis', 'propriedade quiritária'],
    context: 'A sofisticação dogmática da jurisprudência clássica romana (Gaio, Ulpiano, Papiniano) como fruto da necessidade de regular contratos mercantis e posse de terras e escravos.',
    investigationPaths: [
      'O Corpus Juris Civilis de Justiniano e a recepção do direito romano na Europa medieval a partir de Bolonha',
      'A classificação civil dos escravos como coisas (res) destituídas de personalidade jurídica própria',
      'A invenção de conceitos imortais como a boa-fé, o enriquecimento sem causa e a responsabilidade extracontratual'
    ],
    counterpoint: 'Sem o vocabulário e a lógica rigorosa do direito romano, nenhum sistema jurídico moderno ocidental teria conseguido se desenvolver.'
  },
  {
    id: 'HIST-08',
    category: 'História do Direito',
    question: 'A Declaração dos Direitos do Homem e do Cidadão de 1789 foi universal ou excluiu mulheres e populações colonizadas?',
    complexity: 'Intermediário',
    keywords: ['Revolução Francesa', 'Declaração de 1789', 'Olympe de Gouges', 'colonialismo'],
    context: 'A proclamação dos direitos universais de liberdade, propriedade e segurança, confrontada com a guilhotina de Olympe de Gouges por exigir a "Declaração dos Direitos da Mulher".',
    investigationPaths: [
      'A Revolução Haitiana de 1791 e a relutância dos revolucionários franceses em abolir a escravidão nas colônias de cana-de-açúcar',
      'A recusa em conceder direito de voto ou cidadania ativa a mulheres e proletários sem terras (cidadãos passivos)',
      'A força expansiva universalizante das ideias que acabaram alimentando todas as lutas de libertação futuras'
    ],
    counterpoint: 'Apesar de suas limitações fáticas da época, fixar pela primeira vez na história ocidental que os homens nascem livres e iguais em direitos mudou o destino do mundo.'
  },
  {
    id: 'HIST-09',
    category: 'História do Direito',
    question: 'A criação da Justiça do Trabalho por Getúlio Vargas foi uma conquista operária ou um instrumento de tutela e desmobilização política?',
    complexity: 'Intermediário',
    keywords: ['Justiça do Trabalho', 'Estado Novo', 'Getúlio Vargas', 'corporativismo da Carta del Lavoro'],
    context: 'A outorga da CLT em 1943 e a criação da Justiça laboral inspirada no modelo corporativista da Carta del Lavoro da Itália fascista para atrelar sindicatos ao Ministério do Trabalho.',
    investigationPaths: [
      'A estrutura da unicidade sindical obrigatória e a cobrança do imposto sindical estatal',
      'A concessão de direitos fundamentais (férias, jornada de 8h, previdência) antes acessíveis apenas a grevistas violentamente reprimidos',
      'A proibição de greves e a cooptação dos líderes sindicais convertidos em burocratas do Estado'
    ],
    counterpoint: 'Para milhões de trabalhadores explorados de sol a sol sem nenhum amparo legal, a CLT representou a conquista real e histórica da sua dignidade humana.'
  },
  {
    id: 'HIST-10',
    category: 'História do Direito',
    question: 'Os Atos Institucionais da Ditadura Militar de 1964 criaram uma ordem jurídica autônoma ou puro poder fático?',
    complexity: 'Avançado',
    keywords: ['Atos Institucionais', 'AI-5', 'regime de 1964', 'poder constituinte revolucionário'],
    context: 'A proclamação do AI-1 ("a revolução vitoriosa se autolegitima") e do AI-5, cassando mandatos parlamentares e suspendendo o habeas corpus por decisões de generais.',
    investigationPaths: [
      'A teoria do "poder constituinte revolucionário originário" sustentada por juristas leais ao regime (Francisco Campos)',
      'O funcionamento cúmplice do STF com aposentadorias forçadas de ministros dissidentes e aumento de vagas',
      'A tese de que regimes autoritários mantêm a aparência formal de códigos e juízes para mascarar a violência política'
    ],
    counterpoint: 'Se o Supremo continuou julgando matérias cíveis e penais comuns e leis foram aprovadas no Congresso aberto, havia uma ordem legal em funcionamento?'
  },
  {
    id: 'HIST-11',
    category: 'História do Direito',
    question: 'O Código de Hamurabi (Lei de Talião) foi um avanço civilizatório para conter a vingança desmedida?',
    complexity: 'Intermediário',
    keywords: ['Código de Hamurabi', 'Lei de Talião', 'olho por olho', 'vingança privada'],
    context: 'A célebre máxima "olho por olho, dente por dente" frequentemente estigmatizada como bárbara, confrontada com o fato histórico de que ela limitou a retribuição à exata medida da agressão.',
    investigationPaths: [
      'A transição da vingança privada desmedida (em que a família da vítima matava toda a tribo do agressor) para a proporcionalidade taliônica',
      'A estratificação social do Código de Hamurabi: a vida de um nobre valia mais do que a de um homem livre e de um escravo',
      'A publicidade das leis esculpidas na pedra de diorito para que ninguém pudesse alegar desconhecimento'
    ],
    counterpoint: 'Impor a mutilação física deliberada de membros corporais e a morte como punição estatal oficial nunca pode ser qualificado como avanço civilizatório.'
  },
  {
    id: 'HIST-12',
    category: 'História do Direito',
    question: 'O habeas corpus nasceu na Inglaterra para proteger a liberdade de súditos ou os poderes de magistrados?',
    complexity: 'Intermediário',
    keywords: ['Habeas Corpus Act 1679', 'liberdade individual', 'jurisdição régia', 'história do processo'],
    context: 'A edição do Habeas Corpus Act de 1679 pelo parlamento inglês como vitória contra as ordens de prisão secreta decretadas pela Coroa britânica sem acusação formal.',
    investigationPaths: [
      'A petição de direito (Petition of Right) de 1628 e a resistência contra os abusos do Rei Carlos I',
      'A transplantação do remédio heróico para o Brasil no Código de Processo Criminal de 1832',
      'A doutrina brasileira do habeas corpus no início da República protegendo direitos não corporais (Ruy Barbosa)'
    ],
    counterpoint: 'Se o habeas corpus não tivesse sido positivado contra o Rei, qualquer cidadão ainda hoje poderia desaparecer para sempre nas masmorras do Estado.'
  },
  {
    id: 'HIST-13',
    category: 'História do Direito',
    question: 'A Constituição Imperial de 1824 com o Poder Moderador garantiu a integridade do Brasil às custas da democracia?',
    complexity: 'Intermediário',
    keywords: ['Constituição de 1824', 'Poder Moderador', 'Benjamin Constant', 'Império do Brasil'],
    context: 'A Constituição de maior vigência na história do país (65 anos), que assegurou estabilidade política e unidade territorial num continente em chamas, mas conferiu poderes quase imperiais ao monarca.',
    investigationPaths: [
      'A teoria do quarto poder de Benjamin Constant adaptada à figura sagrada e inviolável de D. Pedro II',
      'A dissolução do Parlamento e a demissão de gabinetes ministeriais ao arbítrio da Coroa',
      'O voto censitário baseado em renda de alqueires de mandioca excluindo a imensa maioria da população'
    ],
    counterpoint: 'Sem o Poder Moderador arbitrando as revoltas provinciais sangrentas, o Brasil teria se fragmentado em seis ou sete republiquetas beligerantes.'
  },
  {
    id: 'HIST-14',
    category: 'História do Direito',
    question: 'O julgamento de Galileu Galilei pela Inquisição Romana foi um choque entre ciência e fé ou uma disputa de poder e jurisdição?',
    complexity: 'Intermediário',
    keywords: ['Inquisição Romana', 'Galileu Galilei', 'heliocentrismo', 'jurisdição canônica'],
    context: 'A condenação de Galileu em 1633 por defender o copernicanismo, analisada pela ótica das regras processuais inquisitoriais e da autoridade da interpretação das Escrituras.',
    investigationPaths: [
      'O procedimento inquisitório do Santo Ofício e a exigência de retratação e abjuração solene de heresias',
      'A reação da Igreja Católica no contexto tenso da Reforma Protestante e o Concílio de Trento',
      'A autonomia epistêmica da ciência nascente em confronto com a teologia como fonte suprema do Direito'
    ],
    counterpoint: 'Submeter descobertas científicas empíricas irrefutáveis à autoridade de juízes religiosos é a essência do obscurantismo autoritário de qualquer época.'
  },
  {
    id: 'HIST-15',
    category: 'História do Direito',
    question: 'A transição da Primeira República para a Era Vargas em 1930 foi uma revolução modernizadora ou um golpe militar oligárquico?',
    complexity: 'Intermediário',
    keywords: ['Revolução de 1930', 'República Velha', 'política do café com leite', 'modernização conservadora'],
    context: 'A ruptura armada liderada por Getúlio Vargas que depôs Washington Luís e impediu a posse de Júlio Prestes, encerrando a hegemonia de paulistas e mineiros.',
    investigationPaths: [
      'A criação do Ministério do Trabalho, da Justiça Eleitoral e do voto feminino secreto na sequência imediata de 1930',
      'A suspensão da Constituição de 1891 e o governo provisório por decretos que desembocou na Revolução Constitucionalista de 1932',
      'O conceito de "modernização conservadora" na sociologia política brasileira'
    ],
    counterpoint: 'Se as eleições da República Velha eram fraudulentas com votos de cabresto e atas forjadas, 1930 não foi um golpe, mas o enterro de um regime apodrecido.'
  }
];
