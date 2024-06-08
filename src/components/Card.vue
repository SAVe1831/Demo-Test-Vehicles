<template>
    <div class="card flex flex-column relative">
        <svg class="card-icon absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="img-wrapper">
            <img :src="props.vehicle.photo && props.vehicle.photo.url ? props.vehicle.photo.url : 'images/alt-photo.png'" alt="Mercedes" class="w-full h-full">
        </div>
        <p class="model">{{ props.vehicle.vehicle_name }}</p>
        <p class="vin">{{ props.vehicle.vin }}</p>
        <div class="line"></div>
        <div class="card-footer flex justify-content-between align-items-center">
            <div class="badge flex align-items-center justify-content-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="#7FC75E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="status">30/30</p>
            </div>
            <div class="update">
                <p class="update-text">3 days left</p>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    vehicle: Object
});
</script>


<style scoped>
.card {
    width: 354px;
    height: 335px;
    border-radius: 10px;
    background-color: rgba(243, 246, 248, 1);
    padding: 16px 24px;
    box-sizing: border-box;
}
.card-icon {
    top: 20px;
    left: 310px;
    fill: rgba(41, 49, 72, 0.6);
}
.img-wrapper {
    width: 260px;
    height: 135px;
    margin: 24px auto 0 auto;
}
.model {
    width: 291px;
    height: 22px;
    margin: 24px 0 0 0;
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    color: rgba(41, 49, 72, 1);
}
.vin {
    width: 162px;
    height: 20px;
    margin: 12px 0 0 0;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    color: rgba(41, 49, 72, 0.6);
    letter-spacing: 0.3px;
}
.line:after {
    content: '';
    display: block;
    width: 306px;
    height: 1px;
    background-color: rgba(228, 228, 228, 1);
    margin-top: 24px;
    margin: 18px 0 0 0;
}
.card-footer {
    width: 100%;
    height: 30px;
    margin-top: 18px;
}
.badge {
    width: 93px;
    height: 100%;
    border-radius: 6px;
    background-color: rgba(228, 245, 221, 1);
    gap: 8px;
}
.status {
    margin: 0;
    font-size: 15px;
    line-height: 22px;
    font-weight: 700;
    color: rgba(127, 199, 94, 1);
}
.update {
    width: 74px;
    height: 16px;
}
.update-text {
    margin: 0;
    font-size: 15px;
    line-height: 16px;
    font-weight: 500;
    color: rgba(41, 49, 72, 0.6);
}
</style>