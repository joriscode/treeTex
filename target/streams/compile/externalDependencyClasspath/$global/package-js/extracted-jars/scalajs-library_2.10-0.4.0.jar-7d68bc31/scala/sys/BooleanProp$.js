/** @constructor */
ScalaJS.c.scala_sys_BooleanProp$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_sys_BooleanProp$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_BooleanProp$.prototype.constructor = ScalaJS.c.scala_sys_BooleanProp$;
ScalaJS.c.scala_sys_BooleanProp$.prototype.valueIsTrue__T__Lscala_sys_BooleanProp = (function(key) {
  return new ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl().init___T__Lscala_Function1(key, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(x$1), "true"))
    })
  })()))
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.keyExists__T__Lscala_sys_BooleanProp = (function(key) {
  return new ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl().init___T__Lscala_Function1(key, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.bZ(true)
    })
  })()))
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.constant__T__Z__Lscala_sys_BooleanProp = (function(key, isOn) {
  return new ScalaJS.c.scala_sys_BooleanProp$ConstantImpl().init___T__Z(key, isOn)
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.booleanPropAsBoolean__Lscala_sys_BooleanProp__Z = (function(b) {
  return b.value__Z()
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.booleanPropAsBoolean__Lscala_sys_BooleanProp__ = (function(b) {
  return ScalaJS.bZ(this.booleanPropAsBoolean__Lscala_sys_BooleanProp__Z(b))
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.constant__T__Z__ = (function(key, isOn) {
  return this.constant__T__Z__Lscala_sys_BooleanProp(key, isOn)
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.keyExists__T__ = (function(key$2) {
  return this.keyExists__T__Lscala_sys_BooleanProp(key$2)
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.valueIsTrue__T__ = (function(key$3) {
  return this.valueIsTrue__T__Lscala_sys_BooleanProp(key$3)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_BooleanProp$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_BooleanProp$.prototype = ScalaJS.c.scala_sys_BooleanProp$.prototype;
ScalaJS.is.scala_sys_BooleanProp$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_BooleanProp$)))
});
ScalaJS.as.scala_sys_BooleanProp$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_BooleanProp$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.BooleanProp")
  }
});
ScalaJS.isArrayOf.scala_sys_BooleanProp$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_BooleanProp$)))
});
ScalaJS.asArrayOf.scala_sys_BooleanProp$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_BooleanProp$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.BooleanProp;", depth)
  }
});
ScalaJS.data.scala_sys_BooleanProp$ = new ScalaJS.ClassTypeData({
  scala_sys_BooleanProp$: 0
}, false, "scala.sys.BooleanProp$", ScalaJS.data.java_lang_Object, {
  scala_sys_BooleanProp$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_BooleanProp$.prototype.$classData = ScalaJS.data.scala_sys_BooleanProp$;
ScalaJS.moduleInstances.scala_sys_BooleanProp = undefined;
ScalaJS.modules.scala_sys_BooleanProp = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_BooleanProp)) {
    ScalaJS.moduleInstances.scala_sys_BooleanProp = new ScalaJS.c.scala_sys_BooleanProp$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_BooleanProp
});
//@ sourceMappingURL=BooleanProp$.js.map
