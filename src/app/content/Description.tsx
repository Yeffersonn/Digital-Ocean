import { Fragment } from "react";

const Description = () => {
	/* lg:pt-64 */
	return (
		<Fragment>
			<div className="bg-cover bg-no-repeat bg-center bg-[url(/images/hero-bg-animation-ef666767f909d3b76122f0279a8bf16d.svg)] pt-40 lg:pt-64 pb-48 relative z-0 bg-white dark:bg-gray-900">
				<div className="flex flex-col md:flex-row gap-y-5 lg:gap-y-0 items-center container mx-auto">
					<div className="w-full md:w-1/2">
						<h1 className="text-4xl md:text-6xl font-bold tracking-tighter dark:text-gray-300">
							The cloud is complex. We make it simple.
						</h1>
						<p className="lg:pr-2 mt-5 text-2xl font-medium text-gray-500 dark:text-gray-400 tracking-tighter">
							The cloud computing services you need, with the
							predictable pricing, developer-friendly features,
							and scalability you’ll love.
						</p>
					</div>
					<div className="w-full md:w-1/2">
						<div className="mb-4 font-medium dark:text-gray-300">
							Welcome to DigitalOcean. Sign up to get started!
						</div>
						<form action="">
							<div className="flex flex-col gap-y-5 w-full lg:w-4/5">
								<input
									className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 transition-shadow duration-300 delay-300 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none"
									type="text"
									placeholder="First name"
								/>
								<input
									className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 transition-shadow duration-300 delay-300 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none"
									type="text"
									placeholder="Email"
								/>
								<input
									className="px-5 py-4 rounded-lg border border-gray-400 focus:border-gray-600 transition-shadow duration-300 delay-300 shadow-input hover:shadow-input-focus focus:shadow-input-focus outline-none"
									type="password"
									placeholder="Password"
								/>
								<div className="flex justify-between gap-x-4">
									<button className="w-3/4 btn-blue transition duration-100 ease-elastic hover:scale-100">
										Deploy in seconds
									</button>
									<button className="duration-500 delay-300 ease-elastic transition">
										<img
											data-src="/images/google-logo.svg"
											src="/images/google-logo.svg"
											alt="google_icon"
											className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
										/>
									</button>
									<button className="duration-500 delay-300 ease-elastic transition">
										<img
											data-src="/images/github-logo.svg"
											src="/images/github-logo.svg"
											alt="github_icon"
											className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
										/>
									</button>
								</div>
								<div className="text-gray-500 dark:text-gray-400">
									By signing up you agree to the{" "}
									<a
										href="#"
										className="underline font-light"
									>
										Terms of Service
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export { Description };
