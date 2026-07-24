# Playwright Test Suite & Automation Documentation

This repository contains an end-to-end (E2E) automated test suite built with **Playwright** and **Node.js**.

---

## 📌 Test Execution & Documentation

### 1. Test Suite Overview & Execution Summary
The Playwright test suite was executed in UI mode[cite: 1]. All test scenarios (positive login, negative login) passed successfully without assertions failing[cite: 1].

![Figure 1: Successful execution of test suite in Playwright UI Runner.](images/figure1.png)
*Figure 1: Successful execution of test suite in Playwright UI Runner.*

---

### 2. Network Activity & HTTP Verification
Network activity was monitored during page navigation[cite: 1]. The core HTML document ([www.saucedemo.com](https://www.saucedemo.com)) returned a 200 OK status in 344ms, verifying fast server response times[cite: 1].

![Figure 2: Verified HTTP 200 OK response for primary HTML payload.](images/figure2.png)
*Figure 2: Verified HTTP 200 OK response for primary HTML payload.*

---

### 3. Detailed HTML Test Report
A full HTML test execution report was generated using `npx playwright show-report` to record execution timestamps, step-by-step logs, and duration metrics[cite: 1].

![Figure 3: Generated Playwright HTML summary report.](images/figure3.png)
*Figure 3: Generated Playwright HTML summary report.*

---

## 🛠️ How to Run the Project

1. **Install Dependencies:**
   ```bash
   npm install
