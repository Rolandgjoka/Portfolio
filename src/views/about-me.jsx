import React, {Component} from 'react';
import Header from "../components/Header";
import RolandImage from '../assets/images/RolandImage.jpg';

import '../assets/styles/about-me.scss';
import Footer from "../components/Footer";

class AboutMe extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={'about-container'}>
                    <main>
                        <section className="row">
                            <div className="col-md-6 block-container">
                                <article className="block">
                                    <h1><b>About me</b></h1>
                                    <hr />
                                        <img id="image1" src={RolandImage} alt="roland-image" />
                                            <p>I'm Roland Gjoka, a 28 years old husband of a great wife and proud father
                                                of a 2 year old girl.
                                                I own a car service company and most of the time, I'll be driving around
                                                the city as a black car chauffeur.
                                                I enjoy satisfying my customers, but i feel now is time for me to pursue
                                                another path and become a developer.
                                                Currently i'm studying to be a full stack web developer.It comes with
                                                its challenges but the learning experience is immensely rewarding!
                                                I love pets and have four of them. Playing with my daughter and dogs
                                                gives me joy. I also like fishing,boxing and soccer.
                                                Positivity is my motto and try to enjoy life to the fullest!
                                            </p>

                                </article>

                            </div>

                        </section>

                    </main>
                </div>
                <Footer />

            </>)
    }
}

export default AboutMe;
