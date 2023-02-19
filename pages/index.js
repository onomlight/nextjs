// 아직 하위 폴더가 없어서 our-domain.com 으로 부를것
// 이름을 바꿀수없는건 pages 폴더뿐

import { Fragment } from 'react'
import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // 비동기처리로 진행
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
    // 1초마다 페이지를 다시생성 한시간마다 3600
  }
}

export default HomePage
