import AssignmentsList from "./AssignmentsList.js";

export default {
    components: { AssignmentsList },
    template: `
        <div style="width:300px">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed Assignments"></assignments-list>
            
            <form @submit.prevent="add">
                <div class="border border-gray-600 flex text-black">
                    <input v-model="newAssignment" type="text" placeholder="New assignment...." class="p-2">
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </div>
    `,
    data (){
        return {
            assignments : [
                { name: 'Finish project', completed: false, id:1 },
                { name: 'Read chapter 4', completed: false, id:2 },
                { name: 'Turn in homework', completed: false, id:3}
            ],
            newAssignment: ''
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
        add(e){
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1,
            });

            this.newAssignment = ''
        },
    }
}