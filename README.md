# Automated Testing with Cypress and Mocha for Midtrans Payment

This repository contains automated test scripts using Cypress and Mocha for the web page [https://demo.midtrans.com/](https://demo.midtrans.com/). The primary focus is on testing payment scenarios on the Midtrans Payment Simulator.

## Technologies Used

- **Cypress:** A powerful end-to-end testing framework for web applications.
- **Mocha:** A JavaScript test framework that provides flexible and accurate reporting.

## Why Mocha?

The decision to incorporate Mocha arises from the challenge of accessing elements within iframes using Cypress. Despite switching to the iframe, Cypress runner faced difficulties in locating the desired elements. To overcome this, Mocha is utilized to retrieve the virtual account number.

## Test Flow

1. **Access [https://demo.midtrans.com/](https://demo.midtrans.com/):**
   - Navigate to the Midtrans demo page to initiate the testing process.

2. **Retrieve Virtual Account Number using Mocha:**
   - Utilize Mocha to navigate through iframes and fetch the virtual account number.

3. **Perform Payment Transactions:**
   - Switch to a new tab and navigate to [https://simulator.sandbox.midtrans.com/bca/va/index](https://simulator.sandbox.midtrans.com/bca/va/index) for the payment transaction.
   - Conduct payment transactions using the Midtrans Payment Simulator.

4. **Navigate Back to [https://demo.midtrans.com/](https://demo.midtrans.com/):**
   - Return to the main Midtrans demo page for additional validations.

Feel free to explore the test scripts and adapt them to your specific use cases.

