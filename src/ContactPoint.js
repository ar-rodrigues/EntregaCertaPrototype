import React, { useState } from "react";
import "./styles.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactPoint() {
  const [fields, setFields] = useState({
    data: "",
    name: "",
    email: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, data: "", [name]: value });
  };
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...fields })
    })
      .then(() => alert("Mensagem enviada!"))
      .then(() =>
        setFields({
          data: "",
          name: "",
          email: "",
          address: "",
          message: ""
        })
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section id="contact-box" className="contact-box">
      <h3>
        Seja um dos nossos
        <br /> pontos parceiros
      </h3>
      <form
        id="contact"
        name="contact"
        method="post"
        className="contact-form"
        netlify-honeypot="bot-field"
        onSubmit={(e) => handleSubmit(e)}
        data-netlify="true"
      >
        <div className="form-itens">
          {/*H O N E Y P O T */}
          <div className="honey">
            <label htmlFor="bot-field"></label>
            <input
              name="bot-field"
              autoComplete="off"
              type="text"
              id="bot-field"
              value={fields.data}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" id="name" className="form-label">
            Nome da Empresa:
          </label>
          <input
            type="text"
            id="name"
            value={fields.name}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="name"
            placeholder="digite  aqui o nome de sua empresa"
            required
          />
        </div>
        <div className="form-itens">
          <label htmlFor="email" id="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={fields.email}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="email"
            placeholder="email@endere??o.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />

          <label htmlFor="address" id="address" className="form-label">
            CEP:
          </label>
          <input
            type="number"
            id="address"
            value={fields.address}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="address"
            placeholder="00000000"
            required
          />
        </div>
        <textarea
          className="comments"
          name="message"
          id="message"
          value={fields.message}
          onChange={(e) => handleChange(e)}
          placeholder="telefone, d??vidas, sugest??es, conselhos..."
          rows="5"
          cols="50"
          required
        />

        <button
          className="form-button"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactPoint;
