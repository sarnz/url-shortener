import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent  = ({ url }) => {
  return <QRCode value={url} />;
};

export default QRCodeComponent ;
