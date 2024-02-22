type props = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EmailTemplate = ({ name, email, phone, subject, message }: props) => {
  return (
    <div>
      <h1>Message from Global Links Auto Website</h1>
      <h2>Subject: {subject}</h2>
      <h3>from: {name}</h3>
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

export default EmailTemplate;
