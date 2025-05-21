<script lang="ts">
    let name = '';
    let password = '';
    let message = '';
  
    async function handleLogin() {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      });
  
      const data = await res.json();
      message = data.message;
  
      if (data.success) {
        // Redirect til en annen side om ønskelig
        window.location.href = '/dashboard';
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
    <input type="text" bind:value={name} placeholder="Brukernavn" required />
    <input type="password" bind:value={password} placeholder="Passord" required />
    <button type="submit">Logg inn</button>
  </form>
  
  <p>{message}</p>