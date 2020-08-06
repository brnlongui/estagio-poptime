# estagio-poptime
desenvolvido por mim para o desafio técnico de estagio na empresa jera.

# utilizando o código fonte
### necessário ter instalado na maquina 
- Nodejs V12.14.1 (link junto ao do npm)
- Npm V6.13.4 (https://www.npmjs.com/get-npm)
- MongoDb Community Server (https://www.mongodb.com/download-center/community)
# para download e execução
#### na linha de comando digite
- git clone https://github.com/brnlongui/estagio-poptime
- cd estagio-poptime
- npm install
- para conectar o mongodb para testes de requisição digite: sudo service mongod start ou sudo systemctl start mongod
- npm run dev (necessário ter a porta 3000 livre ou trocar no projeto, idem com a porta 27017 para o MongoDB)
### informativo
Projeto ainda não finalizado, necessitando ainda de validação com jwt e o frontend.
## Criar conta (models e controllers )
- [x] - A conta deverá ter um perfil principal contendo: email, senha, nome e data de nascimento
- [x] - A aplicação não deve ter mais de uma conta  associada ao mesmo email
## Login da conta
- [ ] - Login será feito por: email e senha
- [ ] - Todas as áreas privadas só podem ser acessadas caso o usuário esteja autenticado (O acesso direto por URL não deve ser permitido, caso o usuário não esteja logado.)
## Login com rede social
- [ ] - Caso o usuário se cadastre com o facebook
- [ ] - O facebook_id deve ser único para cada usuário
- [ ] - As permissões fornecidas devem ser as necessário para a criação da conta.
## Criar Perfil (model)
- [ ] - O perfil deverá ter somente um nome
- [x] - O usuário pode ter no máximo 4 perfis
## Listar Perfil
- [ ] - Lista de todos os perfis associados ao usuário
- [ ] - Os conteúdos internos da aplicação serão definidos a partir de um perfil selecionado
## Lista de filmes sugeridos
- [x] - A lista personalizada depende dos filmes que o usuário adiciona na lista de filmes e filmes já assistidos
- [x] - O predominante da lista é as categorias dos filmes que estão na lista ou já foram assistidos (Não precisa ter inteligência, é uma busca por filmes das categorias que o perfil, mais assiste.)
## Busca de filmes
- [x] - Busca de filmes por termo
## Marcar filme como para assistir
- [x] - Filmes marcado como watchlist deve ser salvo no perfil do usuário
- [ ] - Os filmes no watchlist devem ser levados em consideração na sugestão de filmes
## Visualizar lista para assistir
- [ ] - Lista de filmes que foram marcados em determinado perfil
## Marcar como assistido
- [x] - Somente filmes que estão na lista de watchlist podem ser marcados como vistos
## Compartilhar filme assistido
- [ ] - A aplicação deverá fazer um post no perfil do usuário informando qual filme o usuário assistiu
## Agendar filme para assistir
- [ ] - Esse aviso deverá ser feito por email e por notificação remota web (você está livre para escolher qual ferramenta ou serviço vai utilizar).
