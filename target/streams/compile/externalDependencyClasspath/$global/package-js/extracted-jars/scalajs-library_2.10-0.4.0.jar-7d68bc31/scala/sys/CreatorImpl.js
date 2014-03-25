/** @constructor */
ScalaJS.c.scala_sys_CreatorImpl = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1 = null
});
ScalaJS.c.scala_sys_CreatorImpl.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_CreatorImpl.prototype.constructor = ScalaJS.c.scala_sys_CreatorImpl;
ScalaJS.c.scala_sys_CreatorImpl.prototype.apply__T__Lscala_sys_Prop = (function(key) {
  return new ScalaJS.c.scala_sys_PropImpl().init___T__Lscala_Function1(key, this.f$1)
});
ScalaJS.c.scala_sys_CreatorImpl.prototype.init___Lscala_Function1 = (function(f) {
  this.f$1 = f;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_CreatorImpl.prototype.apply__T__ = (function(key) {
  return this.apply__T__Lscala_sys_Prop(key)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_CreatorImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_CreatorImpl.prototype = ScalaJS.c.scala_sys_CreatorImpl.prototype;
ScalaJS.is.scala_sys_CreatorImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_CreatorImpl)))
});
ScalaJS.as.scala_sys_CreatorImpl = (function(obj) {
  if ((ScalaJS.is.scala_sys_CreatorImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.CreatorImpl")
  }
});
ScalaJS.isArrayOf.scala_sys_CreatorImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_CreatorImpl)))
});
ScalaJS.asArrayOf.scala_sys_CreatorImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_CreatorImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.CreatorImpl;", depth)
  }
});
ScalaJS.data.scala_sys_CreatorImpl = new ScalaJS.ClassTypeData({
  scala_sys_CreatorImpl: 0
}, false, "scala.sys.CreatorImpl", ScalaJS.data.java_lang_Object, {
  scala_sys_CreatorImpl: 1,
  scala_sys_Prop$Creator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_CreatorImpl.prototype.$classData = ScalaJS.data.scala_sys_CreatorImpl;
//@ sourceMappingURL=CreatorImpl.js.map
