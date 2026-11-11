import { Question } from '../../types';

export const privateLawQuestions: Question[] = [
  // --- DIREITO CIVIL (15) ---
  {
    id: 'CIVIL-01',
    category: 'Direito Civil',
    question: 'A autonomia privada pode ser considerada livre quando existe profunda desigualdade econômica entre as partes?',
    complexity: 'Avançado',
    keywords: ['autonomia da vontade', 'dirigismo contratual', 'hipossuficiência', 'função social do contrato'],
    context: 'A transição do dogma da autonomia da vontade absoluta para o solidarismo constitucional e a intervenção estatal para restaurar a igualdade material nos contratos.',
    investigationPaths: [
      'O princípio da função social do contrato (art. 421 do Código Civil) e da boa-fé objetiva (art. 422)',
      'A teoria das assimetrias de poder negocial na doutrina de Judith Martins-Costa',
      'A intervenção minimalista preconizada pela Lei da Liberdade Econômica (Lei 13.874/19)'
    ],
    counterpoint: 'Se o Estado decide anular cláusulas livremente pactuadas sob o pretexto de proteger o mais fraco, não retira do cidadão sua dignidade de decidir por si mesmo?'
  },
  {
    id: 'CIVIL-02',
    category: 'Direito Civil',
    question: 'O poliamor e as famílias paralelas devem ter reconhecimento e direitos sucessórios no ordenamento jurídico?',
    complexity: 'Intermediário',
    keywords: ['poliamorismo', 'famílias paralelas', 'monogamia', 'Tema 529 STF'],
    context: 'A decisão do STF no Tema 529 assentando que a monogamia é princípio estruturante do sistema constitucional, vedando a divisão de pensão por morte entre cônjuge e amante.',
    investigationPaths: [
      'O princípio da afetividade e a pluralidade de entidades familiares (art. 226 da CF)',
      'O julgamento conjunto do Tema 529 e do Tema 526 pelo STF',
      'A desproteção patrimonial da pessoa que dedicou décadas a um lar em relação simultânea de boa-fé'
    ],
    counterpoint: 'Reconhecer efeitos jurídicos e previdenciários a uniões simultâneas não desmontaria a segurança patrimonial da família constituída formalmente?'
  },
  {
    id: 'CIVIL-03',
    category: 'Direito Civil',
    question: 'A herança necessária que reserva 50% dos bens aos herdeiros necessários é um anacronismo autoritário?',
    complexity: 'Intermediário',
    keywords: ['legítima', 'herdeiros necessários', 'liberdade testamentária', 'artigo 1.846 CC'],
    context: 'A obrigação legal de reservar metade do patrimônio aos descendentes, ascendentes ou cônjuge, impedindo a pessoa lúcida de dispor integralmente de seus bens por testamento.',
    investigationPaths: [
      'A comparação com sistemas do Common Law (EUA e Inglaterra) onde vige a ampla liberdade testamentária',
      'A proteção de filhos vulneráveis e a preservação do núcleo de solidariedade intergeracional familiar',
      'As propostas da Comissão de Juristas de Reforma do Código Civil para flexibilizar a legítima'
    ],
    counterpoint: 'Sem a legítima, o que impediria um genitor idoso e fragilizado de ser manipulado por terceiros e deserdar filhos legítimos sem amparo?'
  },
  {
    id: 'CIVIL-04',
    category: 'Direito Civil',
    question: 'A maternidade de substituição ("barriga de aluguel") com remuneração financeira deve ser legalizada?',
    complexity: 'Avançado',
    keywords: ['gestação por substituição', 'biodireito', 'comodificação do corpo', 'reprodução assistida'],
    context: 'A vedação expressa no Brasil de qualquer caráter comercial ou lucrativo na cessão temporária de útero, permitindo-a apenas de modo altruísta no âmbito familiar.',
    investigationPaths: [
      'A Resolução 2.320/2022 do Conselho Federal de Medicina sobre técnicas de reprodução assistida',
      'O risco de exploração reprodutiva de mulheres pobres por casais abastados em mercados transnacionais',
      'A autonomia corporal da mulher para prestar um serviço gestacional consentido e remunerado'
    ],
    counterpoint: 'Permitir a compra e venda da capacidade gestacional não mercantiliza a vida humana e o próprio nascimento da criança?'
  },
  {
    id: 'CIVIL-05',
    category: 'Direito Civil',
    question: 'O direito ao esquecimento na internet pode coexistir com a liberdade histórica e de informação?',
    complexity: 'Avançado',
    keywords: ['direito ao esquecimento', 'Tema 786 STF', 'Caso Aída Curi', 'memória coletiva'],
    context: 'A fixação de tese pelo STF no Tema 786 declarando que o direito ao esquecimento é incompatível com a Constituição brasileira.',
    investigationPaths: [
      'O julgamento histórico do RE 1.010.606 (Caso Aída Curi no programa Linha Direta)',
      'A decisão pioneira do Tribunal de Justiça da União Europeia no Caso Google Spain',
      'A diferença entre a remoção de mentiras contemporâneas e a censura a fatos verídicos historicamente ocorridos'
    ],
    counterpoint: 'Uma pessoa condenada que cumpriu integralmente sua pena deve ser condenada pelo Google a carregar o estigma público pelo resto da existência?'
  },
  {
    id: 'CIVIL-06',
    category: 'Direito Civil',
    question: 'A usucapião especial urbana de imóveis abandonados pune a desídia ou desrespeita o direito de propriedade?',
    complexity: 'Intermediário',
    keywords: ['usucapião urbana', 'artigo 183 CF', 'função social da propriedade', 'especulação imobiliária'],
    context: 'A aquisição originária da propriedade de imóvel urbano de até 250 m² após 5 anos ininterruptos de posse mansa e pacífica utilizada para moradia da família.',
    investigationPaths: [
      'O Estatuto da Cidade (Lei 10.257/2001) e os instrumentos de indução ao desenvolvimento urbano',
      'A função social da propriedade como elemento intrínseco do direito subjetivo de propriedade',
      'O abandono especulativo de prédios centrais enquanto milhões não têm moradia digna'
    ],
    counterpoint: 'Se um proprietário adoece ou viaja e tem seu patrimônio invadido, perder a posse em 5 anos não é uma expropriação desleal?'
  },
  {
    id: 'CIVIL-07',
    category: 'Direito Civil',
    question: 'A indenização punitiva (punitive damages) deve ser adotada para punir abusos deliberados de grandes corporações?',
    complexity: 'Intermediário',
    keywords: ['punitive damages', 'danos morais', 'função pedagógico-punitiva', 'enriquecimento sem causa'],
    context: 'A restrição tradicional do direito civil brasileiro que limita as indenizações à exata extensão do dano (art. 944 CC), gerando a prática empresarial de que "compensa lesar o consumidor".',
    investigationPaths: [
      'A teoria do desestímulo e a função pedagógica dos danos morais na doutrina nacional',
      'O risco de enriquecimento sem causa da vítima e de explosão da litigiosidade no modelo norte-americano',
      'O cálculo econômico de grandes empresas aéreas e de telefonia que preferem pagar indenizações residuais a consertar seus serviços'
    ],
    counterpoint: 'Se a indenização exceder o dano real sofrido e enriquecer o autor da ação, a responsabilidade civil não estará usurpando a função do Direito Penal?'
  },
  {
    id: 'CIVIL-08',
    category: 'Direito Civil',
    question: 'A teoria do desvio produtivo do consumidor deve ensejar reparação autônoma por dano moral?',
    complexity: 'Intermediário',
    keywords: ['desvio produtivo', 'tempo do consumidor', 'Marcos Dessaune', 'dano existencial'],
    context: 'A perda forçada do tempo vital do cidadão tentando resolver problemas simples de produtos defeituosos ou serviços inoperantes em "call centers" abusivos.',
    investigationPaths: [
      'A tese pioneira de Marcos Dessaune acolhida pelo Superior Tribunal de Justiça',
      'A quantificação pecuniária do tempo útil de vida como bem existencial juridicamente tutelado',
      'A distinção entre o mero dissabor do cotidiano e o abalo psíquico por desperdício de tempo'
    ],
    counterpoint: 'Transformar qualquer espera frustrante no telefone em dano moral indenizável não banalizará de vez a responsabilidade civil?'
  },
  {
    id: 'CIVIL-09',
    category: 'Direito Civil',
    question: 'Animais de estimação devem ser considerados sujeitos de direito dotados de senciência ou permanecem como coisas?',
    complexity: 'Intermediário',
    keywords: ['direitos dos animais', 'senciência animal', 'guarda de pet', 'reforma do Código Civil'],
    context: 'A crescente judicialização de divórcios envolvendo guarda e pensão alimentícia de pets e projetos legislativos para alterar a natureza jurídica de coisas para seres sencientes.',
    investigationPaths: [
      'A classificação civil clássica de bens semoventes (art. 82 CC) e a jurisprudência inovadora do STJ',
      'A vedação constitucional à crueldade contra animais (art. 225, § 7º da CF)',
      'As experiências do direito civil francês e alemão reconhecendo animais como seres dotados de sensibilidade'
    ],
    counterpoint: 'Se animais passarem a ter direitos subjetivos formais, como manter a pecuária, o consumo de carne e os testes farmacológicos vitais para a saúde humana?'
  },
  {
    id: 'CIVIL-10',
    category: 'Direito Civil',
    question: 'A culpa deve ser totalmente abolida da dissolução do casamento e da partilha de bens?',
    complexity: 'Intermediário',
    keywords: ['divórcio direto', 'EC 66/2010', 'abandono de lar', 'deveres matrimoniais'],
    context: 'A promulgação da Emenda Constitucional 66/2010 que consagrou o divórcio potestativo e incondicionado, extinguindo a discussão de culpa pela quebra dos deveres conjugais.',
    investigationPaths: [
      'A superação da separação judicial prévia e da averiguação de adultério ou desamor em juízo',
      'A subsistência residual do abandono de lar como causa de usucapião familiar (art. 1.240-A CC)',
      'A possibilidade de indenização civil por danos morais em casos de infidelidade humilhante ou violência psicológica'
    ],
    counterpoint: 'Quem trai deliberadamente e expõe o cônjuge à humilhação pública e doenças não deveria responder pelos prejuízos morais causados?'
  },
  {
    id: 'CIVIL-11',
    category: 'Direito Civil',
    question: 'A teoria da perda de uma chance exige certeza da vitória ou mera probabilidade séria e real?',
    complexity: 'Avançado',
    keywords: ['perda de uma chance', 'responsabilidade civil', 'erro médico', 'nexo de causalidade'],
    context: 'A aplicação da teoria francesa nas hipóteses em que a conduta omissiva de um advogado (perda de prazo) ou médico (diagnóstico tardio) retira do paciente/cliente a chance séria de cura ou vitória.',
    investigationPaths: [
      'A jurisprudência do STJ exigindo probabilidade que ultrapasse a barreira dos 50% de probabilidade estatística',
      'A liquidação do dano: o valor indenizado não é o bem perdido, mas a probabilidade da chance frustrada',
      'A fronteira entre o dano hipotético/eventual (não indenizável) e a perda da chance real'
    ],
    counterpoint: 'Se a vitória da ação ou a cura da doença jamais foram certas, condenar alguém a pagar por uma mera expectativa não é indenizar o incerto?'
  },
  {
    id: 'CIVIL-12',
    category: 'Direito Civil',
    question: 'A cláusula de não concorrência em contratos de compra e venda mercantil protege o fundo de comércio ou viola a livre iniciativa?',
    complexity: 'Intermediário',
    keywords: ['trespasse', 'não concorrência', 'artigo 1.147 CC', 'livre iniciativa'],
    context: 'A restrição imposta ao vendedor de um estabelecimento comercial que o proíbe de restabelecer o mesmo negócio na mesma praça por prazo determinado.',
    investigationPaths: [
      'O art. 1.147 do Código Civil e o prazo legal supletivo de cinco anos',
      'Os limites temporais, espaciais e materiais para a validade da cláusula de não concorrência',
      'A jurisprudência do CADE e os efeitos anticoncorrenciais de restrições desmedidas'
    ],
    counterpoint: 'Quem vende uma padaria renomada por milhões e abre outra idêntica na esquina seguinte não está praticando concorrência desleal e má-fé flagrante?'
  },
  {
    id: 'CIVIL-13',
    category: 'Direito Civil',
    question: 'A alteração de prenome e gênero no registro civil de pessoas transgênero sem cirurgia ou laudo médico preserva a segurança registral?',
    complexity: 'Intermediário',
    keywords: ['identidade de gênero', 'registro civil', 'ADI 4275', 'autonomia da vontade'],
    context: 'A histórica decisão do STF na ADI 4275 autorizando a retificação de nome e sexo diretamente em cartório de Registro Civil das Pessoas Naturais por autodeclaração.',
    investigationPaths: [
      'O Provimento 73/2018 do CNJ que regulamentou o procedimento administrativo extrajudicial',
      'O princípio da dignidade da pessoa humana e o direito à autoidentificação existencial',
      'A manutenção de certidões arquivadas em cartório para prevenir fraudes contra terceiros ou credores'
    ],
    counterpoint: 'Sem a exigência de laudos multidisciplinares ou intervenções, a segurança jurídica dos registros públicos não ficaria vulnerável a fraudes cadastrais?'
  },
  {
    id: 'CIVIL-14',
    category: 'Direito Civil',
    question: 'A multiparentalidade biológica e socioafetiva concomitante gera enriquecimento patrimonial injustificado dos filhos?',
    complexity: 'Intermediário',
    keywords: ['multiparentalidade', 'parentesco socioafetivo', 'Tema 622 STF', 'dupla herança'],
    context: 'A tese de repercussão geral fixada no Tema 622 pelo STF reconhecendo a paternidade socioafetiva sem prejuízo do reconhecimento simultâneo do vínculo biológico.',
    investigationPaths: [
      'Os efeitos jurídicos plenos: direito ao sobrenome, alimentos e direitos sucessórios de múltiplos pais e mães',
      'O princípio do melhor interesse da criança e da verdade afetiva como vínculo supremo',
      'A complexidade na partilha de heranças sucessivas entre famílias recompostas'
    ],
    counterpoint: 'Um filho ter direito a herdar simultaneamente de três ou quatro pais enquanto outros cidadãos herdam apenas de um gera uma desigualdade sucessória?'
  },
  {
    id: 'CIVIL-15',
    category: 'Direito Civil',
    question: 'A prescrição intercorrente na cobrança cível premia a ocultação de patrimônio pelo devedor desonesto?',
    complexity: 'Intermediário',
    keywords: ['prescrição intercorrente', 'artigo 921 CPC', 'ocultação de patrimônio', 'segurança jurídica'],
    context: 'A extinção do processo de execução quando o credor não localiza bens penhoráveis do devedor no prazo fixado pelo art. 921 do CPC/2015.',
    investigationPaths: [
      'O Incidente de Assunção de Competência (IAC 1) do STJ sobre os marcos da prescrição intercorrente',
      'A blindagem patrimonial sofisticada e o uso de "laranjas" para deixar o tempo transcorrer',
      'O princípio da segurança jurídica e a vedação à perpetuidade de dívidas cíveis eternas'
    ],
    counterpoint: 'Permitir que uma execução judicial se arraste por 40 anos atormentando uma família sem qualquer resultado prático faz sentido?'
  },

  // --- PROCESSO CIVIL (15) ---
  {
    id: 'PROC.CIV-01',
    category: 'Processo Civil',
    question: 'O sistema de precedentes vinculantes no CPC/2015 aproxima o Brasil do Common Law ou engessa a evolução do Direito?',
    complexity: 'Avançado',
    keywords: ['precedentes vinculantes', 'artigo 927 CPC', 'stare decisis', 'common law tropicalizado'],
    context: 'A imposição de eficácia obrigatória a teses firmadas em IRDR, IAC e recursos repetitivos, obrigando todos os juízes a seguir a interpretação das cortes superiores.',
    investigationPaths: [
      'A teoria do distinguishing e do overruling no CPC/2015',
      'A crítica doutrinária (Lenio Streck) contra a criação de um "positivismo jurisprudencial" sem o método autêntico do Common Law',
      'A necessidade imperiosa de conter a loteria judiciária em que casos idênticos recebem desfechos opostos'
    ],
    counterpoint: 'Se juízes de primeiro grau forem obrigados a apenas aplicar teses prontas de Brasília, quem oxigenará novas interpretações para realidades inéditas?'
  },
  {
    id: 'PROC.CIV-02',
    category: 'Processo Civil',
    question: 'As medidas executivas atípicas (apreensão de CNH e passaporte) violam direitos fundamentais do devedor?',
    complexity: 'Avançado',
    keywords: ['medidas coercitivas atípicas', 'artigo 139 IV CPC', 'apreensão de CNH', 'ADI 5941'],
    context: 'A utilização do art. 139, IV do CPC para suspender carteira de habilitação e reter passaporte como mecanismo de pressão psicológica para forçar o pagamento de dívidas.',
    investigationPaths: [
      'O julgamento histórico da ADI 5941 pelo STF validando as medidas desde que respeitada a proporcionalidade',
      'O direito constitucional de ir e vir (art. 5º, XV, CF) e o princípio da dignidade da pessoa humana',
      'A eficácia prática contra devedores fraudulentos que ostentam viagens luxuosas no Instagram mas alegam falência'
    ],
    counterpoint: 'Tirar o passaporte ou a CNH de um cidadão por dívida financeira não é ressuscitar a coerção pessoal física repudiada desde o Império Romano?'
  },
  {
    id: 'PROC.CIV-03',
    category: 'Processo Civil',
    question: 'A gratuidade de justiça ampla incentiva a litigância predatória e o congestionamento dos tribunais?',
    complexity: 'Intermediário',
    keywords: ['gratuidade de justiça', 'acesso à justiça', 'litigância predatória', 'artigo 98 CPC'],
    context: 'A concessão rotineira de isenção de custas com base em mera declaração de pobreza, eliminando o risco financeiro de ajuizar ações aventureiras em massa.',
    investigationPaths: [
      'A garantia constitucional da assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos (art. 5º, LXXIV)',
      'A proliferação de ações predatórias patrocinadas por bancas especializadas contra bancos e concessionárias',
      'O controle judicial rigoroso de renda exigido recentemente por Corregedorias de Justiça'
    ],
    counterpoint: 'Se o acesso for dificultado com custas pesadas prévias, milhões de cidadãos pobres perderão qualquer esperança de cobrar seus direitos mais básicos.'
  },
  {
    id: 'PROC.CIV-04',
    category: 'Processo Civil',
    question: 'O princípio da cooperação processual é uma utopia ingênua diante da combatividade natural do litígio?',
    complexity: 'Avançado',
    keywords: ['princípio da cooperação', 'artigo 6º CPC', 'contraditório participativo', 'comunidade de trabalho'],
    context: 'O art. 6º do CPC, que exige que todos os sujeitos do processo cooperem entre si para que se obtenha decisão de mérito justa e efetiva em tempo razoável.',
    investigationPaths: [
      'A teoria do processo como comunidade de trabalho na doutrina de Fredie Didier Jr.',
      'A vedação de decisões surpresa (arts. 9º e 10 do CPC)',
      'A contradição intrínseca entre o dever ético de cooperação e o interesse da parte de vencer o adversário'
    ],
    counterpoint: 'Exigir que um advogado coopere para facilitar a produção de prova contrária ao seu próprio cliente não subverte a essência do mandato profissional?'
  },
  {
    id: 'PROC.CIV-05',
    category: 'Processo Civil',
    question: 'A fixação de honorários de sucumbência deve seguir estritamente as balizas percentuais do CPC mesmo em causas bilionárias?',
    complexity: 'Intermediário',
    keywords: ['honorários sucumbenciais', 'Tema 1076 STJ', 'apreciação equitativa', 'artigo 85 CPC'],
    context: 'O julgamento do Tema 1076 pelo STJ proibindo o uso da equidade para reduzir honorários em causas de valor elevado, garantindo de 10% a 20% aos advogados.',
    investigationPaths: [
      'A literalidade do art. 85, §§ 2º e 8º do CPC/2015 e a vitória histórica da OAB',
      'O impacto orçamentário sobre entes públicos e empresas condenados em causas de bilhões de reais',
      'A dignidade da advocacia e a proteção contra o aviltamento remuneratório judicial'
    ],
    counterpoint: 'Um advogado receber dezenas de milhões de reais em uma causa resolvida em petição padronizada de poucas páginas não configura enriquecimento sem causa?'
  },
  {
    id: 'PROC.CIV-06',
    category: 'Processo Civil',
    question: 'O agravo de instrumento tem cabimento restrito ao rol legal ou a teoria da taxatividade mitigada gerou insegurança?',
    complexity: 'Intermediário',
    keywords: ['agravo de instrumento', 'artigo 1.015 CPC', 'taxatividade mitigada', 'Tema 988 STJ'],
    context: 'A criação pelo STJ da tese de que o rol do art. 1.015 é de taxatividade mitigada quando demonstrada a urgência decorrente da inutilidade do julgamento na apelação.',
    investigationPaths: [
      'A tentativa fracassada do legislador do CPC/2015 de restringir os agravos para desafogar os tribunais',
      'O julgamento do Tema 988 do STJ e os critérios fluidos de "inutilidade da espera"',
      'O reaparecimento da enxurrada de recursos interlocutórios nos tribunais de segundo grau'
    ],
    counterpoint: 'Se o juiz indefere uma perícia indispensável que custará meses de trabalho inútil, esperar a apelação final não causaria um prejuízo financeiro colossal?'
  },
  {
    id: 'PROC.CIV-07',
    category: 'Processo Civil',
    question: 'A mediação e a conciliação prévias obrigatórias tornaram-se meras formalidades burocráticas inócuas?',
    complexity: 'Intermediário',
    keywords: ['audiência de mediação', 'artigo 334 CPC', 'resolução adequada de disputas', 'cultura da sentença'],
    context: 'A obrigatoriedade da audiência de conciliação do art. 334 do CPC, que frequentemente termina em poucos minutos com o carimbo "sem proposta de acordo".',
    investigationPaths: [
      'A política judiciária nacional de tratamento adequado dos conflitos (Resolução 125/2010 CNJ)',
      'O déficit crônico de mediadores capacitados e remunerados nos CEJUSCs',
      'O gasto inútil de meses de tramitação antes da contestação quando as partes já manifestaram desinteresse'
    ],
    counterpoint: 'Onde há mediadores profissionais e ambiente estruturado, acordos evitam anos de desgaste emocional e custos com perícias para as partes.'
  },
  {
    id: 'PROC.CIV-08',
    category: 'Processo Civil',
    question: 'A tutela provisória de urgência de natureza antecipada pode ser deferida com risco real de irreversibilidade fática?',
    complexity: 'Avançado',
    keywords: ['tutela de urgência', 'perigo de irreversibilidade', 'artigo 300 § 3º', 'direito à saúde'],
    context: 'A colisão entre a vedação do art. 300, § 3º do CPC (não conceder tutela irreversível) e a iminência de morte do paciente que requer cirurgia emergencial paga pelo réu.',
    investigationPaths: [
      'A ponderação entre o patrimônio financeiro do réu e o direito à vida e saúde do autor',
      'A irreversibilidade recíproca: negar a tutela causa a morte irreversível do requerente',
      'A prestação de caução idônea versus a hipossuficiência absoluta da parte'
    ],
    counterpoint: 'Se uma empresa for obrigada por liminar a demolir uma construção ou transferir fundos ao exterior e ao final a ação for improcedente, como reverter o dano?'
  },
  {
    id: 'PROC.CIV-09',
    category: 'Processo Civil',
    question: 'A distribuição dinâmica do ônus da prova fragiliza a previsibilidade das regras do jogo processual?',
    complexity: 'Intermediário',
    keywords: ['ônus da prova', 'distribuição dinâmica', 'artigo 373 § 1º', 'prova diabólica'],
    context: 'A prerrogativa conferida ao magistrado de transferir o encargo probatório para quem tiver maior facilidade técnica ou econômica de produzi-la.',
    investigationPaths: [
      'A superação da regra estática tradicional (autor prova o fato constitutivo, réu prova o fato extintivo/impeditivo)',
      'A vedação expressa à atribuição de encargo que torne a prova impossível ou excessivamente difícil (prova diabólica reversa)',
      'A exigência de saneamento prévio e oportunidade de manifestação antes de decidir'
    ],
    counterpoint: 'Como um consumidor comum provaria uma falha interna secreta no código de um banco sem a inversão judicial do ônus da prova?'
  },
  {
    id: 'PROC.CIV-10',
    category: 'Processo Civil',
    question: 'A arbitragem em contratos envolvendo a Administração Pública privatiza indevidamente a jurisdição do Estado?',
    complexity: 'Avançado',
    keywords: ['arbitragem pública', 'Lei 13.129/2015', 'direitos patrimoniais disponíveis', 'publicidade'],
    context: 'A inserção rotineira de cláusulas compromissórias em concessões e PPPs para afastar litígios bilionários do Poder Judiciário e entregá-los a árbitros privados.',
    investigationPaths: [
      'A compatibilidade do princípio da indisponibilidade do interesse público com direitos patrimoniais disponíveis',
      'O princípio da publicidade obrigatória da arbitragem pública em contraste com o sigilo da arbitragem comercial',
      'A especialização técnica e a rapidez da corte arbitral versus o custo astronômico dos honorários para o erário'
    ],
    counterpoint: 'Investidores internacionais colocariam centenas de bilhões de dólares em portos e energia no Brasil sabendo que litígios levariam 20 anos na Justiça comum?'
  },
  {
    id: 'PROC.CIV-11',
    category: 'Processo Civil',
    question: 'A ação rescisória por violação manifesta a norma jurídica tornou-se um recurso de terceiro grau disfarçado?',
    complexity: 'Avançado',
    keywords: ['ação rescisória', 'coisa julgada', 'artigo 966 V CPC', 'Súmula 343 STF'],
    context: 'A utilização recorrente da rescisória para derrubar decisões transitadas em julgado quando a jurisprudência posterior dos tribunais superiores se altera.',
    investigationPaths: [
      'A Súmula 343 do STF: não cabe rescisória se a decisão se baseou em texto legal de interpretação controvertida à época',
      'O julgamento do Tema 881 pelo STF sobre a cessação automática de coisa julgada em matéria tributária de trato continuado',
      'O postulado constitucional da segurança jurídica e a imutabilidade das sentenças definitivas'
    ],
    counterpoint: 'Permitir que uma decisão manifestamente errônea e contrária à Constituição permaneça imutável para sempre não consagra a injustiça formal?'
  },
  {
    id: 'PROC.CIV-12',
    category: 'Processo Civil',
    question: 'O incidente de desconsideração da personalidade jurídica no CPC/2015 protegeu os sócios ou burocratizou a penhora?',
    complexity: 'Intermediário',
    keywords: ['IDPJ', 'artigos 133 a 137 CPC', 'fraude patrimonial', 'teoria maior e menor'],
    context: 'A criação de um procedimento com contraditório prévio para atingir o patrimônio pessoal dos sócios antes da efetivação de bloqueios judiciais.',
    investigationPaths: [
      'A diferença entre a teoria maior (art. 50 CC, desvio de finalidade/confusão patrimonial) e a menor (art. 28 CDC, mero inadimplemento)',
      'O risco real de o sócio esvaziar contas e transferir imóveis nos 15 dias de prazo para resposta do IDPJ',
      'O cabimento de arresto cautelar prévio para salvaguardar a eficácia da futura penhora'
    ],
    counterpoint: 'Bloquear instantaneamente o dinheiro da aposentadoria de um sócio minoritário sem que ele sequer soubesse da dívida não violava a ampla defesa?'
  },
  {
    id: 'PROC.CIV-13',
    category: 'Processo Civil',
    question: 'A estabilização da tutela antecipada antecedente compromete a busca pela verdade material ao dispensar a petição inicial completa?',
    complexity: 'Avançado',
    keywords: ['estabilização da tutela', 'artigo 304 CPC', 'coisa julgada material', 'inércia do réu'],
    context: 'A regra inovadora do art. 304 do CPC que encerra o processo se o réu não recorrer da decisão liminar, mantendo os efeitos da tutela sem produzir coisa julgada.',
    investigationPaths: [
      'A economia processual e a satisfação do litígio sem a necessidade de dilação probatória cara e demorada',
      'O prazo decadencial de dois anos para ajuizamento de ação revisional para reformar a decisão estabilizada',
      'A interpretação das formas de impugnação do réu: basta contestar ou é indispensável interpor agravo de instrumento?'
    ],
    counterpoint: 'Se nenhuma das partes tem interesse em prolongar o processo e gastar mais dinheiro, por que o Judiciário deveria forçar a continuação do litígio?'
  },
  {
    id: 'PROC.CIV-14',
    category: 'Processo Civil',
    question: 'A penhora sobre percentual de salário para dívidas não alimentares fere a proteção da subsistência digna?',
    complexity: 'Intermediário',
    keywords: ['impenhorabilidade de salário', 'artigo 833 IV CPC', 'Corte Especial STJ', 'mínimo existencial'],
    context: 'A flexibilização jurisprudencial da Corte Especial do STJ autorizando a penhora de até 30% da remuneração de devedores comuns desde que preservada quantia digna.',
    investigationPaths: [
      'A literalidade protetiva do art. 833, IV do CPC e a ressalva restrita a prestações alimentícias',
      'A realidade de executados com salários vultosos que não pagam credores escudados na impenhorabilidade absoluta',
      'O perigo de fixação de margens de penhora que empurram famílias de renda média para a insolvência alimentar'
    ],
    counterpoint: 'Um executado que ganha R$ 40 mil por mês pode se recusar a pagar uma dívida legítima alegando que seu salário inteiro é impenhorável?'
  },
  {
    id: 'PROC.CIV-15',
    category: 'Processo Civil',
    question: 'O julgamento em ambiente virtual colegiado sem debate oral ao vivo enfraquece a qualidade da deliberação judicial?',
    complexity: 'Intermediário',
    keywords: ['plenário virtual', 'sustentação oral', 'colegialidade autêntica', 'julgamento assíncrono'],
    context: 'A transferência da maior parte dos julgamentos do STF, STJ e Tribunais de Justiça para plataformas virtuais assíncronas onde ministros apenas depositam votos em texto.',
    investigationPaths: [
      'A perda da dialética do debate em tempo real e da capacidade de persuasão da sustentação oral dos advogados',
      'O aumento impressionante da produtividade numérica das cortes para conter acervos de milhões de processos',
      'O risco de votos padronizados elaborados exclusivamente por assessores sem a devida reflexão dos juízes'
    ],
    counterpoint: 'Sem o plenário virtual, o STF julgaria apenas 300 casos por ano em sessões presenciais e deixaria 50 mil recursos acumulando poeira por décadas.'
  },

  // --- DIREITO DO TRABALHO (15) ---
  {
    id: 'TRAB-01',
    category: 'Direito do Trabalho',
    question: 'O negociado sobre o legislado consagrado na Reforma Trabalhista fortalece o sindicalismo autônomo ou rebaixa direitos mínimos?',
    complexity: 'Avançado',
    keywords: ['negociado sobre legislado', 'artigo 611-A CLT', 'Tema 1046 STF', 'autonomia coletiva'],
    context: 'A tese de repercussão geral fixada pelo STF no Tema 1046 declarando a constitucionalidade de acordos coletivos que reduzem direitos não assegurados constitucionalmente.',
    investigationPaths: [
      'O art. 7º, XXVI da CF que reconhece as convenções e acordos coletivos de trabalho',
      'O rol de direitos absolutamente indisponíveis listado no art. 611-B da CLT',
      'A fraqueza estrutural de sindicatos após o fim do imposto sindical obrigatório'
    ],
    counterpoint: 'Trabalhadores e empresários que conhecem a realidade de sua fábrica específica não têm mais legitimidade para negociar escalas do que burocratas de Brasília?'
  },
  {
    id: 'TRAB-02',
    category: 'Direito do Trabalho',
    question: 'Os motoristas e entregadores de plataformas de aplicativo devem ter vínculo de emprego reconhecido pela CLT?',
    complexity: 'Avançado',
    keywords: ['uberização', 'trabalho em plataformas', 'subordinação algorítmica', 'Tema 1075 STF'],
    context: 'O confronto jurisprudencial agudo entre o Tribunal Superior do Trabalho (que tende a reconhecer subordinação por algoritmo) e o STF (que cassa as decisões reiteradamente).',
    investigationPaths: [
      'A teoria da subordinação algorítmica e por dependência econômica',
      'A liberdade do trabalhador de definir horários, recusar corridas e trabalhar para múltiplas plataformas',
      'A proposta de criação de uma categoria intermediária com previdência social e remuneração mínima por hora logada'
    ],
    counterpoint: 'Enquadrar aplicativos na CLT engessada não inviabilizaria o modelo de negócios e destruiria a fonte de sustento imediata de milhões de desempregados?'
  },
  {
    id: 'TRAB-03',
    category: 'Direito do Trabalho',
    question: 'A tarifação do dano moral introduzida na CLT viola o princípio constitucional da dignidade da pessoa humana?',
    complexity: 'Avançado',
    keywords: ['tarifação do dano moral', 'artigo 223-G CLT', 'ADI 6050', 'isonomia'],
    context: 'A fixação de limites máximos para indenizações por danos morais atrelados ao último salário do trabalhador vitimado por acidentes de trabalho.',
    investigationPaths: [
      'A decisão do STF na ADI 6050 fixando que os valores do art. 223-G são meros parâmetros orientadores e não tetos intransponíveis',
      'A aberração de que a morte de um diretor geral gere indenização milionária enquanto a de um servente de limpeza gere valor ínfimo pelo mesmo acidente',
      'A previsibilidade do passivo trabalhista para cálculo de risco empresarial'
    ],
    counterpoint: 'Sem balizas legais objetivas, as indenizações trabalhistas nos tribunais não virariam uma roleta de valores desmedidos sem qualquer critério?'
  },
  {
    id: 'TRAB-04',
    category: 'Direito do Trabalho',
    question: 'A cobrança de contribuição assistencial aos empregados não filiados a sindicatos ressuscita o imposto sindical?',
    complexity: 'Intermediário',
    keywords: ['contribuição assistencial', 'imposto sindical', 'Tema 935 STF', 'direito de oposição'],
    context: 'A guinada jurisprudencial do STF no Tema 935 permitindo a cobrança de contribuição de todos os empregados beneficiados por acordo coletivo, garantido o direito de oposição.',
    investigationPaths: [
      'O fenômeno do "carona" (free rider): o não sócio usufrui de todos os reajustes conquistados pelo sindicato sem pagar nada',
      'As filas quilométricas e obstáculos práticos criados por sindicatos para dificultar o exercício do direito de oposição',
      'A asfixia financeira das entidades sindicais após a Reforma Trabalhista de 2017'
    ],
    counterpoint: 'Obrigar o trabalhador a perder um dia de trabalho para entregar carta de recusa escrita à mão em cartório não é forçar a cobrança contra sua vontade?'
  },
  {
    id: 'TRAB-05',
    category: 'Direito do Trabalho',
    question: 'O contrato de trabalho intermitente precarizou a vida do trabalhador ao transformar seu tempo de espera em desemprego disfarçado?',
    complexity: 'Intermediário',
    keywords: ['trabalho intermitente', 'artigo 452-A CLT', 'zero hour contract', 'segurança financeira'],
    context: 'A criação da modalidade contratual em que o empregado recebe apenas pelas horas de convocação efetiva, ficando à disposição sem garantia de renda mensal mínima.',
    investigationPaths: [
      'O julgamento das ADIs no STF sobre a constitucionalidade do trabalho intermitente',
      'A formalização de postos de trabalho no comércio e eventos versus a incapacidade de planejamento financeiro familiar',
      'A falta de cobertura previdenciária nos meses em que a remuneração não atinge o salário mínimo nacional'
    ],
    counterpoint: 'O modelo intermitente não é muito melhor do que a informalidade clandestina absoluta de quem fazia "bicos" sem nenhuma assinatura na carteira?'
  },
  {
    id: 'TRAB-06',
    category: 'Direito do Trabalho',
    question: 'A demissão sem justa causa arbitrária deve ser barrada pela Convenção 158 da OIT no ordenamento brasileiro?',
    complexity: 'Avançado',
    keywords: ['Convenção 158 OIT', 'demissão imotivada', 'artigo 7º I CF', 'ADC 39'],
    context: 'A discussão sobre a necessidade de motivação econômica, disciplinar ou técnica para dispensar empregados e a vigência da denúncia unilateral feita pelo Presidente em 1996.',
    investigationPaths: [
      'O julgamento histórico da ADC 39 e ADI 1625 pelo STF após mais de 25 anos de tramitação',
      'A proteção contra despedida arbitrária no art. 7º, I da CF mediante lei complementar até hoje não editada',
      'O impacto da rigidez demissional na contratação de novos empregados por empresas cautelosas'
    ],
    counterpoint: 'Impedir a empresa de demitir livremente um funcionário que não se adequa à equipe retiraria a flexibilidade de gestão indispensável para sobreviver a crises.'
  },
  {
    id: 'TRAB-07',
    category: 'Direito do Trabalho',
    question: 'A quitação ampla e irrestrita no Plano de Demissão Voluntária (PDV) negociado em acordo coletivo viola a irrenunciabilidade de direitos?',
    complexity: 'Intermediário',
    keywords: ['PDV', 'quitação geral', 'Tema 152 STF', 'irrenunciabilidade'],
    context: 'A validação pelo STF no Tema 152 da cláusula de quitação ampla de todas as parcelas do extinto contrato de trabalho quando prevista expressamente em acordo coletivo.',
    investigationPaths: [
      'O princípio da irrenunciabilidade dos direitos trabalhistas na fase de rescisão contratual',
      'A segurança jurídica para empresas que pagam indenizações vultosas de incentivo à saída',
      'A vulnerabilidade do trabalhador no momento da despedida versus a assistência sindical prestada'
    ],
    counterpoint: 'Qual empresa pagaria centenas de milhares de reais em um PDV se o trabalhador pudesse embolsar a bolada e processar a firma no dia seguinte?'
  },
  {
    id: 'TRAB-08',
    category: 'Direito do Trabalho',
    question: 'O monitoramento digital do empregado em teletrabalho (webcam e softwares espiões) viola a intimidade no domicílio?',
    complexity: 'Intermediário',
    keywords: ['teletrabalho', 'home office', 'vigilância eletrônica', 'poder diretivo'],
    context: 'O uso de rastreadores de teclado (keyloggers) e exigência de câmeras ligadas para vigiar o funcionário que labora na intimidade da sua residência.',
    investigationPaths: [
      'A regulamentação do teletrabalho nos arts. 75-A a 75-F da CLT',
      'A colisão entre o poder de fiscalização do empregador e o direito fundamental à privacidade e inviolabilidade do lar',
      'A transição da cobrança de jornada de trabalho para o controle estrito de metas e produtividade entregue'
    ],
    counterpoint: 'Se o patrão está pagando as horas trabalhadas, como ele pode certificar-se de que o empregado está produzindo sem medir sua atividade no computador?'
  },
  {
    id: 'TRAB-09',
    category: 'Direito do Trabalho',
    question: 'O direito à desconexão do trabalho deve ser positivado expressamente como um direito fundamental à saúde mental?',
    complexity: 'Intermediário',
    keywords: ['direito à desconexão', 'burnout', 'sobreaviso', 'mensagens fora do expediente'],
    context: 'A proliferação de ordens de serviço por grupos de WhatsApp e e-mails durante noites e fins de semana gerando epidemia de síndrome de burnout.',
    investigationPaths: [
      'A caracterização do tempo à disposição do empregador (art. 4º da CLT) e regime de sobreaviso por meios telemáticos',
      'O reconhecimento da síndrome de burnout como doença ocupacional pela OMS e jurisprudência trabalhista',
      'As legislações francesa e espanhola que proíbem empresas de contatar funcionários fora do horário'
    ],
    counterpoint: 'Em cargos de liderança ou em negócios que operam globalmente 24 horas, como proibir mensagens urgentes sem paralisar o atendimento a clientes?'
  },
  {
    id: 'TRAB-10',
    category: 'Direito do Trabalho',
    question: 'A ultratividade das normas coletivas de trabalho deve ser vedada ou preservada para proteger a massa laboral?',
    complexity: 'Avançado',
    keywords: ['ultratividade', 'Súmula 277 TST', 'ADPF 323', 'artigo 614 § 3º CLT'],
    context: 'A vedação da manutenção automática de cláusulas de acordos coletivos vencidos até a assinatura de novo pacto, declarada válida pelo STF na ADPF 323.',
    investigationPaths: [
      'O histórico da Súmula 277 do TST que assegurava a permanência dos direitos até nova convenção',
      'O art. 614, § 3º da CLT inserido pela Reforma de 2017 proibindo expressamente a ultratividade',
      'O vácuo jurídico e a perda repentina de benefícios sociais (como plano de saúde e auxílio-creche) no dia seguinte ao término da vigência'
    ],
    counterpoint: 'Se o acordo continuasse valendo indefinidamente, que incentivo o sindicato dos trabalhadores teria para sentar e negociar concessões com as empresas?'
  },
  {
    id: 'TRAB-11',
    category: 'Direito do Trabalho',
    question: 'A exigência de homologação judicial de acordo extrajudicial obriga o juiz a homologar os termos pactuados pelas partes?',
    complexity: 'Intermediário',
    keywords: ['jurisdição voluntária', 'acordo extrajudicial', 'Súmula 418 TST', 'artigo 855-B CLT'],
    context: 'O procedimento de homologação de acordo extrajudicial introduzido na CLT e a recusa de magistrados em chancelar renúncias excessivas de verbas rescisórias.',
    investigationPaths: [
      'A faculdade judicial inscrita na Súmula 418 do TST versus o princípio da intervenção mínima na autonomia da vontade',
      'O risco de conluio entre advogados para fraudar direitos rescisórios de trabalhadores coagidos',
      'A eficácia de coisa julgada material decorrente da sentença homologatória'
    ],
    counterpoint: 'Se as partes estavam assistidas por advogados diferentes e assinaram de livre e espontânea vontade, por que o juiz paternalista deveria vetar o acordo?'
  },
  {
    id: 'TRAB-12',
    category: 'Direito do Trabalho',
    question: 'A licença-maternidade estendida e a estabilidade da gestante desestimulam a contratação formal de mulheres pelo mercado?',
    complexity: 'Intermediário',
    keywords: ['estabilidade da gestante', 'licença-maternidade', 'discriminação de gênero', 'custo de contratação'],
    context: 'O debate econômico e sociológico sobre os custos suportados pelos empregadores e o reflexo estatístico na precarização ou desemprego de mulheres em idade reprodutiva.',
    investigationPaths: [
      'O art. 10, II, "b" do ADCT que veda a dispensa arbitrária da empregada gestante desde a confirmação da gravidez',
      'O custeio do salário-maternidade pela Previdência Social versus o custo indireto de reposição e treinamento da substituta',
      'A equiparação da licença-paternidade obrigatória como mecanismo fundamental de equalização das oportunidades de trabalho'
    ],
    counterpoint: 'Sem a estabilidade no emprego, mulheres grávidas seriam demitidas em massa assim que a barriga aparecesse, ficando desprovidas no momento mais vulnerável.'
  },
  {
    id: 'TRAB-13',
    category: 'Direito do Trabalho',
    question: 'A responsabilização solidária do tomador de serviços em terceirizações precariza a solvência de quem contrata de boa-fé?',
    complexity: 'Intermediário',
    keywords: ['terceirização', 'responsabilidade subsidiária', 'Súmula 331 TST', 'Tema 246 STF'],
    context: 'A extensão da responsabilidade patrimonial pelo inadimplemento de obrigações trabalhistas da empresa prestadora terceirizada.',
    investigationPaths: [
      'A tese de repercussão geral fixada no Tema 246 (ADC 16) sobre a ausência de responsabilidade automática da Administração Pública sem prova de culpa in vigilando',
      'A Lei 13.429/2017 e a Lei 13.467/2017 que autorizaram a terceirização da atividade-fim',
      'O dever de fiscalização mensal do recolhimento de FGTS e salários como ônus de quem contrata serviços'
    ],
    counterpoint: 'Quem usufruiu diretamente do suor e do trabalho do operário todos os dias não pode simplesmente lavar as mãos quando a terceirizada sumir do mapa.'
  },
  {
    id: 'TRAB-14',
    category: 'Direito do Trabalho',
    question: 'A equiparação salarial para funções idênticas deve desconsiderar a produtividade e a perfeição técnica individual?',
    complexity: 'Intermediário',
    keywords: ['equiparação salarial', 'artigo 461 CLT', 'perfeição técnica', 'paradigma'],
    context: 'As exigências do art. 461 da CLT que subordinam o mesmo salário a idêntica função, mesmo empregador, mesmo estabelecimento e diferença de tempo na função não superior a dois anos.',
    investigationPaths: [
      'A subjetividade inerente à aferição judicial de "maior perfeição técnica e produtividade"',
      'A Lei da Igualdade Salarial entre Mulheres e Homens (Lei 14.611/2023) e os relatórios de transparência',
      'O plano de cargos e salários registrado como barreira legal legítima à equiparação'
    ],
    counterpoint: 'Se um profissional produz o dobro com o dobro da precisão do seu colega, forçar salários rigorosamente iguais não destrói o mérito e a produtividade?'
  },
  {
    id: 'TRAB-15',
    category: 'Direito do Trabalho',
    question: 'A substituição de trabalhadores por inteligência artificial exige regulação protecionista ou o mercado se reequilibra sozinho?',
    complexity: 'Avançado',
    keywords: ['automação', 'artigo 7º XXVII CF', 'inteligência artificial no trabalho', 'desemprego tecnológico'],
    context: 'A garantia constitucional do art. 7º, XXVII de "proteção em face da automação, na forma da lei", dispositivo que permaneceu sem regulamentação específica.',
    investigationPaths: [
      'O desemprego estrutural provocado por ferramentas de automação cognitiva e IA generativa em áreas jurídicas e de atendimento',
      'A criação de impostos sobre robôs e fundos de requalificação profissional obrigatórios pagos por empresas automatizadas',
      'A teoria do economista Joseph Schumpeter sobre a "destruição criadora" gerando empregos em novas indústrias de alta produtividade'
    ],
    counterpoint: 'Tentar frear artificialmente a automação não deixará o país tecnologicamente atrasado e incompetitivo perante as potências globais?'
  }
];
