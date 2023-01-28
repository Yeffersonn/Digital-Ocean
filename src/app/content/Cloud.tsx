
const Cloud = () => {
	return (
		<div className="bg-do-blue-lighter py-20">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-end mb-20">
					<div className="w-full lg:w-1/3">
						<h2 className="text-4xl font-bold">
							Cloud computing with simplicity at its core
						</h2>
						<p className="my-5 text-gray-500 text-lg font-medium">
							Build robust applications using a comprehensive
							portfolio of compute, storage, database and
							networking products.
						</p>
						<p className="text-link" >Explore our products {'>'}</p>
					</div>
					<div className="w-full lg:w-2/3 lg:pl-32">
						<p className="my-5 text-gray-500 text-lg font-medium">
							Our simple UI, CLI, API, and docs enable you to
							spend time on your business while we focus on the
							infrastructure.
						</p>
						<p className="text-link" >Read the docs {'>'}</p>
					</div>
				</div>

				<div className="mb-10 ">
					<video
						className="rounded-lg"
						src="/images/control-panel-video.mp4"
						// controls
					></video>
				</div>

				<div className="flex flex-col lg:flex-row gap-y-5 gap-x-5">
					<div className="w-full lg:w-1/2">
						<img src="/images/terminal-image.svg" className="w-full" alt="Terminal" />
					</div>
					<div className="w-full lg:w-1/2 flex flex-col lg:justify-between">
						<div className="mb-5 lg:mb-0">
							<img
								className="shadow w-full"
								src="/images/droplet-console-image.svg"
								alt=""
							/>
						</div>
						<div className="flex items-end gap-x-3">
							<p className="panel w-2/3 lg:flex-1">
								“We were able to scale our application by almost
								250% while keeping costs the same as what we
								spent at the beginning.” — Ravi Mittal, CEO,
								Vuukle
							</p>
							<div className="panel w-1/3 lg:w-20">
								<img src="/images/vuukle-logo.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Cloud };
