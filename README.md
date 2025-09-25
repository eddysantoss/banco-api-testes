# Banco API Tests

Repositório de **automação de testes de API REST** para o projeto [Banco API](https://github.com/juliodelimas/banco-api).  
O objetivo deste projeto é validar o comportamento da API, contribuindo para a qualidade, confiabilidade e estabilidade das funcionalidades expostas.

🔗 Repositório principal da API: [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)

---

## 🎯 Objetivo

- Criar e executar testes automatizados para a **Banco API**.  
- Validar os endpoints principais de autenticação, contas e transações.  
- Gerar relatórios detalhados em HTML para acompanhamento dos resultados.

---

## 🛠 Stack Utilizada

Este projeto foi desenvolvido em **JavaScript** com as seguintes bibliotecas principais:

- [Mocha](https://mochajs.org/) → Framework de testes.  
- [Chai](https://www.chaijs.com/) → Biblioteca de asserções.  
- [Supertest](https://github.com/ladjs/supertest) → Requisições HTTP para testes de APIs.  
- [Mochawesome](https://github.com/adamgruber/mochawesome) → Geração de relatórios em HTML.  

---

## 📂 Estrutura de Diretórios

```bash
banco-api-tests/
│
├── tests/                # Contém os testes organizados por funcionalidades
│   ├── login.test.js/             
│   ├── transferencias.test.js/         
├── mochawesome-report/   # Relatórios gerados em HTML pelo mochawesome
│
├── .env.example          # Exemplo de variáveis de ambiente
├── package.json          # Configurações de dependências e scripts
└── README.md             # Documentação do projeto
```

---

## ⚙️ Arquivo `.env`

Este projeto depende de variáveis de ambiente para execução.  
Crie um arquivo chamado **.env** na raiz do projeto com o seguinte formato:

```bash
BASE_URL=http://localhost:3000
```

- `BASE_URL` → URL base da API a ser testada (ex.: ambiente local, homologação ou produção).  

---

## 🚀 Execução dos Testes

### 1. Instalação das dependências
```bash
npm install
```

### 2. Execução dos testes
```bash
npm test
```

### 3. Geração do relatório HTML com mochawesome
Após a execução dos testes, o relatório estará disponível no diretório:

```
mochawesome-report/mochawesome.html
```

Abra o arquivo no navegador para visualizar os resultados.

---

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Supertest](https://github.com/ladjs/supertest)  
- [Mochawesome](https://github.com/adamgruber/mochawesome)  

---
