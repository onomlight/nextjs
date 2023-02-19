// 아직 하위 폴더가 없어서 our-domain.com 으로 부를것
// 이름을 바꿀수없는건 pages 폴더뿐

import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: ' A first meet up ',
    imge:
      'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg',
    address: ' 1234567',
    description: ' this is 1',
  },
  {
    id: 'm2',
    title: ' A 2 meet up ',
    imge:
      ' https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722__480.jpg',
    address: ' 1234567',
    description: ' this is 2',
  },
]
function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    // http 요청
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])
  return <MeetupList meetups={loadedMeetupsS} />
}
export default HomePage
