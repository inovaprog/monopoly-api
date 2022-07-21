## API Banco Imobiliário

### **Como executer o projeto:**

**Docker:** 

```plaintext
git clone https://github.com/inovaprog/monopoly-api.git
cd monopoly-api
sudo docker build -t monopoly-api .
sudo docker run -p3000:3000 monopoly-api
```

**Node:** 

```plaintext
git clone https://github.com/inovaprog/monopoly-api.git
cd monopoly-api
npm i
npm run start
```

O projeto contém apenas um endpoint : 

```plaintext
GET - ‘http://localhost:3000/jogo/simular’  
```

Testes Unitários: 

```plaintext
npm run test
```

Testes de Integração: 

```plaintext
npm run test:e2e
```


Ao chamar esse endpoint é realizada duma simulação entre 4 jogadores ("cauteloso", "aleatorio", "exigente", “impulsivo”), onde cada um tem seu comportamento no jogo.

Parâmetros permitidos:

*   **max\_round:** number : Define a quantidade de rodadas máximas. Ao chegar nessa rodada o programa finaliza e o jogador com mais saldo vence \[default: 1000\].

*   **max\_value:** number : valor máximo de preço dos imoveis. \[default: 350\].

*   **min\_value:** number : valor mínimo de preço dos imoveis. \[default: 100\].

*   **start\_balance: number :** Define o saldo inicial de cada jogador.\[default: 300\]

*   **rent\_percent:** number : Define a porcentagem em relação ao preço de venda que será cobrada de aluguel em cada imóvel. \[default: 3\]

---

**NodeJs :** v16.15.1

**Docker-compose:** v2.6.1

**Docker-Version**: 20.10.17, build 100c701

**NestJs**: 9.0.0
