import { Question } from '../../types';

export const publicLawQuestions: Question[] = [
  // --- DIREITO CONSTITUCIONAL (15) ---
  {
    id: 'CONST-01',
    category: 'Direito Constitucional',
    question: 'Uma democracia pode destruir a si mesma utilizando mecanismos puramente democráticos?',
    complexity: 'Avançado',
    keywords: ['democracia militante', 'cláusulas pétreas', 'soberania popular', 'Karl Loewenstein'],
    context: 'O paradoxo da tolerância e os limites materiais de reforma constitucional quando forças antissistema alcançam a maioria parlamentar por vias eleitorais regulares.',
    investigationPaths: [
      'A teoria da democracia militante (Streitbare Demokratie) na Lei Fundamental de Bonn',
      'Os limites implícitos e explícitos ao poder constituinte derivado reformador',
      'A jurisprudência do STF sobre desconstitucionalização e mutação inconstitucional'
    ],
    counterpoint: 'Se um tribunal não eleito barra a vontade soberana expressa pela esmagadora maioria dos cidadãos, a democracia ainda existe ou converteu-se em juristocracia?'
  },
  {
    id: 'CONST-02',
    category: 'Direito Constitucional',
    question: 'O Supremo Tribunal Federal deve atuar como vanguarda iluminista ou como árbitro procedimental da democracia?',
    complexity: 'Avançado',
    keywords: ['ativismo judicial', 'autocontenção', 'vanguarda iluminista', 'John Hart Ely'],
    context: 'A tensão perpétua entre a teoria procedimentalista de John Hart Ely (reforço da representação) e teses substantivistas que conferem à corte a missão de empurrar a história quando o parlamento omite-se.',
    investigationPaths: [
      'A tese de Luís Roberto Barroso sobre papéis contramajoritário, representativo e iluminista',
      'A crítica procedimentalista de Jeremy Waldron contra a supremacia judicial sobre direitos',
      'Casos paradigmáticos do STF em matérias de despenalização, uniões estáveis e biografia não autorizada'
    ],
    counterpoint: 'Quando o Congresso Nacional deliberadamente silencia diante da violação flagrante de minorias vulneráveis, a abstenção judicial é neutralidade ou cumplicidade constitucional?'
  },
  {
    id: 'CONST-03',
    category: 'Direito Constitucional',
    question: 'Existe direito adquirido contra normas constitucionais originárias?',
    complexity: 'Intermediário',
    keywords: ['poder constituinte originário', 'direito adquirido', 'segurança jurídica', 'retroatividade'],
    context: 'O choque dogmático entre a soberania incondicionada do Poder Constituinte Originário e o postulado da segurança jurídica e da confiança legítima.',
    investigationPaths: [
      'A doutrina clássica de Sieyès e a tese da eficácia jurídica plena e imediata da nova Constituição',
      'A teoria dos direitos fundamentais pré-estatais e indisponíveis',
      'O posicionamento uníssono da jurisprudência brasileira e suas consequências para reformas profundas'
    ],
    counterpoint: 'Se nem mesmo direitos fundamentais consolidados resistem à ruptura originária, a ordem jurídica assenta-se sobre o Direito ou sobre a força fática?'
  },
  {
    id: 'CONST-04',
    category: 'Direito Constitucional',
    question: 'A liberdade de expressão protege o discurso que visa extinguir a própria liberdade de expressão?',
    complexity: 'Avançado',
    keywords: ['liberdade de expressão', 'hate speech', 'paradoxo de Popper', 'mercado livre de ideias'],
    context: 'O confronto entre a tradição norte-americana da Primeira Emenda (perigo real e iminente) e o modelo europeu/brasileiro de ponderação e proteção de bens jurídicos da personalidade.',
    investigationPaths: [
      'O julgamento do Caso Ellwanger (HC 82.424/RS) no STF e o antissemitismo',
      'A doutrina do "Clear and Present Danger" de Oliver Wendell Holmes Jr.',
      'O paradoxo da tolerância formulado por Karl Popper em "A Sociedade Aberta e Seus Inimigos"'
    ],
    counterpoint: 'Permitir que agentes estatais determinem preventivamente quais discursos são "inaceitáveis" não concede ao governo em turno a ferramenta perfeita para silenciar dissidentes?'
  },
  {
    id: 'CONST-05',
    category: 'Direito Constitucional',
    question: 'O princípio da proporcionalidade confere discricionariedade desmedida aos juízes?',
    complexity: 'Avançado',
    keywords: ['proporcionalidade', 'ponderação', 'Robert Alexy', 'Jürgen Habermas'],
    context: 'A crítica habermasiana à teoria dos princípios de Robert Alexy: a ponderação correria o risco de rebaixar direitos de normas deontológicas a meros valores comparáveis.',
    investigationPaths: [
      'Os três subprincípios da proporcionalidade: adequação, necessidade e proporcionalidade estrita',
      'A crítica de Jürgen Habermas e Bernardo Gonçalves Fernandes sobre o decisionismo metodológico',
      'O uso retórico da proporcionalidade nas decisões dos tribunais superiores brasileiros'
    ],
    counterpoint: 'Sem um método racional de ponderação, como resolver colisões genuínas entre vida e liberdade religiosa sem cair no arbítrio subjetivo?'
  },
  {
    id: 'CONST-06',
    category: 'Direito Constitucional',
    question: 'O federalismo brasileiro é excessivamente centralizador em detrimento dos Estados e Municípios?',
    complexity: 'Intermediário',
    keywords: ['pacto federativo', 'competências constitucionais', 'repartição de rendas', 'centralização'],
    context: 'A assimetria na partilha de receitas tributárias e competências legislativas em favor da União gera dependência política e enfraquece a autonomia local.',
    investigationPaths: [
      'A distribuição de competências legislativas privativas e concorrentes no art. 22 e 24 da CF/88',
      'A guerra fiscal e a dependência do Fundo de Participação dos Estados (FPE)',
      'O federalismo sanitário reconhecido pelo STF durante a pandemia da COVID-19 (ADI 6341)'
    ],
    counterpoint: 'Num país de dimensões continentais com abismos socioeconômicos brutais, uma descentralização radical não aprofundaria a fragmentação e a desigualdade regional?'
  },
  {
    id: 'CONST-07',
    category: 'Direito Constitucional',
    question: 'Pode o Judiciário determinar a implementação de políticas públicas de alto impacto orçamentário?',
    complexity: 'Avançado',
    keywords: ['reserva do possível', 'mínimo existencial', 'judicialização da saúde', 'separação de poderes'],
    context: 'O embate entre a garantia do mínimo existencial como precondição da dignidade e os limites da reserva do possível ante a escassez real de recursos públicos.',
    investigationPaths: [
      'O Tema 6 da Repercussão Geral do STF sobre fornecimento de medicamentos de alto custo',
      'A doutrina alemã do Vorbehalt des Möglichen versus o núcleo essencial dos direitos sociais',
      'O impacto da judicialização predatória nas finanças de municípios vulneráveis'
    ],
    counterpoint: 'Se o Executivo negligencia a compra de remédios vitais para priorizar gastos supérfluos, o Judiciário deve assistir inerte à morte do cidadão hipossuficiente?'
  },
  {
    id: 'CONST-08',
    category: 'Direito Constitucional',
    question: 'As Forças Armadas possuem papel de poder moderador na ordem constitucional de 1988?',
    complexity: 'Intermediário',
    keywords: ['artigo 142', 'poder moderador', 'hierarquia constitucional', 'estado democrático de direito'],
    context: 'A discussão jurídica em torno da hermenêutica do art. 142 da CF/88 e a definitiva exclusão de qualquer tutela militar sobre os poderes civis.',
    investigationPaths: [
      'O julgamento da ADI 6457 pelo STF e a proibição de intervenção militar arbitrária',
      'A genealogia do Poder Moderador no Império e sua incompatibilidade com a República',
      'O conceito de autoridade suprema do Presidente da República e seus limites constitucionais estritos'
    ],
    counterpoint: 'Em situações de colapso institucional generalizado ou conluio entre os poderes civis, a Constituição previu mecanismos autossuficientes de restauração?'
  },
  {
    id: 'CONST-09',
    category: 'Direito Constitucional',
    question: 'O mandato por tempo determinado para ministros do STF fortalecerá ou enfraquecerá a independência judicial?',
    complexity: 'Intermediário',
    keywords: ['mandato fixo', 'vitaliceidade', 'independência judicial', 'tribunais constitucionais'],
    context: 'Propostas de emenda constitucional para instituir mandatos não renováveis de 8 a 12 anos na Suprema Corte, espelhando modelos europeus.',
    investigationPaths: [
      'O modelo do Tribunal Constitucional Federal alemão (BVerfG) com mandato de 12 anos',
      'O risco de alinhamento com interesses corporativos ou políticos no pós-mandato',
      'A alternância de maiorias interpretativas versus a segurança jurídica e a estabilidade da jurisprudência'
    ],
    counterpoint: 'Manter julgadores na mais alta corte por até 35 anos não os descola excessivamente das transformações morais e culturais da sociedade?'
  },
  {
    id: 'CONST-10',
    category: 'Direito Constitucional',
    question: 'A desobediência civil pacífica pode ser considerada um direito constitucional implícito?',
    complexity: 'Avançado',
    keywords: ['desobediência civil', 'Henry David Thoreau', 'John Rawls', 'resistência constitucional'],
    context: 'O reconhecimento da legitimidade moral e jurídica de transgredir publicamente uma lei manifestamente injusta para apelar ao senso de justiça da maioria.',
    investigationPaths: [
      'A teoria da desobediência civil em "Uma Teoria da Justiça" de John Rawls',
      'O direito de resistência na história constitucional ocidental (da Magna Carta à Declaração de 1789)',
      'A fronteira entre desobediência civil pacífica e criminalidade política ou sabotagem institucional'
    ],
    counterpoint: 'Se cada cidadão ou grupo puder legitimar a inobservância da lei segundo sua própria convicção moral, a autoridade do ordenamento jurídico não desmorona?'
  },
  {
    id: 'CONST-11',
    category: 'Direito Constitucional',
    question: 'As decisões judiciais monocráticas com efeito erga omnes violam o princípio da colegialidade?',
    complexity: 'Intermediário',
    keywords: ['medidas cautelares', 'decisões monocráticas', 'colegialidade', 'segurança jurídica'],
    context: 'A concessão frequente de liminares individuais por ministros do STF suspendendo leis aprovadas pelo parlamento antes da manifestação do plenário.',
    investigationPaths: [
      'A Emenda Regimental nº 58 do STF que impôs prazos e colegialidade obrigatória para liminares',
      'O art. 97 da CF/88 (cláusula de reserva de plenário) e sua incidência no controle cautelar',
      'A dinâmica do "individualismo decisório" analisada pela sociologia das cortes'
    ],
    counterpoint: 'Em casos de dano irreparável iminente durante o recesso judiciário, proibir a liminar monocrática não tornaria a proteção jurisdicional inútil?'
  },
  {
    id: 'CONST-12',
    category: 'Direito Constitucional',
    question: 'A laicidade do Estado brasileiro é compatível com o preâmbulo constitucional que invoca a proteção de Deus?',
    complexity: 'Intermediário',
    keywords: ['estado laico', 'preâmbulo constitucional', 'símbolos religiosos', 'neutralidade confessional'],
    context: 'A eficácia jurídica do preâmbulo da CF/88 e o dever de neutralidade confessional do Estado frente a símbolos religiosos em repartições públicas.',
    investigationPaths: [
      'A ADI 2076 sobre a força normativa (ou falta dela) do preâmbulo constitucional',
      'O julgamento do STF sobre crucifixos em tribunais e feriados religiosos nacionais',
      'A distinção entre laicidade colaborativa e laicismo antirreligioso francês'
    ],
    counterpoint: 'Remover símbolos históricos profundamente arraigados na cultura popular representa neutralidade estatal ou uma imposição ideológica secularista?'
  },
  {
    id: 'CONST-13',
    category: 'Direito Constitucional',
    question: 'A imunidade parlamentar material pode abrigar discursos que incitam crimes contra as instituições?',
    complexity: 'Avançado',
    keywords: ['imunidade material', 'inviolabilidade parlamentar', 'artigo 53', 'crimes contra a democracia'],
    context: 'O alcance da inviolabilidade civil e penal do parlamentar por quaisquer de suas opiniões, palavras e votos (art. 53, CF) em relação ao nexo funcional.',
    investigationPaths: [
      'O julgamento do Caso Daniel Silveira (AP 1044) no STF e os limites da imunidade',
      'A teoria do nexo causal estrito entre a palavra proferida e o exercício do mandato eletivo',
      'A proteção histórica contra perseguições executivas versus a prevenção de agressões golpistas'
    ],
    counterpoint: 'Relativizar a imunidade por critérios interpretativos variáveis não reabre a porta para que maiorias governamentais processem opositores estridentes?'
  },
  {
    id: 'CONST-14',
    category: 'Direito Constitucional',
    question: 'Existe um dever constitucional de punir violações de direitos humanos que invalide leis de anistia?',
    complexity: 'Avançado',
    keywords: ['justiça de transição', 'lei de anistia', 'Corte IDH', 'Caso Gomes Lund'],
    context: 'O choque jurisprudencial entre a decisão do STF na ADPF 153 (recepção da Lei de Anistia) e as sentenças da Corte Interamericana de Direitos Humanos.',
    investigationPaths: [
      'A sentença da Corte IDH no caso Gomes Lund ("Guerrilha do Araguaia") contra o Brasil',
      'O controle de convencionalidade difuso e concentrado e o status supralegal dos tratados',
      'A transição pactuada brasileira versus o modelo de julgamento argentino e chileno'
    ],
    counterpoint: 'Desconstituir quatro décadas depois um acordo político fundacional não violaria o princípio da segurança jurídica e da pacificação social?'
  },
  {
    id: 'CONST-15',
    category: 'Direito Constitucional',
    question: 'O princípio da anterioridade tributária protege o contribuinte ou engessa indevidamente a capacidade estatal de resposta a crises?',
    complexity: 'Intermediário',
    keywords: ['anterioridade nonagesimal', 'anterioridade anual', 'confiança legítima', 'crise fiscal'],
    context: 'A rigidez das garantias constitucionais tributárias do art. 150 diante de emergências econômicas e desastres climáticos.',
    investigationPaths: [
      'As exceções expressas à anterioridade (impostos regulatórios e empréstimos compulsórios de calamidade)',
      'A vedação à surpresa fiscal como desdobramento do princípio do Estado de Direito',
      'A jurisprudência do STF sobre a revogação de benefícios fiscais e o princípio da anterioridade'
    ],
    counterpoint: 'Sem a anterioridade, os governos não cobririam déficits crônicos de gestão aumentando a carga tributária da noite para o dia sem planejamento?'
  },

  // --- DIREITO ADMINISTRATIVO (15) ---
  {
    id: 'ADM-01',
    category: 'Direito Administrativo',
    question: 'Até que ponto a discricionariedade administrativa pode ser controlada pelo Poder Judiciário?',
    complexity: 'Avançado',
    keywords: ['discricionariedade', 'mérito administrativo', 'controle judicial', 'LINDB'],
    context: 'A linha tênue entre a anulação de atos desproporcionais ou desprovidos de razoabilidade e a indevida substituição das escolhas de gestão técnica do Executivo.',
    investigationPaths: [
      'Os artigos 20, 21 e 22 da LINDB (Lei de Introdução às Normas do Direito Brasileiro)',
      'A teoria dos motivos determinantes e o desvio de finalidade',
      'A doutrina da deferência administrativa (doutrina Chevron norte-americana adaptada ao Brasil)'
    ],
    counterpoint: 'Se o juiz não foi eleito nem possui especialização técnica sobre a política pública, por que sua escolha de alocação de recursos seria superior à do gestor?'
  },
  {
    id: 'ADM-02',
    category: 'Direito Administrativo',
    question: 'A exigência de dolo na Lei de Improbidade Administrativa enfraqueceu o combate à corrupção ou protegeu o bom gestor?',
    complexity: 'Intermediário',
    keywords: ['improbidade administrativa', 'Lei 14.230/2021', 'dolo específico', 'apagão das canetas'],
    context: 'A reforma da Lei 8.429/92 pela Lei 14.230/2021, que extinguiu a modalidade culposa no dano ao erário e exigiu dolo específico com finalidade ilícita.',
    investigationPaths: [
      'O julgamento do Tema 1199 pelo STF sobre a irretroatividade da nova lei de improbidade',
      'O fenômeno sociológico e jurídico do "apagão das canetas" e o medo da responsabilização pessoal',
      'A fronteira entre a mera inabilidade administrativa e o ato de improbidade doloso'
    ],
    counterpoint: 'Isentar o administrador grosseiramente negligente que quebra o patrimônio público não premia a incompetência irresponsável com dinheiro dos impostos?'
  },
  {
    id: 'ADM-03',
    category: 'Direito Administrativo',
    question: 'A supremacia do interesse público sobre o privado é um axioma absoluto ou um mito autoritário?',
    complexity: 'Avançado',
    keywords: ['supremacia do interesse público', 'desconstrução dogmática', 'princípio da legalidade', 'Humberto Ávila'],
    context: 'A virada doutrinária contemporânea (Daniel Sarmento, Humberto Ávila) questionando o postulado clássico de Celso Antônio Bandeira de Mello à luz do Estado Democrático de Direito.',
    investigationPaths: [
      'A distinção entre interesse público primário (da coletividade) e secundário (do aparato estatal)',
      'A ponderação de bens na colisão entre prerrogativas públicas e garantias individuais',
      'A desapropriação e os casos de sacrifício desproporcional de direitos particulares'
    ],
    counterpoint: 'Se não houver prevalência prima facie do interesse coletivo, como construir rodovias, vacinar populações ou arrecadar tributos sem o veto egoísta de cada indivíduo?'
  },
  {
    id: 'ADM-04',
    category: 'Direito Administrativo',
    question: 'A estabilidade dos servidores públicos é uma garantia de estado ou um entrave à eficiência da administração?',
    complexity: 'Intermediário',
    keywords: ['estabilidade no serviço público', 'artigo 41', 'avaliação de desempenho', 'reforma administrativa'],
    context: 'O confronto entre a necessidade de blindar o corpo burocrático contra perseguições políticas partidárias e a dificuldade prática de demitir servidores inoperantes.',
    investigationPaths: [
      'A regulamentação pendente do art. 41, § 1º, III da CF (avaliação periódica de desempenho)',
      'A experiência internacional comparada com regimes híbridos de emprego público',
      'O custo financeiro e funcional da inamovibilidade burocrática versus o patrimonialismo do clientelismo'
    ],
    counterpoint: 'Sem estabilidade, o que impediria um prefeito ou governador de demitir fiscais, delegados e auditores que recusem compactuar com esquemas ilícitos?'
  },
  {
    id: 'ADM-05',
    category: 'Direito Administrativo',
    question: 'As agências reguladoras devem ter independência decisória mesmo contra diretrizes políticas do governo eleito?',
    complexity: 'Avançado',
    keywords: ['agências reguladoras', 'captura regulatória', 'mandato fixo', 'independência técnica'],
    context: 'O conflito entre a legitimidade democrática conferida pelo sufrágio universal às diretrizes presidenciais e a estabilidade das regras de mercado garantida por mandatos fixos em agências.',
    investigationPaths: [
      'A Lei Geral das Agências Reguladoras (Lei 13.848/2019) e os critérios técnicos de nomeação',
      'A teoria da captura do regulador por grupos econômicos dominantes',
      'O poder de supervisão ministerial versus a autonomia regulatória decisória'
    ],
    counterpoint: 'Se o povo elege um presidente com um programa econômico oposto, é democrático que dirigentes nomeados pela gestão anterior paralisem as novas diretrizes?'
  },
  {
    id: 'ADM-06',
    category: 'Direito Administrativo',
    question: 'A consensualidade na Administração Pública pode abrir brechas para transações lesivas ao interesse público?',
    complexity: 'Intermediário',
    keywords: ['consensualidade administrativa', 'acordo de leniência', 'arbitragem pública', 'TAC'],
    context: 'O deslocamento do modelo autoritário unilateral para o modelo de acordos (TACs, acordos de leniência, arbitragem e mediação administrativa).',
    investigationPaths: [
      'A Lei Anticorrupção (Lei 12.846/2013) e os requisitos dos acordos de leniência',
      'A atuação coordenada entre CGU, AGU, TCU e Ministério Público Federal',
      'Os limites indisponíveis do interesse público em mesas de conciliação'
    ],
    counterpoint: 'Em litígios complexos que durariam décadas, negociar concessões imediatas não recupera mais recursos e salva empregos do que sentenças inócuas?'
  },
  {
    id: 'ADM-07',
    category: 'Direito Administrativo',
    question: 'O princípio da publicidade pode ser relativizado em nome da segurança do Estado e da intimidade de autoridades?',
    complexity: 'Intermediário',
    keywords: ['Lei de Acesso à Informação', 'sigilo de 100 anos', 'transparência ativa', 'artigo 5º XXXIII'],
    context: 'O uso controverso de decretos e portarias impondo sigilos centenários sobre agendas, prontuários de saúde e gastos de autoridades públicas.',
    investigationPaths: [
      'A Lei 12.527/2011 (LAI) e as hipóteses restritas de classificação ultra-secreta',
      'O princípio republicano e a presunção universal de publicidade dos atos estatais',
      'A ponderação entre a honra e intimidade de figuras públicas e o dever de prestar contas'
    ],
    counterpoint: 'Expor integralmente informações estratégicas de segurança institucional e negociações geopolíticas delicadas não vulnera a integridade da própria soberania nacional?'
  },
  {
    id: 'ADM-08',
    category: 'Direito Administrativo',
    question: 'O controle exercido pelos Tribunais de Contas invade prerrogativas do gestor público eleito?',
    complexity: 'Avançado',
    keywords: ['Tribunais de Contas', 'controle externo', 'TCU', 'apreciação de legalidade e economicidade'],
    context: 'A expansão da jurisdição dos Tribunais de Contas, saindo da auditoria formal de legalidade contábil para a análise substancial de conveniência e oportunidade de editais.',
    investigationPaths: [
      'A jurisprudência do STF sobre as cautelares expedidas pelo TCU para paralisar licitações',
      'O controle de economicidade previsto no art. 70 da CF/88',
      'O risco de substituição da vontade política pelo corpo técnico dos tribunais fiscalizadores'
    ],
    counterpoint: 'Se o TCU não puder barrar obras superfaturadas antes do desembolso, esperar o desfecho judicial posterior não equivale a admitir o desvio consumado?'
  },
  {
    id: 'ADM-09',
    category: 'Direito Administrativo',
    question: 'A privatização e as parcerias público-privadas transferem o lucro ao capital privado e o risco ao Estado?',
    complexity: 'Intermediário',
    keywords: ['parcerias público-privadas', 'concessões públicas', 'equilíbrio econômico-financeiro', 'matriz de riscos'],
    context: 'A recorrente repactuação de contratos de infraestrutura rodoviária e aeroportuária em que o poder público assume prejuízos e renegocia outorgas inadimplentes.',
    investigationPaths: [
      'A Lei 11.079/2004 e a modelagem da repartição objetiva de riscos entre concedente e concessionária',
      'A teoria da imprevisão e o reequilíbrio econômico-financeiro contratual',
      'A eficiência da prestação de serviços essenciais na iniciativa privada versus tarifas abusivas'
    ],
    counterpoint: 'O setor público tem capacidade orçamentária para investir dezenas de bilhões de reais por ano em ferrovias, portos e saneamento sem o aporte do capital privado?'
  },
  {
    id: 'ADM-10',
    category: 'Direito Administrativo',
    question: 'A responsabilidade civil do Estado por omissão deve ser sempre subjetiva?',
    complexity: 'Avançado',
    keywords: ['responsabilidade civil do Estado', 'faute du service', 'omissão estatal', 'artigo 37 § 6º'],
    context: 'O embate doutrinário e jurisprudencial sobre a aplicação da responsabilidade objetiva ou subjetiva em omissões específicas do poder público (ex: custódia em presídios e hospitais).',
    investigationPaths: [
      'A distinção clássica de Celso Antônio Bandeira de Mello entre omissão genérica e específica',
      'A jurisprudência do STF no RE 841.526 (morte de detento sob custódia estatal)',
      'A teoria da causalidade adequada versus teoria do dano direto e imediato'
    ],
    counterpoint: 'Tornar a responsabilidade objetiva irrestrita por qualquer crime ocorrido nas ruas não converteria o Estado em segurador universal falido?'
  },
  {
    id: 'ADM-11',
    category: 'Direito Administrativo',
    question: 'A nova Lei de Licitações (Lei 14.133/2021) reduziu a burocracia ou elevou o custo de conformidade para pequenas empresas?',
    complexity: 'Intermediário',
    keywords: ['Lei 14.133/2021', 'diálogo competitivo', 'compliance licitatório', 'menor preço'],
    context: 'A modernização do regime de compras públicas, com a criação do diálogo competitivo e novas exigências de governança e integridade.',
    investigationPaths: [
      'A absorção de tecnologias digitais e o Portal Nacional de Contratações Públicas (PNCP)',
      'O impacto da exigência de matriz de riscos e programas de integridade sobre fornecedores locais',
      'A superação da cultura do mero menor preço em prol da sustentabilidade e do ciclo de vida'
    ],
    counterpoint: 'Regras simplistas e sem rigor documental no passado não foram exatamente a porta de entrada das maiores quadrilhas de desvio em prefeituras?'
  },
  {
    id: 'ADM-12',
    category: 'Direito Administrativo',
    question: 'O poder de polícia sanitária pode obrigar indivíduos a tratamentos ou vacinação contra a sua vontade consciente?',
    complexity: 'Avançado',
    keywords: ['poder de polícia', 'vacinação compulsória', 'liberdade individual', 'saúde pública'],
    context: 'A colisão entre a intangibilidade do corpo humano e as medidas de restrição indireta para assegurar a imunidade coletiva contra epidemias.',
    investigationPaths: [
      'O julgamento das ADIs 6586 e 6587 pelo STF sobre vacinação compulsória',
      'A distinção entre vacinação forçada (coação física direta) e compulsória (restrições indiretas de direitos)',
      'O dever fundamental de proteção à saúde pública como bem comum'
    ],
    counterpoint: 'Se o indivíduo recusa a vacina, seu ato individual não impõe um risco real e desproporcional a pessoas imunodeprimidas que não podem se vacinar?'
  },
  {
    id: 'ADM-13',
    category: 'Direito Administrativo',
    question: 'A desapropriação com pagamento em títulos da dívida pública pune indevidamente o proprietário improdutivo ou é instrumento essencial de justiça fundiária?',
    complexity: 'Intermediário',
    keywords: ['função social da propriedade', 'desapropriação sanção', 'títulos da dívida pública', 'reforma agrária'],
    context: 'O rigor dos artigos 182 e 184 da CF/88, que autorizam o pagamento postergado em títulos no caso de descumprimento da função social urbana e rural.',
    investigationPaths: [
      'A garantia constitucional da justa e prévia indenização em dinheiro como regra geral',
      'O regime jurídico dos Títulos da Dívida Agrária (TDA) e da Dívida Pública Urbana',
      'A eficácia redistributiva versus a litigiosidade sobre a definição de índice de produtividade'
    ],
    counterpoint: 'Pagar em dinheiro vivo por imóveis abandonados e especulativos premiaria a especulação e tornaria inviável qualquer reforma urbana ou agrária pelo Estado.'
  },
  {
    id: 'ADM-14',
    category: 'Direito Administrativo',
    question: 'O nepotismo cruzado pode ser plenamente erradicado sem uma vedação expressa a cargos políticos no ordenamento?',
    complexity: 'Intermediário',
    keywords: ['Súmula Vinculante 13', 'nepotismo cruzado', 'cargos políticos', 'moralidade administrativa'],
    context: 'A jurisprudência do STF que ressalvou cargos de natureza política (como Ministros e Secretários de Estado) do alcance automático da Súmula Vinculante 13.',
    investigationPaths: [
      'A ratio decidendi do julgamento do RE 579.951 e da Súmula Vinculante 13',
      'A exigência de qualificação técnica mesmo em cargos eminentemente políticos',
      'O princípio da impessoalidade e da moralidade inscritos no caput do art. 37 da CF'
    ],
    counterpoint: 'Cargos de ministros e secretários não exigem, além da técnica, relação de estrita confiança pessoal com o governante que foi legitimado nas urnas?'
  },
  {
    id: 'ADM-15',
    category: 'Direito Administrativo',
    question: 'A utilização de inteligência artificial em decisões administrativas viola o princípio da motivação?',
    complexity: 'Avançado',
    keywords: ['automação administrativa', 'inteligência artificial', 'dever de motivação', 'opacidade algorítmica'],
    context: 'O uso de modelos preditivos por órgãos públicos (como INSS e Receita Federal) para deferir ou indeferir benefícios e autuações fiscais.',
    investigationPaths: [
      'O direito fundamental à explicação algorítmica e a transparência pública',
      'A Lei 9.784/99 (Processo Administrativo Federal) e o art. 50 sobre a motivação detalhada',
      'O risco de alucinação e viés sistemático reproduzido em larga escala contra cidadãos vulneráveis'
    ],
    counterpoint: 'A triagem automatizada não é a única saída material viável para analisar milhões de pedidos represados de auxílios previdenciários emergenciais?'
  },

  // --- DIREITO TRIBUTÁRIO (15) ---
  {
    id: 'TRIB-01',
    category: 'Direito Tributário',
    question: 'A tributação sobre o consumo no Brasil aprofunda estruturalmente a desigualdade social?',
    complexity: 'Intermediário',
    keywords: ['regressividade tributária', 'tributação sobre o consumo', 'capacidade contributiva', 'reforma tributária'],
    context: 'O desenho do sistema tributário brasileiro, que concentra a maior parte da arrecadação em tributos indiretos (ICMS, IPI, PIS/Cofins, agora IBS/CBS) incidindo uniformemente sobre ricos e pobres.',
    investigationPaths: [
      'A Reforma Tributária da Emenda Constitucional 132/2023 e o mecanismo de cashback do imposto',
      'O princípio da capacidade contributiva (art. 145, § 1º, CF) versus a facilidade arrecadatória',
      'Estudos comparativos da OCDE sobre a proporção de impostos sobre renda e patrimônio versus consumo'
    ],
    counterpoint: 'Tributar o consumo não garante a previsibilidade e a capilaridade arrecadatória de que um Estado prestador de serviços universais precisa para não quebrar?'
  },
  {
    id: 'TRIB-02',
    category: 'Direito Tributário',
    question: 'O planejamento tributário agressivo deve ser considerado elisão lícita ou evasão fiscal disfarçada?',
    complexity: 'Avançado',
    keywords: ['elisão fiscal', 'propósito negocial', 'norma antielisiva', 'artigo 116 CTN'],
    context: 'A validade jurídica da desconsideração de atos e negócios jurídicos desprovidos de propósito negocial substancial, criados unicamente para reduzir a carga de tributos.',
    investigationPaths: [
      'O parágrafo único do art. 116 do CTN e o julgamento da ADI 2446 pelo STF',
      'A doutrina do "business purpose" e o combate a estruturas corporativas puramente artificiais',
      'A liberdade de auto-organização empresarial e o direito de optar pela via menos onerosa'
    ],
    counterpoint: 'Punir o contribuinte que organiza seus contratos estritamente dentro da lei formal não transfere a insegurança jurídica da redação legal para o arbítrio do fiscal?'
  },
  {
    id: 'TRIB-03',
    category: 'Direito Tributário',
    question: 'A instituição do Imposto sobre Grandes Fortunas é economicamente ineficaz ou indispensável para a justiça distributiva?',
    complexity: 'Intermediário',
    keywords: ['IGF', 'artigo 153 VII', 'fuga de capitais', 'justiça distributiva', 'Thomas Piketty'],
    context: 'A previsão constitucional do art. 153, VII nunca regulamentada pelo Congresso e a controvérsia sobre a evasão fiscal internacional versus a concentração de renda.',
    investigationPaths: [
      'As experiências de França, Noruega e Espanha com impostos patrimoniais e suas taxas de arrecadação líquida',
      'A tese de Thomas Piketty sobre o rendimento do capital superior ao crescimento econômico (r > g)',
      'O risco real de desinvestimento e transferência de domicílio fiscal para paraísos tributários'
    ],
    counterpoint: 'Se países ricos revogaram o imposto por custar mais na fiscalização do que arrecadou e expulsar investimentos produtivos, por que o Brasil teria resultado diferente?'
  },
  {
    id: 'TRIB-04',
    category: 'Direito Tributário',
    question: 'O não recolhimento de ICMS próprio cobrado do consumidor pode ser criminalizado sem violar a vedação de prisão por dívida?',
    complexity: 'Avançado',
    keywords: ['criminalização de ICMS', 'apropriação indébita tributária', 'RHC 163.334', 'prisão por dívida'],
    context: 'A polêmica decisão do STF no RHC 163.334 fixando que o não recolhimento contumaz e doloso de ICMS declarado configura o crime do art. 2º, II da Lei 8.137/90.',
    investigationPaths: [
      'A garantia do Pacto de São José da Costa Rica contra prisão por dívidas civis',
      'A equiparação entre o valor destacado na nota fiscal e a custódia de dinheiro de terceiro',
      'O risco de instrumentalização do Direito Penal como mero cobrador de dívidas fiscais do Estado'
    ],
    counterpoint: 'O empresário que cobra o imposto embutido no preço do consumidor e não repassa aos cofres públicos não se apropria de recurso que jamais foi legitimamente seu?'
  },
  {
    id: 'TRIB-05',
    category: 'Direito Tributário',
    question: 'A extrafiscalidade dos tributos ambientais pode ser desvirtuada para arrecadar recursos em vez de proteger o ecossistema?',
    complexity: 'Intermediário',
    keywords: ['extrafiscalidade', 'tributação ambiental', 'princípio do poluidor-pagador', 'greenwashing fiscal'],
    context: 'A criação de taxas e alíquotas majoradas sob pretexto ecológico que não induzem comportamentos sustentáveis e funcionam como caixas arrecadatórios gerais.',
    investigationPaths: [
      'O princípio do poluidor-pagador e a função indutora das normas tributárias (Schoueri)',
      'A jurisprudência do STF sobre as Taxas de Controle e Fiscalização Ambiental estaduais',
      'O Imposto Seletivo ("imposto do pecado") instituído na Reforma Tributária da EC 132/23'
    ],
    counterpoint: 'Se a alíquota for alta o suficiente para desestimular atividades poluidoras, a arrecadação não é mera consequência secundária legítima?'
  },
  {
    id: 'TRIB-06',
    category: 'Direito Tributário',
    question: 'A guerra fiscal entre os Estados da federação promove desenvolvimento regional ou canibalismo orçamentário?',
    complexity: 'Intermediário',
    keywords: ['guerra fiscal', 'benefícios de ICMS', 'LC 160/2017', 'pacto federativo'],
    context: 'A concessão unilateral de isenções e créditos presumidos sem aval do Confaz como atrativo para fábricas e centros de distribuição.',
    investigationPaths: [
      'O art. 155, § 2º, XII, "g" da CF e a Lei Complementar 24/75',
      'A remissão e validação de benefícios fiscais pela Lei Complementar 160/2017',
      'O modelo de transição do imposto sobre consumo da origem para o destino na EC 132/23'
    ],
    counterpoint: 'Como estados do interior e regiões economicamente desfavorecidas poderiam atrair investimentos sem oferecer incentivos tributários iniciais competitivos?'
  },
  {
    id: 'TRIB-07',
    category: 'Direito Tributário',
    question: 'A execução fiscal administrativa, sem controle prévio do Judiciário, fere a inafastabilidade da jurisdição?',
    complexity: 'Avançado',
    keywords: ['execução fiscal', 'penhora administrativa', 'inafastabilidade da jurisdição', 'arrolamento de bens'],
    context: 'Tentativas legislativas e de órgãos fazendários de permitir a constrição e penhora direta de ativos bancários via CDA sem autorização judicial prévia.',
    investigationPaths: [
      'O julgamento da indisponibilidade de bens do art. 20-B da Lei 10.522/2002 pelo STF (ADI 5881)',
      'A sobrecarga de milhões de execuções fiscais abarrotando a Justiça brasileira',
      'O devido processo legal substantivo e a reserva de jurisdição para invasão patrimonial'
    ],
    counterpoint: 'Com execuções fiscais levando em média mais de 8 anos nos tribunais, o modelo atual não estimula a inadimplência estratégica dos maiores devedores do país?'
  },
  {
    id: 'TRIB-08',
    category: 'Direito Tributário',
    question: 'A imunidade tributária de templos religiosos deve alcançar imóveis e bens não utilizados diretamente no culto?',
    complexity: 'Intermediário',
    keywords: ['imunidade religiosa', 'artigo 150 VI b', 'finalidades essenciais', 'aluguel de templos'],
    context: 'A extensão da imunidade de IPTU e IPVA para imóveis alugados a terceiros, cemitérios e veículos pertencentes a entidades religiosas.',
    investigationPaths: [
      'A Súmula Vinculante 52 do STF sobre a renda e o patrimônio vertidos para as finalidades essenciais',
      'A Emenda Constitucional 116/2022 que isentou imóveis alugados para templos',
      'A fronteira entre liberdade de culto e empreendimentos com características empresariais confessionais'
    ],
    counterpoint: 'Se o aluguel arrecadado financia creches e hospitais mantidos pela instituição religiosa, tributar não seria punir a assistência social comunitária?'
  },
  {
    id: 'TRIB-09',
    category: 'Direito Tributário',
    question: 'A modulação de efeitos em decisões tributárias pelo STF estimula o Estado a criar tributos inconstitucionais?',
    complexity: 'Avançado',
    keywords: ['modulação de efeitos', 'segurança jurídica', 'artigo 927 CPC', 'inconstitucionalidade útil'],
    context: 'A prática comum da corte suprema de declarar a inconstitucionalidade de tributos bilionários, mas proibir a devolução retroativa dos valores cobrados indevidamente do contribuinte.',
    investigationPaths: [
      'O julgamento do "século" no Tema 69 (exclusão do ICMS da base de cálculo do PIS/Cofins)',
      'O incentivo perverso para que governos cobrem tributos ilegais contando que não terão de restituir',
      'O conceito de "excepcional interesse público" e o risco de quebra orçamentária do erário'
    ],
    counterpoint: 'Uma devolução imediata de centenas de bilhões de reais aos contribuintes não paralisaria os serviços essenciais de saúde, segurança e educação da sociedade?'
  },
  {
    id: 'TRIB-10',
    category: 'Direito Tributário',
    question: 'A incidência de ITCMD sobre heranças deve ter alíquotas progressivas substanciais para coibir dinastias patrimoniais?',
    complexity: 'Intermediário',
    keywords: ['ITCMD', 'alíquota progressiva', 'herança', 'EC 132/2023', 'igualdade de oportunidades'],
    context: 'A obrigatoriedade de progressividade no imposto sobre herança instituída pela EC 132/2023 e as discussões sobre o teto fixado pelo Senado.',
    investigationPaths: [
      'A Resolução 9/92 do Senado Federal que fixa o teto em 8% e projetos para elevá-lo a 16% ou 20%',
      'O modelo norte-americano e europeu de "estate tax" com alíquotas que atingem até 40%',
      'O direito constitucional de herança (art. 5º, XXX, CF) versus o princípio do mérito e da igualdade inicial'
    ],
    counterpoint: 'Tributar pesadamente o patrimônio acumulado por pais que já pagaram tributos por toda a vida não é uma dupla tributação confiscatória do esforço familiar?'
  },
  {
    id: 'TRIB-11',
    category: 'Direito Tributário',
    question: 'O voto de qualidade no CARF em favor da Fazenda Pública desequilibra o processo administrativo fiscal?',
    complexity: 'Avançado',
    keywords: ['CARF', 'voto de qualidade', 'in dubio pro contribuinte', 'processo administrativo fiscal'],
    context: 'As sucessivas idas e vindas legislativas sobre o desempate nos julgamentos do Conselho Administrativo de Recursos Fiscais.',
    investigationPaths: [
      'A Lei 14.689/2023 que restabeleceu o voto de qualidade pró-Fisco com exclusão de multas',
      'O princípio da presunção de legitimidade dos atos administrativos versus a ampla defesa do contribuinte',
      'O impacto da dependência recursal no acesso imediato ao Poder Judiciário com garantias de depósito'
    ],
    counterpoint: 'Se o conselho é um órgão paritário e os membros dos contribuintes quase sempre votam contra a autuação, sem voto de qualidade o Estado não ficaria refém de empates?'
  },
  {
    id: 'TRIB-12',
    category: 'Direito Tributário',
    question: 'A tributação de dados e da economia digital desafia os conceitos clássicos de estabelecimento físico e materialidade?',
    complexity: 'Avançado',
    keywords: ['economia digital', 'tributação de plataformas', 'presença digital significativa', 'OCDE Pilar 1 e 2'],
    context: 'A dificuldade de enquadrar receitas de publicidade direcionada e streaming no ISS ou ICMS tradicional em jurisdições onde as multinacionais não possuem sedes físicas.',
    investigationPaths: [
      'A decisão do STF sobre licenciamento de software e tributação pelo ISS (ADIs 5659 e 5958)',
      'As diretrizes globais da OCDE sobre a tributação de gigantes da tecnologia no local do usuário',
      'A criação de tributos sobre serviços digitais (Digital Services Taxes) e disputas comerciais'
    ],
    counterpoint: 'Criar tributos unilaterais sobre provedores estrangeiros não encarece os serviços tecnológicos para toda a população nacional?'
  },
  {
    id: 'TRIB-13',
    category: 'Direito Tributário',
    question: 'A substituição tributária progressiva desrespeita a realização efetiva do fato gerador?',
    complexity: 'Intermediário',
    keywords: ['substituição tributária para frente', 'fato gerador presumido', 'restituição de ICMS', 'Tema 201 STF'],
    context: 'A sistemática em que indústrias recolhem antecipadamente o imposto presumido de toda a cadeia até o varejo.',
    investigationPaths: [
      'O art. 150, § 7º da CF e o julgamento do Tema 201 pelo STF (dever de restituição da diferença paga a maior)',
      'A simplificação da fiscalização e o combate à sonegação pulverizada no comércio varejista',
      'A distorção de fluxo de caixa imposta aos pequenos revendedores que pagam antes da venda real'
    ],
    counterpoint: 'Sem a substituição tributária nas indústrias, como a fiscalização conseguiria auditar milhões de mercadinhos e pequenas lojas espalhados pelo país?'
  },
  {
    id: 'TRIB-14',
    category: 'Direito Tributário',
    question: 'O sigilo fiscal de dados bancários pode ser acessado diretamente pela Receita Federal sem autorização judicial prévia?',
    complexity: 'Avançado',
    keywords: ['sigilo bancário', 'LC 105/2001', 'RE 601.314', 'privacidade financeira'],
    context: 'A transferência de sigilo das instituições financeiras para o Fisco sem intervenção da autoridade judicial.',
    investigationPaths: [
      'O julgamento do RE 601.314 e das ADIs correlatas pelo STF afirmando a constitucionalidade da LC 105',
      'O direito fundamental à privacidade e à intimidade (art. 5º, X e XII da CF)',
      'O compromisso internacional do Brasil no combate à lavagem de dinheiro e ocultação patrimonial'
    ],
    counterpoint: 'Se o Estado precisa monitorar transações ilícitas em tempo real, exigir mandado judicial para cada conta suspeita não inviabilizaria o combate à corrupção?'
  },
  {
    id: 'TRIB-15',
    category: 'Direito Tributário',
    question: 'A pejotização constitui fraude trabalhista e sonegação previdenciária ou exercício legítimo da liberdade contratual?',
    complexity: 'Intermediário',
    keywords: ['pejotização', 'autonomia privada', 'contribuições previdenciárias', 'Tema 725 STF'],
    context: 'A contratação de profissionais intelectuais por meio de pessoas jurídicas para recolhimento de alíquotas reduzidas do Simples ou Lucro Presumido.',
    investigationPaths: [
      'O julgamento da terceirização ampla e irrestrita pelo STF na ADPF 324 e RE 958.252',
      'As reiteradas cassações de decisões da Justiça do Trabalho pelo STF via reclamações constitucionais',
      'O impacto da desidratação da arrecadação da seguridade social pública provocada pela pejotização em massa'
    ],
    counterpoint: 'Um profissional altamente remunerado tem o direito de gerir sua tributação de modo empresarial ou deve ser tutelado compulsoriamente pelo Estado?'
  },

  // --- DIREITO ELEITORAL (15) ---
  {
    id: 'ELEIT-01',
    category: 'Direito Eleitoral',
    question: 'O financiamento exclusivamente público de campanhas impede a corrupção empresarial ou privilegia os políticos já eleitos?',
    complexity: 'Intermediário',
    keywords: ['Fundo Eleitoral', 'financiamento público', 'partidocracia', 'ADI 5374'],
    context: 'A criação do Fundo Especial de Financiamento de Campanha após o STF proibir doações de pessoas jurídicas (ADI 5374).',
    investigationPaths: [
      'A distribuição interna dos recursos do Fundo Eleitoral pelas cúpulas partidárias',
      'O custo bilionário suportado pelo contribuinte para sustentar a máquina eleitoral partidária',
      'A contaminação histórica da democracia por doações de empreiteiras e bancos antes da proibição'
    ],
    counterpoint: 'Sem financiamento público, como candidatos de classes populares ou movimentos comunitários competiriam contra herdeiros e milionários autofinanciados?'
  },
  {
    id: 'ELEIT-02',
    category: 'Direito Eleitoral',
    question: 'A cassação de mandatos por fake news eleitorais ameaça a livre circulação de ideias políticas?',
    complexity: 'Avançado',
    keywords: ['desinformação eleitoral', 'cassação de mandato', 'TSE', 'Caso Francischini'],
    context: 'A tipificação do abuso de poder pelo uso de ferramentas digitais e disseminação sistemática de inverdades contra o processo eleitoral.',
    investigationPaths: [
      'O julgamento paradigma do deputado Fernando Francischini no TSE (RO 0603965-70)',
      'A Resolução 23.610/2019 do TSE e suas alterações sobre inteligência artificial e deepfakes',
      'A distinção dogmática entre exagero retórico de campanha e sabotagem informativa coordenada'
    ],
    counterpoint: 'Se uma eleição é vencida na base de acusações comprovadamente falsas forjadas para destruir o adversário nas vésperas da votação, a vontade popular é legítima?'
  },
  {
    id: 'ELEIT-03',
    category: 'Direito Eleitoral',
    question: 'As cotas de gênero para candidaturas no legislativo funcionam ou incentivam fraudes com candidatas laranjas?',
    complexity: 'Intermediário',
    keywords: ['cota de gênero', 'candidaturas laranjas', 'Súmula 73 TSE', 'representatividade feminina'],
    context: 'A regra do art. 10, § 3º da Lei 9.504/97 que exige o mínimo de 30% de candidaturas por gênero e as punições coletivas por fraude.',
    investigationPaths: [
      'A Súmula 73 do TSE sobre a caracterização da fraude à cota de gênero e a anulação de toda a chapa',
      'A destinação proporcional de tempo de rádio/TV e recursos financeiros às candidatas',
      'O sub-financiamento real das mulheres pelas lideranças partidárias tradicionais'
    ],
    counterpoint: 'Anular a votação de todos os candidatos de um partido quando apenas a direção cometeu fraude não anula a soberania dos votos válidos dos eleitores?'
  },
  {
    id: 'ELEIT-04',
    category: 'Direito Eleitoral',
    question: 'O voto obrigatório é uma imposição cívica paternalista ou uma salvaguarda contra a captura das urnas por extremistas?',
    complexity: 'Intermediário',
    keywords: ['voto obrigatório', 'cidadania ativa', 'abstenção eleitoral', 'paternalismo estatal'],
    context: 'O debate recorrente sobre a transição para o voto facultativo no Brasil, a exemplo dos Estados Unidos e da maior parte da Europa.',
    investigationPaths: [
      'O art. 14, § 1º, I da CF/88 e as sanções administrativas ao eleitor faltoso',
      'A sociologia eleitoral: em países de voto facultativo, a participação das camadas mais pobres desaba expressivamente',
      'A liberdade negativa de não participar de decisões políticas versus o dever democrático de solidariedade institucional'
    ],
    counterpoint: 'Obrigar quem desdenha da política ou não conhece os candidatos a comparecer às urnas sob pena de multa melhora a qualidade do Parlamento?'
  },
  {
    id: 'ELEIT-05',
    category: 'Direito Eleitoral',
    question: 'A Lei da Ficha Limpa (LC 135/2010) ao antecipar inelegibilidades para decisões colegiadas fere a presunção de inocência?',
    complexity: 'Avançado',
    keywords: ['Lei da Ficha Limpa', 'inelegibilidade', 'presunção de inocência', 'ADC 29 e 30'],
    context: 'A inelegibilidade de candidatos condenados por órgãos colegiados antes do trânsito em julgado de suas condenações penais ou administrativas.',
    investigationPaths: [
      'O julgamento das ADCs 29 e 30 pelo STF afirmando a constitucionalidade da Lei da Ficha Limpa',
      'A proteção da probidade administrativa e da moralidade para o exercício do mandato (art. 14, § 9º, CF)',
      'O risco de condenações colegiadas politicamente motivadas que depois venham a ser anuladas após a eleição'
    ],
    counterpoint: 'Permitir que réus condenados por corrupção em duas instâncias assumam mandatos e ganhem foro especial fortalece ou degrada a confiança na República?'
  },
  {
    id: 'ELEIT-06',
    category: 'Direito Eleitoral',
    question: 'A cláusula de barreira eleitoral preserva a governabilidade ou asfixia a pluralidade de partidos ideológicos?',
    complexity: 'Intermediário',
    keywords: ['cláusula de barreira', 'reforma política', 'fragmentação partidária', 'EC 97/2017'],
    context: 'A escalada gradual das regras de desempenho eleitoral que retiram acesso ao Fundo Partidário e à propaganda gratuita de siglas sem votação nacional expressiva.',
    investigationPaths: [
      'A Emenda Constitucional 97/2017 e a proibição de coligações proporcionais',
      'A proliferação de partidos de aluguel voltados unicamente à venda de tempo de televisão e verbas',
      'O sufocamento de pequenas legendas com programas consistentes de esquerda ou direita libertária'
    ],
    counterpoint: 'Com mais de 30 partidos no Congresso negociando cargos a cada votação, qualquer governo conseguiria estabilidade mínima sem uma cláusula de corte?'
  },
  {
    id: 'ELEIT-07',
    category: 'Direito Eleitoral',
    question: 'A reeleição para cargos do Poder Executivo deve ser mantida ou revogada no Brasil?',
    complexity: 'Intermediário',
    keywords: ['reeleição', 'abuso de poder político', 'continuidade de políticas', 'máquina pública'],
    context: 'Instituída pela Emenda Constitucional 16/1997, a reeleição contínua suscita acusações de desvio da máquina pública para projetos eleitorais permanentes.',
    investigationPaths: [
      'A dificuldade de fiscalizar o uso indireto da máquina e publicidade oficial durante o ano eleitoral',
      'A descontinuidade crônica de projetos educacionais e de saneamento sob governantes de mandato único',
      'A proposta de mandato único de 5 anos sem reeleição para Chefes de Executivo'
    ],
    counterpoint: 'Retirar do povo o direito soberano de reconduzir um governante que fez uma gestão exemplar não é uma desconfiança autoritária do julgamento do eleitor?'
  },
  {
    id: 'ELEIT-08',
    category: 'Direito Eleitoral',
    question: 'As federações partidárias reforçaram a coerência programática ou apenas contornaram a proibição de coligações?',
    complexity: 'Intermediário',
    keywords: ['federação partidária', 'Lei 14.208/2021', 'fidelidade partidária', 'coerência ideológica'],
    context: 'A figura instituída pela Lei 14.208/2021 exigindo que partidos federados atuem de forma unificada nacionalmente e mantenham a união por no mínimo 4 anos.',
    investigationPaths: [
      'A decisão do STF na ADI 7021 sobre a tempestividade e validade das federações partidárias',
      'A perda de autonomia de diretórios regionais diante da centralização da executiva nacional federada',
      'O impacto da federação na sobrevivência artificial de partidos médios'
    ],
    counterpoint: 'Exigir 4 anos de casamento político não força alianças baseadas em afinidade real em vez das antigas coligações casuísticas desfeitas no dia seguinte?'
  },
  {
    id: 'ELEIT-09',
    category: 'Direito Eleitoral',
    question: 'O poder normativo e regulamentar do Tribunal Superior Eleitoral excede a competência legislativa do Congresso?',
    complexity: 'Avançado',
    keywords: ['poder normativo do TSE', 'resoluções do TSE', 'separação de poderes', 'artigo 105 Código Eleitoral'],
    context: 'A edição de resoluções pelo TSE que introduzem obrigações e proibições substanciais para candidatos e plataformas digitais não previstas expressamente em lei em sentido estrito.',
    investigationPaths: [
      'O art. 23, IX do Código Eleitoral e o art. 105 da Lei das Eleições (Lei 9.504/97)',
      'A jurisprudência do STF validando a normatização técnica e emergencial eleitoral',
      'A queixa recorrente de parlamentares sobre a invasão de competências privativas da União (art. 22, I, CF)'
    ],
    counterpoint: 'Num cenário de velocidade digital onde o Congresso leva anos para legislar, o TSE poderia cruzar os braços e deixar o pleito ser adulterado por novas fraudes?'
  },
  {
    id: 'ELEIT-10',
    category: 'Direito Eleitoral',
    question: 'A perda do mandato por infidelidade partidária pertence ao partido ou ao parlamentar votado nominalmente?',
    complexity: 'Intermediário',
    keywords: ['fidelidade partidária', 'perda de mandato', 'justa causa', 'MS 26.603'],
    context: 'A tese firmada pelo STF no MS 26.603 de que o mandato nas eleições proporcionais pertence à agremiação partidária e não ao candidato eleito.',
    investigationPaths: [
      'A Emenda Constitucional 91/2016 e as janelas partidárias para migração sem penalidade',
      'As hipóteses legais de justa causa (desvio reiterado do programa ou grave discriminação pessoal)',
      'O efeito personalista do sistema eleitoral brasileiro de lista aberta, onde o eleitor vota na pessoa do candidato'
    ],
    counterpoint: 'Se um deputado é eleito pelos votos puxados pela legenda e depois vota contra todos os princípios do partido, o eleitor da sigla não foi fraudado?'
  },
  {
    id: 'ELEIT-11',
    category: 'Direito Eleitoral',
    question: 'A propaganda eleitoral antecipada na internet é passível de controle eficaz sem ferir a liberdade de debate público?',
    complexity: 'Intermediário',
    keywords: ['propaganda antecipada', 'pedido explícito de voto', 'artigo 36-A', 'liberdade de manifestação'],
    context: 'A exigência jurisprudencial do "pedido explícito de voto" ou do uso de "palavras mágicas" para caracterizar a infração antes do período oficial de campanha.',
    investigationPaths: [
      'O art. 36-A da Lei 9.504/97 inserido pelas minirreformas eleitorais',
      'A evolução jurisprudencial do TSE sobre expressões equivalentes ao voto explícito',
      'A disparidade de exposição entre pré-candidatos que detêm mandato e desafiantes sem visibilidade'
    ],
    counterpoint: 'Tentar proibir pré-candidatos de debater projetos para o país 6 meses antes da eleição não engessa o debate democrático e protege os políticos já no poder?'
  },
  {
    id: 'ELEIT-12',
    category: 'Direito Eleitoral',
    question: 'A urna eletrônica brasileira com auditoria digital dispensa o voto impresso auditável?',
    complexity: 'Avançado',
    keywords: ['urna eletrônica', 'voto impresso', 'auditoria eleitoral', 'ADI 5874'],
    context: 'A discussão constitucional sobre a segurança do sigilo do voto versus a verificabilidade independente por meio de registro impresso acoplado à urna.',
    investigationPaths: [
      'O julgamento da ADI 5874 pelo STF declarando inconstitucional o voto impresso por risco ao sigilo',
      'Os testes públicos de segurança (TPS) realizados com peritos e universidades pelo TSE',
      'O boletim de urna (BU), o registro digital do voto (RDV) e as etapas de lacração dos códigos-fonte'
    ],
    counterpoint: 'Se outros países adotam redundância de papel para evitar desconfiança em softwares, a recusa radical do voto impresso não alimenta teorias conspiratórias?'
  },
  {
    id: 'ELEIT-13',
    category: 'Direito Eleitoral',
    question: 'O abuso de poder religioso em campanhas eleitorais deve ser tipificado como causa autônoma de cassação de mandato?',
    complexity: 'Avançado',
    keywords: ['abuso de poder religioso', 'coação moral', 'estado laico', 'recurso especial eleitoral'],
    context: 'Líderes religiosos que utilizam templos, cultos e a ascendência espiritual para impor candidatos aos fiéis sob ameaças espirituais veladas.',
    investigationPaths: [
      'O julgamento paradigma no TSE sobre a ausência de tipificação expressa na LC 64/90 (Lei das Inelegibilidades)',
      'A caracterização do abuso de poder econômico ou de autoridade com repercussão religiosa',
      'A garantia constitucional da liberdade de manifestação do pensamento e de culto religioso'
    ],
    counterpoint: 'Criar um tipo vago de "abuso religioso" sem lei estrita não abriria caminho para perseguição judicial a lideranças religiosas que expressam seus valores morais?'
  },
  {
    id: 'ELEIT-14',
    category: 'Direito Eleitoral',
    question: 'O sistema eleitoral proporcional de lista aberta no Brasil favorece o personalismo em detrimento da representação política?',
    complexity: 'Intermediário',
    keywords: ['sistema proporcional', 'lista aberta', 'voto distrital misto', 'quociente eleitoral'],
    context: 'O eleitor brasileiro vota no indivíduo, mas sua escolha é diluída pelo quociente partidário, elegendo candidatos que ele não conhece nem apoia.',
    investigationPaths: [
      'A mecânica do quociente eleitoral e partidário (art. 106 a 109 do Código Eleitoral)',
      'O fenômeno dos "puxadores de voto" que levam consigo candidatos com votação residual ínfima',
      'As propostas de voto distrital misto e lista fechada como alternativas de governança e disciplina'
    ],
    counterpoint: 'Na lista fechada, o eleitor perderia o direito de escolher quem o representa e votaria cegamente na ordem definida pelas cúpulas dos partidos.'
  },
  {
    id: 'ELEIT-15',
    category: 'Direito Eleitoral',
    question: 'A exigência de desincompatibilização de servidores públicos para disputar eleições protege a igualdade de armas ou restringe a cidadania política?',
    complexity: 'Intermediário',
    keywords: ['desincompatibilização', 'igualdade de armas', 'LC 64/90', 'direitos políticos'],
    context: 'Os prazos de afastamento remunerado de 3 a 6 meses exigidos de servidores, juízes, promotores e militares para concorrer a cargos públicos.',
    investigationPaths: [
      'A Lei Complementar 64/90 e o escalonamento dos prazos de desincompatibilização',
      'O afastamento com remuneração integral de servidores civis sustentado pelos cofres públicos',
      'O risco real de utilização do cargo funcional para promoção pessoal perante a comunidade'
    ],
    counterpoint: 'Permitir que servidores fiquem em seus cargos de fiscalização ou polícia enquanto fazem campanha não seria dar a eles uma vantagem desleal sobre cidadãos comuns?'
  }
];
