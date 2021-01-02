import React from 'react'
// import { Link } from 'react-router-dom'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Horizontal from '@/components/common/Horizontal'

function Read() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <section className="container">
          <Hgroup attributes={{ title: '본문' }} />

          <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} />
          <Horizontal />

          <strong>[CL] Gaia Rifle 정보를 확인할 수 있습니다.</strong>
          <ul className="list_attribute">
            <li>
              <div className="group_half">
                <div className="inner_half">
                  <strong className="title_attribute">
                    <div className="outer_cell">
                      <div className="inner_cell">가격</div>
                    </div>
                  </strong>
                  <div className="contents_attribute">
                    <p className="text_attribute">500,000,000원</p>
                  </div>
                </div>

                <div className="inner_half">
                  <strong className="title_attribute">
                    <div className="outer_cell">
                      <div className="inner_cell">탄착률</div>
                    </div>
                  </strong>
                  <div className="contents_attribute">
                    <p className="text_attribute">20%</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <Hgroup attributes={{ level: 3, title: '업그레이드 비용', invisible: false }} />
          <ul className="list_attribute">
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">세금</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">
                    <ul className="list_choice type_grade">
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            -5%
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            0%
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            +5%
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            -5%
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            0%
                          </label>
                        </span>
                      </li>
                      <li>
                        <span className="box_choice">
                          <input type="radio" name="grade" id="grade1" className="input_choice" />
                          <label htmlFor="grade1" className="label_choice">
                            +5%
                          </label>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">초보</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <em className="emphasis_price">87,120,000</em>원
                <ul className="list_local">
                  <li>앱솔루트 업그레이드 비용 261,360,000원</li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">숙련</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <em className="emphasis_price">87,120,000</em>원
                <ul className="list_local">
                  <li>앱솔루트 업그레이드 비용 261,360,000원</li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">전문</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <em className="emphasis_price">87,120,000</em>원
                <ul className="list_local">
                  <li>앱솔루트 업그레이드 비용 261,360,000원</li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">
                    <ul className="list_local">
                      <li>장인</li>
                      <li>명인</li>
                      <li>O.T.</li>
                    </ul>
                  </div>
                </div>
              </strong>
              <div className="contents_attribute">
                <em className="emphasis_price">87,120,000</em>원
                <ul className="list_local">
                  <li>앱솔루트 업그레이드 불가능</li>
                </ul>
              </div>
            </li>
          </ul>

          <Hgroup attributes={{ level: 3, title: '업그레이드 단계', invisible: false }} />
          <ul className="list_attribute">
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">몸체</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        기본
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        초보
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        숙련
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        전문
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        장인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        명인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        O.T.
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">총열</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        기본
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        초보
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        숙련
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        전문
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        장인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        명인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        O.T.
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">조준경</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        기본
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        초보
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        숙련
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        전문
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        장인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        명인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        O.T.
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">손잡이</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        기본
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        초보
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        숙련
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        전문
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        장인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        명인
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        O.T.
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <Hgroup attributes={{ level: 3, title: '강화', invisible: false }} />
          <ul className="list_attribute">
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">일반</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +0
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +1
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +2
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +3
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +4
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +5
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +6
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +7
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +8
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        +9
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong className="title_attribute">
                <div className="outer_cell">
                  <div className="inner_cell">MAX</div>
                </div>
              </strong>
              <div className="contents_attribute">
                <ul className="list_choice type_grade">
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +0
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +1
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +2
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +3
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +4
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +5
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +6
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +7
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +8
                      </label>
                    </span>
                  </li>
                  <li>
                    <span className="box_choice">
                      <input type="radio" name="grade" id="grade1" className="input_choice" />
                      <label htmlFor="grade1" className="label_choice">
                        MAX +9
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Read
