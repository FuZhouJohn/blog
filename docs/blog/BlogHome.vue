<script setup>
import dayjs from 'dayjs'
import { data } from './blog.data'
const format = (date) => {
    return dayjs(date).format('YYYY-MM-DD')
}

</script>

<template>
    <div class="blog-home">
        <div class="blog-list">
            <div class="blog" v-for="blog in data" :key="blog.name">
                <a :href="`/blog/${blog.name}`">{{ blog.title }}</a>
                <div class="line"></div>
                <span class="time">{{ format(blog.date) }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-home {
    display: flex;
    max-width: 1024px;
    margin: 50px auto 0;

    .blog-list {
        width: 100%;

        .blog {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &+.blog {
                margin-top: 10px;
            }

            a,
            .time {
                font-weight: 500;
                color: var(--vp-c-brand);
                text-decoration-style: dotted;
                transition: color 0.25s;
            }

            .time {
                color: var(--vp-c-brand-light)
            }

            .line {
                flex: 1;
                border-top: 1px dashed var(--vp-c-brand-lighter);
                margin: 0 10px;
            }
        }
    }
}
</style>