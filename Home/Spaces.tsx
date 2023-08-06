import { Box , Text} from "../components"
import { ScrollView } from "../components/core/Actionsheet/styled-components"

import Space from "../items/Space"

export default function Spaces() {
    const spaces = [1,2,3,4,5,6,7,8,9,10]
    return(
        <ScrollView contentContainerStyle={{alignItems:"center"}} width={'100%'} px={10}>
            <Text textAlign="left" fontSize='$xl' width={'100%'} fontWeight='$bold' py={20}>Happening Now</Text>
            <Space gradient={["#F87171", "#FBBF24"]} title="Space" listeners={2} host="@fatihterim" />
            <Space gradient={["#60A5FA", "#818CF8"]} title="Space" listeners={2} host="@fatihterim" />
            <Space gradient={["#F472B6", "#EC4899"]} title="Space" listeners={2} host="@fatihterim" />
        </ScrollView>
    )
}