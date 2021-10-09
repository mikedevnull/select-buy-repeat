import { List, ListItem } from "react-onsenui";

export default function ItemList() {
  const items = ["One", "Two"];
  const renderRow = (row: string) => (
    <ListItem tappable key={row}>
      {row}
    </ListItem>
  );
  return <List dataSource={items} renderRow={renderRow}></List>;
}
