import { Blocks } from "./Blocks";

const Community = () => {
	return (
		<div className="bg-do-blue-lighter py-24">
			<div className="container mx-auto">
				<div className="w-full lg:w-1/2 mx-auto text-center">
					<h1 className="font-bold text-4xl">
						Build alongside a robust and supportive community like
						you
					</h1>
					<p className="my-5 text-xl text-gray-600 font-medium">
						Quickly learn new tech concepts, programming languages,
						and get answers to your questions from a vibrant
						developer community.
					</p>
					<button className="btn-blue">Explore the community</button>
				</div>
				<div className="flex flex-col lg:flex-row lg:px-28 mt-16 gap-y-5 gap-x-4">
					<div className="w-full lg:w-1/4">
						<div className="text-4xl font-bold text-do-blue-light text-center lg:text-left">
							3K+
						</div>
						<p className="text-lg text-gray-500 font-medium text-center lg:text-left">
							In-depth technical tutorials for developers
						</p>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="text-4xl font-bold text-do-blue-light text-center lg:text-left">
							3.5M
						</div>
						<p className="text-lg text-gray-500 font-medium text-center lg:text-left">
							Visits per month to our community site
						</p>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="text-4xl font-bold text-do-blue-light text-center lg:text-left">
							170K
						</div>
						<p className="text-lg text-gray-500 font-medium text-center lg:text-left">
							Participants in our 2020 hackathon
						</p>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="text-4xl font-bold text-do-blue-light text-center lg:text-left">
							30K+
						</div>
						<p className="text-lg text-gray-500 font-medium text-center lg:text-left">
							Questions answered in our community
						</p>
					</div>
				</div>
				<Blocks/>
			</div>
		</div>
	);
};

export { Community };
