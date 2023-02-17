// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  function addMeetupHndler(enteredMeetupDate) {
    console.log(enteredMeetupDate)
  }
  return <NewMeetupForm onAddMeetup={addMeetupHndler} />
}

export default NewMeetupPage
// 이럴경우 콘솔로그된 데이터가 보임
