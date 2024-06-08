<template>
    <div class="page-container flex flex-column">
        <div class="header-top">
            <div class="header-top-content flex align-items-start justify-content-between">
                <div class="header-top-left-side flex align-items-center">
                    <p>Vechicles</p>
                    <div class="badge text-center">{{ modelValue }}</div>
                </div>
                <div class="header-top-right-side flex align-items-center">
                    <svg class="cursor-pointer" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="41" height="41" rx="5.5" stroke="#E86E84"
                            stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21 13C21.5523 13 22 13.4477 22 14V28C22 28.5523 21.5523 29 21 29C20.4477 29 20 28.5523 20 28V14C20 13.4477 20.4477 13 21 13Z"
                            fill="#E86E84" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13 21C13 20.4477 13.4477 20 14 20H28C28.5523 20 29 20.4477 29 21C29 21.5523 28.5523 22 28 22H14C13.4477 22 13 21.5523 13 21Z"
                            fill="#E86E84" />
                    </svg>
                    <div class="user flex align-items-center justify-content-between">
                        <div class="user-photo">
                            <img class="w-full"
                                src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jaw5yBL9a-BeTL-v8xi~mw~hk805bgnBcq7FAfzvlV4Su-nvgTk2SHQqiVKLYPzc5kha96qBZLeGoUg4awNy3Rg~rTs6VxVdagAHG1JuJq8Vlk~xKS2gU9iwKdnc~18~f5V1ZYFDR2lsbk-zGzLsZVU45gGe6AnRelrVTw8KZD~ayk25DHZ5YpA3xkwl77DTMURRAgyRHJcha9uTR-DmdFDMgShtKppTwzX5-8bi5ushbO7hwX8GgN~EtB9lWQuN1T2HM0pDxDg~dlGTHdpIW2XfJrUCGJgWLZKkCxjgrcxZXu~lNnSei2AbSOMCp5hnQIuWfIZLOd56FD6J6942qg__"
                                alt="user photo">
                        </div>
                        <div class="user-name">
                            <p>John Doe</p>
                        </div>
                    </div>
                    <div class="language flex align-items-center justify-content-between">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_74_1841)">
                                <path
                                    d="M8.24995 22.6125V17.4375L4.38745 20.2875C5.47495 21.3 6.78745 22.0875 8.24995 22.6125Z"
                                    fill="#2A5F9E" />
                                <path d="M15.75 22.6125C17.2125 22.0875 18.525 21.3 19.6125 20.2875L15.75 17.4V22.6125Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M1.38745 15.75C1.49995 16.125 1.64995 16.4625 1.83745 16.8375L3.29995 15.75H1.38745Z"
                                    fill="#2A5F9E" />
                                <path d="M20.7 15.75L22.1625 16.8375C22.3125 16.5 22.4625 16.125 22.6125 15.75H20.7Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M8.81248 14.25H0.974976C1.08748 14.775 1.23748 15.2625 1.38748 15.75H3.29998L1.83748 16.8375C2.13748 17.475 2.47498 18.0375 2.88748 18.6L6.74998 15.75H8.24998V16.5L3.86248 19.725L4.38748 20.25L8.24998 17.4375V22.6125C8.73748 22.8 9.22498 22.9125 9.74998 23.025V14.25H8.81248Z"
                                    fill="white" />
                                <path
                                    d="M23.025 14.25H14.25V23.025C14.775 22.9125 15.2625 22.7625 15.75 22.6125V17.4375L19.6125 20.25C20.1375 19.7625 20.5875 19.2375 21.0375 18.675L17.025 15.75H19.575L21.8625 17.4375C21.975 17.25 22.0875 17.025 22.1625 16.8375L20.7 15.75H22.6125C22.7625 15.2625 22.9125 14.775 23.025 14.25Z"
                                    fill="white" />
                                <path
                                    d="M2.88745 18.6C3.18745 19.0125 3.48745 19.3875 3.82495 19.7625L8.24995 16.5375V15.7875H6.74995L2.88745 18.6Z"
                                    fill="#ED4C5C" />
                                <path
                                    d="M17.0625 15.75L21.075 18.675C21.225 18.4875 21.3375 18.3 21.4875 18.1125C21.525 18.075 21.525 18.0375 21.5625 18.0375C21.675 17.85 21.825 17.625 21.9375 17.4375L19.575 15.75H17.0625Z"
                                    fill="#ED4C5C" />
                                <path
                                    d="M15.75 1.38745V6.56245L19.6125 3.71245C18.525 2.69995 17.2125 1.91245 15.75 1.38745Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M8.24995 1.38745C6.78745 1.91245 5.47495 2.69995 4.38745 3.71245L8.24995 6.59995V1.38745Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M22.6125 8.24998C22.5 7.87498 22.35 7.53748 22.1625 7.16248L20.7 8.24998H22.6125Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M3.29995 8.24998L1.83745 7.16248C1.68745 7.53748 1.53745 7.87498 1.38745 8.24998H3.29995Z"
                                    fill="#2A5F9E" />
                                <path
                                    d="M15.1875 9.74998H22.9875C22.875 9.22498 22.725 8.73748 22.575 8.24998H20.6625L22.125 7.16248C21.825 6.52498 21.4875 5.96248 21.075 5.39998L17.25 8.24998H15.75V7.49998L20.1375 4.27498L19.6125 3.74998L15.75 6.56248V1.38748C15.2625 1.19998 14.775 1.08748 14.25 0.974976V9.74998H15.1875Z"
                                    fill="white" />
                                <path
                                    d="M0.974976 9.74998H9.74998V0.974976C9.22498 1.08748 8.73748 1.23748 8.24998 1.38748V6.56248L4.38748 3.74998C3.86248 4.23748 3.41248 4.76248 2.96248 5.32498L6.97498 8.24998H4.42498L2.13748 6.56248C2.02498 6.74998 1.91248 6.97498 1.83748 7.16248L3.29998 8.24998H1.38748C1.23748 8.73748 1.08748 9.22498 0.974976 9.74998Z"
                                    fill="white" />
                                <path
                                    d="M21.1125 5.40005C20.8125 4.98755 20.5125 4.61255 20.175 4.23755L15.75 7.46255V8.21255H17.25L21.1125 5.40005Z"
                                    fill="#ED4C5C" />
                                <path
                                    d="M6.93748 8.24995L2.96248 5.32495C2.81248 5.51245 2.69998 5.69995 2.54998 5.88745C2.51248 5.92495 2.51248 5.96245 2.47498 5.96245C2.36248 6.14995 2.21248 6.37495 2.09998 6.56245L4.38748 8.24995H6.93748Z"
                                    fill="#ED4C5C" />
                                <path
                                    d="M23.025 9.75H14.25V0.975C13.5375 0.825 12.7875 0.75 12 0.75C11.2125 0.75 10.4625 0.825 9.75 0.975V9.75H0.975C0.825 10.4625 0.75 11.2125 0.75 12C0.75 12.7875 0.825 13.5375 0.975 14.25H9.75V23.025C10.4625 23.175 11.2125 23.25 12 23.25C12.7875 23.25 13.5375 23.175 14.25 23.025V14.25H23.025C23.175 13.5375 23.25 12.7875 23.25 12C23.25 11.2125 23.175 10.4625 23.025 9.75Z"
                                    fill="#ED4C5C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_74_1841">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <select class="choise-language border-none">
                            <option class="language-selected" value="En">En</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <CardList v-model="modelValue" />
    </div>
</template>


<script setup>
import { ref } from 'vue'
import CardList from '@/components/CardList.vue'

const modelValue = ref(null)
</script>


<style scoped>
.page-container {
    width: 1184px;
    height: 100%;
}
.header-top {
    width: 100%;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;
}
.header-top-content {
    height: 72px;
}

.line:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(228, 228, 228, 1);
}

.header-top-left-side p {
    width: 155px;
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    margin: 0;
}

.badge {
    width: 56px;
    height: 30px;
    background-color: rgba(243, 246, 248, 1);
    border-radius: 6px;
    gap: 10px;
    padding: 4px 14px;
    box-sizing: border-box;
    margin-left: 18px;
}

.user {
    width: 131px;
    height: 46px;
    margin: 0 30px 0 40px;
    cursor: pointer;
}

.user-photo {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
}

.user-name {
    width: 71px;
    height: 24px;
}

.user-name p {
    height: 100%;
    font-size: 15px;
    color: rgba(41, 49, 72, 1);
    line-height: 22px;
    font-weight: 500;
    margin: 0;
}

.language {
    width: 83px;
}

.language-selected {
    font-size: 15px;
    color: rgba(41, 49, 72, 1);
    line-height: 22px;
    font-weight: 500;
    margin: 0;
}

</style>