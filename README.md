# Monopoly API
### **How to Run the Project:**
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
The project contains only one endpoint:  
```plaintext
GET - ‘http://localhost:3000/jogo/simular’  
```
Unit Tests: 
```plaintext
npm run test
```
Integration Tests: 
```plaintext
npm run test:e2e
```

When calling this endpoint, a simulation is performed between 4 players ("cautious", "random", "demanding", "impulsive"), each with their own behavior in the game.
Allowed Parameters:
*   **max_round:** number : Defines the maximum number of rounds. When this round is reached, the program ends and the player with the highest balance wins \[default: 1000\].
*   **max_value:** number : The maximum price of properties. \[default: 350\].
*   **min_value:** number : The minimum price of properties. \[default: 100\].
*   **start_balance:** number : Defines the initial balance for each player. \[default: 300\]
*   **rent_percent:** number : Defines the percentage relative to the sale price that will be charged as rent for each property. \[default: 3\]
---
**NodeJs :** v16.15.1  
**Docker-compose:** v2.6.1  
**Docker-Version**: 20.10.17, build 100c701  
**NestJs**: 9.0.0
