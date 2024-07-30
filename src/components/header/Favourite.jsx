import HeartLogo from '../../assets/heart.svg'
export default function Favourite({onShow}) {
  return (
    <>
      <div className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover:bg-black/30">
        <img src={HeartLogo} alt="" />
        <span onClick={onShow}>Favourite Locations</span>
      </div>
    </>
  )
}
