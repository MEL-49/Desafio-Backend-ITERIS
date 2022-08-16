# Desafio SomoS: Jogo de comparação de cartas de Pokémon

Realizei o desafio utilizando a linguagem `Node.js` e o framework `Express`.

## Descrição
Este é um jogo de comparação de cartas de Pokémons, onde é possível fazer o  CRUD (criar, listar, atualizar e deletar)  de cartas de Pokemons para dois jogadores possam escolher duas cartas por meio do id (a chave primária ou identificador das cartas) para a aplicação fazer uma comparação de atributos, e a carta com a maior quantidade de atributos fortes será a vencedora.

## Pré-requisitos:
- Fazer as quatro operações do CRUD: cadastrar as cartas no banco de dados, listar todos os dados armazenados na tabela, atualizar algum dado e deletar da tabela;
- Criar um banco de dados para armazenar as cartas;
- Operação de comparação de cartas e resultado acumulado.

## Rotas da aplicação

### Rotas das cartas:

---

1 - Cadastro de cartas: POST (/pokedex/adicionar)

##### Requisição

``` json

{
    "name": string, 
    "category": string, 
    "type": string, 
    "hp": interger, 
    "attack": interger, 
    "defense": interger, 
    "special_Attack": interger,
    "special_Defense": interger, 
    "speed": interger
}
  
```

