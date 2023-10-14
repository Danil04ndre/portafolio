import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div>
        <a
          href="https://api.whatsapp.com/send/?phone=51903496241"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </div>
      <div className="">
        <i className="fa-regular fa-envelope"></i>
        <span>daniloandre832@gmail.com</span>
      </div>
      <div className="">
        <a
          href="https://github.com/Danil04ndre"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i> Github
        </a>
      </div>
    </section>
  );
};

export default Contact;
