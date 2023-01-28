import { Fragment } from "react";
import { Cloud } from "./content/Cloud";
import { Community } from "./content/Community";
import { Description } from "./content/Description";
import { Features } from "./content/Features";
import { Footer } from "./content/Footer";
import { Scale } from "./content/Scale";
import { Slides } from "./content/Slides";
import { Stats } from "./content/Stats";
import { TopBar } from "./content/TopBar";

function App() {
	return (
		<Fragment>
			<TopBar />
			<Description />
			<Stats />
			<Slides />
			<Cloud />
			<Scale />
			<Features />
			<Community />
			<Footer />
		</Fragment>
	);
}

export default App;
