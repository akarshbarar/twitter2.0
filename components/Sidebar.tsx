import React from 'react'
import SidebarRow from './SidebarRow'
import {BellIcon, BookmarkIcon, CollectionIcon, HashtagIcon, HomeIcon, MailIcon, UserIcon} from '@heroicons/react/outline'
function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq" alt="Twitter Logo"/>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={UserIcon} title="Sign In"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>

    </div>
  )
}

export default Sidebar