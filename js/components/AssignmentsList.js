import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template : `
    <section v-show="assignments.length" class="container mx-auto my-10">
        <h2 class="font-bold text-xl mb-2">
            {{ title }}
            <span>({{ assignments.length}})</span>
        </h2>
        <div class="flex gap-2 mb-3">
            <button 
            v-for="tag in tags"
            @click="currentTag = tag"
            class="border rounded-sm py-1 px-2"
            :class="{
                'border-blue-500 text-blue-500' : tag === currentTag
            }"
            >
                {{ tag }}
            </button>
        </div>
        <ul>
           <assignment  
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"     
           >
           </assignment>
        </ul>
    </section>
    `,

    data(){
        return {
            currentTag : 'all'
        };
    },

    props: {
        assignments: Array,
        title: String
    },

    computed: {
        filteredAssignments(){
            if(this.currentTag == 'all'){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags(){
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}