import * as ST from './styled'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { MapComponent } from './MapComponent'
import { useState } from 'react'
import Marker from './MapComponent/Marker'

export const Map = () => {
    const render = (status: Status) => {
        return <h1>{status}</h1>
    }
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    })
    const [zoom, setZoom] = useState(3)
    return (
        <ST.Wrapper>
            <Wrapper apiKey={'AIzaSyACNj7FwdO4C0BORpnAjiLCrLhfk2IpB_U'} render={render}>
                <MapComponent center={center} zoom={zoom} style={{ width: '400px', height: '400px' }}>
                    <Marker />
                </MapComponent>
            </Wrapper>
        </ST.Wrapper>
    )
}
