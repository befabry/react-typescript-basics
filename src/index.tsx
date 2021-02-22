import ReactDOM from "react-dom";

import GuestList from "./state/GuestList";

import UserSearch from "./state/UserSearch";

import EvenComponent from "./events/EventComponent";

import UserSearchRefs from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearchRefs />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
