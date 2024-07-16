import HeartLogo from '../../assets/heart.svg'
export default function Favourite() {
  return (
    <>
      <div className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover:bg-black/30">
        <img src={HeartLogo} alt="" />
        <span>Favourite Locations</span>
      </div>
    </>
  )
}
