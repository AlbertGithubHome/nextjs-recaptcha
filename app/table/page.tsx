'use client'; // 声明这是一个客户端组件

import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/supabaseService';

export default function ClientComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const result = await fetchData('profile');
      setData(result);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Client-Side Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
