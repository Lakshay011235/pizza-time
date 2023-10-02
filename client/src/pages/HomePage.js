import React from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/auth';

function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home | Pizza-time App"}>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  )
}

export default HomePage
