export default {
    template: `
         <li>
                <label class="cursor-pointer">
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
    `,
    props: {
        assignment: Object
    }
}