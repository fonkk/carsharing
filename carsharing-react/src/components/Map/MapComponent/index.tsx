import { Children, cloneElement, FC, isValidElement, ReactNode, useEffect, useRef, useState } from 'react'
import { createCustomEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'

interface MapProps extends google.maps.MapOptions {
    style?: { [key: string]: string }
    onClick?: (e: google.maps.MapMouseEvent) => void
    onIdle?: (map: google.maps.Map) => void
    children?: ReactNode
}

// @ts-ignore
const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
    if (
        isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng
    ) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
    }

    // TODO extend to other types

    // use fast-equals for other objects
    // @ts-ignore
    return deepEqual(a, b)
})

const useDeepCompareMemoize = (value: any) => {
    const ref = useRef()

    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value
    }

    return ref.current
}

const useDeepCompareEffectForMaps = (callback: React.EffectCallback, dependencies: any[]) => {
    useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export const MapComponent: FC<MapProps> = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>()

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options)
        }
    }, [map, options])
    // [END maps_react_map_component_options_hook]

    // [START maps_react_map_component_event_hooks]
    useEffect(() => {
        if (map) {
            ;['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName))

            if (onClick) {
                map.addListener('click', onClick)
            }

            if (onIdle) {
                map.addListener('idle', () => onIdle(map))
            }
        }
    }, [map, onClick, onIdle])

    return (
        <>
            <div ref={ref} style={style} />
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    return cloneElement(child, { map })
                }
            })}
        </>
    )
}
