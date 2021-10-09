import ItemList from "../components/ItemList";
import AddItemsPage from "./AddItemsPage";
import { Page, Fab, Icon, Navigator, Toolbar } from "react-onsenui";

interface MainPageProps {
  navigator: Navigator;
}

export default function MainPage(props: MainPageProps) {
  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="center">Items</div>
        </Toolbar>
      )}
    >
      <ItemList></ItemList>
      <Fab
        position="bottom right"
        onClick={() => {
          props.navigator.pushPage({ component: AddItemsPage });
        }}
      >
        <Icon
          icon="fa-plus"
          size={26}
          fixedWidth={false}
          // style={{ verticalAlign: "middle" }}
        />
      </Fab>
    </Page>
  );
}
