<h1>Learn About useRef hook</h1>

some points to be remembered

<ol>
<li> useRef does not trigger re-render, so it should not use as alternative to useState/useReducer </li>
<li> useRef instance can be used in jsx element like this and it can access the element value with .current property.
 ex:
 const inputref = useRef()
  <input ref={inputref}/>
</li>
</ol>

<!-- details -->

useRef(): React.MutableRefObject<undefined>
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

@version — 16.8.0

@see — https://react.dev/reference/react/useRef
