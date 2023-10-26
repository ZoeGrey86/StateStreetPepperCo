import React from "react";
import "./AboutUs.css";
import joe from './JoeTimm.jpg';
import micheal from './MichealHoltz.jpg';
import layton from './LaytonDiaz.jpg';
import zoe from './ZoeGrey.jpg';

export const About = () => {
    return (
        <div class="about-us-container">
            <div class="profile">
                <div class="profile-picture">
                    <img src={joe} alt="Joe Timm" />
                </div>
                <div class="profile-name">Joe Timm</div>
                <div class="profile-title">The Master of Dad Jokes 😂</div>
                <p class="profile-bio">Part-time stand-up comedian, full-time dad-joke connoisseur. If laughter is the best medicine, then I'm your prescription. Remember, I'm not just funny; I'm "dad-joke-at-a-wedding" funny.</p>
            </div>

            <div class="profile">
                <div class="profile-picture">
                    <img src={micheal} alt="Micheal Holtz" />
                </div>
                <div class="profile-name">Micheal Holtz</div>
                <div class="profile-title">Professional procrastinator</div>
                <p class="profile-bio"> The man who once tried to teach a goldfish to fetch. Spoiler alert: The goldfish won. 🐟 #FishWhisperer" If I'm not late, I'm not trying hard enough.</p>
            </div>

            <div class="profile">
                <div class="profile-picture">
                    <img src={layton} alt="Layton Diaz" />
                </div>
                <div class="profile-name">Layton Diaz</div>
                <div class="profile-title">The Dancing Taco Enthusiast 💃🌮</div>
                <p class="profile-bio">Salsa on the dance floor, salsa on the taco – Layton's got the moves for both! 💃🕺 I cook when I have to, and I eat out when I don't. On a mission to find the world's best taco.</p>
            </div>

            <div class="profile">
                <div class="profile-picture">
                    <img src={zoe} alt="Zoe Grey" />
                </div>
                <div class="profile-name">Zoe Grey</div>
                <div class="profile-title"> The Coffee Wizard ☕✨</div>
                <p class="profile-bio">She turns caffeine into code, one espresso shot at a time. A true sorceress of the tech world. 🧙‍♀️💻 I run on coffee, chaos, and the belief that one day, I'll be a unicorn. 🦄✨</p>
            </div>
        </div>
    )

}