/* eslint-disable react/function-component-definition */
import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] text-6xl p-10 flex flex-col justify-center items-center'>
      <Card className='bg-slate-200 py-4 px-6'>
        <Text className='text-6-xl mb-10 text-center font-bold'>
          Nimbus Weather AI
        </Text>
        <Subtitle className='text-center text-xl'>
          Powered by OpenAI, Next.js, Tailwind CSS, Typescript, Tremor 2.0 +
          More
        </Subtitle>

        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#394F68]/70 to-[#183B7E]/70'>
          {/* City Picker  */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
