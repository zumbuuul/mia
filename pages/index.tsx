import Navheader from "../components/reusable/Navheader";
import SearchBooks from "../components/SearchBooks";
type t = number | string;
function test() {}

export default function Index() {
  return (
    <div className="w-11/12 mx-auto">
      <Navheader></Navheader>
      <SearchBooks></SearchBooks>
    </div>
  );
}
