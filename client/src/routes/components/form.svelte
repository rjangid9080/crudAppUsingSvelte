<script>
	import { dbUrl } from "../config/config";
	function submit() {
		alert('Data added successfully');
		window.location.replace(/adduser);
	}
</script>

<!-- form handling -->
<form action={dbUrl} method="POST" id="add_user">
	<div class="new_user">
		<div class="form-group">
			<label for="name" class="text-light">Name</label>
			<input type="hidden" name="id" value="" />
			<input type="text" name="name" value="" placeholder="Full Name" />
		</div>
		<div class="form-group">
			<label for="Email" class="text-light">Email</label>
			<input type="text" name="email" value="" placeholder="example@gmail.com" />
		</div>
		<div class="form-group">
			<label for="gender" class="text-light">Gender</label>
			<div class="radio inline">
				<input type="radio" id="radio-2" name="gender" value="Male" />
				<label for="radio-2" class="radio-label">Male</label>
			</div>
			<div class="radio inline">
				<input type="radio" id="radio-3" name="gender" value="Female" />
				<label for="radio-3" class="radio-label">Female</label>
			</div>
		</div>

		<div class="form-group">
			<label for="gender" class="text-light">Status</label>
			<div class="radio inline">
				<input type="radio" id="radio-4" name="status" value="Active" />
				<label for="radio-4" class="radio-label">Active</label>
			</div>
			<div class="radio inline">
				<input type="radio" id="radio-5" name="status" value="Inactive" />
				<label for="radio-5" class="radio-label">Inactive</label>
			</div>
		</div>

		<div class="form-group">
			<button on:click={submit} type="submit" class="btn text-dark update">Save</button>
		</div>
	</div>
</form>

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

	.text-dark {
		color: var(--dark);
	}

	.inline {
		display: inline-block;
	}

	.text-light {
		color: var(--light);
	}

	.new_user {
		max-width: 786px;
		margin: auto;
	}

	#add_user .form-group {
		margin: 0.4em 0;
	}

	#update_user .form-group input[type='text'],
	#add_user .form-group input[type='text'] {
		width: 100%;
		padding: 0.6em 1em;
		margin: 0.5em 0;
		border: 1px solid var(--border);
		font-family: 'Barlow', sans-serif;
		font-size: 1em;
		border-radius: 0.2em;
	}

	#update_user .form-group .radio,
	#add_user .form-group .radio {
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

	#update_user .form-group .btn,
	#add_user .form-group .btn {
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

	#update_user .form-group .btn:hover,
	#add_user .form-group .btn:hover {
		background-color: var(--dark);
		color: var(--border);
	}
</style>
