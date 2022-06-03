# Challenge 2

## USANDO PROXY REVERSO COM NODE.JS, MYSQL E NGINX! 

Nesse desafio, a gente acaba tendo um desafio um pouco mais próximo da realidade.

O desafio, nesse caso, foi criar um ambiente de desenvolvimento bem básico que integrasse com 
sucesso o node.js, mysql e nginx usando um simples docker-compose up.

Os containers não estão necessariamente otimizados pois não foquei nessa parte, e sim no objetivo
de juntar as três tecnologias.

Para testar, basta executar um `docker-compose up -d`.

Acesse o localhost utilizando uma rota qualquer que não seja a root, pois os nomes adicionados no banco são justamente os valores da rota, apenas para testes, como você pode ver  em `node/index.js`