import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In progress Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <assignment-create @add="add"></assignment-create> 
        </section>
    `,
    data(){
        return {
            assignments : [],
            newAssignment: ''
        }
    },
    computed: {
        filters(){
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created(){
        fetch('http://localhost:3000/assignments')
            .then(responce => responce.json())
            .then(assignments => {
               this.assignments = assignments
            })
    },

    methods: {
        add(name){
            this.assignments.push({
                    name: name,
                    completed: false,
                    id: this.assignments.length + 1
            });
        }
    }
}