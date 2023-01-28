export interface BLOCK {
	img: string;
	type: string;
	title: string;
	date: string;
	visits: string;
}

const Block = ({img, type, title, date, visits }: BLOCK) => {
	return (
		<div className="sm:w-2/5 lg:w-1/4">
			<div className="flex flex-col bg-white transition-shadow duration-300 shadow-lg hover:shadow-2xl rounded-lg">
				<div>
					<img
						className="rounded-t-lg"
						src={`/images/${img}.jpg`}
						alt=""
					/>
				</div>
				<div className="flex flex-col justify-between border py-6 px-6">
					<div className="uppercase text-sky-500 tracking-widest">
						{type}
					</div>
					<div className="font-medium text-lg my-5">{title}</div>
					<div className="flex text-gray-500 text-sm justify-between gap-x-1">
						<p className=" shrink-0 break-words">{date}</p>
						<div
							v-if="$slots.visits"
							className="flex items-center "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
							{visits}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Block };
