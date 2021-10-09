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
      <BlockTitle>fooo</BlockTitle>
    </Page>
  );
}
