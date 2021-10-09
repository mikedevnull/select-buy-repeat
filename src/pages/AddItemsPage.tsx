import { BackButton, Page, Toolbar } from "react-onsenui";

export default function AddItemsPage() {
  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">Items</div>
        </Toolbar>
      )}
    >
      Wohoo
    </Page>
  );
}
