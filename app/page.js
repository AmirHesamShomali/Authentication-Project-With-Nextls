'use client'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter()
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      <h1 className='my-4'>صفحه اصلی</h1>
      <CustomButton className='bg-success w-50' style={{ width: '16rem' }} onClick={() => router.push("/login")}>
        صفحه ورود
      </CustomButton>
    </div>

  );
}

export default HomePage;