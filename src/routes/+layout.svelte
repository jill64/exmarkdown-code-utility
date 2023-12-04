<script lang="ts">
  import { flip, theme, ThemeManager, Toaster } from '@jill64/svelte-suite'
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<Toaster />
<ThemeManager />
<header>
  <hgroup>
    <h1>exmarkdown-code-utility</h1>
    <p>
      ❏ Code utility plugin for
      <a href="https://github.com/ssssota/svelte-exmarkdown">
        svelte-exmarkdown
      </a>
    </p>
  </hgroup>
  <button on:click={$flip} class="theme-button">
    {#if $theme === 'dark'}
      <SunIcon />
    {:else}
      <MoonIcon />
    {/if}
  </button>
  <a href="https://github.com/jill64/exmarkdown-code-utility">
    <GitHubLogo />
  </a>
</header>
<slot />

<style>
  :global(body) {
    font-family: sans-serif;
    margin: 0 1.5rem;
  }
  :global(.dark body) {
    background: #222;
    color: #eee;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  a {
    color: royalblue;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .theme-button {
    background: inherit;
    color: inherit;
    border-radius: 9999rem;
    padding: 0.5rem;
    cursor: pointer;
    margin-left: auto;
    border: none;
  }
  :global(.dark .theme-button:hover) {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.light .theme-button:hover) {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
