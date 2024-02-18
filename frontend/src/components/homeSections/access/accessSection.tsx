import graph from "/public/images/graph.png";
import bg from "/public/images/access.png";
import Image from "next/image";
import "./accessSection.css";

function AccessSection() {
  return (
    <section id="access">
      <div className="left">
        <div>
          <Image src={graph} alt={"rooba"} fill sizes="100%" />
        </div>
      </div>
      <div className="right">
        <h3>
          <span>Access</span>
          <span>Alternative </span>
          <span>Investments</span>
        </h3>
        <p>
          Unleashing the untapped potential of the alternative markets through
          Rooba.Finance - Your gateway to superior returns and exclusive
          opportunities
        </p>
        <p>
          Discover the advantages of alternative market investments, unlock new
          horizons, and embark on a journey towards financial prosperity with
          our platform as your trusted partner.{" "}
        </p>
        <button>learn more</button>
        <div className="background">
          <Image src={bg} alt={"rooba"} fill sizes="100%" />
        </div>
      </div>
    </section>
  );
}
export default AccessSection;
