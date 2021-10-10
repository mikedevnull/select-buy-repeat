import {
  Page,
  Navbar,
  BlockTitle,
  NavbarBackLink,
  ListItem,
} from "tailwind-mobile/react";

export default function AddItemPage() {
  return (
    <Page>
      <Navbar
        left={<NavbarBackLink text="Back" onClick={() => history.back()} />}
        title="My App"
      />
      <input
        placeholder="Item"
        className="p-2 block text-base appearance-none w-full focus:outline-none h-11 placeholder-black placeholder-opacity-30"
      />
    </Page>
  );
}
