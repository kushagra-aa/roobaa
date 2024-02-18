import "./whySection.css";

const reasons = [
  {
    title: "Access to innovation",
    description:
      "Gain early access to disruptive technologies and innovative companies not available on public markets.",
  },
  {
    title: "Strategic influence",
    description:
      "Private market investments often grant investors greater control and influence over business decisions and strategies.",
  },
  {
    title: "Customization",
    description:
      "Innovative investment structures & strategies can be tailored more effectively in private markets.",
  },
  {
    title: "Emerging market exposure",
    description:
      "Unlock untapped potential by investing in burgeoning markets with high growth prospects that are attainable through private market participation.",
  },
  {
    title: "Diversification",
    description:
      "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.",
  },
  {
    title: "Strategic influence",
    description:
      "Private market investments often grant investors greater control and influence over business decisions and strategies.",
  },
];

function WhySection() {
  return (
    <section id="why">
      <h2>
        Why you need exposure <i /> <span>to private markets</span>
      </h2>
      <div className="reasons_container">
        {reasons.map(({ title, description }, i) => (
          <div className="reason_card" key={i}>
            <div className="reason_inner">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhySection;
