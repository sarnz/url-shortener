import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useUserURL } from '@/hooks/userurl'
import { useState } from 'react'
import Modal from '../components/Modal';
import { useRouter } from 'next/router';
import QRCodeComponent  from './../components/QRCodeComponent';
const qrcode = () => {
    const { myurl,generate } = useUserURL({ middleware: 'auth' })
    console.log('tstttttt',myurl)
    const [link, setLink] = useState('')
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState([])
    const [copiedShortURL, setCopiedShortURL] = useState(null);
    const router = useRouter();
    const { asPath } = router;


    const submitForm = event => {
        event.preventDefault()
        setLink('')
        generate({
            short_origin:link,
            setErrors,
            setSuccess
        })
    }
    const handleCopy = (url) => {
        // Copy the URL to clipboard
        navigator.clipboard.writeText('http://localhost:3000/'+url);
      };
    
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                 QR Codes ของฉัน
                </h2>
            }>
            <Head>
                <title>Short URL - QR Codes</title>
            </Head>


           


            <div className="py-12">
                
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="mb-4">
                {success && (
                <div className="text-green-500 mb-4">{success}</div>
              )}
  <label className="block">สร้าง Short URL:</label>
  <div className="flex flex-col md:flex-row">
    <input
      type="text"
    //   value={originalUrl}
    //   onChange={(e) => setOriginalUrl(e.target.value)}
      className="border-gray-300 rounded-md px-4  py-2 mb-2 md:mr-2 md:mb-0"
      placeholder="Enter the original URL"
      onChange={event => setLink(event.target.value)}
    />
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
      onClick={submitForm}
    >
      ยืนยัน
    </button>
  </div>
</div>

{myurl &&
        myurl.map((shortURL) => (
          <div key={shortURL.id} className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3">
            <div className="p-6 bg-white border-b border-gray-200">
            <QRCodeComponent  url={process.env.NEXT_PUBLIC_BACKEND_URL+shortURL.short_url} />
              <dt className="text-gray-600 mt-2 mb-2 md:mr-2">{shortURL.short_url}</dt>
              <dd className="mb-2 md:mb-0">{shortURL.short_origin}</dd>
              <div className="flex mt-3 items-center">
  <button
    className={`mr-2 px-4 py-2 rounded ${
      copiedShortURL === shortURL.short_url ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
    }`}
    onClick={() => {
      handleCopy(shortURL.short_url);
      setCopiedShortURL(shortURL.short_url);
    }}
  >
    {copiedShortURL === shortURL.short_url ? 'Copied' : 'Copy'}
  </button>
  <button
  className="mr-2 px-4 py-2 rounded bg-orange-500 text-white"
  onClick={() => {
    window.location.href = '/' + shortURL.short_url;
  }}
>
  ไปที่ลิ้ง
</button>

  <span className="ml-2">{new Date(shortURL.created_at).toLocaleDateString()}</span>
</div>

            </div>
          </div>
        ))}

                </div>
</div>            

        </AppLayout>
    )
}

export default qrcode
