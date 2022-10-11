import './App.css';
import "./style/style.css"
import Posts from "./script/posts.js";
import {FORREST_GUMP, JOHN_COFFEE, ANDY_DUFRESNE} from "./script/char.js";

function App() {
    return (
        <div className="wrapper">
            <Posts props={FORREST_GUMP}/>
            <Posts props={JOHN_COFFEE}/>
            <Posts props={ANDY_DUFRESNE}/>
        </div>
    );
}

export default App;
