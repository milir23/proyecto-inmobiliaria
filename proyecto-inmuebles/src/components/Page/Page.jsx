
import "../Page/Page.css";
import React from 'react';
import imagen1 from "../../assets/imagen1.jpg";
import imagen2 from "../../assets/imagen2.jpg";
import imagen3 from "../../assets/imagen3.jpg";
import imagen4 from "../../assets/imagen4.jpg";
import imagen5 from "../../assets/imagen5.jpg";
import imagen6 from "../../assets/imagen6.jpg";
import imagen7 from "../../assets/imagen7.jpg";
import imagen8 from "../../assets/imagen8.jpg";
import imagen9 from "../../assets/imagen9.jpg";
import imagen10 from "../../assets/imagen10.jpg";
import imagen11 from "../../assets/imagen11.jpg";
import imagen12 from "../../assets/imagen12.jpg";
import imagen13 from "../../assets/imagen13.jpg";
import imagen14 from "../../assets/imagen14.jpg";
import imagen15 from "../../assets/imagen15.jpg";
import imagen16 from "../../assets/imagen16.jpg";
import imagenlogo from "../../assets/imagen17.jpg";












const headerPage = () => {
    return (
        <>
            <div>

                <header className="menu">
                    <nav>
                        <a href="#">
                            <img src={imagenlogo} alt="imagen" />
                        </a>
                    </nav>

                    <div className="estilonavu">
                        <a href="#" className="estilohome">
                            Home
                        </a>
                        <a href="#" className="estilonav">
                            Listing
                            <i className="bi bi-caret-down-fill"></i>
                        </a>

                        <a href="#" className="estilonav">
                            Services
                        </a>
                        <a href="#" className="estilonav">
                            Blog
                            <i className="bi bi-caret-down-fill"></i>
                        </a>

                        <a href="#" className="estilonav">
                            About
                        </a>
                        <a href="#" className="estilonav">
                            Contact Us
                        </a>
                        <a href="#" className="estilonav">
                            Pages
                            <i className="bi bi-caret-down-fill"></i>
                        </a>
                    </div>

                    <nav>
                        <button className="botonuno">Get a Quote</button>
                    </nav>
                </header>



                <section className="menu">
                    <div className="infoizq">
                        <div>
                            <h1 className="titulo">Bring Your Family's<br />Happiness to Your<br />Dream House</h1>
                            <p className="primerparrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nihil minus<br /> porro consequuntur culpa id vel esse.</p>
                        </div>

                        <div>
                            <form>
                                <input type="text" defaultValue=" Search Here" className="formulariouno" />
                                <input type="button" value="Search" className="funciona" />
                            </form>
                        </div>

                        <div className="numeros">
                            <div>
                                <h2 className="tamañonumeros">280+</h2>
                                <p>Awards Winning</p>
                            </div>

                            <div>
                                <h2 className="tamañonumeros">78+</h2>
                                <p>Property Ready</p>
                            </div>

                            <div>
                                <h2 className="tamañonumeros">298+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={imagen1} alt="imagen" className="imagenuno" />
                    </div>
                </section>

                <section className="menu">
                    <h1 className="titulodos">Featured Listing</h1>
                    <p className="parrafodos">Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor<br /> incididumt ut labore et dolore magma aliqua.</p>
                </section>

                <section className="lugares">
                    <div>
                        <img src={imagen2} alt="imagen" />
                        <p>
                            <a href="#" className="lugares">
                                Ataz Standard <br />
                                House
                            </a>
                        </p>

                        <p className="cambiado">
                            <i className="bi bi-geo-alt-fill"></i>
                            Pluto Street, Indonesia
                        </p>
                    </div>

                    <div>
                        <img src={imagen3} alt="imagen" />
                        <p>
                            <a href="#" className="lugares">
                                Qiri Minimalist<br />
                                House
                            </a>
                        </p>

                        <p className="parrafosventa">
                            <i className="bi bi-geo-alt-fill"></i>
                            Jupiter Street, Indonesia
                        </p>
                    </div>

                    <div>
                        <img src={imagen4} alt="imagen" />
                        <p>
                            <a href="#" className="lugares">
                                Qanan Luxury
                                <br />
                                House
                            </a>
                        </p>

                        <p className="cambiado">
                            <i className="bi bi-geo-alt-fill"></i>
                            Mars Street, Indonesia
                        </p>
                    </div>

                    <div>
                        <img src={imagen5} alt="imagen" />
                        <p>
                            <a href="#" className="lugares">
                                Tingah Elegant
                                <br />House
                            </a>
                        </p>
                        <p className="parrafosventa">
                            <i className="bi bi-geo-alt-fill"></i>
                            Venus Street, Indonesia
                        </p>
                    </div>
                </section>

                <section className="menu">
                    <p className="parrafopagdos">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Debitis eligendi iusto dolore
                        corporis velit explicabo sunt consequatur
                    </p>
                    <button className="botondos">
                        See More
                    </button>
                </section>

                <section>
                    <div className="centrado">
                        <div className="margen">
                            <h1 className="ourvision">
                                Our Vision
                            </h1>
                            <p className="textoour">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.<br />
                                Beatae suscipit, illo provident
                                itaque officia corporis
                                veritatis<br />nesciunt explicabo
                                debitis cum similique
                                libero ipsum fugit.<br />
                                Quibusdam maxime voluptate
                                iusto veritatis ea.
                            </p>

                            <img src={imagen7} alt="imagen" className="imagenouru" />
                        </div>

                        <div>
                            <img src={imagen8} alt="imagen" className="imagenourmi" />
                            <h1 className="ourmision">
                                Our Mission
                            </h1>

                            <p className="textomision">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                Doloremque, officiis quam qui
                                tempore ut neque aliquam,
                                et mollitia doloribus molestiae
                                praesentium omnis eveniet
                                fugit repellendus ex cupiditate
                                dignissimos dolores aut!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="spcuatro">
                    <div className="easy">
                        <h1 className="easysteptobuy">
                            Easy Step to Buy Property<br />
                            on Dhalem Real Estate
                        </h1>

                        <p className="parrafopcuatro">
                            Lorem ipsum dolor sit amet consecconsectetur
                            adipisicing elit sed do Mollitianon blanditiis.
                        </p>
                    </div>
                </section>

                <section className="pasos">
                    <div className="iconos">
                        <i className="bi bi-1-circle-fill"></i>
                        <h2 className="sdospagcuatro">
                            View Listing
                        </h2>
                        <p className="parrafosiconos">
                            Lorem ipsum dolor sit amet, consec <br />consectetur
                            adipisicing elit sed do <br />
                            Mollitianon blanditiis.
                        </p>
                    </div>

                    <div className="iconos">
                        <i className="bi bi-2-circle-fill"></i>
                        <h2 className="sdospagcuatro">
                            Contact Us
                        </h2>
                        <p className="parrafosiconos">
                            Lorem ipsum dolor sit amet, consec <br />consectetur
                            adipisicing elit sed do<br />
                            Mollitianon blanditiis.
                        </p>
                    </div>

                    <div className="iconos">
                        <i className="bi bi-3-circle-fill"></i>
                        <h2 className="sdospagcuatro">
                            Request a Visit
                        </h2>

                        <p className="parrafosiconos">
                            Lorem ipsum dolor sit amet, consec <br /> consectetur
                            adipisicing elit sed do<br />
                            Mollitianon blanditiis.
                        </p>
                    </div>

                    <div className="iconos">
                        <i className="bi bi-4-circle-fill"></i>
                        <h2 className="sdospagcuatro">
                            Buy The House
                        </h2>

                        <p className="parrafosiconos">
                            Lorem ipsum dolor sit amet consec<br />consectetur
                            adipisicing elit sed do<br />
                            Mollitianon blanditiis.
                        </p>
                    </div>
                </section>

                <section className="menu">
                    <p className="parrafofaq">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Mollitia non blanditiis
                        necessitatibus reiciendis, facilis ipsum eius
                        minima debitis,<br /> magnam quaerat voluptate vero debitis
                        adispisicing elit sed do.
                    </p>
                    <button className="botontres">
                        See our FAQ
                    </button>
                </section>

                <section className="aversifunciona">
                    <div>
                        <h2 className="whychooseus">
                            Why Choose Us for Your<br />
                            House Needs?
                        </h2>

                        <p className="wchoop">
                            Lorem ipsum dolor sit,
                            amet consectetur set do ipsum
                            adipisicing elit.<br />
                            Similique quis voluptas
                            nulla.
                        </p>

                        <div className="correr">
                            <h2 className="wcutitulo">
                                <i className="bi bi-check-circle-fill check"></i>
                                Comfortable House Design
                            </h2>

                            <p className="wchoopuno">
                                Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit .<br />
                                Similique quis voluptas nulla
                                magnam quaerat voluptate.
                            </p>
                            <h2 className="wcutitulo">
                                <i className="bi bi-check-circle-fill check"></i>
                                Professional Developer
                            </h2>
                            <p className="wchoopuno">
                                Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.<br />
                                Similique quis voluptas nulla magnam
                                quaerat voluptate.
                            </p>
                            <h2 className="wcutitulo">
                                <i className="bi bi-check-circle-fill check"></i>
                                Fast Response
                            </h2>
                            <p className="wchoopuno">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.<br />
                                Similique quis voluptas nulla
                                magnam quaerat voluptate
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={imagen6} alt="imagen" />
                    </div>
                </section>

                <section>
                    <div className="whatsays">
                        <h1 className="hunowhatsays">What Says from Our Happy <br /> Customers</h1>
                        <p className="whatsaysp">Lorem ipsum dolor sit, doloremque facilis cumque <br />
                            Similique quis voluptas nulla harum incidunt quaerat! Nisi!</p>
                    </div>

                    <div className="eee">
                        <div className="centrado">
                            <div>
                                <p className="opiniones">
                                    Lorem, ipsum dolor adipisicing elit.<br />
                                    Veniam totam inventore similique praesentium enim, soluta minus<br />
                                    doloremque obcaecati facilis cumque.<br />
                                </p>

                                <div className="nombres">
                                    <div>
                                        <img src={imagen11} alt="imagen" />
                                    </div>
                                    <div className="nuevofoto">
                                        <h3 className="margennombres">Shoopar Plar Mhan</h3>
                                        <p>Kang Manak</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="opiniones">
                                    Lorem, ipsum dolor adipisicing elit.<br />
                                    Veniam totam inventore similique praesentium enim, soluta minus<br />
                                    doloremque obcaecati facilis cumque.<br />
                                </p>

                                <div className="nombres">
                                    <div>
                                        <img src={imagen12} alt="imagen" />
                                    </div>
                                    <div className="nuevofoto">
                                        <h3 className="margennombres">Shoo Phar Dhie</h3>
                                        <p>Khan Bakso</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="opiniones">
                                    Lorem, ipsum dolor adipisicing elit.<br />
                                    Veniam totam inventore similique praesentium enim, soluta minus<br />
                                    doloremque obcaecati facilis cumque.<br />
                                </p>

                                <div className="nombres">
                                    <div>
                                        <img src={imagen10} alt="imagen" />
                                    </div>
                                    <div className="nuevofoto">
                                        <h3 className="margennombres">Shoo Yha Thi</h3>
                                        <p>Kang Ngomel</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="opiniones">
                                    Lorem, ipsum dolor adipisicing elit.<br />
                                    Veniam totam inventore similique praesentium enim, soluta minus<br />
                                    doloremque obcaecati facilis cumque.<br />
                                </p>

                                <div className="nombres">
                                    <div>
                                        <img src={imagen13} alt="imagen" />
                                    </div>
                                    <div className="nuevofoto">
                                        <h3 className="margennombres">Shoo Mar Nhi</h3>
                                        <p>Kang Gombal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACA HAY QUE RESOLVER COSAS */}

                <section className="letsection">

                    <div className="flexporfa">
                        {/* IMAGEN */}
                        <div>
                            <img src={imagen9} alt="imagen" />
                        </div>

                        {/* TEXTO */}
                        <div className="letscolumn">
                            <div>
                                <h1 className="letstext">Let's Move to Your <br /> Dream Family Home</h1>
                                <p className="letsp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                    Similique quis voluptas nulla.</p>
                                <button className="botontres">Get Quote Now</button>
                            </div>
                            <div className="letspictures">
                                <img src={imagen14} alt="imagen" />
                                <img src={imagen15} alt="imagen" />
                                <img src={imagen16} alt="imagen" />

                            </div>

                        </div>


                    </div>


                </section>



                <footer className="imagenes">
                    <section>
                        <img src={imagenlogo} alt="imagen" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Perspiciatis aliquam inventore veritatis! Beatae delectus <br />
                            totam atque ipsam! Vel corrupti itaque magnam saepe ratione.
                        </p>
                    </section>

                    <section className="margenloqui">
                        <h2>Useful Links</h2>
                        <div>
                            <a href="#">Listing</a><br />
                            <a href="#">About Us</a><br />
                            <a href="#">Contact Us</a><br />
                            <a href="#">Our Team</a><br />
                        </div>
                    </section>

                    <section className="margenloqui">
                        <div>
                            {/* <i className="bi bi-geo-alt-fill"></i> */}
                            <p>123 Anywhere Street, Any <br />
                                City. 12345 ST. Indonesia</p>
                        </div>

                        <div>
                            {/* svg telefono*/}
                            <p>+123 456 7890</p>
                        </div>

                        <div>
                            {/* svg correo*/}
                            <p>hello@larkhomes.com</p>
                        </div>
                    </section>

                    <section className="margenloqui">
                        <h2>Newsletter</h2>
                        <input type="email" value="Your Email" />
                        <button>Submit</button>
                    </section>
                </footer>

            </div>




        </>
    );
}

export default headerPage;

