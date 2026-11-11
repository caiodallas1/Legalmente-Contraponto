import { Category } from '../types';

export const ALL_CATEGORIES: Category[] = [
  'Direito Constitucional',
  'Direito Penal',
  'Processo Penal',
  'Direito Civil',
  'Processo Civil',
  'Direito Administrativo',
  'Direito Tributário',
  'Direito do Trabalho',
  'Direitos Humanos',
  'Direito Internacional',
  'Teoria do Estado',
  'Filosofia do Direito',
  'Sociologia Jurídica',
  'Ciência Política',
  'Democracia e Instituições',
  'Economia e Direito',
  'História do Direito',
  'Tecnologia e Direito',
  'Criminologia',
  'Direito Eleitoral',
  'Questões Contemporâneas',
];

export interface CategoryMeta {
  name: Category;
  description: string;
  shortCode: string;
}

export const CATEGORY_DETAILS: Record<Category, CategoryMeta> = {
  'Direito Constitucional': {
    name: 'Direito Constitucional',
    description: 'Tensões entre supremacia constitucional, direitos fundamentais e separação de poderes.',
    shortCode: 'CONST',
  },
  'Direito Penal': {
    name: 'Direito Penal',
    description: 'Dilemas da intervenção punitiva, tipicidade estrita, bem jurídico e proporcionalidade das penas.',
    shortCode: 'PENAL',
  },
  'Processo Penal': {
    name: 'Processo Penal',
    description: 'O equilíbrio frágil entre garantismo processual, verdade probatória e eficiência persecutória.',
    shortCode: 'PROC.PEN',
  },
  'Direito Civil': {
    name: 'Direito Civil',
    description: 'Autonomia da vontade, função social dos contratos, propriedade e novas formas familiares.',
    shortCode: 'CIVIL',
  },
  'Processo Civil': {
    name: 'Processo Civil',
    description: 'Acesso à justiça, precedentes vinculantes, celeridade processual e cooperação entre as partes.',
    shortCode: 'PROC.CIV',
  },
  'Direito Administrativo': {
    name: 'Direito Administrativo',
    description: 'Limites da discricionariedade estatal, consensualidade pública e controle de legalidade.',
    shortCode: 'ADM',
  },
  'Direito Tributário': {
    name: 'Direito Tributário',
    description: 'Capacidade contributiva, justiça fiscal, extrafiscalidade e o poder de tributar.',
    shortCode: 'TRIB',
  },
  'Direito do Trabalho': {
    name: 'Direito do Trabalho',
    description: 'Proteção do hipossuficiente, negociação coletiva, pejotização e o futuro do trabalho.',
    shortCode: 'TRAB',
  },
  'Direitos Humanos': {
    name: 'Direitos Humanos',
    description: 'Universalismo versus relativismo cultural, dignidade da pessoa humana e vulnerabilidades.',
    shortCode: 'DDHH',
  },
  'Direito Internacional': {
    name: 'Direito Internacional',
    description: 'Soberania estatal em xeque, jurisdição transnacional e governança global.',
    shortCode: 'INTL',
  },
  'Teoria do Estado': {
    name: 'Teoria do Estado',
    description: 'Origem, legitimidade e limites do poder soberano, bem como a crise do Estado moderno.',
    shortCode: 'ESTADO',
  },
  'Filosofia do Direito': {
    name: 'Filosofia do Direito',
    description: 'Positivismo, pós-positivismo, teorias da justiça e a relação incontornável entre moral e direito.',
    shortCode: 'FILO',
  },
  'Sociologia Jurídica': {
    name: 'Sociologia Jurídica',
    description: 'Eficácia social das normas, o direito vivido, desigualdade social e pluralismo jurídico.',
    shortCode: 'SOCIO',
  },
  'Ciência Política': {
    name: 'Ciência Política',
    description: 'Relações de poder, representatividade eleitoral, judicialização e dinâmica partidária.',
    shortCode: 'POLIT',
  },
  'Democracia e Instituições': {
    name: 'Democracia e Instituições',
    description: 'Resiliência democrática, freios e contrapesos e os perigos do autoritarismo eleitoral.',
    shortCode: 'DEMOC',
  },
  'Economia e Direito': {
    name: 'Economia e Direito',
    description: 'Análise econômica do direito, eficiência alocativa, teoria dos jogos e incentivos regulatórios.',
    shortCode: 'ECON',
  },
  'História do Direito': {
    name: 'História do Direito',
    description: 'A evolução histórica das instituições jurídicas e a genealogia do pensamento normativo.',
    shortCode: 'HIST',
  },
  'Tecnologia e Direito': {
    name: 'Tecnologia e Direito',
    description: 'Inteligência artificial, proteção de dados, algoritmos opacos e neutralidade da rede.',
    shortCode: 'TECH',
  },
  'Criminologia': {
    name: 'Criminologia',
    description: 'Criminologia crítica, encarceramento em massa, seletividade punitiva e etiquetamento.',
    shortCode: 'CRIM',
  },
  'Direito Eleitoral': {
    name: 'Direito Eleitoral',
    description: 'Paridade de armas no pleito, desinformação política, financiamento de campanha e soberania popular.',
    shortCode: 'ELEIT',
  },
  'Questões Contemporâneas': {
    name: 'Questões Contemporâneas',
    description: 'Litigância climática, bioética, justiça reprodutiva e os dilemas urgentes do século XXI.',
    shortCode: 'CONTEMP',
  },
};
