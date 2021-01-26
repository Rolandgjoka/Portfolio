import React, {Component} from 'react';
import Header from "../components/Header";
import PasswordGenerator from '../assets/images/PasswordGenerator.png';
import CoinFlip from '../assets/images/Coin-flip.png';
import Quiz from '../assets/images/Quiz.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import WorkDayScheduler from '../assets/images/WorkDayScheduler.png';

import '../assets/styles/home-view.scss';
import Footer from "../components/Footer";
import Project from "../components/Project";

class HomeView extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={'home-container'}>
                    <main className="row">
                        <div className="col-md-8 block1-container">
                            <article className="block1">
                                <h1><b>Portfolio</b></h1>
                                <hr />
                                <div className="row image-row">
                                    <Project imageSrc={WorkDayScheduler} alt={"WorkDayScheduler"} />
                                    <Project imageSrc={WeatherDashboard} imageAlt={"WeatherDashboard"} />
                                </div>
                                <div className="row image-row">
                                    <Project imageSrc={CoinFlip} imageAlt={"CoinFlip"} />
                                    <Project imageSrc={PasswordGenerator} imageAlt={"PasswordGenerator"} />
                                    <Project imageSrc={Quiz} imageAlt={"Quiz"} />
                                </div>
                            </article>
                        </div>
                    </main>
                </div>
                <Footer />

            </>)
    }
}

export default HomeView;
