import './home.css';
const Home = () => {
    return (
        <>
            <header>
                <nav className="nav-bar navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-center"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav navbar-links">
                                <li className="nav-item">
                                    {' '}
                                    <a href="#about" className="nav-link">
                                        ABOUT ME
                                    </a>{' '}
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a href="#work" className="nav-link">
                                        PORTFOLIO
                                    </a>{' '}
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a
                                        href="#contact-list"
                                        className="nav-link"
                                    >
                                        CONTACT ME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a
                                        href="../src/assets/Hannah-Middleton-Resume-2023.pdf"
                                        className="nav-link"
                                    >
                                        RESUME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a
                                        href="https://www.linkedin.com/in/hmossman/"
                                        className="nav-link rounded waves-effect waves-light"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i
                                            className="fa fa-linkedin-square"
                                            style={{
                                                fontSize: '50px',
                                                color: 'whitesmoke',
                                            }}
                                        ></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a
                                        href="https://github.com/hannahMidd"
                                        className="nav-link rounded waves-effect waves-light"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i
                                            className="fa fa-github mr-2"
                                            style={{
                                                fontSize: '50px',
                                                color: 'whitesmoke',
                                            }}
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="page-title">
                    <h1 className="text name-text">Hannah Middleton</h1>
                    <h1 className="text">Coding Portfolio</h1>
                    <button
                        id="arrow-btn"
                        href="#about"
                        style={{ fontSize: '50px' }}
                    >
                        <i className="fa fa-chevron-circle-down"></i>
                    </button>
                </div>
            </header>
            <main>
                <h2 className="section-title">ABOUT ME:</h2>
                <section className="about" id="about">
                    <img id="about-me-photo" src="../src/assets/Headshot.jpg" />
                    <p id="about-me-paragraph">
                        After 6 years of sales leadership and 3 startup
                        companies, I am tired of being envious of the amazing
                        Software Engineers at my companies, so I have decided it
                        is time to jump in myself! Yes, this is a massive pivot
                        in my career, but it is one that I have dreamt about
                        since the day I was exposed. I am, and will continue to
                        be, a student of constant learning and growth, and the
                        software development / engineering world does exactly
                        that. When I am not “nerding out” about all things code,
                        you can find me snowboarding on the slopes, making
                        textured art, playing sand volleyball and surfing at
                        Vero Beach, or exploring with my two dog children.
                    </p>
                </section>

                <section id="work">
                    <h2 className="section-title">MY PORTFOLIO:</h2>
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/bassinvaders.png"
                                            className="d-block w-100"
                                            alt="bass invaders"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Bass Invaders & Space Invaders
                                        </h5>
                                        <p className="card-text">
                                            Explore the power of AI and music
                                            combined and wrapped up into the
                                            perfect site. Built with CSS, HTML,
                                            JS, Bootstrap.
                                        </p>
                                        <a
                                            href="https://whispering-river-57701-843970124066.herokuapp.com/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/brianlucla/Bass-Invaders-2"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/ArtByHannah.png"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Art By Hannah
                                        </h5>
                                        <p className="card-text">
                                            Check out my creative side on my
                                            very own textured artwork business
                                            site, Art by Hannah. Made with CSS,
                                            HTML, JS, Bootstrap
                                        </p>
                                        <a
                                            href="https://hannahmidd.github.io/Art-By-Hannah/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/HannahMidd/Art-By-Hannah"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/Fit-N-Fresh.png"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Fit -N- Fresh
                                        </h5>
                                        <p className="card-text">
                                            Being healthy does not have to be
                                            boring, espcially with our 6.5
                                            million pairings of workouts and
                                            recipes. Made with CSS, HTML, JS,
                                            Bootstrap.
                                        </p>
                                        <a
                                            href="https://hannahmidd.github.io/Fit-N-Fresh-2.0/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/HannahMidd/Fit-N-Fresh-2.0"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/naturenerds.png"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Nature Nerds
                                        </h5>
                                        <p className="card-text">
                                            Explore the beauty and adventures of
                                            National Parks with a little
                                            guidance from coding nerds. Made
                                            with MERN Stack
                                        </p>
                                        <a
                                            href="https://hannahmidd.github.io/WorkDayScheduler/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/HannahMidd/WorkDayScheduler"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/codingquiz.png"
                                            className="d-block w-100"
                                            alt="codingquizphoto"
                                        />{' '}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Coding Quiz
                                        </h5>
                                        <p className="card-text">
                                            Coding can be tough to learn. Take
                                            this Coding Quiz for a fun way to
                                            learn and test your knowledge! Built
                                            with HTML and CSS
                                        </p>
                                        <a
                                            href="https://hannahmidd.github.io/CodingQuiz/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/HannahMidd/CodingQuiz"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src="../src/assets/project-pics-2/workdayscheduler.png"
                                            className="d-block w-100"
                                            alt="workday"
                                        />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Work Day Scheduler
                                        </h5>
                                        <p className="card-text">
                                            This work day scheduler will allow a
                                            users to to save events for each
                                            hour of the day. Users will be able
                                            to view events that are past,
                                            present and future to stay on track
                                            for the day. Made with HTML, CSS,
                                            JS.{' '}
                                        </p>
                                        <a
                                            href="https://hannahmidd.github.io/WorkDayScheduler/"
                                            className="btn btn-primary"
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href="https://github.com/HannahMidd/WorkDayScheduler"
                                            className="btn btn-secondary"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <section id="contact-list">
                    <h2 className="section-title">CONTACT ME:</h2>
                    <div className="contact-me-items">
                        <a
                            href="tel:+15136070976"
                            className="nav-link contact rounded waves-effect waves-light"
                        >
                            <i
                                className="fa fa-phone"
                                style={{
                                    fontSize: '50px',
                                    color: 'whitesmoke',
                                }}
                            ></i>
                        </a>
                        <a
                            href="mailto:hmiddleton1017@gmail.com"
                            className="nav-link contact rounded waves-effect waves-light"
                        >
                            <i
                                className="fa fa-envelope"
                                style={{
                                    fontSize: '50px',
                                    color: 'whitesmoke',
                                }}
                            ></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hmossman/"
                            className="nav-link contact rounded waves-effect waves-light"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i
                                className="fa fa-linkedin-square"
                                style={{
                                    fontSize: '50px',
                                    color: 'whitesmoke',
                                }}
                            ></i>
                        </a>
                        <a
                            href="https://github.com/hannahMidd"
                            className="nav-link contact rounded waves-effect waves-light"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i
                                className="fa fa-github mr-2"
                                style={{
                                    fontSize: '50px',
                                    color: 'whitesmoke',
                                }}
                            ></i>
                        </a>
                        <a
                            href="./assets/Hannah-Middleton-Resume-2023.pdf"
                            className="nav-link contact rounded waves-effect waves-light"
                        >
                            <i
                                className="fa fa-file"
                                style={{
                                    fontSize: '50px',
                                    color: 'whitesmoke',
                                }}
                            ></i>
                        </a>
                    </div>
                </section>

                <footer className="footer">
                    <h4 className="text">DON NOT BE SHY - CONNECT WITH ME!</h4>
                </footer>
            </main>
        </>
    );
};

export default Home;
