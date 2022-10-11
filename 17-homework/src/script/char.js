import Char from "../script/class.js"
import ForrestGump from "../assets/forrest-gump.png"
import JohnCoffee from "../assets/john-coffee.png";
import AndyDufresne from "../assets/andy-dufresne.png";
import ForrestGumpImage from "../assets/forrest-gump-image.png";
import TheGreenMileImage from "../assets/green-mile.png";
import TheShawshankRedemptionImage from "../assets/shawshank-redemption.png";

const FORREST_GUMP = new Char("Forrest Gump",
    "@forrestgump",
    "Life is like a box of chocolates, you never know what you're going to get",
    "Forrest Gump",
    <img src={ForrestGump}/>,
    <img src={ForrestGumpImage}/>,
    "chocolates",
    "box",
);

const JOHN_COFFEE = new Char("John Coffee",
    "@johncoffee",
    "John Coffey, just like the drink, only not spelled the same",
    "The Green Mile",
    <img src={JohnCoffee}/>,
    <img src={TheGreenMileImage}/>,
    "coffee",
    "drink",
);

const ANDY_DUFRESNE = new Char("Andy Dufresne",
    "@andydufresne",
    "Hope is a good thing, maybe the best of things. And no good thing ever dies!",
    "The Shawshank Redemption",
    <img src={AndyDufresne}/>,
    <img src={TheShawshankRedemptionImage}/>,
    "hope",
    "goodthings"
);

export {FORREST_GUMP, JOHN_COFFEE, ANDY_DUFRESNE};