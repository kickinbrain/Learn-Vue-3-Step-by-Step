import Assignment from "./Assignment.js";

export default {
    components: { Assignment },
    template : `
    <section v-show="assignments.length" class="container mx-auto my-10">
        <h2 class="font-bold text-xl mb-2">{{ title }}</h2>
        <ul>
           <assignment  
                v-for="assignment in assignments"
                :key="assignment.id"
                :assignment="assignment"     
           >
           </assignment>
        </ul>
    </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}