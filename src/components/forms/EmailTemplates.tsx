type ContactProps = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const ContactTemplate = ({
  name,
  email,
  phone,
  message,
}: ContactProps) => {
  return (
    <div>
      <h1>Message from GLA Website.</h1>
      {/* <h2>Subject: {subject}</h2> */}
      <h2>from: {name}.</h2>
      <p>{message}</p>

      {(email || phone) && (
        <div>
          <h2>Contact Information</h2>
          {email && <p>Email: {email}</p>}
          {phone && <p>Phone: {phone}</p>}
        </div>
      )}
    </div>
  );
};

type AfterSaleProps = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  model: string;
  services: string[];
  message: string;
};

export const AfterSaleTemplate = ({
  name,
  company,
  email,
  phone,
  model,
  services,
  message,
}: AfterSaleProps) => {
  return (
    <div>
      <h1>After Sale Message from GLA Website.</h1>
      <h2>
        from: {name}, {company && `, from "${company}".`}
      </h2>
      <p>{message}</p>

      <div>
        <h2>Vehicle Model</h2>
        <p>{model}</p>
      </div>

      <div>
        <h2>Requested Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>

      {(email || phone) && (
        <div>
          <h2>Contact Information</h2>
          {email && <p>Email: {email}</p>}
          {phone && <p>Phone: {phone}</p>}
        </div>
      )}
    </div>
  );
};
