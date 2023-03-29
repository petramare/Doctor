import style from "./AboutUs.scss"

export default function AboutUs() {
    return (
        <>
            <div class="container my-5">
                <h1>About Us</h1>
                <hr />
                <div class="row my-5">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <img
                                src="/img/about-us/petra.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Petra Marešová (petramare)</h5>
                                <p class="card-text">CGO - Chief gradient officer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <img
                                src="/img/about-us/honza.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Jan Šebesta (seja88)</h5>
                                <p class="card-text">Vice President of 8 rohlíků k večeri</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <img
                                src="/img/about-us/jenda.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Jan Illetško (Koleckoo)</h5>
                                <p class="card-text">Chairman of logical operators at interviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card">
                            <img
                                src="/img/about-us/lukas.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Lukáš Vítů (MarioJedna)</h5>
                                <p class="card-text">Executive director of chodí se vpravo</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                    <div class="col-md-6 container">
   <blockquote class="blockstyle">
      <span class="triangle"></span>The Kadence Importer allows you to easily import all including images, from any of our Kadence themes demos. When you install a Kadence theme, the importer will automatically see what theme you are using and give you options to import anyone of those themes
   </blockquote>
</div>
                    </div>
                </div>
            </div>
        </>
    );
}
