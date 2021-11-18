<script>
	import { onMount } from 'svelte';
	import Header from './components/header.svelte';
	import { userId } from './stores/store';
	import { dbUrl } from './config/config';
	console.log($userId);
	let userdata = [];
	let url = dbUrl+'?id=' + $userId;
	onMount(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				userdata = data;
				console.log(userdata);
			});
	})

	function updateUser(id) {
		const url = dbUrl+id;
		fetch(url,{
			method:'PUT',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				'name':userdata.name,
				'email':userdata.email,
				'gender':userdata.gender,
				'status':userdata.status
			})
		})
		.then(res=>res.json())
		.then(data=>console.log(data))
	}
</script>

<Header />

<!-- Main Site -->
<main id="site-main">
	<div class="container">
		<div class="box-nav d-flex justify-between">
			<div class="filter">
				<a href="/"><i class="fas fa-angle-double-left" /> All Users</a>
			</div>
		</div>
		<div class="form-title text-center">
			<h2 class="text-dark">Update User</h2>
			<span class="text-light">Use the below form to Update an account</span>
		</div>

		<!-- form handling -->
		<form id="update_user">
			<div class="new_user">
				<div class="form-group">
					<label for="name" class="text-light">Name</label>
					<input type="hidden" name="id" bind:value={userdata._id} />
					<input type="text" name="name" bind:value={userdata.name} placeholder="Full Name" />
				</div>
				<div class="form-group">
					<label for="Email" class="text-light">Email</label>
					<input type="text" name="email" bind:value={userdata.email} placeholder="example@gmail.com" />
				</div>
				<div class="form-group">
					<label for="gender" class="text-light">Gender</label>
					<div class="radio inline">
						<input type="radio" id="radio-2" name="gender" value="" />
						<label for="radio-2" class="radio-label">Male</label>
					</div>
					<div class="radio inline">
						<input type="radio" id="radio-3" name="gender" value="" />
						<label for="radio-3" class="radio-label">Female</label>
					</div>
				</div>

				<div class="form-group">
					<label for="gender" class="text-light">Status</label>
					<div class="radio inline">
						<input type="radio" id="radio-4" name="status" value="" />
						<label for="radio-4" class="radio-label">Active</label>
					</div>
					<div class="radio inline">
						<input type="radio" id="radio-5" name="status" value="" />
						<label for="radio-5" class="radio-label">Inactive</label>
					</div>
				</div>

				<div class="form-group">
					<button on:click|preventDefault={()=>updateUser(userdata._id)} type="submit" class="btn text-dark update">Save</button>
				</div>
			</div>
		</form>
	</div>
</main>

<!-- /Main Site -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow&family=PT+Sans&display=swap');

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
		font-family: 'PT Sans', sans-serif;
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

	.text-center {
		text-align: center;
	}

	.text-dark {
		color: var(--dark);
	}

	.inline {
		display: inline-block;
	}

	.text-light {
		color: var(--light);
	}

	#site-main {
		margin-top: 6em;
		font-family: 'Barlow', sans-serif;
	}

	#site-main .container form {
		margin: 2em 0;
	}

	/*  add user & update user template */
	.form-title {
		margin-top: 2em;
	}

	.form-title > h2 {
		padding: 0.5em 0;
	}

	.new_user {
		max-width: 786px;
		margin: auto;
	}

	#update_user .form-group {
		margin: 0.4em 0;
	}

	#update_user .form-group input[type='text'] {
		width: 100%;
		padding: 0.6em 1em;
		margin: 0.5em 0;
		border: 1px solid var(--border);
		font-family: 'Barlow', sans-serif;
		font-size: 1em;
		border-radius: 0.2em;
	}

	#update_user .form-group .radio {
		margin: 1em 2em;
	}

	/* adding style to radio buttons */
	.radio input[type='radio'] {
		position: absolute;
		opacity: 0;
	}

	.radio input[type='radio'] + .radio-label:before {
		content: '';
		background: var(--border-btn);
		border-radius: 100%;
		border: 1px solid var(--border);
		display: inline-block;
		width: 1em;
		height: 1em;
		position: relative;
		top: -0em;
		margin-right: 0.5em;
		vertical-align: top;
		cursor: pointer;
		text-align: center;
		-webkit-transition: all 250ms ease;
		transition: all 250ms ease;
	}

	.radio input[type='radio']:checked + .radio-label:before {
		background-color: #16db93;
		box-shadow: inset 0 0 0 4px #e9ecef;
	}

	.radio input[type='radio']:focus + .radio-label:before {
		outline: none;
		border-color: #16db93;
	}

	.radio input[type='radio']:disabled + .radio-label:before {
		box-shadow: inset 0 0 0 4px #e9ecef;
		border-color: #b4b4b4;
		background: #b4b4b4;
	}

	#update_user .form-group .btn {
		width: 100%;
		padding: 0.9em 1em;
		background-color: #16db93;
		border: none;
		font-family: 'PT Sans', sans-serif;
		font-size: 1em;
		cursor: pointer;
		border-radius: 0.2em;
		margin: 0.5em 0;
	}

	#update_user .form-group .btn:hover {
		background-color: var(--dark);
		color: var(--border);
	}
</style>
