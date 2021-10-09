import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
} from "tailwind-mobile/react";
import { Link } from "tailwind-mobile/react";
import { Link as RouterLink } from "react-router-dom";

export default function MainListPage() {
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
      <BlockTitle>Simple List</BlockTitle>
      <List>
        <ListItem link chevron={false} title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>
    </Page>
  );
}
