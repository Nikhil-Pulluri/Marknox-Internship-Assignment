import Home from '@/components/Home'
export default function Page() {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className=" h-auto  flex items-center justify-center ">
          <Home />
        </div>
      </div>
    </div>
  )
}
