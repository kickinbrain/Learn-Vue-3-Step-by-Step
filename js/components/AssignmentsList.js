import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template : `
    <section v-show="assignments.length" class="container mx-auto my-10">
        <h2 class="font-bold text-xl mb-2">
            {{ title }}
            <span>({{ assignments.length}})</span>
        </h2>
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

    }
}