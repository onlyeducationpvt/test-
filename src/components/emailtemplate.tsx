import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
}) => (
  <div>
    <h1>New Quote Request</h1>
    <p>You have received a new quote request with the following details:</p>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>Name:</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{name}</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>Email:</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{email}</td>
      </tr>
      <tr>
        <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>Phone:</td>
        <td style={{ padding: '10px', border: '1px solid #ddd' }}>+91 {phone}</td>
      </tr>
    </table>
    <p style={{ marginTop: '20px' }}>
      Please respond to this customer as soon as possible.
    </p>
  </div>
);

