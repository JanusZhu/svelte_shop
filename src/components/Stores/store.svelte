<script>
    import { writable } from "svelte/store";
    let defaultShop = {}

    export const store = writable(defaultShop)
</script>