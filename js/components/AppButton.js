export default {
    template:
        `<button class="bg-gray-200 hover:bg-gray-400 border rounded px-4 py-2 m-2 disabled:cursor-not-allowed" :disabled="processing">
                        <slot />
                    </button>
                `,
            mounted(){
    },
    data (){
    return {
        processing: false
    };
}
}