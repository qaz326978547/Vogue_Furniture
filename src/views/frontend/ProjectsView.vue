<template>
    <div class="project-bg">
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
            <h3>情境空間</h3>
            <h3>PROJECT</h3>
        </div>
    </div>
    <div class="container">
        <div class="row my-6">
            <div class="col-xl-3 col-md-4 col-6 " v-for="project in projects" :key="project.id">
                <router-link :to='`/project/${project.id}`'>
                    <div class="card  d-flex  p-0 ">
                        <div class="overflow-hidden">
                            <img class="projects-img product-img" :src="project.image" alt="...">
                        </div>
                        <div class="card-body">
                            <span class="d-block mx-auto badge bg-primary mb-3" style="width: 80px;">{{
                                project.category }}</span>
                            <h5 class="text-center mb-3">{{ project.project }}</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import projectsData from '../../project.json'
export default {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        getProjects() {
            this.projects = projectsData.projects
        }
    },
    mounted() {
        this.getProjects()
    }
}

</script>


<style>
.project-bg {
    background-image: url('https://i.imgur.com/bZcjNIG.jpg');
    background-position: center;
    background-size: cover;
    height: 40vh;
}
</style>