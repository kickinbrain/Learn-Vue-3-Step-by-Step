export default {
    template: `
         <li>
                <label class="cursor-pointer flex justify-between items-center">
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
    `,
    props: {
        assignment: Object
    }
}