import Item from "../Item";
import { List, ListItem } from "tailwind-mobile/react";

export type ItemListProps = {
  items: Item[];
};

export default function ItemList(props: ItemListProps) {
  const renderedItems = props.items.map((item) => (
    <ListItem link chevron={false} key={item.id} title={item.title} />
  ));
  return <List>{renderedItems}</List>;
}
