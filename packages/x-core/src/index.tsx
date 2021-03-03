
import * as React from 'react';

// awesome Function
export function awesomeFn() {
  return "Hello";
}


// UIExample function
export interface IAppProps {
  text?: string
}

export function UIExample(props: IAppProps) {
  return (
    <div>
      Hello! {props.text}
    </div>
  );
}

