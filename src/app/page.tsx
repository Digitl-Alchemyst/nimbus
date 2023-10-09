/* eslint-disable react/function-component-definition */
import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text, Title } from '@tremor/react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] text-6xl p-10 flex flex-col justify-center items-center'>
      <Card className='bg-slate-200 py-4 px-6 rounded-lg'>
        <Title className='text-6-xl mb-6 text-center font-bold'>
          Nimbus AI
        </Title>
        <Subtitle className='text-center text-xl text-slate-500 font-light'>
          Powered by OpenAI, Next.js, Tailwind CSS, Typescript, Tremor 2.0 +
          More
        </Subtitle>

        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#394F68]/70 to-[#183B7E]/70 text-base font-semibold text-slate-800 p-3 rounded-lg shadow-md shadow-slate-800/70'>
          {/* City Picker  */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
