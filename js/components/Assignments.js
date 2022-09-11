import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentsList, AssignmentCreate },
    template: `
        <div style="width:300px">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed Assignments"></assignments-list>
            <assignment-create @add="add"></assignment-create>
            
        </div>
    `,
    data (){
        return {
            assignments : []
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