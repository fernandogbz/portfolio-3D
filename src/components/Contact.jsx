import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gjcnadk",
        "template_g4c0d1s",
        {
          from_name: form.name,
          to_name: "Fernando",
          from_email: form.email,
          to_email: "fgjv06@gmail.com",
          message: form.message,
        },
        "luj2Edu7SQign2uYw"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias. Me pondré en contacto contigo lo antes posible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Algo salió mal. Por favor, inténtalo de nuevo.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Mantente en</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text white font-medium mb-4">
              Nombre y Apellido
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
              className="bg-tertiary py-4 px-6 rounded-lg
              text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="bg-tertiary py-4 px-6 rounded-lg
              text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text white font-medium mb-4">Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué deseas decirme?"
              required
              className="bg-tertiary py-4 px-6 rounded-lg
              text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary green-pink-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
