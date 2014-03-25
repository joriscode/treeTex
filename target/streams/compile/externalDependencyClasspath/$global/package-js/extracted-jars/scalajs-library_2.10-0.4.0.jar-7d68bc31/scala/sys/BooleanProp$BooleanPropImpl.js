/** @constructor */
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl = (function() {
  ScalaJS.c.scala_sys_PropImpl.call(this)
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype = new ScalaJS.inheritable.scala_sys_PropImpl();
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.constructor = ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl;
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.setValue__O__Z = (function(newValue) {
  var x1 = newValue;
  if (ScalaJS.is.java_lang_Boolean(x1)) {
    var x2 = ScalaJS.uZ(x1);
    if ((!x2)) {
      var old = ScalaJS.uZ(this.value__O());
      this.clear__V();
      return old
    }
  };
  return ScalaJS.uZ(ScalaJS.c.scala_sys_PropImpl.prototype.setValue__O__O.call(this, newValue))
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.enable__V = (function() {
  this.setValue__O__Z(ScalaJS.bZ(true))
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.disable__V = (function() {
  this.clear__V()
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.toggle__V = (function() {
  if (ScalaJS.uZ(this.value__O())) {
    this.disable__V()
  } else {
    this.enable__V()
  }
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.value__Z = (function() {
  return ScalaJS.uZ(this.value__O())
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.setValue__O__O = (function(newValue) {
  return ScalaJS.bZ(this.setValue__O__Z(newValue))
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.toggle__ = (function() {
  return ScalaJS.bV(this.toggle__V())
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.disable__ = (function() {
  return ScalaJS.bV(this.disable__V())
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.enable__ = (function() {
  return ScalaJS.bV(this.enable__V())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_BooleanProp$BooleanPropImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_BooleanProp$BooleanPropImpl.prototype = ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype;
ScalaJS.is.scala_sys_BooleanProp$BooleanPropImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_BooleanProp$BooleanPropImpl)))
});
ScalaJS.as.scala_sys_BooleanProp$BooleanPropImpl = (function(obj) {
  if ((ScalaJS.is.scala_sys_BooleanProp$BooleanPropImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.BooleanProp$BooleanPropImpl")
  }
});
ScalaJS.isArrayOf.scala_sys_BooleanProp$BooleanPropImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_BooleanProp$BooleanPropImpl)))
});
ScalaJS.asArrayOf.scala_sys_BooleanProp$BooleanPropImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_BooleanProp$BooleanPropImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.BooleanProp$BooleanPropImpl;", depth)
  }
});
ScalaJS.data.scala_sys_BooleanProp$BooleanPropImpl = new ScalaJS.ClassTypeData({
  scala_sys_BooleanProp$BooleanPropImpl: 0
}, false, "scala.sys.BooleanProp$BooleanPropImpl", ScalaJS.data.scala_sys_PropImpl, {
  scala_sys_BooleanProp$BooleanPropImpl: 1,
  scala_sys_BooleanProp: 1,
  scala_sys_PropImpl: 1,
  scala_sys_Prop: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_BooleanProp$BooleanPropImpl.prototype.$classData = ScalaJS.data.scala_sys_BooleanProp$BooleanPropImpl;
//@ sourceMappingURL=BooleanProp$BooleanPropImpl.js.map
