import React, { FC, useEffect } from 'react'

const Marker: FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>()
    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker())
        }
        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options)
        }
    }, [marker, options])

    return null
}

export default Marker
