## Página de usuários Eleven Dragons Teste Técnico

<p align="center">
  <img src="https://user-images.githubusercontent.com/60658855/190881698-7d890ba8-15e4-422d-b6f3-b39ef94e1003.gif"/>
</p>

Bem vindo a minha versão do código solicitado para a vaga de Dev React na Eleven Dragons! Obrigado pela oportunidade, para desenvolver esse projeto
resolvi os requisitos solicitados seguindo as melhores práticas de código e acessibilidade. Além dos requisitos solicitados, foi adicionada a
função de editar usuários.

Para a estilização busquei as cores principais da empresa para seguir os padrões já adotados. Utilizando a biblioteca stitches podemos definir temas e com isso
padronizar nossos componentes.

Tive dificuldades de uso com a API nos primeiros dias de desafio e utilizando o fórum da API consegui que o desenvolvedor resolvesse os conflitos com a biblioteca
Axios, as requisições estão funcionando como deveriam agora. Em caso de não funcionamento ao rodar localmente peço que teste a versão hospedada na Vercel

## Requisitos: 

🗸 Uma página que lista os usuários retornados ao fazer um GET em
https://gorest.co.in/public/v2/users. Cada usuário deve conter nome, email e status
(ativo ou inativo). 

🗸 Deve ser possível buscar um usuário pelo nome e filtrar os usuários pelo status.

🗸 Uma página com um formulário para acrescentar um novo usuário (apenas no estado
da aplicação, sem chamada para um banco de dados). Os campos enviados devem
ser:

- Nome: entre 4 e 20 caracteres, podendo ser apenas caracteres alfanuméricos
e underscore.
- Email: deve ser um email válido, i.e., com a forma xxxx@yyyy.zzz
- Status: boolean. (mudado para enum dos tipos "active" e "inactive" para correspondência com a api)

🗸 Deve ser possível navegar de uma página para outra.

🗸 Responsividade.

## Requisitos bônus:

🗸 Edição de usuários.

## Visualização

Para ver o projeto você pode clonar este repositório:

```bash
npm run dev
# ou
yarn dev
```
Ou ver sua versão hospedada na Vercel:

[Eleven Dragons Users](https://eleven-dragons-code-challenge.vercel.app)

## Tecnologias utilizadas
- Next.js
- Typescript
- Axios
- Stitches.js
- Radix UI
- React-Hook-Form
- Zod para validação de formulários

## Referências

- [Vercel](https://vercel.com/docs)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Stitches.js](https://stitches.dev/docs/introduction)
- [Radix UI](https://www.radix-ui.com)
- [React-Hook-Form](https://react-hook-form.com/get-started)
- [Zod](https://github.com/colinhacks/zod)
