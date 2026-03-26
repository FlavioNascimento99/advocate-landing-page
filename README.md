# Advocate - Landing Page Moderna

Uma aplicação web moderna construída com React, TypeScript e Tailwind CSS. Website institucional com foco em educação, autoridade e conversão leve, inspirado em layouts editoriais minimalistas.

## 🎨 Características

- **Design Editorial Moderno**: Layout limpo, sofisticado com muito espaçamento
- **Tipografia Elegante**: Playfair Display para headers, Inter para corpo
- **Cores Suaves**: Paleta neutra (cinza, bege, rosé)
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Responsivo**: Mobile-first, totalmente adaptável
- **TypeScript**: Código type-safe
- **Componentes Reutilizáveis**: Arquitetura limpa e escalável

## 📦 Seções

1. **Navbar** - Navegação fixa com menu responsivo
2. **Hero** - Headline principal com CTA e imagem
3. **Stats** - 4 cards com números e estatísticas
4. **Pillars** - 3 colunas com pilares de valor
5. **Resources** - Grid de 6 recursos/conteúdos
6. **CTA** - Chamada à ação final
7. **Footer** - Links e informações institucionais

## 🚀 Instalação

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repo>
cd advocate-landing-page
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

O projeto abrirá automaticamente em `http://localhost:3000`

## 🏗️ Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados estarão em `dist/`

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatsSection.tsx
│   ├── Pillars.tsx
│   ├── Resources.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── index.ts
├── data/
│   └── siteData.ts     # Dados mockados
├── App.tsx             # Componente principal
├── main.tsx            # Entrada da aplicação
└── index.css           # Estilos globais e Tailwind

Configuration files:
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## 🎨 Customização

### Alterar cores
Modifique o `tailwind.config.js`:
```javascript
colors: {
  'cream': '#FEFBF8',
  'rose-soft': '#F5E6E3',
  'taupe': '#9B8B84',
  'charcoal': '#2B2B2B',
}
```

### Alterar conteúdo
Edite o arquivo `src/data/siteData.ts` com seus textos e dados

### Adicionar novos componentes
Crie um novo arquivo em `src/components/` e exporte pelo `index.ts`

## 📚 Dependências Principais

- **React 18**: Framework UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animações
- **Lucide React**: Ícones minimalistas

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build para produção
- `npm run preview` - Visualiza build localmente
- `npm run lint` - Verifica erros de código

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Boas Práticas

✅ Código TypeScript limpo e type-safe
✅ Componentes desacoplados e reutilizáveis
✅ Animações fluidas com Framer Motion
✅ Acessibilidade semântica
✅ Performance otimizada
✅ Mobile-first approach

## 📖 Documentação

Para mais informações sobre as tecnologias utilizadas:
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 📄 Licença

MIT License - Veja LICENSE para detalhes

## 🤝 Contribuições

Contribuições são bem-vindas! Crie uma issue primeiro para discussão.

---

**Desenvolvido com ❤️ para educação e transformação digital**
