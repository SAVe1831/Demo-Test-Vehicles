<template>
    <div class="pagination-wrapper flex justify-content-between align-items-center">
        <p class="showing">Showing {{ props.cardInList }} out of {{ props.totalCard }}</p>
        <div class="pagination flex align-items-center justify-content-between">
            <svg @click="PagePrev" class="chevron-left cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 16L10 12L14 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="group flex align-items-center justify-content-between">
                <div class="rectangle flex align-items-center justify-content-center">
                    <p>{{ props.currentPage }}</p>
                </div>
                <p>of</p>
                <div class="rectangle flex align-items-center justify-content-center">
                    <p>{{ props.lastPage }}</p>
                </div>
            </div>
            <svg @click="PageNext" class="chevron-right cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16L14 12L10 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    cardPerPage: Number,
    totalCard: Number,
    cardInList: Number,
    currentPage: Number,
    lastPage: Number,
    PagePrev: Function,
    PageNext: Function
});

</script>


<style scoped>
.pagination-wrapper {
    margin-top: 7px;
}
.showing {
    width: 158px;
    height: 22px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: rgba(41, 49, 72, 0.8);
    margin: 0;
}
.pagination {
    width: 184px;
    height: 32px;
}
.group {
    width: 112px;
    height: 32px;
    color: rgba(228, 228, 228, 1);
}
.rectangle {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 6px;
}
.group p {
    margin: 0;
    width: 24px;
    height: 24px;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    color: rgba(41, 49, 72, 0.8);
    text-align: center;
}
.rectangle p {
    width: 20px;
    height: 22px;
    margin: 0;
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    color: rgba(41, 49, 72, 0.8);
    text-align: center;
}
</style>