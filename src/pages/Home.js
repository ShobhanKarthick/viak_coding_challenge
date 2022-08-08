import TestimonialCard from "../components/Card";
import Gallery from "../components/Galley";
import NavBar from "../components/NavBar";
import dataset1 from "../shared/dataset1";
import dataset2 from "../shared/dataset2";
import navDataset from "../shared/navDaaset";

const Home = () => {
  return (
    <div className="App">
      <div className="App">
        <NavBar dataset={navDataset} />
        <div id="home" class="landing-page">
          <div className="bg-image">
            <img
              className="bg-image"
              src="https://gateway.pinata.cloud/ipfs/QmNXUTHomuVcwTWfwCkTrBj3EWiRbfv5N9Nhrd2qaJVAJ2"
            />
          </div>

          <div className="landing-page-content">
            <div className="landing-right-title">VIAK.</div>
            <div className="landing-right-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <a className="scroll" href="#testimonials">
          Scroll Down &#8964;{" "}
        </a>
      </div>

      <div id="testimonials" className="testimonials-section">
        <div className="section-head">TESTIMONIALS</div>
        <div className="testimonials-container">
          {dataset1.map((data, index) => {
            return (
              <TestimonialCard
                imageURL={data.imageURL}
                imageAlt={data.imageAlt}
                title={data.title}
                body={data.body}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div id="gallery" className="gallery-section">
        <div className="section-head">GALLERY</div>
        <Gallery dataset={dataset2} />
      </div>
    </div>
  );
};

export default Home;
