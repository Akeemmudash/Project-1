import { Transition } from "react-transition-group";
import { useRef } from "react";
import { useState } from "react";
const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Fade({ in: inProp }) {
  // const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );
}
export default function Shop() {
  const [inProps, setInProp] = useState(false);
  function test() {
    setInProp((Inprop) => !Inprop);
  }

  return (
    <>
      <Fade in={inProps} />
      <button onClick={test}>start Animation</button>
    </>
  );
}
