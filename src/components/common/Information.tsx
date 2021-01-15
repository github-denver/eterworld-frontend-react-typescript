import React, { useState, useMemo, ReactNode, useCallback } from 'react'
import styled, { css } from 'styled-components'

import Hgroup from '@/components/common/Hgroup'
// import Tax from '@/components/common/Tax'
import Smelt from '@/components/common/Smelt'
import Enchant from '@/components/common/Enchant'
// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
  children?: ReactNode
}

interface State {
  list: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  list: styled.ul`
    font-size: 0;

    .outer_cell {
      width: 100%;
      height: 100%;
    }

    & > li {
      position: relative;
    }

    & > li:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 30%;
      border-radius: 12px;
      background-color: #f1f1f1;
      content: '';
    }

    & > li + li {
      margin-top: 12px;
    }

    .inner_half {
      position: relative;
      background-color: #fff;
    }

    .inner_half:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 60%;
      border-radius: 12px;
      background-color: #f1f1f1;
      content: '';
    }

    .inner_half .title_attribute {
      width: 60%;
    }

    .inner_half .contents_attribute {
      width: 40%;
    }

    .title_attribute,
    .contents_attribute {
      box-sizing: border-box;
      font-size: 12px;
    }

    .title_attribute {
      display: inline-block;
      position: relative;
      z-index: 1;
      width: 30%;
      padding: 12px;
      box-sizing: border-box;
      text-align: center;
      vertical-align: middle;
    }

    .title_attribute .list_local {
      padding: 12px 0;
    }

    .title_attribute .list_local li + li {
      margin-top: 12px;
    }

    .contents_attribute {
      display: inline-block;
      width: 70%;
      padding: 12px;
      vertical-align: middle;
      word-break: keep-all;
    }

    .contents_attribute .list_local {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #e9e9e9;
      box-sizing: border-box;
    }

    .emphasis_price {
      font-style: normal;
    }

    ${(props: Props) => {
      return (
        props.padding &&
        css`
          padding: 12px;
        `
      )
    }}
  `
}

// const information = ['가격', '분류', '등급', '공격력', '치명타', ['명중률', '탄착률'], '무게', '속도', '크기']

const Item = React.memo(function Item({ attributes }: Attributes) {
  // interface tplotOptions {
  //   [key: string]: any
  // }

  // const data: tplotOptions = attributes.data

  const { price, type, grade, power, critical, hit, shoot, weight, speed, size } = attributes

  return (
    <>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">가격</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{price}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">분류</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{type}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">등급</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{grade}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">공격력</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{power}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">치명타</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{critical}</p>
        </div>
      </li>

      <li>
        <div className="group_half">
          <div className="inner_half">
            <strong className="title_attribute">
              <div className="outer_cell">
                <div className="inner_cell">명중률</div>
              </div>
            </strong>

            <div className="contents_attribute">
              <p className="text_attribute">{hit}%</p>
            </div>
          </div>

          <div className="inner_half">
            <strong className="title_attribute">
              <div className="outer_cell">
                <div className="inner_cell">탄착률</div>
              </div>
            </strong>

            <div className="contents_attribute">
              <p className="text_attribute">{shoot}%</p>
            </div>
          </div>
        </div>
      </li>

      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">무게</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{weight}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">속도</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{speed}발/1분</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">크기</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{size}</p>
        </div>
      </li>
    </>
  )
})

function Result({ location, attributes, style, children }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { data } = useMemo(() => {
    return assignment
  }, [assignment])

  // const defaultPrice = data.price
  // const [price, setPrice] = useState(data.price)
  // const handlerPrice = useCallback((event: any) => {
  //   setPrice(() => {
  //     return calculation(defaultPrice, event)
  //   })
  // }, [])
  // let updatePower = 0
  // let defaultPower = data.power
  // const [power, setPower] = useState(data.power)
  // const [update, setUpdate] = useState(0)
  // const [current, setCurrent] = useState(0)

  // const handlerBody = (event: any) => {
  //   let result = 0

  //   if (updatePower === 0) {
  //     result = calculation(defaultPower, event.target.value)
  //   } else {
  //     result = calculation(updatePower, event.target.value)
  //   }

  //   updatePower = result

  //   setPower(() => {
  //     return result
  //   })
  // }

  // const handlerBody2 = (value: any, event: any) => {
  //   setCurrent(() => {
  //     return event
  //   })

  //   setUpdate(() => {
  //     return value[event]
  //   })
  // }

  // const defaultCritical = data.critical
  // const [critical, setCritical] = useState(data.critical)
  // const handlerBarrel = useCallback((event: any) => {
  //   setCritical(() => {
  //     return calculation(defaultCritical, event)
  //   })
  // }, [])

  // const defaultHit = data.hit
  // const [hit, setHit] = useState(data.hit)
  // const handlerSight = useCallback((event: any) => {
  //   setHit(() => {
  //     return calculation(defaultHit, event)
  //   })
  // }, [])

  // const defaultShoot = data.shoot
  // const [shoot, setShoot] = useState(data.shoot)
  // const handlerHandle = useCallback((event: any) => {
  //   setShoot(() => {
  //     return calculation(defaultShoot, event)
  //   })
  // }, [])
  const [basePower, setBasePower] = useState(data.power)

  const [upgradePower, setUpgradPower] = useState(0)
  const [enchantPower, setEnchantPower] = useState(0)

  const [showPower, setShowPower] = useState(upgradePower)

  const [isUpgrade, setIsUpgrade] = useState(false)
  const [isEnchant, setIsEnchant] = useState(false)

  const [reinforceMap, setReinforceMap] = useState([])
  const [reinforceIndex, setReinforceIndex] = useState(0)
  const [test, setTestIndex] = useState(0)

  const changeReinforce = (power: any, target: any) => {
    const reinforce = [
      { text: '+0', rate: 0, checked: true },
      { text: '+1', rate: 1, checked: false },
      { text: '+2', rate: 2, checked: false },
      { text: '+3', rate: 3, checked: false },
      { text: '+4', rate: 4, checked: false },
      { text: '+5', rate: 5, checked: false },
      { text: '+6', rate: 6, checked: false },
      { text: '+7', rate: 7, checked: false },
      { text: '+8', rate: 8, checked: false },
      { text: '+9', rate: 9, checked: false },
      { text: 'MAX +0', rate: 1, checked: true },
      { text: 'MAX +1', rate: 1, checked: false },
      { text: 'MAX +2', rate: 1, checked: false },
      { text: 'MAX +3', rate: 3, checked: false },
      { text: 'MAX +4', rate: 3, checked: false },
      { text: 'MAX +5', rate: 3, checked: false },
      { text: 'MAX +6', rate: 6, checked: false },
      { text: 'MAX +7', rate: 6, checked: false },
      { text: 'MAX +8', rate: 6, checked: false },
      { text: 'MAX +9', rate: 10, checked: false }
    ]

    let reinforceNormal: any = []
    console.group('changeReinforce 함수를 실행한다.')
    reinforceNormal[0] = power
    console.log('reinforceNormal[0]: ', reinforceNormal[0])

    for (let i = 0; i < reinforce.length; i++) {
      reinforceNormal.push(Math.round(reinforceNormal[i] * (reinforce[i].rate / 100 + 1)))
    }

    reinforceNormal.splice(0, 1)
    console.log('reinforceNormal: ', reinforceNormal)
    console.log('reinforceNormal[target]: ', reinforceNormal[target])
    console.log(' ')
    console.log('reinforceNormal 값을 setReinforceMap에 저장하고 종료한다.')
    console.groupEnd()
    console.log(' ')

    setReinforceMap(() => {
      return reinforceNormal
    })

    return reinforceNormal
  }

  const calculation = useCallback((value: any, event: any) => {
    const result = Math.round(value * (parseFloat(event) + 1))

    return result
  }, [])

  const changeBody = (event: any) => {
    console.group('changeBody')
    console.log('data.power: ', data.power)
    console.log('basePower: ', basePower)
    console.log('upgradePower: ', upgradePower)
    console.log(' ')
    console.log('(before) showPower: ', showPower)
    console.log('(before) reinforceMap: ', reinforceMap)
    console.log(' ')
    console.log('*reinforceIndex: ', reinforceIndex)
    console.log(' ')
    console.log('event.target.value: ', event.target.value)
    console.log(' ')
    console.log('* isEnchant: ', isEnchant)
    let calc = 0
    if (isEnchant === false) {
      console.group('강화를 안했기때문에 기본 베이스 파워로 계산')
      calc = calculation(basePower, event.target.value)
      console.log('calc: ', calc)
      console.groupEnd()
    } else {
      console.group('강화를 했다. 직접 강화 파워로 계산')
      //console.log('enchantPower: ', enchantPower)

      calc = calculation(basePower, event.target.value)
      console.log('calc: ', calc)

      let calc2 = changeReinforce(calc, reinforceIndex)
      console.log('calc2: ', calc2)

      calc = calc2[reinforceIndex]

      console.groupEnd()
    }

    console.log(' ')
    // let calcMap = changeReinforce(calc, reinforceIndex)
    // console.log('calcMap: ', calcMap)

    console.groupEnd()
    console.log(' ')

    setTestIndex(() => {
      return event.target.value
    })

    // 몸체 업그레이드 했다.
    setIsUpgrade(() => {
      console.log('※ calc > data.power ? true : false: ', calc > data.power ? true : false)
      if (calc > data.power) {
        console.log('※ 몸체 업그레이드 완료')
      } else {
        console.log('※ 몸체 업그레이드 기본으로 되돌림')
      }
      return calc > data.power ? true : false
    })

    // 몸체 업그레이드 했다. 몸체 업그레이드 데미지 적용
    setUpgradPower(() => {
      return calc
    })

    // 보여줄 최종 대미지를 노출.
    setShowPower(() => {
      return calc
    })
  }

  const changeEnchant = (data: any, target: any) => {
    console.group('changeEnchant')

    // console.log('data: ', data)
    console.log('* target: ', target)
    console.log('basePower: ', basePower)
    console.log('upgradePower: ', upgradePower)
    console.log(' ')
    console.log('(before) showPower: ', showPower)
    console.log(' ')
    // console.log('reinforceIndex: ', reinforceIndex)
    console.log(' ')

    console.log('* isUpgrade: ', isUpgrade)
    let calc: any = 0
    if (isUpgrade === false) {
      console.group('몸체 업그레이드를 안했기때문에 기본 베이스 파워로 계산')
      calc = changeReinforce(basePower, target)
      console.log('Information.tsx → calc: ', calc)
      console.groupEnd()
    } else {
      console.group('몸체 업그레이드를 했다. 직접 계산한 몸체 업그레이드 파워로 계산')

      let calc2 = calculation(basePower, test)
      console.log('calc2: ', calc2)

      // console.log('upgradePower: ', upgradePower)

      calc = changeReinforce(calc2, target)
      console.log('calc: ', calc)
      console.groupEnd()
    }

    console.log('calc: ', calc)
    console.log('calc[target]: ', calc[target])
    console.groupEnd()
    console.log(' ')

    setReinforceIndex(() => {
      return target
    })

    // 강화를 했다.
    setIsEnchant(() => {
      console.log('※ target > 0 ? true: false: ', target > 0 ? true : false)
      if (target > 0) {
        console.log('※ 강화 완료')
      } else {
        console.log('※ 강화를 +0으로 되돌림')
      }
      return target > 0 ? true : false
    })

    // 강화를 했다. 강화 데미지 적용
    setEnchantPower(() => {
      return calc[target]
    })

    // 최종 대미지를 노출.
    setShowPower(() => {
      return calc[target]
    })
  }
  const changeBarrel = (event: any) => {}
  const changeSight = (event: any) => {}
  const changeHandle = (event: any) => {}

  return (
    <>
      <br />
      <Styled.list style={style}>
        <Item
          attributes={{
            price: data.price,
            type: data.type,
            grade: data.grade,
            power: showPower !== 0 ? showPower : basePower,
            critical: data.critical,
            hit: data.hit,
            shoot: data.shoot,
            weight: data.weight,
            speed: data.speed,
            size: data.size
          }}
        />
      </Styled.list>
      {/* <Hgroup attributes={{ level: 3, title: '업그레이드 비용', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Tax location={location} attributes={{ price }} style={{ padding: '12px 0 0' }} /> */}
      <Hgroup attributes={{ level: 3, title: '업그레이드 단계', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Smelt
        attributes={{
          handler: {
            body: changeBody,
            barrel: changeBarrel,
            sight: changeSight,
            handle: changeHandle
          }
        }}
        style={{ padding: '12px 0 0' }}
      />
      <Hgroup attributes={{ level: 3, title: '강화 단계', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Enchant
        attributes={{
          power: data.power,
          handler: {
            body: changeEnchant
          }
        }}
        style={{ padding: '12px 0 0' }}
      />
    </>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
