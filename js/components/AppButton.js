export default {
    template: `
                <button class="bg-gray-200 text-gray px-5 py-2" :disabled="processing">
                    <slot />
                </button>
                `,

    data (){
        return {
            processing : false,
        }
    }
}