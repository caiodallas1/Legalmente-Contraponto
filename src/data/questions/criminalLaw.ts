import { Question } from '../../types';

export const criminalLawQuestions: Question[] = [
  // --- DIREITO PENAL (15) ---
  {
    id: 'PENAL-01',
    category: 'Direito Penal',
    question: 'A intervenção penal simbólica corrompe a legitimidade do Direito Penal democrático?',
    complexity: 'Intermediário',
    keywords: ['direito penal simbólico', 'populismo penal', 'ultima ratio', 'Winfried Hassemer'],
    context: 'A constante criação de novos tipos penais com penas exasperadas para aplacar a comoção social imediata, sem nenhuma eficácia empírica na redução do crime.',
    investigationPaths: [
      'A teoria do direito penal simbólico segundo Winfried Hassemer',
      'O princípio da intervenção mínima e o caráter fragmentário do Direito Penal',
      'O endurecimento de penas nos crimes hediondos e seu impacto nas taxas de reincidência'
    ],
    counterpoint: 'Em sociedades traumatizadas pela criminalidade endêmica, a lei penal não cumpre um papel pedagógico vital de reafirmação dos valores da comunidade?'
  },
  {
    id: 'PENAL-02',
    category: 'Direito Penal',
    question: 'O Direito Penal do Inimigo pode ser aceito em casos excepcionais de terrorismo e crime organizado?',
    complexity: 'Avançado',
    keywords: ['direito penal do inimigo', 'Günther Jakobs', 'cidadão versus inimigo', 'garantismo'],
    context: 'A controversa teoria de Günther Jakobs que postula a supressão de garantias fundamentais para indivíduos que se desvincularam perenemente do pacto estatal de legalidade.',
    investigationPaths: [
      'A distinção funcionalista entre "Direito Penal do Cidadão" e "Direito Penal do Inimigo"',
      'A crítica contundente de Eugenio Raúl Zaffaroni à legitimação de regimes autoritários',
      'Manifestações práticas no ordenamento brasileiro (Regime Disciplinar Diferenciado - RDD)'
    ],
    counterpoint: 'Se um líder de facção armada comanda massacres de dentro da prisão e declara guerra ao Estado, tratá-lo como um cidadão comum não é suicídio institucional?'
  },
  {
    id: 'PENAL-03',
    category: 'Direito Penal',
    question: 'O princípio da insignificância deve ser aplicado mesmo diante de reincidência específica?',
    complexity: 'Intermediário',
    keywords: ['princípio da insignificância', 'crime de bagatela', 'reincidência', 'tipicidade material'],
    context: 'A divergência entre STF e STJ sobre a exclusão da tipicidade material em furtos famélicos ou de valores ínfimos quando praticados por réus multirreincidentes.',
    investigationPaths: [
      'Os vetores objetivos traçados pelo STF no HC 84.412 (mínima ofensividade, ausência de periculosidade, reduzido grau de reprovabilidade)',
      'A teoria da tipicidade conglobante formulada por Zaffaroni',
      'O risco de incentivar uma "profissão do furto habitual" versus o absurdo de encarcerar quem furta produtos de subsistência'
    ],
    counterpoint: 'Se o Estado tolera furtos sucessivos apenas porque cada um é de baixo valor, quem protegerá o pequeno comerciante de bairro da falência silenciosa?'
  },
  {
    id: 'PENAL-04',
    category: 'Direito Penal',
    question: 'A redução da maioridade penal reduz a criminalidade juvenil ou acelera a cooptação pelo crime organizado?',
    complexity: 'Intermediário',
    keywords: ['maioridade penal', 'imputabilidade penal', 'Estatuto da Criança e do Adolescente', 'PEC 171/93'],
    context: 'O intenso embate legislativo e social sobre a alteração do art. 228 da Constituição Federal para imputar responsabilidade penal a jovens de 16 e 17 anos.',
    investigationPaths: [
      'Os dados empíricos do Departamento Penitenciário Nacional e estudos longitudinais de reincidência',
      'A doutrina da proteção integral da ONU e a Convenção sobre os Direitos da Criança',
      'O efeito deletério das prisões de adultos sobre jovens em formação psíquica'
    ],
    counterpoint: 'Um jovem de 16 anos tem plena capacidade de votar, emancipar-se e cometer homicídios planejados; por que seria incapaz de responder pelo que faz?'
  },
  {
    id: 'PENAL-05',
    category: 'Direito Penal',
    question: 'O dolo eventual em homicídios de trânsito sob embriaguez representa uma distorção dogmática da culpa consciente?',
    complexity: 'Avançado',
    keywords: ['dolo eventual', 'culpa consciente', 'homicídio no trânsito', 'teoria da vontade'],
    context: 'A crescente tendência do Ministério Público e dos Tribunais do Júri de acusar motoristas embriagados por dolo eventual ("assumiu o risco") e não culpa consciente.',
    investigationPaths: [
      'A distinção dogmática entre assentir no resultado (dolo eventual) e levianamente esperar evitá-lo (culpa consciente)',
      'O julgamento histórico do HC 107.801 pelo STF afastando a presunção automática de dolo eventual',
      'A pressão das famílias de vítimas e da mídia sobre a capitulação jurídica'
    ],
    counterpoint: 'Quem bebe em níveis cavalares e acelera a 150 km/h em perímetro urbano demonstra total indiferença pela vida alheia, enquadrando-se com precisão no dolo eventual.'
  },
  {
    id: 'PENAL-06',
    category: 'Direito Penal',
    question: 'A finalidade da pena deve ser a retribuição justa do mal ou a ressocialização do apenado?',
    complexity: 'Avançado',
    keywords: ['teorias da pena', 'retribucionismo', 'prevenção geral e especial', 'ressocialização'],
    context: 'O fracasso histórico do sistema penitenciário em ressocializar e a crise do modelo misto ou eclético adotado pelo art. 59 do Código Penal brasileiro.',
    investigationPaths: [
      'As teorias absolutas (Kant, Hegel) versus teorias relativas utilitaristas (Feuerbach, Bentham)',
      'A prevenção especial positiva como falácia disciplinar denunciada por Michel Foucault',
      'A justiça restaurativa como superação do binômio castigo-prisão'
    ],
    counterpoint: 'Se a sociedade renuncia à retribuição proporcional pelo sofrimento imposto à vítima, não estimula o retorno à vingança privada e ao linchamento?'
  },
  {
    id: 'PENAL-07',
    category: 'Direito Penal',
    question: 'A responsabilidade penal da pessoa jurídica deve ser expandida para além dos crimes ambientais?',
    complexity: 'Avançado',
    keywords: ['responsabilidade penal da pessoa jurídica', 'societas delinquere non potest', 'compliance penal', 'crimes econômicos'],
    context: 'O art. 225, § 3º da CF consagrou a punição penal corporativa em crimes ecológicos, reacendendo debates sobre corrupção, fraudes bancárias e lavagem de capitais.',
    investigationPaths: [
      'O dogma do "societas delinquere non potest" e a culpabilidade por defeito de organização (Klaus Tiedemann)',
      'A Lei Anticorrupção (Lei 12.846/13) e sua natureza administrativa/civil versus o modelo norte-americano e francês',
      'A eficácia de multas e dissoluções societárias versus a punição exclusiva dos diretores de carne e osso'
    ],
    counterpoint: 'Tendo em vista que pessoas jurídicas não têm consciência moral, punir a empresa com multas gigantescas não pune apenas acionistas minoritários e trabalhadores inocentes?'
  },
  {
    id: 'PENAL-08',
    category: 'Direito Penal',
    question: 'A descriminalização do porte de maconha para consumo pessoal invade competência do legislador?',
    complexity: 'Intermediário',
    keywords: ['porte para consumo', 'artigo 28 Lei de Drogas', 'RE 635.659', 'alteridade'],
    context: 'A decisão histórica do STF no RE 635.659 que fixou critérios objetivos de quantidade e retirou a natureza penal do porte individual da cannabis.',
    investigationPaths: [
      'O princípio da lesividade e da alteridade: a autolesão não pode ser tipificada como crime',
      'A seletividade racial e territorial da polícia na ausência de critérios objetivos de gramatura',
      'A reação do Congresso Nacional com a PEC das Drogas para restabelecer a criminalização expressa'
    ],
    counterpoint: 'Se a política de drogas afeta a saúde coletiva e a segurança nacional, a decisão sobre descriminalização não pertence estritamente aos representantes eleitos nas urnas?'
  },
  {
    id: 'PENAL-09',
    category: 'Direito Penal',
    question: 'A legítima defesa putativa deve isentar de pena o agente que atua sob erro inevitável?',
    complexity: 'Intermediário',
    keywords: ['legítima defesa putativa', 'descriminantes putativas', 'artigo 20 § 1º', 'teoria da culpabilidade'],
    context: 'As situações trágicas em que o cidadão ou policial dispara contra alguém desarmado por acreditar sinceramente estar na iminência de sofrer agressão letal.',
    investigationPaths: [
      'A teoria extremada da culpabilidade versus teoria limitada acolhida pelo Código Penal',
      'A verificação do erro plenamente justificado pelas circunstâncias fáticas',
      'A responsabilização a título de culpa quando o erro decorre de negligência ou preconceito social'
    ],
    counterpoint: 'Se a isenção de pena for ampla, não se criará uma justificativa cômoda para assassinatos precipitados em situações de pânico injustificado?'
  },
  {
    id: 'PENAL-10',
    category: 'Direito Penal',
    question: 'A criminalização da homofobia e transfobia por analogia pelo STF feriu o princípio da legalidade estrita?',
    complexity: 'Avançado',
    keywords: ['mandado de criminalização', 'analogia in malam partem', 'ADO 26', 'princípio da legalidade'],
    context: 'A equiparação dos atos homofóbicos e transfóbicos ao crime de racismo (Lei 7.716/89) pelo plenário do STF diante da inércia deliberada do Congresso.',
    investigationPaths: [
      'O postulado constitucional "nullum crimen sine lege stricta" no art. 5º, XXXIX da CF',
      'O conceito social e jurídico de raça adotado no Caso Ellwanger',
      'O dever de proteção estatal contra a violência e discriminação estruturais'
    ],
    counterpoint: 'Diante de um grupo vulnerável sendo assassinado diariamente, o STF poderia aguardar indefinidamente um Parlamento abertamente resistente à causa?'
  },
  {
    id: 'PENAL-11',
    category: 'Direito Penal',
    question: 'A prisão preventiva perpétua disfarçada em crimes de repercussão afronta a presunção de não culpabilidade?',
    complexity: 'Intermediário',
    keywords: ['prisão preventiva', 'clamor público', 'garantia da ordem pública', 'artigo 312 CPP'],
    context: 'A manutenção de acusados presos preventivamente por anos a fio sob a fórmula genérica de "garantia da ordem pública" sem que haja perigo concreto de fuga ou destruição probatória.',
    investigationPaths: [
      'A exigência de motivação contemporânea introduzida pelo Pacote Anticrime (Lei 13.964/19)',
      'A jurisprudência das cortes superiores sobre a antecipação ilegítima da pena',
      'O impacto da prisão preventiva nas confissões e celebrações de acordos de colaboração'
    ],
    counterpoint: 'Soltar preventivamente líderes de organizações criminosas de altíssima periculosidade não anula a capacidade investigativa e coloca em risco testemunhas?'
  },
  {
    id: 'PENAL-12',
    category: 'Direito Penal',
    question: 'O consentimento do ofendido pode justificar lesões corporais graves em práticas esportivas violentas ou modificações corporais extremas?',
    complexity: 'Intermediário',
    keywords: ['consentimento do ofendido', 'bens disponíveis', 'lesão corporal', 'autonomia individual'],
    context: 'A discussão sobre a disponibilidade da integridade física em esportes de combate (MMA) e intervenções corporais deliberadas.',
    investigationPaths: [
      'O consentimento como causa supralegal de exclusão da ilicitude ou atipicidade',
      'Os limites morais e jurídicos da autolesão mediada por terceiros',
      'O interesse do Estado na preservação da higidez física dos cidadãos'
    ],
    counterpoint: 'Se um adulto consciente, livre de coação, aceita correr o risco físico em um torneio profissional esportivo, por que o Estado paternalista deveria intervir?'
  },
  {
    id: 'PENAL-13',
    category: 'Direito Penal',
    question: 'A tipificação do crime de stalking (perseguição) nas redes sociais sufoca interações cotidianas ou resguarda a liberdade psíquica?',
    complexity: 'Intermediário',
    keywords: ['stalking', 'artigo 147-A', 'liberdade psíquica', 'perseguição reiterada'],
    context: 'A inserção do art. 147-A no Código Penal e a dosimetria probatória entre a insistência romântica inoportuna e a violência obsessiva que destrói a paz da vítima.',
    investigationPaths: [
      'Os elementos normativos do tipo: perseguição reiterada, ameaça à integridade física ou psicológica e invasão de privacidade',
      'A perspectiva de gênero na vitimização por ex-companheiros',
      'O risco de alargamento indevido para críticas repetidas em ambientes políticos digitais'
    ],
    counterpoint: 'Criminalizar condutas não violentas fisicamente não expande o Direito Penal para conflitos interpessoais que deveriam ser resolvidos no âmbito cível?'
  },
  {
    id: 'PENAL-14',
    category: 'Direito Penal',
    question: 'A teoria do domínio do fato foi desvirtuada no Brasil para fundamentar condenações sem prova direta de comando?',
    complexity: 'Avançado',
    keywords: ['domínio do fato', 'Claus Roxin', 'autoria mediata', 'Ação Penal 470'],
    context: 'A importação da teoria de Claus Roxin no julgamento do Mensalão e na Lava Jato, com críticas de que a mera posição de liderança hierárquica bastaria para presumir culpa.',
    investigationPaths: [
      'As três formas de domínio do fato: domínio da ação, domínio da vontade e domínio funcional',
      'A advertência expressa de Claus Roxin sobre a impossibilidade de condenação apenas pelo cargo ocupado',
      'A dificuldade de produção probatória contra mandantes intelectuais que não deixam rastros materiais diretos'
    ],
    counterpoint: 'Se chefes de máfias ou presidentes de empresas jamais assinam ordens de assassinato ou propina, como responsabilizá-los sem a teoria do domínio da organização?'
  },
  {
    id: 'PENAL-15',
    category: 'Direito Penal',
    question: 'O perdão judicial em caso de homicídio culposo com consequências gravíssimas ao próprio autor viola a igualdade penal?',
    complexity: 'Intermediário',
    keywords: ['perdão judicial', 'artigo 121 § 5º', 'dor moral', 'necessidade da pena'],
    context: 'A concessão de perdão judicial a pais que, por descuido trágico e involuntário, esquecem filhos em veículos ou causam acidentes fatais aos seus próprios entes.',
    investigationPaths: [
      'O fundamento da desnecessidade da pena quando a dor moral suplanta qualquer punição estatal',
      'A natureza jurídica da sentença que concede o perdão judicial (Súmula 18 do STJ)',
      'O tratamento díspar conferido a tragédias de classes abastadas versus o rigor contra mães periféricas'
    ],
    counterpoint: 'Aplicar anos de prisão a uma mãe destruída pela perda involuntária do próprio filho cumpriria que função social além de pura crueldade vingativa?'
  },

  // --- PROCESSO PENAL (15) ---
  {
    id: 'PROC.PEN-01',
    category: 'Processo Penal',
    question: 'A busca pela verdade real justifica a flexibilização das garantias fundamentais do acusado?',
    complexity: 'Avançado',
    keywords: ['verdade real', 'garantismo processual', 'provas ilícitas', 'sistema acusatório'],
    context: 'O confronto entre a tradição inquisitorial que busca a "verdade a qualquer custo" e o garantismo constitucional que subordina a certeza fática à legalidade do rito.',
    investigationPaths: [
      'A desconstrução epistemológica do mito da verdade real na doutrina de Aury Lopes Jr.',
      'A inadmissibilidade das provas obtidas por meios ilícitos (art. 5º, LVI, CF)',
      'O papel do juiz como garantidor das regras do jogo e não como agente de segurança'
    ],
    counterpoint: 'Anular a condenação de um estuprador confesso com provas materiais inequívocas por um vício formal secundário não destrói a fé da sociedade na Justiça?'
  },
  {
    id: 'PROC.PEN-02',
    category: 'Processo Penal',
    question: 'O Acordo de Não Persecução Penal (ANPP) transforma o processo penal em justiça negociada sem contraditório?',
    complexity: 'Intermediário',
    keywords: ['ANPP', 'artigo 28-A CPP', 'justiça negocial', 'plea bargaining'],
    context: 'A introdução do ANPP pela Lei 13.964/19, que permite a extinção da punibilidade mediante confissão formal e cumprimento de condições acordadas com o MP.',
    investigationPaths: [
      'A exigência de confissão circunstanciada como pressuposto e a garantia da não autoincriminação',
      'A disparidade de poder negocial entre o promotor de justiça e o réu hipossuficiente preso',
      'A agilidade na resolução de milhares de casos penais sem o custo e a lentidão do processo tradicional'
    ],
    counterpoint: 'Quem é inocente, mas pobre e sem fiança, não se sentirá compelido a confessar um crime falso apenas para sair imediatamente da prisão preventiva?'
  },
  {
    id: 'PROC.PEN-03',
    category: 'Processo Penal',
    question: 'A implementação do Juiz das Garantias fortalece a imparcialidade ou fragmenta ineficientemente a jurisdição?',
    complexity: 'Intermediário',
    keywords: ['juiz das garantias', 'imparcialidade judicial', 'sistema acusatório', 'ADI 6298'],
    context: 'A validação pelo STF do modelo que separa o juiz que atua na fase investigatória pré-processual daquele que instrui e profere a sentença de mérito.',
    investigationPaths: [
      'A contaminação psicológica do julgador gerada pela decretação prévia de prisões e interceptações telefônicas',
      'O julgamento das ADIs 6298, 6299, 6300 e 6305 pelo STF com prazo de 12 meses para implementação nacional',
      'O custo financeiro e o déficit crônico de magistrados em comarcas de vara única no interior do Brasil'
    ],
    counterpoint: 'Se um magistrado que decreta prisão preventiva já forma convicção antecipada de culpa, como exigir dele neutralidade ao julgar o mérito da causa?'
  },
  {
    id: 'PROC.PEN-04',
    category: 'Processo Penal',
    question: 'A delação premiada celebrada por réu preso é nula por vício de consentimento?',
    complexity: 'Avançado',
    keywords: ['colaboração premiada', 'réu preso', 'vício de vontade', 'Lei 12.850/2013'],
    context: 'O debate sobre a higidez voluntária de acordos de delação fechados enquanto o investigado permanece privado de liberdade por sucessivas ordens preventivas.',
    investigationPaths: [
      'O art. 4º da Lei 12.850/2013 e o requisito da voluntariedade e eficácia objetiva',
      'A proibição expressa de decretação de cautelares apenas pelas declarações do delator',
      'A jurisprudência do STF sobre a impugnação da delação por terceiros delatados'
    ],
    counterpoint: 'Se a lei expressamente autoriza a delação a qualquer tempo do processo, vedar o acordo ao réu preso não retiraria dele seu único meio de defesa e redução de pena?'
  },
  {
    id: 'PROC.PEN-05',
    category: 'Processo Penal',
    question: 'O reconhecimento pessoal fotográfico pode fundamentar sozinho uma condenação criminal?',
    complexity: 'Intermediário',
    keywords: ['reconhecimento fotográfico', 'artigo 226 CPP', 'falsas memórias', 'HC 598.886 STJ'],
    context: 'A virada jurisprudencial do STJ a partir do HC 598.886/SC, tornando vinculante a observância estrita do procedimento do art. 226 do CPP para evitar erros judiciários graves.',
    investigationPaths: [
      'A psicologia do testemunho, os vieses raciais e a maleabilidade das falsas memórias sob estresse',
      'Os dados da Defensoria Pública mostrando que a maioria das condenações errôneas no país decorre de álbuns de delegacia',
      'A suficiência probatória corroborada por outros elementos autônomos de convicção'
    ],
    counterpoint: 'Em assaltos violentos com fuga imediata onde não restam impressões digitais, o reconhecimento convicto da vítima face a face não é a única pista disponível?'
  },
  {
    id: 'PROC.PEN-06',
    category: 'Processo Penal',
    question: 'A execução provisória da pena após condenação em segunda instância viola a presunção de inocência?',
    complexity: 'Avançado',
    keywords: ['presunção de inocência', 'segunda instância', 'ADC 43 e 44', 'trânsito em julgado'],
    context: 'A histórica oscilação do STF entre 2016 e 2019, culminando na confirmação da literalidade do art. 5º, LVII da CF que exige o trânsito em julgado definitivo.',
    investigationPaths: [
      'O texto constitucional: "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória"',
      'A taxa de reversão ou redução de penas em recursos especiais e extraordinários no STJ e STF',
      'A sensação crônica de impunidade para réus de colarinho branco com acesso a dezenas de recursos protelatórios'
    ],
    counterpoint: 'Esperar quatro instâncias e dez anos de recursos enquanto réus condenados por crimes violentos circulam livres não desmoraliza a autoridade do Poder Judiciário?'
  },
  {
    id: 'PROC.PEN-07',
    category: 'Processo Penal',
    question: 'A soberania dos veredictos do Tribunal do Júri autoriza a absolvição do réu por clemência contra a prova dos autos?',
    complexity: 'Avançado',
    keywords: ['Tribunal do Júri', 'soberania dos veredictos', 'quesito absolutório genérico', 'Tema 1087 STF'],
    context: 'O art. 483, III do CPP ("O jurado absolve o réu?") e a possibilidade de anulação do julgamento pelo Tribunal de Justiça via apelação do Ministério Público.',
    investigationPaths: [
      'A soberania dos veredictos como cláusula pétrea constitucional (art. 5º, XXXVIII, "c", CF)',
      'A íntima convicção dos jurados leigos sem necessidade de motivação racional da decisão',
      'A tese de que a clemência não pode ser utilizada para legitimar crimes de ódio ou feminicídios'
    ],
    counterpoint: 'Permitir que um tribunal togado anule a absolvição soberana dada por jurados populares não esvazia o próprio sentido do Tribunal do Júri?'
  },
  {
    id: 'PROC.PEN-08',
    category: 'Processo Penal',
    question: 'A revista íntima vexatória em presídios pode ser mantida sob o argumento da segurança dos estabelecimentos penais?',
    complexity: 'Intermediário',
    keywords: ['revista íntima', 'dignidade da pessoa humana', 'Tema 998 STF', 'scanners corporais'],
    context: 'A submissão de mães, esposas e filhas de presos a desnudamento forçado e inspeções genitais degradantes para ingressar em dias de visita.',
    investigationPaths: [
      'O julgamento do Tema 998 com repercussão geral no STF sobre a ilicitude probatória de revistas invasivas',
      'A existência e o custo de instalação de scanners corporais não invasivos em todo o sistema prisional',
      'A apreensão frequente de armas, drogas e chips telefônicos introduzidos em cavidades corporais'
    ],
    counterpoint: 'Sem scanners de última geração em penitenciárias remotas, suspender revistas minuciosas não inundará as celas de pistolas e explosivos de facções?'
  },
  {
    id: 'PROC.PEN-09',
    category: 'Processo Penal',
    question: 'A quebra de cadeia de custódia da prova digital deve acarretar a nulidade absoluta do processo?',
    complexity: 'Avançado',
    keywords: ['cadeia de custódia', 'prova digital', 'artigo 158-A CPP', 'integridade probatória'],
    context: 'A adulteração ou ausência de documentação no manuseio de smartphones, mensagens de WhatsApp e discos rígidos apreendidos pelas autoridades policiais.',
    investigationPaths: [
      'As etapas obrigatórias da cadeia de custódia introduzidas pelo Pacote Anticrime (art. 158-A a 158-F do CPP)',
      'A jurisprudência sobre o espelhamento forense e o cálculo de hash para comprovar integridade',
      'A distinção entre mera irregularidade formal sem prejuízo comprovado (pas de nullité sans grief) e nulidade insanável'
    ],
    counterpoint: 'Se mensagens digitais podem ser apagadas ou inseridas em segundos sem deixar rastros, como confiar numa prova cujo histórico de manuseio foi quebrado?'
  },
  {
    id: 'PROC.PEN-10',
    category: 'Processo Penal',
    question: 'A infiltração policial virtual em redes sociais sem autorização judicial detalhada fere a privacidade do cidadão?',
    complexity: 'Avançado',
    keywords: ['infiltração policial virtual', 'prova cibernética', 'Lei 13.441/2017', 'reserva de jurisdição'],
    context: 'A atuação de agentes de segurança disfarçados em grupos privados de Telegram e fóruns online para investigar pornografia infantil e milícias digitais.',
    investigationPaths: [
      'A regulamentação no ECA (art. 190-A) e na Lei das Organizações Criminosas',
      'A fronteira entre a investigação legítima e o flagrante provocado (crime impossível)',
      'A proteção de dados e o direito à intimidade nas comunicações criptografadas ponta a ponta'
    ],
    counterpoint: 'Em redes criptografadas que não cooperam com a polícia, como desmantelar quadrilhas de tráfico humano sem a infiltração de agentes sob disfarce digital?'
  },
  {
    id: 'PROC.PEN-11',
    category: 'Processo Penal',
    question: 'O interrogatório judicial deve ser sempre o último ato da instrução probatória, inclusive em leis especiais?',
    complexity: 'Intermediário',
    keywords: ['interrogatório', 'ampla defesa', 'artigo 400 CPP', 'Lei de Drogas'],
    context: 'O conflito entre o rito comum do CPP (interrogatório ao final) e leis especiais como a Lei de Drogas (Lei 11.343/06) que previam o interrogatório logo no início.',
    investigationPaths: [
      'O julgamento paradigmático do HC 127.900 pelo STF assentando a aplicação subsidiária do art. 400 do CPP a todos os ritos especiais',
      'A natureza mista do interrogatório como meio de prova e meio primordial de autodefesa',
      'O direito do acusado de falar somente após conhecer todas as acusações e depoimentos testemunhais colhidos'
    ],
    counterpoint: 'Se a lei especial prevê um rito mais célere em razão da gravidade da matéria, o princípio da especialidade normativa não deveria prevalecer?'
  },
  {
    id: 'PROC.PEN-12',
    category: 'Processo Penal',
    question: 'O Ministério Público pode conduzir investigações criminais diretas sem controle policial?',
    complexity: 'Intermediário',
    keywords: ['investigação direta pelo MP', 'PIC', 'poderes investigatórios', 'RE 593.727'],
    context: 'A fixação de tese de repercussão geral pelo STF reconhecendo a competência do parquet para realizar investigações penais próprias com base na teoria dos poderes implícitos.',
    investigationPaths: [
      'A teoria dos poderes implícitos: quem tem o poder de propor a ação penal deve ter os meios para apurar os fatos',
      'A ausência de previsão expressa na Constituição Federal de função de polícia judiciária para o MP',
      'O risco de seletividade e perseguição política quando o mesmo órgão investiga, acusa e fiscaliza a legalidade'
    ],
    counterpoint: 'Quando delegados e corporações policiais são os próprios investigados por corrupção e milícia, quem mais conduziria a investigação se não o Ministério Público?'
  },
  {
    id: 'PROC.PEN-13',
    category: 'Processo Penal',
    question: 'A entrada de policiais em domicílio sem mandado com base em denúncia anônima torna nula todas as apreensões?',
    complexity: 'Intermediário',
    keywords: ['inviolabilidade de domicílio', 'fundadas razões', 'Tema 280 STF', 'denúncia anônima'],
    context: 'A exigência de que a fundada suspeita de flagrante delito (art. 5º, XI, CF) seja corroborada por elementos prévios objetivos e documentados antes de invadir a casa.',
    investigationPaths: [
      'O julgamento do Tema 280 pelo STF: o controle judicial a posteriori deve verificar se havia justa causa concreta prévia',
      'O consentimento do morador: a exigência do STJ de gravação em áudio/vídeo da autorização para evitar fraudes policiais',
      'A apreensão frequente de grandes quantidades de armas e entorpecentes logo após o ingresso na residência'
    ],
    counterpoint: 'Se os policiais flagraram de fato quilos de cocaína e fuzis dentro do imóvel, anular o processo por formalismo documental não zomba da segurança da sociedade?'
  },
  {
    id: 'PROC.PEN-14',
    category: 'Processo Penal',
    question: 'A vedação absoluta de revisão criminal contra o réu (pro societate) compromete a realização da justiça substantiva?',
    complexity: 'Avançado',
    keywords: ['revisão criminal', 'pro societate', 'coisa julgada', 'segurança jurídica'],
    context: 'A regra inderrogável do processo penal brasileiro de que a revisão criminal transitada em julgado só cabe em benefício do apenado (pro reo), mesmo que surja prova incontestável de sua culpa.',
    investigationPaths: [
      'A intangibilidade da coisa julgada absolutória como garantia máxima contra o arbítrio estatal perpétuo',
      'O modelo de outros países que admitem reabertura do processo em casos gravíssimos de corrupção de jurados ou fraude probatória comprovada',
      'A assimetria estrutural entre o poder persecutório estatal e a vulnerabilidade do cidadão'
    ],
    counterpoint: 'Se o réu absolveu-se comprando testemunhas ou forjando exames de DNA e depois confessa em público com deboche, a ordem jurídica deve permanecer de mãos atadas?'
  },
  {
    id: 'PROC.PEN-15',
    category: 'Processo Penal',
    question: 'O uso de algemas em audiências judiciais deve ser a regra para segurança ou a exceção para evitar constrangimento ilegal?',
    complexity: 'Intermediário',
    keywords: ['Súmula Vinculante 11', 'uso de algemas', 'dignidade da pessoa humana', 'presunção de inocência'],
    context: 'A Súmula Vinculante 11 do STF, que condiciona o uso de algemas a perigo demonstrado à integridade física própria ou alheia, justificado por escrito.',
    investigationPaths: [
      'A influência psicológica da presença do réu algemado na formação de convicção dos jurados populares',
      'Os riscos reais de fuga e agressão violenta contra magistrados, promotores e advogados em salas de audiência',
      'A banalização da justificação padronizada por juízes para manter o uso indiscriminado'
    ],
    counterpoint: 'Em comarcas com pouco efetivo policial militar, arriscar a vida dos servidores e do público presente em prol da sensibilidade estética do réu é razoável?'
  },

  // --- CRIMINOLOGIA (15) ---
  {
    id: 'CRIM-01',
    category: 'Criminologia',
    question: 'O sistema penal combate a criminalidade ou reproduz mecanismos de controle e seletividade social?',
    complexity: 'Avançado',
    keywords: ['criminologia crítica', 'seletividade penal', 'Alessandro Baratta', 'etiquetamento'],
    context: 'A tese central da criminologia crítica de que o sistema de justiça penal não atua de modo isonômico, mas seleciona preferencialmente indivíduos pobres e marginalizados.',
    investigationPaths: [
      'A teoria do etiquetamento (labeling approach) de Howard Becker e Erving Goffman',
      'A obra fundacional de Alessandro Baratta: "Criminologia Crítica e Crítica do Direito Penal"',
      'As estatísticas do sistema penitenciário brasileiro revelando o perfil racial e econômico da massa carcerária'
    ],
    counterpoint: 'Negar a utilidade da punição penal não desampara exatamente as populações vulneráveis de periferias, que são as maiores vítimas da violência diária?'
  },
  {
    id: 'CRIM-02',
    category: 'Criminologia',
    question: 'A teoria das janelas quebradas gera bairros mais seguros ou legitima a criminalização da pobreza e a violência policial?',
    complexity: 'Intermediário',
    keywords: ['janelas quebradas', 'broken windows', 'tolerância zero', 'policiamento ostensivo'],
    context: 'O experimento sociológico de Wilson e Kelling em Nova York nos anos 1980 e a política de reprimir duramente pequenas desordens para evitar a eclosão de crimes graves.',
    investigationPaths: [
      'A política de "Stop and Frisk" e a comprovação estatística de discriminação racial contra negros e latinos',
      'A redução drástica dos índices de homicídios na Nova York da era Giuliani e as teses concorrentes',
      'O risco de transformação da polícia de um órgão comunitário em uma força de ocupação hostil'
    ],
    counterpoint: 'Ignorar a degradação urbana, o vandalismo e os furtos em uma praça pública não atrai rapidamente quadrilhas armadas e destrói o comércio local?'
  },
  {
    id: 'CRIM-03',
    category: 'Criminologia',
    question: 'O encarceramento em massa atua como incubadora e polo de comando das grandes facções prisionais?',
    complexity: 'Avançado',
    keywords: ['superlotação carcerária', 'PCC e Comando Vermelho', 'gestão da violência', 'criminologia carcerária'],
    context: 'A contradição de prender centenas de milhares de jovens por crimes sem violência (tráfico varejista), entregando-os compulsoriamente à proteção de facções organizadas dentro dos presídios.',
    investigationPaths: [
      'O surgimento histórico do Comando Vermelho na Ilha Grande e do PCC na Casa de Detenção de SP',
      'A prestação de assistência jurídica e material pelas facções nas brechas deixadas pela omissão do Estado',
      'O crescimento vertiginoso da taxa de aprisionamento no Brasil nas últimas três décadas'
    ],
    counterpoint: 'Sem prender traficantes e operadores logísticos do crime, como o Estado demonstraria a vigência das leis e evitaria a anarquia total nas ruas?'
  },
  {
    id: 'CRIM-04',
    category: 'Criminologia',
    question: 'A criminologia feminista demonstrou que a violência doméstica é fruto de estruturas patriarcais e não de desvios psicológicos individuais?',
    complexity: 'Intermediário',
    keywords: ['criminologia feminista', 'patriarcado', 'Lei Maria da Penha', 'violência de gênero'],
    context: 'A mudança de paradigma introduzida pela crítica feminista, concebendo a agressão contra a mulher como exercício de poder estrutural e controle de corpos.',
    investigationPaths: [
      'A construção teórica da Lei Maria da Penha (Lei 11.340/06) e o papel da OEA no Caso Maria da Penha Maia Fernandes',
      'A insuficiência da resposta meramente punitiva para desconstruir a masculinidade tóxica e o ciclo de abusos',
      'A interseccionalidade entre raça, classe social e vulnerabilidade à letalidade doméstica'
    ],
    counterpoint: 'Tratar todo agressor como produto inevitável da cultura não diminui sua responsabilidade moral e penal individual pelo crime hediondo que cometeu?'
  },
  {
    id: 'CRIM-05',
    category: 'Criminologia',
    question: 'Os crimes de colarinho branco causam mais danos à sociedade do que os crimes patrimoniais violentos de rua?',
    complexity: 'Intermediário',
    keywords: ['crimes de colarinho branco', 'Edwin Sutherland', 'dano social difuso', 'impunidade corporativa'],
    context: 'A clássica formulação de Edwin Sutherland demonstrando que desvios fiscais bilionários e fraudes financeiras destroem serviços de saúde e matam indiretamente muito mais pessoas.',
    investigationPaths: [
      'A conceituação de "White-Collar Crime" e a imunidade fática de elites econômicas',
      'O impacto da corrupção orçamentária na mortalidade infantil e no sucateamento hospitalar',
      'A brandura das penas e os benefícios processuais concedidos a fraudadores corporativos versus o rigor contra ladrões de celular'
    ],
    counterpoint: 'Um desvio contábil causa medo imediato de sair na calçada como um assaltante armado que aponta um revólver para a cabeça da sua família?'
  },
  {
    id: 'CRIM-06',
    category: 'Criminologia',
    question: 'O abolicionismo penal é uma utopia irresponsável ou uma reflexão urgente sobre a barbárie institucional?',
    complexity: 'Avançado',
    keywords: ['abolicionismo penal', 'Louk Hulsman', 'Nils Christie', 'crise civilizatória'],
    context: 'As propostas radicais de pensadores como Louk Hulsman e Nils Christie que defendem a substituição progressiva do sistema penal punitivo por mecanismos civis de resolução de conflitos.',
    investigationPaths: [
      'A obra "Penas Perdidas" de Louk Hulsman e a denúncia da máquina estatal de produção de sofrimento',
      'O conceito de "os conflitos como propriedade" roubada dos cidadãos pelo Estado burocrático (Nils Christie)',
      'A incapacidade prática de responder a crimes de sangue e psicopatas sádicos fora do confinamento estatal'
    ],
    counterpoint: 'Em caso de estupro seguido de morte ou chacinas premeditadas, como qualquer sociedade humana manteria a coesão sem a prisão do culpado?'
  },
  {
    id: 'CRIM-07',
    category: 'Criminologia',
    question: 'A teoria da associação diferencial comprova que o comportamento criminoso é aprendido como qualquer outra profissão?',
    complexity: 'Intermediário',
    keywords: ['associação diferencial', 'aprendizagem social', 'Edwin Sutherland', 'sociologia do crime'],
    context: 'A tese de que ninguém nasce criminoso nem delinque por pobreza congênita, mas aprende técnicas de infração e racionalizações justificadoras em grupos íntimos de convivência.',
    investigationPaths: [
      'Os nove postulados da teoria de Sutherland sobre a comunicação e assimilação de valores desviantes',
      'A aplicação da teoria a organizações criminosas e cartéis empresariais',
      'A influência das subculturas carcerárias na especialização delitiva de reincidentes'
    ],
    counterpoint: 'Se o crime fosse apenas aprendizado, como explicar irmãos criados sob a mesma influência em que um torna-se juiz e o outro líder de facção armada?'
  },
  {
    id: 'CRIM-08',
    category: 'Criminologia',
    question: 'A arquitetura hostil nas cidades é um recurso de segurança urbana ou uma violência higienista contra moradores de rua?',
    complexity: 'Intermediário',
    keywords: ['arquitetura hostil', 'Lei Padre Júlio Lancellotti', 'higienismo social', 'espaço público'],
    context: 'A instalação de espetos, pedras pontiagudas e bancos divididos para impedir que pessoas em situação de rua durmam sob viadutos e marquises.',
    investigationPaths: [
      'A Lei Federal 14.489/2022 (Lei Padre Júlio Lancellotti) que proibiu a arquitetura hostil em espaços públicos',
      'O direito à cidade (Henri Lefebvre) e a privatização velada do espaço comum',
      'As reclamações de comerciantes e moradores sobre segurança e salubridade diante de aglomerações'
    ],
    counterpoint: 'Proprietários de comércios que pagam impostos caros têm o direito de proteger a entrada de seus estabelecimentos contra sujeira e ameaças?'
  },
  {
    id: 'CRIM-09',
    category: 'Criminologia',
    question: 'O positivismo criminológico de Cesare Lombroso ainda sobrevive sob a roupagem da neurocriminologia contemporânea?',
    complexity: 'Avançado',
    keywords: ['Cesare Lombroso', 'homem delinquente', 'neurocriminologia', 'determinismo biológico'],
    context: 'O retorno de pesquisas que tentam associar anomalias no córtex pré-frontal e variações genéticas a uma propensão inata e inescapável ao crime.',
    investigationPaths: [
      'A genealogia do racismo científico e a criminalização de traços étnicos no século XIX',
      'As pesquisas contemporâneas com ressonância magnética cerebral em psicopatas homicidas (Adrian Raine)',
      'O perigo de ressuscitar políticas de eugenia e controle preventivo de corpos considerados perigosos'
    ],
    counterpoint: 'Se a neurociência moderna descobre lesões cerebrais severas que anulam a empatia e o autocontrole, ignorar a biologia não seria cegueira ideológica?'
  },
  {
    id: 'CRIM-10',
    category: 'Criminologia',
    question: 'A legalização e regulamentação das drogas enfraqueceria as milícias e facções ou aumentaria o consumo descontrolado?',
    complexity: 'Intermediário',
    keywords: ['regulamentação das drogas', 'guerra às drogas', 'saúde pública', 'economia do narcotráfico'],
    context: 'A discussão sobre se a proibição é a verdadeira criadora das margens astronômicas de lucro que financiam o poder bélico do crime organizado.',
    investigationPaths: [
      'As experiências do Uruguai, Canadá e diversos estados norte-americanos com a cannabis recreativa regulamentada',
      'A diversificação das facções brasileiras para grilagem de terras, roubo de cargas e contrabando de combustíveis',
      'O impacto sanitário sobre o sistema de saúde mental no caso de substâncias altamente aditivas'
    ],
    counterpoint: 'Se o Estado legalizar, as facções armadas entregarão os fuzis e abrirão empresas regulares ou migrarão com mais ferocidade para sequestros e extorsões?'
  },
  {
    id: 'CRIM-11',
    category: 'Criminologia',
    question: 'A teoria da anomia de Robert Merton explica por que o crime floresce mesmo em sociedades com crescimento econômico?',
    complexity: 'Avançado',
    keywords: ['anomia', 'Robert Merton', 'metas culturais', 'meios institucionalizados'],
    context: 'A tensão estrutural quando a sociedade bombardeia todos com metas de consumo e riqueza material, mas restringe severamente os meios legítimos de acesso para a maioria.',
    investigationPaths: [
      'As cinco respostas individuais de Merton: conformidade, inovação, ritualismo, evasão e rebelião',
      'A criminalidade como resposta "inovadora" para atingir o sucesso financeiro celebrado pela mídia',
      'A sociedade do hiperconsumo e o crime como atalho para o status social nas periferias'
    ],
    counterpoint: 'Se a anomia fosse suficiente, a grande maioria esmagadora de pessoas de baixa renda não continuaria trabalhando honestamente apesar da escassez?'
  },
  {
    id: 'CRIM-12',
    category: 'Criminologia',
    question: 'O policiamento preditivo com uso de inteligência artificial consolida o racismo institucional em algoritmos?',
    complexity: 'Avançado',
    keywords: ['policiamento preditivo', 'viés algorítmico', 'racismo algorítmico', 'reconhecimento facial'],
    context: 'O emprego de softwares que direcionam patrulhas com base em estatísticas criminais históricas, realimentando a vigilância ostensiva sobre os mesmos bairros negros e pobres.',
    investigationPaths: [
      'A teoria do "Dirty Data" em modelos de machine learning treinados em relatórios policiais enviesados',
      'O índice desproporcional de falsos positivos no reconhecimento facial de pessoas negras no Brasil',
      'A promessa de otimização alocativa de viaturas em áreas de maior risco iminente de crimes'
    ],
    counterpoint: 'Se os dados mostram objetivamente que um cruzamento concentra 80% dos roubos de carros da região, direcionar a patrulha para lá é racismo ou eficiência?'
  },
  {
    id: 'CRIM-13',
    category: 'Criminologia',
    question: 'A mídia sensacionalista atua como agente criminógeno ao fomentar o medo moral e a demanda por punitivismo cego?',
    complexity: 'Intermediário',
    keywords: ['pânico moral', 'criminologia midiática', 'populismo punitivo', 'sensacionalismo policial'],
    context: 'Programas televisivos de auditório policial que espetacularizam a violência, violam a presunção de inocência de suspeitos e pressionam juízes por sentenças exemplares.',
    investigationPaths: [
      'O conceito de "Pânico Moral" formulado pelo sociólogo Stanley Cohen',
      'A tese de Zaffaroni sobre a criminologia midiática e a construção do estereótipo do criminoso inimigo',
      'A exploração comercial do medo coletivo como mercadoria de audiência lucrativa'
    ],
    counterpoint: 'A imprensa policial não cumpre o papel essencial de dar voz a cidadãos esquecidos cujos bairros foram abandonados pelo policiamento do Estado?'
  },
  {
    id: 'CRIM-14',
    category: 'Criminologia',
    question: 'A justiça restaurativa é capaz de lidar com crimes violentos ou é restrita a delitos de menor potencial ofensivo?',
    complexity: 'Avançado',
    keywords: ['justiça restaurativa', 'círculos de paz', 'reparação do dano', 'vitimologia'],
    context: 'A expansão de práticas restaurativas focadas na escuta da vítima e na assunção de responsabilidade pelo agressor em contraposição ao modelo punitivista tradicional.',
    investigationPaths: [
      'A Resolução 225/2016 do Conselho Nacional de Justiça sobre a Política Nacional de Justiça Restaurativa',
      'A experiência da África do Sul com as Comissões de Verdade e Reconciliação pós-apartheid',
      'O risco de revitimização e pressão psicológica sobre vítimas de abusos sexuais e agressões físicas'
    ],
    counterpoint: 'Como colocar frente a frente uma mãe traumatizada e o assassino de seu filho sem causar um dano emocional devastador à vítima?'
  },
  {
    id: 'CRIM-15',
    category: 'Criminologia',
    question: 'O crescimento das milícias privadas decorre da falência do Estado ou de sua cumplicidade orgânica com o crime?',
    complexity: 'Avançado',
    keywords: ['milícias', 'paraestatalidade', 'segurança privada clandestina', 'cooptação armada'],
    context: 'A ascensão de grupos paramilitares formados por policiais civis, militares e bombeiros que dominam territórios, cobram taxas de moradores e monopolizam serviços essenciais.',
    investigationPaths: [
      'A transição das milícias do discurso de "autodefesa comunitária contra o tráfico" para o controle mafioso de terras e drogas',
      'A imbricação histórica entre poderes eleitorais locais e chefias milicianas',
      'A dificuldade investigativa em corporações onde os executores são membros de alta patente da segurança pública'
    ],
    counterpoint: 'As milícias surgiram originariamente porque o Estado deixou cidadãos e comerciantes completamente desprotegidos nas mãos de facções do narcotráfico.'
  }
];
