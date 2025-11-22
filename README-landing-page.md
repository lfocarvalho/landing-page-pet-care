# Landing page do PetCareApp

Site estático, independente do backend Django, para divulgação do projeto.

## Estrutura

- `index.html` – página principal com seções (Hero, Recursos, Como funciona, Screenshots, FAQ)
- `assets/css/style.css` – estilos com suporte a tema claro/escuro
- `assets/js/main.js` – navegação mobile, scroll suave e toggle de tema

## Como usar

Opção 1 (abrir direto):
- Abra o arquivo `index.html` no navegador.

Opção 2 (servidor local simples):
- Com Python instalado, rode na pasta `landing-page`:

```bash
python3 -m http.server 8080
```

Depois, acesse: http://localhost:8080

## Personalização

- Cores e espaçamentos: edite variáveis CSS em `assets/css/style.css`
- Textos e seções: edite `index.html`
- Imagens de telas: substitua os placeholders da seção “Screenshots” por imagens reais em `assets/img/` e atualize o HTML

## Observações

- Esta landing é 100% estática e pode ser hospedada em ambientes como GitHub Pages, Netlify ou Vercel.
- Links para o repositório: configurados no botão “Ver repositório” no topo e no rodapé.
