import { Question } from '../../types';

export const politicsHumanRightsQuestions: Question[] = [
  // --- CIÊNCIA POLÍTICA (15) ---
  {
    id: 'POLIT-01',
    category: 'Ciência Política',
    question: 'A judicialização da política representa uma falha do Legislativo ou uma transformação legítima da democracia contemporânea?',
    complexity: 'Avançado',
    keywords: ['judicialização da política', 'ativismo judicial', 'déficit democrático', 'representação política'],
    context: 'A crescente tendência de partidos políticos minoritários de acionar o Judiciário para reverter derrotas legítimas sofridas no plenário do Congresso Nacional.',
    investigationPaths: [
      'A tese de Ran Hirschl sobre a juristocracia como escolha estratégica de elites políticas e econômicas',
      'A fragmentação partidária do Congresso e a covardia em legislar sobre temas eleitoralmente divisivos',
      'O risco de desidratação da legitimidade da Suprema Corte quando se imiscui no jogo partidário cotidiano'
    ],
    counterpoint: 'Se a maioria parlamentar aprova uma lei que viola direitos de minorias ou atropela o rito constitucional, o recurso ao Judiciário não é o ápice da democracia?'
  },
  {
    id: 'POLIT-02',
    category: 'Ciência Política',
    question: 'O impeachment no Brasil converteu-se em um voto de desconfiança parlamentar disfarçado?',
    complexity: 'Avançado',
    keywords: ['impeachment', 'crime de responsabilidade', 'parlamentarização', 'estabilidade política'],
    context: 'A discussão sobre a natureza do julgamento do Presidente da República: crime jurídico tipificado estrito ou perda substancial de maioria congressual e apoio popular.',
    investigationPaths: [
      'A Lei 1.079/1950 e os conceitos indeterminados dos crimes de responsabilidade',
      'As quedas de Fernando Collor (1992) e Dilma Rousseff (2016) e suas respectivas bases parlamentares',
      'A proposta de instituição de recall popular ou moção de censura para evitar o trauma de processos penais simulados'
    ],
    counterpoint: 'Exigir formalismos penais absolutos para afastar um governante que destruiu a economia e perdeu a governabilidade condenaria o país à paralisia total.'
  },
  {
    id: 'POLIT-03',
    category: 'Ciência Política',
    question: 'O orçamento secreto e as emendas impositivas desequilibraram o poder em favor do Congresso em detrimento do Executivo?',
    complexity: 'Intermediário',
    keywords: ['orçamento secreto', 'emendas parlamentares', 'RP9', 'presidencialismo de coalizão'],
    context: 'A apropriação de dezenas de bilhões de reais do orçamento da União por lideranças parlamentares sem critérios de planejamento nacional ou transparência pública.',
    investigationPaths: [
      'O julgamento histórico da ADPF 854 pelo STF declarando inconstitucional o orçamento secreto',
      'A transição do presidencialismo de coalizão para um "parlamentarismo orçamentário sem responsabilidade"',
      'A destinação clientelista de emendas individuais e de bancada para redutos eleitorais sem auditoria'
    ],
    counterpoint: 'Deputados e senadores eleitos diretamente pelo povo nos estados não conhecem as necessidades reais das cidades melhor do que burocratas em gabinetes ministeriais?'
  },
  {
    id: 'POLIT-04',
    category: 'Ciência Política',
    question: 'O populismo político é uma ameaça existencial à democracia liberal ou uma reação necessária contra elites arrogantes?',
    complexity: 'Avançado',
    keywords: ['populismo', 'democracia iliberal', 'Jan-Werner Müller', 'Chantal Mouffe'],
    context: 'A emergência global de líderes populistas que reivindicam a representação exclusiva do "povo puro" contra as instituições intermediárias e a imprensa livre.',
    investigationPaths: [
      'A definição de populismo por Jan-Werner Müller ("O que é o Populismo?") como antipluralismo moralista',
      'A teoria do "populismo de esquerda" de Ernesto Laclau e Chantal Mouffe como mecanismo de politização das massas',
      'A erosão gradual das democracias contemporâneas através de reformas constitucionais e cooptação das cortes'
    ],
    counterpoint: 'Quando governos tecnocráticos ignoram a classe trabalhadora por décadas para salvar bancos, a explosão de um líder populista não é a voz real dos esquecidos?'
  },
  {
    id: 'POLIT-05',
    category: 'Ciência Política',
    question: 'A polarização política afetiva destrói a possibilidade do consenso e transforma adversários em inimigos existenciais?',
    complexity: 'Intermediário',
    keywords: ['polarização afetiva', 'câmaras de eco', 'inimigo político', 'Carl Schmitt'],
    context: 'A migração da divergência ideológica sadia sobre impostos e saúde para um ódio moral visceral, onde o eleitor prefere prejudicar o país a ver o rival vencer.',
    investigationPaths: [
      'O conceito de "polarização afetiva" na ciência política comportamental e neurociência social',
      'A distinção schmittiana clássica entre amigo e inimigo como essência do político',
      'O papel das redes sociais e seus algoritmos de engajamento baseados em raiva e indignação moral'
    ],
    counterpoint: 'O consenso forçado não mascara frequentemente conflitos estruturais profundos de classe e raça que precisam ser expostos e disputados abertamente?'
  },
  {
    id: 'POLIT-06',
    category: 'Ciência Política',
    question: 'O financiamento de lobbies corporativos deve ser regulamentado formalmente ou proibido para proteger o interesse público?',
    complexity: 'Intermediário',
    keywords: ['lobby', 'regulamentação do lobby', 'grupos de pressão', 'captura parlamentar'],
    context: 'A atuação intensa de indústrias farmacêuticas, armamentistas, do agronegócio e bancos na redação de leis que afetam milhões de brasileiros.',
    investigationPaths: [
      'Os projetos de lei de regulamentação da representação de interesses (lobby) no Congresso brasileiro',
      'O modelo norte-americano de registro público obrigatório e declaração de despesas de lobistas',
      'A fronteira entre o direito de petição e manifestação dos setores econômicos e o tráfico de influência e corrupção velada'
    ],
    counterpoint: 'Se deputados legislam sobre tecnologia quântica e agrotóxicos sem serem especialistas, o diálogo com setores produtivos não é indispensável?'
  },
  {
    id: 'POLIT-07',
    category: 'Ciência Política',
    question: 'A desobediência política de governadores contra o poder central fortalece o federalismo ou flerta com o separatismo?',
    complexity: 'Intermediário',
    keywords: ['federalismo cooperativo', 'desobediência federativa', 'pandemia de Covid-19', 'pacto federativo'],
    context: 'O protagonismo de governadores e prefeitos que enfrentaram diretamente ordens presidenciais durante crises sanitárias e de segurança pública.',
    investigationPaths: [
      'A competência comum e concorrente na proteção da saúde pública fixada pelo STF na ADI 6341',
      'O risco de desintegração nacional e anarquia regulatória quando cada estado adota políticas sanitárias antagônicas',
      'A autonomia política estadual como última trincheira de resistência contra arroubos autoritários de governantes centrais'
    ],
    counterpoint: 'Permitir que a União imponha diretrizes uniformes mesmo que baseadas em teorias negacionistas destruiria a soberania e a vida da população local.'
  },
  {
    id: 'POLIT-08',
    category: 'Ciência Política',
    question: 'A tecnocracia isolada dos anseios populares gera melhores decisões públicas do que a política eleitoral tradicional?',
    complexity: 'Avançado',
    keywords: ['tecnocracia', 'banco central autônomo', 'políticas baseadas em evidências', 'déficit democrático'],
    context: 'A delegação da política monetária, taxa de juros e regulações sanitárias a conselhos de especialistas e economistas blindados de mandatos políticos eleitorais.',
    investigationPaths: [
      'A autonomia legal do Banco Central (Lei Complementar 179/2021) e o mandato fixo de seus diretores',
      'O postulado da política baseada em evidências científicas e econômicas versus a demagogia eleitoreira populista',
      'A crítica de que decisões sobre juros e inflação são essencialmente políticas e transferem riqueza entre classes sociais'
    ],
    counterpoint: 'Entregar o controle da moeda a políticos em campanha não levaria à impressão desenfreada de dinheiro para vencer eleições, gerando hiperinflação?'
  },
  {
    id: 'POLIT-09',
    category: 'Ciência Política',
    question: 'O multipartidarismo exacerbado no Brasil é fruto da legislação eleitoral permissiva ou reflete a complexidade social da nação?',
    complexity: 'Intermediário',
    keywords: ['multipartidarismo', 'fragmentação partidária', 'número efetivo de partidos', 'governabilidade'],
    context: 'O Brasil chegou a ter mais de 30 partidos com assento parlamentar no Congresso Nacional, exigindo a distribuição massiva de cargos para a formação de maiorias.',
    investigationPaths: [
      'O conceito de "número efetivo de partidos" na ciência política comparada de Giovanni Sartori',
      'A sociologia da fragmentação: tensões regionais entre Norte, Nordeste, Sul e Sudeste, bancadas evangélica, ruralista e da bala',
      'O impacto da cláusula de barreira na redução forçada para cerca de 10 a 12 grandes agremiações'
    ],
    counterpoint: 'Um país de 215 milhões de habitantes com disparidades brutais caberia nos limites estreitos de um sistema bipartidário como o norte-americano?'
  },
  {
    id: 'POLIT-10',
    category: 'Ciência Política',
    question: 'A cláusula de fidelidade partidária enfraquece a liderança individual de parlamentares corajosos?',
    complexity: 'Intermediário',
    keywords: ['fidelidade partidária', 'disciplina parlamentar', 'caciques partidários', 'mandato eletivo'],
    context: 'A perda de mandato do parlamentar que vota contra a orientação do partido ou decide desfilar-se sem justa causa legal reconhecida pela Justiça Eleitoral.',
    investigationPaths: [
      'A autoridade incontestável de "caciques" partidários que controlam verbas e tempo de rádio/TV',
      'O risco de punir parlamentares de consciência que se recusam a votar projetos manifestamente corruptos de sua liderança',
      'O combate ao troca-troca vergonhoso de legendas na véspera de eleições em troca de cargos e favores'
    ],
    counterpoint: 'Se um candidato foi eleito graças aos votos de legenda de milhares de eleitores fiéis ao partido, ele não pode sequestrar o mandato para si.'
  },
  {
    id: 'POLIT-11',
    category: 'Ciência Política',
    question: 'As pesquisas de opinião eleitoral induzem o voto útil e influenciam indevidamente o resultado das urnas?',
    complexity: 'Intermediário',
    keywords: ['pesquisas eleitorais', 'efeito manada', 'bandwagon effect', 'voto útil'],
    context: 'A pressão para que institutos de pesquisa sejam submetidos a regras restritivas ou proibidos de divulgar dados nas semanas que antecedem a votação.',
    investigationPaths: [
      'Os fenômenos de psicologia social: efeito "bandwagon" (adesão ao favorito) versus efeito "underdog" (simpatia pelo derrotado)',
      'O direito à informação e a transparência metodológica exigida pela Justiça Eleitoral (registro obrigatório no TSE)',
      'A discrepância histórica frequente entre levantamentos na véspera e o resultado real da apuração'
    ],
    counterpoint: 'Censurar pesquisas eleitorais privaria o cidadão de informações estratégicas e favoreceria boatos clandestinos operados pelas máquinas partidárias.'
  },
  {
    id: 'POLIT-12',
    category: 'Ciência Política',
    question: 'A teoria da escolha pública (Public Choice) desmistifica a crença no altruísmo dos burocratas e governantes?',
    complexity: 'Avançado',
    keywords: ['Public Choice', 'James Buchanan', 'maximização de interesses', 'captura do estado'],
    context: 'A escola de economia política liderada pelo Nobel James Buchanan que aplica as ferramentas da microeconomia à política: agentes públicos buscam poder e orçamento próprio.',
    investigationPaths: [
      'A desconstrução da ideia romântica de que o Estado é um planejador benevolente e desinteressado',
      'A busca por rendas (rent-seeking) e alianças de benefício mútuo entre burocratas e grupos de interesse protegidos',
      'As salvaguardas constitucionais e limites rígidos de endividamento como amarras indispensáveis'
    ],
    counterpoint: 'Reduzir toda a ação pública a mero cálculo egoísta de ganhos pessoais ignora o sacrifício e a vocação republicana de milhões de servidores públicos honestos.'
  },
  {
    id: 'POLIT-13',
    category: 'Ciência Política',
    question: 'O voto de cabresto contemporâneo foi substituído pelo controle de comunidades pobres por traficantes e milícias?',
    complexity: 'Intermediário',
    keywords: ['voto de cabresto', 'curral eleitoral moderno', 'coação armada', 'geografia eleitoral'],
    context: 'A proibição física imposta por narcotraficantes e milicianos que impedem a entrada de candidatos adversários em territórios periféricos e obrigam moradores a votar em seus aliados.',
    investigationPaths: [
      'A transformação das zonas eleitorais em áreas conflagradas no Rio de Janeiro e na Baixada Fluminense',
      'A presença de forças federais e tropas do Exército no dia da votação para garantir a abertura de urnas',
      'O fracasso dos órgãos eleitorais em anular votos originários de seções sob comprovada coação armada armada'
    ],
    counterpoint: 'A cabine de votação com urna eletrônica e sigilo absoluto é impenetrável; lá dentro, o morador vota em quem quiser sem que o miliciano possa comprovar.'
  },
  {
    id: 'POLIT-14',
    category: 'Ciência Política',
    question: 'O papel das primeiras-damas e parentes próximos em funções de governo fere a impessoalidade republicana?',
    complexity: 'Intermediário',
    keywords: ['nepotismo político', 'primeira-dama', 'impessoalidade republicana', 'cargos de confiança'],
    context: 'A nomeação de cônjuges e filhos de prefeitos, governadores e presidentes para pastas estratégicas de Ação Social, Saúde ou Educação.',
    investigationPaths: [
      'A mitigação da Súmula Vinculante 13 do STF que autorizou a nomeação de parentes para cargos políticos',
      'A tradição assistencialista histórica de entrega do voluntariado estatal à esposa do chefe do executivo',
      'A exigência de qualificação profissional demonstrada e idoneidade moral para justificar o ato de nomeação'
    ],
    counterpoint: 'Se a pessoa possui qualificação técnica brilhante, impedi-la de servir ao Estado apenas por seu laço matrimonial com o governante seria discriminação injusta?'
  },
  {
    id: 'POLIT-15',
    category: 'Ciência Política',
    question: 'O declínio dos partidos políticos tradicionais abriu espaço para o messianismo de influenciadores digitais na política?',
    complexity: 'Intermediário',
    keywords: ['influenciadores políticos', 'desintermediação partidária', 'messianismo digital', 'viralização'],
    context: 'A substituição de programas partidários e debates ideológicos por campanhas centradas em algoritmos de TikTok e Instagram conduzidas por celebridades digitais.',
    investigationPaths: [
      'A crise de representatividade e confiança nos sindicatos, partidos e na imprensa tradicional',
      'A comunicação direta e não mediada entre o influenciador-candidato e seus seguidores leais',
      'A superficialidade e o imediatismo das propostas políticas reduzidas a cortes de vídeos virais de 30 segundos'
    ],
    counterpoint: 'A internet deu voz a milhões de cidadãos que antes não tinham espaço na grande mídia corporativa controlada por seis famílias tradicionais.'
  },

  // --- DEMOCRACIA E INSTITUIÇÕES (15) ---
  {
    id: 'DEMOC-01',
    category: 'Democracia e Instituições',
    question: 'As democracias contemporâneas morrem não por golpes militares violentos, mas por erosão interna paulatina?',
    complexity: 'Avançado',
    keywords: ['como morrem as democracias', 'Levitsky e Ziblatt', 'erosão democrática', 'autocratas eleitos'],
    context: 'A tese de Steven Levitsky e Daniel Ziblatt demonstrando que os autocratas do século XXI chegam ao poder pelo voto popular e usam as próprias leis para desmantelar os contrapesos da República.',
    investigationPaths: [
      'Os quatro indicadores de comportamento autoritário: rejeição das regras, negação da legitimidade do rival, tolerância à violência e cerceamento de liberdades',
      'As normas não escritas de contenção institucional e tolerância mútua como pilares invisíveis da estabilidade',
      'Os exemplos comparados da Hungria de Viktor Orbán, da Turquia de Erdoğan e da Venezuela'
    ],
    counterpoint: 'Alertar sobre "risco à democracia" sempre que um governante conservador ou de esquerda radical é eleito não é uma tentativa das elites tradicionais de deslegitimar as urnas?'
  },
  {
    id: 'DEMOC-02',
    category: 'Democracia e Instituições',
    question: 'O Ministério Público tornou-se um quarto poder sem os devidos freios republicanos de controle?',
    complexity: 'Avançado',
    keywords: ['Ministério Público', 'independência funcional', 'CNMP', 'quarto poder'],
    context: 'A hipertrofia institucional conferida ao parquet pela Constituição de 1988, que lhe garantiu independência orçamentária e inamovibilidade sem subordinação a nenhum dos três poderes clássicos.',
    investigationPaths: [
      'O desenho constitucional do art. 127 a 130 da CF/88 e a autonomia funcional do promotor natural',
      'A crítica à atuação do Conselho Nacional do Ministério Público (CNMP) como órgão excessivamente corporativo',
      'O risco de politização persecutória e uso seletivo de inquéritos civis públicos para constranger gestores eleitos'
    ],
    counterpoint: 'Sem essa blindagem absoluta e independência constitucional, como promotores teriam coragem de processar governadores, generais e donos de empreiteiras?'
  },
  {
    id: 'DEMOC-03',
    category: 'Democracia e Instituições',
    question: 'A autonomia institucional do Banco Central reduz a soberania do governo eleito sobre a condução econômica do país?',
    complexity: 'Intermediário',
    keywords: ['autonomia do Bacen', 'mandato fixo', 'política monetária', 'legitimidade do sufrágio'],
    context: 'A situação em que um Presidente da República recém-eleito com um programa de desenvolvimento expansionista é obrigado a conviver com um Presidente do Banco Central nomeado pelo governo derrotado.',
    investigationPaths: [
      'A decisão do STF na ADI 6882 declarando a constitucionalidade da autonomia do Banco Central',
      'A meta de inflação fixada pelo Conselho Monetário Nacional (CMN) versus os instrumentos técnicos de taxa de juros (Selic)',
      'A experiência internacional da Federal Reserve norte-americana e do Banco Central Europeu'
    ],
    counterpoint: 'Permitir que o governante de turno baixe os juros na canetada para fingir prosperidade antes da eleição destruiria a moeda e faria a inflação explodir.'
  },
  {
    id: 'DEMOC-04',
    category: 'Democracia e Instituições',
    question: 'O Conselho Nacional de Justiça exerce fiscalização republicana efetiva ou opera como escudo corporativo de magistrados?',
    complexity: 'Intermediário',
    keywords: ['CNJ', 'Emenda 45/2004', 'controle externo da magistratura', 'aposentadoria compulsória'],
    context: 'A frustração social quando magistrados flagrados em corrupção grave recebem como punição máxima do CNJ a aposentadoria compulsória com proventos proporcionais integrais.',
    investigationPaths: [
      'A Lei Orgânica da Magistratura Nacional (LOMAN) de 1979 e o teto da punição administrativa do art. 42',
      'A composição majoritariamente de juízes dentro do colegiado do CNJ gerando corporativismo decisório',
      'A atuação modernizadora indispensável do CNJ na padronização de metas, transparência de salários e informatização'
    ],
    counterpoint: 'Aposentadoria compulsória é apenas a sanção administrativa; nada impede que o juiz corrupto seja processado criminalmente e perca a aposentadoria e vá para a cadeia.'
  },
  {
    id: 'DEMOC-05',
    category: 'Democracia e Instituições',
    question: 'A criação de novos municípios no Brasil atende aos anseios de descentralização ou a interesses oligárquicos de repartição de verbas?',
    complexity: 'Intermediário',
    keywords: ['criação de municípios', 'artigo 18 § 4º CF', 'Fundo de Participação dos Municípios', 'viabilidade econômico-financeira'],
    context: 'A proliferação de pequenas cidades com menos de 5.000 habitantes cuja arrecadação própria não paga a folha da Câmara de Vereadores, dependendo 100% de repasses federais.',
    investigationPaths: [
      'A Emenda Constitucional 15/1996 e a exigência de lei complementar federal e plebiscito prévio',
      'A inconstitucionalidade por omissão do Congresso Nacional em editar a lei complementar sobre estudos de viabilidade',
      'A aproximação dos serviços essenciais de saúde e educação das populações rurais abandonadas pelo município-mãe'
    ],
    counterpoint: 'Emancipar uma localidade distante do centro administrativo não é a única maneira de garantir um posto médico e uma escola funcionando com orçamento próprio?'
  },
  {
    id: 'DEMOC-06',
    category: 'Democracia e Instituições',
    question: 'A proliferação de comissões parlamentares de inquérito (CPIs) tornou-se espetáculo midiático ou fiscalização indispensável?',
    complexity: 'Intermediário',
    keywords: ['CPI', 'poderes instrutórios de juiz', 'espetacularização política', 'artigo 58 § 3º CF'],
    context: 'As sessões transmitidas ao vivo de CPIs com bate-bocas acalorados, voz de prisão a depoentes e posterior arquivamento de seus relatórios finais pela Procuradoria-Geral da República.',
    investigationPaths: [
      'O direito subjetivo das minorias parlamentares à instalação de CPI (MS 24.831 e CPI da Covid)',
      'Os poderes de investigação próprios das autoridades judiciais (quebra de sigilos telefônico, fiscal e bancário)',
      'O contraste entre o estrépito midiático durante a investigação e a baixa eficácia punitiva dos relatórios finais'
    ],
    counterpoint: 'Sem a visibilidade pública de CPIs históricas, grandes esquemas de corrupção e desvios de vacinas teriam sido abafados silenciosamente nos corredores do governo.'
  },
  {
    id: 'DEMOC-07',
    category: 'Democracia e Instituições',
    question: 'A vitaliciedade e as prerrogativas de foro por prerrogativa de função para centenas de autoridades violam a igualdade republicana?',
    complexity: 'Intermediário',
    keywords: ['foro privilegiado', 'foro por prerrogativa', 'isonomia republicana', 'AP 937'],
    context: 'A garantia de julgamento em tribunais superiores (STJ e STF) conferida a milhares de agentes públicos (deputados, senadores, governadores, prefeitos, juízes e promotores).',
    investigationPaths: [
      'A restrição fixada pelo STF na AP 937 aos crimes cometidos no cargo e em razão das funções',
      'A recente guinada do plenário do STF para manter o foro mesmo após o término do mandato',
      'A proteção do exercício desassombrado da autoridade contra represálias de juízes locais versus a morosidade e prescrição dos processos nas cortes de cúpula'
    ],
    counterpoint: 'Deixar parlamentares federais à mercê de perseguições de juízes de primeira instância de suas cidades natais não colocaria a estabilidade da República em risco permanente?'
  },
  {
    id: 'DEMOC-08',
    category: 'Democracia e Instituições',
    question: 'O poder concedido às redes sociais privadas de moderar discursos de autoridades eleitas privatiza a praça pública democrática?',
    complexity: 'Avançado',
    keywords: ['moderação de conteúdo', 'soberania digital', 'banimento de autoridades', 'artigo 19 Marco Civil'],
    context: 'O banimento de contas oficiais de Chefes de Estado (como Donald Trump pelo Twitter em 2021) por violação de termos de uso de empresas privadas sediadas no Vale do Silício.',
    investigationPaths: [
      'O conceito de "Town Square" contemporânea operada por monopólios corporativos privados',
      'O art. 19 do Marco Civil da Internet (Lei 12.965/14) e a exigência de ordem judicial prévia para remoção de postagens',
      'O dever de empresas de conter o incitamento violento a golpes de Estado e crimes contra a vida'
    ],
    counterpoint: 'Uma empresa privada deve ser forçada pelo governo a manter servidores hospedando discursos que incitam assassinatos e a invasão violenta do Congresso?'
  },
  {
    id: 'DEMOC-09',
    category: 'Democracia e Instituições',
    question: 'A participação popular direta (plebiscitos e referendos) deve ser utilizada com frequência ou gera decisões emocionais precipitadas?',
    complexity: 'Intermediário',
    keywords: ['democracia direta', 'plebiscito', 'Brexit', 'democracia deliberativa'],
    context: 'A quase total ausência de consultas populares no Brasil confrontada com experiências internacionais que geraram rupturas irreversíveis (como o plebiscito do Brexit no Reino Unido).',
    investigationPaths: [
      'O art. 14 da CF/88 e a Lei 9.709/1998 que regulamenta plebiscitos, referendos e iniciativa popular de lei',
      'Os plebiscitos históricos do Brasil: 1963 (parlamentarismo), 1993 (forma e sistema de governo) e 2005 (desarmamento)',
      'A suscetibilidade das massas à manipulação por campanhas desinformativas e slogans rasos'
    ],
    counterpoint: 'Chamar o povo de "emocional demais para decidir" não é a desculpa tradicional de elites arrogantes para reter o poder de mando entre quatro paredes?'
  },
  {
    id: 'DEMOC-10',
    category: 'Democracia e Instituições',
    question: 'O federalismo brasileiro suporta a criação de um imposto unificado gerido por um Comitê Gestor nacional sem ferir o pacto federativo?',
    complexity: 'Avançado',
    keywords: ['Reforma Tributária', 'Comitê Gestor do IBS', 'autonomia dos estados', 'EC 132/2023'],
    context: 'A unificação do ICMS estadual e ISS municipal no Imposto sobre Bens e Serviços (IBS) sob gestão colegiada nacional e as queixas de perda de soberania fiscal dos prefeitos e governadores.',
    investigationPaths: [
      'A estrutura paritária do Comitê Gestor do IBS na Emenda Constitucional 132/2023',
      'A cláusula pétrea da forma federativa de Estado (art. 60, § 4º, I da CF) e a competência impositiva originária',
      'A necessidade inadiável de simplificar o manicômio tributário de 27 legislações estaduais e 5.500 códigos municipais rivais'
    ],
    counterpoint: 'Se um estado ou município não pode mais definir livremente a alíquota de seu principal imposto, o que restou de sua autonomia federativa real?'
  },
  {
    id: 'DEMOC-11',
    category: 'Democracia e Instituições',
    question: 'A proliferação de partidos de direita e esquerda "personalistas" centrados em um único líder ameaça a democracia institucional?',
    complexity: 'Intermediário',
    keywords: ['partidos personalistas', 'institucionalização partidária', 'carisma político', 'sucessão'],
    context: 'Agremiações que funcionam como comitês de campanha exclusivos para um líder messiânico carismático, sem democracia interna ou espaço para dissidência programática.',
    investigationPaths: [
      'A exigência constitucional de autonomia partidária (art. 17 da CF) versus o princípio democrático interno dos partidos',
      'O vazio de liderança e as guerras fratricidas que explodem quando o líder carismático desaparece do cenário',
      'A debilidade da democracia em países cujos partidos não possuem raízes sociais orgânicas perenes'
    ],
    counterpoint: 'Na história política mundial, os grandes movimentos de transformação sempre precisaram de líderes magnéticos inspiradores para mobilizar o povo.'
  },
  {
    id: 'DEMOC-12',
    category: 'Democracia e Instituições',
    question: 'A transmissão ao vivo das sessões do Supremo Tribunal Federal pela TV Justiça estimula o exibicionismo retórico de seus ministros?',
    complexity: 'Intermediário',
    keywords: ['TV Justiça', 'transparência judicial', 'exibicionismo retórico', 'deliberação colegiada'],
    context: 'A singularidade brasileira no mundo de televisionar debates internos do STF ao vivo, gerando discursos inflamados para as câmeras em detrimento do diálogo conciliatório entre os pares.',
    investigationPaths: [
      'A Lei 10.461/2002 que instituiu a TV Justiça como canal de prestação de contas pública',
      'O contraste com a Suprema Corte norte-americana e tribunais europeus que proíbem câmeras e deliberam em sigilo estrito',
      'A popularização do vocabulário constitucional entre os cidadãos comuns versus a conversão de ministros em figuras pop da política'
    ],
    counterpoint: 'Fechar as portas do tribunal para negociações secretas a portas fechadas não aumentaria a desconfiança de conchavos escusos longe do olhar do povo?'
  },
  {
    id: 'DEMOC-13',
    category: 'Democracia e Instituições',
    question: 'A imunidade tributária e as isenções concedidas a partidos políticos e suas fundações configuram privilégio desproporcional?',
    complexity: 'Intermediário',
    keywords: ['imunidade de partidos', 'artigo 150 VI c', 'prestação de contas', 'recursos públicos'],
    context: 'A proteção que isenta agremiações de IPTU, IPVA e imposto de renda, somada às reiteradas anistias aprovadas pelo Congresso a multas eleitorais por irregularidades financeiras.',
    investigationPaths: [
      'A Emenda Constitucional 117/2022 e a EC da anistia partidária a multas eleitorais bilionárias',
      'A finalidade constitucional de garantir a viabilidade dos instrumentos indispensáveis ao pluripartidarismo',
      'O contraste com o rigor implacável aplicado pelo Fisco a cidadãos e microempresas inadimplentes'
    ],
    counterpoint: 'Tributar partidos políticos permitiria a um governo autoritário utilizar a Receita Federal para sufocar e quebrar financeiramente as legendas de oposição.'
  },
  {
    id: 'DEMOC-14',
    category: 'Democracia e Instituições',
    question: 'O princípio republicano da alternância de poder é desrespeitado quando clãs familiares controlam prefeituras e governos por gerações?',
    complexity: 'Intermediário',
    keywords: ['clãs políticos', 'inelegibilidade reflexa', 'artigo 14 § 7º CF', 'oligarquias locais'],
    context: 'A perpetuação de famílias que dominam estados e cidades brasileiras há mais de um século, revezando pais, mães, filhos e irmãos no Executivo e Legislativo.',
    investigationPaths: [
      'A regra da inelegibilidade reflexa de parentes até o segundo grau do Chefe do Executivo no mesmo território',
      'O uso de manobras jurídicas, prefeitos-tampão e divórcios simulados para burlar a vedação constitucional',
      'A dependência econômica de empregos públicos locais que impede a emergência de lideranças comunitárias independentes'
    ],
    counterpoint: 'Se o povo de um município confia e vota livremente nos membros de uma mesma família respeitada, proibi-los de concorrer não anularia a escolha do eleitor?'
  },
  {
    id: 'DEMOC-15',
    category: 'Democracia e Instituições',
    question: 'A exigência de maioria qualificada de dois terços no Senado para o impeachment de ministros do STF garante independência ou blindagem absoluta?',
    complexity: 'Avançado',
    keywords: ['impeachment de ministro do STF', 'Senado Federal', 'artigo 52 II CF', 'freios e contrapesos'],
    context: 'A prerrogativa exclusiva do Presidente do Senado de decidir solitariamente se abre ou engaveta pedidos de impeachment contra ministros da Suprema Corte.',
    investigationPaths: [
      'O histórico republicano: nenhum ministro do STF jamais foi destituído por impeachment na história do Brasil',
      'A dependência mútua de interesses entre senadores investigados criminalmente no STF e ministros que julgam seus inquéritos',
      'O risco de politização vingativa caso a abertura de impeachment contra magistrados fosse facilitada'
    ],
    counterpoint: 'Facilitar a cassação de juízes pelo Congresso transformaria a mais alta corte do país em refém permanente das chantagens dos parlamentares.'
  },

  // --- DIREITOS HUMANOS (15) ---
  {
    id: 'DDHH-01',
    category: 'Direitos Humanos',
    question: 'É possível defender direitos humanos universais sem impor uma concepção ocidental específica de moral e justiça?',
    complexity: 'Avançado',
    keywords: ['universalismo versus relativismo', 'imperialismo moral', 'Boaventura de Sousa Santos', 'Declaração Universal de 1948'],
    context: 'A crítica pós-colonial de que a Declaração Universal de 1948 reflete o individualismo liberal iluminista ocidental, desconsiderando tradições comunitárias asiáticas, africanas e indígenas.',
    investigationPaths: [
      'A hermenêutica diatópica proposta por Boaventura de Sousa Santos para promover diálogos interculturais sobre dignidade',
      'A declaração de Bangkok de 1993 e os debates sobre "Valores Asiáticos" versus direitos individuais',
      'Práticas culturais extremas (mutilação genital feminina e infanticídio indígena) e o limite intransponível da integridade física'
    ],
    counterpoint: 'Se relativizarmos os direitos humanos sob a desculpa de "cultura local", como condenar governos que apedrejam mulheres adúlteras ou executam homossexuais?'
  },
  {
    id: 'DDHH-02',
    category: 'Direitos Humanos',
    question: 'O estado de coisas inconstitucional do sistema prisional brasileiro autoriza o corte compulsório de novas prisões?',
    complexity: 'Avançado',
    keywords: ['estado de coisas inconstitucional', 'ADPF 347', 'sistema carcerário', 'penas cruéis'],
    context: 'O julgamento definitivo da ADPF 347 pelo STF reconhecendo a violação massiva, estrutural e sistêmica de direitos fundamentais da população carcerária brasileira.',
    investigationPaths: [
      'A doutrina da Corte Constitucional da Colômbia sobre o "Estado de Cosas Inconstitucional"',
      'A determinação da elaboração de planos nacional e estaduais para enfrentamento da superlotação e insalubridade',
      'A tese radical de interdição de presídios superlotados com soltura ou conversão em regime aberto para apenados sem violência'
    ],
    counterpoint: 'Se os presídios forem impedidos de receber novos detentos, a sociedade tolerará que assaltantes armados e agressores voltem imediatamente às ruas?'
  },
  {
    id: 'DDHH-03',
    category: 'Direitos Humanos',
    question: 'O direito à moradia deve prevalecer sobre o direito de propriedade em ocupações consolidadas de terras improdutivas?',
    complexity: 'Intermediário',
    keywords: ['direito à moradia', 'ocupações urbanas', 'Comissão de Soluções Fundiárias', 'ADPF 828'],
    context: 'A decisão histórica do STF na ADPF 828 que instituiu regime de transição para reintegrações de posse coletiva com audiências de mediação e realocação obrigatória prévia.',
    investigationPaths: [
      'O art. 6º da CF (moradia como direito social fundamental) e o art. 5º, XXII e XXIII (propriedade e sua função social)',
      'O papel das Comissões de Conflitos Fundiários nos Tribunais de Justiça',
      'O impacto dos despejos forçados violentos jogando milhares de crianças e idosos na calçada sem teto'
    ],
    counterpoint: 'Se invasões organizadas impedirem proprietários de reaver suas terras na Justiça, o próprio pilar da segurança jurídica do país será destruído.'
  },
  {
    id: 'DDHH-04',
    category: 'Direitos Humanos',
    question: 'A eutanásia e o suicídio assistido devem ser reconhecidos como manifestações legítimas da dignidade do paciente terminal?',
    complexity: 'Avançado',
    keywords: ['eutanásia', 'ortotanásia', 'suicídio assistido', 'autonomia existencial'],
    context: 'A proibição penal da eutanásia no Brasil (equiparada a homicídio privilegiado ou auxílio ao suicídio) em confronto com países como Holanda, Espanha e Colômbia.',
    investigationPaths: [
      'A distinção entre eutanásia ativa, suicídio assistido, ortotanásia (suspensão de tratamentos fúteis) e distanásia',
      'As Resoluções 1.995/2012 e 2.378/2024 do CFM sobre Diretivas Antecipadas de Vontade (testamento vital)',
      'O perigo de pressões familiares financeiras veladas sobre idosos vulneráveis para abreviar suas vidas'
    ],
    counterpoint: 'Obrigar um doente com câncer terminal incurável a suportar meses de dores físicas insuportáveis contra a sua vontade não é tortura legalizada?'
  },
  {
    id: 'DDHH-05',
    category: 'Direitos Humanos',
    question: 'O aborto até a 12ª semana de gestação deve ser descriminalizado como imperativo de justiça reprodutiva e igualdade de gênero?',
    complexity: 'Avançado',
    keywords: ['descriminalização do aborto', 'ADPF 442', 'direitos reprodutivos', 'direito à vida do nascituro'],
    context: 'O julgamento da ADPF 442 no STF sobre a inconstitucionalidade dos artigos 124 e 126 do Código Penal de 1940 que criminalizam a interrupção voluntária da gravidez.',
    investigationPaths: [
      'O voto da Ministra Rosa Weber fundamentado na dignidade e igualdade da mulher e no direito à saúde reprodutiva',
      'A mortalidade de mulheres pobres em clínicas clandestinas insalubres versus o aborto seguro realizado por mulheres ricas no exterior',
      'O estatuto jurídico e moral do embrião humano e a proteção do direito à vida desde a concepção (Pacto de San José)'
    ],
    counterpoint: 'Se a vida humana começa na fecundação como sustentam setores médicos e bioéticos, o feto não é um ser humano indefeso que tem o direito de nascer?'
  },
  {
    id: 'DDHH-06',
    category: 'Direitos Humanos',
    question: 'O trabalho em condições análogas à de escravo exige cerceamento físico da liberdade ou a degradação humana já o caracteriza?',
    complexity: 'Intermediário',
    keywords: ['trabalho escravo contemporâneo', 'artigo 149 Código Penal', 'condições degradantes', 'lista suja'],
    context: 'A redação do art. 149 do Código Penal que inclui a jornada exaustiva e as condições degradantes como núcleos alternativos autônomos do tipo, sem necessidade de correntes ou vigias armados.',
    investigationPaths: [
      'O julgamento histórico do RE 398.041 e da ADI 3487 pelo STF confirmando a competência da Justiça Federal',
      'A "Lista Suja" do trabalho escravo mantida pelo Ministério do Trabalho e as sanções de crédito bancário',
      'A pressão de setores do agronegócio para restringir o conceito apenas à privação da liberdade de locomoção com violência física'
    ],
    counterpoint: 'Fazer trabalhadores dormirem em lonas sobre a terra sem água potável e beberem de poças com animais não é escravidão moderna?'
  },
  {
    id: 'DDHH-07',
    category: 'Direitos Humanos',
    question: 'A tese do marco temporal para demarcação de terras indígenas fere direitos originários imemoriais?',
    complexity: 'Avançado',
    keywords: ['marco temporal', 'terras indígenas', 'artigo 231 CF', 'Tema 1033 STF'],
    context: 'A declaração de inconstitucionalidade pelo STF no Tema 1033 da tese de que os indígenas só teriam direito às terras ocupadas fisicamente na data exata de 5 de outubro de 1988, seguida pela aprovação da Lei 14.701/2023 pelo Congresso.',
    investigationPaths: [
      'A teoria do indigenato originário (João Mendes Jr.) acolhida pela Constituição versus a teoria do fato indígena',
      'O esbulho renitente e a violência histórica que expulsou povos tradicionais de suas terras antes de 1988',
      'A segurança jurídica de proprietários rurais com títulos emitidos legalmente pelo Estado no século passado'
    ],
    counterpoint: 'Sem um marco temporal objetivo, nenhuma fazenda ou cidade do interior terá segurança jurídica, pois qualquer área poderá ser reivindicada como terra ancestral.'
  },
  {
    id: 'DDHH-08',
    category: 'Direitos Humanos',
    question: 'A proteção de dados pessoais como direito fundamental protege o cidadão ou dificulta a investigação de crimes graves?',
    complexity: 'Intermediário',
    keywords: ['proteção de dados', 'EC 115/2022', 'LGPD', 'privacidade informacional'],
    context: 'A promulgação da Emenda Constitucional 115/2022 inserindo a proteção de dados pessoais entre as cláusulas pétreas do art. 5º da CF/88.',
    investigationPaths: [
      'A autodeterminação informativa concebida pelo Tribunal Constitucional Federal alemão no Censo de 1983',
      'A Lei Geral de Proteção de Dados (Lei 13.709/2018) e a atuação da Autoridade Nacional de Proteção de Dados (ANPD)',
      'As barreiras jurídicas impostas a autoridades policiais para cruzar grandes bancos de dados de reconhecimento e geolocalização'
    ],
    counterpoint: 'Sem controle estrito sobre dados, corporações e governos poderiam rastrear cada passo, compra e opinião médica de qualquer cidadão inocente.'
  },
  {
    id: 'DDHH-09',
    category: 'Direitos Humanos',
    question: 'A proibição do discurso de ódio nas redes sociais é essencial para a dignidade de vulneráveis ou serve como censura ideológica?',
    complexity: 'Avançado',
    keywords: ['discurso de ódio', 'hate speech', 'moderação de plataformas', 'censura velada'],
    context: 'O embate sobre os limites entre manifestação agressiva de opiniões políticas/religiosas e o ataque coordenado que incita violência contra minorias raciais, sexuais e religiosas.',
    investigationPaths: [
      'O Plano de Ação de Rabat da ONU com o teste de seis partes para caracterizar incitação ao ódio (contexto, autor, intenção, conteúdo, alcance e probabilidade de dano)',
      'A jurisprudência da Corte Interamericana e do TEDH sobre a não proteção de discursos nazistas e discriminatórios',
      'A utilização política de termos genéricos de "ódio" por governos autoritários para silenciar ativistas e opositores'
    ],
    counterpoint: 'Discursos que desumanizam grupos inteiros chamando-os de pragas e aberrações não são debates de ideias, mas o combustível direto para massacres reais.'
  },
  {
    id: 'DDHH-10',
    category: 'Direitos Humanos',
    question: 'O dever de pagar reparações financeiras históricas aos descendentes da escravidão é uma exigência moral inadiável?',
    complexity: 'Avançado',
    keywords: ['reparações históricas', 'escravidão', 'justiça reparatória', 'dívida histórica'],
    context: 'O movimento global e nacional que exige do Estado brasileiro e de bancos e famílias que enriqueceram com o tráfico negreiro o pagamento de indenizações diretas e fundos de reparação.',
    investigationPaths: [
      'A Ação Civil Pública do Ministério Público Federal contra o Banco do Brasil por financiamento histórico do tráfico negreiro clandestino',
      'A teoria da justiça de transição e reparação coletiva por crimes estatais contra a humanidade imprescritíveis',
      'A complexidade de identificação e quantificação do dano econômico após mais de um século da abolição'
    ],
    counterpoint: 'Fazer as gerações atuais de contribuintes pagarem indenizações por atrocidades cometidas por pessoas falecidas há 150 anos é juridicamente defensável?'
  },
  {
    id: 'DDHH-11',
    category: 'Direitos Humanos',
    question: 'A acolhida irrestrita de refugiados internacionais coloca em risco a segurança e os recursos públicos do país anfitrião?',
    complexity: 'Intermediário',
    keywords: ['refugiados', 'Convenção de 1951', 'princípio do non-refoulement', 'Operação Acolhida'],
    context: 'A chegada massiva de imigrantes venezuelanos e haitianos no Brasil e a experiência de crises migratórias na Europa pressionando serviços públicos de saúde e educação.',
    investigationPaths: [
      'A Convenção de Genebra de 1951 e a Lei Brasileira de Refúgio (Lei 9.474/1997)',
      'O princípio inderrogável do non-refoulement (proibição de devolução a local de perseguição de vida)',
      'A Operação Acolhida em Roraima como modelo internacional de interiorização e acolhimento humanitário'
    ],
    counterpoint: 'O país tem o dever moral e legal de amparar seres humanos que fogem da fome e da ditadura ou deve priorizar exclusivamente seus próprios cidadãos miseráveis?'
  },
  {
    id: 'DDHH-12',
    category: 'Direitos Humanos',
    question: 'A castração química para estupradores reincidentes é uma medida médica terapêutica preventiva ou uma pena corporal cruel?',
    complexity: 'Intermediário',
    keywords: ['castração química', 'penas cruéis', 'artigo 5º XLVII CF', 'crimes sexuais'],
    context: 'Propostas legislativas e leis aprovadas em outros países que condicionam a liberdade condicional de condenados por estupro de crianças ao tratamento hormonal antiandrogênico.',
    investigationPaths: [
      'A vedação constitucional expressa de penas cruéis e de banimento inscrita no art. 5º, XLVII, "e" da CF',
      'A eficácia científica dos inibidores hormonais na redução drástica da libido masculina e da reincidência sexual',
      'A exigência do consentimento informado do apenado para evitar a violação da integridade corporal inviolável'
    ],
    counterpoint: 'Permitir que um pedófilo reincidente saia da prisão após cumprir a pena sem nenhum tratamento hormonal para atacar novas crianças inocentes não é negligência imperdoável?'
  },
  {
    id: 'DDHH-13',
    category: 'Direitos Humanos',
    question: 'A internação involuntária de dependentes químicos em situação de rua respeita a autonomia ou é um sequestro higienista?',
    complexity: 'Intermediário',
    keywords: ['internação involuntária', 'Lei 13.840/2019', 'cracolândia', 'redução de danos'],
    context: 'A legislação que autorizou a internação compulsória de usuários de crack a pedido de familiares ou de servidores públicos por até 90 dias sem autorização judicial prévia.',
    investigationPaths: [
      'A Lei 13.840/2019 e as diretrizes da Política Nacional sobre Drogas',
      'A tensão entre o direito à liberdade individual de ir e vir e a incapacidade psíquica temporária gerada pelo vício destrutivo',
      'A política de redução de danos e o modelo de comunidades terapêuticas confessionais subvencionadas pelo Estado'
    ],
    counterpoint: 'Deixar seres humanos em decomposição física e mental dormindo na sarjeta entre fezes e ratos sob o pretexto de "respeitar sua liberdade" é abandono e crueldade.'
  },
  {
    id: 'DDHH-14',
    category: 'Direitos Humanos',
    question: 'O etarismo e a discriminação por idade no mercado de trabalho violam a dignidade com a conivência silenciosa da sociedade?',
    complexity: 'Intermediário',
    keywords: ['etarismo', 'Estatuto da Pessoa Idosa', 'Lei 10.741/2003', 'discriminação etária'],
    context: 'A exclusão sistemática de profissionais qualificados com mais de 50 anos de processos seletivos e promoções em favor de mão de obra jovem mais barata.',
    investigationPaths: [
      'O Estatuto da Pessoa Idosa (Lei 10.741/2003) e as sanções penais para discriminação por motivo de idade',
      'O envelhecimento populacional acelerado e a necessidade de permanência no mercado após reformas previdenciárias',
      'A dificuldade de produção de prova de discriminação velada em seleções corporativas automatizadas por filtros digitais'
    ],
    counterpoint: 'Empresas não têm o direito legítimo de buscar profissionais com novas competências tecnológicas e salários compatíveis com o orçamento corporativo?'
  },
  {
    id: 'DDHH-15',
    category: 'Direitos Humanos',
    question: 'A inteligência artificial que avalia risco social e habitacional de minorias perpetua a discriminação histórica em escala?',
    complexity: 'Avançado',
    keywords: ['discriminação algorítmica', 'direitos humanos digitais', 'auditoria de algoritmos', 'score de crédito'],
    context: 'Bancos e seguradoras que utilizam dados históricos de inadimplência de bairros inteiros para negar empréstimos ou cobrar juros abusivos de pessoas negras e periféricas.',
    investigationPaths: [
      'O princípio da não discriminação no processamento de dados do art. 6º, IX da LGPD',
      'O conceito de "discriminação por proxy": quando variáveis aparentemente neutras (como CEP ou histórico de escola pública) mascaram a cor da pele',
      'A necessidade de transparência dos algoritmos e auditoria independente obrigatória dos códigos-fonte'
    ],
    counterpoint: 'Se os modelos matemáticos utilizam apenas dados estatísticos de pagamento real sem saber o gênero ou a raça do cliente, como acusá-los de preconceito?'
  },

  // --- DIREITO INTERNACIONAL (15) ---
  {
    id: 'INTL-01',
    category: 'Direito Internacional',
    question: 'A soberania dos Estados ainda é compatível com os desafios existenciais de uma sociedade globalizada?',
    complexity: 'Avançado',
    keywords: ['soberania estatal', 'globalização', 'aquecimento global', 'governança global'],
    context: 'O paradoxo entre a soberania nacional territorial absoluta dos Estados e problemas que não respeitam fronteiras (mudanças climáticas, pandemias, inteligência artificial e paraísos fiscais).',
    investigationPaths: [
      'A Paz de Vestfália de 1648 e a consolidação do sistema de Estados soberanos e iguais',
      'A tragédia dos comuns em escala planetária: a poluição atmosférica e o esgotamento dos oceanos',
      'A fragilidade dos acordos multilaterais (como o Acordo de Paris) desprovidos de mecanismos coercitivos sancionatórios eficazes'
    ],
    counterpoint: 'Se dissolvermos a soberania nacional em favor de uma autoridade global centralizada, quem controlará os burocratas mundiais que governarão sobre a Terra?'
  },
  {
    id: 'INTL-02',
    category: 'Direito Internacional',
    question: 'O poder de veto dos cinco membros permanentes do Conselho de Segurança da ONU paralisa a paz mundial?',
    complexity: 'Intermediário',
    keywords: ['Conselho de Segurança', 'poder de veto', 'reforma da ONU', 'Capítulo VII Carta da ONU'],
    context: 'A incapacidade estrutural da ONU de conter invasões ilegais e massacres quando o agressor é uma das cinco potências nucleares vencedoras de 1945 (EUA, Rússia, China, Reino Unido e França).',
    investigationPaths: [
      'A Carta da ONU de 1945 e a concessão do poder de veto como preço exigido pelas potências para aderir à organização',
      'A invasão da Ucrânia pela Rússia e os vetos norte-americanos a resoluções sobre o conflito no Oriente Médio',
      'A proposta de expansão do Conselho com assentos permanentes para Brasil, Índia, Japão, Alemanha e nações africanas'
    ],
    counterpoint: 'Sem o poder de veto, as superpotências nucleares permaneceriam na ONU ou abandonariam a mesa diplomática, aumentando o risco de uma Terceira Guerra Mundial?'
  },
  {
    id: 'INTL-03',
    category: 'Direito Internacional',
    question: 'O Tribunal Penal Internacional (TPI) pratica justiça universal ou é seletivo contra líderes do Sul Global e da África?',
    complexity: 'Avançado',
    keywords: ['Tribunal Penal Internacional', 'Estatuto de Roma', 'justiça seletiva', 'imperialismo jurídico'],
    context: 'As críticas históricas de que, por duas décadas, quase todos os réus indiciados pelo TPI eram líderes africanos, enquanto presidentes norte-americanos e de grandes potências gozavam de imunidade fática.',
    investigationPaths: [
      'O Estatuto de Roma de 1998 e o princípio da complementariedade da jurisdição',
      'A recusa das maiores potências bélicas do planeta (EUA, Rússia, China e Israel) em ratificar o tratado do TPI',
      'A emissão inédita de mandados de prisão contra Vladimir Putin e Benjamin Netanyahu'
    ],
    counterpoint: 'O TPI deve ser desmoralizado por suas limitações políticas ou fortalecido como o único tribunal permanente que persegue genocidas que escapariam impunes em seus países?'
  },
  {
    id: 'INTL-04',
    category: 'Direito Internacional',
    question: 'A intervenção militar humanitária ("Responsabilidade de Proteger") viola a proibição do uso da força na Carta da ONU?',
    complexity: 'Avançado',
    keywords: ['Responsabilidade de Proteger', 'R2P', 'intervenção humanitária', 'artigo 2º parágrafo 4º Carta da ONU'],
    context: 'A doutrina adotada pela Cúpula Mundial da ONU em 2005 autorizando a intervenção militar internacional quando um Estado comete ou tolera atrocidades em massa contra seu próprio povo.',
    investigationPaths: [
      'O princípio da não ingerência nos assuntos internos dos Estados e o art. 2(4) da Carta da ONU',
      'O precedente desastroso da intervenção na Líbia em 2011 que culminou em guerra civil e colapso estatal permanente',
      'A inação da comunidade internacional diante de genocídios anunciados (Ruanda em 1994 e Srebrenica em 1995)'
    ],
    counterpoint: 'A comunidade internacional deve ficar de braços cruzados assistindo a um ditador exterminar meio milhão de civis desarmados em nome da "soberania territorial"?'
  },
  {
    id: 'INTL-05',
    category: 'Direito Internacional',
    question: 'As sanções econômicas unilaterais impostas por grandes potências configuram atos de guerra não declarada contra populações civis?',
    complexity: 'Intermediário',
    keywords: ['sanções econômicas', 'bloqueio comercial', 'extraterritorialidade', 'efeito colateral humanitário'],
    context: 'A utilização do dólar e do controle de sistemas de pagamentos (SWIFT) para asfixiar economias como as de Cuba, Venezuela, Irã e Síria, privando populações de remédios e alimentos básicos.',
    investigationPaths: [
      'A distinção entre sanções multilaterais autorizadas pelo Conselho de Segurança da ONU e sanções unilaterais',
      'O princípio da autodeterminação dos povos e da soberania econômica',
      'A eficácia questionável das sanções que quase nunca derrubam os líderes no poder e apenas castigam a população empobrecida'
    ],
    counterpoint: 'Se sanções econômicas forem proibidas, que alternativa não violenta restará para pressionar regimes que invadem vizinhos ou desenvolvem armas nucleares?'
  },
  {
    id: 'INTL-06',
    category: 'Direito Internacional',
    question: 'A Convenção de Viena sobre o Direito dos Tratados admite a retirada unilateral de pactos fundamentais sem consequências?',
    complexity: 'Avançado',
    keywords: ['Convenção de Viena de 1969', 'pacta sunt servanda', 'denúncia de tratados', 'cláusula rebus sic stantibus'],
    context: 'A prática de governantes de denunciar e abandonar tratados climáticos, de desarmamento ou de direitos humanos com a simples troca de governo presidencial.',
    investigationPaths: [
      'O princípio "pacta sunt servanda" no art. 26 da Convenção de Viena de 1969',
      'A cláusula "rebus sic stantibus" (mudança fundamental das circunstâncias) do art. 62',
      'A saída dos EUA do Acordo de Paris e do Tratado Nuclear com o Irã durante o governo Trump'
    ],
    counterpoint: 'Como uma nação soberana pode ser forçada a permanecer vinculada para sempre a um tratado que suas gerações atuais e novos governantes consideram lesivo?'
  },
  {
    id: 'INTL-07',
    category: 'Direito Internacional',
    question: 'O princípio da jurisdição universal autoriza juízes nacionais a julgar ex-presidentes estrangeiros por crimes internacionais?',
    complexity: 'Avançado',
    keywords: ['jurisdição universal', 'Caso Pinochet', 'jus cogens', 'tortura internacional'],
    context: 'A prisão de Augusto Pinochet em Londres em 1998 a pedido do juiz espanhol Baltasar Garzón por crimes de tortura e desaparecimento forçado cometidos no Chile.',
    investigationPaths: [
      'A Convenção da ONU contra a Tortura de 1984 e a obrigação de aut dedere aut judicare (extraditar ou julgar)',
      'A erosão da imunidade ratione materiae de ex-chefes de Estado em relação a violações de normas imperativas (jus cogens)',
      'O risco de desestabilização geopolítica e represálias diplomáticas recíprocas entre nações'
    ],
    counterpoint: 'Se juízes de qualquer país puderem mandar prender ex-líderes rivais em viagens ao exterior, a diplomacia global virará uma arena de caça judicial mútua.'
  },
  {
    id: 'INTL-08',
    category: 'Direito Internacional',
    question: 'A imunidade diplomática pode albergar atos flagrantes de tráfico, espionagem e homicídios cometidos por embaixadores?',
    complexity: 'Intermediário',
    keywords: ['Convenção de Viena de 1961', 'imunidade diplomática', 'persona non grata', 'mala diplomática'],
    context: 'A inviolabilidade absoluta de embaixadas, residências e malas diplomáticas garantida pela Convenção de Viena sobre Relações Diplomáticas de 1961.',
    investigationPaths: [
      'A justificativa funcional da imunidade: garantir a comunicação segura e o diálogo mesmo entre países em guerra',
      'O recurso exclusivo do Estado acreditante de declarar o diplomata criminoso como "persona non grata" e expulsá-lo',
      'Casos históricos de crimes violentos cometidos sob o manto da imunidade sem punição no local do fato'
    ],
    counterpoint: 'Sem imunidade diplomática blindada, governos autoritários prenderiam diplomatas estrangeiros em falsas acusações para usá-los como reféns políticos.'
  },
  {
    id: 'INTL-09',
    category: 'Direito Internacional',
    question: 'A exploração comercial de recursos minerais no espaço sideral é compatível com o Tratado do Espaço de 1967?',
    complexity: 'Avançado',
    keywords: ['Tratado do Espaço Exterior', 'patrimônio comum da humanidade', 'mineração de asteroides', 'Artemis Accords'],
    context: 'O art. II do Tratado do Espaço de 1967 que veda qualquer apropriação nacional da Lua ou corpos celestes por reivindicação de soberania ou ocupação.',
    investigationPaths: [
      'A legislação norte-americana (SPACE Act de 2015) e os Acordos Artemis autorizando empresas privadas a extrair e lucrar com recursos lunares',
      'O Tratado da Lua de 1979 que qualificou recursos espaciais como patrimônio comum da humanidade (não assinado pelas potências espaciais)',
      'O risco de uma nova corrida neocolonial e militarização da órbita terrestre e da Lua'
    ],
    counterpoint: 'Se nenhuma empresa ou país puder apropriar-se dos minérios extraídos no espaço, quem investirá centenas de bilhões de dólares em foguetes e sondas?'
  },
  {
    id: 'INTL-10',
    category: 'Direito Internacional',
    question: 'O asilo diplomático concedido em embaixadas deve ser respeitado incondicionalmente mesmo para condenados por corrupção comum?',
    complexity: 'Intermediário',
    keywords: ['asilo diplomático', 'Convenção de Caracas de 1954', 'Caso Julian Assange', 'invasão da embaixada mexicana em Quito'],
    context: 'A invasão armada da embaixada do México em Quito pela polícia equatoriana em 2024 para capturar o ex-vice-presidente Jorge Glas, acusado de corrupção.',
    investigationPaths: [
      'A Convenção de Caracas sobre Asilo Diplomático e a competência exclusiva do Estado asilante para qualificar a natureza política da perseguição',
      'A intangibilidade sagrada da missão diplomática como pilar pétreo do direito internacional consuetudinário',
      'O uso indevido de embaixadas estrangeiras por políticos locais para escapar de sentenças legítimas por crimes financeiros comuns'
    ],
    counterpoint: 'Se o país anfitrião puder arrombar embaixadas quando discordar do asilo concedido, o direito diplomático inteiro deixa de existir.'
  },
  {
    id: 'INTL-11',
    category: 'Direito Internacional',
    question: 'O direito internacional do mar assegura a liberdade de navegação em áreas de ilhas artificiais militarizadas?',
    complexity: 'Avançado',
    keywords: ['UNCLOS', 'Direito do Mar', 'Mar do Sul da China', 'zona econômica exclusiva'],
    context: 'A construção de ilhas artificiais militares pela China no Mar do Sul da China para reivindicar águas territoriais e Zonas Econômicas Exclusivas de vizinhos.',
    investigationPaths: [
      'A Convenção das Nações Unidas sobre o Direito do Mar (UNCLOS) de 1982',
      'A sentença histórica do Tribunal Arbitral da Haia de 2016 declarando ilegais as reivindicações históricas da "Linha dos Nove Traços"',
      'A distinção entre rochedos, ilhas naturais geradoras de mar territorial e construções artificiais humanas'
    ],
    counterpoint: 'A Convenção de Montego Bay expressamente proíbe que aterros e ilhas artificiais projetem mar territorial ou excluam o direito de passagem inocente.'
  },
  {
    id: 'INTL-12',
    category: 'Direito Internacional',
    question: 'A extradição de cidadãos nacionais natos é vedada por imperativo constitucional em nome da soberania protetiva?',
    complexity: 'Intermediário',
    keywords: ['extradição de brasileiro nato', 'artigo 5º LI CF', 'perda da nacionalidade', 'Caso Claudia Hoerig'],
    context: 'A cláusula constitucional que veda terminantemente a extradição de brasileiro nato em qualquer hipótese (art. 5º, LI, CF).',
    investigationPaths: [
      'A Emenda Constitucional 131/2023 que alterou as regras de perda da nacionalidade brasileira para quem obtém cidadania estrangeira',
      'O julgamento histórico do Caso Claudia Hoerig pelo STF e a perda voluntária da nacionalidade antes do homicídio',
      'A obrigação do Brasil de julgar o nacional em território brasileiro por crimes cometidos no exterior (art. 7º, II, "b" do Código Penal)'
    ],
    counterpoint: 'Proteger um assassino confesso da justiça do país onde o crime foi cometido apenas por ele ter nascido no Brasil não é um refúgio corporativista odioso?'
  },
  {
    id: 'INTL-13',
    category: 'Direito Internacional',
    question: 'A autodeterminação dos povos autoriza a secessão unilateral de regiões ricas de um Estado soberano?',
    complexity: 'Avançado',
    keywords: ['autodeterminação dos povos', 'secessão unilateral', 'Caso Kosovo', 'Catalunha'],
    context: 'O conflito entre a integridade territorial dos Estados e o direito de povos culturalmente distintos se separarem unilateralmente mediante referendos (como na Catalunha e no Curdistão).',
    investigationPaths: [
      'A Resolução 2625 da Assembleia Geral da ONU e a teoria da secessão como remédio extremo (Remedial Secession) apenas em casos de opressão violenta sistemática',
      'O parecer consultivo da Corte Internacional de Justiça sobre a declaração de independência do Kosovo em 2010',
      'A ilegalidade de secessões motivadas exclusivamente pelo egoísmo de não querer partilhar riquezas tributárias com regiões pobres'
    ],
    counterpoint: 'Se uma população inteira com língua, cultura e história milenares próprias vota democraticamente para ter seu próprio país, que direito o governo central tem de impedi-la pela força?'
  },
  {
    id: 'INTL-14',
    category: 'Direito Internacional',
    question: 'A criação de um passaporte de carbono e tarifas climáticas na fronteira configuram protecionismo comercial disfarçado?',
    complexity: 'Intermediário',
    keywords: ['CBAM', 'taxa de carbono na fronteira', 'OMC', 'justiça climática'],
    context: 'O Mecanismo de Ajuste de Carbono na Fronteira (CBAM) instituído pela União Europeia taxando importações de aço, cimento e fertilizantes de países com metas ambientais menos rígidas.',
    investigationPaths: [
      'As regras da Organização Mundial do Comércio (OMC) sobre o princípio da nação mais favorecida e a cláusula de exceção ambiental (art. XX do GATT)',
      'O princípio das responsabilidades comuns porém diferenciadas inscrita na Convenção-Quadro da ONU sobre Mudança do Clima',
      'O estrangulamento da indústria de países em desenvolvimento que não dispõem dos mesmos subsídios trilionários para transição verde'
    ],
    counterpoint: 'Como indústrias europeias que investem bilhões para poluir zero competiriam com fábricas estrangeiras que queimam carvão barato sem nenhuma regulação?'
  },
  {
    id: 'INTL-15',
    category: 'Direito Internacional',
    question: 'A ciberguerra e o uso de inteligência artificial em drones autônomos sem controle humano desafiam as Convenções de Genebra?',
    complexity: 'Avançado',
    keywords: ['Direito Internacional Humanitário', 'armas autônomas letais', 'Convenções de Genebra', 'ciberguerra'],
    context: 'O emprego militar de sistemas bélicos equipados com IA capazes de identificar alvos humanos e disparar munição letal sem intervenção consciente de operadores humanos.',
    investigationPaths: [
      'O princípio da distinção (entre combatentes e civis) e o princípio da proporcionalidade no Direito Internacional Humanitário',
      'A exigência de "Meaningful Human Control" (controle humano significativo) nas decisões de vida e morte em combate',
      'A atribuição de responsabilidade por crimes de guerra quando a decisão fatal foi calculada por uma rede neural autônoma'
    ],
    counterpoint: 'Sistemas autônomos de precisão cirúrgica não cometem menos erros emocionais e poupam mais civis do que soldados humanos aterrorizados sob bombardeio?'
  }
];
