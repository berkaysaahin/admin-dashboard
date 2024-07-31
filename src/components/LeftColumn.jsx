import AreaChartComp from "./AreaChartComp"
import CardItem from "./CardItem"
import TableComp from "./TableComp"


const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem />
        <CardItem />
        <CardItem />
        </div>
        <div className="flex-auto w-full">
        <AreaChartComp />
        <TableComp />
        </div>
    </div>
  )
}

export default LeftColumn