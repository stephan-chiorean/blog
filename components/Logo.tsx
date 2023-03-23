import Image from 'next/image'
import React from 'react'

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className='rounded-full object-cover'
        width={50}
        height={50}
        src='/logo.jpeg'
        alt='logo'
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
