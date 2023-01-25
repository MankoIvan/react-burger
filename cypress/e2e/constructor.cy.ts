import type {} from "cypress";

const bunText = "Краторная булка N-200i";
const fillingText = "Биокотлета из марсианской Магнолии";

const email = "cypress_test@yandex.ru";
const password = "123456";

describe("Constructor page", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:3000");
  });

  it("should open correct page", () => {
    cy.contains("Соберите бургер").should("exist");
  });

  it("should open ingredient details modal", () => {
    cy.get(`[data-test="${bunText}"]`).as("bun").click();
    cy.contains("Детали ингредиента").should("exist");
    cy.contains(bunText).should("exist");
  });

  it("should drag ingredients", () => {
    cy.get(`[data-test="${bunText}"]`).as("bun").trigger("dragstart");
    cy.get('[data-test="drop-place"]').as("drop-place").trigger("drop");
    cy.get('[data-test="ingredient-element"]')
      .as("ingredient-element")
      .contains(bunText)
      .should("exist");

    cy.get(`[data-test="${fillingText}"]`).as("filling").trigger("dragstart");
    cy.get("@drop-place").trigger("drop");
    cy.get("@ingredient-element").contains(fillingText).should("exist");
  });

  it("should redirect to login on order", () => {
    cy.get(`[data-test="${bunText}"]`).as("bun").trigger("dragstart");
    cy.get('[data-test="drop-place"]').as("drop-place").trigger("drop");

    cy.get(`[data-test="${fillingText}"]`).as("filling").trigger("dragstart");
    cy.get("@drop-place").trigger("drop");

    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Вход").should("exist");
  });

  it("should redirect back to constructor after login", () => {
    cy.get(`[data-test="${bunText}"]`).as("bun").trigger("dragstart");
    cy.get('[data-test="drop-place"]').as("drop-place").trigger("drop");

    cy.get(`[data-test="${fillingText}"]`).as("filling").trigger("dragstart");
    cy.get("@drop-place").trigger("drop");

    cy.get("button").contains("Оформить заказ").click();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get("button").contains("Войти").click();

    cy.contains("Соберите бургер").should("exist");
  });

  it("should open order modal", () => {
    cy.get(`[data-test="${bunText}"]`).as("bun").trigger("dragstart");
    cy.get('[data-test="drop-place"]').as("drop-place").trigger("drop");

    cy.get(`[data-test="${fillingText}"]`).as("filling").trigger("dragstart");
    cy.get("@drop-place").trigger("drop");

    cy.get("button").contains("Оформить заказ").click();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get("button").contains("Войти").click();

    cy.get("button").contains("Оформить заказ").click();

    cy.contains("Ваш заказ начали готовить", { timeout: 20000 }).should(
      "exist"
    );
  });
});
