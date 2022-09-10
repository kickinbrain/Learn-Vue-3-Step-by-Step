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
            assignments : [
                { name: 'Finish project', completed: false, id:1, tag: 'math' },
                { name: 'Read chapter 4', completed: false, id:2, tag: 'science' },
                { name: 'Turn in homework', completed: false, id:3, tag: 'math' }
            ]
        }
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