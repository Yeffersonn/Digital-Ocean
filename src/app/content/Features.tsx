
const Features = () => {
	return (
		<div className="bg-gray-100 py-28 lg:mt-20">
			<div className="container flex flex-col lg:flex-row  gap-y-10 items-center mx-auto">
				<div className="w-full lg:w-1/3 pr-9">
					<h2 className="text-4xl font-bold">
						See what you can save
					</h2>
					<p className="text-gray-500 font-medium text-xl my-4 tracking-tight">
						DigitalOcean consistently outperforms other cloud
						providers on price, while delivering the same
						performance you need tosucceed.
					</p>
					<p className="text-link">Calculate your savings</p>
				</div>

				<div className="w-full lg:w-1/3 panel bg-do-blue-dark text-gray-300">
					<h2 className="text-4xl font-bold">Basic VMs</h2>
					<p className="mt-5 mb-10">
						Easy, fast, and flexible compute built for a range of
						needs.
					</p>

					<div>
						<div className="flex justify-between py-4 border-b border-gray-300">
							<div>CPU</div>
							<div>1</div>
						</div>
						<div className="flex justify-between py-4 border-b border-gray-300">
							<div>Memory</div>
							<div>1 GB</div>
						</div>
						<div className="flex justify-between py-4 border-b border-gray-300">
							<div>Storage</div>
							<div>25 GB</div>
						</div>
						<div className="flex justify-between py-4">
							<div>Transfer</div>
							<div>1 TB</div>
						</div>
					</div>
					<div className="flex gap-x-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</div>
				</div>

				<div className="w-full lg:w-1/3 panel">
					<h2 className="text-4xl font-bold">Monthly cost</h2>
					<p className="mt-5 mb-10">Estimated monthly spend.</p>

					<div>
						<div className="flex py-3 border-b border-gray-300">
							<div className="w-1/2 flex gap-x-2">
								<img src="/images/digital-ocean.svg" alt="" />
								Digital Ocean
							</div>
							<div className="w-1/4">
								<div className="h-6 w-4 bg-do-blue-dark rounded-r"></div>
							</div>
							<div className="w-1/4 text-right">$20/mo</div>
						</div>
						<div className="flex py-3 border-b border-gray-300">
							<div className="w-1/2 flex gap-x-2">
								<img src="/images/gcp.svg" alt="" />
								GCP
							</div>
							<div className="w-1/4">
								<div className="h-6 w-4 bg-do-blue-dark rounded-r"></div>
							</div>
							<div className="w-1/4 text-right">$29/mo</div>
						</div>
						<div className="flex py-3 border-b border-gray-300">
							<div className="w-1/2 flex gap-x-2">
								<img src="/images/aws.svg" alt="" />
								AWS
							</div>
							<div className="w-1/4">
								<div className="h-6 w-4 bg-do-blue-dark rounded-r"></div>
							</div>
							<div className="w-1/4 text-right">$30.46/mo</div>
						</div>
						<div className="flex py-3">
							<div className="w-1/2 flex gap-x-2">
								<img src="/images/azure.svg" alt="" />
								Azure
							</div>
							<div className="w-1/4">
								<div className="h-6 w-4 bg-do-blue-dark rounded-r"></div>
							</div>
							<div className="w-1/4 text-right">$30.37</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Features };
