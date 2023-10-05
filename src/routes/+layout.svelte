<script>
	import '../app.scss';
	let show = false;
</script>

<nav class="bg-danger bg-gradient navbar navbar-dark navbar-expand sticky-top">
	<div class="container-fluid">
		<a class="align-items-center d-flex gap-2 navbar-brand" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width="1em"
				height="1em"
			>
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v2h2V5H4zm14 0v2h2V5h-2zM4 9v2h2V9H4zm14 0v2h2V9h-2zM4 13v2h2v-2H4zm14 0v2h2v-2h-2zM4 17v2h2v-2H4zm14 0v2h2v-2h-2z"
					/>
				</g>
			</svg>
			<span>Blackburn</span>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarsExample04"
			aria-controls="navbarsExample04"
			aria-expanded="false"
			aria-label="Toggle navigation"
			><span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarsExample04">
			<ul class="ms-auto navbar-nav">
				<li class="nav-item d-none active">
					<button
						class="active align-items-center d-flex gap-1 nav-link"
						data-bs-target="#sb1"
						data-bs-toggle="offcanvas"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							width="1em"
							height="1em"
						>
							<g>
								<path fill="none" d="M0 0h24v24H0z" />
								<path
									d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM8 7v2h8V7H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"
								/>
							</g>
						</svg><span>List</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
<main class="main">
	<slot />
</main>
