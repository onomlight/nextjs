import { useRouter } from 'next/router'

// 대괄호를 쓰면 nextjs에서는 동적 페이지로 인식해서 경로에 여러값을 불러올수있음
function DetailPage() {
  const router = useRouter()

  // console.log(router.query.newsId)
  // 중접객체에 접근할수있도록 진행 > 콘솔써서 데이터 출력되는지 확인
  //=> undefined 와 someting-else 가 확인됨
  const newsId = router.query.newsId
  // 백엔드 api 요청해서 NEWSID에 해당하는 값을 얻을수있음
  return <h1>The Detail Page</h1>
}

export default DetailPage
