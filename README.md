# UI Automation Challenge – OrangeHRM (Playwright + Cucumber + TypeScript)

## ✅ Tech Stack
- [Playwright](https://playwright.dev/) — Cross-browser automation framework  
- [Cucumber](https://cucumber.io/) — Behavior-Driven Development (BDD)  
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript  
- Page Object Model (POM) — For modular, maintainable test design  

---

## 🚀 Setup Instructions

1. **Clone the repository or extract the project folder**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Tests (headless mode)**
   ```bash
   npm test
   ```

4. **Run Tests in Headed Mode (visible browser for debugging)**
   ```bash
   npm run test:headed
   ```

---

## 🧪 Project Structure

```
src/
├── pages/           # Page Object Models for Login, Dashboard, etc.
├── test/
│   ├── features/    # Gherkin feature files defining test scenarios
│   ├── steps/       # Step definitions mapping Gherkin to Playwright actions
│   ├── data/        # Test data (e.g., user credentials)
├── hooks/           # Global hooks for setup/teardown
```
---

## 🎯 Test Scenarios Covered

- ✅ Login with valid credentials (`Admin/admin123`)  
- ✅ Logout after successful login  
- ✅ Login with invalid credentials (negative test)  
- ✅ (Optional) Guest login scenario for further coverage  

---

## 📝 Assumptions

- OrangeHRM demo URL: `https://opensource-demo.orangehrmlive.com/`  
- Admin credentials:  
  ```
  Username: Admin  
  Password: admin123  
  ```
- Negative test simulates invalid login attempts  

---

## ⚡ Tooling Details

- **Playwright Test Runner** used under the hood via Cucumber integration  
- Cucumber config (`cucumber.json`) defines paths and setup  
- Test timeout is set to 1 minute per scenario  
- Tests run on Chromium browser  
- Uses accessibility locators via `getByRole` for reliable selectors  

---

## 💡 Improvements & Next Steps (Optional Ideas)

- Extend tests to cover:
  - Locked-out users
  - Forgot password functionality
  - UI validations (field required, etc.)
- Parameterize browser types (Chromium, Firefox, WebKit)
- Add reporting (HTML reports via Cucumber plugins)
- Integrate with CI/CD pipelines for continuous testing  

---

## 📦 Requirements

- Node.js v16 or higher  
- Stable internet connection (application is hosted publicly)  
