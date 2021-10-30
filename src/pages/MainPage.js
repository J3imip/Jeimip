import React from 'react'
import {useEffect, useState, useCallback} from 'react';
import '../styles/main.css';
import Mountain1 from '../resources/mountain-1.svg';
import Mountain2 from '../resources/mountain-2.svg';
import Mountain1Mob from '../resources/mountain-1mob.svg';
import Mountain2Mob from '../resources/mountain-2mob.svg';
import Moon from '../resources/moon.svg';
import Drumstick from '../resources/drumstick.svg';
import JeimipLogo from '../resources/jeimipLogo.png';
import TickIcon from '../resources/tick.png';
import Bogdan from '../resources/iAM.png';
import BogdanDesktop from '../resources/bogdan.png';

import instagram from '../resources/instagram.svg';
import telegram from '../resources/telegram.svg';
import github from '../resources/github.svg';
import youtube from '../resources/youtube.svg';

import code from '../resources/code.png';
import debian from '../resources/debian.png';
import drums from '../resources/drum.png';

// import js from '../resources/js.svg';
// import java from '../resources/java.svg';
// import cpp from '../resources/cpp.svg';
// import c from '../resources/c.svg';
// import csharp from '../resources/csharp.svg';
// import python from '../resources/python.svg';
// import php from '../resources/php.svg';
// import bash from '../resources/bash.svg';

export default function MainPage() {
    const [mousePos, setMousePos] = useState({left:0, top: 0});
    const [move, setMove] = useState(false);
    const [limits, setLimits] = useState({x: 60, y: 240});
    const [isMob, setIsMob] = useState(false);

    useEffect(() => {
        document.addEventListener('mousemove', (e)=>{setMousePos({left:e.pageX, top:e.pageY})});
        window.addEventListener("resize", e=>{window.location.reload()});

        if(window.orientation==90 && window.innerWidth<=812) {
            setIsMob(true);
        }

        setInterval(() => {
            if(window.innerWidth>1024) setMove(true);
            try {
                if(window.screen.orientation.type=="portrait-primary") setLimits({x: 0, y: 0});
            } catch {
                if(window.orientation==0) setLimits({x: 0, y: 0});
            }
        }, 1500);
    }, [])

    return(
        <div className="main-container">
            
            <img className="moon" src={Moon} alt=""/>
            {/* <div class="langs">
                <img src={js} alt=""/>
                <img src={java} alt=""/>
                <img src={cpp} alt=""/>
                <img src={c} alt=""/>
                <img src={csharp} alt=""/>
                <img src={python} alt=""/>
                <img src={php} alt=""/>
                <img src={bash} alt=""/>
            </div> */}
            <div class="mountains">
                {window.innerWidth>768 ? 
                    <div>
                        <img src={Mountain1} style={move ? {transform: `translateX(${0-mousePos.left/20}px) translateY(${limits.y+mousePos.top/20}px)`} : {transform: `translateX(0px) translateY(${limits.y}px)`}} alt=""/>
                        <img src={Mountain2} style={move ? {transform: `translateX(${-limits.x-mousePos.left/30}px) translateY(${0-mousePos.top/30}px)`} : {transform: `translateX(-${limits.x}px) translateY(0px)`}} alt=""/>
                        <img src={BogdanDesktop} style={move ? {transform: `translateX(${-limits.x+mousePos.left/30}px) translateY(${0-mousePos.top/30}px)`} : {transform: `translateX(-${limits.x}px) translateY(0px)`}} alt="" />
                    </div>
                    :
                    <div>
                        <img src={Mountain2Mob}alt=""/>
                        <img src={Mountain1Mob}alt=""/>
                    </div>
                }
            </div>

            {window.innerWidth>768 && !isMob ? 
                <div>
                    <div class="title-container">
                        <div class="icons-row">
                            <img className="jeimip-logo" src={JeimipLogo} alt=""/>
                            <div class="drumsticks">
                                <img src={Drumstick} alt=""/>
                                <img src={Drumstick} alt=""/>
                            </div>
                        </div>
                        <div class="speciality"> <img src={TickIcon} alt=""/>Fullstack web-разработчик</div>
                        <div class="name">Богдан Кучма</div>
                        <div class="resume" onClick={()=>{window.open("https://drive.google.com/file/d/18dY0JUKySXU9BjgZqau80XMvvL50waWp/view?usp=sharing")}}>Резюме</div>
                        <div class="socials">
                            <img src={instagram} onClick={()=>{window.open("https://www.instagram.com/jeim1p")}} alt=""/>
                            <img src={telegram} onClick={()=>{window.open("https://t.me/j3imip")}} alt=""/>
                            <img src={github} onClick={()=>{window.open("https://github.com/J3imip")}} alt=""/>
                            <img src={youtube} onClick={()=>{window.open("https://www.youtube.com/channel/UCGBrJYiwEPXcxqTPu6AMsbw/videos")}} alt=""/>
                        </div>
                    </div>
        
                    <div class="info-container">
                        <div class="row">
                            <div class="title">О себе:</div>
                            <div class="info">Привет! Я занимаюсь разработкой около 2 лет, за это время программирование смогло стать для меня хобби, а вследствие чего и работой. Мне 16 лет, имею опыт работы в компании, опыт разработки сайтов под ключ и ботов в различных социальных сетях. Имею большой опыт использования linux, debian является моим основным дистрибутивом для работы. Занимаюсь музыкой, в основном ударные инструменты, но также могу сыграть на фортепиано или бас-гитаре)</div>
                        </div>
                        <div class="row">
                            <div class="icons">
                                <img src={code} alt=""/>
                                <img src={debian} alt=""/>
                                <img src={drums} alt=""/>
                            </div>
                        </div>
                    </div>    
                </div>

                :

                <div className="mobile-container">
                    <div class="title-container">
                        <img src={Bogdan} alt=""/>
                        <div class="name">Богдан Кучма</div>
                        <div class="speciality">Fullstack web-разработчик</div>
                    </div>
                    <div className="about-mob">
                        <div className="about-title">О себе:</div>
                        <div className="about-text">Привет! Я занимаюсь разработкой около 2 лет, за это время программирование смогло стать для меня хобби, а вследствие чего и работой. Мне 16 лет, имею опыт работы в компании, опыт разработки сайтов под ключ и ботов в различных социальных сетях. Имею большой опыт использования linux, debian является моим основным дистрибутивом для работы. Занимаюсь музыкой, в основном ударные инструменты, но также могу сыграть на фортепиано или бас-гитаре)</div>
                    </div>
                    <div className="socials-mob">
                        <div class="social-btn youtube" onClick={()=>{window.open("https://www.youtube.com/channel/UCGBrJYiwEPXcxqTPu6AMsbw/videos")}}>Youtube</div>
                        <div class="social-btn telegram" onClick={()=>{window.open("https://t.me/j3imip")}}>Telegram</div>
                        <div class="social-btn github" onClick={()=>{window.open("https://github.com/J3imip")}}>Github</div>
                        <div class="social-btn instagram" onClick={()=>{window.open("https://www.instagram.com/jeim1p")}}>Instagram</div>
                    </div>
                    <div className="resume-mob" onClick={()=>{window.open("https://drive.google.com/file/d/18dY0JUKySXU9BjgZqau80XMvvL50waWp/view?usp=sharing")}}>Резюме</div>
                </div>
            }
        </div>
    );
}