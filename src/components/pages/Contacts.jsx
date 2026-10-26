import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="my-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contattaci</h1>
        <p className="text-secondary">
          Hai domande o bisogno di supporto? Il nostro team è qui per aiutarti.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Colonna Informazioni */}
        <div className="col-12 col-md-5">
          <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white">
            <h4 className="fw-bold mb-4">I Nostri Recapiti</h4>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <span className="badge bg-primary-subtle text-primary p-3 rounded-circle">
                  <MapPin size={22} />
                </span>
                <div>
                  <h6 className="fw-bold m-0">Sede Legale</h6>
                  <p className="text-secondary small m-0">
                    Via Roma 120, 20121 Milano (MI)
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <span className="badge bg-primary-subtle text-primary p-3 rounded-circle">
                  <Phone size={22} />
                </span>
                <div>
                  <h6 className="fw-bold m-0">Telefono</h6>
                  <p className="text-secondary small m-0">+39 02 1234567</p>
                  <span className="text-muted small">Lun - Ven, 09:00 - 18:00</span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <span className="badge bg-primary-subtle text-primary p-3 rounded-circle">
                  <Mail size={22} />
                </span>
                <div>
                  <h6 className="fw-bold m-0">Email Supporto</h6>
                  <p className="text-secondary small m-0">supporto@reactstore.it</p>
                  <span className="text-muted small">Rispondiamo entro 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonna Modulo Contatto */}
        <div className="col-12 col-md-7">
          <div className="card p-4 p-md-5 border-0 shadow-sm rounded-4 bg-white">
            {isSubmitted ? (
              <div className="text-center py-4">
                <CheckCircle2 size={54} className="text-success mb-3" />
                <h3 className="fw-bold">Messaggio inviato con successo!</h3>
                <p className="text-secondary">
                  Grazie <strong>{formData.name}</strong>, abbiamo ricevuto la tua richiesta e ti
                  risponderemo al più presto all'indirizzo <strong>{formData.email}</strong>.
                </p>
                <button
                  className="btn btn-outline-primary rounded-pill px-4 mt-3"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4 className="fw-bold mb-4">Inviaci un Messaggio</h4>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium small">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium small">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="mario.rossi@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium small">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Come possiamo aiutarti?..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-medium"
                >
                  <Send size={16} />
                  Invia Messaggio
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
