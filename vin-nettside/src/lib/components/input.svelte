<script lang="ts">
    let { label, type = 'text', placeholder } = $props();
</script>

<label for={label}>{label}</label>
<input type={type} placeholder={placeholder} />

<style>
    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #FDFFFF;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: 1rem;
    }

    input {
        width: 100%;
        padding: 0.75rem 1.5rem;
        border: 2px solid #2d2e33;
        border-radius: 26px;
        background-color: #25262b;
        color: #FDFFFF;
        font-family: var(--font-body);
        font-size: 1.1rem;
        transition: all 0.2s ease;
    }

    input:focus {
        outline: none;
        border-color: #FF3E00;
        box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
    }

    input::placeholder {
        color: #8D8D94;
    }
</style>