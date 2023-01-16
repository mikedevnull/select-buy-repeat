import { render, screen, within } from "@testing-library/svelte";
import { it, describe, expect } from "vitest";
import ShopList from "./ShopList.svelte";
/**
 * @vitest-environment jsdom
 */

describe("Item rendering", () => {
  const todoDone = { id: 1, name: "milk", checked: true };
  const todoNotDone = { id: 2, name: "eggs", checked: false };

  it("shows items if rendered", () => {
    const itemsToTest = [todoDone, todoNotDone];
    render(ShopList, {
      props: { items: itemsToTest },
    });

    const listitems = screen.getAllByRole("listitem");
    const item0 = listitems[0];
    const c = item0.firstChild;
    expect(listitems.length).toBe(2);
    const labels = listitems.map((e) => e.firstChild.textContent.trim());
    const checkStates = listitems.map(
      (e) => (within(e).getByRole("checkbox") as HTMLInputElement).checked
    );

    expect(labels).toEqual(itemsToTest.map((e) => e.name));
    expect(checkStates).toEqual(itemsToTest.map((e) => e.checked));
    expect(screen.getByText(todoDone.name)).toBeDefined();
    expect(screen.getByText(todoNotDone.name)).toBeDefined();
  });
});
