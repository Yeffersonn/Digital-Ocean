import { Fragment } from "react";
import { Block, BLOCK } from "../components/Block";

const Blocks = () => {
	const contentBlocks: BLOCK[] = [
		{
			img: "how-to-install-mysql-tutorial-image",
			type: "Tutorial",
			title: "How To Deploy a React Application to DigitalOcean App Platform",
			date: "Julio 30, 2020",
			visits: "319k",
		},
		{
			img: "how-to-deploy-a-react-app-tutorial-image",
			type: "Tutorial",
			title: "How To Deploy a React Application to DigitalOcean App Platform",
			date: "December 18, 2020",
			visits: "22.8k",
		},
		{
			img: "how-to-install-nodejs-tutorial-image",
			type: "Tutorial",
			title: "How To Install Node.js on Ubuntu 20.04 to DigitalOcean App",
			date: "August 9, 2020",
			visits: "273.1K",
		},
		{
			img: "how-to-scale-your-saas-product-blog-image",
			type: "Blog",
			title: "How To Scale your SaaS product without breaking the bank",
			date: "June 22, 2021",
			visits: "21.7k",
		},
	];
	const contentBlocks2: BLOCK[] = [
		{
			img: "contributing-to-open-source-blog-image",
			type: "Blog",
			title: "Contributing to open source software: Kubernetes with App Platform ",
			date: "June 15, 2021",
			visits: "312k",
		},
		{
			img: "how-to-code-in-python-tutorial-image",
			type: "Tutorial",
			title: "How to code in Python with to DigitalOcean App Platform DigitalOcean",
			date: "August 23, 2021",
			visits: "16.1m",
		},
		{
			img: "introducing-digitalocean-managed-mongodb-blog-image",
			type: "Blog",
			title: "Introducing Digital Ocean Managed MongoDB - a fully managed",
			date: "June 19, 2021",
			visits: "11.5k",
		},
		{
			img: "multi-cloud-vs-hybrid-cloud-blog-image",
			type: "Blog",
			title: "Multi-cloud vs hybrid cloud: Everything your business App Platform DigitalOcean ",
			date: "June 12, 2022",
			visits: "32.7k",
		},
	];

	return (
		<Fragment>
			<div className="  mt-20 flex flex-col  flex-wrap lg:flex-nowrap sm:flex-row gap-x-5 gap-y-5 justify-between sm:justify-around">
				{contentBlocks.map((block) => (
					<Block
						key={block.title}
						img={block.img}
						type={block.type}
						title={block.title}
						date={block.date}
						visits={block.visits}
					/>
				))}
			</div>
			<div className=" mt-20 flex flex-col  flex-wrap lg:flex-nowrap sm:flex-row gap-x-5 gap-y-5 justify-between sm:justify-around">
				{contentBlocks2.map((block) => (
					<Block
						key={block.title}
						img={block.img}
						type={block.type}
						title={block.title}
						date={block.date}
						visits={block.visits}
					/>
				))}
			</div>
		</Fragment>
	);
};

export { Blocks };
