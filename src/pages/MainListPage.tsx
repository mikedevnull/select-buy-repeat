import { Page, Navbar, BlockTitle } from "tailwind-mobile/react";
import { Link } from "tailwind-mobile/react";
import { Link as RouterLink } from "react-router-dom";
import ItemList from "../components/ItemList";

export default function MainListPage() {
  const items = [
    { id: 1, title: "First" },
    { id: 2, title: "Second" },
  ];
  return (
    <Page>
      <Navbar
        title="ItemList"
        right={
          // @ts-ignore
          <Link to="/add" navbar component={RouterLink}>
            Add
          </Link>
        }
      />
      <BlockTitle>Open items</BlockTitle>
      <ItemList items={items}></ItemList>
      <BlockTitle>Closed items</BlockTitle>
    </Page>
  );
}
