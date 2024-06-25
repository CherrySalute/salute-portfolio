<template>
    <section id="contactView">
        <article class="wrap">
            <h2 data-aos="fade-down" data-aos-duration="1000">contact</h2>
            <div class="textBox">
                <p data-aos="fade-down" data-aos-duration="1000">함께 일하길 원한다면?</p>                
                <a href="mailto:cherrysalute0628@gmail.com"><p class="adr" data-aos="fade-right" data-aos-duration="2000">cherrysalute0628@gmail.com</p></a>
                <p data-aos="fade-down" data-aos-duration="1000">프로젝트 합류 및 협업 제안이 있으시면 언제든 연락주세요! <br class="none"> 함께 할 멋진 프로젝트를 보내주시면 확인 후 1~2일 내로 답장 드리겠습니다.</p>
            </div>
        </article>
    </section>
</template>


<style lang="scss" scoped>
    @import "@/assets/scss/mixin";

    #contactView{
        height: 100vh;
        background: #f8ffff;
        background-image: url(/src/assets/img/bg_contact.png);
        background-repeat: repeat-x;
        background-position: 100% 80%;
        background-size: 50% auto;
        background-attachment: fixed;         
        animation: text 30s linear infinite;

        .wrap{
            width: 1200px; height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 1200px){
                width: 100vw;
                padding: 0 50px;
            }

            @media (max-width: 1024px){
                padding: 0 20px;
            }

            @media (max-width: 425px){
                margin: 30px 0;
                padding: 0 10px;
            }

            h2{
                font-size: 72px;
                text-transform: uppercase;

                @media (max-width: 1024px){
                  font-size: 60px;
                }

                @media (max-width: 768px){
                  font-size: 48px;
                }

                @media (max-width: 425px){
                  font-size: 24px;
                }

                @media (max-width: 320px){
                  font-size: 18px;
                }
            }

            .textBox{
                margin: 50px 0;
                width: 100%;

                p{
                    font-size: 18px;
                    line-height: 2;
                    font-family: "Noto Sans KR";
                    color: #777;

                    @media (max-width: 768px){
                        font-size: 14px;
                    }

                    .none{
                        display: none;

                        @media (max-width: 425px){
                            display: block;
                        }
                    }

                }

                .adr{
                    font-size: 48px;
                    font-weight: bold;
                    font-family: "Playwrite NG Modern";
                    color: #000;
                    padding: 50px 0;

                    @media (max-width: 768px){
                        font-size: 24px;
                    }

                    @media (max-width: 425px){
                        font-size: 20px;
                    }
                }
            }
        }
    }

    @keyframes text {
        to {
            background-position: -100% 80%;
        }
    }
</style>