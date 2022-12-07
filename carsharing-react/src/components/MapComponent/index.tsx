import { useEffect, useRef, useState } from 'react'

export const MapComponent = ({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>()

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])
    return <div ref={ref} id='map' style={{ width: 400, height: 400 }} />
}
