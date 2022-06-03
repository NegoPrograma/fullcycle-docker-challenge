# Challenge 1

## IMAGEM GO COM MENOS DE 2MB

Nesse desafio, foi a primeira vez que eu sequer toquei em código **GOlang**, e ele conseguir
compilar pra um executavel no linux é muito doido!!!!!

Para completar esse desafio, utilizei a técnica recém aprendida sobre multi-stage builds.

Como o GO consegue fazer compilaveis executaveis diretamente pelo SO, bastou trocar pra imagem
base de todas as imagens, a scratch, e daí foi só chamar o executavel!

Para testar, basta rodar esse comando após buildar a imagem:

    docker run -it negoprograma/codeeducation