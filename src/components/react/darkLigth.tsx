import { lazy, Suspense } from 'react'
import type { FC } from 'react'
// import SVGDark from '../icons/SVGDark'
// import SVGLigth from '../icons/SVGLigth'
interface Props {
    darkmode: boolean
}

const SVGDark = lazy(() => import('../../icons/SVGDark'))

const SVGLigth = lazy(() => import('../../icons/SVGLigth'))

const DarkLigth: FC<Props> = ({ darkmode }) => {
  return (
    <Suspense fallback='loading'>
        { darkmode ? <SVGDark /> : <SVGLigth /> }
    </Suspense>
  )
}

export default DarkLigth
