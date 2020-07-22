<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(90, 80, 76, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		margin: 0 0.4em;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(0, 150, 255);
		display: block;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	nav p {
		padding: 0 2em;
	}
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a href="."><img alt='SOSchool logo' src='logo.png' width="40" height="40" loading="lazy"></a>
	<p>v0.3.1</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" class="nav-link" href=".">Home</a>
      </li>
      <li class="nav-item">
        <a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" class="nav-link" href="/about">About</a>
      </li>
			<li class="nav-item">
        <a rel=prefetch aria-current="{segment === 'team' ? 'page' : undefined}" class="nav-link" href="/team">Team</a>
      </li>
		</ul>
		<a rel=prefetch href="https://www.notion.so/Help-Center-5902baf5cf9d4936a8f71fd7ed1d7bf1"><button class="btn btn-outline-primary">Help Center</button></a>
		<a href="mailto:soschool@protonmail.com"><button class="btn btn-primary">Contact Us</button></a>
  </div>
</nav>
