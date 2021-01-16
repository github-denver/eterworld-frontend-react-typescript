import React, { useState, useMemo, ReactNode, useCallback } from 'react'
import styled, { css } from 'styled-components'

import Hgroup from '@/components/common/Hgroup'
import Tax from '@/components/common/Tax'
import Smelt from '@/components/common/Smelt'
import Enchant from '@/components/common/Enchant'

interface Attributes {
  [key: string]: any
  children?: ReactNode
}

interface State {
  list: any
  item: any
  title: any
  content: any
}

interface Props {
  styles: boolean
}

const Styled: State = {
  list: styled.ul`
    font-size: 0;

    .outer_cell {
      width: 100%;
      height: 100%;
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
      background-color: #f2f2f2;
      content: '';
    }

    .inner_half .title {
      width: 60%;
    }

    .inner_half .content {
      width: 40%;
    }

    /* ${(props: Props) => {
      return props.styles && css``
    }} */
  `,
  item: styled.li`
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 30%;
      border-radius: 12px;
      background-color: #f2f2f2;
      content: '';
    }

    & + & {
      margin-top: 12px;
    }
  `,
  title: styled.strong`
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 30%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
  `,
  content: styled.div`
    display: inline-block;
    width: 70%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 12px;
    vertical-align: middle;
    word-break: keep-all;
  `
}

const Item = React.memo(function Item({ attributes }: Attributes) {
  const { price, type, grade, power, critical, hit, shoot, weight, speed, size } = attributes

  return (
    <>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">가격</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{price}</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">분류</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{type}</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">등급</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{grade}</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">공격력</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{power}</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">치명타</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{critical}</p>
        </Styled.content>
      </Styled.item>

      <Styled.item>
        <div className="group_half">
          <div className="inner_half">
            <Styled.title className="title">
              <div className="outer_cell">
                <div className="inner_cell">명중률</div>
              </div>
            </Styled.title>

            <Styled.content className="content">
              <p>{hit}%</p>
            </Styled.content>
          </div>

          <div className="inner_half">
            <Styled.title className="title">
              <div className="outer_cell">
                <div className="inner_cell">탄착률</div>
              </div>
            </Styled.title>

            <Styled.content className="content">
              <p>{shoot}%</p>
            </Styled.content>
          </div>
        </div>
      </Styled.item>

      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">무게</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{weight}</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">속도</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{speed}발/1분</p>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">크기</div>
          </div>
        </Styled.title>

        <Styled.content>
          <p>{size}</p>
        </Styled.content>
      </Styled.item>
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
      { sequence: 1, text: '+0', rate: 0, checked: true },
      { sequence: 2, text: '+1', rate: 1, checked: false },
      { sequence: 3, text: '+2', rate: 2, checked: false },
      { sequence: 4, text: '+3', rate: 3, checked: false },
      { sequence: 5, text: '+4', rate: 4, checked: false },
      { sequence: 6, text: '+5', rate: 5, checked: false },
      { sequence: 7, text: '+6', rate: 6, checked: false },
      { sequence: 8, text: '+7', rate: 7, checked: false },
      { sequence: 9, text: '+8', rate: 8, checked: false },
      { sequence: 10, text: '+9', rate: 9, checked: false },
      { sequence: 11, text: 'MAX +0', rate: 1, checked: true },
      { sequence: 12, text: 'MAX +1', rate: 1, checked: false },
      { sequence: 13, text: 'MAX +2', rate: 1, checked: false },
      { sequence: 14, text: 'MAX +3', rate: 3, checked: false },
      { sequence: 15, text: 'MAX +4', rate: 3, checked: false },
      { sequence: 16, text: 'MAX +5', rate: 3, checked: false },
      { sequence: 17, text: 'MAX +6', rate: 6, checked: false },
      { sequence: 18, text: 'MAX +7', rate: 6, checked: false },
      { sequence: 19, text: 'MAX +8', rate: 6, checked: false },
      { sequence: 20, text: 'MAX +9', rate: 10, checked: false }
    ]

    let reinforceNormal: any = []
    reinforceNormal[0] = power

    for (let i = 0; i < reinforce.length; i++) {
      reinforceNormal.push(Math.round(reinforceNormal[i] * (reinforce[i].rate / 100 + 1)))
    }

    reinforceNormal.splice(0, 1)

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
    let calc = 0
    if (isEnchant === false) {
      calc = calculation(basePower, event.target.value)
    } else {
      calc = calculation(basePower, event.target.value)

      let calc2 = changeReinforce(calc, reinforceIndex)

      calc = calc2[reinforceIndex]
    }

    setTestIndex(() => {
      return event.target.value
    })

    // 몸체 업그레이드 했다.
    setIsUpgrade(() => {
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

  const changeEnchant = (event: any) => {
    let calc: any = 0
    if (isUpgrade === false) {
      calc = changeReinforce(basePower, event.target.value - 1)
    } else {
      let calc2 = calculation(basePower, test)

      calc = changeReinforce(calc2, event.target.value - 1)
    }

    setReinforceIndex(() => {
      return event.target.value - 1
    })

    // 강화를 했다.
    setIsEnchant(() => {
      return event.target.value - 1 > 0 ? true : false
    })

    // 강화를 했다. 강화 데미지 적용
    setEnchantPower(() => {
      return calc[event.target.value - 1]
    })

    // 최종 대미지를 노출.
    setShowPower(() => {
      return calc[event.target.value - 1]
    })
  }
  const changeBarrel = (event: any) => {}
  const changeSight = (event: any) => {}
  const changeHandle = (event: any) => {}

  return (
    <>
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

      <Hgroup attributes={{ level: 3, title: '업그레이드 비용', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Tax location={location} attributes={{ price: data.price }} style={{ padding: '12px 0 0' }} />

      <Hgroup attributes={{ level: 3, title: '업그레이드 단계', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Smelt
        attributes={{
          onChange: {
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
          onChange: {
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
