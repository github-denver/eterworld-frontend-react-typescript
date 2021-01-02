import React from 'react'
// import styled from 'styled-components'

// const Choice = styled.div``

function Result() {
  return (
    <>
      <ul className="list_choice type_grade">
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade1" className="input_choice" />
            <label htmlFor="grade1" className="label_choice">
              1등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade2" className="input_choice" />
            <label htmlFor="grade2" className="label_choice">
              2등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade3" className="input_choice" />
            <label htmlFor="grade3" className="label_choice">
              3등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade4" className="input_choice" />
            <label htmlFor="grade4" className="label_choice">
              4등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade5" className="input_choice" />
            <label htmlFor="grade5" className="label_choice">
              5등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade6" className="input_choice" />
            <label htmlFor="grade6" className="label_choice">
              6등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade7" className="input_choice" />
            <label htmlFor="grade7" className="label_choice">
              7등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade8" className="input_choice" />
            <label htmlFor="grade8" className="label_choice">
              8등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade9" className="input_choice" />
            <label htmlFor="grade9" className="label_choice">
              9등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade10" className="input_choice" />
            <label htmlFor="grade10" className="label_choice">
              10등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade11" className="input_choice" />
            <label htmlFor="grade11" className="label_choice">
              11등급
            </label>
          </span>
        </li>
        <li>
          <span className="box_choice">
            <input type="radio" name="grade" id="grade12" className="input_choice" />
            <label htmlFor="grade12" className="label_choice">
              12등급
            </label>
          </span>
        </li>
      </ul>
    </>
  )
}

export default Result
