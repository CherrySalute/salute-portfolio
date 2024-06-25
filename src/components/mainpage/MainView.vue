<template>
  <section id="mainView">
    <article class="wrap">
      <div class="  textBox">
        <h2 data-aos="fade-left" data-aos-duration="500">salute <br> web portfolio</h2>
        <p data-aos="fade-left" data-aos-duration="2000">웹퍼블리셔 김경래 포트폴리오</p>
        <a href="#contactView" data-aos="fade-up" data-aos-duration="3000">contact</a>
      </div>     
    </article>
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/mixin";  

  #mainView{
    height: 100vh;

    background-image: url(/src/assets/img/main_img.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

      .wrap{
        width: 1200px; height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        text-align: right;

        @media (max-width: 1200px){
          width: 100vw;
          padding: 0 50px;
        }


          .textBox{
            color: #fff;            

              h2{
                font-size: 72px;
                font-weight: bold;
                text-transform: uppercase;

                @media (max-width: 1024px){
                  font-size: 60px;
                }

                @media (max-width: 768px){
                  font-size: 48px;
                }

                @media (max-width: 425px){
                  font-size: 24px;
                  line-height: 2;
                }

                @media (max-width: 320px){
                  font-size: 18px;
                  line-height: 2;
                }
              }

              p{
                font-size: 14px;
                margin: 20px 0 40px;

                @media (max-width: 425px){
                  font-size: 12px;
                  margin: 10px 0 20px;
                }

                @media (max-width: 320px){
                  font-size: 10px;
                }
              }

              a{
                padding: 6px 16px;
                background-color: transparent;
                border: 1px solid #fff;
                border-radius: 50px;
                color: #fff;
                text-transform: uppercase;
                cursor: pointer;
                font-size: 12px;

                @media (max-width: 425px){
                  padding: 4px 10px;
                  font-size: 8px;
                }


                &:hover{
                    background-color: #fff;
                    color: lightblue;
                }
              }
          }
      }
  }

</style>