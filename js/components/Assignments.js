import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },
    template: `
        <div class="flex"> 
            <assignments-list :assignments="filters.inProgress" title="In Progress">
                 <assignment-create @add="add"></assignment-create>
            </assignments-list>
            <assignments-list 
            v-if="showCompleted"
            :assignments="filters.completed" 
            title="Completed Assignments" 
            can-toggle
            @toggle="showCompleted = !showCompleted"
            ></assignments-list>
            
        </div>
    `,
    data (){
        return {
            assignments : [],
            showCompleted: true
        }
    },

    created(){
       fetch('http://localhost:3000/assigmentns')
           .then(responce => responce.json())
           .then(assignments => {
               this.assignments = assignments
           })
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignment => !assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            }
        }
    },
    methods: {
            add(name){
                this.assignments.push({
                    name: name,
                    completed: false,
                    id: this.assignments.length + 1
                })
            }
    }
}