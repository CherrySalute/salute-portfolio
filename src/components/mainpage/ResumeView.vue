<template>
    <section id="resumeView">
        <article class="wrap">
            <h2 data-aos="fade-down" data-aos-duration="1000">resume</h2>
            <div class="resume">
                <div class="resumeBox" data-aos="fade-right" data-aos-duration="2000">
                    <h3>experience</h3>
                    <div class="textBox">
                        <p>2022.08 - 2024.05</p>
                        <span>(주)렌탈프랜드 퍼블리셔 근무</span>
                    </div>
                    <div class="textBox">
                        <p>2020.04 - 2021.10</p>
                        <span>윤쉐프정직한제빵소 생산직 근무</span>
                    </div>
                    <div class="textBox">
                        <p>2018.10 - 2019.01</p>
                        <span>밀도 노원점 생산직 근무</span>
                    </div>
                    <div class="textBox">
                        <p>2017.08 - 2018.08</p>
                        <span>주식회사 뺑오르방 생산직 근무</span>
                    </div>
                </div>
                <div class="resumeBox" data-aos="fade-left" data-aos-duration="2000">
                    <h3>education</h3>
                    <div class="textBox">
                        <p>2021.12 - 2022.07</p>
                        <span>하이미디어 아카데미 웹디자인&웹퍼블리셔 과정 수료</span>
                    </div>
                    <div class="textBox">
                        <p>2013.03 - 2015.02</p>
                        <span>한국호텔관광전문학교 호텔제과제빵학 전공</span>
                    </div>
                </div>                            
            </div>
            <div class="skillBox" data-aos="fade-right" data-aos-duration="2500">
                <h3>skill</h3>
                <ul>
                    <li>
                        <p>HTML/CSS</p>
                        <div class="level">
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                        </div>
                    </li>
                    <li>
                        <p>Javascript</p>
                        <div class="level">
                            <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="notcolor"></div>
                        </div>
                    </li>
                    <li>
                        <p>jQuery</p>
                        <div class="level">
                            <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="notcolor"></div>
                        </div>
                    </li>
                    <li>
                        <p>Figma</p>
                        <div class="level">
                            <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="notcolor"></div>
                           <div class="notcolor"></div>
                        </div>
                    </li>
                    <li>
                        <p>Git</p>
                        <div class="level">
                            <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="notcolor"></div>
                           <div class="notcolor"></div>
                        </div>
                    </li>
                    <li>
                        <p>vue.js</p>
                        <div class="level">
                            <div class="color"></div>
                           <div class="color"></div>
                           <div class="color"></div>
                           <div class="notcolor"></div>
                           <div class="notcolor"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </article>        
    </section >
</template>


<style lang="scss" scoped>
    @import "@/assets/scss/mixin";

    #resumeView{
        height: 100vh;

        @media (max-width: 425px){
            height: 100%;
        }


        .wrap{
            width: 1200px;
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

            .resume{
                text-transform: uppercase;
                display: flex;
                justify-content: space-between;
                margin: 70px 0;

                @media (max-width: 425px){
                    flex-direction: column;
                    margin-bottom: 0;
                }

                .resumeBox{
                    width: calc(100% / 2 - 30px);
                    padding: 0 15px;

                    @media (max-width: 768px){
                        width: calc(100% / 2 - 10px);
                        padding: 0 5px;
                    }

                    @media (max-width: 425px){
                        width: 100%;
                    }

     

                    h3{
                        font-size: 26px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid black;
                        padding-bottom: 10px;

                        @media (max-width: 1024px){
                            font-size: 20px;
                        }

                        @media (max-width: 768px){
                            font-size: 18px;
                        }

                        @media (max-width: 425px){
                            font-size: 16px;
                        }

                        @media (max-width: 320px){
                            font-size: 14px;
                        }
                    }

                    .textBox{
                        padding-left: 40px;
                        margin-bottom: 20px;
                        
                        


                        p{
                            font-weight: bold;
                            position: relative;
                            font-size: 14px;

                            @media (max-width: 425px){
                                font-size: 10px;
                            }


                            &::before{
                                content: "";
                                display: block;
                                width: 14px; height: 14px;
                                border: 1px solid black;
                                border-radius: 50%;
                                background-color: #fff;
                                position: absolute;
                                top: 6px;
                                left: -30px;
                            }

                            &::after{
                                content: "";
                                display: block;
                                border-left: 1px solid black;
                                position: absolute;
                                height: 52px;
                                top: 20px;
                                left: -23.5px;
                            }
                        }

                        span{
                            @media (max-width: 768px){
                                font-size: 12px;
                            }

                            @media (max-width: 425px){
                                font-size: 10px;
                            }
                        }

                        &:last-child{
                            margin-right: 0;
                            padding-right: 0; 
                            
                            p{
                                &::after{
                                    display: none;
                                }
                            }
                        }

                    }
                }
            }   

            .skillBox{
                padding: 0 15px;
                width: 50%;

                @media (max-width: 768px){
                    padding: 0 5px;
                }

                
                @media (max-width: 425px){
                    width: 100%;
                    padding: 0 5px;
                }


                h3{
                    font-size: 26px;
                    margin-bottom: 20px;
                    border-bottom: 1px solid black;
                    text-transform: uppercase;
                    padding-bottom: 10px;

                    @media (max-width: 1024px){
                        font-size: 20px;
                    }

                    @media (max-width: 768px){
                        font-size: 18px;
                    }

                    @media (max-width: 425px){
                        font-size: 16px;
                    }

                    @media (max-width: 320px){
                        font-size: 14px;
                    }
                }

                ul{
                    display: flex;
                    flex-direction: column;
                    padding-left: 20px;

                    @media (max-width: 425px){
                        padding-left: 10px;
                    }
                    li{
                        display: flex;
                        margin: 10px 0;

                        p{
                            width: 100px;
                            margin-right: 30px;

                            @media (max-width: 768px){
                                font-size: 12px;
                            }

                            @media (max-width: 425px){
                                font-size: 10px;
                                margin-right: 15px;
                            }
                        }
                        .level{
                            display: flex;
                            align-items: center;

                            >div{
                                width: 20px; height: 3px;
                                margin: 0 5px;
                                border-radius: 3px;

                            }

                            .color{                               
                                background: skyblue;
                            }

                            .notcolor{
                                background: #ddd;
                            }
                        }
                    }
                }
            }

        }
    }
</style>