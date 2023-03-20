import swal from 'sweetalert';
import { defineStore } from 'pinia'

export default defineStore('alert', {
    state: () => ({

    }),
    actions: {
        getState(text, state) {
            swal({
                title: text,
                icon: state ? 'success' : 'error',
                timer: 2000
            });
        }
    }
})