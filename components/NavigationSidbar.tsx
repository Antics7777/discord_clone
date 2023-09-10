import { redirect } from 'next/navigation';

import { currentProfile } from '@/lib/current-profile'
import React from 'react'

const NavigationSidbar = async () => {
    const profile = await currentProfile();
    if(!profile){
      return redirect('/')
    }
  return (
    <div>NavigationSidbar</div>
  )
}

export default NavigationSidbar