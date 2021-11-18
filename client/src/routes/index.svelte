<script>
	import { onMount } from "svelte";
	import { Data } from "./stores/store";
	import Header from "./components/header.svelte";
	import { userId } from "./stores/store";
	import { dbUrl } from "./config/config"
	//import axios from "axios";

	onMount( () => {
		 fetch(dbUrl)
			.then(res => res.json())
			.then(data => {
				$Data = data;
			});

	});

	function deleteUser(id){
		const url = dbUrl+id;
		if(confirm("Do you really want to delete this data ")){
			fetch(url,{
			method:"DELETE"
		})
		alert("User deleted successfully !");
		window.location.reload();
		}
	}

</script>
<Header/>
<!-- Main Site -->
<main id="site-main">
	<div class="container">
		<div class="box-nav d-flex justify-between">
			<a href="/adduser" class="border-shadow">
				<span class="text-gradient"
					>New User <i class="fas fa-user" /></span
				>
			</a>
		</div>

		<!-- form handling -->
		<form action="/" method="POST">
			<table class="table">
				<thead class="thead-dark">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>@Email</th>
						<th>Gender</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{#if $Data}
						{#each $Data as user, i}
							<tr>
								<td>{i + 1}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.gender}</td>
								<td>{user.status}</td>
								<td>
									<a
										href='/updateuser'
										on:click={()=>$userId = user._id}
										class="btn border-shadow update"
									>
										<span  class="text-gradient"
											><i
												class="fas fa-pencil-alt"
											/></span
										>
									</a>
									<a
										href="/"
										on:click={()=>deleteUser(user._id)}
										class="btn border-shadow delete"
									>
										<span class="text-gradient"
											><i class="fas fa-times" /></span
										>
									</a>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</form>
	</div>
</main>

<!-- /Main Site -->


<style>
	@import url("https://fonts.googleapis.com/css2?family=Barlow&family=PT+Sans&display=swap");

	:root {
		--dark: #2b2d42;
		--light: #adb5bd;
		--border: #dee2e6;
		--border-btn: #edf2f4;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		font-family: "PT Sans", sans-serif;
	}

	.container {
		max-width: 1024px;
		margin: auto;
	}

	.d-flex {
		display: flex;
		flex-wrap: wrap;
	}

	.justify-between {
		justify-content: space-between;
	}

	.border-shadow {
		border: 1px solid var(--border-btn);
		box-shadow: 1px 3px 10px #e9ecef;
	}
	.text-gradient {
		background: linear-gradient(to right, #8e2de2, #4a00e0);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}


	#site-main {
		margin-top: 6em;
		font-family: "Barlow", sans-serif;
	}

	#site-main .container .box-nav > a {
		font-size: 1em;
		padding: 0.5em 1em;
	}

	#site-main .container form {
		margin: 2em 0;
	}

	table {
		border-spacing: 0px;
		width: 100%;
	}

	.table td,
	.table th {
		padding: 0.75em;
		vertical-align: top;
		text-align: center;
		border-top: 1px solid var(--border);
	}

	.table td > a.btn {
		padding: 0.3em 1em;
		font-size: 1.1em;
		margin: 0 0.2em;
	}

	.table tr:hover {
		background-color: #06d6a0;
	}

	.table tr:hover td > a {
		box-shadow: none;
	}

	.table .thead-dark th {
		color: #fff;
		background-color: var(--dark);
		border-color: #32383e;
	}

	@media only screen and (max-width: 1024px) {
		table,
		thead,
		tbody,
		th,
		td,
		tr {
			display: block;
		}

		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

		tr {
			border: 1px solid var(--border);
		}

		td {
			border: none;
			position: relative;
		}
	}

</style>
