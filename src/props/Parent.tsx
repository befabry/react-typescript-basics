import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      text
    </ChildAsFC>
  );
};

export default Parent;
