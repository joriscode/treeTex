/** @constructor */
ScalaJS.c.java_lang_Boolean = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = false
});
ScalaJS.c.java_lang_Boolean.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Boolean.prototype.constructor = ScalaJS.c.java_lang_Boolean;
ScalaJS.c.java_lang_Boolean.prototype.value__p1__Z = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Boolean.prototype.booleanValue__Z = (function() {
  return this.value__p1__Z()
});
ScalaJS.c.java_lang_Boolean.prototype.equals__O__Z = (function(that) {
  return (ScalaJS.is.java_lang_Boolean(that) && (this.value__p1__Z() === ScalaJS.as.java_lang_Boolean(that).value__p1__Z()))
});
ScalaJS.c.java_lang_Boolean.prototype.toString__T = (function() {
  if (this.value__p1__Z()) {
    return "true"
  } else {
    return "false"
  }
});
ScalaJS.c.java_lang_Boolean.prototype.hashCode__I = (function() {
  if (this.value__p1__Z()) {
    return 1231
  } else {
    return 1237
  }
});
ScalaJS.c.java_lang_Boolean.prototype.unary$und$bang__Z = (function() {
  return (!this.value__p1__Z())
});
ScalaJS.c.java_lang_Boolean.prototype.$$eq$eq__Z__Z = (function(x) {
  return (this.value__p1__Z() === x)
});
ScalaJS.c.java_lang_Boolean.prototype.$$bang$eq__Z__Z = (function(x) {
  return (this.value__p1__Z() !== x)
});
ScalaJS.c.java_lang_Boolean.prototype.$$bar$bar__Z__Z = (function(x) {
  return (this.value__p1__Z() || x)
});
ScalaJS.c.java_lang_Boolean.prototype.$$amp$amp__Z__Z = (function(x) {
  return (this.value__p1__Z() && x)
});
ScalaJS.c.java_lang_Boolean.prototype.$$bar__Z__Z = (function(x) {
  return (!(!(this.value__p1__Z() | x)))
});
ScalaJS.c.java_lang_Boolean.prototype.$$amp__Z__Z = (function(x) {
  return (!(!(this.value__p1__Z() & x)))
});
ScalaJS.c.java_lang_Boolean.prototype.$$up__Z__Z = (function(x) {
  return (this.value__p1__Z() ^ x)
});
ScalaJS.c.java_lang_Boolean.prototype.init___Z = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_Boolean.prototype.$$up__Z__ = (function(x) {
  return ScalaJS.bZ(this.$$up__Z__Z(x))
});
ScalaJS.c.java_lang_Boolean.prototype.$$amp__Z__ = (function(x$2) {
  return ScalaJS.bZ(this.$$amp__Z__Z(x$2))
});
ScalaJS.c.java_lang_Boolean.prototype.$$bar__Z__ = (function(x$3) {
  return ScalaJS.bZ(this.$$bar__Z__Z(x$3))
});
ScalaJS.c.java_lang_Boolean.prototype.$$amp$amp__Z__ = (function(x$4) {
  return ScalaJS.bZ(this.$$amp$amp__Z__Z(x$4))
});
ScalaJS.c.java_lang_Boolean.prototype.$$bar$bar__Z__ = (function(x$5) {
  return ScalaJS.bZ(this.$$bar$bar__Z__Z(x$5))
});
ScalaJS.c.java_lang_Boolean.prototype.$$bang$eq__Z__ = (function(x$6) {
  return ScalaJS.bZ(this.$$bang$eq__Z__Z(x$6))
});
ScalaJS.c.java_lang_Boolean.prototype.$$eq$eq__Z__ = (function(x$7) {
  return ScalaJS.bZ(this.$$eq$eq__Z__Z(x$7))
});
ScalaJS.c.java_lang_Boolean.prototype.unary$und$bang__ = (function() {
  return ScalaJS.bZ(this.unary$und$bang__Z())
});
ScalaJS.c.java_lang_Boolean.prototype.booleanValue__ = (function() {
  return ScalaJS.bZ(this.booleanValue__Z())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Boolean = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Boolean.prototype = ScalaJS.c.java_lang_Boolean.prototype;
ScalaJS.is.java_lang_Boolean = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Boolean)))
});
ScalaJS.as.java_lang_Boolean = (function(obj) {
  if ((ScalaJS.is.java_lang_Boolean(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Boolean")
  }
});
ScalaJS.isArrayOf.java_lang_Boolean = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Boolean)))
});
ScalaJS.asArrayOf.java_lang_Boolean = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Boolean(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Boolean;", depth)
  }
});
ScalaJS.data.java_lang_Boolean = new ScalaJS.ClassTypeData({
  java_lang_Boolean: 0
}, false, "java.lang.Boolean", ScalaJS.data.java_lang_Object, {
  java_lang_Boolean: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Boolean.prototype.$classData = ScalaJS.data.java_lang_Boolean;
//@ sourceMappingURL=Boolean.js.map
