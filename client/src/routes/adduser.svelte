<script>
    import Header from "./components/header.svelte";
    import Form from "./components/form.svelte";
</script>
<!--Header-->
<Header/>
<!--/Header-->
  <!-- Main Site -->
  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i> All Users</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">New User</h2>
            <span class="text-light">Use the below form to create a new account</span>
        </div>
        <Form/>
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

.text-center {
    text-align: center;
}


.text-dark {
    color: var(--dark);
}


.text-light {
    color: var(--light);
}

#site-main {
    margin-top: 6em;
    font-family: "Barlow", sans-serif;
}



/*  add user & update user template */
.form-title {
    margin-top: 2em;
}

.form-title > h2 {
    padding: 0.5em 0;
}


</style>