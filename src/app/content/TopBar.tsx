import { Fragment } from "react";

const TopBar = () => {
	return (
		<Fragment>
			<div className="fixed z-10 w-full">
				{/* <div className="hidden lg:block bg-do-blue-dark text-gray-300 py-2 text-sm">
					<div className="container mx-auto flex justify-between">
						<div className="flex items-center">
							<div>
								Boost availability, performance, and reliability
								with more powerful, upgraded Load Balancers!
							</div>
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
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
						<div className="flex gap-x-4 items-center">
							<button
								v-show="theme == 'dark'"
								v-on:click="setSystemMode"
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
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							</button>
							<button
								v-show="theme == 'light'"
								v-on:click="setDarkMode"
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
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</button>
							<button
								v-show="theme == 'system'"
								v-on:click="setLightMode"
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
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</button>
							<a
								href=""
								className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
							>
								We're Hiring
							</a>
							<a href="" className="hover:text-white">
								Blog
							</a>
							<a href="" className="hover:text-white">
								Docs
							</a>
							<a href="" className="hover:text-white">
								Get Support
							</a>
							<a href="" className="hover:text-white">
								Sales
							</a>
						</div>
					</div>
				</div> */}

				<div className="bg-do-blue-dark text-gray-300 py-2 text-sm">
					<div className="container  flex mx-auto justify-start xl:justify-between ">
						<div className="hidden xl:flex items-center">
							<p>
								Boost availability, performance, and reliability
								with more powerful, upgraded Load Balancers!
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
						<div className="text-xs sm:text-sm flex gap-x-4  items-center ">
							<a
								href=""
								className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
							>
								We're Hiring
							</a>
							<a href="" className="hover:text-white">
								Blog
							</a>
							<a href="" className="hover:text-white">
								Docs
							</a>
							<a href="" className="hover:text-white">
								Get Support
							</a>
							<a href="" className="hover:text-white">
								Sales
							</a>
						</div>
					</div>
				</div>

				<div className="lg:hidden px-5 py-5 shadow-lg bg-white">
					<div className="container mx-auto px-1 md:px-6 flex justify-between items-center">
						<div>
							<img
								src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTkxIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NzkgMzJWMjUuODAzNkMyMi43MTI5IDI1LjgwMzYgMjcuNzk4NSAxOS4zMDMyIDI1LjI3NDggMTIuMzg0NUMyNC4zNTcxIDkuODM3NTYgMjIuMjkyMyA3Ljc4NDc4IDE5LjczMDQgNi44NzI0M0MxMi43NzEzIDQuMzYzNDcgNi4yMzI2OCA5LjQ1NzQxIDYuMjMyNjggMTUuOTk1OUgwQzAgNS41NDE5MiAxMC4xNzExIC0yLjYzMTE5IDIxLjE4MzUgMC43OTAxMTJDMjYuMDAxMyAyLjI3MjY4IDI5LjgyNTEgNi4xMTIxNCAzMS4zNTQ2IDEwLjkwMkMzNC43OTU5IDIxLjg4ODEgMjYuNjEzMSAzMiAxNi4wOTc5IDMyWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NjggMjUuODQxNUg5LjkwMjM0VjE5LjY4MzFIMTYuMDk2OFYyNS44NDE1WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTAyNzEgMzAuNTkzNEg1LjEyMzA1VjI1Ljg0MTZIOS45MDI3MVYzMC41OTM0WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTI0MjkgMjUuODQxN0gxLjEwOTM4VjIxLjg4ODJINS4wODYwNVYyNS44NDE3SDUuMTI0MjlaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMjQyMyA5LjMwNTI3QzU1LjQwNjkgOC4wNTA3OSA1My4xMTI3IDcuNDA0NTQgNTAuNDM2MSA3LjQwNDU0SDQ0LjYyNFYyNS44MDM1SDUwLjQzNjFDNTMuMTEyNyAyNS44MDM1IDU1LjQwNjkgMjUuMTE5MyA1Ny4yNDIzIDIzLjc4ODhDNTguMjM2NSAyMy4wNjY1IDU5LjAzOTUgMjIuMDc4MSA1OS41NzQ4IDIwLjgyMzdDNjAuMTEwMSAxOS41NjkyIDYwLjQxNiAxOC4xMjQ2IDYwLjQxNiAxNi40OUM2MC40MTYgMTQuODU1NCA2MC4xNDg0IDEzLjQxMDggNTkuNTc0OCAxMi4xOTQ0QzU5LjAzOTUgMTAuOTM5OSA1OC4yNzQ3IDkuOTUxNTEgNTcuMjQyMyA5LjMwNTI3Wk00OC4wMjg4IDEwLjQ4MzhINDkuODY0MkM1MS44OTA4IDEwLjQ4MzggNTMuNTczMyAxMC44NjQgNTQuODM1MSAxMS42NjIzQzU2LjI0OTkgMTIuNDk4NiA1Ni45NzY0IDE0LjEzMzIgNTYuOTc2NCAxNi40NTIxQzU2Ljk3NjQgMTguODQ3IDU2LjI0OTkgMjAuNTE5NyA1NC44MzUxIDIxLjQzMkM1My42MTE1IDIyLjIzMDMgNTEuOTY3MyAyMi42NDg1IDQ5LjkwMjUgMjIuNjQ4NUg0OC4wNjcxVjEwLjQ4MzhINDguMDI4OFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NC41MDggNy4xMzg0M0M2My45MzQ1IDcuMTM4NDMgNjMuNDc1NiA3LjMyODUgNjMuMDkzMiA3LjcwODY0QzYyLjcxMDkgOC4wODg3OSA2Mi40ODE0IDguNTQ0OTYgNjIuNDgxNCA5LjExNTE4QzYyLjQ4MTQgOS42ODU0IDYyLjY3MjYgMTAuMTQxNiA2My4wNTUgMTAuNTU5N0M2My40Mzc0IDEwLjkzOTkgNjMuOTM0NSAxMS4xMjk5IDY0LjUwOCAxMS4xMjk5QzY1LjA4MTYgMTEuMTI5OSA2NS41NDA0IDEwLjkzOTkgNjUuOTYxIDEwLjU1OTdDNjYuMzQzNCAxMC4xNzk2IDY2LjUzNDYgOS42ODU0IDY2LjUzNDYgOS4xMTUxOEM2Ni41MzQ2IDguNTQ0OTYgNjYuMzQzNCA4LjA4ODc5IDY1Ljk2MSA3LjcwODY0QzY1LjU0MDQgNy4zNjY1MSA2NS4wNDMzIDcuMTM4NDMgNjQuNTA4IDcuMTM4NDNaIiBmaWxsPSIjMDA2OUZGIi8+CjxyZWN0IHg9IjYyLjgyNTIiIHk9IjEyLjgwMjUiIHdpZHRoPSIzLjI4ODQxIiBoZWlnaHQ9IjEyLjk2MjkiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OC4wMDI1IDEzLjkwNDlDNzcuMDA4NCAxMy4wMzA2IDc1Ljg5OTUgMTIuNTM2NCA3NC43MTQxIDEyLjUzNjRDNzIuOTE3IDEyLjUzNjQgNzEuMzg3NSAxMy4xNDQ2IDcwLjI0MDQgMTQuMzk5MUM2OS4wNTUgMTUuNjE1NiA2OC40ODE0IDE3LjE3NDEgNjguNDgxNCAxOS4wMzY5QzY4LjQ4MTQgMjAuODYxNSA2OS4wNTUgMjIuNDIwMSA3MC4yMDIxIDIzLjY3NDZDNzEuMzQ5MiAyNC44OTExIDcyLjg3ODcgMjUuNDk5MyA3NC42NzU5IDI1LjQ5OTNDNzUuOTM3NyAyNS40OTkzIDc3LjAwODQgMjUuMTU3MiA3Ny45MjYxIDI0LjQ3MjlWMjQuNzc3Qzc3LjkyNjEgMjUuODQxNCA3Ny42MjAyIDI2LjY3NzggNzcuMDg0OCAyNy4yNDhDNzYuNTExMyAyNy44MTgyIDc1LjcwODMgMjguMTIyMyA3NC43NTI0IDI4LjEyMjNDNzMuMjIyOSAyOC4xMjIzIDcyLjMwNTIgMjcuNTE0MSA3MS4xMTk4IDI1Ljk5MzVMNjguOTAyMSAyOC4xMjIzTDY4Ljk3ODUgMjguMTk4M0M2OS40NzU2IDI4Ljg4MjYgNzAuMjAyMSAyOS41Mjg5IDcxLjE1ODEgMzAuMTM3MUM3Mi4xMTQgMzAuNzQ1MyA3My4zNzU4IDMxLjA4NzQgNzQuNzkwNiAzMS4wODc0Qzc2Ljc0MDcgMzEuMDg3NCA3OC4zMDg0IDMwLjQ3OTIgNzkuNDU1NSAyOS4zMDA4QzgwLjYwMjcgMjguMTIyMyA4MS4yMTQ1IDI2LjUyNTcgODEuMjE0NSAyNC41ODdWMTIuODAyNUg3OC4wMDI1VjEzLjkwNDlaTTc3LjEyMzkgMjEuNTQ1OUM3Ni41NTAzIDIyLjE5MjIgNzUuODIzOCAyMi40OTYzIDc0Ljg2NzkgMjIuNDk2M0M3My45MTE5IDIyLjQ5NjMgNzMuMTg1NCAyMi4xOTIyIDcyLjY1MDEgMjEuNTQ1OUM3Mi4wNzY1IDIwLjg5OTcgNzEuODA4OSAyMC4wNjM0IDcxLjgwODkgMTguOTk5QzcxLjgwODkgMTcuOTM0NSA3Mi4wNzY1IDE3LjA5ODIgNzIuNjUwMSAxNi40NTJDNzMuMjIzNyAxNS44MDU3IDczLjk1MDIgMTUuNTAxNiA3NC44Njc5IDE1LjUwMTZDNzUuODIzOCAxNS41MDE2IDc2LjU1MDMgMTUuODA1NyA3Ny4xMjM5IDE2LjQ1MkM3Ny42OTc0IDE3LjA5ODIgNzcuOTY1MSAxNy45NzI2IDc3Ljk2NTEgMTguOTk5Qzc4LjAwMzMgMjAuMDYzNCA3Ny42OTc0IDIwLjg5OTcgNzcuMTIzOSAyMS41NDU5WiIgZmlsbD0iIzAwNjlGRiIvPgo8cmVjdCB4PSI4NC4wMDY4IiB5PSIxMi44MDI1IiB3aWR0aD0iMy4yODg0MSIgaGVpZ2h0PSIxMi45NjI5IiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuNjkxNiA3LjEzODQzQzg1LjExODEgNy4xMzg0MyA4NC42NTkyIDcuMzI4NSA4NC4yNzY4IDcuNzA4NjRDODMuODk0NSA4LjA4ODc5IDgzLjY2NSA4LjU0NDk2IDgzLjY2NSA5LjExNTE4QzgzLjY2NSA5LjY4NTQgODMuODU2MiAxMC4xNDE2IDg0LjIzODYgMTAuNTU5N0M4NC42MjEgMTAuOTM5OSA4NS4xMTgxIDExLjEyOTkgODUuNjkxNiAxMS4xMjk5Qzg2LjI2NTIgMTEuMTI5OSA4Ni43MjQgMTAuOTM5OSA4Ny4xNDQ2IDEwLjU1OTdDODcuNTI3IDEwLjE3OTYgODcuNzE4MiA5LjY4NTQgODcuNzE4MiA5LjExNTE4Qzg3LjcxODIgOC41NDQ5NiA4Ny41MjcgOC4wODg3OSA4Ny4xNDQ2IDcuNzA4NjRDODYuNzI0IDcuMzY2NTEgODYuMjY1MiA3LjEzODQzIDg1LjY5MTYgNy4xMzg0M1oiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NC40ODUgOS4zMDUxOEg5MS4yNzNWMTIuODAyNUg4OS4zOTk0VjE1Ljc2NzZIOTEuMjczVjIxLjEyNzdDOTEuMjczIDIyLjgwMDMgOTEuNjE3MiAyNC4wMTY4IDkyLjI2NzIgMjQuNzAxQzkyLjk1NTUgMjUuMzg1MyA5NC4xNDA4IDI1Ljc2NTQgOTUuNzg1IDI1Ljc2NTRDOTYuMzIwNCAyNS43NjU0IDk2Ljg1NTcgMjUuNzY1NCA5Ny4zOTEgMjUuNzI3NEg5Ny41NDRWMjIuNzYyM0w5Ni40MzUxIDIyLjgzODNDOTUuNjcwMyAyMi44MzgzIDk1LjEzNSAyMi42ODYzIDk0Ljg2NzMgMjIuNDIwMkM5NC41OTk3IDIyLjE1NDEgOTQuNDg1IDIxLjU4MzkgOTQuNDg1IDIwLjcwOTVWMTUuODA1N0g5Ny41NDRWMTIuODQwNUg5NC40ODVWOS4zMDUxOFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuOTE1IDcuMzY2NDZIMTE2LjIwM1YyNS43NjU1SDExMi45MTVWNy4zNjY0NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDkuMjc5IDIxLjEyNzdDMTQ4LjcwNSAyMS43NzM5IDE0OC4wOTMgMjIuMzQ0MSAxNDcuNjM0IDIyLjY0ODJDMTQ3LjE3NiAyMi45NTIzIDE0Ni42MDIgMjMuMDY2NCAxNDUuOTUyIDIzLjA2NjRDMTQ0Ljk5NiAyMy4wNjY0IDE0NC4xOTMgMjIuNzI0MyAxNDMuNTgxIDIyLjAwMkMxNDIuOTY5IDIxLjI3OTcgMTQyLjYyNSAyMC4zNjc0IDE0Mi42MjUgMTkuMjY0OUMxNDIuNjI1IDE4LjE2MjUgMTQyLjkzMSAxNy4yNTAyIDE0My41NDMgMTYuNTI3OUMxNDQuMTU1IDE1LjgwNTYgMTQ0Ljk1OCAxNS40NjM1IDE0NS45MTQgMTUuNDYzNUMxNDYuOTg0IDE1LjQ2MzUgMTQ4LjA5MyAxNi4xMDk3IDE0OS4wNDkgMTcuMjUwMkwxNTEuMjI5IDE1LjE5NzRDMTQ5LjgxNCAxMy4zNzI3IDE0OC4wMTcgMTIuNTM2NCAxNDUuODc1IDEyLjUzNjRDMTQ0LjA3OCAxMi41MzY0IDE0Mi41MTEgMTMuMTgyNiAxNDEuMjQ5IDE0LjQ3NTFDMTM5Ljk4NyAxNS43Njc2IDEzOS4zMzcgMTcuMzY0MiAxMzkuMzM3IDE5LjMwM0MxMzkuMzM3IDIxLjI0MTcgMTM5Ljk4NyAyMi44NzYzIDE0MS4yNDkgMjQuMTMwOEMxNDIuNTExIDI1LjQyMzMgMTQ0LjA3OCAyNi4wNjk1IDE0NS44NzUgMjYuMDY5NUMxNDguMjQ2IDI2LjA2OTUgMTUwLjE1OCAyNS4wNDMxIDE1MS40NTggMjMuMTgwNEwxNDkuMjc5IDIxLjEyNzdaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYyLjczOCAxNC42MjczQzE2Mi4yNzkgMTMuOTgxMSAxNjEuNjI5IDEzLjQ0ODkgMTYwLjg2NCAxMy4wNjg4QzE2MC4wOTkgMTIuNjg4NiAxNTkuMTgxIDEyLjQ5ODUgMTU4LjE0OSAxMi40OTg1QzE1Ni4zMTQgMTIuNDk4NSAxNTQuODIyIDEzLjE4MjggMTUzLjcxNCAxNC40NzUzQzE1Mi42MDUgMTUuODA1OCAxNTIuMDY5IDE3LjQ0MDQgMTUyLjA2OSAxOS4zNDExQzE1Mi4wNjkgMjEuMzE3OSAxNTIuNjgxIDIyLjkxNDUgMTUzLjg2NiAyNC4xNjlDMTU1LjA1MiAyNS4zODU0IDE1Ni42NTggMjYuMDMxNyAxNTguNjA4IDI2LjAzMTdDMTYwLjgyNiAyNi4wMzE3IDE2Mi42MjMgMjUuMTU3NCAxNjMuOTk5IDIzLjQwODdMMTY0LjA3NiAyMy4zMzI3TDE2MS45MzUgMjEuMjc5OUMxNjEuNzQzIDIxLjUwOCAxNjEuNDM3IDIxLjc3NDEgMTYxLjIwOCAyMi4wNDAyQzE2MC45MDIgMjIuMzQ0MyAxNjAuNTk2IDIyLjU3MjQgMTYwLjI1MiAyMi43MjQ0QzE1OS43NTUgMjIuOTUyNSAxNTkuMjIgMjMuMTA0NiAxNTguNjA4IDIzLjEwNDZDMTU3LjY5IDIzLjEwNDYgMTU2Ljk2NCAyMi44Mzg1IDE1Ni4zOSAyMi4zMDYzQzE1NS44NTUgMjEuODEyMSAxNTUuNTQ5IDIxLjE2NTggMTU1LjQ3MiAyMC4zMjk1SDE2NC4xNTJMMTY0LjE5MSAxOS4xNTExQzE2NC4xOTEgMTguMzE0OCAxNjQuMDc2IDE3LjUxNjQgMTYzLjg0NiAxNi43NTYyQzE2My41NDEgMTUuOTU3OSAxNjMuMTk2IDE1LjI3MzYgMTYyLjczOCAxNC42MjczWk0xNTUuNTg4IDE3LjY2ODZDMTU1Ljc0MSAxNy4wNjA0IDE1Ni4wNDYgMTYuNTI4MiAxNTYuNDI5IDE2LjE0OEMxNTYuODg4IDE1LjcyOTkgMTU3LjQ2MSAxNS41MDE4IDE1OC4xNSAxNS41MDE4QzE1OC45NTMgMTUuNTAxOCAxNTkuNTY0IDE1LjcyOTkgMTU5Ljk4NSAxNi4xODYxQzE2MC4zNjcgMTYuNjA0MiAxNjAuNTk3IDE3LjA5ODQgMTYwLjYzNSAxNy43MDY2SDE1NS41ODhWMTcuNjY4NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzUuMzE5IDEzLjc5MDlDMTc0LjMyNSAxMi45NTQ1IDE3Mi45NDkgMTIuNTM2NCAxNzEuMjI4IDEyLjUzNjRDMTcwLjExOSAxMi41MzY0IDE2OS4xMjUgMTIuNzY0NSAxNjguMjA3IDEzLjIyMDZDMTY3LjM2NiAxMy42Mzg4IDE2Ni41MjUgMTQuMzYxMSAxNjUuOTg5IDE1LjMxMTRMMTY2LjAyOCAxNS4zNDk0TDE2OC4xMzEgMTcuMzY0MkMxNjkuMDEgMTUuOTk1NyAxNjkuOTY2IDE1LjUwMTUgMTcxLjIyOCAxNS41MDE1QzE3MS45MTYgMTUuNTAxNSAxNzIuNDkgMTUuNjkxNiAxNzIuOTEgMTYuMDMzN0MxNzMuMzMxIDE2LjM3NTggMTczLjU2IDE2LjgzMiAxNzMuNTYgMTcuNDQwMlYxOC4wODY1QzE3Mi43NTcgMTcuODU4NCAxNzEuOTU0IDE3LjcwNjMgMTcxLjE1MSAxNy43MDYzQzE2OS41MDcgMTcuNzA2MyAxNjguMjA3IDE4LjA4NjUgMTY3LjIxMyAxOC44NDY4QzE2Ni4yMTkgMTkuNjA3MSAxNjUuNzIyIDIwLjcwOTUgMTY1LjcyMiAyMi4wNzhDMTY1LjcyMiAyMy4yOTQ1IDE2Ni4xNDIgMjQuMjgyOSAxNjYuOTg0IDI1LjAwNTFDMTY3LjgyNSAyNS43Mjc0IDE2OC44OTUgMjYuMDY5NSAxNzAuMTU3IDI2LjA2OTVDMTcxLjQxOSAyNi4wNjk1IDE3Mi41NjYgMjUuNTc1MyAxNzMuNjM3IDI0LjcwMVYyNS43NjU0SDE3Ni44NDlWMTcuNDQwMkMxNzYuODEgMTUuODQzNiAxNzYuMzEzIDE0LjYyNzIgMTc1LjMxOSAxMy43OTA5Wk0xNjkuNTA2IDIwLjgyMzRDMTY5Ljg4OSAyMC41NTczIDE3MC4zODYgMjAuNDQzMyAxNzEuMDc0IDIwLjQ0MzNDMTcxLjg3NyAyMC40NDMzIDE3Mi43MTggMjAuNTk1NCAxNzMuNTU5IDIwLjg5OTVWMjIuMTU0QzE3Mi44MzMgMjIuODAwMiAxNzEuODc3IDIzLjE0MjMgMTcwLjczIDIzLjE0MjNDMTcwLjE1NiAyMy4xNDIzIDE2OS43MzYgMjMuMDI4MyAxNjkuNDMgMjIuNzYyMkMxNjkuMTI0IDIyLjUzNDEgMTY4Ljk3MSAyMi4yMyAxNjguOTcxIDIxLjgxMThDMTY4Ljk3MSAyMS4zOTM3IDE2OS4xMjQgMjEuMDUxNSAxNjkuNTA2IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTg5LjQyOCAxNC4wMTkxQzE4OC41MSAxMi45OTI3IDE4Ny4yNDggMTIuNDk4NSAxODUuNjA0IDEyLjQ5ODVDMTg0LjMwNCAxMi40OTg1IDE4My4yMzQgMTIuODc4NyAxODIuNDY5IDEzLjYwMVYxMi44MDI3SDE3OS4yNTdWMjUuNzY1NkgxODIuNTQ1VjE4LjYxODlDMTgyLjU0NSAxNy42MzA1IDE4Mi43NzUgMTYuODcwMiAxODMuMjM0IDE2LjNDMTgzLjY5MiAxNS43Mjk4IDE4NC4zNDIgMTUuNDYzNyAxODUuMTg0IDE1LjQ2MzdDMTg1LjkxIDE1LjQ2MzcgMTg2LjQ4NCAxNS42OTE4IDE4Ni45MDQgMTYuMTg1OUMxODcuMzI1IDE2LjY4MDEgMTg3LjUxNiAxNy4zNjQ0IDE4Ny41MTYgMTguMjM4N1YyNS43Mjc2SDE5MC44MDRWMTguMjM4N0MxOTAuODA0IDE2LjQ1MiAxOTAuMzQ2IDE1LjA0NTUgMTg5LjQyOCAxNC4wMTkxWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwOC43ODggMTMuNzkwOUMxMDcuNzk0IDEyLjk1NDUgMTA2LjQxNyAxMi41MzY0IDEwNC42OTcgMTIuNTM2NEMxMDMuNTg4IDEyLjUzNjQgMTAyLjU5NCAxMi43NjQ1IDEwMS42NzYgMTMuMjIwNkMxMDAuODM1IDEzLjYzODggOTkuOTkzNCAxNC4zNjExIDk5LjQ1ODEgMTUuMzExNEw5OS40OTYzIDE1LjM0OTRMMTAxLjU5OSAxNy4zNjQyQzEwMi40NzkgMTUuOTk1NyAxMDMuNDM1IDE1LjUwMTUgMTA0LjY5NyAxNS41MDE1QzEwNS4zODUgMTUuNTAxNSAxMDUuOTU4IDE1LjY5MTYgMTA2LjM3OSAxNi4wMzM3QzEwNi44IDE2LjM3NTggMTA3LjAyOSAxNi44MzIgMTA3LjAyOSAxNy40NDAyVjE4LjA4NjVDMTA2LjIyNiAxNy44NTg0IDEwNS40MjMgMTcuNzA2MyAxMDQuNjIgMTcuNzA2M0MxMDIuOTc2IDE3LjcwNjMgMTAxLjY3NiAxOC4wODY1IDEwMC42ODIgMTguODQ2OEM5OS42ODc1IDE5LjYwNzEgOTkuMTkwNCAyMC43MDk1IDk5LjE5MDQgMjIuMDc4Qzk5LjE5MDQgMjMuMjk0NSA5OS42MTEgMjQuMjgyOSAxMDAuNDUyIDI1LjAwNTFDMTAxLjI5MyAyNS43Mjc0IDEwMi4zNjQgMjYuMDY5NSAxMDMuNjI2IDI2LjA2OTVDMTA0Ljg4OCAyNi4wNjk1IDEwNi4wMzUgMjUuNTc1MyAxMDcuMTA2IDI0LjcwMVYyNS43NjU0SDExMC4zMTdWMTcuNDQwMkMxMTAuMjc5IDE1Ljg0MzYgMTA5Ljc4MiAxNC42MjcyIDEwOC43ODggMTMuNzkwOVpNMTAyLjk3NSAyMC44MjM0QzEwMy4zNTggMjAuNTU3MyAxMDMuODU1IDIwLjQ0MzMgMTA0LjU0MyAyMC40NDMzQzEwNS4zNDYgMjAuNDQzMyAxMDYuMTg3IDIwLjU5NTQgMTA3LjAyOCAyMC44OTk1VjIyLjE1NEMxMDYuMzAyIDIyLjgwMDIgMTA1LjM0NiAyMy4xNDIzIDEwNC4xOTkgMjMuMTQyM0MxMDMuNjI1IDIzLjE0MjMgMTAzLjIwNSAyMy4wMjgzIDEwMi44OTkgMjIuNzYyMkMxMDIuNTkzIDIyLjUzNDEgMTAyLjQ0IDIyLjIzIDEwMi40NCAyMS44MTE4QzEwMi40NCAyMS4zOTM3IDEwMi41OTMgMjEuMDUxNSAxMDIuOTc1IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4LjA1NyAyNi4wMzE2QzEyMi44MTkgMjYuMDMxNiAxMTguNTM2IDIxLjc3MzkgMTE4LjUzNiAxNi41NjU5QzExOC41MzYgMTEuMzU4IDEyMi44MTkgNy4xMDAzNCAxMjguMDU3IDcuMTAwMzRDMTMzLjI5NiA3LjEwMDM0IDEzNy41NzggMTEuMzU4IDEzNy41NzggMTYuNTY1OUMxMzcuNTc4IDIxLjc3MzkgMTMzLjMzNCAyNi4wMzE2IDEyOC4wNTcgMjYuMDMxNlpNMTI4LjA1NiAxMC40MDc4QzEyNC42NTMgMTAuNDA3OCAxMjEuOSAxMy4xNDQ4IDEyMS45IDE2LjUyODFDMTIxLjkgMTkuOTExNCAxMjQuNjUzIDIyLjY0ODUgMTI4LjA1NiAyMi42NDg1QzEzMS40NTkgMjIuNjQ4NSAxMzQuMjEyIDE5LjkxMTQgMTM0LjIxMiAxNi41MjgxQzEzNC4yMTIgMTMuMTQ0OCAxMzEuNDU5IDEwLjQwNzggMTI4LjA1NiAxMC40MDc4WiIgZmlsbD0iIzAwNjlGRiIvPgo8L3N2Zz4K"
								alt="DigitalOcean logo"
							/>
						</div>
						<div className="pr-6 sm:pr-0">
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className="hidden lg:block z-0 shadow-md relative bg-white dark:bg-gray-900 dark:text-gray-300">
					<div className="container flex justify-between items-center mx-auto py-5">
						<div className="flex items-center gap-x-6">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTkxIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NzkgMzJWMjUuODAzNkMyMi43MTI5IDI1LjgwMzYgMjcuNzk4NSAxOS4zMDMyIDI1LjI3NDggMTIuMzg0NUMyNC4zNTcxIDkuODM3NTYgMjIuMjkyMyA3Ljc4NDc4IDE5LjczMDQgNi44NzI0M0MxMi43NzEzIDQuMzYzNDcgNi4yMzI2OCA5LjQ1NzQxIDYuMjMyNjggMTUuOTk1OUgwQzAgNS41NDE5MiAxMC4xNzExIC0yLjYzMTE5IDIxLjE4MzUgMC43OTAxMTJDMjYuMDAxMyAyLjI3MjY4IDI5LjgyNTEgNi4xMTIxNCAzMS4zNTQ2IDEwLjkwMkMzNC43OTU5IDIxLjg4ODEgMjYuNjEzMSAzMiAxNi4wOTc5IDMyWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NjggMjUuODQxNUg5LjkwMjM0VjE5LjY4MzFIMTYuMDk2OFYyNS44NDE1WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTAyNzEgMzAuNTkzNEg1LjEyMzA1VjI1Ljg0MTZIOS45MDI3MVYzMC41OTM0WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTI0MjkgMjUuODQxN0gxLjEwOTM4VjIxLjg4ODJINS4wODYwNVYyNS44NDE3SDUuMTI0MjlaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMjQyMyA5LjMwNTI3QzU1LjQwNjkgOC4wNTA3OSA1My4xMTI3IDcuNDA0NTQgNTAuNDM2MSA3LjQwNDU0SDQ0LjYyNFYyNS44MDM1SDUwLjQzNjFDNTMuMTEyNyAyNS44MDM1IDU1LjQwNjkgMjUuMTE5MyA1Ny4yNDIzIDIzLjc4ODhDNTguMjM2NSAyMy4wNjY1IDU5LjAzOTUgMjIuMDc4MSA1OS41NzQ4IDIwLjgyMzdDNjAuMTEwMSAxOS41NjkyIDYwLjQxNiAxOC4xMjQ2IDYwLjQxNiAxNi40OUM2MC40MTYgMTQuODU1NCA2MC4xNDg0IDEzLjQxMDggNTkuNTc0OCAxMi4xOTQ0QzU5LjAzOTUgMTAuOTM5OSA1OC4yNzQ3IDkuOTUxNTEgNTcuMjQyMyA5LjMwNTI3Wk00OC4wMjg4IDEwLjQ4MzhINDkuODY0MkM1MS44OTA4IDEwLjQ4MzggNTMuNTczMyAxMC44NjQgNTQuODM1MSAxMS42NjIzQzU2LjI0OTkgMTIuNDk4NiA1Ni45NzY0IDE0LjEzMzIgNTYuOTc2NCAxNi40NTIxQzU2Ljk3NjQgMTguODQ3IDU2LjI0OTkgMjAuNTE5NyA1NC44MzUxIDIxLjQzMkM1My42MTE1IDIyLjIzMDMgNTEuOTY3MyAyMi42NDg1IDQ5LjkwMjUgMjIuNjQ4NUg0OC4wNjcxVjEwLjQ4MzhINDguMDI4OFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NC41MDggNy4xMzg0M0M2My45MzQ1IDcuMTM4NDMgNjMuNDc1NiA3LjMyODUgNjMuMDkzMiA3LjcwODY0QzYyLjcxMDkgOC4wODg3OSA2Mi40ODE0IDguNTQ0OTYgNjIuNDgxNCA5LjExNTE4QzYyLjQ4MTQgOS42ODU0IDYyLjY3MjYgMTAuMTQxNiA2My4wNTUgMTAuNTU5N0M2My40Mzc0IDEwLjkzOTkgNjMuOTM0NSAxMS4xMjk5IDY0LjUwOCAxMS4xMjk5QzY1LjA4MTYgMTEuMTI5OSA2NS41NDA0IDEwLjkzOTkgNjUuOTYxIDEwLjU1OTdDNjYuMzQzNCAxMC4xNzk2IDY2LjUzNDYgOS42ODU0IDY2LjUzNDYgOS4xMTUxOEM2Ni41MzQ2IDguNTQ0OTYgNjYuMzQzNCA4LjA4ODc5IDY1Ljk2MSA3LjcwODY0QzY1LjU0MDQgNy4zNjY1MSA2NS4wNDMzIDcuMTM4NDMgNjQuNTA4IDcuMTM4NDNaIiBmaWxsPSIjMDA2OUZGIi8+CjxyZWN0IHg9IjYyLjgyNTIiIHk9IjEyLjgwMjUiIHdpZHRoPSIzLjI4ODQxIiBoZWlnaHQ9IjEyLjk2MjkiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OC4wMDI1IDEzLjkwNDlDNzcuMDA4NCAxMy4wMzA2IDc1Ljg5OTUgMTIuNTM2NCA3NC43MTQxIDEyLjUzNjRDNzIuOTE3IDEyLjUzNjQgNzEuMzg3NSAxMy4xNDQ2IDcwLjI0MDQgMTQuMzk5MUM2OS4wNTUgMTUuNjE1NiA2OC40ODE0IDE3LjE3NDEgNjguNDgxNCAxOS4wMzY5QzY4LjQ4MTQgMjAuODYxNSA2OS4wNTUgMjIuNDIwMSA3MC4yMDIxIDIzLjY3NDZDNzEuMzQ5MiAyNC44OTExIDcyLjg3ODcgMjUuNDk5MyA3NC42NzU5IDI1LjQ5OTNDNzUuOTM3NyAyNS40OTkzIDc3LjAwODQgMjUuMTU3MiA3Ny45MjYxIDI0LjQ3MjlWMjQuNzc3Qzc3LjkyNjEgMjUuODQxNCA3Ny42MjAyIDI2LjY3NzggNzcuMDg0OCAyNy4yNDhDNzYuNTExMyAyNy44MTgyIDc1LjcwODMgMjguMTIyMyA3NC43NTI0IDI4LjEyMjNDNzMuMjIyOSAyOC4xMjIzIDcyLjMwNTIgMjcuNTE0MSA3MS4xMTk4IDI1Ljk5MzVMNjguOTAyMSAyOC4xMjIzTDY4Ljk3ODUgMjguMTk4M0M2OS40NzU2IDI4Ljg4MjYgNzAuMjAyMSAyOS41Mjg5IDcxLjE1ODEgMzAuMTM3MUM3Mi4xMTQgMzAuNzQ1MyA3My4zNzU4IDMxLjA4NzQgNzQuNzkwNiAzMS4wODc0Qzc2Ljc0MDcgMzEuMDg3NCA3OC4zMDg0IDMwLjQ3OTIgNzkuNDU1NSAyOS4zMDA4QzgwLjYwMjcgMjguMTIyMyA4MS4yMTQ1IDI2LjUyNTcgODEuMjE0NSAyNC41ODdWMTIuODAyNUg3OC4wMDI1VjEzLjkwNDlaTTc3LjEyMzkgMjEuNTQ1OUM3Ni41NTAzIDIyLjE5MjIgNzUuODIzOCAyMi40OTYzIDc0Ljg2NzkgMjIuNDk2M0M3My45MTE5IDIyLjQ5NjMgNzMuMTg1NCAyMi4xOTIyIDcyLjY1MDEgMjEuNTQ1OUM3Mi4wNzY1IDIwLjg5OTcgNzEuODA4OSAyMC4wNjM0IDcxLjgwODkgMTguOTk5QzcxLjgwODkgMTcuOTM0NSA3Mi4wNzY1IDE3LjA5ODIgNzIuNjUwMSAxNi40NTJDNzMuMjIzNyAxNS44MDU3IDczLjk1MDIgMTUuNTAxNiA3NC44Njc5IDE1LjUwMTZDNzUuODIzOCAxNS41MDE2IDc2LjU1MDMgMTUuODA1NyA3Ny4xMjM5IDE2LjQ1MkM3Ny42OTc0IDE3LjA5ODIgNzcuOTY1MSAxNy45NzI2IDc3Ljk2NTEgMTguOTk5Qzc4LjAwMzMgMjAuMDYzNCA3Ny42OTc0IDIwLjg5OTcgNzcuMTIzOSAyMS41NDU5WiIgZmlsbD0iIzAwNjlGRiIvPgo8cmVjdCB4PSI4NC4wMDY4IiB5PSIxMi44MDI1IiB3aWR0aD0iMy4yODg0MSIgaGVpZ2h0PSIxMi45NjI5IiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuNjkxNiA3LjEzODQzQzg1LjExODEgNy4xMzg0MyA4NC42NTkyIDcuMzI4NSA4NC4yNzY4IDcuNzA4NjRDODMuODk0NSA4LjA4ODc5IDgzLjY2NSA4LjU0NDk2IDgzLjY2NSA5LjExNTE4QzgzLjY2NSA5LjY4NTQgODMuODU2MiAxMC4xNDE2IDg0LjIzODYgMTAuNTU5N0M4NC42MjEgMTAuOTM5OSA4NS4xMTgxIDExLjEyOTkgODUuNjkxNiAxMS4xMjk5Qzg2LjI2NTIgMTEuMTI5OSA4Ni43MjQgMTAuOTM5OSA4Ny4xNDQ2IDEwLjU1OTdDODcuNTI3IDEwLjE3OTYgODcuNzE4MiA5LjY4NTQgODcuNzE4MiA5LjExNTE4Qzg3LjcxODIgOC41NDQ5NiA4Ny41MjcgOC4wODg3OSA4Ny4xNDQ2IDcuNzA4NjRDODYuNzI0IDcuMzY2NTEgODYuMjY1MiA3LjEzODQzIDg1LjY5MTYgNy4xMzg0M1oiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NC40ODUgOS4zMDUxOEg5MS4yNzNWMTIuODAyNUg4OS4zOTk0VjE1Ljc2NzZIOTEuMjczVjIxLjEyNzdDOTEuMjczIDIyLjgwMDMgOTEuNjE3MiAyNC4wMTY4IDkyLjI2NzIgMjQuNzAxQzkyLjk1NTUgMjUuMzg1MyA5NC4xNDA4IDI1Ljc2NTQgOTUuNzg1IDI1Ljc2NTRDOTYuMzIwNCAyNS43NjU0IDk2Ljg1NTcgMjUuNzY1NCA5Ny4zOTEgMjUuNzI3NEg5Ny41NDRWMjIuNzYyM0w5Ni40MzUxIDIyLjgzODNDOTUuNjcwMyAyMi44MzgzIDk1LjEzNSAyMi42ODYzIDk0Ljg2NzMgMjIuNDIwMkM5NC41OTk3IDIyLjE1NDEgOTQuNDg1IDIxLjU4MzkgOTQuNDg1IDIwLjcwOTVWMTUuODA1N0g5Ny41NDRWMTIuODQwNUg5NC40ODVWOS4zMDUxOFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuOTE1IDcuMzY2NDZIMTE2LjIwM1YyNS43NjU1SDExMi45MTVWNy4zNjY0NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDkuMjc5IDIxLjEyNzdDMTQ4LjcwNSAyMS43NzM5IDE0OC4wOTMgMjIuMzQ0MSAxNDcuNjM0IDIyLjY0ODJDMTQ3LjE3NiAyMi45NTIzIDE0Ni42MDIgMjMuMDY2NCAxNDUuOTUyIDIzLjA2NjRDMTQ0Ljk5NiAyMy4wNjY0IDE0NC4xOTMgMjIuNzI0MyAxNDMuNTgxIDIyLjAwMkMxNDIuOTY5IDIxLjI3OTcgMTQyLjYyNSAyMC4zNjc0IDE0Mi42MjUgMTkuMjY0OUMxNDIuNjI1IDE4LjE2MjUgMTQyLjkzMSAxNy4yNTAyIDE0My41NDMgMTYuNTI3OUMxNDQuMTU1IDE1LjgwNTYgMTQ0Ljk1OCAxNS40NjM1IDE0NS45MTQgMTUuNDYzNUMxNDYuOTg0IDE1LjQ2MzUgMTQ4LjA5MyAxNi4xMDk3IDE0OS4wNDkgMTcuMjUwMkwxNTEuMjI5IDE1LjE5NzRDMTQ5LjgxNCAxMy4zNzI3IDE0OC4wMTcgMTIuNTM2NCAxNDUuODc1IDEyLjUzNjRDMTQ0LjA3OCAxMi41MzY0IDE0Mi41MTEgMTMuMTgyNiAxNDEuMjQ5IDE0LjQ3NTFDMTM5Ljk4NyAxNS43Njc2IDEzOS4zMzcgMTcuMzY0MiAxMzkuMzM3IDE5LjMwM0MxMzkuMzM3IDIxLjI0MTcgMTM5Ljk4NyAyMi44NzYzIDE0MS4yNDkgMjQuMTMwOEMxNDIuNTExIDI1LjQyMzMgMTQ0LjA3OCAyNi4wNjk1IDE0NS44NzUgMjYuMDY5NUMxNDguMjQ2IDI2LjA2OTUgMTUwLjE1OCAyNS4wNDMxIDE1MS40NTggMjMuMTgwNEwxNDkuMjc5IDIxLjEyNzdaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYyLjczOCAxNC42MjczQzE2Mi4yNzkgMTMuOTgxMSAxNjEuNjI5IDEzLjQ0ODkgMTYwLjg2NCAxMy4wNjg4QzE2MC4wOTkgMTIuNjg4NiAxNTkuMTgxIDEyLjQ5ODUgMTU4LjE0OSAxMi40OTg1QzE1Ni4zMTQgMTIuNDk4NSAxNTQuODIyIDEzLjE4MjggMTUzLjcxNCAxNC40NzUzQzE1Mi42MDUgMTUuODA1OCAxNTIuMDY5IDE3LjQ0MDQgMTUyLjA2OSAxOS4zNDExQzE1Mi4wNjkgMjEuMzE3OSAxNTIuNjgxIDIyLjkxNDUgMTUzLjg2NiAyNC4xNjlDMTU1LjA1MiAyNS4zODU0IDE1Ni42NTggMjYuMDMxNyAxNTguNjA4IDI2LjAzMTdDMTYwLjgyNiAyNi4wMzE3IDE2Mi42MjMgMjUuMTU3NCAxNjMuOTk5IDIzLjQwODdMMTY0LjA3NiAyMy4zMzI3TDE2MS45MzUgMjEuMjc5OUMxNjEuNzQzIDIxLjUwOCAxNjEuNDM3IDIxLjc3NDEgMTYxLjIwOCAyMi4wNDAyQzE2MC45MDIgMjIuMzQ0MyAxNjAuNTk2IDIyLjU3MjQgMTYwLjI1MiAyMi43MjQ0QzE1OS43NTUgMjIuOTUyNSAxNTkuMjIgMjMuMTA0NiAxNTguNjA4IDIzLjEwNDZDMTU3LjY5IDIzLjEwNDYgMTU2Ljk2NCAyMi44Mzg1IDE1Ni4zOSAyMi4zMDYzQzE1NS44NTUgMjEuODEyMSAxNTUuNTQ5IDIxLjE2NTggMTU1LjQ3MiAyMC4zMjk1SDE2NC4xNTJMMTY0LjE5MSAxOS4xNTExQzE2NC4xOTEgMTguMzE0OCAxNjQuMDc2IDE3LjUxNjQgMTYzLjg0NiAxNi43NTYyQzE2My41NDEgMTUuOTU3OSAxNjMuMTk2IDE1LjI3MzYgMTYyLjczOCAxNC42MjczWk0xNTUuNTg4IDE3LjY2ODZDMTU1Ljc0MSAxNy4wNjA0IDE1Ni4wNDYgMTYuNTI4MiAxNTYuNDI5IDE2LjE0OEMxNTYuODg4IDE1LjcyOTkgMTU3LjQ2MSAxNS41MDE4IDE1OC4xNSAxNS41MDE4QzE1OC45NTMgMTUuNTAxOCAxNTkuNTY0IDE1LjcyOTkgMTU5Ljk4NSAxNi4xODYxQzE2MC4zNjcgMTYuNjA0MiAxNjAuNTk3IDE3LjA5ODQgMTYwLjYzNSAxNy43MDY2SDE1NS41ODhWMTcuNjY4NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzUuMzE5IDEzLjc5MDlDMTc0LjMyNSAxMi45NTQ1IDE3Mi45NDkgMTIuNTM2NCAxNzEuMjI4IDEyLjUzNjRDMTcwLjExOSAxMi41MzY0IDE2OS4xMjUgMTIuNzY0NSAxNjguMjA3IDEzLjIyMDZDMTY3LjM2NiAxMy42Mzg4IDE2Ni41MjUgMTQuMzYxMSAxNjUuOTg5IDE1LjMxMTRMMTY2LjAyOCAxNS4zNDk0TDE2OC4xMzEgMTcuMzY0MkMxNjkuMDEgMTUuOTk1NyAxNjkuOTY2IDE1LjUwMTUgMTcxLjIyOCAxNS41MDE1QzE3MS45MTYgMTUuNTAxNSAxNzIuNDkgMTUuNjkxNiAxNzIuOTEgMTYuMDMzN0MxNzMuMzMxIDE2LjM3NTggMTczLjU2IDE2LjgzMiAxNzMuNTYgMTcuNDQwMlYxOC4wODY1QzE3Mi43NTcgMTcuODU4NCAxNzEuOTU0IDE3LjcwNjMgMTcxLjE1MSAxNy43MDYzQzE2OS41MDcgMTcuNzA2MyAxNjguMjA3IDE4LjA4NjUgMTY3LjIxMyAxOC44NDY4QzE2Ni4yMTkgMTkuNjA3MSAxNjUuNzIyIDIwLjcwOTUgMTY1LjcyMiAyMi4wNzhDMTY1LjcyMiAyMy4yOTQ1IDE2Ni4xNDIgMjQuMjgyOSAxNjYuOTg0IDI1LjAwNTFDMTY3LjgyNSAyNS43Mjc0IDE2OC44OTUgMjYuMDY5NSAxNzAuMTU3IDI2LjA2OTVDMTcxLjQxOSAyNi4wNjk1IDE3Mi41NjYgMjUuNTc1MyAxNzMuNjM3IDI0LjcwMVYyNS43NjU0SDE3Ni44NDlWMTcuNDQwMkMxNzYuODEgMTUuODQzNiAxNzYuMzEzIDE0LjYyNzIgMTc1LjMxOSAxMy43OTA5Wk0xNjkuNTA2IDIwLjgyMzRDMTY5Ljg4OSAyMC41NTczIDE3MC4zODYgMjAuNDQzMyAxNzEuMDc0IDIwLjQ0MzNDMTcxLjg3NyAyMC40NDMzIDE3Mi43MTggMjAuNTk1NCAxNzMuNTU5IDIwLjg5OTVWMjIuMTU0QzE3Mi44MzMgMjIuODAwMiAxNzEuODc3IDIzLjE0MjMgMTcwLjczIDIzLjE0MjNDMTcwLjE1NiAyMy4xNDIzIDE2OS43MzYgMjMuMDI4MyAxNjkuNDMgMjIuNzYyMkMxNjkuMTI0IDIyLjUzNDEgMTY4Ljk3MSAyMi4yMyAxNjguOTcxIDIxLjgxMThDMTY4Ljk3MSAyMS4zOTM3IDE2OS4xMjQgMjEuMDUxNSAxNjkuNTA2IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTg5LjQyOCAxNC4wMTkxQzE4OC41MSAxMi45OTI3IDE4Ny4yNDggMTIuNDk4NSAxODUuNjA0IDEyLjQ5ODVDMTg0LjMwNCAxMi40OTg1IDE4My4yMzQgMTIuODc4NyAxODIuNDY5IDEzLjYwMVYxMi44MDI3SDE3OS4yNTdWMjUuNzY1NkgxODIuNTQ1VjE4LjYxODlDMTgyLjU0NSAxNy42MzA1IDE4Mi43NzUgMTYuODcwMiAxODMuMjM0IDE2LjNDMTgzLjY5MiAxNS43Mjk4IDE4NC4zNDIgMTUuNDYzNyAxODUuMTg0IDE1LjQ2MzdDMTg1LjkxIDE1LjQ2MzcgMTg2LjQ4NCAxNS42OTE4IDE4Ni45MDQgMTYuMTg1OUMxODcuMzI1IDE2LjY4MDEgMTg3LjUxNiAxNy4zNjQ0IDE4Ny41MTYgMTguMjM4N1YyNS43Mjc2SDE5MC44MDRWMTguMjM4N0MxOTAuODA0IDE2LjQ1MiAxOTAuMzQ2IDE1LjA0NTUgMTg5LjQyOCAxNC4wMTkxWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwOC43ODggMTMuNzkwOUMxMDcuNzk0IDEyLjk1NDUgMTA2LjQxNyAxMi41MzY0IDEwNC42OTcgMTIuNTM2NEMxMDMuNTg4IDEyLjUzNjQgMTAyLjU5NCAxMi43NjQ1IDEwMS42NzYgMTMuMjIwNkMxMDAuODM1IDEzLjYzODggOTkuOTkzNCAxNC4zNjExIDk5LjQ1ODEgMTUuMzExNEw5OS40OTYzIDE1LjM0OTRMMTAxLjU5OSAxNy4zNjQyQzEwMi40NzkgMTUuOTk1NyAxMDMuNDM1IDE1LjUwMTUgMTA0LjY5NyAxNS41MDE1QzEwNS4zODUgMTUuNTAxNSAxMDUuOTU4IDE1LjY5MTYgMTA2LjM3OSAxNi4wMzM3QzEwNi44IDE2LjM3NTggMTA3LjAyOSAxNi44MzIgMTA3LjAyOSAxNy40NDAyVjE4LjA4NjVDMTA2LjIyNiAxNy44NTg0IDEwNS40MjMgMTcuNzA2MyAxMDQuNjIgMTcuNzA2M0MxMDIuOTc2IDE3LjcwNjMgMTAxLjY3NiAxOC4wODY1IDEwMC42ODIgMTguODQ2OEM5OS42ODc1IDE5LjYwNzEgOTkuMTkwNCAyMC43MDk1IDk5LjE5MDQgMjIuMDc4Qzk5LjE5MDQgMjMuMjk0NSA5OS42MTEgMjQuMjgyOSAxMDAuNDUyIDI1LjAwNTFDMTAxLjI5MyAyNS43Mjc0IDEwMi4zNjQgMjYuMDY5NSAxMDMuNjI2IDI2LjA2OTVDMTA0Ljg4OCAyNi4wNjk1IDEwNi4wMzUgMjUuNTc1MyAxMDcuMTA2IDI0LjcwMVYyNS43NjU0SDExMC4zMTdWMTcuNDQwMkMxMTAuMjc5IDE1Ljg0MzYgMTA5Ljc4MiAxNC42MjcyIDEwOC43ODggMTMuNzkwOVpNMTAyLjk3NSAyMC44MjM0QzEwMy4zNTggMjAuNTU3MyAxMDMuODU1IDIwLjQ0MzMgMTA0LjU0MyAyMC40NDMzQzEwNS4zNDYgMjAuNDQzMyAxMDYuMTg3IDIwLjU5NTQgMTA3LjAyOCAyMC44OTk1VjIyLjE1NEMxMDYuMzAyIDIyLjgwMDIgMTA1LjM0NiAyMy4xNDIzIDEwNC4xOTkgMjMuMTQyM0MxMDMuNjI1IDIzLjE0MjMgMTAzLjIwNSAyMy4wMjgzIDEwMi44OTkgMjIuNzYyMkMxMDIuNTkzIDIyLjUzNDEgMTAyLjQ0IDIyLjIzIDEwMi40NCAyMS44MTE4QzEwMi40NCAyMS4zOTM3IDEwMi41OTMgMjEuMDUxNSAxMDIuOTc1IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4LjA1NyAyNi4wMzE2QzEyMi44MTkgMjYuMDMxNiAxMTguNTM2IDIxLjc3MzkgMTE4LjUzNiAxNi41NjU5QzExOC41MzYgMTEuMzU4IDEyMi44MTkgNy4xMDAzNCAxMjguMDU3IDcuMTAwMzRDMTMzLjI5NiA3LjEwMDM0IDEzNy41NzggMTEuMzU4IDEzNy41NzggMTYuNTY1OUMxMzcuNTc4IDIxLjc3MzkgMTMzLjMzNCAyNi4wMzE2IDEyOC4wNTcgMjYuMDMxNlpNMTI4LjA1NiAxMC40MDc4QzEyNC42NTMgMTAuNDA3OCAxMjEuOSAxMy4xNDQ4IDEyMS45IDE2LjUyODFDMTIxLjkgMTkuOTExNCAxMjQuNjUzIDIyLjY0ODUgMTI4LjA1NiAyMi42NDg1QzEzMS40NTkgMjIuNjQ4NSAxMzQuMjEyIDE5LjkxMTQgMTM0LjIxMiAxNi41MjgxQzEzNC4yMTIgMTMuMTQ0OCAxMzEuNDU5IDEwLjQwNzggMTI4LjA1NiAxMC40MDc4WiIgZmlsbD0iIzAwNjlGRiIvPgo8L3N2Zz4K"
								alt="DigitalOcean logo"
							/>

							<div className="flex items-center">
								<a href="" className="mr-2">
									Products
								</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>

							<div className="flex items-center">
								<a href="" className="mr-2">
									Solutions
								</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
							<a href="">Marketplace</a>

							<div className="flex items-center">
								<a href="" className="mr-2">
									Community
								</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
							<a href="">Pricing</a>
						</div>

						<div className="flex gap-x-2">
							<a href="" className="btn-white">
								Log In
							</a>
							<a href="" className="btn-blue">
								Sign Up
							</a>
						</div>
					</div>
				</div>

				<div className="hidden relative z-10 bg-white px-5 pt-5 pb-8 shadow">
					<div className="flex justify-between py-3 border-b border-gray-200">
						<a href="#" className="font-medium">
							Products
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<div className="flex justify-between py-3 border-b border-gray-200">
						<a href="#" className="font-medium">
							Solutions
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<div className="flex justify-between py-3 border-b border-gray-200">
						<a href="#" className="font-medium">
							Marketplace
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<div className="flex justify-between py-3 border-b border-gray-200">
						<a href="#" className="font-medium">
							Community
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<div className="flex justify-between py-3 border-b border-gray-200">
						<a href="#" className="font-medium">
							Pricing
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>

					<button className="btn-blue w-full mt-5">Sign Up</button>
					<button className="btn-white w-full mt-5">Sign Up</button>
					<button className="btn-white-blue w-full mt-8">
						We're Hiring
					</button>
					<button className="btn-white w-full mt-5">Blog</button>
					<button className="btn-white w-full mt-5">Docs</button>
					<button className="btn-white w-full mt-5">
						Get Support
					</button>
				</div>

				<div className="hidden relative z-10 bg-white pt-10 shadow">
					<div className="font-bold uppercase pb-10 px-28">
						OUR PRODUCTS
					</div>
					<div className="flex px-28">
						<div className="w-1/3">
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Website Hosting
								</h3>
								<p className="text-gray-600">
									Easily and reliably host a website
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Web & Mobile Apps
								</h3>
								<p className="text-gray-600">
									Quickly build and reliably run your apps
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Video Streaming Hosting
								</h3>
								<p className="text-gray-600">
									Create a highly available streaming service
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Gaming Development
								</h3>
								<p className="text-gray-600">
									Scale your game as fast as you want
								</p>
							</div>
						</div>
						<div className="w-1/3">
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Website Hosting
								</h3>
								<p className="text-gray-600">
									Easily and reliably host a website
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Web & Mobile Apps
								</h3>
								<p className="text-gray-600">
									Quickly build and reliably run your apps
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Video Streaming Hosting
								</h3>
								<p className="text-gray-600">
									Create a highly available streaming service
								</p>
							</div>
						</div>
						<div className="w-1/3">
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Website Hosting
								</h3>
								<p className="text-gray-600">
									Easily and reliably host a website
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Web & Mobile Apps
								</h3>
								<p className="text-gray-600">
									Quickly build and reliably run your apps
								</p>
							</div>
							<div className="group px-3 py-4 hover:bg-sky-100 rounded-lg">
								<h3 className="font-medium text-xl pb-3 group-hover:text-do-blue-light">
									Video Streaming Hosting
								</h3>
								<p className="text-gray-600">
									Create a highly available streaming service
								</p>
							</div>
						</div>
					</div>
					<a
						href="#"
						className="flex justify-center text-gray-400 border-t border-gray-300 py-2 items-center"
					>
						See solutions
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="ml-2 h-4 w-4"
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
					</a>
				</div>
			</div>

			{/* <div className="fixed bg-white z-10 w-full">
				<div className="bg-do-blue-dark text-gray-300 py-2 text-sm">
					<div className="container  flex mx-auto justify-between">
						<div className="flex items-center">
							<p>
								Boost availability, performance, and reliability
								with more powerful, upgraded Load Balancers!
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
						<div className="flex gap-x-4 items-center">
							<a
								href=""
								className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
							>
								We're Hiring
							</a>
							<a href="" className="hover:text-white">
								Blog
							</a>
							<a href="" className="hover:text-white">
								Docs
							</a>
							<a href="" className="hover:text-white">
								Get Support
							</a>
							<a href="" className="hover:text-white">
								Sales
							</a>
						</div>
					</div>
				</div>
				<div className="shadow-md">
					<div className="container flex justify-between items-center mx-auto py-5">
						<div className="flex items-center gap-x-6 font-semibold text-gray-600">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTkxIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NzkgMzJWMjUuODAzNkMyMi43MTI5IDI1LjgwMzYgMjcuNzk4NSAxOS4zMDMyIDI1LjI3NDggMTIuMzg0NUMyNC4zNTcxIDkuODM3NTYgMjIuMjkyMyA3Ljc4NDc4IDE5LjczMDQgNi44NzI0M0MxMi43NzEzIDQuMzYzNDcgNi4yMzI2OCA5LjQ1NzQxIDYuMjMyNjggMTUuOTk1OUgwQzAgNS41NDE5MiAxMC4xNzExIC0yLjYzMTE5IDIxLjE4MzUgMC43OTAxMTJDMjYuMDAxMyAyLjI3MjY4IDI5LjgyNTEgNi4xMTIxNCAzMS4zNTQ2IDEwLjkwMkMzNC43OTU5IDIxLjg4ODEgMjYuNjEzMSAzMiAxNi4wOTc5IDMyWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjA5NjggMjUuODQxNUg5LjkwMjM0VjE5LjY4MzFIMTYuMDk2OFYyNS44NDE1WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTAyNzEgMzAuNTkzNEg1LjEyMzA1VjI1Ljg0MTZIOS45MDI3MVYzMC41OTM0WiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTI0MjkgMjUuODQxN0gxLjEwOTM4VjIxLjg4ODJINS4wODYwNVYyNS44NDE3SDUuMTI0MjlaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMjQyMyA5LjMwNTI3QzU1LjQwNjkgOC4wNTA3OSA1My4xMTI3IDcuNDA0NTQgNTAuNDM2MSA3LjQwNDU0SDQ0LjYyNFYyNS44MDM1SDUwLjQzNjFDNTMuMTEyNyAyNS44MDM1IDU1LjQwNjkgMjUuMTE5MyA1Ny4yNDIzIDIzLjc4ODhDNTguMjM2NSAyMy4wNjY1IDU5LjAzOTUgMjIuMDc4MSA1OS41NzQ4IDIwLjgyMzdDNjAuMTEwMSAxOS41NjkyIDYwLjQxNiAxOC4xMjQ2IDYwLjQxNiAxNi40OUM2MC40MTYgMTQuODU1NCA2MC4xNDg0IDEzLjQxMDggNTkuNTc0OCAxMi4xOTQ0QzU5LjAzOTUgMTAuOTM5OSA1OC4yNzQ3IDkuOTUxNTEgNTcuMjQyMyA5LjMwNTI3Wk00OC4wMjg4IDEwLjQ4MzhINDkuODY0MkM1MS44OTA4IDEwLjQ4MzggNTMuNTczMyAxMC44NjQgNTQuODM1MSAxMS42NjIzQzU2LjI0OTkgMTIuNDk4NiA1Ni45NzY0IDE0LjEzMzIgNTYuOTc2NCAxNi40NTIxQzU2Ljk3NjQgMTguODQ3IDU2LjI0OTkgMjAuNTE5NyA1NC44MzUxIDIxLjQzMkM1My42MTE1IDIyLjIzMDMgNTEuOTY3MyAyMi42NDg1IDQ5LjkwMjUgMjIuNjQ4NUg0OC4wNjcxVjEwLjQ4MzhINDguMDI4OFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NC41MDggNy4xMzg0M0M2My45MzQ1IDcuMTM4NDMgNjMuNDc1NiA3LjMyODUgNjMuMDkzMiA3LjcwODY0QzYyLjcxMDkgOC4wODg3OSA2Mi40ODE0IDguNTQ0OTYgNjIuNDgxNCA5LjExNTE4QzYyLjQ4MTQgOS42ODU0IDYyLjY3MjYgMTAuMTQxNiA2My4wNTUgMTAuNTU5N0M2My40Mzc0IDEwLjkzOTkgNjMuOTM0NSAxMS4xMjk5IDY0LjUwOCAxMS4xMjk5QzY1LjA4MTYgMTEuMTI5OSA2NS41NDA0IDEwLjkzOTkgNjUuOTYxIDEwLjU1OTdDNjYuMzQzNCAxMC4xNzk2IDY2LjUzNDYgOS42ODU0IDY2LjUzNDYgOS4xMTUxOEM2Ni41MzQ2IDguNTQ0OTYgNjYuMzQzNCA4LjA4ODc5IDY1Ljk2MSA3LjcwODY0QzY1LjU0MDQgNy4zNjY1MSA2NS4wNDMzIDcuMTM4NDMgNjQuNTA4IDcuMTM4NDNaIiBmaWxsPSIjMDA2OUZGIi8+CjxyZWN0IHg9IjYyLjgyNTIiIHk9IjEyLjgwMjUiIHdpZHRoPSIzLjI4ODQxIiBoZWlnaHQ9IjEyLjk2MjkiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OC4wMDI1IDEzLjkwNDlDNzcuMDA4NCAxMy4wMzA2IDc1Ljg5OTUgMTIuNTM2NCA3NC43MTQxIDEyLjUzNjRDNzIuOTE3IDEyLjUzNjQgNzEuMzg3NSAxMy4xNDQ2IDcwLjI0MDQgMTQuMzk5MUM2OS4wNTUgMTUuNjE1NiA2OC40ODE0IDE3LjE3NDEgNjguNDgxNCAxOS4wMzY5QzY4LjQ4MTQgMjAuODYxNSA2OS4wNTUgMjIuNDIwMSA3MC4yMDIxIDIzLjY3NDZDNzEuMzQ5MiAyNC44OTExIDcyLjg3ODcgMjUuNDk5MyA3NC42NzU5IDI1LjQ5OTNDNzUuOTM3NyAyNS40OTkzIDc3LjAwODQgMjUuMTU3MiA3Ny45MjYxIDI0LjQ3MjlWMjQuNzc3Qzc3LjkyNjEgMjUuODQxNCA3Ny42MjAyIDI2LjY3NzggNzcuMDg0OCAyNy4yNDhDNzYuNTExMyAyNy44MTgyIDc1LjcwODMgMjguMTIyMyA3NC43NTI0IDI4LjEyMjNDNzMuMjIyOSAyOC4xMjIzIDcyLjMwNTIgMjcuNTE0MSA3MS4xMTk4IDI1Ljk5MzVMNjguOTAyMSAyOC4xMjIzTDY4Ljk3ODUgMjguMTk4M0M2OS40NzU2IDI4Ljg4MjYgNzAuMjAyMSAyOS41Mjg5IDcxLjE1ODEgMzAuMTM3MUM3Mi4xMTQgMzAuNzQ1MyA3My4zNzU4IDMxLjA4NzQgNzQuNzkwNiAzMS4wODc0Qzc2Ljc0MDcgMzEuMDg3NCA3OC4zMDg0IDMwLjQ3OTIgNzkuNDU1NSAyOS4zMDA4QzgwLjYwMjcgMjguMTIyMyA4MS4yMTQ1IDI2LjUyNTcgODEuMjE0NSAyNC41ODdWMTIuODAyNUg3OC4wMDI1VjEzLjkwNDlaTTc3LjEyMzkgMjEuNTQ1OUM3Ni41NTAzIDIyLjE5MjIgNzUuODIzOCAyMi40OTYzIDc0Ljg2NzkgMjIuNDk2M0M3My45MTE5IDIyLjQ5NjMgNzMuMTg1NCAyMi4xOTIyIDcyLjY1MDEgMjEuNTQ1OUM3Mi4wNzY1IDIwLjg5OTcgNzEuODA4OSAyMC4wNjM0IDcxLjgwODkgMTguOTk5QzcxLjgwODkgMTcuOTM0NSA3Mi4wNzY1IDE3LjA5ODIgNzIuNjUwMSAxNi40NTJDNzMuMjIzNyAxNS44MDU3IDczLjk1MDIgMTUuNTAxNiA3NC44Njc5IDE1LjUwMTZDNzUuODIzOCAxNS41MDE2IDc2LjU1MDMgMTUuODA1NyA3Ny4xMjM5IDE2LjQ1MkM3Ny42OTc0IDE3LjA5ODIgNzcuOTY1MSAxNy45NzI2IDc3Ljk2NTEgMTguOTk5Qzc4LjAwMzMgMjAuMDYzNCA3Ny42OTc0IDIwLjg5OTcgNzcuMTIzOSAyMS41NDU5WiIgZmlsbD0iIzAwNjlGRiIvPgo8cmVjdCB4PSI4NC4wMDY4IiB5PSIxMi44MDI1IiB3aWR0aD0iMy4yODg0MSIgaGVpZ2h0PSIxMi45NjI5IiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuNjkxNiA3LjEzODQzQzg1LjExODEgNy4xMzg0MyA4NC42NTkyIDcuMzI4NSA4NC4yNzY4IDcuNzA4NjRDODMuODk0NSA4LjA4ODc5IDgzLjY2NSA4LjU0NDk2IDgzLjY2NSA5LjExNTE4QzgzLjY2NSA5LjY4NTQgODMuODU2MiAxMC4xNDE2IDg0LjIzODYgMTAuNTU5N0M4NC42MjEgMTAuOTM5OSA4NS4xMTgxIDExLjEyOTkgODUuNjkxNiAxMS4xMjk5Qzg2LjI2NTIgMTEuMTI5OSA4Ni43MjQgMTAuOTM5OSA4Ny4xNDQ2IDEwLjU1OTdDODcuNTI3IDEwLjE3OTYgODcuNzE4MiA5LjY4NTQgODcuNzE4MiA5LjExNTE4Qzg3LjcxODIgOC41NDQ5NiA4Ny41MjcgOC4wODg3OSA4Ny4xNDQ2IDcuNzA4NjRDODYuNzI0IDcuMzY2NTEgODYuMjY1MiA3LjEzODQzIDg1LjY5MTYgNy4xMzg0M1oiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NC40ODUgOS4zMDUxOEg5MS4yNzNWMTIuODAyNUg4OS4zOTk0VjE1Ljc2NzZIOTEuMjczVjIxLjEyNzdDOTEuMjczIDIyLjgwMDMgOTEuNjE3MiAyNC4wMTY4IDkyLjI2NzIgMjQuNzAxQzkyLjk1NTUgMjUuMzg1MyA5NC4xNDA4IDI1Ljc2NTQgOTUuNzg1IDI1Ljc2NTRDOTYuMzIwNCAyNS43NjU0IDk2Ljg1NTcgMjUuNzY1NCA5Ny4zOTEgMjUuNzI3NEg5Ny41NDRWMjIuNzYyM0w5Ni40MzUxIDIyLjgzODNDOTUuNjcwMyAyMi44MzgzIDk1LjEzNSAyMi42ODYzIDk0Ljg2NzMgMjIuNDIwMkM5NC41OTk3IDIyLjE1NDEgOTQuNDg1IDIxLjU4MzkgOTQuNDg1IDIwLjcwOTVWMTUuODA1N0g5Ny41NDRWMTIuODQwNUg5NC40ODVWOS4zMDUxOFoiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTIuOTE1IDcuMzY2NDZIMTE2LjIwM1YyNS43NjU1SDExMi45MTVWNy4zNjY0NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDkuMjc5IDIxLjEyNzdDMTQ4LjcwNSAyMS43NzM5IDE0OC4wOTMgMjIuMzQ0MSAxNDcuNjM0IDIyLjY0ODJDMTQ3LjE3NiAyMi45NTIzIDE0Ni42MDIgMjMuMDY2NCAxNDUuOTUyIDIzLjA2NjRDMTQ0Ljk5NiAyMy4wNjY0IDE0NC4xOTMgMjIuNzI0MyAxNDMuNTgxIDIyLjAwMkMxNDIuOTY5IDIxLjI3OTcgMTQyLjYyNSAyMC4zNjc0IDE0Mi42MjUgMTkuMjY0OUMxNDIuNjI1IDE4LjE2MjUgMTQyLjkzMSAxNy4yNTAyIDE0My41NDMgMTYuNTI3OUMxNDQuMTU1IDE1LjgwNTYgMTQ0Ljk1OCAxNS40NjM1IDE0NS45MTQgMTUuNDYzNUMxNDYuOTg0IDE1LjQ2MzUgMTQ4LjA5MyAxNi4xMDk3IDE0OS4wNDkgMTcuMjUwMkwxNTEuMjI5IDE1LjE5NzRDMTQ5LjgxNCAxMy4zNzI3IDE0OC4wMTcgMTIuNTM2NCAxNDUuODc1IDEyLjUzNjRDMTQ0LjA3OCAxMi41MzY0IDE0Mi41MTEgMTMuMTgyNiAxNDEuMjQ5IDE0LjQ3NTFDMTM5Ljk4NyAxNS43Njc2IDEzOS4zMzcgMTcuMzY0MiAxMzkuMzM3IDE5LjMwM0MxMzkuMzM3IDIxLjI0MTcgMTM5Ljk4NyAyMi44NzYzIDE0MS4yNDkgMjQuMTMwOEMxNDIuNTExIDI1LjQyMzMgMTQ0LjA3OCAyNi4wNjk1IDE0NS44NzUgMjYuMDY5NUMxNDguMjQ2IDI2LjA2OTUgMTUwLjE1OCAyNS4wNDMxIDE1MS40NTggMjMuMTgwNEwxNDkuMjc5IDIxLjEyNzdaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYyLjczOCAxNC42MjczQzE2Mi4yNzkgMTMuOTgxMSAxNjEuNjI5IDEzLjQ0ODkgMTYwLjg2NCAxMy4wNjg4QzE2MC4wOTkgMTIuNjg4NiAxNTkuMTgxIDEyLjQ5ODUgMTU4LjE0OSAxMi40OTg1QzE1Ni4zMTQgMTIuNDk4NSAxNTQuODIyIDEzLjE4MjggMTUzLjcxNCAxNC40NzUzQzE1Mi42MDUgMTUuODA1OCAxNTIuMDY5IDE3LjQ0MDQgMTUyLjA2OSAxOS4zNDExQzE1Mi4wNjkgMjEuMzE3OSAxNTIuNjgxIDIyLjkxNDUgMTUzLjg2NiAyNC4xNjlDMTU1LjA1MiAyNS4zODU0IDE1Ni42NTggMjYuMDMxNyAxNTguNjA4IDI2LjAzMTdDMTYwLjgyNiAyNi4wMzE3IDE2Mi42MjMgMjUuMTU3NCAxNjMuOTk5IDIzLjQwODdMMTY0LjA3NiAyMy4zMzI3TDE2MS45MzUgMjEuMjc5OUMxNjEuNzQzIDIxLjUwOCAxNjEuNDM3IDIxLjc3NDEgMTYxLjIwOCAyMi4wNDAyQzE2MC45MDIgMjIuMzQ0MyAxNjAuNTk2IDIyLjU3MjQgMTYwLjI1MiAyMi43MjQ0QzE1OS43NTUgMjIuOTUyNSAxNTkuMjIgMjMuMTA0NiAxNTguNjA4IDIzLjEwNDZDMTU3LjY5IDIzLjEwNDYgMTU2Ljk2NCAyMi44Mzg1IDE1Ni4zOSAyMi4zMDYzQzE1NS44NTUgMjEuODEyMSAxNTUuNTQ5IDIxLjE2NTggMTU1LjQ3MiAyMC4zMjk1SDE2NC4xNTJMMTY0LjE5MSAxOS4xNTExQzE2NC4xOTEgMTguMzE0OCAxNjQuMDc2IDE3LjUxNjQgMTYzLjg0NiAxNi43NTYyQzE2My41NDEgMTUuOTU3OSAxNjMuMTk2IDE1LjI3MzYgMTYyLjczOCAxNC42MjczWk0xNTUuNTg4IDE3LjY2ODZDMTU1Ljc0MSAxNy4wNjA0IDE1Ni4wNDYgMTYuNTI4MiAxNTYuNDI5IDE2LjE0OEMxNTYuODg4IDE1LjcyOTkgMTU3LjQ2MSAxNS41MDE4IDE1OC4xNSAxNS41MDE4QzE1OC45NTMgMTUuNTAxOCAxNTkuNTY0IDE1LjcyOTkgMTU5Ljk4NSAxNi4xODYxQzE2MC4zNjcgMTYuNjA0MiAxNjAuNTk3IDE3LjA5ODQgMTYwLjYzNSAxNy43MDY2SDE1NS41ODhWMTcuNjY4NloiIGZpbGw9IiMwMDY5RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzUuMzE5IDEzLjc5MDlDMTc0LjMyNSAxMi45NTQ1IDE3Mi45NDkgMTIuNTM2NCAxNzEuMjI4IDEyLjUzNjRDMTcwLjExOSAxMi41MzY0IDE2OS4xMjUgMTIuNzY0NSAxNjguMjA3IDEzLjIyMDZDMTY3LjM2NiAxMy42Mzg4IDE2Ni41MjUgMTQuMzYxMSAxNjUuOTg5IDE1LjMxMTRMMTY2LjAyOCAxNS4zNDk0TDE2OC4xMzEgMTcuMzY0MkMxNjkuMDEgMTUuOTk1NyAxNjkuOTY2IDE1LjUwMTUgMTcxLjIyOCAxNS41MDE1QzE3MS45MTYgMTUuNTAxNSAxNzIuNDkgMTUuNjkxNiAxNzIuOTEgMTYuMDMzN0MxNzMuMzMxIDE2LjM3NTggMTczLjU2IDE2LjgzMiAxNzMuNTYgMTcuNDQwMlYxOC4wODY1QzE3Mi43NTcgMTcuODU4NCAxNzEuOTU0IDE3LjcwNjMgMTcxLjE1MSAxNy43MDYzQzE2OS41MDcgMTcuNzA2MyAxNjguMjA3IDE4LjA4NjUgMTY3LjIxMyAxOC44NDY4QzE2Ni4yMTkgMTkuNjA3MSAxNjUuNzIyIDIwLjcwOTUgMTY1LjcyMiAyMi4wNzhDMTY1LjcyMiAyMy4yOTQ1IDE2Ni4xNDIgMjQuMjgyOSAxNjYuOTg0IDI1LjAwNTFDMTY3LjgyNSAyNS43Mjc0IDE2OC44OTUgMjYuMDY5NSAxNzAuMTU3IDI2LjA2OTVDMTcxLjQxOSAyNi4wNjk1IDE3Mi41NjYgMjUuNTc1MyAxNzMuNjM3IDI0LjcwMVYyNS43NjU0SDE3Ni44NDlWMTcuNDQwMkMxNzYuODEgMTUuODQzNiAxNzYuMzEzIDE0LjYyNzIgMTc1LjMxOSAxMy43OTA5Wk0xNjkuNTA2IDIwLjgyMzRDMTY5Ljg4OSAyMC41NTczIDE3MC4zODYgMjAuNDQzMyAxNzEuMDc0IDIwLjQ0MzNDMTcxLjg3NyAyMC40NDMzIDE3Mi43MTggMjAuNTk1NCAxNzMuNTU5IDIwLjg5OTVWMjIuMTU0QzE3Mi44MzMgMjIuODAwMiAxNzEuODc3IDIzLjE0MjMgMTcwLjczIDIzLjE0MjNDMTcwLjE1NiAyMy4xNDIzIDE2OS43MzYgMjMuMDI4MyAxNjkuNDMgMjIuNzYyMkMxNjkuMTI0IDIyLjUzNDEgMTY4Ljk3MSAyMi4yMyAxNjguOTcxIDIxLjgxMThDMTY4Ljk3MSAyMS4zOTM3IDE2OS4xMjQgMjEuMDUxNSAxNjkuNTA2IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTg5LjQyOCAxNC4wMTkxQzE4OC41MSAxMi45OTI3IDE4Ny4yNDggMTIuNDk4NSAxODUuNjA0IDEyLjQ5ODVDMTg0LjMwNCAxMi40OTg1IDE4My4yMzQgMTIuODc4NyAxODIuNDY5IDEzLjYwMVYxMi44MDI3SDE3OS4yNTdWMjUuNzY1NkgxODIuNTQ1VjE4LjYxODlDMTgyLjU0NSAxNy42MzA1IDE4Mi43NzUgMTYuODcwMiAxODMuMjM0IDE2LjNDMTgzLjY5MiAxNS43Mjk4IDE4NC4zNDIgMTUuNDYzNyAxODUuMTg0IDE1LjQ2MzdDMTg1LjkxIDE1LjQ2MzcgMTg2LjQ4NCAxNS42OTE4IDE4Ni45MDQgMTYuMTg1OUMxODcuMzI1IDE2LjY4MDEgMTg3LjUxNiAxNy4zNjQ0IDE4Ny41MTYgMTguMjM4N1YyNS43Mjc2SDE5MC44MDRWMTguMjM4N0MxOTAuODA0IDE2LjQ1MiAxOTAuMzQ2IDE1LjA0NTUgMTg5LjQyOCAxNC4wMTkxWiIgZmlsbD0iIzAwNjlGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwOC43ODggMTMuNzkwOUMxMDcuNzk0IDEyLjk1NDUgMTA2LjQxNyAxMi41MzY0IDEwNC42OTcgMTIuNTM2NEMxMDMuNTg4IDEyLjUzNjQgMTAyLjU5NCAxMi43NjQ1IDEwMS42NzYgMTMuMjIwNkMxMDAuODM1IDEzLjYzODggOTkuOTkzNCAxNC4zNjExIDk5LjQ1ODEgMTUuMzExNEw5OS40OTYzIDE1LjM0OTRMMTAxLjU5OSAxNy4zNjQyQzEwMi40NzkgMTUuOTk1NyAxMDMuNDM1IDE1LjUwMTUgMTA0LjY5NyAxNS41MDE1QzEwNS4zODUgMTUuNTAxNSAxMDUuOTU4IDE1LjY5MTYgMTA2LjM3OSAxNi4wMzM3QzEwNi44IDE2LjM3NTggMTA3LjAyOSAxNi44MzIgMTA3LjAyOSAxNy40NDAyVjE4LjA4NjVDMTA2LjIyNiAxNy44NTg0IDEwNS40MjMgMTcuNzA2MyAxMDQuNjIgMTcuNzA2M0MxMDIuOTc2IDE3LjcwNjMgMTAxLjY3NiAxOC4wODY1IDEwMC42ODIgMTguODQ2OEM5OS42ODc1IDE5LjYwNzEgOTkuMTkwNCAyMC43MDk1IDk5LjE5MDQgMjIuMDc4Qzk5LjE5MDQgMjMuMjk0NSA5OS42MTEgMjQuMjgyOSAxMDAuNDUyIDI1LjAwNTFDMTAxLjI5MyAyNS43Mjc0IDEwMi4zNjQgMjYuMDY5NSAxMDMuNjI2IDI2LjA2OTVDMTA0Ljg4OCAyNi4wNjk1IDEwNi4wMzUgMjUuNTc1MyAxMDcuMTA2IDI0LjcwMVYyNS43NjU0SDExMC4zMTdWMTcuNDQwMkMxMTAuMjc5IDE1Ljg0MzYgMTA5Ljc4MiAxNC42MjcyIDEwOC43ODggMTMuNzkwOVpNMTAyLjk3NSAyMC44MjM0QzEwMy4zNTggMjAuNTU3MyAxMDMuODU1IDIwLjQ0MzMgMTA0LjU0MyAyMC40NDMzQzEwNS4zNDYgMjAuNDQzMyAxMDYuMTg3IDIwLjU5NTQgMTA3LjAyOCAyMC44OTk1VjIyLjE1NEMxMDYuMzAyIDIyLjgwMDIgMTA1LjM0NiAyMy4xNDIzIDEwNC4xOTkgMjMuMTQyM0MxMDMuNjI1IDIzLjE0MjMgMTAzLjIwNSAyMy4wMjgzIDEwMi44OTkgMjIuNzYyMkMxMDIuNTkzIDIyLjUzNDEgMTAyLjQ0IDIyLjIzIDEwMi40NCAyMS44MTE4QzEwMi40NCAyMS4zOTM3IDEwMi41OTMgMjEuMDUxNSAxMDIuOTc1IDIwLjgyMzRaIiBmaWxsPSIjMDA2OUZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4LjA1NyAyNi4wMzE2QzEyMi44MTkgMjYuMDMxNiAxMTguNTM2IDIxLjc3MzkgMTE4LjUzNiAxNi41NjU5QzExOC41MzYgMTEuMzU4IDEyMi44MTkgNy4xMDAzNCAxMjguMDU3IDcuMTAwMzRDMTMzLjI5NiA3LjEwMDM0IDEzNy41NzggMTEuMzU4IDEzNy41NzggMTYuNTY1OUMxMzcuNTc4IDIxLjc3MzkgMTMzLjMzNCAyNi4wMzE2IDEyOC4wNTcgMjYuMDMxNlpNMTI4LjA1NiAxMC40MDc4QzEyNC42NTMgMTAuNDA3OCAxMjEuOSAxMy4xNDQ4IDEyMS45IDE2LjUyODFDMTIxLjkgMTkuOTExNCAxMjQuNjUzIDIyLjY0ODUgMTI4LjA1NiAyMi42NDg1QzEzMS40NTkgMjIuNjQ4NSAxMzQuMjEyIDE5LjkxMTQgMTM0LjIxMiAxNi41MjgxQzEzNC4yMTIgMTMuMTQ0OCAxMzEuNDU5IDEwLjQwNzggMTI4LjA1NiAxMC40MDc4WiIgZmlsbD0iIzAwNjlGRiIvPgo8L3N2Zz4K"
								alt="DigitalOcean logo"
							></img>
							<div className="flex items-center gap-x-1">
								<a href="">Products</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-4 h-4 text-gray-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</div>

							<div className="flex items-center gap-x-1">
								<a href="">Solutions</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-4 h-4 text-gray-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</div>
							<a href="">Market Place</a>
							<div className="flex items-center gap-x-1">
								<a href="">Community</a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-4 h-4 text-gray-400"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</div>
							<a href="">Pricing</a>
						</div>
						<div className="flex gap-x-2">
							<a
								href=""
								className="border border-transparent px-5 py-2 rounded-lg  hover:bg-sky-100 font-semibold text-gray-700"
							>
								Log in
							</a>
							<a
								href=""
								className="text-white font-semibold px-5 py-2 rounded-lg bg-do-blue-light hover:bg-do-blue-medium "
							>
								Sign up
							</a>
						</div>
					</div>
				</div>
			</div> */}
		</Fragment>
	);
};

export { TopBar };
