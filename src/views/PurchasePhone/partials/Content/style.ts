import { StyleSheet } from "react-native";

import { ContentStyles } from './index.interface'
import { Spacing, Typography, Colors } from "../../../../styles/index";
import { calcHeight, calcWidth } from "../../../../styles/spacing";

export const styles = StyleSheet.create<ContentStyles>({

  contentContainer: {
    flex: 2
  },
  textTitle: {
    fontSize: Typography.txtTitle,
    color: Colors.primarytxt,
    fontWeight: Typography.txtTitleWeight,
    marginBottom: Spacing.calcHeight(1)
  },
  subTitle: {
    fontSize: Typography.txtSubTitle,
    color: Colors.primarytxt,
    fontWeight: Typography.txtTitleWeight,

  },
  paragraph: {

    fontSize: Typography.textConstant,
    color: Colors.primarytxt,
  },
  subTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.calcHeight(2),

  },
  seeOptionFormat: {
    marginHorizontal: Spacing.calcWidth(2),
    fontSize: Typography.textConstant,
    color: '#fe6284',
    fontWeight: 'bold'
  },
  mobileImage: {
    alignSelf: 'center',
    marginTop: Spacing.calcHeight(-21),
    width: Spacing.calcWidth(31),
    height: Spacing.calcHeight(33),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Spacing.calcHeight(4),

  },

  logoIconView: {
    width: Spacing.calcWidth(7), height: Spacing.calcHeight(7)
  },

  progressBar: {
    width: Spacing.calcWidth(2),
    height: Spacing.calcHeight(1.2),

  },
  progressBarView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '15%',
    justifyContent: 'space-evenly',
    marginTop: Spacing.calcHeight(2.5),
  },
  textContent: {
    marginVertical: Spacing.calcHeight(5),
    marginHorizontal: Spacing.calcWidth(6),
    width: '100%',

  },
  colorAndCapacityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.calcHeight(4),

  },
  colorIconView: {
    width: Spacing.calcWidth(9), height: Spacing.calcHeight(5),
    marginEnd: Spacing.calcWidth(3)


  },

  seperatorLine: {
    borderTopWidth: Spacing.calcWidth(0.2),
    borderTopColor: 'rgb(192,192,192)',
    borderStyle: 'solid',
    width: '100%',
    marginTop: Spacing.calcHeight(2)
  },

  colorSelectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.calcHeight(4),
  },

  colorOption: {
    width: Spacing.calcWidth(11),
    height: Spacing.calcHeight(6),
    marginEnd: Spacing.calcWidth(4)
  },
  tickMarkImage: {
    width: Spacing.calcWidth(6), height: Spacing.calcHeight(4),
    alignSelf: 'center',
    marginTop: Spacing.calcHeight(0.7)
  },
  capacityView: {
    width: Spacing.calcWidth(25),
    height: Spacing.calcHeight(5),
    borderWidth: Spacing.calcHeight(0.3),
    borderColor: '#000',
    marginEnd: Spacing.calcWidth(4),
    alignItems: 'center',
    justifyContent: 'center'
  },
  paymentIconVIew: {
    width: Spacing.calcWidth(9), height: Spacing.calcHeight(5),
    marginEnd: Spacing.calcWidth(3)

  },

  purchaseView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.calcHeight(6),
  },
  purchaseOptions: {
    backgroundColor: 'rgba(192,192,192,0.3)',
    height: Spacing.calcHeight(7),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.calcHeight(2),
    marginHorizontal: Spacing.calcWidth(-6)
  },

  selectedPurchaseView: {
    marginTop: calcHeight(3),

  },

  purchaseOptionsList: {
    marginTop:Spacing.calcHeight(1),
    marginEnd: Spacing.calcWidth(10),
    marginStart: Spacing.calcWidth(2),
    height:'100%',
  },

  paymentUnderLine: {
    borderBottomColor:'#450b70',
    borderBottomWidth:calcWidth(1),
    // top:Spacing.calcHeight(1)

  },

  purchaseOptionListText: {
    marginBottom:Spacing.calcHeight(2)

  },
})