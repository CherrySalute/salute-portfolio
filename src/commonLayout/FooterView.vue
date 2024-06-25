<template>
    <span>&copy; copyright Salute. All Right Reserved.</span>
</template>

<style lang="scss" scoped>
    @import "@/assets/scss/mixin";

    span{
        @include flex-center;
        font-size: 18px;
        padding: 10px 0;
        font-family: "Noto Sans KR";
        border-top: 1px solid #000;
        

        @media (max-width: 768px){
            font-size: 14px;
        }

        @media (max-width: 425px){
            font-size: 12px;
        }
    }
</style>
