import React from 'react'
import {useEffect, useState} from 'react';
import '../styles/main.css';
import Mountain1 from '../resources/mountain-1.svg';
import Mountain2 from '../resources/mountain-2.svg';
import Moon from '../resources/moon.svg';
import Sticks from '../resources/sticks.svg';
import JeimipLogo from '../resources/jeimipLogo.png';

import js from '../resources/js.svg';
import java from '../resources/java.svg';
import cpp from '../resources/cpp.svg';
import c from '../resources/c.svg';
import csharp from '../resources/csharp.svg';
import python from '../resources/python.svg';
import php from '../resources/php.svg';
import bash from '../resources/bash.svg';

export default function MainPage() {
    

    return(
        <div className="main-container">
            <img className="moon" src={Moon} alt=""/>
            <div class="langs">
                <img src={js} alt=""/>
                <img src={java} alt=""/>
                <img src={cpp} alt=""/>
                <img src={c} alt=""/>
                <img src={csharp} alt=""/>
                <img src={python} alt=""/>
                <img src={php} alt=""/>
                <img src={bash} alt=""/>
            </div>
            <div class="mountains">
                <img src={Mountain1} alt=""/>
                <img src={Mountain2} alt=""/>
            </div>


            <div class="title-container">
                <div class="icons-row">
                    <img src={JeimipLogo} alt=""/>
                    <img src={Sticks} alt=""/>
                </div>
                <div class="speciality">Fullstack web-разработчик</div>
                <div class="name">Богдан Кучма</div>
                <div class="resume">Резюме</div>
            </div>

        </div>
    );
}