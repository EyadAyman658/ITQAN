import { useState, useMemo, useEffect } from 'react'
import { Animated } from 'react-native'
const useContentHook = () => {
    const [data] = useState([
        { "id": 1, "color": '#DADADA' },
        { "id": 2, "color": '#000' },
        { "id": 3, "color": '#4682B4' },
        { "id": 4, 'color': '#F88379' }])

    const [dataCapacity] = useState([
        { "id": 1, "capacity": '64GB' },
        { "id": 2, "capacity": '128GB' },
        { "id": 3, "capacity": '256GB' },
    ])

    const paymentOptions = [
        { "id": 1, "title": "With PostPaid" },
        { "id": 2, "title": "With PrePaid" },
        { "id": 3, "title": "Device Exchange" }

    ]
    const [currentColor, setCurrentColor] = useState<any>(data[0].color)
    const [selectedColorId, setSelectedColorId] = useState<any>(data[0].id)
    const [capacity, setCapacity] = useState<any>(dataCapacity[0].capacity)
    const [selectedPayment, setSelectedPayment] = useState<any>(paymentOptions[0].title)
    //@ts-ignore
    function handleColorSelection(item, id) {
        setCurrentColor(item)
        setSelectedColorId(id)
    }

    function handleCapacitySelectiom(item: 'string') {
        setCapacity(item)
    }

    //@ts-ignore
    function handleSelectedPaymentOption(item) {
        setSelectedPayment(item)
        console.log('item is=== ', item)
    }

    return {
        data,
        currentColor,
        selectedColorId,
        dataCapacity,
        capacity,
        selectedPayment,
        paymentOptions,
        handleColorSelection,
        handleCapacitySelectiom,
        handleSelectedPaymentOption
    }
}

export default useContentHook


