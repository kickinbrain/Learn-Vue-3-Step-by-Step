export default {
    template: `
                <button 
                :class="{
                    'text-gray px-5 py-2 m-4' : true,
                    'bg-red-200' : type === 'danger',
                    'bg-blue-200' : type === 'secondary',
                    'bg-gray-200' : type === 'primary',
                    'is-loading' : processing
                   
                }" 
                :disabled="processing"
                
                >
                    <slot />
                </button>
                `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing:{
            type: Boolean,
            default: false
        }
    }
}