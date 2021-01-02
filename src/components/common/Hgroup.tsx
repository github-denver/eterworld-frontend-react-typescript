import React, { useMemo } from 'react'

import { Attributes, hn } from '@/interfaces/hgroup.interfaces'

const Heading = React.memo(function Heading({ attributes, children }: Attributes) {
  console.log('')
  console.log('const Heading = React.memo(function Heading({ attributes, children }: Attributes) { .. }')

  const { level, title } = attributes

  const Tag = `h${level}` as hn

  // return <Tag className="title_hgroup">{children}</Tag>
  return <Tag className="title_hgroup">{title}</Tag>
})

function Hgroup({ attributes }: Attributes) {
  console.log('')
  console.log('function Hgroup({ attributes }: Attributes) { .. }')

  const assignment = useMemo(() => {
    console.log('const assignment = useMemo(() => { .. }')

    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { level, title, invisible } = useMemo(() => {
    console.log('const { level, title, invisible } = useMemo(() => { .. }')

    return assignment
  }, [assignment])

  return (
    <>
      <div className={!invisible ? 'hgroup' : 'hgroup invisible'}>
        <Heading attributes={{ level: level, title: title }} />
      </div>
    </>
  )
}

const defaultProps = {
  attributes: {
    level: 2,
    invisible: true
  }
}

export default React.memo(Hgroup)
