import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from '@/lib/axios';

const Redirectpage = () => {
  const router = useRouter();

  useEffect(() => {
    const { shortUrl } = router.query;
    console.log(shortUrl);

    const fetchRedirectUrl = async () => {
      try {
        const response = await axios.get(`/redirectpage/${shortUrl}`);
        const actualUrl = response.data;
        console.log(actualUrl)

        window.location.href = actualUrl.short_origin;
      } catch (error) {
        console.error(error);
      }
    };

    if (shortUrl) {
      fetchRedirectUrl();
    }
  }, [router.query]);

  return null;
};

export default Redirectpage;
