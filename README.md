# 🚀 Cypress Automation Framework for AutomationExercise

This project is a Cypress-based automation testing framework for the [AutomationExercise](https://www.automationexercise.com/) web application. It covers core functionalities like user flows, product browsing, cart management, and more.

---

## 📚 Table of Contents

- 🚀 Cypress Automation Framework for AutomationExercise
- 📚 Table of Contents
- 📌 Project Overview
- 🛠 Technologies Used
- 🔧 Prerequisites
- 📥 Installing Cypress
- ⚙️ Installation & Setup
- ▶️ Running Tests
- 📁 Project Structure
- 🔄 CI/CD Integration
- 📊 Reporting
- 🤝 Contributing

---

## 📌 Project Overview

This framework automates the functional testing of the AutomationExercise website. The tests are written using Cypress and structured for scalability, maintainability, and reusability.

---
## Technologies Used  
- **Cypress**: Tyoescript-based end-to-end testing framework  
- **Node.js**: Required to run Cypress  
- **Mocha & Chai**: For assertions and test structuring  
- **GitHub Actions** (optional): For CI/CD automation  

## Prerequisites  
Ensure you have the following installed before running the tests:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [Git](https://git-scm.com/)  
- Cypress (Install via npm/yarn)  

## Installing Cypress  
To install Cypress in your project, follow these steps:  

1. **Ensure Node.js is installed**  
   - Download and install [Node.js](https://nodejs.org/) (LTS version recommended).  
   - Verify installation:  
     ```sh
     node -v
     ```  

2. **Navigate to your project directory**  
   ```sh
   cd your-repo-name
   ```  

3. **Initialize a new Node.js project (if not already done)**  
   ```sh
   npm init -y
   ```  

4. **Install Cypress via npm**  
   ```sh
   npm install cypress --save-dev
   ```  

5. **Verify installation**  
   - Open Cypress Test Runner:  
     ```sh
     npx cypress open
     ```  
   - Run Cypress tests in headless mode:  
     ```sh
     npx cypress run
     ```  
---

## Installation & Setup  
Clone the repository:  
```sh
git clone https://github.com/AvinashTambe/cypress-automation-exercise.git
cd cypress-automation-framework
```  

Install dependencies:  
```sh
npm install
```  

## Running Tests  
To open the Cypress Test Runner:  
```sh
npx cypress open
```  

To run tests in headless mode:  
```sh
npx cypress run
```  

---

## 📁 Project Structure
cypress-automationexercise/
│
├── cypress/
│   ├── e2e/                            # Test specs (you'll add folders/files here)
│
│   ├── fixtures/                       # Static test data
│   │   ├── users.json
│   │   └── products.json
│
│   ├── support/
│   │   ├── commands.js                 # Custom Cypress commands
│   │   ├── e2e.js                      # Global setup and hooks
│   │   ├── locators.js                 # Centralized DOM selectors
│   │   ├── toasterMessages.js         # Common toast/alert messages
│   │   ├── constants.js               # Global constants (baseUrl, credentials, etc.)
│   │   └── pages/                     # Page Object Models (add your page files here)
│
│   └── reports/                        # Test result reports (optional)
│       └── mochawesome/
│
├── .gitignore
├── cypress.config.js                   # Cypress configuration
├── package.json
├── README.md
└── mochawesome.json                    # Optional report merge file

## CI/CD Integration  
To run Cypress tests in a CI/CD pipeline, add the following GitHub Actions workflow:  

```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run
```  

## Reporting  
Cypress provides built-in reporting, but you can integrate it with Mocha reports for detailed insights.  
To generate reports, install `mochawesome`:  
```sh
npm install mochawesome --save-dev
```  
Run Cypress with:  
```sh
npx cypress run --reporter mochawesome
```  

## Contributing  
1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m 'Add new feature'`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a Pull Request.  
