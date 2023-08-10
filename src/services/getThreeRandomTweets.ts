const tweets: string[] = [
  '1253382045558018048',
  '1431666555100798984',
  '1352657490224230401',
  '1352657490224230401',
  '1318269440077647872',
  '1248832648669040640',
  '1234095144611143681',
  '1330187408072171521',
  '1334881186766868483',
  '1341486216722583553',
  '1341173799312605185',
  '1472008862047870982',
  '1358274091828973571',
  '1367530538895093763',
  '1366093752780156941',
  '1379803608020099074',
  '1473301782394777603',
  '1383114927485894659',
  '1407788512078925831',
  '1409334527676149763',
  '1502020546174853122',
  '1409891199687614470',
  '1414334171850412034',
  '1415691201332891654',
  '1501575781440319492',
  '1493342288969412613',
  '1484410134428143618',
  '1479867244029136899',
  '1476979918739230724',
  '1472941742299176972',
]

export default function getThreeRandomTweets(): string[] {
  for (let i = tweets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tweets[i], tweets[j]] = [tweets[j], tweets[i]]
  }
  let threeTweets: string[] = []
  for (let i = 0; i < 3; i++) {
    threeTweets.push(tweets[i])
  }
  return threeTweets
}