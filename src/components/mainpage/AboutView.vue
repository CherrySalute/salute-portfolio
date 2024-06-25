<template>
    <section id="aboutView">
        <article class="wrap">
            <div class="imgBox">
                <img src="@/assets/img/me.jpg" alt="me">
            </div>
            <div class="textBox">
                <h4 data-aos="fade-down" data-aos-duration="1500">about salute</h4>
                <p data-aos="fade-left" data-aos-duration="2000">안녕하세요! 웹퍼블리셔 <strong>김경래</strong>입니다. <br>웹 표준과 웹 접근성을 고려한 웹사이트 제작이 가능한 개발자입니다.</p>
                <p data-aos="fade-left" data-aos-duration="2300">HTML, CSS, Javascript, jQuery의 다양한 툴을 사용하며 최근에는 Vue.js 프레임워크 환경을 통해 작업을 할 수 있도록 공부중입니다.</p>
                <p data-aos="fade-left" data-aos-duration="2600">맡은 프로젝트를 최우선으로 생각하며, 원활한 협업을 위해 팀원들과 의견 공유와 배려를 매우 중요하게 생각합니다.</p>
                <p data-aos="fade-left" data-aos-duration="3000">변화에 두려워하지 않고 새로운 지식을 도전하는 웹 퍼블리셔가 되겠습니다.</p>
            </div>
        </article>
    </section>
  </template>
  

  <style lang="scss" scoped>
    @import "@/assets/scss/mixin";

    #aboutView{
        height: 100vh;

        @media (max-width: 425px){
            height: 100%;
        }

        .wrap{
            width: 1200px; height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            font-size: 20px;
            justify-content: space-between;

            @media (max-width: 1200px){
                width: 100vw;
                padding: 0 50px;
            }

            @media (max-width: 1024px){
                font-size: 18px;
                padding: 0 20px;
            }

            @media (max-width: 768px){
                font-size: 16px;
            }

            @media (max-width: 425px){
                font-size: 14px;
                flex-direction: column;

                margin: 30px 0 100px;
            }

            >div{
                width: 50%;

                @media (max-width: 425px){
                    width: 100%;
                }
            }

            .imgBox{

                @media (max-width: 425px){
                    margin-bottom: 20px;
                }

                img{
                    width: 80%;

                    @media (max-width: 425px){
                        width: 100%;
                    }
                }
            }
           

            h4{
                color: #aaa;
                margin-bottom: 30px;
                text-transform: capitalize;                
            }

            p{
                margin: 20px 0;
                font-family: "Noto Sans KR";

                strong{
                    font-weight: bold;
                }
            }
        }
    }


</style>