

const Scale = () => {
  return (
	<div className="lg:py-20 mx-4 sm:mx-0">
		{/* lg:mx-10 */}
            <div className="container mx-auto bg-gray-200 lg:rounded-lg px-8 lg:px-16 pt-16 pb-14">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold">Scale up with confidence</h2>

                        <p className="text-lg text-gray-600 my-5 font-medium">Keep costs in check even when you scale your apps with affordable, predictable pricing.</p>
                        <p className="text-lg text-gray-600 my-5 font-medium">Expand your business using our 14 globally distributed data centers and a 99.99% uptime SLA.</p>
                        <p className="text-link">View pricing {'>'}</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-y-5 mt-16">
                    <div>
                        <div className="font-bold text-4xl">598k</div>
                        <div className="mt-3 text-gray-600 text-xl">Customers building on DigitalOcean.</div>
                    </div>
                    <div>
                        <div className="font-bold text-4xl">185</div>
                        <div className="mt-3 text-gray-600 text-xl">Countries our customers are based in.</div>
                    </div>
                    <div>
                        <div className="font-bold text-4xl">14</div>
                        <div className="mt-3 text-gray-600 text-xl">Globally distributed data centers.</div>
                    </div>
                    <div>
                        <div className="font-bold text-4xl">99.99%</div>
                        <div className="mt-3 text-gray-600 text-xl">Uptime SLA for Droplets and Block Storage.</div>
                    </div>
                </div>

                <div className="flex items-end gap-x-5 lg:-ml-16 lg:-mb-36 mt-10">
                    <div className="panel">
                        <img src="/images/vidgyor.svg" alt=""/>
                    </div>
                    <div className="panel w-2/3 lg:w-1/2">
                        <div>“We love the developer experience, we can accurately predict our costs, and can scale up or down as the traffic grows.”</div>
                        <div className="text-gray-500 mt-5">— Mahaboob Khan, Cofounder and CEO, Vidgyor</div>
                    </div>
                </div>
            </div>

        </div>

  )
}

export {Scale}
