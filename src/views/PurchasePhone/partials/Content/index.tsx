import React, { FC } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native'
import { ContentProps } from './index.interface'
import { styles } from './style'
import useContentHook from '../../hooks/useContentHook'
import List from '../../../../components/List/index'


const Content: FC<ContentProps> = ({ navigation }) => {
    const { data, paymentOptions, currentColor, selectedColorId, dataCapacity, selectedPayment, handleCapacitySelectiom, handleSelectedPaymentOption, handleColorSelection, capacity } = useContentHook()
    return (
        <View style={styles.contentContainer}>
            <Animated.View style={[styles.mobileImage, { backgroundColor: currentColor }] as {}}>
                <Image style={styles.logoIconView as {}} source={require('../../../../assets/icons/png/appleLogo.png')} />
            </Animated.View>
            <View style={styles.progressBarView}>
                <View style={[styles.progressBar, { backgroundColor: '#450b70', }]} />
                <View style={[styles.progressBar, { backgroundColor: 'rgb(192,192,192)' }]} />
                <View style={[styles.progressBar, { backgroundColor: 'rgb(192,192,192)', }]} />
            </View>
            <ScrollView>
                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>iPhone 12</Text>
                    <View style={styles.subTitleView}>
                        <Text style={styles.subTitle}>Starting at KD 4</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeOptionFormat}>See Options</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.paragraph}>A14 Bionic,the fastest chip in a smartphone,</Text>
                    <Text style={styles.paragraph}> An edge-to-edge OLED display</Text>

                    <View style={styles.colorAndCapacityView}>
                        <Image style={styles.colorIconView as {}} source={require('../../../../assets/icons/png/brushIcon.png')} />
                        <Text style={styles.subTitle}>{`Colour & Capacity`}  </Text>
                    </View>

                    <View style={styles.seperatorLine} />
                    <List
                        data={data}
                        horizontalFlag={true}
                        navigation={navigation}
                        renderItem={({ item, index }: any) =>
                            <View style={styles.colorSelectionView}>
                                <TouchableOpacity onPress={() => { handleColorSelection(item.color, item.id) }}>
                                    <View style={[styles.colorOption, { backgroundColor: item.color }]} >
                                        {item.id === selectedColorId &&
                                            <Image style={styles.tickMarkImage as {}} source={require('../../../../assets/icons/png/checkMark.png')} />}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        showsVerticalScrollIndicator={false}
                    />

                    <List
                        data={dataCapacity}
                        horizontalFlag={true}
                        navigation={navigation}
                        renderItem={({ item, index }: any) =>
                            <View style={styles.colorSelectionView}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { handleCapacitySelectiom(item.capacity) }}>
                                    <View style={[styles.capacityView, { backgroundColor: item.capacity === capacity ? '#000' : '#fff' }]}>
                                        <Text style={[styles.paragraph, { color: item.capacity === capacity ? '#fff' : '#000' }]}>{item.capacity}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        showsVerticalScrollIndicator={false}
                    />

                    <View style={styles.purchaseView}>
                        <Image style={styles.paymentIconVIew as {}} source={require('../../../../assets/icons/png/paymentIcon.png')} />
                        <Text style={styles.subTitle}>{'Purchase Options'}  </Text>
                    </View>
                    <View style={styles.purchaseOptions}>
                        <List
                            data={paymentOptions}
                            horizontalFlag={true}
                            navigation={navigation}
                            renderItem={({ item, index }: any) =>
                                <View style={styles.purchaseOptionsList}>
                                  <TouchableOpacity onPress={()=>{handleSelectedPaymentOption(item.title)}}>
                                  <Text style={[styles.purchaseOptionListText,{color: item.title===selectedPayment?'#450b70':'#000', fontWeight:'bold'}]}>
                                        {item.title}
                                    </Text>
                                  </TouchableOpacity>
                                  
                                   {item.title===selectedPayment && <View style={styles.paymentUnderLine}/>}
                                </View>
                               
                            }
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.selectedPurchaseView}>
                        <Text style={styles.subTitle}>Invloves Monthly Payment</Text>
                    </View>
                </View>

            </ScrollView>


        </View>


    )
}

export default Content