<template>
    <div class="card-list-forms flex flex-column justify-content-between">
        <div class="forms-and-button flex justify-content-between">
            <div class="forms flex align-items-center">
                <div class="search-vechicles">
                    <input class="search" @input="onChangeSearch($event)" @keypress="handleKeyPress" type="text" placeholder="Search VIN">
                    <svg class="search-icon relative cursor-pointer" @click="getVehicle($event)" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.95 18 14.6819 17.2298 15.9483 15.9512C16.1356 15.7621 16.3905 15.6555 16.6566 15.6549C16.9228 15.6543 17.1781 15.7598 17.3662 15.9481L21.7074 20.2932C22.0978 20.6839 22.0975 21.3171 21.7068 21.7074C21.3161 22.0978 20.6829 22.0975 20.2926 21.7068L16.6222 18.0331C15.0815 19.2744 13.1344 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2053 19.7625 13.3576 19.3309 14.4109C19.1215 14.9219 18.5374 15.1664 18.0264 14.957C17.5153 14.7476 17.2708 14.1635 17.4803 13.6525C17.815 12.8357 18 11.9407 18 11C18 7.13401 14.866 4 11 4Z"
                            fill="#293148" fill-opacity="0.45" />
                    </svg>
                </div>
                <div class="card-per-page flex align-items-center justify-content-between">
                    <p>Select vehicles per page:</p>
                    <select v-model="cardPerPage" @click="toggleSelect" class="quantity" :class="{ 'open': isOpen }">
                        <option :value="1">1</option>
                        <option :value="2">2</option>
                        <option :value="3">3</option>
                        <option :value="4">4</option> 
                        <option :value="5">5</option>
                        <option :value="6">6</option>
                        <option :value="7">7</option>
                        <option :value="8">8</option>   
                        <option :value="9">9</option>                                     
                    </select>
                    <svg class="chevron-down relative" @click="toggleSelect" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10L12 14L8 10" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <button class="add-button flex align-items-center justify-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="white"/>
                </svg>
                <p class="add-button-text">Add Vechicle</p>
            </button>
        </div>
        <div class="card-list flex flex-wrap justify-content-start">
            <Card 
                v-for="(vehicle, index) in vehicles" 
                :key="index" 
                :vehicle="vehicle" 
            />
        </div>
        <div class="pagination">
            <Pagination
                :cardPerPage="cardPerPage"
                :cardInList="cardInList"
                :totalCard="totalCard"
                :currentPage="currentPage"
                :lastPage="lastPage"
                :PagePrev="() => PagePrev()"
                :PageNext="() => PageNext()"
            />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'

const props = defineProps({
    modelValue: Number
})

const emits = defineEmits(['update:modelValue'])

const isOpen = ref(false);
const toggleSelect = () => {
    isOpen.value = !isOpen.value;
    if (!isOpen.value) {
        getVehicle()
    }
}

const vehicles = ref([]);
const cardPerPage = ref(9);
const searchQuery = ref('');
const totalCard = ref(props.modelValue);
const cardInList = ref(null);
const currentPage = ref(1);
const lastPage = ref(1);

const onChangeSearch = (event) => {
searchQuery.value = event.target.value
}

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        getVehicle()
    }
}

const getVehicle = async () => {
    try {
        currentPage.value = 1;
        const response = await axios.get(`https://api.caiman-app.de/api/cars-test`,{
      params: {
        search: searchQuery.value, 
        per_page: cardPerPage.value,
        page: currentPage.value
      }
    });
        vehicles.value = response.data.data;
        totalCard.value = response.data.meta.total;
        cardInList.value = response.data.meta.to;
        currentPage.value = response.data.meta.current_page
        lastPage.value = response.data.meta.last_page
        emits('update:modelValue', totalCard.value)
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }   
}
getVehicle()

const getVehicleChangePage = async () => {
    try {
        const response = await axios.get(`https://api.caiman-app.de/api/cars-test`,{
      params: {
        search: searchQuery.value, 
        per_page: cardPerPage.value,
        page: currentPage.value
      }
    });
        vehicles.value = response.data.data;
        totalCard.value = response.data.meta.total;
        cardInList.value = response.data.meta.to;
        currentPage.value = response.data.meta.current_page
        lastPage.value = response.data.meta.last_page
    } catch (error) {
        console.error('Ошибка при выполнении запроса', error);
    }   
}

const PageNext = () => {
    if (currentPage.value === lastPage.value) {
        currentPage.value = 1;
    } else {
        currentPage.value += 1;
    }
    getVehicleChangePage();
}

const PagePrev = () => {
    if (currentPage.value === 1) {
        currentPage.value = lastPage.value;
    } else {
        currentPage.value -= 1;
    }
    getVehicleChangePage();
}

</script>


<style scoped>
.card-list-forms {
    padding: 36px 30px;
}

input.search {
    width: 354px;
    height: 42px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 9px 16px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    color: rgba(41, 49, 72, 0.8);
}

input.search:focus {
    outline: none;
    border: 1px solid rgba(120, 149, 255, 1);
}

.search-icon {
    left: -40px;
    top: 7px;
}
.card-per-page {
    width: 309px;
    height: 42px;
    color: rgba(41, 49, 72, 1);
}
.card-per-page p {
    width: 184px;
    height: 22px;
    margin: 0;
    box-sizing: border-box;
}

.quantity {
    width: 85px;
    height: 42px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 9px 16px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    color: rgba(41, 49, 72, 1);
    margin-left: 15px;
}
.card-per-page select {
    -webkit-appearance: none;
    -moz-appearance: none;
}
.chevron-down {
    left: -40px;
}
.add-button {
    width: 180px;
    height: 42px;
    border-radius: 10px;
    background-color: rgba(217, 14, 50, 1);
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}
.add-button:hover {
    background-color: rgba(217, 14, 50, 0.85);
}
.add-button-text {
    padding: 9px 18px;
    font-family: "DM Sans", sans-serif;
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
}
.card-list {
    width: 1122px;
    height: 1065px;
    gap: 30px;
    padding: 30px 0;
}
</style>