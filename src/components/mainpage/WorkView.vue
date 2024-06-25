<template>
    <section id="workView">
        <article class="wrap">
            <h2 data-aos="fade-down" data-aos-duration="1000">works</h2>
            <div class="workBox" data-aos="fade-up" data-aos-duration="1000">
                <div class="head">
                    <h3>카페24</h3>
                </div>
                <ul>
                    <li>
                        <div class="imgBox"><img src="@/assets/img/rental.jpg" alt="rental"></div>
                        <div class="textBox">
                            <h4>렌탈프랜드</h4>
                            <p>렌탈상품을 가격비교하는 중계사이트 입니다. 카페24로 관리한 사이트이며, SEO 최적화를 진행하였습니다.<br> 주 업무는 유지보수이고, 디자인 리뉴얼을 통해 UI를 변경하였고, 렌탈신청 페이지를 구현했습니다. </p>
                            <table>
                                <tr>
                                    <td>Viewport</td>
                                    <td>적응형 웹</td>
                                </tr>
                                <tr>
                                    <td>CMS</td>
                                    <td>카페24</td>
                                </tr>
                                <tr>
                                    <td>사용툴</td>
                                    <td>html / css / JavasScript / jQuery / Figma </td>
                                </tr>
                                <tr>
                                    <td>참여도</td>
                                    <td>퍼블리싱 50%, 유지보수</td>
                                </tr>
                            </table>
                        </div>
                        <div class="btnBox">
                            <button class="pc" onclick="window.open('https://rentalfriend.co.kr/')">PC ver.</button>
                            <button class="m" onclick="window.open('https://m.rentalfriend.co.kr/')">Mobile ver.</button>
                        </div>
                    </li>
                    <li>
                        <div class="imgBox"><img src="@/assets/img/niccier.jpg" alt="niccier"></div>
                        <div class="textBox">
                            <h4>니치어</h4>
                            <p>하이엔드 핸드크림 전문 브랜드 사이트입니다.<br>카페24를 이용하여 관리한 사이트이며 전체 퍼블리싱을 진행하였고 런칭 후 유지보수를 진행하였습니다. SEO 최적화 작업을 통해 검색에 잘 나오도록 진행하였습니다. </p>
                            <table>
                                <tr>
                                    <td>Viewport</td>
                                    <td>반응형 웹</td>
                                </tr>
                                <tr>
                                    <td>CMS</td>
                                    <td>카페24</td>
                                </tr>
                                <tr>
                                    <td>사용툴</td>
                                    <td>html / css / JavasScript / jQuery / Figma </td>
                                </tr>
                                <tr>
                                    <td>참여도</td>
                                    <td>퍼블리싱 100%, 유지보수</td>
                                </tr>
                            </table>
                        </div>
                        <div class="btnBox">
                            <button class="pc" onclick="window.open('https://niccier.com/')">PC/Mobile ver.</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="workBox" data-aos="fade-up" data-aos-duration="1000">
                <div class="head">
                    <h3>Happy CGI</h3>
                </div>
                <ul>
                    <li>
                        <div class="imgBox"><img src="@/assets/img/allnego.jpg" alt="allnego"></div>                        
                    </li>
                    <li>
                        <div class="textBox">
                            <h4>올네고</h4>
                            <p>가정과 회사에 필요한 모든 서비스를 간편하고 안전하게 해결할 수 있는 O2O플랫폼 브랜드 사이트입니다. HappyCGI에서 기본틀을 받아 개발진행된 작업물로서 유지보수와 기능 개발에 참여하였습니다.</p>
                            <table>
                                <tr>
                                    <td>Viewport</td>
                                    <td>적응형 웹</td>
                                </tr>
                                <tr>
                                    <td>CMS</td>
                                    <td>Happy CGI</td>
                                </tr>
                                <tr>
                                    <td>사용툴</td>
                                    <td>html / css / JavasScript / jQuery / php / Figma </td>
                                </tr>
                                <tr>
                                    <td>참여도</td>
                                    <td>퍼블리싱 10%, 유지보수</td>
                                </tr>
                            </table>
                        </div>
                        <div class="btnBox">
                            <button class="pc" onclick="window.open('https://allnego.com/')">PC ver.</button>
                            <button class="m" onclick="window.open('https://m.allnego.com/')">Mobile ver.</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="workBox" data-aos="fade-up" data-aos-duration="1000">
                <div class="head">
                    <h3>포트폴리오</h3>
                </div>
                <ul>
                    <li>
                        <div class="imgBox"><img src="@/assets/img/myport.jpg" alt="mfirst"></div>
                    </li>
                    <li>                        
                        <div class="textBox">
                            <h4>국비 교육 포트폴리오</h4>
                            <p>2022년 당시 6개월 간의 교육과정을 병행하며 만든 포트폴리오를 담은 사이트입니다.</p>
                        </div>
                        <div class="btnBox">
                            <button class="pc" onclick="window.open('https://cherrysalute.netlify.app/')">보러가기</button>
                        </div>
                    </li>   
                </ul>
            </div>
        </article>
    </section>
</template>


<style lang="scss" scoped>
    @import "@/assets/scss/mixin";

    #workView{
        height: 100%;
        margin: 200px 0 100px;

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

            .workBox{
                margin: 70px 0 100px;

                .head{
                    display: flex;
                    justify-content: space-between; 
                    border-bottom: 1px solid black;
                    padding-bottom: 10px;
                    margin-bottom: 20px;

                    h3{
                        font-weight: bold;
                        font-size: 28px;
                        font-family: "Noto Sans KR";

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
                    
                }

                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    @media (max-width: 425px){
                        flex-direction: column;
                    }

                    li{
                        width: calc(100% / 2 - 20px);
                        padding: 0 10px;
                        
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        @media (max-width: 425px){
                            width: 100%;
                            margin: 20px 0;
                        }

                        .imgBox{
                            width: 80%; height: 80%;
                            padding: 20px;
                            margin: 0 auto;

                            img{
                                width: 100%; height: 100%;
                            }
                        }

                        .textBox{
                            margin: 20px 0 40px;

                            h4{
                                font-weight: bold;
                                font-size: 24px;
                                margin-bottom: 30px;
                            }

                            p{
                                font-size: 18px;
                                color: #777;
                                font-family: "Noto Sans KR";

                                @media (max-width: 425px){
                                    font-size: 14px;
                                }
                            }

                            table{
                                width: 100%;
                                margin-top: 20px;
                                font-family: "Noto Sans KR";

                                tr{
                                    td{                                   
                                        height: 40px;

                                        &:nth-child(1){
                                            width: 30%;
                                        }

                                        &:nth-child(2){
                                            width: 70%;
                                            font-weight: 300;
                                        }
                                    }
                                }
                            }

                        }

                        .btnBox{
                            width: 100%;

                            display: flex;
                            align-items: center;
                            justify-content: center;

                            button{
                                width: calc(100% / 2 - 20px); height: 50px;
                                margin: 0 10px;
                                border-radius: 10px;
                                border: 1px solid #777;
                                background-color: #fff;
                                font-size: 18px;
                                border-right-width: 2px;
                                border-bottom-width: 2px;
                                cursor: pointer;

                                @media (max-width: 768px){
                                    font-size: 14px;
                                }

                                @media (max-width: 425px){
                                    height: 30px;
                                    font-size: 12px;
                                }

                                &:hover{
                                    background-color: skyblue;
                                    color: #fff;
                                }
                            }

                            
                        }
                    }
                }
            }
        }
    }

</style>