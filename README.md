# 🐼 Beni Games

Uma aplicação web educativa com jogos interativos para aprender Português e Inglês de forma divertida!

## 📚 Disciplinas Disponíveis

### 📖 Português
- **Nomes Próprios e Coletivos** - Aprende sobre nomes próprios e nomes comuns coletivos
- **Conectores** - Completa frases com os conectores de discurso corretos
- **Tipos de Frases** - Identifica frases exclamativas, interrogativas, declarativas e imperativas

### 🌍 Inglês
- **Present Continuous** - Aprende o Present Continuous
- **Present Simple** - Aprende o Present Simple com do/does/don't/doesn't
- **Present Simple - To Be** - Aprende o verbo 'to be' (am/is/are)
- **Present Simple - Have Got** - Aprende 'have got' e 'has got'
- **Adverbs** - Aprende sobre advérbios de frequência (always, sometimes, never, usually, everyday)
- **Numbers 1-100** - Aprende números de 1 a 100 em inglês (número para palavra e palavra para número)
- **The House** - Aprende vocabulário sobre divisões da casa em inglês britânico (bedroom, kitchen, bathroom, living room, garden, garage, flat, balcony, study)
- **Daily Routines** - Aprende vocabulário sobre rotinas diárias em inglês britânico (wake up, get dressed, have a shower, catch the bus, do homework, have breakfast/lunch/dinner, brush teeth/hair, tidy room, make bed, listen to music)

## 🎮 Como Jogar

1. Abre o ficheiro `index.html` no teu navegador
2. Escreve o teu nome e guarda
3. Escolhe uma disciplina (Português ou Inglês)
4. Seleciona um jogo
5. Responde às perguntas e diverte-te a aprender!
6. Ao terminar, vê o teu ranking e pontuação

## 🏆 Funcionalidades

### Sistema de Jogo
- Sistema de pontuação em tempo real
- Ranking local com top 10 pontuações
- Feedback imediato nas respostas (correto/incorreto)
- Perguntas aleatórias a cada jogo
- 25 perguntas por jogo (exceto Nomes que tem 10)

### Interface e Design
- Interface colorida e divertida com gradientes
- Design responsivo para desktop, tablet e mobile
- Animações suaves e transições
- Modal de confirmação ao sair do exercício (evita perda acidental de progresso)
- Botões inteligentes que se adaptam ao contexto:
  - Durante o jogo: apenas botão "Voltar"
  - Entre perguntas: "Próxima Pergunta" e "Voltar" lado a lado
  - Fim do jogo: "Jogar Novamente" e "Voltar" lado a lado

### Personalização
- Guarda o teu nome para personalização
- Mensagens personalizadas com o teu nome
- Suporte completo para Português e Inglês

### Ranking e Pontuações
- Top 10 pontuações guardadas por jogo
- Percentagem de acertos calculada automaticamente
- Data e hora de cada pontuação
- Visualização de ranking em modal elegante

## 📁 Estrutura do Projeto

### Páginas Principais
- `index.html` - Página principal com seleção de disciplinas
- `portugues.html` - Menu de jogos de Português
- `ingles.html` - Menu de jogos de Inglês

### Exercícios de Português
- `nomes.html` / `script.js` - Nomes Próprios e Coletivos
- `conectores.html` / `conectores.js` - Conectores
- `tipos-frases.html` / `tipos-frases.js` - Tipos de Frases

### Exercícios de Inglês
- `present-continuous.html` / `present-continuous.js` - Present Continuous
- `present-simple.html` / `present-simple.js` - Present Simple
- `present-simple-to-be.html` / `present-simple-to-be.js` - To Be
- `present-simple-have-got.html` / `present-simple-have-got.js` - Have Got
- `adverbs.html` / `adverbs.js` - Adverbs
- `numbers.html` / `numbers.js` - Numbers 1-100
- `rooms.html` / `rooms.js` - The House (Divisões da Casa)
- `daily-routines.html` / `daily-routines.js` - Daily Routines (Rotinas Diárias)

### Scripts de Menu
- `disciplinas.js` - Lógica do menu principal
- `menu.js` - Lógica do menu de Português
- `menu-ingles.js` - Lógica do menu de Inglês

### Estilos
- `style.css` - Estilos globais da aplicação

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com gradientes, flexbox, grid e animações
- **JavaScript (Vanilla)** - Lógica do jogo sem dependências
- **LocalStorage** - Armazenamento local de pontuações e nome do jogador

## 🎨 Características de Design

- **Cores e Gradientes**: Interface vibrante com gradientes coloridos
- **Responsividade**: Adapta-se a diferentes tamanhos de ecrã
- **Acessibilidade**: Texto claro e contrastes adequados
- **UX Intuitiva**: Navegação simples e feedback visual claro

## 📝 Notas Importantes

- Todas as pontuações são guardadas localmente no navegador (LocalStorage)
- Não é necessária instalação - basta abrir o ficheiro HTML no navegador
- Funciona offline após o primeiro carregamento
- Os dados são específicos do navegador e dispositivo
- Modal de confirmação protege contra saída acidental do exercício
- Suporte completo para Português (pt-PT) e Inglês (en)

## 🔄 Atualizações Recentes

- ✅ Adicionado exercício Numbers 1-100
- ✅ Adicionado exercício The House (vocabulário sobre divisões da casa)
- ✅ Adicionado exercício Daily Routines (vocabulário sobre rotinas diárias)
- ✅ Todos os exercícios de inglês utilizam British English
- ✅ Modal de confirmação ao sair do exercício
- ✅ Melhorias no layout responsivo
- ✅ Sistema de ranking melhorado com modal
- ✅ Botões adaptativos (lado a lado quando apropriado)
- ✅ Suporte completo bilingue (PT/EN)
- ✅ Design consistente em todos os exercícios
- ✅ Perguntas únicas e variadas em todos os exercícios

