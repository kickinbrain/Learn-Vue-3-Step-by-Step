export default {
    template: `
        <section :class="
        {
        'border rounded-lg container mx-5 my-10 w-1/2 rounded-lg p-3' : true,
        'bg-white border-gray-100 text-black' : theme == 'light',
        'bg-gray-600 border-gray-600 text-white' : theme == 'dark'
        }">
          <h2 v-if="$slots.heading" class="font-bold">
              <slot name="heading" />
          </h2>
          
          <slot />
        </section>
    `,

    props: {
       theme: {
           type:String,
           default: 'dark'
       }
    }
}