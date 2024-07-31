import SalesItem from "./SalesItem"
import { ScoreList } from "./ScoreList"
import WebAnalytics from "./WebAnalytics"

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
    </div>
  )
}

export default RightColumn