import React, { Component, CSSProperties } from 'react';

type ButtonProps = {
  text: string,
  disable?: boolean,
  onClick: Function
}

const css: CSSProperties = {
  padding: '5px 9px',
  border: '0',
  borderRadius: '3px',
  fontSize: 16,
  cursor: 'pointer',
  color: '#fafafa',
  outline: 'none',
}

export default function Button(props: ButtonProps) {
  return (
    <button style={{ backgroundColor: props.disable ? '#cdcdcd' : '#2196F3', ...css }} onClick={(e) => props.onClick(e)}>
      {props.text}
    </button>
  )
}