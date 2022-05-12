import { createRoot } from "react-dom/client";

import App from "./component/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

// TODO :
// 1. CSS: Put real dots on the Dice
// 2. Track the number of rolls
// 3. Track time it took to win
// 4. Save your best time to localStorage
