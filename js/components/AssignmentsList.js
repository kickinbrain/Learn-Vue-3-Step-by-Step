import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { Assignment, AssignmentTags, AssignmentCreate },
    template : `
    <section v-show="assignments.length" class="container mx-5 my-10  w-1/5">
        <div class="flex justify-between items-start">
             <h2 class="font-bold text-xl mb-2">
                {{ title }}
                <span>({{ assignments.length}})</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
        <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
        />
        <ul>
           <assignment  
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"     
           >
           </assignment>
        </ul>
        
        <slot></slot>
    </section>
    `,

    data(){
        return {
            currentTag : 'all',
        };
    },

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        filteredAssignments(){
            if(this.currentTag == 'all'){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },

    }
}