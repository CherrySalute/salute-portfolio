<template>
  <header>
    <nav>
      <router-link class="logo" to="/">Salute</router-link>
      <span class="top" onclick="window.scrollTo({top: 0, left: 0, behavior: 'smooth'});">top</span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
    @import "@/assets/scss/mixin";
    
    header{
      width: 100vw; height: 100px;   
      border-bottom: 1px solid #fff;
      padding: 0 100px;

      position: fixed;
      z-index: 10;
      background-color: hsla(189, 70%, 91%, 0.1);
      backdrop-filter: blur(4px);

      @media (max-width: 768px){
        padding: 0 50px;
      }

      @media (max-width: 425px){
        padding: 0 20px;
      }

      nav{
        width: 100%; height: 100%; 
        display: flex;
        align-items: center;
        justify-content: space-between;

          .logo{
            font-size: 24px;
          }

          .top{
            background-color: #fff;
            border: 1px solid skyblue;
            border-radius: 50%;
            width: 50px; height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: skyblue;
            cursor: pointer;
          }
      }
    }    
</style>
