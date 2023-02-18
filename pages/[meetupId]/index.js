import { Fragment } from 'react'

//[meetupId] 파일을 index로 변경
function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
        alt="A first meet up"
      />
      <h1>A first meet up</h1>
      <address>123456</address>
      <p>the meetup </p>
    </Fragment>
  )
}

export default MeetupDetails
