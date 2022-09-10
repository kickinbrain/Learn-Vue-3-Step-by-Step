import AssignmentsList from "./AssignmentsList.js";

export default {
    components: { AssignmentsList },
    template: `
        <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
        <assignments-list :assignments="filters.completed" title="Completed Assignments"></assignments-list>
    `,
    data (){
        return {
            assignments : [
                { name: 'Finish project', completed: false, id:1 },
                { name: 'Read chapter 4', completed: false, id:2 },
                { name: 'Turn in homework', completed: false, id:3}
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

    }
}