import {ref, watch} from "vue";

export function useStorage(key, val = null){
    let storedVal = localStorage.getItem(key);

    if(storedVal){
        let val = ref(storedVal)
    }else{
        val = ref(val)
        write()
    }

    watch(val, () => {
        write();
    })

    function write(){
      localStorage.setItem(key, val.value)
    }

    return val;
}