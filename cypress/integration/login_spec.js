describe("login screen", () => {
  it("user can log in", () => {
    cy.visit("/");
    cy.findByRole("link", {
      name: /sign in/i,
    }).click();
    cy.findByRole("textbox", {
      name: /username/i,
    }).type("john");
    cy.findByLabelText(/password/i).type("Happy123@");
    cy.findByRole("button", { name: /sign in/i }).click();
  });
});

describe("user logout", () => {
  it("user will log out in 7 seconds", () => {
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(7000)
      .findByRole("button", { name: /logout/i })
      .click();
  });
});
