export default {
    template : `
        <div class="flex gap-2 mb-3">
            <button 
            v-for="tag in tags"
            @click="$emit('change', tag)"
            class="border rounded-sm py-1 px-2"
            :class="{
                'border-blue-500 text-blue-500' : tag === currentTag
            }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
      initialTags: Array,
      currentTag: String
    },

    

    computed:{
        tags(){
            return ['all', ...new Set(this.initialTags)];
        }
    }
}