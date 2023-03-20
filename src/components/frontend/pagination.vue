<template>
    <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: !pages.has_pre }">
                <a @click.prevent="changePage(pages.current_page - 1)" class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages"
                :key="page + 'page'">
                <a @click.prevent="changePage(page)" class="page-link" href="#">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: !pages.has_next }">
                <a @click.prevent="changePage(pages.current_page + 1)" class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['pages', 'changePage'],
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.pages);
        console.log(this.changePage);
        // this.changePage(2)
    }

}


</script>