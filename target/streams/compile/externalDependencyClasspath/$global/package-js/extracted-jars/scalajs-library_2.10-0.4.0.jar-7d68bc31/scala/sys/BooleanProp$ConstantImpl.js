/** @constructor */
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.value$1 = false;
  this.isSet$1 = false;
  this.clear$1 = null;
  this.enable$1 = null;
  this.disable$1 = null;
  this.toggle$1 = null
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.constructor = ScalaJS.c.scala_sys_BooleanProp$ConstantImpl;
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.key__T = (function() {
  return this.key$1
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.value__Z = (function() {
  return this.value$1
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.isSet__Z = (function() {
  return this.isSet$1
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.set__T__T = (function(newValue) {
  return ("" + ScalaJS.bZ(this.value__Z()))
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.setValue__O__Z = (function(newValue) {
  return this.value__Z()
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.get__T = (function() {
  return ("" + ScalaJS.bZ(this.value__Z()))
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.clear__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.enable__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.disable__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.toggle__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.option__Lscala_Option = (function() {
  if (this.isSet__Z()) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bZ(this.value__Z()))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.zero__Z = (function() {
  return false
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.zero__O = (function() {
  return ScalaJS.bZ(this.zero__Z())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.setValue__O__O = (function(value) {
  return ScalaJS.bZ(this.setValue__O__Z(value))
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.value__O = (function() {
  return ScalaJS.bZ(this.value__Z())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.init___T__Z = (function(key, value) {
  this.key$1 = key;
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.isSet$1 = value;
  this.clear$1 = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.enable$1 = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.disable$1 = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.toggle$1 = ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.zero__ = (function() {
  return ScalaJS.bZ(this.zero__Z())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.option__ = (function() {
  return this.option__Lscala_Option()
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.toggle__ = (function() {
  return ScalaJS.bV(this.toggle__V())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.disable__ = (function() {
  return ScalaJS.bV(this.disable__V())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.enable__ = (function() {
  return ScalaJS.bV(this.enable__V())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.get__ = (function() {
  return this.get__T()
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.setValue__O__ = (function(newValue) {
  return ScalaJS.bZ(this.setValue__O__Z(newValue))
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.set__T__ = (function(newValue$2) {
  return this.set__T__T(newValue$2)
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.isSet__ = (function() {
  return ScalaJS.bZ(this.isSet__Z())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.value__ = (function() {
  return ScalaJS.bZ(this.value__Z())
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.key__ = (function() {
  return this.key__T()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_BooleanProp$ConstantImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_BooleanProp$ConstantImpl.prototype = ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype;
ScalaJS.is.scala_sys_BooleanProp$ConstantImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_BooleanProp$ConstantImpl)))
});
ScalaJS.as.scala_sys_BooleanProp$ConstantImpl = (function(obj) {
  if ((ScalaJS.is.scala_sys_BooleanProp$ConstantImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.BooleanProp$ConstantImpl")
  }
});
ScalaJS.isArrayOf.scala_sys_BooleanProp$ConstantImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_BooleanProp$ConstantImpl)))
});
ScalaJS.asArrayOf.scala_sys_BooleanProp$ConstantImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_BooleanProp$ConstantImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.BooleanProp$ConstantImpl;", depth)
  }
});
ScalaJS.data.scala_sys_BooleanProp$ConstantImpl = new ScalaJS.ClassTypeData({
  scala_sys_BooleanProp$ConstantImpl: 0
}, false, "scala.sys.BooleanProp$ConstantImpl", ScalaJS.data.java_lang_Object, {
  scala_sys_BooleanProp$ConstantImpl: 1,
  scala_sys_BooleanProp: 1,
  scala_sys_Prop: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_BooleanProp$ConstantImpl.prototype.$classData = ScalaJS.data.scala_sys_BooleanProp$ConstantImpl;
//@ sourceMappingURL=BooleanProp$ConstantImpl.js.map
