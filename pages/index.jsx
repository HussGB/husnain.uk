import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  return (
  <>
    <body className="bg-slate-900 h-screen">
      <main>
        <div className="grid place-items-center h-screen">
          <p className="font-bold text-slate-600 text-8xl">
            <FontAwesomeIcon icon={faPaintBrush} size="1x" />
          </p>
          <p className="font-bold text-slate-300 text-2xl">HussGB is currently working on the website...</p>
        </div>
      </main>
    </body>
  </>
  )
}
