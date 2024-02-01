// TODO: 目前未开展（按钮级别的验权）


// import React, { forwardRef } from 'react'
// import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

// type Ref =  TouchableOpacity['refs']

// const TounchOpcityAgain: typeof TouchableOpacity = forwardRef((props,ref) => {

//   const children = props.children
//   const p = {  };

//   const wrapper = (fn) => {
//     if (isLogin) {
//       fn()
//     }
//   }

//   for (const key in props) {
//     if (typeof props[key] === 'function') {
//       p[key] = wrapper(props[key]);
//     }
//     if (key === 'chilren') continue;
//     p[key] = props[key];
//   }

//   const handleClick = () => {
//     if(isLogin) {
//       onPress()
//     }else {
//       // TODO: 跳转
//     }
//   }
//   return (
//     <TouchableOpacity ref={ref} onPress={handleClick} {...props} >
//       {children}
//     </TouchableOpacity>
//   )
// }) as any;

// export default TounchOpcityAgain
