import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Part2b extends React.Component {
    render() {
        return (
            <div className="part2b">
                <div className="part21">
                    <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" alt="Speech Bubble Connections" />
                    <h4>Public Q&A</h4>
                    <p>Get answers to more than 16.5 million<br />questions and give back by sharing<br />your knowledge with others. <a className="signUp" href="https://stackoverflow.com/users/signup">Sign up</a><br />for an account.</p>
                    <a href="https://stackoverflow.com/questions"className="but1">Browse questions</a>
                </div>
                <div className="part22">
                    <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" alt="Speech Bubbles Connected to Lock" />
                    <h4>Private Q&A</h4>
                    <p>Level up with Stack Overflow while you<br />work. Share knowledge privately with<br />your coworkers using our flagship Q&A<br />engine.</p>
                    <a href="https://stackoverflow.com/teams" className="but2">Try for free</a>
                </div>
                <div className="part23">
                        <img src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee"  alt="Speech Bubbles Connected to Job"/>
                    <h4>Browse jobs</h4>
                        <p>Find the right job through high quality<br />listings and search for roles based on<br />title, technology stack, salary, location,<br />and more.</p>
                    <a href="https://stackoverflow.com/jobs" className="but3">Find a job</a>
                </div>
            </div>
        );
    }
}


class Topbar extends React.Component {
    render() {
        return (
            <div className="topb">
                <div className="linebreak2" />
                <a href="https://stackoverflow.com/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" alt="Stack OverFlow Logo"  width="200"/></a>
                <a href="https://stackoverflow.com"><button className="rightButOne">Products</button></a>
                <a href="https://stackoverflow.com/teams/customers"><button className="rightBut">Customers</button></a>
                <a href="https://stackoverflow.com/teams/use-cases"><button className="rightBut">Use cases</button></a>
                <input className="search" type="text" placeholder="Search..."/>
                <a href="https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f"><button className="leftButOne">Log in</button></a>
                <a href="https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent"><button className="leftButTwo">Sign up</button></a>
            </div>
        );
    }
}

class Who extends React.Component {
    render() {
        return (
            <div className = "second">
                <h2 className="title2">For developers, by developers</h2>
                <div className="linebreak" />
                <br /><br />
                <p className = "description2">Stack Overflow is an <a className="link" href="https://stackoverflow.com/questions">open community</a> for anyone that codes. We help you<br />get answers to your toughest coding questions, share knowledge with<br />your coworkers in private, and find your next dream job.</p>
                
            </div>
        );
    }
}

class Users extends React.Component {
    render() {
        return (
            <div className="buttons">
                <a className="devs" href="https://stackoverflow.com/#for-developers">
                    For Developers
                </a>
                <a className="business" href="https://stackoverflow.com/#for-businesses">
                    For Businesses
                </a>
            </div>
            );
    }
}

class MyTitle extends React.Component {
    render() {
        return (
            <div className="headContainer">
                <div className="title">
                    <div className="my-header" >
                        <h1>We &#60;3 people who code</h1>
                    </div>
                </div>
                <div className="title">
                    <div className="my-description">
                        <h3>We build products that empower developers<br />and connect them to solutions that enable<br />productivity, growth, and discovery.</h3>
                    </div>
                </div>
            </div>
        );
    }

}

class Game extends React.Component {
   
    render() {
        

        return (
            <div>
                
                <Topbar />
                <div className="partOne">
                    <MyTitle />
                    <Users />
                </div>
                <div className="partTwo">
                    <Who />
                    <Part2b />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

